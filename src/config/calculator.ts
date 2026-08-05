export interface CalculatorConfig {
  tariffPerKwh: {
    residential: number; // Avg rate per kWh in Kerala (approx ₹7.5)
    commercial: number;  // Commercial rate per kWh (approx ₹10.5)
    industrial: number;  // Industrial rate per kWh (approx ₹9.0)
  };
  dailyGenerationPerKw: number; // kWh generated per kW capacity per day in Kerala (approx 4.0 kWh/kW/day)
  sqFtPerKw: number;            // Approx roof area needed per 1 kW system (approx 100 sq.ft)
  disclaimer: string;
  assumptionsNotes: string[];
}

export const calculatorConfig: CalculatorConfig = {
  tariffPerKwh: {
    residential: 7.5,
    commercial: 10.5,
    industrial: 9.0,
  },
  dailyGenerationPerKw: 4.0, // 4.0 kWh per kW peak per day on average in Kerala solar irradiance
  sqFtPerKw: 90,             // 90 to 100 sq ft per kW capacity

  disclaimer:
    "All figures shown are preliminary indicative estimates based on standard regional solar irradiance assumptions and average utility tariff structures in Kerala. Actual solar power generation, roof space requirement, and financial savings depend on specific site orientation, roof shade factor, local grid net-metering policies, seasonal variation, component efficiency, and a comprehensive on-ground technical site assessment by Soul Power Energies.",

  assumptionsNotes: [
    "Assumes an average annual solar generation of ~1,400 to 1,460 kWh per kW peak installed.",
    "Rooftop space requirement estimated at ~90 sq. ft. per kW capacity.",
    "Electricity savings calculated using indicative regional slab tariffs.",
  ],
};

export interface CalculationInput {
  monthlyBill: number; // In INR
  propertyType: "residential" | "commercial" | "industrial";
  roofAreaSqFt: number;
}

export interface CalculationResult {
  recommendedKwMin: number;
  recommendedKwMax: number;
  annualGenerationKwhMin: number;
  annualGenerationKwhMax: number;
  annualSavingsMin: number;
  annualSavingsMax: number;
  paybackYearsMin: number;
  paybackYearsMax: number;
  roofAreaRequiredSqFt: number;
  isAreaSufficient: boolean;
}

export function calculateSolarEstimate(input: CalculationInput): CalculationResult {
  const { monthlyBill, propertyType, roofAreaSqFt } = input;
  const tariff = calculatorConfig.tariffPerKwh[propertyType] || calculatorConfig.tariffPerKwh.residential;

  // Monthly electricity consumption in kWh
  const monthlyKwh = monthlyBill / tariff;
  const dailyKwhNeeded = monthlyKwh / 30;

  // Exact kW needed to cover load
  const exactKwNeeded = dailyKwhNeeded / calculatorConfig.dailyGenerationPerKw;

  // Determine realistic system size range
  let targetKw = Math.max(1, Math.round(exactKwNeeded));
  
  if (propertyType === "residential") {
    // Standard residential systems usually range between 3 kW to 10 kW
    targetKw = Math.min(Math.max(targetKw, 3), 15);
  } else {
    // Commercial can scale higher
    targetKw = Math.min(Math.max(targetKw, 5), 100);
  }

  const kwMin = Math.max(1, Math.floor(targetKw * 0.9));
  const kwMax = Math.ceil(targetKw * 1.1);

  // Annual generation calculations (365 days * 3.8 to 4.2 kWh/kW/day)
  const annualGenMin = Math.round(kwMin * 3.8 * 365);
  const annualGenMax = Math.round(kwMax * 4.2 * 365);

  // Annual savings (Generation * Tariff)
  const annualSavingsMin = Math.round(annualGenMin * tariff);
  const annualSavingsMax = Math.round(annualGenMax * tariff);

  // Estimated payback period (approx setup cost ~₹55,000/kW)
  const estimatedCostMin = kwMin * 52000;
  const estimatedCostMax = kwMax * 58000;
  const paybackMin = Number((estimatedCostMin / annualSavingsMax).toFixed(1));
  const paybackMax = Number((estimatedCostMax / annualSavingsMin).toFixed(1));

  // Required roof space
  const roofAreaRequiredSqFt = targetKw * calculatorConfig.sqFtPerKw;
  const isAreaSufficient = roofAreaSqFt >= roofAreaRequiredSqFt;

  return {
    recommendedKwMin: kwMin,
    recommendedKwMax: kwMax,
    annualGenerationKwhMin: annualGenMin,
    annualGenerationKwhMax: annualGenMax,
    annualSavingsMin,
    annualSavingsMax,
    paybackYearsMin: Math.max(3.2, paybackMin),
    paybackYearsMax: Math.max(4.0, paybackMax),
    roofAreaRequiredSqFt,
    isAreaSufficient,
  };
}
