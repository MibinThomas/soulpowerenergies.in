"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { calculatorConfig, calculateSolarEstimate } from "@/config/calculator";
import { formatCurrency, formatNumber } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Calculator, ArrowRight, Info, AlertTriangle, Sparkles, TrendingUp } from "lucide-react";

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
    <section className="py-20 bg-[#0C0E12] text-[#F5EFE6] relative" id="estimator">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <Badge variant="gold" className="px-3.5 py-1 nestive-pill text-[#E5BA73]">Interactive Solar Calculator</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal font-serif italic text-[#F5EFE6] tracking-tight">
            Calculate Your Solar Savings & System Size
          </h2>
          <p className="text-base text-[#EADBC8]/80 leading-relaxed">
            Estimate your property&apos;s solar power system capacity, annual green energy generation, and expected financial savings instantly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Input Controls Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 p-6 sm:p-8 rounded-3xl nestive-card border border-[#EADBC8]/20 shadow-xl space-y-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 pb-4 border-b border-[#EADBC8]/15">
                <div className="p-3 rounded-2xl bg-[#EADBC8]/10 text-[#E5BA73] border border-[#EADBC8]/20">
                  <Calculator className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#F5EFE6] font-heading">1. Property & Power Inputs</h3>
                  <p className="text-xs text-[#EADBC8]/70">Adjust sliders to calculate recommended system size</p>
                </div>
              </div>

              {/* Property Type Selector */}
              <div className="space-y-2 mt-6">
                <label className="text-xs font-bold uppercase tracking-wider text-[#EADBC8]/80">Property Category</label>
                <div className="grid grid-cols-3 gap-2">
                  {(["residential", "commercial", "industrial"] as const).map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setPropertyType(type)}
                      className={`py-2.5 px-3 rounded-xl text-xs font-bold capitalize transition-all duration-200 border ${
                        propertyType === type
                          ? "bg-[#E5BA73] text-[#0C0E12] border-[#E5BA73] font-bold shadow-md"
                          : "bg-[#EADBC8]/10 text-[#F5EFE6] border-[#EADBC8]/20 hover:bg-[#EADBC8]/20"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Monthly Electricity Bill Slider & Input */}
              <div className="space-y-3 mt-6">
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="uppercase tracking-wider text-[#EADBC8]/80">Avg. Monthly Electricity Bill</span>
                  <span className="text-base text-[#E5BA73] font-black">{formatCurrency(monthlyBill)}</span>
                </div>
                <input
                  type="range"
                  min={1000}
                  max={50000}
                  step={500}
                  value={monthlyBill}
                  onChange={(e) => setMonthlyBill(Number(e.target.value))}
                  className="w-full h-3 bg-[#EADBC8]/20 rounded-lg appearance-none cursor-pointer accent-[#E5BA73]"
                />
                <div className="flex justify-between text-[11px] text-[#EADBC8]/60 font-semibold">
                  <span>₹1,000</span>
                  <span>₹25,000</span>
                  <span>₹50,000+</span>
                </div>
              </div>

              {/* Rooftop Area Slider & Input */}
              <div className="space-y-3 mt-6">
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="uppercase tracking-wider text-[#EADBC8]/80">Available Rooftop Area</span>
                  <span className="text-base text-[#E5BA73] font-black">{roofAreaSqFt} Sq. Ft.</span>
                </div>
                <input
                  type="range"
                  min={100}
                  max={5000}
                  step={50}
                  value={roofAreaSqFt}
                  onChange={(e) => setRoofAreaSqFt(Number(e.target.value))}
                  className="w-full h-3 bg-[#EADBC8]/20 rounded-lg appearance-none cursor-pointer accent-[#E5BA73]"
                />
                <div className="flex justify-between text-[11px] text-[#EADBC8]/60 font-semibold">
                  <span>100 sq ft</span>
                  <span>2,500 sq ft</span>
                  <span>5,000 sq ft</span>
                </div>
              </div>
            </div>

            {/* Area Sufficiency Check */}
            {!result.isAreaSufficient && (
              <div className="p-4 rounded-2xl bg-[#E5BA73]/15 border border-[#E5BA73]/30 text-[#EADBC8] text-xs flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-[#E5BA73] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold">Roof Space Note: </span>
                  Estimated space required for recommended capacity is ~{Math.round(result.roofAreaRequiredSqFt)} sq. ft. Our technical team can customize module layout upon site audit.
                </div>
              </div>
            )}
          </motion.div>

          {/* Results Output Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 p-6 sm:p-8 rounded-3xl nestive-card border border-[#EADBC8]/20 text-[#F5EFE6] shadow-2xl space-y-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#EADBC8]/15">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E5BA73] uppercase tracking-wider mb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Estimated Solar Returns</span>
                  </div>
                  <h3 className="text-xl font-extrabold text-[#F5EFE6] font-heading">Calculated Output Summary</h3>
                </div>
                <Badge variant="green" className="nestive-pill text-[#E5BA73]">
                  Indicative
                </Badge>
              </div>

              {/* Output Metric Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                {/* Capacity */}
                <div className="p-4 rounded-2xl bg-[#EADBC8]/8 border border-[#EADBC8]/15 space-y-1">
                  <span className="text-[11px] font-semibold text-[#EADBC8]/70 uppercase tracking-wider">Suggested Array Capacity</span>
                  <p className="text-2xl font-black text-[#E5BA73] font-heading">
                    {result.recommendedKwMin} - {result.recommendedKwMax} <span className="text-sm font-normal text-[#EADBC8]/70">kW</span>
                  </p>
                  <p className="text-[11px] text-[#EADBC8]/60">Optimal Solar PV System</p>
                </div>

                {/* Annual Generation */}
                <div className="p-4 rounded-2xl bg-[#EADBC8]/8 border border-[#EADBC8]/15 space-y-1">
                  <span className="text-[11px] font-semibold text-[#EADBC8]/70 uppercase tracking-wider">Est. Annual Power</span>
                  <p className="text-2xl font-black text-[#E5BA73] font-heading">
                    {formatNumber(result.annualGenerationKwhMin)} - {formatNumber(result.annualGenerationKwhMax)} <span className="text-sm font-normal text-[#EADBC8]/70">kWh</span>
                  </p>
                  <p className="text-[11px] text-[#EADBC8]/60">Clean Units Generated / Year</p>
                </div>

                {/* Annual Savings */}
                <div className="p-5 rounded-2xl bg-[#EADBC8]/8 border border-[#EADBC8]/15 space-y-2 sm:col-span-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-[#EADBC8]/70 uppercase tracking-wider">Estimated Annual Savings</span>
                    <TrendingUp className="w-4 h-4 text-[#E5BA73]" />
                  </div>
                  <p className="text-3xl sm:text-4xl font-black text-[#E5BA73] font-heading">
                    {formatCurrency(result.annualSavingsMin)} - {formatCurrency(result.annualSavingsMax)} <span className="text-xs font-normal text-[#EADBC8]/70">/ year</span>
                  </p>
                  <p className="text-xs text-[#E5BA73] font-semibold">
                    Estimated payback period: ~{result.paybackYearsMin} to {result.paybackYearsMax} years (25-year panel lifecycle)
                  </p>
                </div>
              </div>
            </div>

            {/* Direct CTA */}
            <div className="space-y-4 pt-4 border-t border-[#EADBC8]/15">
              <Link href={`/contact#assessment?bill=${monthlyBill}&capacity=${result.recommendedKwMin}kw`} className="block">
                <Button variant="primary" size="lg" className="w-full justify-between font-bold rounded-xl shadow-xl">
                  <span>Lock In Accurate Site Assessment</span>
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>

              {/* Disclaimer Notice */}
              <div className="text-[11px] text-[#EADBC8]/60 leading-relaxed space-y-1">
                <div className="flex items-center gap-1.5 text-[#E5BA73] font-semibold">
                  <Info className="w-3.5 h-3.5 shrink-0" />
                  <span>Estimation Notice</span>
                </div>
                <p>{calculatorConfig.disclaimer}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

