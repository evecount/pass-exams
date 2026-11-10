
import type { Quiz } from "./types";

export const m8Exam: Quiz = {
    id: "m8-exam",
    year: "2024",
    title: "M8 Mock Exam",
    description: "A 50-question master mock exam for the M8 (Collective Investment Schemes) paper in Singapore.",
    price: "$60.00",
    subscriptionPrice: "$39.90/month",
    examDetails: [
        { label: "Format", value: "50 multiple-choice questions (MCQs)." },
        { label: "Duration", value: "1 hour." },
        { label: "Passing Score", value: "70%." },
        { label: "Prerequisites", value: "None. Can be retaken without limits." }
    ],
    questions: [
        {
            "id": 801,
            "questionText": "A bond with a S$1,000 par value and a 4% coupon is purchased for S$800. What is the Current Yield?",
            "options": [
              { "text": "4.00%", "isCorrect": false },
              { "text": "5.00%", "isCorrect": true },
              { "text": "6.25%", "isCorrect": false },
              { "text": "8.00%", "isCorrect": false }
            ],
            "explanation": "Correct. Current Yield = (Annual Coupon Payment) / (Current Market Price) = (S$1000 * 4%) / S$800 = S$40 / S$800 = 5.00%.",
            "difficulty": 6,
            "topic": "Bonds"
        },
        {
            "id": 802,
            "questionText": "Which of the following describes the 'Longevity Risk' that an annuity is designed to hedge?",
            "options": [
              { "text": "The risk of dying too soon and leaving no estate.", "isCorrect": false },
              { "text": "The risk of investment assets losing value during a market crash.", "isCorrect": false },
              { "text": "The risk of outliving one's income after retirement.", "isCorrect": true },
              { "text": "The risk of inflation eroding the purchasing power of cash.", "isCorrect": false }
            ],
            "explanation": "Correct. Annuities provide a guaranteed income stream for as long as the annuitant lives, thereby hedging the risk of outliving one's savings.",
            "difficulty": 4,
            "topic": "Annuities"
        },
        {
            "id": 803,
            "questionText": "What is the primary role of a 'Trustee' in a Singapore Unit Trust?",
            "options": [
              { "text": "To manage and invest the fund's assets to achieve performance goals.", "isCorrect": false },
              { "text": "To act as a watchdog and safeguard the interests of unitholders.", "isCorrect": true },
              { "text": "To market the units to retail and institutional investors.", "isCorrect": false },
              { "text": "To set the daily bid and offer prices of the units.", "isCorrect": false }
            ],
            "explanation": "Correct. The trustee holds the legal ownership of the fund's assets on behalf of unitholders and ensures the fund manager complies with the trust deed and regulations.",
            "difficulty": 5,
            "topic": "CIS Structure"
        },
        {
            "id": 804,
            "questionText": "Under CPFIS-OA, what is the maximum percentage of investible savings that can be invested in Gold products?",
            "options": [
              { "text": "10%", "isCorrect": true },
              { "text": "35%", "isCorrect": false },
              { "text": "50%", "isCorrect": false },
              { "text": "100%", "isCorrect": false }
            ],
            "explanation": "Correct. Gold ETFs and other gold products are subject to a 10% limit of investible savings under the CPF Investment Scheme-Ordinary Account.",
            "difficulty": 8,
            "topic": "CPF"
        },
        {
            "id": 805,
            "questionText": "An investor wants to buy a derivative that gives them the 'Right' but not 'Obligation' to buy a stock. This is a:",
            "options": [
              { "text": "Futures Contract", "isCorrect": false },
              { "text": "Forward Contract", "isCorrect": false },
              { "text": "Call Option", "isCorrect": true },
              { "text": "Put Option", "isCorrect": false }
            ],
            "explanation": "Correct. A call option gives the buyer the right, but not the obligation, to buy an underlying asset at a specified strike price before or on a specific date.",
            "difficulty": 4,
            "topic": "Derivatives"
        },
        {
            "id": 806,
            "questionText": "Which of the following is EXCLUDED from the calculation of a fund's Total Expense Ratio (TER)?",
            "options": [
              { "text": "Audit Fees", "isCorrect": false },
              { "text": "Trustee Fees", "isCorrect": false },
              { "text": "Sales Charges (Entry Loads)", "isCorrect": true },
              { "text": "Management Fees", "isCorrect": false }
            ],
            "explanation": "Correct. The TER includes all recurring operating costs of the fund. One-off transactional costs like sales charges (front-end loads) and brokerage commissions are excluded.",
            "difficulty": 7,
            "topic": "Fees"
        },
        {
            "id": 807,
            "questionText": "Which type of market efficiency suggests that even inside/private information is already reflected in the stock price?",
            "options": [
              { "text": "Weak Form", "isCorrect": false },
              { "text": "Semi-Strong Form", "isCorrect": false },
              { "text": "Strong Form", "isCorrect": true },
              { "text": "Inefficient Form", "isCorrect": false }
            ],
            "explanation": "Correct. Strong Form efficiency posits that all information, both public and private (insider information), is fully reflected in stock prices, making it impossible to consistently earn excess returns.",
            "difficulty": 6,
            "topic": "Market Efficiency"
        },
        {
            "id": 808,
            "questionText": "A REIT in Singapore must typically distribute at least what percentage of its taxable income to enjoy tax transparency?",
            "options": [
              { "text": "50%", "isCorrect": false },
              { "text": "70%", "isCorrect": false },
              { "text": "90%", "isCorrect": true },
              { "text": "100%", "isCorrect": false }
            ],
            "explanation": "Correct. To qualify for tax transparency, where the trust itself is not taxed on its income, a Singapore-listed REIT must distribute at least 90% of its taxable income to unitholders.",
            "difficulty": 5,
            "topic": "REITs"
        },
        {
            "id": 809,
            "questionText": "Which ratio measures a portfolio's excess return per unit of Systematic Risk (Beta)?",
            "options": [
              { "text": "Sharpe Ratio", "isCorrect": false },
              { "text": "Treynor Ratio", "isCorrect": true },
              { "text": "Expense Ratio", "isCorrect": false },
              { "text": "Information Ratio", "isCorrect": false }
            ],
            "explanation": "Correct. The Treynor Ratio uses Beta as its denominator, measuring the excess return generated per unit of systematic risk taken.",
            "difficulty": 7,
            "topic": "Performance Measurement"
        },
        {
            "id": 810,
            "questionText": "If a manager has a Jensen's Alpha of +1.5%, this implies:",
            "options": [
              { "text": "The manager performed exactly as predicted by CAPM.", "isCorrect": false },
              { "text": "The manager underperformed the market after risk adjustment.", "isCorrect": false },
              { "text": "The manager outperformed the required return predicted by CAPM.", "isCorrect": true },
              { "text": "The manager's fund has higher systematic risk than the market.", "isCorrect": false }
            ],
            "explanation": "Correct. Jensen's Alpha measures the portfolio's actual return against the return predicted by the Capital Asset Pricing Model (CAPM). A positive alpha indicates outperformance on a risk-adjusted basis.",
            "difficulty": 7,
            "topic": "Performance Measurement"
        },
        {
            "id": 811,
            "questionText": "Which TVM table should be used to calculate the Future Value of a series of payments made at the END of each year?",
            "options": [
              { "text": "Table A1", "isCorrect": true },
              { "text": "Table A2", "isCorrect": false },
              { "text": "Table A3", "isCorrect": false },
              { "text": "Table A4", "isCorrect": false }
            ],
            "explanation": "Correct. Table A1 is used for finding the Future Value of an Ordinary Annuity, which involves payments made at the end of each period.",
            "difficulty": 8,
            "topic": "TVM"
        },
        {
            "id": 812,
            "questionText": "Using the 'Rule of 72', how long will it take for an investment to double at an 8% annual return?",
            "options": [
              { "text": "8 years", "isCorrect": false },
              { "text": "9 years", "isCorrect": true },
              { "text": "12 years", "isCorrect": false },
              { "text": "72 years", "isCorrect": false }
            ],
            "explanation": "Correct. The Rule of 72 provides a quick estimate. Years to double = 72 / Interest Rate = 72 / 8 = 9 years.",
            "difficulty": 3,
            "topic": "TVM"
        },
        {
            "id": 813,
            "questionText": "What is a primary disadvantage of investing in a 'Warrant' compared to a 'Share'?",
            "options": [
              { "text": "Warrants are more expensive than shares.", "isCorrect": false },
              { "text": "Warrants have no voting privileges and pay no dividends.", "isCorrect": true },
              { "text": "Warrants do not expire, while shares do.", "isCorrect": false },
              { "text": "Warrants are only issued by governments.", "isCorrect": false }
            ],
            "explanation": "Correct. Warrants are derivative instruments that derive their value from the underlying share but do not confer ownership rights like voting or receiving dividends. They also have an expiry date, unlike shares.",
            "difficulty": 5,
            "topic": "Derivatives"
        },
        {
            "id": 814,
            "questionText": "Which of the following is considered an 'Unsystematic Risk'?",
            "options": [
              { "text": "A sudden rise in global interest rates.", "isCorrect": false },
              { "text": "A change in national tax laws affecting all sectors.", "isCorrect": false },
              { "text": "A strike at a company's main manufacturing plant.", "isCorrect": true },
              { "text": "A global economic recession.", "isCorrect": false }
            ],
            "explanation": "Correct. Unsystematic (or specific) risk is unique to a specific company or industry and can be mitigated through diversification. A factory strike is a perfect example.",
            "difficulty": 4,
            "topic": "Risk Management"
        },
        {
            "id": 815,
            "questionText": "What does a 'High-Water Mark' in a hedge fund's fee structure protect against?",
            "options": [
              { "text": "Paying a management fee when the fund loses money.", "isCorrect": false },
              { "text": "Paying a performance fee for the same gain twice after a recovery.", "isCorrect": true },
              { "text": "The distributor taking a cut of the returns.", "isCorrect": false },
              { "text": "The fund manager taking a risk with too much leverage.", "isCorrect": false }
            ],
            "explanation": "Correct. A high-water mark ensures that performance fees are only paid on new profits above the fund's highest previous value, preventing investors from paying for the same performance twice.",
            "difficulty": 7,
            "topic": "Hedge Funds"
        },
        {
            "id": 816,
            "questionText": "An investor holds a bond with a 'Put' option. Under which market condition is the investor MOST likely to exercise this option?",
            "options": [
              { "text": "When market interest rates fall significantly below the coupon rate.", "isCorrect": false },
              { "text": "When market interest rates rise significantly above the coupon rate.", "isCorrect": true },
              { "text": "When the credit rating of the issuer is upgraded to AAA.", "isCorrect": false },
              { "text": "When the bond is trading at a significant premium to par value.", "isCorrect": false }
            ],
            "explanation": "Correct. A 'Put' option allows the investor to sell the bond back at par. If rates rise, the bond's market price falls, making it attractive to sell back at the higher par value.",
            "difficulty": 8,
            "topic": "Bonds"
        },
        {
            "id": 817,
            "questionText": "Which of the following describes the 'Reinvestment Risk' associated with high-coupon bonds during a period of falling interest rates?",
            "options": [
              { "text": "The risk that the issuer will default on the principal repayment.", "isCorrect": false },
              { "text": "The risk that the bond price will fall despite falling interest rates.", "isCorrect": false },
              { "text": "The risk that periodic coupon payments will be reinvested at lower prevailing yields.", "isCorrect": true },
              { "text": "The risk that the investor will be unable to sell the bond in the secondary market.", "isCorrect": false }
            ],
            "explanation": "Correct. Reinvestment risk is the danger that future cash flows (coupons) will have to be reinvested at a lower interest rate, reducing the overall return.",
            "difficulty": 7,
            "topic": "Risk Management"
        },
        {
            "id": 818,
            "questionText": "In the context of the CPFIS, what is the 'Investment Quality' requirement for Corporate Bonds to be included under the Ordinary Account?",
            "options": [
              { "text": "The bonds must be issued by the Singapore Government.", "isCorrect": false },
              { "text": "The bonds must be fully paid and listed on the SGX-ST.", "isCorrect": true },
              { "text": "The bonds must have a minimum credit rating of 'AAA'.", "isCorrect": false },
              { "text": "The bonds must be secured by physical real estate assets.", "isCorrect": false }
            ],
            "explanation": "Correct. For corporate bonds to be eligible for CPFIS-OA, they must be incorporated in Singapore, fully paid, and listed on the Singapore Exchange (SGX-ST).",
            "difficulty": 6,
            "topic": "CPF"
        },
        {
            "id": 819,
            "questionText": "Which of the following is a primary characteristic of a 'Business Trust' in Singapore?",
            "options": [
              { "text": "It is a pure investment fund that must distribute 90% of its income.", "isCorrect": false },
              { "text": "It is a hybrid structure that combines elements of a company and a trust.", "isCorrect": true },
              { "text": "It is governed solely by the Companies Act.", "isCorrect": false },
              { "text": "Unitholders have the same limited liability protection as shareholders in a private company.", "isCorrect": false }
            ],
            "explanation": "Correct. A Business Trust is a hybrid entity that is constituted as a trust but operates and is managed like a company, with an active business undertaking.",
            "difficulty": 7,
            "topic": "CIS Structure"
        },
        {
            "id": 820,
            "questionText": "When calculating the 'Effective Interest Rate', why is it typically higher than the 'Nominal Interest Rate'?",
            "options": [
              { "text": "It accounts for the impact of inflation over time.", "isCorrect": false },
              { "text": "It accounts for the effects of compounding frequency within a year.", "isCorrect": true },
              { "text": "It includes the brokerage and sales charges of the investment.", "isCorrect": false },
              { "text": "It is the rate used to discount future cash flows to the present.", "isCorrect": false }
            ],
            "explanation": "Correct. The effective annual rate is higher than the nominal rate because it reflects the effect of compounding interest more than once per year.",
            "difficulty": 5,
            "topic": "TVM"
        },
        {
            "id": 821,
            "questionText": "A 'Single-Period' investment return calculation must include which two components?",
            "options": [
              { "text": "Initial investment and the inflation rate.", "isCorrect": false },
              { "text": "Capital gain/loss and any dividends/income received.", "isCorrect": true },
              { "text": "The standard deviation and the beta of the asset.", "isCorrect": false },
              { "text": "The nominal rate and the effective interest rate.", "isCorrect": false }
            ],
            "explanation": "Correct. The total return for a single period is calculated as (Ending Price - Beginning Price + Income) / Beginning Price, which combines capital appreciation and income received.",
            "difficulty": 4,
            "topic": "Performance Measurement"
        },
        {
            "id": 822,
            "questionText": "According to the 'Efficient Market Hypothesis', if an investor can consistently make profits using 'Technical Analysis' (past price patterns), which form of market efficiency is violated?",
            "options": [
              { "text": "Weak Form", "isCorrect": false },
              { "text": "Semi-Strong Form", "isCorrect": false },
              { "text": "Strong Form", "isCorrect": false },
              { "text": "All of the above", "isCorrect": true }
            ],
            "explanation": "Correct. Weak-form efficiency states that past price data is already reflected in current prices. If technical analysis works, weak-form is violated. Since semi-strong and strong forms build upon weak-form, they are all violated as a consequence.",
            "difficulty": 8,
            "topic": "Market Efficiency"
        },
        {
            "id": 823,
            "questionText": "What is the primary difference between a 'Rights Issue' and a 'Bonus Issue' regarding a company's cash flow?",
            "options": [
              { "text": "A Bonus Issue results in a cash inflow; a Rights Issue does not.", "isCorrect": false },
              { "text": "A Rights Issue results in a cash inflow; a Bonus Issue does not.", "isCorrect": true },
              { "text": "Both result in a cash inflow to the company.", "isCorrect": false },
              { "text": "Neither results in any change to the company's cash position.", "isCorrect": false }
            ],
            "explanation": "Correct. In a Rights Issue, existing shareholders are invited to purchase new shares, bringing fresh capital into the company. A Bonus Issue is a non-cash transaction that capitalizes reserves by issuing free shares to existing shareholders.",
            "difficulty": 6,
            "topic": "Equities"
        },
        {
            "id": 824,
            "questionText": "In a 'Collateralised Debt Obligation' (CDO), who receives payments last and bears the highest risk of loss?",
            "options": [
              { "text": "The Senior Tranche", "isCorrect": false },
              { "text": "The Mezzanine Tranche", "isCorrect": false },
              { "text": "The Equity/Junior Tranche", "isCorrect": true },
              { "text": "The Special Purpose Entity (SPE)", "isCorrect": false }
            ],
            "explanation": "Correct. The Equity or Junior tranche is the first to absorb losses from defaults in the underlying asset pool, and the last to receive principal payments, making it the riskiest but also offering the highest potential yield.",
            "difficulty": 7,
            "topic": "Structured Products"
        },
        {
            "id": 825,
            "questionText": "Which risk is specifically associated with the use of 'Financial Leverage' in a property investment?",
            "options": [
              { "text": "Capital Appreciation Risk", "isCorrect": false },
              { "text": "Negative Cash Flow Risk", "isCorrect": true },
              { "text": "Inflation Risk", "isCorrect": false },
              { "text": "Sovereign Risk", "isCorrect": false }
            ],
            "explanation": "Correct. Financial leverage involves borrowing. If the rental income from the property is insufficient to cover the mortgage payments and other expenses, the investor faces negative cash flow.",
            "difficulty": 6,
            "topic": "Risk Management"
        },
        {
            "id": 826,
            "questionText": "A fund's 'Tracking Error' is most relevant when evaluating which type of fund?",
            "options": [
              { "text": "Hedge Fund", "isCorrect": false },
              { "text": "Active Equity Fund", "isCorrect": false },
              { "text": "Index Fund / ETF", "isCorrect": true },
              { "text": "Money Market Fund", "isCorrect": false }
            ],
            "explanation": "Correct. Tracking error measures how much a fund's performance deviates from its benchmark index. This is a critical metric for index funds and ETFs, which are designed to replicate an index as closely as possible.",
            "difficulty": 5,
            "topic": "Performance Measurement"
        },
        {
            "id": 827,
            "questionText": "If an investor is concerned about 'Specific Risk' in their portfolio, what is the MOST effective strategy to mitigate it?",
            "options": [
              { "text": "Buying Put Options on the entire market index.", "isCorrect": false },
              { "text": "Increasing the number of stocks from different industries.", "isCorrect": true },
              { "text": "Moving all assets into cash equivalents.", "isCorrect": false },
              { "text": "Switching from Value investing to Growth investing.", "isCorrect": false }
            ],
            "explanation": "Correct. Specific (or Unsystematic) risk is company-specific. Modern Portfolio Theory shows it can be effectively eliminated by diversifying across a sufficient number of unrelated assets.",
            "difficulty": 6,
            "topic": "Risk Management"
        },
        {
            "id": 828,
            "questionText": "Which of the following describes an 'Exchange Traded Note' (ETN)?",
            "options": [
              { "text": "A fund that holds a physical basket of stocks and trades on the exchange.", "isCorrect": false },
              { "text": "A senior unsecured debt security issued by a bank that tracks an index.", "isCorrect": true },
              { "text": "A certificate representing ownership in physical gold.", "isCorrect": false },
              { "text": "A derivative contract that gives the holder the right to buy bonds.", "isCorrect": false }
            ],
            "explanation": "Correct. Unlike an ETF, an ETN does not hold any underlying assets. It is a debt note where the issuing bank promises to pay the return of a specific index, exposing the investor to the bank's credit risk.",
            "difficulty": 8,
            "topic": "ETFs & ETNs"
        },
        {
            "id": 829,
            "questionText": "The 'Sharpe Ratio' is considered a measure of:",
            "options": [
              { "text": "Return per unit of Systematic Risk.", "isCorrect": false },
              { "text": "Return per unit of Total Risk.", "isCorrect": true },
              { "text": "The volatility of a fund relative to the market.", "isCorrect": false },
              { "text": "The percentage of a fund's assets held in cash.", "isCorrect": false }
            ],
            "explanation": "Correct. The Sharpe Ratio calculates risk-adjusted return using the portfolio's standard deviation as the measure of risk, which captures both systematic and unsystematic (total) risk.",
            "difficulty": 6,
            "topic": "Performance Measurement"
        },
        {
            "id": 830,
            "questionText": "What happens to the 'Subscription Right' of a shareholder who takes no action during a Rights Issue?",
            "options": [
              { "text": "The rights are automatically converted into new shares.", "isCorrect": false },
              { "text": "The company refunds the value of the rights to the shareholder.", "isCorrect": false },
              { "text": "The rights lapse and become worthless after the expiration date.", "isCorrect": true },
              { "text": "The rights are sold by the company on behalf of the shareholder.", "isCorrect": false }
            ],
            "explanation": "Correct. Subscription rights have an expiry date. If a shareholder does not exercise them (by subscribing) or sell them on the market, they will expire and become worthless.",
            "difficulty": 5,
            "topic": "Equities"
        },
        {
            "id": 831,
            "questionText": "A 'Time Deposit' is characterized by:",
            "options": [
              { "text": "High liquidity and the ability to withdraw cash anytime without penalty.", "isCorrect": false },
              { "text": "A specified period of time and potentially higher interest than a savings account.", "isCorrect": true },
              { "text": "No specified maturity date and daily fluctuating interest rates.", "isCorrect": false },
              { "text": "Ownership interest in the bank issuing the deposit.", "isCorrect": false }
            ],
            "explanation": "Correct. Time deposits (or fixed deposits) require funds to be held for a fixed term (e.g., 3, 6, 12 months) in exchange for a fixed, and usually higher, interest rate than a demand deposit account.",
            "difficulty": 2,
            "topic": "Basic Products"
        },
        {
            "id": 832,
            "questionText": "Which of the following is a 'Direct' benefit of an Investment-Linked Policy (ILP)?",
            "options": [
              { "text": "Guaranteed minimum returns regardless of market performance.", "isCorrect": false },
              { "text": "The ability to choose from a variety of underlying investment funds.", "isCorrect": true },
              { "text": "Annual reversionary bonuses that are added to the sum assured.", "isCorrect": false },
              { "text": "Exemption from all mortality and administrative charges.", "isCorrect": false }
            ],
            "explanation": "Correct. One of the primary features and benefits of an ILP is the flexibility it offers policyholders to select and switch between different sub-funds to match their risk appetite.",
            "difficulty": 4,
            "topic": "ILPs"
        },
        {
            "id": 833,
            "questionText": "An investor wants to hedge against 'Inflation'. Which asset class is historically considered the best hedge?",
            "options": [
              { "text": "Fixed-rate Corporate Bonds", "isCorrect": false },
              { "text": "Ordinary Shares (Equities)", "isCorrect": true },
              { "text": "Cash in a savings account", "isCorrect": false },
              { "text": "Treasury Bills", "isCorrect": false }
            ],
            "explanation": "Correct. Equities are considered a good inflation hedge because companies can often pass on increased costs to consumers and grow their earnings, which can lead to share price appreciation.",
            "difficulty": 5,
            "topic": "Asset Classes"
        },
        {
            "id": 834,
            "questionText": "What is the primary function of the 'Clearing House' in a Futures exchange?",
            "options": [
              { "text": "To provide investment advice to retail traders.", "isCorrect": false },
              { "text": "To act as the counterparty to every trade to minimize credit risk.", "isCorrect": true },
              { "text": "To set the daily interest rates for margin loans.", "isCorrect": false },
              { "text": "To issue new shares for companies in the primary market.", "isCorrect": false }
            ],
            "explanation": "Correct. The clearing house guarantees the performance of contracts by becoming the buyer to every seller and the seller to every buyer, thereby eliminating counterparty default risk between trading members.",
            "difficulty": 6,
            "topic": "Derivatives"
        },
        {
            "id": 835,
            "questionText": "A 'Floating Rate' bond is most attractive to an investor when they expect:",
            "options": [
              { "text": "Market interest rates to remain stable.", "isCorrect": false },
              { "text": "Market interest rates to fall.", "isCorrect": false },
              { "text": "Market interest rates to rise.", "isCorrect": true },
              { "text": "The issuer to call the bond back early.", "isCorrect": false }
            ],
            "explanation": "Correct. A floating rate bond's coupon payments adjust periodically based on a benchmark interest rate. If an investor expects rates to rise, they would prefer a floating rate bond to capture the higher yields.",
            "difficulty": 5,
            "topic": "Bonds"
        },
        {
            "id": 836,
            "questionText": "Regarding 'Value-at-Risk' (VAR), which of the following is a recognized limitation?",
            "options": [
              { "text": "It is unable to quantify potential losses in simple dollar terms.", "isCorrect": false },
              { "text": "It has not been approved by regulatory bodies for risk measurement.", "isCorrect": false },
              { "text": "It has a tendency to underestimate 'worst-case' or 'tail-risk' outcomes.", "isCorrect": true },
              { "text": "It can only be used for individual stocks, not overall portfolios.", "isCorrect": false }
            ],
            "explanation": "Correct. VAR is a statistical measure that typically assumes a normal distribution of returns. It is poor at predicting the magnitude of losses during extreme, non-normal market events (tail risk).",
            "difficulty": 8,
            "topic": "Risk Management"
        },
        {
            "id": 837,
            "questionText": "In the CPFIS-SA (Special Account), which of the following is explicitly DISALLOWED?",
            "options": [
              { "text": "Singapore Government Bonds (SGBs)", "isCorrect": false },
              { "text": "Annuities and Endowment policies", "isCorrect": false },
              { "text": "Individual Shares and Corporate Bonds", "isCorrect": true },
              { "text": "Low-to-Medium risk Unit Trusts", "isCorrect": false }
            ],
            "explanation": "Correct. The Special Account is reserved for retirement and can only be invested in lower-risk instruments. Direct investment in individual shares and corporate bonds is restricted to the Ordinary Account.",
            "difficulty": 7,
            "topic": "CPF"
        },
        {
            "id": 838,
            "questionText": "What is 'Market Surveillance' in the context of the SGX's regulatory functions?",
            "options": [
              { "text": "Setting the opening and closing prices of all listed stocks.", "isCorrect": false },
              { "text": "Monitoring trading activity to detect potential market manipulation or insider trading.", "isCorrect": true },
              { "text": "Managing the customer service departments of listed companies.", "isCorrect": false },
              { "text": "Approving the personal bank loans of company directors.", "isCorrect": false }
            ],
            "explanation": "Correct. Market surveillance is the process by which the exchange monitors trading to ensure a fair, orderly, and transparent market, and to detect and deter abusive trading practices.",
            "difficulty": 4,
            "topic": "Regulation"
        },
        {
            "id": 839,
            "questionText": "A 'Debenture' is best described as:",
            "options": [
              { "text": "A bond backed by a specific piece of machinery or property.", "isCorrect": false },
              { "text": "An unsecured loan based on the general creditworthiness of the issuer.", "isCorrect": true },
              { "text": "A bond that can be converted into the issuer's common shares.", "isCorrect": false },
              { "text": "A debt instrument issued by a local statutory board.", "isCorrect": false }
            ],
            "explanation": "Correct. A debenture is a type of bond that is not secured by any physical collateral or assets. Its backing relies solely on the issuer's full faith and credit.",
            "difficulty": 5,
            "topic": "Bonds"
        },
        {
            "id": 840,
            "questionText": "Which of the following describes a 'Reversionary Bonus' in a with-profits policy?",
            "options": [
              { "text": "A cash payment made directly to the policyholder every year.", "isCorrect": false },
              { "text": "An addition to the sum assured that is payable upon death or maturity.", "isCorrect": true },
              { "text": "A discount on the next year's premium based on fund performance.", "isCorrect": false },
              { "text": "The right to buy additional units in an investment-linked fund.", "isCorrect": false }
            ],
            "explanation": "Correct. A reversionary bonus is declared by the insurer from the profits of the participating fund and is added to the policy's sum assured. Once declared, it is guaranteed to be paid out at the end of the policy term.",
            "difficulty": 6,
            "topic": "Life Insurance"
        },
        {
            "id": 841,
            "questionText": "What is the primary objective of 'Growth Investing'?",
            "options": [
              { "text": "To maximize regular dividend income for unitholders.", "isCorrect": false },
              { "text": "To invest in companies with high potential for earnings and price appreciation.", "isCorrect": true },
              { "text": "To find undervalued 'bargain' stocks that the market has ignored.", "isCorrect": false },
              { "text": "To maintain a 100% allocation to high-quality government bonds.", "isCorrect": false }
            ],
            "explanation": "Correct. Growth investing focuses on companies that are expected to grow their sales and earnings at a faster rate than the overall market, leading to capital appreciation.",
            "difficulty": 3,
            "topic": "Investment Styles"
        },
        {
            "id": 842,
            "questionText": "A 'Single-Country' equity fund faces higher risk than a 'Global' equity fund primarily due to a lack of:",
            "options": [
              { "text": "Professional management.", "isCorrect": false },
              { "text": "Geographical diversification.", "isCorrect": true },
              { "text": "Capital appreciation potential.", "isCorrect": false },
              { "text": "Marketability liquidity.", "isCorrect": false }
            ],
            "explanation": "Correct. By concentrating all investments in a single country, the fund is exposed to that country's specific economic, political, and currency risks, which could be mitigated through geographical diversification.",
            "difficulty": 4,
            "topic": "Risk Management"
        },
        {
            "id": 843,
            "questionText": "Under the 'Revised Code on CIS', fund managers are required to introduce 'Weighted Portfolio Maturities' for which type of fund?",
            "options": [
              { "text": "Global Equity Funds", "isCorrect": false },
              { "text": "Money Market Funds", "isCorrect": true },
              { "text": "Hedge Funds", "isCorrect": false },
              { "text": "REITs", "isCorrect": false }
            ],
            "explanation": "Correct. This requirement was introduced to ensure that Money Market Funds maintain their low-risk profile by managing the maturity of their underlying short-term debt instruments, thus preserving liquidity and capital stability.",
            "difficulty": 8,
            "topic": "Regulation"
        },
        {
            "id": 844,
            "questionText": "Which of the following is considered a 'Capital Market' instrument?",
            "options": [
              { "text": "A 90-day Treasury Bill.", "isCorrect": false },
              { "text": "Commercial Paper issued for 6 months.", "isCorrect": false },
              { "text": "A 10-year Corporate Bond.", "isCorrect": true },
              { "text": "A Repurchase Agreement (Repo) for 30 days.", "isCorrect": false }
            ],
            "explanation": "Correct. Capital markets deal with long-term financing. Instruments with maturities of more than one year, like a 10-year bond, are considered capital market instruments.",
            "difficulty": 4,
            "topic": "Financial Markets"
        },
        {
            "id": 845,
            "questionText": "A 'Price-to-Earnings (P/E)' ratio that is significantly lower than the industry average might attract which type of manager?",
            "options": [
              { "text": "Growth Manager", "isCorrect": false },
              { "text": "Value Manager", "isCorrect": true },
              { "text": "Passive Index Manager", "isCorrect": false },
              { "text": "Top-down Manager", "isCorrect": false }
            ],
            "explanation": "Correct. Value managers specialize in finding stocks that they believe are trading for less than their intrinsic value. A low P/E ratio is often a key indicator of an undervalued company.",
            "difficulty": 5,
            "topic": "Investment Styles"
        },
        {
            "id": 846,
            "questionText": "What is the 'Maximum Capital Loss' for a buyer of a Call Option?",
            "options": [
              { "text": "The difference between the market price and the strike price.", "isCorrect": false },
              { "text": "The total value of the underlying shares.", "isCorrect": false },
              { "text": "The amount of the option premium paid.", "isCorrect": true },
              { "text": "There is no maximum loss; it is potentially unlimited.", "isCorrect": false }
            ],
            "explanation": "Correct. The buyer of an option (call or put) has the right, not the obligation, to exercise it. Their maximum loss is limited to the premium paid to acquire that right.",
            "difficulty": 6,
            "topic": "Derivatives"
        },
        {
            "id": 847,
            "questionText": "Regarding 'Annuities', what is the difference between an 'Immediate' and 'Deferred' annuity?",
            "options": [
              { "text": "Immediate is bought with a lump sum; Deferred is only bought with periodic payments.", "isCorrect": false },
              { "text": "Immediate starts payments right away; Deferred starts at a future date.", "isCorrect": true },
              { "text": "Immediate is for life; Deferred is only for a fixed number of years.", "isCorrect": false },
              { "text": "Immediate is only offered by banks; Deferred is only by insurance companies.", "isCorrect": false }
            ],
            "explanation": "Correct. This is the fundamental distinction. An immediate annuity starts paying out income shortly after it is purchased (usually within a year), while a deferred annuity has an accumulation period before payouts begin at a specified future date.",
            "difficulty": 3,
            "topic": "Annuities"
        },
        {
            "id": 848,
            "questionText": "Which of the following is an 'Internal Efficiency' indicator for a financial market?",
            "options": [
              { "text": "Prices reflecting all known information immediately.", "isCorrect": false },
              { "text": "Low transaction costs, such as brokerage and clearing fees.", "isCorrect": true },
              { "text": "High trading volume in the secondary market.", "isCorrect": false },
              { "text": "A large number of companies listing via IPO.", "isCorrect": false }
            ],
            "explanation": "Correct. Internal or operational efficiency refers to how cheaply and quickly trades can be executed. Low transaction costs are a key measure of this.",
            "difficulty": 7,
            "topic": "Market Efficiency"
        },
        {
            "id": 849,
            "questionText": "If a manager has a 'Beta' of 1.5 and the market return is 10% while the risk-free rate is 2%, what is the 'Required Return' according to CAPM?",
            "options": [
              { "text": "10%", "isCorrect": false },
              { "text": "12%", "isCorrect": false },
              { "text": "14%", "isCorrect": true },
              { "text": "15%", "isCorrect": false }
            ],
            "explanation": "Correct. The CAPM formula is: Required Return = Risk-Free Rate + Beta * (Market Return - Risk-Free Rate). RR = 2% + 1.5 * (10% - 2%) = 2% + 1.5 * 8% = 2% + 12% = 14%.",
            "difficulty": 8,
            "topic": "Performance Measurement"
        },
        {
            "id": 850,
            "questionText": "Which document spells out the 'Duties and Responsibilities' of the manager and trustee in a Singapore Unit Trust?",
            "options": [
              { "text": "The Fund Prospectus", "isCorrect": false },
              { "text": "The Trust Deed", "isCorrect": true },
              { "text": "The Product Highlights Sheet (PHS)", "isCorrect": false },
              { "text": "The Investment Mandate", "isCorrect": false }
            ],
            "explanation": "Correct. The Trust Deed is the legally binding constitutive document that establishes the unit trust and sets out the rights, duties, and responsibilities of the fund manager, the trustee, and the unitholders.",
            "difficulty": 6,
            "topic": "CIS Structure"
        }
    ]
};
