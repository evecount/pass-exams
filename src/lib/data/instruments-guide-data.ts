import type { Quiz } from "../types";

export const instrumentsGuide: Quiz = {
    id: "instruments-guide",
    year: "2024",
    title: "Instruments & Markets Guide",
    description: "A master list categorizing all key financial instruments and insurance products for CMFAS exams.",
    questions: [],
    questionsEasy: [],
    questionsHard: [],
    price: "Free",
    subscriptionPrice: ""
};

export type Instrument = {
  instrument: string;
  characteristics: string;
};

export type InsuranceProduct = {
  product: string;
  purpose: string;
};

export const capitalMarketInstruments: Instrument[] = [
  {
    instrument: "Ordinary Shares (Equity)",
    characteristics: "Represents ownership in a company. Offers potential for capital gains and dividends. Carries voting rights. Highest risk, residual claim on assets."
  },
  {
    instrument: "Preference Shares",
    characteristics: "A hybrid security with features of both equity and debt. Pays fixed dividends and has priority over ordinary shares in dividends and liquidation, but usually no voting rights."
  },
  {
    instrument: "Government Bonds",
    characteristics: "Debt issued by a sovereign government. Considered very low-risk (risk-free). Pays regular interest (coupons)."
  },
  {
    instrument: "Corporate Bonds",
    characteristics: "Debt issued by corporations. Carries credit risk (default risk) in addition to interest rate risk. Can be secured (backed by collateral) or unsecured (debentures)."
  },
  {
    instrument: "Convertible Bonds",
    characteristics: "A bond that can be converted into a predetermined number of the issuer's equity shares. Offers bond-like safety with stock-like upside potential."
  },
  {
    instrument: "Callable Bonds",
    characteristics: "Allows the issuer to redeem the bond before its maturity date. Issuers are likely to call bonds when interest rates fall."
  },
  {
    instrument: "Puttable Bonds",
    characteristics: "Allows the bondholder to force the issuer to redeem the bond before maturity. Holders are likely to 'put' the bond back when interest rates rise."
  },
  {
    instrument: "Zero-Coupon Bonds",
    characteristics: "A bond that does not pay periodic interest. It is issued at a deep discount to its face value and repays the face value at maturity. Highly sensitive to interest rate changes."
  },
  {
    instrument: "Warrants",
    characteristics: "A long-term option issued by a company that gives the holder the right to buy its stock at a specific price. Often attached to bonds or new stock issues."
  },
  {
    instrument: "Options (Call/Put)",
    characteristics: "Contracts giving the owner the right, but not the obligation, to buy (call) or sell (put) an underlying asset at a set price on or before a specific date."
  },
];

export const moneyMarketInstruments: Instrument[] = [
  {
    instrument: "Treasury Bills (T-bills)",
    characteristics: "Short-term government debt with maturities of one year or less. Issued at a discount, pay face value at maturity."
  },
  {
    instrument: "Commercial Paper",
    characteristics: "Short-term unsecured promissory notes issued by large corporations to finance short-term liabilities like payroll."
  },
  {
    instrument: "Banker's Acceptance",
    characteristics: "A short-term debt instrument guaranteed by a commercial bank, often used in international trade."
  },
  {
    instrument: "Negotiable CDs (NCDs)",
    characteristics: "Certificates of Deposit with a minimum face value that can be traded in the secondary market before maturity."
  },
];

export const lifeInsuranceProducts: InsuranceProduct[] = [
  {
    product: "Term Life Insurance",
    purpose: "Provides pure death benefit protection for a specified period (term). No cash value. The most affordable form of life insurance."
  },
  {
    product: "Whole Life Insurance",
    purpose: "Provides lifelong death benefit protection and includes a savings component (cash value) that grows over time. Premiums are typically level for life."
  },
  {
    product: "Endowment Policy",
    purpose: "A savings-focused policy that pays out the sum assured on a fixed maturity date or upon death, whichever comes first. Combines protection and savings."
  },
  {
    product: "Investment-Linked Policy (ILP)",
    purpose: "Combines life insurance coverage with investment. Premiums are used to buy units in investment funds. The policy's value and death benefit can fluctuate with fund performance. Investment risk is borne by the policyholder."
  },
  {
    product: "Annuity",
    purpose: "A retirement product that protects against longevity risk (outliving savings). Provides a regular stream of income in exchange for a lump sum or series of premiums."
  }
];

export const healthInsuranceProducts: InsuranceProduct[] = [
  {
    product: "MediShield Life",
    purpose: "A mandatory basic health insurance scheme for all Singaporeans and PRs, providing coverage for large hospital bills and selected outpatient treatments."
  },
  {
    product: "Integrated Shield Plan (IP)",
    purpose: "A combination of MediShield Life and an additional private insurance component to cover hospital stays in higher-class wards or private hospitals."
  },
  {
    product: "Disability Income Insurance",
    purpose: "Provides a monthly income to replace lost earnings if the insured is unable to work due to disability."
  },
  {
    product: "Critical Illness Insurance",
    purpose: "Pays a lump sum benefit upon diagnosis of a major illness (e.g., cancer, heart attack), providing funds to cover medical costs or lifestyle changes."
  },
  {
    product: "Long-Term Care (CareShield Life)",
    purpose: "A national insurance scheme providing monthly cash payouts for life to help with care costs in the event of severe disability."
  },
];
