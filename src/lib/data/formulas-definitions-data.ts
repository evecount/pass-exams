
export type Definition = {
  term: string;
  definition: string;
  category: string;
};

export type Formula = {
  name: string;
  formula: string;
  category: string;
  explanation: string;
};

export const definitions: Definition[] = [
  {
    term: "Geometric Mean vs Arithmetic Mean",
    definition: "The Arithmetic Mean is a simple average. The Geometric Mean accounts for compounding and is a more accurate measure of an investment's true historical performance over multiple periods. The Geometric Mean is always lower than the Arithmetic Mean unless all returns are equal.",
    category: "Performance Measurement (M8, RES5)"
  },
  {
    term: "Regular Investment Plan",
    definition: "A plan where a fixed percentage of salary or a fixed dollar amount is invested each month.",
    category: "Fund Types & Objectives"
  },
  {
    term: "Regional Fund",
    definition: "A fund that invests in a specific geographical group of countries (e.g., ASEAN, Emerging Europe).",
    category: "Fund Types & Objectives"
  },
  {
    term: "Absolute Return Fund (Hedge Fund)",
    definition: "A fund that aims to achieve positive returns regardless of market direction.",
    category: "Fund Types & Objectives"
  },
  {
    term: "Value Fund",
    definition: "A fund that invests in stocks considered to be undervalued or trading at a discount to their intrinsic worth.",
    category: "Fund Types & Objectives"
  },
  {
    term: "Growth Stocks",
    definition: "Companies with strong track records of rising sales and profits, expected to continue growing faster than the market.",
    category: "Fund Types & Objectives"
  },
  {
    term: "Balanced Fund",
    definition: "A fund that provides a mix of return components: dividends from stocks, interest from bonds, and capital gains from both.",
    category: "Fund Types & Objectives"
  },
  {
    term: "Feeder Fund",
    definition: "A fund that invests all or substantially all of its assets directly into an existing offshore master or parent fund.",
    category: "Fund Types & Objectives"
  },
  {
    term: "Annuity",
    definition: "A financial product that protects against longevity risk (the risk of outliving one's savings) by providing a stream of payments.",
    category: "Fund Types & Objectives"
  },
  {
    term: "Primary Market",
    definition: "The market where new issues of securities (like stocks and bonds) are sold to investors for the first time (e.g., an IPO).",
    category: "Market Operations"
  },
  {
    term: "Secondary Market",
    definition: "The 'aftermarket' where previously issued securities are traded among investors, without the issuing company's involvement.",
    category: "Market Operations"
  },
  {
    term: "Money Market",
    definition: "The market for short-term borrowing and lending, with instruments having a maturity of one year or less.",
    category: "Market Operations"
  },
  {
    term: "Capital Market",
    definition: "The market for long-term funds, with instruments having a maturity of more than one year.",
    category: "Market Operations"
  },
  {
    term: "Call Option",
    definition: "A derivative that gives the buyer the right, but not the obligation, to buy an underlying asset at a specified price.",
    category: "Derivatives"
  },
  {
    term: "Put Option",
    definition: "A derivative that gives the buyer the right, but not the obligation, to sell an underlying asset at a specified price.",
    category: "Derivatives"
  },
  {
    term: "Futures Contract",
    definition: "A standardized legal agreement to buy or sell a particular commodity or financial instrument at a predetermined price at a specified time in the future. Both parties are obligated to transact.",
    category: "Derivatives"
  },
  {
    term: "Gearing (Leverage)",
    definition: "The use of financial instruments or borrowed capital, such as derivatives, to increase the potential return of an investment. It magnifies both gains and losses.",
    category: "Derivatives"
  },
  {
    term: "Credit Risk",
    definition: "The risk that a bond issuer or counterparty will default on their payment obligations.",
    category: "Risks"
  },
  {
    term: "Interest Rate Risk",
    definition: "The risk that a bond's price will fall when market interest rates rise, due to the inverse relationship between the two.",
    category: "Risks"
  },
  {
    term: "Reinvestment Risk",
    definition: "The risk that future cash flows (e.g., bond coupons) will have to be reinvested at a lower interest rate, reducing the overall expected return.",
    category: "Risks"
  },
  {
    term: "Liquidity Risk",
    definition: "The risk that an investor may not be able to buy or sell an asset quickly enough at a fair price to prevent or minimize a loss.",
    category: "Risks"
  },
  {
    term: "Counterparty Risk",
    definition: "The risk that the other party in a bilateral agreement (like an OTC derivative or an ETN) will default on its obligations.",
    category: "Risks"
  },
  {
    term: "Trustee (Unit Trust)",
    definition: "The legal owner of the fund's assets, acting as a 'watchdog' to safeguard the interests of the unitholders and ensure the fund manager's compliance.",
    category: "Unit Trust Operations (M8, RES5)"
  },
  {
    term: "Bid Price",
    definition: "The price at which unitholders sell their units back to the fund. It is equivalent to the Net Asset Value (NAV) per unit.",
    category: "Unit Trust Operations (M8, RES5)"
  },
    {
    term: "Bid-Offer Spread",
    definition: "The difference between the Offer Price (at which investors buy units) and the Bid Price (at which they sell units). Represents the sales charge or transaction cost.",
    category: "Unit Trust Operations (M8, RES5)"
  },
  {
    term: "Offer Price",
    definition: "The price at which investors buy units from the fund. It is calculated as the NAV per unit plus any applicable sales charge (front-end load).",
    category: "Unit Trust Operations (M8, RES5)"
  },
  {
    term: "Trust Deed",
    definition: "The legal constitutive document that establishes a Collective Investment Scheme (CIS) and outlines the duties and responsibilities of the manager, trustee, and unitholders.",
    category: "Unit Trust Operations (M8, RES5)"
  },
  {
    term: "3 Months",
    definition: "Maximum duration for a Provisional Representative (PR) to operate before passing exams.",
    category: "Regulatory Deadlines & Limits (RES5)"
  },
  {
    term: "5 Years",
    definition: "Minimum record-keeping period for BSC framework documents and AML/CFT records.",
    category: "Regulatory Deadlines & Limits (RES5)"
  },
  {
    term: "7 Days",
    definition: "Deadline for a representative to lodge a notice of intent with a new principal before leaving their old one.",
    category: "Regulatory Deadlines & Limits (RES5)"
  },
  {
    term: "S$25,000",
    definition: "Maximum fine for a representative acting for more than one principal.",
    category: "Regulatory Fines & Penalties (RES5)"
  },
  {
    term: "S$150,000",
    definition: "Minimum paid-up capital for a Financial Adviser (FA) not handling client money.",
    category: "Regulatory Capital & Insurance (RES5)"
  },
  {
    term: "S$300,000",
    definition: "Minimum paid-up capital for an FA dealing in high-risk products (e.g., futures, FX).",
    category: "Regulatory Capital & Insurance (RES5)"
  },
  {
    term: "S$500,000",
    definition: "Minimum Professional Indemnity Insurance (PII) coverage for an FA.",
    category: "Regulatory Capital & Insurance (RES5)"
  },
  {
    term: "MediShield Life",
    definition: "The mandatory basic health insurance plan administered by the CPF Board.",
    category: "Health & CPF Schemes (HI)"
  },
  {
    term: "Integrated Shield Plan (IP)",
    definition: "A policy that combines MediShield Life with an additional private insurance component.",
    category: "Health & CPF Schemes (HI)"
  },
  {
    term: "Additional Withdrawal Limits (AWL)",
    definition: "The maximum amount of MediSave that can be used annually for IP premiums, tiered by age (S$300 for <=40, S$600 for 41-70, S$900 for >=71).",
    category: "Health & CPF Schemes (HI)"
  },
  {
    term: "CareShield Life",
    definition: "The national long-term care insurance scheme providing lifetime payouts for severe disability (inability to perform 3 out of 6 ADLs).",
    category: "Health & CPF Schemes (HI)"
  },
  {
    term: "Capital Guaranteed Fund",
    definition: "A structured product where the principal is protected, typically by using a zero-coupon bond.",
    category: "Insurance & ILPs (M9, M9A)"
  },
  {
    term: "Portfolio Bond",
    definition: "A high-net-worth life insurance 'wrapper' that holds a wide range of external investment assets.",
    category: "Insurance & ILPs (M9, M9A)"
  },
  {
    term: "Reduced Paid-Up Insurance",
    definition: "A non-forfeiture option that uses a policy's cash value to buy a new policy of the same type but with a lower sum assured, with no further premiums required.",
    category: "Insurance & ILPs (M9, M9A)"
  }
];

export const formulas: Formula[] = [
  {
    name: "Current Yield",
    formula: "Annual Coupon Payment / Current Market Price",
    category: "Bond Mathematics (M8, RES5)",
    explanation: "Measures the annual income from a bond as a percentage of its current price, ignoring capital gains or losses."
  },
  {
    name: "Sharpe Ratio",
    formula: "(Portfolio Return - Risk-Free Rate) / Standard Deviation",
    category: "Performance Measurement (M8, RES5)",
    explanation: "Measures the risk-adjusted return of a portfolio per unit of total risk (volatility)."
  },
  {
    name: "Treynor Ratio",
    formula: "(Portfolio Return - Risk-Free Rate) / Beta",
    category: "Performance Measurement (M8, RES5)",
    explanation: "Measures the risk-adjusted return of a portfolio per unit of systematic (market) risk."
  },
  {
    name: "Jensen's Alpha",
    formula: "Portfolio Return - [Risk-Free Rate + Beta * (Market Return - Risk-Free Rate)]",
    category: "Performance Measurement (M8, RES5)",
    explanation: "Measures the excess return of a portfolio over its expected return as predicted by the Capital Asset Pricing Model (CAPM)."
  },
  {
    name: "Information Ratio",
    formula: "(Portfolio Return - Benchmark Return) / Tracking Error",
    category: "Performance Measurement (M8, RES5)",
    explanation: "Measures a portfolio manager's ability to generate excess returns relative to a benchmark, adjusted for the volatility of those returns."
  },
  {
    name: "Rule of 72",
    formula: "72 / Interest Rate",
    category: "Time Value of Money (TVM) (M8, RES5)",
    explanation: "A quick mental calculation to estimate the number of years required to double the value of an investment."
  },
  {
    name: "Total Return (ROI)",
    formula: "[(Ending Value - Beginning Value) + Income] / Beginning Value",
    category: "Performance Measurement (M8, RES5)",
    explanation: "Calculates the total gain or loss on an investment over a specific period, including both capital appreciation and any income generated."
  },
  {
    name: "Expense Ratio",
    formula: "(Total Recurring Annual Expenses / Average Net Asset Value) * 100",
    category: "Unit Trust Operations (M8, RES5)",
    explanation: "Represents the percentage of a fund's assets used for administrative, management, and other operating expenses."
  },
  {
    name: "Total Out-of-Pocket Cost (Health Insurance)",
    formula: "Deductible + (Co-insurance % * (Total Bill - Deductible))",
    category: "Health & CPF Schemes (HI)",
    explanation: "Calculates the total amount a policyholder must pay in a medical claim, accounting for both the initial deductible and the percentage-based co-insurance."
  },
  {
    name: "ILP Net Unit Change",
    formula: "Units Purchased (UP) - Units Cancelled (UC)",
    category: "Insurance & ILPs (M9, M9A)",
    explanation: "Determines the net increase or decrease in a policyholder's units after accounting for new premiums invested and charges deducted. UP = (Premium * Allocation Rate) / Offer Price. UC = Charges / Bid Price."
  },
  {
    name: "Net Amount at Risk (NAR) for ILPs",
    formula: "Sum Assured - Unit Value",
    category: "Insurance & ILPs (M9, M9A)",
    explanation: "Represents the actual insurance risk the insurer bears in an ILP, which is the difference between the guaranteed death benefit (Sum Assured) and the current investment value (Unit Value)."
  }
];
