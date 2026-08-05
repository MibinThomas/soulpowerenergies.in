"use client";

import { useState } from "react";
import Link from "next/link";
import { calculatorConfig, calculateSolarEstimate } from "@/config/calculator";
import { formatCurrency, formatNumber } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Calculator, ArrowRight, Info, AlertTriangle } from "lucide-react";

export function SolarEstimator() {
  const [monthlyBill, setMonthlyBill] = useState<number>(4500);
  const [propertyType, setPropertyType] = useState<"residential" | "commercial" | "industrial">("residential");
  const [roofAreaSqFt, setRoofAreaSqFt] = useState<number>(600);

  const result = calculateSolarEstimate({
    monthlyBill,
    propertyType,
    roofAreaSqFt,
  });

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-emerald-50/40 border-y border-slate-200" id="estimator">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <Badge variant="gold">Interactive Lead Calculator</Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
            Solar Savings & Capacity Estimator
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Estimate your property&apos;s solar power system size, annual electricity generation, and indicative financial savings.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Input Controls Card */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
              <div className="p-2.5 rounded-xl bg-amber-100 text-amber-900">
                <Calculator className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 font-heading">1. Input Your Property Details</h3>
                <p className="text-xs text-slate-500">Adjust inputs to calculate estimated capacity</p>
              </div>
            </div>

            {/* Property Type Selector */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700">Property Category</label>
              <div className="grid grid-cols-3 gap-2">
                {(["residential", "commercial", "industrial"] as const).map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setPropertyType(type)}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold capitalize transition-all border ${
                      propertyType === type
                        ? "bg-slate-900 text-white border-slate-900 shadow-xs"
                        : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Monthly Electricity Bill Slider & Input */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-bold">
                <span className="uppercase tracking-wider text-slate-700">Avg. Monthly Bill (₹)</span>
                <span className="text-base text-emerald-800 font-extrabold">{formatCurrency(monthlyBill)}</span>
              </div>
              <input
                type="range"
                min={1000}
                max={50000}
                step={500}
                value={monthlyBill}
                onChange={(e) => setMonthlyBill(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
              <div className="flex justify-between text-[11px] text-slate-400 font-medium">
                <span>₹1,000</span>
                <span>₹25,000</span>
                <span>₹50,000+</span>
              </div>
            </div>

            {/* Rooftop Area Slider & Input */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-bold">
                <span className="uppercase tracking-wider text-slate-700">Available Rooftop Area</span>
                <span className="text-base text-emerald-800 font-extrabold">{roofAreaSqFt} Sq. Ft.</span>
              </div>
              <input
                type="range"
                min={100}
                max={5000}
                step={50}
                value={roofAreaSqFt}
                onChange={(e) => setRoofAreaSqFt(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
              />
              <div className="flex justify-between text-[11px] text-slate-400 font-medium">
                <span>100 sq ft</span>
                <span>2,500 sq ft</span>
                <span>5,000 sq ft</span>
              </div>
            </div>

            {/* Area Sufficiency Check */}
            {!result.isAreaSufficient && (
              <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-start gap-2.5">
                <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold">Roof Space Notice: </span>
                  Estimated space required for recommended capacity is ~{Math.round(result.roofAreaRequiredSqFt)} sq. ft. You can select a smaller system size upon site review.
                </div>
              </div>
            )}
          </div>

          {/* Results Output Card */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-2xl space-y-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Preliminary Estimate</span>
                  <h3 className="text-xl font-extrabold text-white font-heading">Calculated Output Summary</h3>
                </div>
                <Badge variant="green">Indicative</Badge>
              </div>

              {/* Output Metric Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                {/* Capacity */}
                <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-1">
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Suggested Capacity</span>
                  <p className="text-2xl font-extrabold text-amber-400 font-heading">
                    {result.recommendedKwMin} - {result.recommendedKwMax} <span className="text-sm font-normal text-slate-300">kW</span>
                  </p>
                  <p className="text-[11px] text-slate-400">Recommended Rooftop Array</p>
                </div>

                {/* Annual Generation */}
                <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-1">
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Est. Annual Generation</span>
                  <p className="text-2xl font-extrabold text-emerald-400 font-heading">
                    {formatNumber(result.annualGenerationKwhMin)} - {formatNumber(result.annualGenerationKwhMax)} <span className="text-sm font-normal text-slate-300">kWh</span>
                  </p>
                  <p className="text-[11px] text-slate-400">Clean Units Produced / Year</p>
                </div>

                {/* Annual Savings */}
                <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-1 sm:col-span-2">
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Estimated Annual Savings</span>
                  <p className="text-3xl font-black text-amber-400 font-heading">
                    {formatCurrency(result.annualSavingsMin)} - {formatCurrency(result.annualSavingsMax)} <span className="text-xs font-normal text-slate-300">/ year</span>
                  </p>
                  <p className="text-[11px] text-emerald-300 font-medium">
                    Estimated payback period: ~{result.paybackYearsMin} to {result.paybackYearsMax} years
                  </p>
                </div>
              </div>
            </div>

            {/* Direct CTA */}
            <div className="space-y-4 pt-4 border-t border-slate-800">
              <Link href={`/contact#assessment?bill=${monthlyBill}&capacity=${result.recommendedKwMin}kw`} className="block">
                <Button variant="primary" size="lg" className="w-full justify-between">
                  <span>Request Accurate Site Assessment</span>
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>

              {/* Disclaimer Notice */}
              <div className="text-[11px] text-slate-400 leading-relaxed space-y-1">
                <div className="flex items-center gap-1.5 text-amber-400 font-semibold">
                  <Info className="w-3.5 h-3.5 shrink-0" />
                  <span>Estimation Disclaimer</span>
                </div>
                <p>{calculatorConfig.disclaimer}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
