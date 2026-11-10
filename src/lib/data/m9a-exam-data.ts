
import type { Quiz } from "../types";

export const m9aExam: Quiz = {
    id: "m9a-exam",
    year: "2024",
    title: "M9A Mock Exam",
    description: "A 50-question master mock exam for the M9A (Life Insurance And Investment-Linked Policies II) paper in Singapore, with a heavy focus on structured products and derivatives.",
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
            id: 601,
            questionText: { english: "A structured product is created by combining a traditional asset, such as a zero-coupon bond, with a financial derivative. What is the primary purpose of using the zero-coupon bond component in this structure?" },
            options: [
                { text: { english: "To fund the upfront cost of the derivative (option)." }, isCorrect: false },
                { text: { english: "To provide the non-guaranteed upside potential." }, isCorrect: false },
                { text: { english: "To guarantee the repayment of the principal amount at maturity." }, isCorrect: true },
                { text: { english: "To generate a high current interest income during the term." }, isCorrect: false }
            ],
            explanation: { english: "The zero-coupon bond is bought at a discount and matures at its face value (principal). This fixed return portion serves as the vehicle to guarantee the return of the principal amount at the end of the term, regardless of derivative performance (Ch 1, 2.3)." },
            difficulty: 6,
            topic: "Structured Products"
        },
        {
            id: 602,
            questionText: { english: "A structured product uses an embedded put option in its structure. What risk exposure is this put option most commonly used to transfer?" },
            options: [
                { text: { english: "Interest rate risk." }, isCorrect: false },
                { text: { english: "Credit risk." }, isCorrect: false },
                { text: { english: "Downside market risk (loss of capital)." }, isCorrect: true },
                { text: { english: "Foreign exchange risk." }, isCorrect: false }
            ],
            explanation: { english: "A purchased put option gives the holder the right to sell an asset at a predetermined price (the strike price). This protects the holder from a decline in the asset's price, thereby transferring the downside market risk to the option seller (Ch 2, 2.3)." },
            difficulty: 7,
            topic: "Options"
        },
        {
            id: 603,
            questionText: { english: "An Investment-Linked Policy (ILP) uses a Capital Guaranteed Structure where the principal is protected by a separate zero-coupon bond component. The primary counterparty risk in this arrangement rests with the:" },
            options: [
                { text: { english: "Custodian who holds the ILP fund assets." }, isCorrect: false },
                { text: { english: "Life insurer who issued the ILP." }, isCorrect: false },
                { text: { english: "Issuer of the underlying zero-coupon bond." }, isCorrect: true },
                { text: { english: "Fund manager who selects the remaining assets." }, isCorrect: false }
            ],
            explanation: { english: "The guarantee of the principal depends entirely on the issuer of the debt instrument used for protection. If the issuer of the zero-coupon bond defaults, the principal protection mechanism fails (Ch 4, 3.1)." },
            difficulty: 8,
            topic: "ILPs"
        }
    ],
    questionsEasy: [],
    questionsHard: [
        {
            id: 9001,
            questionText: { english: 'In the context of Investment-Linked Policies (ILPs), what is "bid-offer spread"?' },
            options: [
                { text: { english: "The difference between the buying price and the selling price of fund units." }, isCorrect: true },
                { text: { english: "The administrative fee charged for switching funds." }, isCorrect: false },
                { text: { english: "The penalty fee for partial withdrawal." }, isCorrect: false },
                { text: { english: "The tax rate applied to capital gains." }, isCorrect: false }
            ],
            explanation: { english: "The bid-offer spread is the difference between the price at which the insurer buys units (bid) and sells them (offer) to the policyholder; it essentially acts as a front-end load or transaction cost. Other options describe switching fees, surrender charges, or taxes, which are distinct from the spread." },
            difficulty: 7,
            topic: "ILPs"
        },
        {
            id: 9002,
            questionText: { english: 'Under a "Bonus Certificate" structure, what happens if the "Knock-out" barrier is breached?' },
            options: [
                { text: { english: "The investor receives a higher bonus." }, isCorrect: false },
                { text: { english: "The principal protection is immediately enhanced." }, isCorrect: false },
                { text: { english: "The investor loses the conditional protection and is exposed to the full downside of the underlying." }, isCorrect: true },
                { text: { english: "The product is automatically converted into a fixed deposit." }, isCorrect: false }
            ],
            explanation: { english: 'A "Knock-out" event occurs when the underlying asset hits a predetermined low point, removing the "bonus" protection and making the certificate perform exactly like the underlying asset, potentially leading to principal loss.' },
            difficulty: 8,
            topic: "Structured Products"
        },
        {
            id: 9003,
            questionText: { english: 'Which of the following describes a "European Style" option?' },
            options: [
                { text: { english: "It can be exercised at any time before expiry." }, isCorrect: false },
                { text: { english: "It can only be exercised on the expiry date." }, isCorrect: true },
                { text: { english: "It is only available for stocks listed in London or Paris." }, isCorrect: false },
                { text: { english: "It guarantees a profit regardless of market conditions." }, isCorrect: false }
            ],
            explanation: { english: "European options restrict exercise to the expiration date only, whereas American options allow exercise at any point until expiry. It refers to the exercise style, not the geographical location of the asset." },
            difficulty: 6,
            topic: "Options"
        },
        {
            id: 9004,
            questionText: { english: 'In a "Participation Note," what does the "Participation Rate" determine?' },
            options: [
                { text: { english: "The percentage of the investor's principal that is at risk." }, isCorrect: false },
                { text: { english: "The amount of dividends the investor receives." }, isCorrect: false },
                { text: { english: "The extent to which the investor shares in the price appreciation of the underlying asset." }, isCorrect: true },
                { text: { english: "The frequency of interest payments." }, isCorrect: false }
            ],
            explanation: { english: "The participation rate (e.g., 80%) determines how much of the underlying asset's growth the investor receives; it does not dictate the risk to the principal or the frequency of payments." },
            difficulty: 7,
            topic: "Structured Products"
        },
        {
            id: 9005,
            questionText: { english: 'What is the primary purpose of "Value at Risk" (VaR) in a portfolio?' },
            options: [
                { text: { english: "To calculate the maximum possible profit." }, isCorrect: false },
                { text: { english: "To estimate the potential loss in value of a portfolio over a defined period for a given confidence interval." }, isCorrect: true },
                { text: { english: "To determine the insurance premium for a policy." }, isCorrect: false },
                { text: { english: "To eliminate all market risks." }, isCorrect: false }
            ],
            explanation: { english: "VaR is a statistical technique used to measure the level of financial risk within a firm or portfolio over a specific time frame; it measures potential loss, not profit, and it cannot eliminate risk." },
            difficulty: 7,
            topic: "Risk Management"
        },
        {
            id: 9006,
            questionText: { english: 'Which risk is specifically associated with the failure of the institution that issued a structured product?' },
            options: [
                { text: { english: "Liquidity Risk" }, isCorrect: false },
                { text: { english: "Market Risk" }, isCorrect: false },
                { text: { english: "Credit/Counterparty Risk" }, isCorrect: true },
                { text: { english: "Inflation Risk" }, isCorrect: false }
            ],
            explanation: { english: "Credit or Counterparty risk is the risk that the issuer (often a bank) defaults on its obligations. Even if the underlying market performs well, the investor may lose money if the issuer goes bankrupt." },
            difficulty: 6,
            topic: "Risk Management"
        },
        {
            id: 9007,
            questionText: { english: 'A "Reverse Convertible" note is most likely to result in a loss of principal if:' },
            options: [
                { text: { english: "The underlying asset price stays flat." }, isCorrect: false },
                { text: { english: "The underlying asset price rises significantly." }, isCorrect: false },
                { text: { english: "The underlying asset price falls below the strike price/barrier." }, isCorrect: true },
                { text: { english: "The issuer's credit rating is upgraded." }, isCorrect: false }
            ],
            explanation: { english: "Reverse convertibles pay a high coupon but may return shares instead of cash if the underlying asset drops below a certain level, meaning the investor suffers if the market price is lower than the strike price." },
            difficulty: 8,
            topic: "Structured Products"
        },
        {
            id: 9008,
            questionText: { english: 'What is "Tracking Error" in the context of an Index-Linked ILP?' },
            options: [
                { text: { english: "The time delay in executing a trade." }, isCorrect: false },
                { text: { english: "The discrepancy between the performance of the ILP fund and its benchmark index." }, isCorrect: true },
                { text: { english: "The error made by the investor when choosing a fund." }, isCorrect: false },
                { text: { english: "The difference between the fund's NAV and its bid price." }, isCorrect: false }
            ],
            explanation: { english: "Tracking error measures how closely a fund follows the index it is supposed to mimic. A high tracking error means the fund's returns are significantly different (better or worse) than the index." },
            difficulty: 5,
            topic: "ILPs"
        },
        {
            id: 9009,
            questionText: { english: 'Which derivative provides the holder with the right, but not the obligation, to sell an asset at a set price?' },
            options: [
                { text: { english: "Call Option" }, isCorrect: false },
                { text: { english: "Put Option" }, isCorrect: true },
                { text: { english: "Futures Contract" }, isCorrect: false },
                { text: { english: "Forward Contract" }, isCorrect: false }
            ],
            explanation: { english: 'A "Put" option gives the holder the right to sell (put) the asset. A "Call" gives the right to buy. Futures and Forwards are obligations, not rights.' },
            difficulty: 4,
            topic: "Options"
        },
        {
            id: 9010,
            questionText: { english: 'In a "Range Accrual" note, the investor earns interest:' },
            options: [
                { text: { english: "Only if the underlying asset stays within a specific price range." }, isCorrect: true },
                { text: { english: "Every time the underlying asset hits a new high." }, isCorrect: false },
                { text: { english: "Only when the product expires." }, isCorrect: false },
                { text: { english: "At a fixed rate regardless of market movement." }, isCorrect: false }
            ],
            explanation: { english: "Range accrual notes pay coupons for every day the underlying asset stays within a pre-defined range. If it moves outside that range, no interest is accrued for those days." },
            difficulty: 7,
            topic: "Structured Products"
        },
        {
            id: 9011,
            questionText: { english: 'What is the main advantage of a "Zero-Coupon Bond" in a structured product?' },
            options: [
                { text: { english: "It pays high monthly dividends." }, isCorrect: false },
                { text: { english: "It is sold at a deep discount and matures at par, providing capital to purchase derivatives." }, isCorrect: true },
                { text: { english: "It protects the investor from all forms of inflation." }, isCorrect: false },
                { text: { english: "It allows the investor to vote at company meetings." }, isCorrect: false }
            ],
            explanation: { english: "Structured products often use a zero-coupon bond to guarantee principal return at maturity. The difference between the discounted purchase price and the face value is used to buy options for 'upside' potential." },
            difficulty: 6,
            topic: "Bonds"
        },
        {
            id: 9012,
            questionText: { english: 'An investor is "Short" on a Futures contract. They will profit if:' },
            options: [
                { text: { english: "The price of the underlying asset rises." }, isCorrect: false },
                { text: { english: "The price of the underlying asset falls." }, isCorrect: true },
                { text: { english: "The volatility of the asset decreases." }, isCorrect: false },
                { text: { english: "The interest rates remain unchanged." }, isCorrect: false }
            ],
            explanation: { english: 'Being "Short" means selling first with the intent to buy back later at a lower price. Therefore, the investor profits when the price declines.' },
            difficulty: 5,
            topic: "Futures"
        },
        {
            id: 9013,
            questionText: { english: 'Which of the following is an example of "Basis Risk"?' },
            options: [
                { text: { english: "The risk that an issuer will default." }, isCorrect: false },
                { text: { english: "The risk that the price of a hedging instrument does not move exactly in line with the asset being hedged." }, isCorrect: true },
                { text: { english: "The risk of loss due to a change in tax laws." }, isCorrect: false },
                { text: { english: "The risk that an investor cannot sell their units quickly." }, isCorrect: false }
            ],
            explanation: { english: "Basis risk occurs when there is an imperfect correlation between the offsetting investments in a hedge, leading to unexpected gains or losses." },
            difficulty: 8,
            topic: "Risk Management"
        },
        {
            id: 9014,
            questionText: { english: 'What is the "Strike Price" of an option?' },
            options: [
                { text: { english: "The price at which the underlying asset is currently trading." }, isCorrect: false },
                { text: { english: "The price at which the option holder can buy or sell the underlying asset." }, isCorrect: true },
                { text: { english: "The cost of buying the option (the premium)." }, isCorrect: false },
                { text: { english: "The maximum price the asset has reached in the last year." }, isCorrect: false }
            ],
            explanation: { english: 'The strike price is the fixed price per share at which the option can be exercised. The "Premium" is the cost to buy the option itself.' },
            difficulty: 3,
            topic: "Options"
        },
        {
            id: 9015,
            questionText: { english: 'If an ILP fund is "Forward Priced," it means:' },
            options: [
                { text: { english: "The price is determined based on the previous day's closing." }, isCorrect: false },
                { text: { english: "The price is determined at the next valuation point after the order is received." }, isCorrect: true },
                { text: { english: "The investor knows the exact price at the moment they place the order." }, isCorrect: false },
                { text: { english: "The price is fixed for the next 12 months." }, isCorrect: false }
            ],
            explanation: { english: 'Forward pricing ensures that investors cannot "market-time" by using stale prices. The price is calculated after the buy/sell request is submitted, usually at the end of the business day.' },
            difficulty: 6,
            topic: "ILPs"
        },
        {
            id: 9016,
            questionText: { english: 'What does "Gamma" measure in option Greeks?' },
            options: [
                { text: { english: "The rate of change in Delta relative to the underlying asset's price." }, isCorrect: true },
                { text: { english: "The sensitivity of the option price to time decay." }, isCorrect: false },
                { text: { english: "The sensitivity of the option price to interest rate changes." }, isCorrect: false },
                { text: { english: "The sensitivity of the option price to volatility." }, isCorrect: false }
            ],
            explanation: { english: "Gamma measures how much the Delta changes as the asset price moves. It helps traders understand the stability of an option's probability of being in-the-money." },
            difficulty: 9,
            topic: "Options"
        },
        {
            id: 9017,
            questionText: { english: 'A "Knock-in" option only becomes active (comes into existence) when:' },
            options: [
                { text: { english: "The investor pays an extra premium." }, isCorrect: false },
                { text: { english: "The underlying asset price reaches a certain trigger level." }, isCorrect: true },
                { text: { english: "The investor reaches age 65." }, isCorrect: false },
                { text: { english: "The option reaches its expiration date." }, isCorrect: false }
            ],
            explanation: { english: 'Barrier options like "Knock-ins" are dormant until a specific price barrier is hit. Once hit, the option "knocks in" and behaves like a standard option.' },
            difficulty: 7,
            topic: "Options"
        },
        {
            id: 9018,
            questionText: { english: '"Delta Neutral" hedging is a strategy used to:' },
            options: [
                { text: { english: "Maximize exposure to market direction." }, isCorrect: false },
                { text: { english: "Make a portfolio insensitive to small changes in the price of the underlying asset." }, isCorrect: true },
                { text: { english: "Ensure the portfolio only profits when the market goes down." }, isCorrect: false },
                { text: { english: "Avoid paying any transaction fees." }, isCorrect: false }
            ],
            explanation: { english: "Delta Neutral strategies involve balancing positive and negative deltas so that the overall value remains relatively stable despite small price movements in the underlying asset." },
            difficulty: 8,
            topic: "Hedging"
        },
        {
            id: 9019,
            questionText: { english: 'Which of the following is NOT a feature of a "Standard" ILP?' },
            options: [
                { text: { english: "Investment risk is borne by the policyholder." }, isCorrect: false },
                { text: { english: "Mortality charges are usually deducted by canceling units." }, isCorrect: false },
                { text: { english: "The insurer guarantees a minimum 5% annual return on the funds." }, isCorrect: true },
                { text: { english: "Premium holidays may be allowed after a certain period." }, isCorrect: false }
            ],
            explanation: { english: "In an ILP, the investment risk lies with the policyholder, and the insurer does not guarantee returns. The performance depends on the chosen funds." },
            difficulty: 4,
            topic: "ILPs"
        },
        {
            id: 9020,
            questionText: { english: 'What is "Contango" in the futures market?' },
            options: [
                { text: { english: "When the futures price is lower than the spot price." }, isCorrect: false },
                { text: { english: "When the futures price is higher than the spot price." }, isCorrect: true },
                { text: { english: "When the price of a commodity is stable for 30 days." }, isCorrect: false },
                { text: { english: "A type of dance performed at financial galas." }, isCorrect: false }
            ],
            explanation: { english: 'Contango occurs when the futures price is higher than the current spot price, often due to storage costs and insurance (carrying costs). The opposite is "Backwardation."' },
            difficulty: 7,
            topic: "Futures"
        },
        {
            id: 9021,
            questionText: { english: 'In an "Autocallable" structured product, the product "calls" (ends early) if:' },
            options: [
                { text: { english: "The underlying asset price falls to zero." }, isCorrect: false },
                { text: { english: "The underlying asset is at or above a target level on an observation date." }, isCorrect: true },
                { text: { english: "The investor decides they want their money back." }, isCorrect: false },
                { text: { english: "The issuer's credit rating drops." }, isCorrect: false }
            ],
            explanation: { english: "Autocallables are designed to mature early and pay out the principal plus a coupon if the market is performing well (above a trigger level), allowing the issuer to cancel the debt." },
            difficulty: 7,
            topic: "Structured Products"
        },
        {
            id: 9022,
            questionText: { english: 'Which of the following describes "Rho" in option Greeks?' },
            options: [
                { text: { english: "Sensitivity to price changes." }, isCorrect: false },
                { text: { english: "Sensitivity to time." }, isCorrect: false },
                { text: { english: "Sensitivity to interest rates." }, isCorrect: true },
                { text: { english: "Sensitivity to dividend yield." }, isCorrect: false }
            ],
            explanation: { english: "Rho measures the expected change in an option's price for a 1% change in risk-free interest rates." },
            difficulty: 8,
            topic: "Options"
        },
        {
            id: 9023,
            questionText: { english: 'A "Shark Fin" certificate is a type of structured product that:' },
            options: [
                { text: { english: "Only invests in maritime companies." }, isCorrect: false },
                { text: { english: "Offers a 'knock-out' at a high price level, where the payout drops if the asset performs too well." }, isCorrect: true },
                { text: { english: "Guarantees a 100% loss if the market rises." }, isCorrect: false },
                { text: { english: "Has no maturity date." }, isCorrect: false }
            ],
            explanation: { english: "Shark Fins provide upside participation up to a certain point (the tip of the fin); if the asset breaches that high barrier, the high return 'knocks out' and the investor receives a smaller, fixed rebate." },
            difficulty: 8,
            topic: "Structured Products"
        },
        {
            id: 9024,
            questionText: { english: 'Under the "Fair Dealing" guidelines in Singapore, financial advisors must:' },
            options: [
                { text: { english: "Only sell products with the highest commissions." }, isCorrect: false },
                { text: { english: "Ensure that recommendations are suitable for the client's risk profile and needs." }, isCorrect: true },
                { text: { english: "Guarantee that no client will ever lose money." }, isCorrect: false },
                { text: { english: "Provide advice only to high-net-worth individuals." }, isCorrect: false }
            ],
            explanation: { english: "Fair Dealing requires advisors to act in the client's best interest, providing suitable advice and transparent information, regardless of the advisor's commission." },
            difficulty: 4,
            topic: "Regulation"
        },
        {
            id: 9025,
            questionText: { english: 'What is "Market Impact" risk?' },
            options: [
                { text: { english: "The risk that the whole stock market crashes." }, isCorrect: false },
                { text: { english: "The risk that a large trade will move the price of an asset against the trader." }, isCorrect: true },
                { text: { english: "The risk that a company goes bankrupt." }, isCorrect: false },
                { text: { english: "The risk of a natural disaster affecting the market." }, isCorrect: false }
            ],
            explanation: { english: "Market impact occurs when a trade is so large relative to the liquidity of the asset that the act of buying drives the price up (or selling drives it down) before the order is finished." },
            difficulty: 7,
            topic: "Risk Management"
        },
        {
            id: 9026,
            questionText: { english: 'Which of the following is true regarding "Switching" in an ILP?' },
            options: [
                { text: { english: "It allows the policyholder to move units from one sub-fund to another." }, isCorrect: true },
                { text: { english: "It is always free and unlimited." }, isCorrect: false },
                { text: { english: "It automatically increases the sum assured." }, isCorrect: false },
                { text: { english: "It can only be done once in the lifetime of the policy." }, isCorrect: false }
            ],
            explanation: { english: "Switching gives policyholders the flexibility to rebalance their portfolio as their risk appetite or market views change. Some insurers charge fees or limit the number of free switches." },
            difficulty: 3,
            topic: "ILPs"
        },
        {
            id: 9027,
            questionText: { english: 'What is the "Intrinsic Value" of a Call option?' },
            options: [
                { text: { english: "The time remaining until expiry." }, isCorrect: false },
                { text: { english: "The amount by which the strike price is lower than the current market price." }, isCorrect: true },
                { text: { english: "The total premium paid for the option." }, isCorrect: false },
                { text: { english: "The volatility of the underlying asset." }, isCorrect: false }
            ],
            explanation: { english: "Intrinsic value is the 'built-in' profit. For a call, it is (Market Price - Strike Price). If the market price is lower than the strike, the intrinsic value is zero." },
            difficulty: 5,
            topic: "Options"
        },
        {
            id: 9028,
            questionText: { english: '"Theta" in options trading is often referred to as:' },
            options: [
                { text: { english: "Price sensitivity." }, isCorrect: false },
                { text: { english: "Time decay." }, isCorrect: true },
                { text: { english: "Volatility measure." }, isCorrect: false },
                { text: { english: 'The "fear" index.' }, isCorrect: false }
            ],
            explanation: { english: "Theta represents the rate at which an option loses value as time passes toward expiration." },
            difficulty: 6,
            topic: "Options"
        },
        {
            id: 9029,
            questionText: { english: 'A "Dual Currency Note" (DCN) is a structured product where the investor might:' },
            options: [
                { text: { english: "Be paid in a different currency than the one they invested in." }, isCorrect: true },
                { text: { english: "Receive two different types of stocks at maturity." }, isCorrect: false },
                { text: { english: "Pay double the administrative fees." }, isCorrect: false },
                { text: { english: "Be required to hold two passports." }, isCorrect: false }
            ],
            explanation: { english: "DCNs are essentially an investment combined with a currency option. If the exchange rate moves against the investor, the issuer has the right to repay the principal in the weaker currency." },
            difficulty: 7,
            topic: "Structured Products"
        },
        {
            id: 9030,
            questionText: { english: 'In the "Free-Look" period for an ILP in Singapore, a policyholder can cancel the policy within:' },
            options: [
                { text: { english: "7 days" }, isCorrect: false },
                { text: { english: "14 days" }, isCorrect: true },
                { text: { english: "30 days" }, isCorrect: false },
                { text: { english: "90 days" }, isCorrect: false }
            ],
            explanation: { english: "The standard free-look period is 14 days from the date of receipt of the policy document, allowing the client to review the terms and cancel for a refund (subject to adjustment for market loss)." },
            difficulty: 3,
            topic: "Regulation"
        },
        {
            id: 9031,
            questionText: { english: 'Which of the following is a "Linear" derivative?' },
            options: [
                { text: { english: "Call Option" }, isCorrect: false },
                { text: { english: "Put Option" }, isCorrect: false },
                { text: { english: "Futures Contract" }, isCorrect: true },
                { text: { english: "Structured Note" }, isCorrect: false }
            ],
            explanation: { english: "Futures are linear because their value changes in direct 1:1 proportion to the underlying asset. Options are non-linear because their price change depends on Delta, which changes as the price moves." },
            difficulty: 6,
            topic: "Derivatives"
        },
        {
            id: 9032,
            questionText: { english: 'What is "Margin" in futures trading?' },
            options: [
                { text: { english: "The profit earned at the end of the year." }, isCorrect: false },
                { text: { english: "A good-faith deposit required to open and maintain a position." }, isCorrect: true },
                { text: { english: "The difference between the bid and ask price." }, isCorrect: false },
                { text: { english: "The commission paid to the broker." }, isCorrect: false }
            ],
            explanation: { english: "Margin acts as collateral to cover potential losses from daily price movements, ensuring both parties can fulfill the contract." },
            difficulty: 4,
            topic: "Futures"
        },
        {
            id: 9033,
            questionText: { english: 'An investor who is "Delta Long" will benefit when the market:' },
            options: [
                { text: { english: "Goes up." }, isCorrect: true },
                { text: { english: "Goes down." }, isCorrect: false },
                { text: { english: "Stays flat." }, isCorrect: false },
                { text: { english: "Becomes less volatile." }, isCorrect: false }
            ],
            explanation: { english: "A positive (Long) Delta means the value of the position increases as the price of the underlying asset increases." },
            difficulty: 5,
            topic: "Options"
        },
        {
            id: 9034,
            questionText: { english: '"Leverage" in derivatives means:' },
            options: [
                { text: { english: "The investor must pay the full value of the asset upfront." }, isCorrect: false },
                { text: { english: "A small amount of capital can control a much larger market position." }, isCorrect: true },
                { text: { english: "The investment is guaranteed by the government." }, isCorrect: false },
                { text: { english: "There is no risk of loss." }, isCorrect: false }
            ],
            explanation: { english: "Derivatives allow investors to gain exposure to large assets using only a fraction of the value (margin or premium), which amplifies both potential gains and losses." },
            difficulty: 4,
            topic: "Derivatives"
        },
        {
            id: 9035,
            questionText: { english: 'A "Collateralized Debt Obligation" (CDO) is:' },
            options: [
                { text: { english: "A type of life insurance policy." }, isCorrect: false },
                { text: { english: "A structured credit product backed by a pool of loans or other assets." }, isCorrect: true },
                { text: { english: "A government-issued savings bond." }, isCorrect: false },
                { text: { english: "A physical gold bar stored in a vault." }, isCorrect: false }
            ],
            explanation: { english: 'CDOs pool together various debts (like mortgages or corporate bonds) and slice them into "tranches" with different risk levels for investors.' },
            difficulty: 8,
            topic: "Structured Products"
        },
        {
            id: 9036,
            questionText: { english: 'In an ILP, "Mortality Risk" is the risk that:' },
            options: [
                { text: { english: "The investor lives too long and runs out of money." }, isCorrect: false },
                { text: { english: "The policyholder dies, requiring the insurer to pay out the death benefit." }, isCorrect: true },
                { text: { english: "The stock market crashes." }, isCorrect: false },
                { text: { english: "The insurer goes bankrupt." }, isCorrect: false }
            ],
            explanation: { english: "From the insurer's perspective, mortality risk is the uncertainty regarding the timing and number of deaths among the insured population." },
            difficulty: 5,
            topic: "ILPs"
        },
        {
            id: 9037,
            questionText: { english: 'What is the "Time Value" of an option?' },
            options: [
                { text: { english: "The actual time left until the option expires." }, isCorrect: false },
                { text: { english: "The portion of the option's premium that exceeds its intrinsic value." }, isCorrect: true },
                { text: { english: "The interest rate earned on the premium." }, isCorrect: false },
                { text: { english: "The speed at which a trade is executed." }, isCorrect: false }
            ],
            explanation: { english: "Time value represents the 'possibility' that the option might become more valuable before it expires. It is calculated as (Total Premium - Intrinsic Value)." },
            difficulty: 6,
            topic: "Options"
        },
        {
            id: 9038,
            questionText: { english: 'A "Bear Spread" using put options is designed to:' },
            options: [
                { text: { english: "Profit from a significant increase in the market." }, isCorrect: false },
                { text: { english: "Profit from a moderate decline in the market while limiting risk." }, isCorrect: true },
                { text: { english: "Avoid all transaction costs." }, isCorrect: false },
                { text: { english: "Protect against a rise in interest rates." }, isCorrect: false }
            ],
            explanation: { english: "A bear put spread involves buying a put with a higher strike and selling a put with a lower strike, reducing the cost of the trade but also capping the maximum profit." },
            difficulty: 8,
            topic: "Options"
        },
        {
            id: 9039,
            questionText: { english: 'In a "Credit Linked Note" (CLN), if a "Credit Event" (like a default) occurs to the reference entity:' },
            options: [
                { text: { english: "The investor gets a 200% return." }, isCorrect: false },
                { text: { english: "The investor may lose some or all of their principal." }, isCorrect: true },
                { text: { english: "The issuer must pay a higher interest rate." }, isCorrect: false },
                { text: { english: "The product is extended for another 5 years." }, isCorrect: false }
            ],
            explanation: { english: "CLNs transfer credit risk to the investor. If the reference company defaults, the investor suffers a loss, similar to owning the company's debt directly." },
            difficulty: 8,
            topic: "Structured Products"
        },
        {
            id: 9040,
            questionText: { english: 'Which of the following is an example of an "Exotic" option?' },
            options: [
                { text: { english: "Standard Call Option" }, isCorrect: false },
                { text: { english: "Standard Put Option" }, isCorrect: false },
                { text: { english: "Asian Option (based on average price)" }, isCorrect: true },
                { text: { english: "Exchange-traded Futures" }, isCorrect: false }
            ],
            explanation: { english: 'Exotic options have more complex features than "Vanilla" options. Asian options are exotic because their payoff depends on the average price over a period, rather than the price at expiry.' },
            difficulty: 7,
            topic: "Options"
        },
        {
            id: 9041,
            questionText: { english: 'What is "Bid-to-Bid" pricing in fund performance measurement?' },
            options: [
                { text: { english: "Comparing the buying price at the start to the buying price at the end." }, isCorrect: false },
                { text: { english: "Comparing the selling price at the start to the selling price at the end." }, isCorrect: true },
                { text: { english: "Subtracting the commission from the profit." }, isCorrect: false },
                { text: { english: "Including the effect of the bid-offer spread in the return." }, isCorrect: false }
            ],
            explanation: { english: "Bid-to-bid measures the change in the unit price (selling price) over time, assuming the investor already holds the units. It ignores the initial sales charge." },
            difficulty: 6,
            topic: "Performance Measurement"
        },
        {
            id: 9042,
            questionText: { english: 'What is "Vega" in option Greeks?' },
            options: [
                { text: { english: "Sensitivity to price." }, isCorrect: false },
                { text: { english: "Sensitivity to time." }, isCorrect: false },
                { text: { english: "Sensitivity to volatility." }, isCorrect: true },
                { text: { english: "Sensitivity to dividends." }, isCorrect: false }
            ],
            explanation: { english: "Vega measures the amount an option's price changes for every 1% change in the implied volatility of the underlying asset." },
            difficulty: 8,
            topic: "Options"
        },
        {
            id: 9043,
            questionText: { english: 'In an ILP, the "Sum Assured" is:' },
            options: [
                { text: { english: "The total amount of premiums paid." }, isCorrect: false },
                { text: { english: "The guaranteed minimum amount paid upon death or TPD." }, isCorrect: true },
                { text: { english: "The current value of the fund units." }, isCorrect: false },
                { text: { english: "The maximum amount the investor can withdraw." }, isCorrect: false }
            ],
            explanation: { english: "The Sum Assured is the insurance component. In the event of death, the beneficiary typically receives either the Sum Assured OR the Fund Value (or both, depending on the policy type)." },
            difficulty: 4,
            topic: "ILPs"
        },
        {
            id: 9044,
            questionText: { english: '"Arbitrage" is a strategy that involves:' },
            options: [
                { text: { english: "Taking a long-term bet on the economy." }, isCorrect: false },
                { text: { english: "Buying an asset in one market and simultaneously selling it in another at a higher price to lock in a risk-free profit." }, isCorrect: true },
                { text: { english: "Investing only in socially responsible companies." }, isCorrect: false },
                { text: { english: "Gambling on highly speculative penny stocks." }, isCorrect: false }
            ],
            explanation: { english: 'Arbitrageurs look for price discrepancies for the same asset in different markets to exploit "free money" opportunities, which helps keep market prices efficient.' },
            difficulty: 6,
            topic: "Market Theory"
        },
        {
            id: 9045,
            questionText: { english: 'What is "Liquidity Risk" for a structured product?' },
            options: [
                { text: { english: "The risk that the issuer's office floods." }, isCorrect: false },
                { text: { english: "The risk that an investor cannot easily sell the product before maturity without significant loss." }, isCorrect: true },
                { text: { english: "The risk that the investor runs out of cash." }, isCorrect: false },
                { text: { english: "The risk that the currency loses value." }, isCorrect: false }
            ],
            explanation: { english: 'Many structured products are not traded on an exchange and have no "secondary market," making it very difficult and expensive to exit the investment early.' },
            difficulty: 5,
            topic: "Risk Management"
        },
        {
            id: 9046,
            questionText: { english: 'A "Straddle" strategy (buying both a call and a put with the same strike) is used when:' },
            options: [
                { text: { english: "The investor expects the market to stay very calm." }, isCorrect: false },
                { text: { english: "The investor expects a huge move in either direction but is unsure which way." }, isCorrect: true },
                { text: { english: "The investor wants to avoid paying any premium." }, isCorrect: false },
                { text: { english: "The investor wants to earn steady interest." }, isCorrect: false }
            ],
            explanation: { english: "A straddle profits if the asset price moves significantly up OR down. It is a bet on high volatility." },
            difficulty: 8,
            topic: "Options"
        },
        {
            id: 9047,
            questionText: { english: 'What is the "Reference Asset" in a structured product?' },
            options: [
                { text: { english: "The bank that issued the product." }, isCorrect: false },
                { text: { english: "The underlying asset (index, stock, or basket) whose performance determines the payout." }, isCorrect: true },
                { text: { english: "The legal document describing the product." }, isCorrect: false },
                { text: { english: "The investor's bank account." }, isCorrect: false }
            ],
            explanation: { english: 'The reference asset is what the structured product is "linked" to. Its movements dictate whether the investor gets a bonus, a coupon, or a loss.' },
            difficulty: 3,
            topic: "Structured Products"
        },
        {
            id: 9048,
            questionText: { english: 'In Singapore, the "Product Highlights Sheet" (PHS) is designed to:' },
            options: [
                { text: { english: "Provide a 500-page detailed legal analysis." }, isCorrect: false },
                { text: { english: "Provide a clear and concise summary of the key features and risks of a financial product." }, isCorrect: true },
                { text: { english: "List the names of all the company's employees." }, isCorrect: false },
                { text: { english: "Guarantee that the product is safe for everyone." }, isCorrect: false }
            ],
            explanation: { english: "The PHS is a simplified document required by regulators to help investors understand the most important aspects of a product before they buy." },
            difficulty: 4,
            topic: "Regulation"
        },
        {
            id: 9049,
            questionText: { english: 'What does "In-the-Money" (ITM) mean for a Put option?' },
            options: [
                { text: { english: "The market price is higher than the strike price." }, isCorrect: false },
                { text: { english: "The market price is lower than the strike price." }, isCorrect: true },
                { text: { english: "The market price is exactly equal to the strike price." }, isCorrect: false },
                { text: { english: "The option has expired." }, isCorrect: false }
            ],
            explanation: { english: "A put option is ITM when you can sell the asset for more than its current market value (Strike > Market)." },
            difficulty: 5,
            topic: "Options"
        },
        {
            id: 9050,
            questionText: { english: 'Which of the following describes "Systemic Risk"?' },
            options: [
                { text: { english: "The risk of a specific company's CEO resigning." }, isCorrect: false },
                { text: { english: "The risk of a collapse of an entire financial system or market." }, isCorrect: true },
                { text: { english: "The risk that a computer system has a bug." }, isCorrect: false },
                { text: { english: "The risk that a single trade is entered incorrectly." }, isCorrect: false }
            ],
            explanation: { english: 'Systemic risk refers to the "domino effect" where the failure of one institution or market segment triggers a broad crisis across the entire economy.' },
            difficulty: 6,
            topic: "Risk Management"
        }
    ]
};
