
import type { Quiz } from "../types";

export const m8TechnicalDrill: Quiz = {
  id: "m8-technical-drill",
  year: "2024",
  title: "M8 Technical Mastery Drill",
  description: "A drill focusing on technical M8 concepts like Expense Ratios, the Mercer Index, and advanced derivative risks.",
  price: "Free",
  subscriptionPrice: "",
  questions: [
    {
      id: 959,
      questionText: { english: "Which of the following is typically excluded from the calculation of a unit trust’s 'Reporting Ratio' (Expense Ratio)?" },
      options: [
        { text: { english: "Trustee and custodian fees" }, isCorrect: false },
        { text: { english: "Audit and legal fees" }, isCorrect: false },
        { text: { english: "Brokerage and transaction costs" }, isCorrect: true },
        { text: { english: "Management fees" }, isCorrect: false }
      ],
      explanation: { english: "The expense ratio (or TER) includes recurring operational costs. One-off transaction costs like brokerage are excluded." },
      difficulty: 7,
      topic: "Fees & Ratios"
    },
    {
      id: 960,
      questionText: { english: "If a fund manager reports a performance of 8% against a benchmark of 4%, with a tracking error of 8%, what is the reported Information Ratio?" },
      options: [
        { text: { english: "0.25" }, isCorrect: false },
        { text: { english: "0.50" }, isCorrect: true },
        { text: { english: "1.00" }, isCorrect: false },
        { text: { english: "2.00" }, isCorrect: false }
      ],
      explanation: { english: "Information Ratio = (Portfolio Return - Benchmark Return) / Tracking Error. (8% - 4%) / 8% = 4% / 8% = 0.50." },
      difficulty: 8,
      topic: "Performance Measurement"
    },
    {
      id: 961,
      questionText: { english: "The 'Expense Ratio' is calculated by dividing the total operating expenses by the fund's:" },
      options: [
        { text: { english: "Total Initial Capital" }, isCorrect: false },
        { text: { english: "Average Net Asset Value (NAV)" }, isCorrect: true },
        { text: { english: "Total Dividends Paid" }, isCorrect: false },
        { text: { english: "Total Liabilities" }, isCorrect: false }
      ],
      explanation: { english: "The expense ratio expresses the annual operational costs as a percentage of the fund's average assets under management (NAV)." },
      difficulty: 5,
      topic: "Fees & Ratios"
    },
    {
      id: 962,
      questionText: { english: "Why might an actively managed equity fund have a higher reporting ratio than a passive index fund?" },
      options: [
        { text: { english: "Active funds have higher research and management costs." }, isCorrect: true },
        { text: { english: "Active funds are not allowed to invest in T-bills." }, isCorrect: false },
        { text: { english: "Passive funds pay higher trustee fees." }, isCorrect: false },
        { text: { english: "There is no difference in reporting ratios." }, isCorrect: false }
      ],
      explanation: { english: "Active management involves significant costs for research analysts, portfolio managers, and more frequent trading, all of which contribute to a higher expense ratio." },
      difficulty: 6,
      topic: "Fees & Ratios"
    },
    {
      id: 963,
      questionText: { english: "A 'Feeder Fund' reporting ratio is unique because it must often reflect:" },
      options: [
        { text: { english: "Only the fees of the feeder fund." }, isCorrect: false },
        { text: { english: "The combined fees of both the feeder and the underlying target fund." }, isCorrect: true },
        { text: { english: "Zero management fees." }, isCorrect: false },
        { text: { english: "Only the brokerage costs of the target fund." }, isCorrect: false }
      ],
      explanation: { english: "Investors in a feeder fund bear two layers of expenses: the fees of the feeder fund itself and the fees of the master fund it invests in." },
      difficulty: 7,
      topic: "Fees & Ratios"
    },
    {
      id: 964,
      questionText: { english: "The 'Adequacy' pillar of the Mercer Index specifically evaluates:" },
      options: [
        { text: { english: "The regulatory framework of the pension system." }, isCorrect: false },
        { text: { english: "Whether the base level of income provided is sufficient for retirees." }, isCorrect: true },
        { text: { english: "The demographic trends of the working population." }, isCorrect: false },
        { text: { english: "The transparency of the CPF board." }, isCorrect: false }
      ],
      explanation: { english: "Adequacy measures the sufficiency of the benefits provided, focusing on whether the retirement income is enough to meet living standards." },
      difficulty: 7,
      topic: "Mercer Index"
    },
    {
      id: 965,
      questionText: { english: "Which Mercer pillar accounts for the 'Integrity' of the system?" },
      options: [
        { text: { english: "Sustainability" }, isCorrect: false },
        { text: { english: "Profitability" }, isCorrect: false },
        { text: { english: "Regulation, governance, and communication" }, isCorrect: true },
        { text: { english: "Asset allocation" }, isCorrect: false }
      ],
      explanation: { english: "The Integrity pillar assesses the trustworthiness and quality of the pension system's governance, regulation, and communication with its members." },
      difficulty: 6,
      topic: "Mercer Index"
    },
    {
      id: 966,
      questionText: { english: "'Sustainability' in the Mercer Index refers to a system's ability to:" },
      options: [
        { text: { english: "Pay out benefits immediately." }, isCorrect: false },
        { text: { english: "Be maintained over the long term despite demographic changes." }, isCorrect: true },
        { text: { english: "Guarantee a 10% return." }, isCorrect: false },
        { text: { english: "Avoid all market risks." }, isCorrect: false }
      ],
      explanation: { english: "Sustainability is forward-looking, assessing if the pension system can continue to meet its obligations in the future given long-term economic and demographic pressures." },
      difficulty: 7,
      topic: "Mercer Index"
    },
    {
      id: 967,
      questionText: { english: "Singapore's CPF system is often praised in the Mercer Index for its 'Integrity' because of:" },
      options: [
        { text: { english: "High interest rates on OA." }, isCorrect: false },
        { text: { english: "Robust regulation and the Trustee-Manager structure." }, isCorrect: true },
        { text: { english: "The exclusion of gold investments." }, isCorrect: false },
        { text: { english: "Its focus on short-term gains." }, isCorrect: false }
      ],
      explanation: { english: "The strong regulatory oversight by MAS and the clear separation of roles (Trustee-Manager model) contribute to the high integrity score of the CPF system." },
      difficulty: 6,
      topic: "Mercer Index"
    },
    {
      id: 968,
      questionText: { english: "A pension system that lacks 'Adequacy' most likely has:" },
      options: [
        { text: { english: "Poor communication with members." }, isCorrect: false },
        { text: { english: "Payouts that do not meet the basic cost of living." }, isCorrect: true },
        { text: { english: "Low government debt." }, isCorrect: false },
        { text: { english: "High participation rates." }, isCorrect: false }
      ],
      explanation: { english: "A lack of adequacy directly implies that the benefits provided are insufficient for a retiree's basic needs." },
      difficulty: 5,
      topic: "Mercer Index"
    },
    {
      id: 969,
      questionText: { english: "A 'Top-Down' investor starts their analysis at which level?" },
      options: [
        { text: { english: "Individual company earnings" }, isCorrect: false },
        { text: { english: "Global and national economic conditions" }, isCorrect: true },
        { text: { english: "Management quality" }, isCorrect: false },
        { text: { english: "Technical chart patterns" }, isCorrect: false }
      ],
      explanation: { english: "Top-down investing begins with macroeconomic analysis (the 'big picture') and then drills down to sectors and finally to individual stocks." },
      difficulty: 4,
      topic: "Investment Styles"
    },
    {
      id: 970,
      questionText: { english: "'Bottom-Up' investing is most closely associated with:" },
      options: [
        { text: { english: "Sector rotation" }, isCorrect: false },
        { text: { english: "Individual stock picking based on company fundamentals" }, isCorrect: true },
        { text: { english: "Predicting interest rate hikes" }, isCorrect: false },
        { text: { english: "Following GDP trends" }, isCorrect: false }
      ],
      explanation: { english: "Bottom-up investing focuses on finding great individual companies through fundamental analysis, irrespective of the broader economic environment." },
      difficulty: 4,
      topic: "Investment Styles"
    },
    {
      id: 971,
      questionText: { english: "In a 'Growth' investment style, a manager seeks companies with:" },
      options: [
        { text: { english: "Low P/E ratios and high dividends." }, isCorrect: false },
        { text: { english: "Above-average earnings growth potential." }, isCorrect: true },
        { text: { english: "Large cash piles and no debt." }, isCorrect: false },
        { text: { english: "A focus on utility sectors." }, isCorrect: false }
      ],
      explanation: { english: "Growth investors are willing to pay higher prices for companies they believe will grow earnings and revenues faster than the market average." },
      difficulty: 5,
      topic: "Investment Styles"
    },
    {
      id: 972,
      questionText: { english: "A 'Value' investor looks for stocks that are:" },
      options: [
        { text: { english: "Trading at a high premium to their intrinsic value." }, isCorrect: false },
        { text: { english: "Underpriced or out of favor with the market." }, isCorrect: true },
        { text: { english: "Only in the technology sector." }, isCorrect: false },
        { text: { english: "Guaranteed to double in price." }, isCorrect: false }
      ],
      explanation: { english: "Value investing is the discipline of buying securities for less than their underlying, intrinsic worth." },
      difficulty: 5,
      topic: "Investment Styles"
    },
    {
      id: 973,
      questionText: { english: "Which approach is more likely to ignore the current economic cycle?" },
      options: [
        { text: { english: "Top-Down" }, isCorrect: false },
        { text: { english: "Asset Allocation" }, isCorrect: false },
        { text: { english: "Bottom-Up" }, isCorrect: true },
        { text: { english: "Macro-hedging" }, isCorrect: false }
      ],
      explanation: { english: "A pure bottom-up 'stock picker' believes a fundamentally strong company can perform well regardless of the overall economic conditions." },
      difficulty: 6,
      topic: "Investment Styles"
    },
    {
      id: 974,
      questionText: { english: "Who is the primary issuer of Singapore Government Securities (SGS) and T-bills?" },
      options: [
        { text: { english: "Singapore Exchange (SGX)" }, isCorrect: false },
        { text: { english: "Monetary Authority of Singapore (MAS)" }, isCorrect: true },
        { text: { english: "DBS Bank" }, isCorrect: false },
        { text: { english: "GIC" }, isCorrect: false }
      ],
      explanation: { english: "The MAS, as the central bank of Singapore, issues government securities on behalf of the Singapore government." },
      difficulty: 5,
      topic: "Government Securities"
    },
    {
      id: 975,
      questionText: { english: "Which of the following is an 'SGS' instrument issued at a discount with no coupon?" },
      options: [
        { text: { english: "10-year SGS Bond" }, isCorrect: false },
        { text: { english: "Treasury Bill (T-bill)" }, isCorrect: true },
        { text: { english: "Singapore Savings Bond" }, isCorrect: false },
        { text: { english: "Retail Corporate Bond" }, isCorrect: false }
      ],
      explanation: { english: "Treasury Bills (T-bills) are zero-coupon instruments with maturities of one year or less, issued at a discount to their face value." },
      difficulty: 6,
      topic: "Government Securities"
    },
    {
      id: 976,
      questionText: { english: "The Singapore Exchange (SGX) serves as a:" },
      options: [
        { text: { english: "Central bank for the government." }, isCorrect: false },
        { text: { english: "Platform for listing and trading securities." }, isCorrect: true },
        { text: { english: "Sole issuer of all unit trusts." }, isCorrect: false },
        { text: { english: "Provider of CPF insurance." }, isCorrect: false }
      ],
      explanation: { english: "The SGX's primary role is to provide a fair, orderly, and transparent marketplace for the buying and selling of securities." },
      difficulty: 3,
      topic: "Financial Markets"
    },
    {
      id: 977,
      questionText: { english: "A 6-month T-bill is categorized as a:" },
      options: [
        { text: { english: "Fixed Income asset" }, isCorrect: false },
        { text: { english: "Money Market instrument" }, isCorrect: true },
        { text: { english: "Derivative" }, isCorrect: false },
        { text: { english: "Equity asset" }, isCorrect: false }
      ],
      explanation: { english: "Money Market instruments are short-term debt with maturities of one year or less. T-bills fit this definition perfectly." },
      difficulty: 4,
      topic: "Financial Markets"
    },
    {
      id: 978,
      questionText: { english: "Which entity is responsible for 'Market Surveillance' and 'Listing Rules' in Singapore?" },
      options: [
        { text: { english: "MAS" }, isCorrect: false },
        { text: { english: "SGX" }, isCorrect: true },
        { text: { english: "Ministry of Finance" }, isCorrect: false },
        { text: { english: "Temasek" }, isCorrect: false }
      ],
      explanation: { english: "The SGX, as the market operator, is responsible for setting listing rules for companies and conducting surveillance to detect and deter market abuse." },
      difficulty: 5,
      topic: "Financial Markets"
    },
    {
      id: 979,
      questionText: { english: "Warrants are typically issued by:" },
      options: [
        { text: { english: "The stock exchange" }, isCorrect: false },
        { text: { english: "The company itself to raise capital" }, isCorrect: true },
        { text: { english: "The MAS" }, isCorrect: false },
        { text: { english: "Other investors" }, isCorrect: false }
      ],
      explanation: { english: "Warrants are issued directly by corporations, often alongside bonds or as part of a new share offering, to make the issuance more attractive." },
      difficulty: 6,
      topic: "Derivatives"
    },
    {
      id: 980,
      questionText: { english: "In terms of duration, Warrants are usually:" },
      options: [
        { text: { english: "Short-term (months)" }, isCorrect: false },
        { text: { english: "Long-term (years)" }, isCorrect: true },
        { text: { english: "Perpetual" }, isCorrect: false },
        { text: { english: "Zero-duration" }, isCorrect: false }
      ],
      explanation: { english: "Warrants typically have expiry dates measured in years, making them long-term instruments compared to standard exchange-traded options." },
      difficulty: 5,
      topic: "Derivatives"
    },
    {
      id: 981,
      questionText: { english: "A 'Call Option' gives the holder the:" },
      options: [
        { text: { english: "Right to sell an asset at a fixed price." }, isCorrect: false },
        { text: { english: "Right to buy an asset at a fixed price." }, isCorrect: true },
        { text: { english: "Obligation to buy an asset." }, isCorrect: false },
        { text: { english: "Right to receive a dividend." }, isCorrect: false }
      ],
      explanation: { english: "A call option confers the right, but not the obligation, to purchase the underlying asset at the predetermined strike price." },
      difficulty: 3,
      topic: "Derivatives"
    },
    {
      id: 982,
      questionText: { english: "In an 'Interest Rate Swap,' two parties exchange:" },
      options: [
        { text: { english: "Principal amounts in different currencies." }, isCorrect: false },
        { text: { english: "Interest rate payments (e.g., fixed vs. floating)." }, isCorrect: true },
        { text: { english: "Shares in two different companies." }, isCorrect: false },
        { text: { english: "Voting rights." }, isCorrect: false }
      ],
      explanation: { english: "The most common form of interest rate swap involves one party paying a fixed interest rate while the other pays a floating rate, based on a notional principal amount." },
      difficulty: 6,
      topic: "Derivatives"
    },
    {
      id: 983,
      questionText: { english: "'Counterparty Risk' is most prevalent in:" },
      options: [
        { text: { english: "T-bills" }, isCorrect: false },
        { text: { english: "Over-the-counter (OTC) derivatives like swaps" }, isCorrect: true },
        { text: { english: "Blue-chip stocks" }, isCorrect: false },
        { text: { english: "Cash deposits" }, isCorrect: false }
      ],
      explanation: { english: "OTC derivatives are private contracts between two parties without the guarantee of a central clearinghouse, exposing each to the other's default risk." },
      difficulty: 6,
      topic: "Risk Management"
    },
    {
      id: 984,
      questionText: { english: "A 'Convertible Bond' provides an 'Equity Floor' because:" },
      options: [
        { text: { english: "It can always be sold back to the government." }, isCorrect: false },
        { text: { english: "It maintains its value as a bond even if the share price drops." }, isCorrect: true },
        { text: { english: "It is guaranteed by the SGX." }, isCorrect: false },
        { text: { english: "It pays no interest." }, isCorrect: false }
      ],
      explanation: { english: "If the stock performs poorly, the convertible bond holder does not have to convert. They can simply hold the bond to maturity and receive the principal and interest payments, giving it a 'floor' value." },
      difficulty: 7,
      topic: "Bonds"
    },
    {
      id: 985,
      questionText: { english: "'Convertible Arbitrage' involves:" },
      options: [
        { text: { english: "Buying a bond and never selling it." }, isCorrect: false },
        { text: { english: "Exploiting price differences between the convertible bond and the underlying stock." }, isCorrect: true },
        { text: { english: "Investing only in T-bills." }, isCorrect: false },
        { text: { english: "Shorting all government securities." }, isCorrect: false }
      ],
      explanation: { english: "This hedge fund strategy typically involves buying an undervalued convertible bond and shorting the overvalued underlying stock to profit from the pricing discrepancy." },
      difficulty: 9,
      topic: "Hedge Funds"
    },
    {
      id: 986,
      questionText: { english: "Hedge funds differ from unit trusts because they often seek:" },
      options: [
        { text: { english: "Relative returns against an index." }, isCorrect: false },
        { text: { english: "Absolute returns regardless of market direction." }, isCorrect: true },
        { text: { english: "Guaranteed returns of 20%." }, isCorrect: false },
        { text: { english: "Lower risks than cash." }, isCorrect: false }
      ],
      explanation: { english: "The goal of most hedge funds is to generate positive ('absolute') returns, whether the market is going up, down, or sideways, unlike traditional funds that aim to beat a benchmark." },
      difficulty: 6,
      topic: "Hedge Funds"
    },
    {
      id: 987,
      questionText: { english: "A 'High-Water Mark' in hedge funds ensures that:" },
      options: [
        { text: { english: "The manager never loses money." }, isCorrect: false },
        { text: { english: "The manager only earns performance fees on NEW profits." }, isCorrect: true },
        { text: { english: "The fund only invests in liquid assets." }, isCorrect: false },
        { text: { english: "Investors pay no management fees." }, isCorrect: false }
      ],
      explanation: { english: "This feature protects investors from paying performance fees on the same gains twice. The manager must surpass the fund's previous peak value before earning a performance fee again." },
      difficulty: 7,
      topic: "Hedge Funds"
    },
    {
      id: 988,
      questionText: { english: "Hedge funds are typically 'unregulated' or 'lightly regulated' because they are:" },
      options: [
        { text: { english: "Too small to matter." }, isCorrect: false },
        { text: { english: "Restricted to sophisticated/accredited investors." }, isCorrect: true },
        { text: { english: "Only based in the US." }, isCorrect: false },
        { text: { english: "Risk-free." }, isCorrect: false }
      ],
      explanation: { english: "Regulators assume that accredited investors are sophisticated enough to understand the risks and have the financial capacity to bear potential losses, so these funds are subject to fewer restrictions." },
      difficulty: 6,
      topic: "Hedge Funds"
    },
    {
      id: 989,
      questionText: { english: "Business Trusts in Singapore are governed by the:" },
      options: [
        { text: { english: "Companies Act" }, isCorrect: false },
        { text: { english: "Business Trusts Act 2004" }, isCorrect: true },
        { text: { english: "Securities and Futures Act" }, isCorrect: false },
        { text: { english: "Trust Companies Act" }, isCorrect: false }
      ],
      explanation: { english: "The Business Trusts Act 2004 provides the specific legal framework for the creation and regulation of business trusts in Singapore." },
      difficulty: 8,
      topic: "CIS Structure"
    },
    {
      id: 990,
      questionText: { english: "Unlike REITs, Business Trusts:" },
      options: [
        { text: { english: "Are not required to distribute 90% of their income." }, isCorrect: true },
        { text: { english: "Cannot own real estate." }, isCorrect: false },
        { text: { english: "Are only for government use." }, isCorrect: false },
        { text: { english: "Have no management fees." }, isCorrect: false }
      ],
      explanation: { english: "Business Trusts are not subject to the same mandatory 90% income distribution rule as REITs, giving them more flexibility to retain earnings for business growth." },
      difficulty: 7,
      topic: "CIS Structure"
    },
    {
      id: 991,
      questionText: { english: "The primary benefit of a REIT is:" },
      options: [
        { text: { english: "Guaranteed capital gains." }, isCorrect: false },
        { text: { english: "Direct exposure to real property with professional management." }, isCorrect: true },
        { text: { english: "High volatility." }, isCorrect: false },
        { text: { english: "No tax on dividends for the fund." }, isCorrect: false }
      ],
      explanation: { english: "REITs allow individual investors to invest in a diversified portfolio of income-producing real estate assets without having to buy and manage the properties themselves." },
      difficulty: 5,
      topic: "REITs"
    },
    {
      id: 992,
      questionText: { english: "'Systematic Risk' refers to risk that:" },
      options: [
        { text: { english: "Affects only one specific company." }, isCorrect: false },
        { text: { english: "Affects the entire market and cannot be diversified away." }, isCorrect: true },
        { text: { english: "Is caused by bad management." }, isCorrect: false },
        { text: { english: "Is related to a company's strike." }, isCorrect: false }
      ],
      explanation: { english: "Also known as market risk, systematic risk stems from broad economic factors and affects all assets. It cannot be eliminated through diversification." },
      difficulty: 4,
      topic: "Risk Management"
    },
    {
      id: 993,
      questionText: { english: "'Unsystematic Risk' is also known as:" },
      options: [
        { text: { english: "Market Risk" }, isCorrect: false },
        { text: { english: "Specific Risk" }, isCorrect: true },
        { text: { english: "Beta" }, isCorrect: false },
        { text: { english: "Inflation Risk" }, isCorrect: false }
      ],
      explanation: { english: "Unsystematic risk is specific to a company or industry (e.g., a product recall) and can be mitigated by diversifying the portfolio." },
      difficulty: 4,
      topic: "Risk Management"
    },
    {
      id: 994,
      questionText: { english: "Current Yield formula for a bond is:" },
      options: [
        { text: { english: "(Annual Coupon / Par Value) * 100" }, isCorrect: false },
        { text: { english: "(Annual Coupon / Current Market Price) * 100" }, isCorrect: true },
        { text: { english: "(Total Return / Initial Capital) * 100" }, isCorrect: false },
        { text: { english: "Par Value / Coupon Rate" }, isCorrect: false }
      ],
      explanation: { english: "The current yield measures the income return from a bond based on its current market price, not its face (par) value." },
      difficulty: 5,
      topic: "Yield Calculations"
    },
    {
      id: 995,
      questionText: { english: "If a bond is trading at a 'Premium' (above par), its current yield will be:" },
      options: [
        { text: { english: "Higher than its coupon rate." }, isCorrect: false },
        { text: { english: "Lower than its coupon rate." }, isCorrect: true },
        { text: { english: "Equal to its coupon rate." }, isCorrect: false },
        { text: { english: "Zero." }, isCorrect: false }
      ],
      explanation: { english: "If the price (denominator) is higher than the par value, the resulting yield percentage will be lower than the coupon rate (which is based on par)." },
      difficulty: 6,
      topic: "Yield Calculations"
    },
    {
      id: 996,
      questionText: { english: "'Inflation Risk' is the risk that:" },
      options: [
        { text: { english: "Interest rates will stay the same." }, isCorrect: false },
        { text: { english: "The purchasing power of cash flows will decrease." }, isCorrect: true },
        { text: { english: "Stock prices will double." }, isCorrect: false },
        { text: { english: "The government will print less money." }, isCorrect: false }
      ],
      explanation: { english: "Inflation erodes the real value of money. The fixed coupon payments from a bond will buy fewer goods and services in the future if inflation rises." },
      difficulty: 4,
      topic: "Risk Management"
    },
    {
      id: 997,
      questionText: { english: "A Certificate of Deposit (CD) is a:" },
      options: [
        { text: { english: "Long-term equity share." }, isCorrect: false },
        { text: { english: "Negotiable instrument issued by a bank for a specific sum deposited." }, isCorrect: true },
        { text: { english: "Derivative contract." }, isCorrect: false },
        { text: { english: "Government bond." }, isCorrect: false }
      ],
      explanation: { english: "A CD is a time deposit with a bank. A Negotiable CD (NCD) is a large-denomination CD that can be traded in the secondary money market." },
      difficulty: 5,
      topic: "Money Market"
    },
    {
      id: 998,
      questionText: { english: "Commercial Paper is typically:" },
      options: [
        { text: { english: "Secured by gold." }, isCorrect: false },
        { text: { english: "An unsecured short-term promissory note issued by a corporation." }, isCorrect: true },
        { text: { english: "A 30-year bond." }, isCorrect: false },
        { text: { english: "Issued only by the MAS." }, isCorrect: false }
      ],
      explanation: { english: "Large, creditworthy corporations issue commercial paper to fund short-term liabilities. It is unsecured and matures in 270 days or less." },
      difficulty: 6,
      topic: "Money Market"
    },
    {
      id: 999,
      questionText: { english: "A 'Repurchase Agreement' (Repo) is essentially:" },
      options: [
        { text: { english: "An equity buyback." }, isCorrect: false },
        { text: { english: "A short-term collateralized loan involving the sale and future repurchase of securities." }, isCorrect: true },
        { text: { english: "A permanent transfer of ownership." }, isCorrect: false },
        { text: { english: "A type of unit trust." }, isCorrect: false }
      ],
      explanation: { english: "In a repo transaction, one party sells securities to another with an agreement to buy them back at a higher price on a future date, effectively acting as a collateralized loan." },
      difficulty: 7,
      topic: "Money Market"
    },
    {
      id: 1000,
      questionText: { english: "Which is the least liquid asset?" },
      options: [
        { text: { english: "T-bills" }, isCorrect: false },
        { text: { english: "Cash equivalents" }, isCorrect: false },
        { text: { english: "Physical real estate" }, isCorrect: true },
        { text: { english: "Blue-chip stocks" }, isCorrect: false }
      ],
      explanation: { english: "Physical real estate is highly illiquid as it can take months or years to sell, and transaction costs are very high compared to financial instruments." },
      difficulty: 4,
      topic: "Asset Classes"
    },
    {
      id: 1001,
      questionText: { english: "A 'Credit-Linked Note' (CLN) typically embeds which derivative?" },
      options: [
        { text: { english: "Call Option" }, isCorrect: false },
        { text: { english: "Credit Default Swap (CDS)" }, isCorrect: true },
        { text: { english: "Interest Rate Swap" }, isCorrect: false },
        { text: { english: "Forward Contract" }, isCorrect: false }
      ],
      explanation: { english: "A CLN's payout is linked to a credit event. It bundles a bond with a CDS, transferring the credit risk of a 'reference entity' to the investor." },
      difficulty: 8,
      topic: "Structured Products"
    },
    {
      id: 1002,
      questionText: { english: "'Principal Protection' in a note is only effective if:" },
      options: [
        { text: { english: "The market goes up." }, isCorrect: false },
        { text: { english: "The note is held until maturity and the issuer does not default." }, isCorrect: true },
        { text: { english: "The investor sells early." }, isCorrect: false },
        { text: { english: "Gold prices rise." }, isCorrect: false }
      ],
      explanation: { english: "The 'protection' is a promise from the issuer and is subject to their creditworthiness. It is also void if the note is sold before its maturity date." },
      difficulty: 7,
      topic: "Structured Products"
    },
    {
      id: 1003,
      questionText: { english: "An Equity-Linked Note (ELN) is often used to:" },
      options: [
        { text: { english: "Guarantee 100% principal." }, isCorrect: false },
        { text: { english: "Enhance yield in a sideways or slightly bullish market." }, isCorrect: true },
        { text: { english: "Hedge against inflation." }, isCorrect: false },
        { text: { english: "Invest in government debt." }, isCorrect: false }
      ],
      explanation: { english: "ELNs offer a higher coupon (yield enhancement) than typical bonds, but expose the investor to downside risk if the linked stock price falls." },
      difficulty: 7,
      topic: "Structured Products"
    },
    {
      id: 1004,
      questionText: { english: "In the 'Primary Market,' who receives the proceeds from a security sale?" },
      options: [
        { text: { english: "The previous investor" }, isCorrect: false },
        { text: { english: "The issuing corporation or government" }, isCorrect: true },
        { text: { english: "The SGX" }, isCorrect: false },
        { text: { english: "The MAS" }, isCorrect: false }
      ],
      explanation: { english: "The primary market is where new securities are created and sold by issuers to raise capital for their operations or projects." },
      difficulty: 4,
      topic: "Financial Markets"
    },
    {
      id: 1005,
      questionText: { english: "A 'Unit Trust' is legally structured as a:" },
      options: [
        { text: { english: "Corporation" }, isCorrect: false },
        { text: { english: "Trust deed between a manager and a trustee" }, isCorrect: true },
        { text: { english: "Partnership" }, isCorrect: false },
        { text: { english: "Insurance policy" }, isCorrect: false }
      ],
      explanation: { english: "A unit trust is a legal arrangement, established by a trust deed, where a trustee holds assets for the benefit of unitholders, and a manager invests those assets." },
      difficulty: 5,
      topic: "CIS Structure"
    }
  ],
  questionsEasy: [],
  questionsHard: [],
};

    