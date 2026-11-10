
export type InvestmentVehicle = {
  name: string;
  description: string;
};

export type InvestmentStrategy = {
  riskProfile: 'Conservative' | 'Moderate' | 'Aggressive';
  objective: string;
  investorType: string;
  typicalAmount: string;
  vehicles: InvestmentVehicle[];
};

export const investmentStrategies: InvestmentStrategy[] = [
  {
    riskProfile: 'Conservative',
    objective: 'Capital preservation with some income.',
    investorType: 'Retirees, risk-averse individuals.',
    typicalAmount: 'Any amount',
    vehicles: [
      {
        name: 'Fixed Deposits & Money Market Funds',
        description: 'Very low risk. Provides stable, predictable interest income. Suitable for short-term savings and emergency funds.',
      },
      {
        name: 'Singapore Government Bonds (SGS) & Treasury Bills (T-bills)',
        description: 'Considered risk-free. Backed by the government, offering safety of principal and regular coupon payments.',
      },
      {
        name: 'High-Quality Corporate Bonds (Investment Grade)',
        description: 'Low credit risk. Debt issued by stable, large-cap companies (e.g., rated AAA to BBB). Provides higher yield than government bonds.',
      },
      {
        name: 'Endowment Insurance Policies',
        description: 'A savings product with an insurance component. Offers guaranteed returns upon maturity, focusing on disciplined savings over growth.',
      },
    ],
  },
  {
    riskProfile: 'Moderate',
    objective: 'Balanced growth and income.',
    investorType: 'Investors with a medium-term horizon (5-10 years).',
    typicalAmount: '$10,000 - $100,000+',
    vehicles: [
      {
        name: 'Balanced Unit Trusts (CIS)',
        description: 'A diversified portfolio of both stocks and bonds, typically a 60/40 split. Aims to provide a mix of growth and income.',
      },
      {
        name: 'Blue-Chip Equities / Dividend Stocks',
        description: 'Shares of large, well-established companies with a history of stable earnings and dividend payments (e.g., banks, telcos).',
      },
      {
        name: 'Real Estate Investment Trusts (REITs)',
        description: 'Invests in a portfolio of income-generating real estate. Offers regular dividend income (distributions) and potential for capital appreciation. Traded on an exchange like a stock.',
      },
      {
        name: 'Investment-Linked Policies (ILPs)',
        description: 'Combines insurance with investment in unit trusts. Offers flexibility but investment risk is borne by the policyholder.',
      },
    ],
  },
  {
    riskProfile: 'Aggressive',
    objective: 'High capital growth.',
    investorType: 'Experienced investors with a long-term horizon and high risk tolerance.',
    typicalAmount: '$25,000 - $1,000,000+',
    vehicles: [
      {
        name: 'Growth Stocks & Sector-Specific ETFs',
        description: 'Investing in companies in high-growth sectors like technology or healthcare. Higher potential returns come with higher volatility.',
      },
      {
        name: 'Hedge Funds & Private Equity',
        description: 'Complex, actively managed funds using advanced strategies (leverage, short-selling). Typically for Accredited Investors only due to high risk and complexity.',
      },
      {
        name: 'Derivatives (Options & Futures)',
        description: 'Contracts whose value is derived from an underlying asset. Used for speculation or hedging. Can lead to large gains or losses; requires deep expertise.',
      },
      {
        name: 'Structured Products (e.g., Equity-Linked Notes)',
        description: 'Complex financial instruments created to meet specific risk-return objectives. Payout depends on the performance of an underlying asset. High risk, for sophisticated investors.',
      },
    ],
  },
];
