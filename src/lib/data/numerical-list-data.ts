import type { Quiz } from "../types";

export const numericalList: Quiz = {
    id: "numerical-list",
    year: "2024",
    title: "Master Numerical List",
    description: "A key study resource for the RES5 paper, containing a master list of all crucial numerical data points.",
    questions: [],
    questionsEasy: [],
    questionsHard: [],
    price: "Free",
    subscriptionPrice: ""
};

export type NumericalDataPoint = {
  number: string;
  context: string;
  source: string;
  details: string;
};

export const numericalListData: NumericalDataPoint[] = [
  {
    number: "1",
    context: "Suicide Clause Duration (Years)",
    source: "Insurance Act / Industry Practice",
    details: "The Suicide Clause and the Incontestability Clause generally run for 2 years under the Insurance Act. However, for the Incontestability Clause, the period is often reduced to 1 year in Singapore (Chapter 26 Note). The maximum period allowed is generally 2 years."
  },
  {
    number: "2",
    context: "Incontestability Clause Duration (Years)",
    source: "Insurance Act (Maximum Period)",
    details: "CORRECT (Maximum). The maximum period allowed by law for the Incontestability Clause is 2 years from the issue date (Chapter 26 Note)."
  },
  {
    number: "2%",
    context: "Annual Payout Increase Rate",
    source: "CPF LIFE Scheme",
    details: "The CPF LIFE Escalating Plan provides payouts that increase by 2% annually to help combat inflation (Chapter 13)."
  },
  {
    number: "3",
    context: "Main Criteria in Fit and Proper Test",
    source: "MAS Fit and Proper Test (FSG-G01)",
    details: "The three core criteria are: Honesty, Integrity, and Reputation; Competence and Capability; and Financial Soundness (FSG-G01, Chapter 8)."
  },
  {
    number: "3",
    context: "Minimum Number of Years a Policy Must be in Force to Acquire Non-Forfeiture Options",
    source: "Insurance Contract Provision",
    details: "Non-Forfeiture Options (the right to keep some reduced value if premiums stop) typically vest after 3 years of premium payment, subject to insurer terms (General Industry Standard/Chapter 26 Note)."
  },
  {
    number: "4",
    context: "Maximum Number of Pages for a Product Highlights Sheet (PHS)",
    source: "MAS Notice 307",
    details: "The PHS cannot be longer than 4 pages. If diagrams and a glossary are included, the total limit is 8 pages (MAS Notice 307, Chapter 7)."
  },
  {
    number: "5",
    context: "Minimum Years of Relevant Experience for a CEO or Executive Director of a Financial Adviser",
    source: "MAS Fit and Proper / Licensing (FAA-G01)",
    details: "The CEO/ED must have a minimum of 5 years of relevant working experience, with 3 years in a managerial capacity (FAA-G01, Chapter 8)."
  },
  {
    number: "6",
    context: "Number of Activities of Daily Living (ADLs)",
    source: "MOH / CareShield Life",
    details: "There are 6 ADLs: washing, dressing, feeding, toileting, mobility, and transferring. Inability to perform 3 out of 6 triggers severe disability payouts (CareShield/ElderShield, Chapter 13)."
  },
  {
    number: "7",
    context: "Number of days for a representative to lodge a notice of intent with the new principal before leaving their old one.",
    source: "FAA / RNF",
    details: "CORRECT. The firm (Principal) must notify MAS of the intent to switch within 7 days of being informed by the rep. (FAA/RNF)TRAP: This 7-day rule is for the initial notice of intent. It contrasts with the 14-day deadline for reporting changes in particulars."
  },
  {
    number: "7",
    context: "Number of days a policy owner must give written notice to the nominee for a Trust Nomination.",
    source: "Insurance Act",
    details: "CORRECT. The policy owner must notify the nominee of the designation of the trust within 7 days (Insurance Act).TRAP: This 7-day rule is for nomination notification."
  },
  {
    number: "8",
    context: "Minimum number of hours a person has to be hospitalised for a MediSave claim to be made under the Inpatient Daily Hospital Limit.",
    source: "CPF / MediSave",
    details: "CORRECT. The patient must be hospitalized for a continuous period of 8 hours or more to qualify for the Inpatient Daily Hospital Limit claim (CPF/MediSave).TRAP: A precise, practical threshold for claim eligibility."
  },
  {
    number: "14",
    context: "Number of days for the Free Look period for a Life Insurance policy.",
    source: "Insurance Contract Provision",
    details: "CORRECT (Standard). The client has a 14-day Free-Look period (Cooling-Off period) from the date of receiving the policy contract (Insurance Contract Provision).TRAP: The 14-day Free-Look period is widely tested."
  },
  {
    number: "15",
    context: "Number of days for an insurer to provide a written reply to a claimant on the status of a claim.",
    source: "General Insurance Association",
    details: "CORRECT. The deadline for providing a final written reply on the status of a claim is generally 15 days (General Insurance Association/Industry Practice).TRAP: This is a key deadline in the ethical conduct process (FDO 4)."
  },
  {
    number: "18",
    context: "Statutory age limit to effect a Life Insurance policy on his/her own life.",
    source: "Insurance Act",
    details: "CORRECT. The statutory minimum age is 18 years old (Insurance Act).TRAP: The legal minimum age for insurance purchase."
  },
  {
    number: "18",
    context: "Statutory age limit to make a nomination (Trust or Revocable).",
    source: "Insurance Act",
    details: "The legal age for a policy owner to designate a beneficiary. A Trust (Irrevocable) Nomination transfers beneficial ownership to a spouse/child, while a Revocable Nomination keeps ownership with the policy owner."
  },
  {
    number: "21",
    context: "Statutory age limit for a witness to a nomination form.",
    source: "Insurance Act",
    details: "CORRECT. The witness must be 21 years old or above (Insurance Act).TRAP: The legal minimum age for a witness to have the capacity to affirm the signature."
  },
  {
    number: "21",
    context: "Number of days a representative must lodge his RNF registration with his new principal upon cessation of service.",
    source: "FAA / Representative",
    details: "INCORRECT (The Rule is 14 days). The representative must lodge the RNF cessation notice with the new principal 14 days after ceasing service.TRAP: Confuses the 14-day RNF reporting deadline with the 21-day maximum period a fund can suspend dealings (CIS Code)."
  },
  {
    number: "30",
    context: "Number of days grace period for premium payment.",
    source: "Insurance Contract Provision",
    details: "CORRECT. Most life policies grant a grace period of 30 days (or one month) for premium payment after the due date.TRAP: The standard time frame for policy lapse protection."
  },
  {
    number: "30",
    context: "Number of days for the Survival Period for a Critical Illness claim.",
    source: "LIA CI Framework",
    details: "CORRECT (Standard). The typical survival period is 30 days after diagnosis (LIA CI Framework).TRAP: Ensures the CI is confirmed and severe."
  },
  {
    number: "50%",
    context: "Minimum percentage of local employees an employer must insure under the Transferable Medical Insurance Scheme (TMIS).",
    source: "MOM / TMIS",
    details: "CORRECT. The TMIS standard requires an employer to insure at least 50% of local employees under a new scheme if the old scheme is discontinued (MOM/TMIS).TRAP: A precise figure from the labor/insurance interface."
  },
  {
    number: "60",
    context: "Minimum age for a patient to utilize the Flexi-MediSave Scheme for outpatient treatment.",
    source: "CPF / MediSave",
    details: "CORRECT. Patients must be aged 60 years or older to utilize the Flexi-MediSave scheme for outpatient services (CPF/MediSave).TRAP: Tests knowledge of a specific CPF healthcare benefit age limit."
  },
  {
    number: "70%",
    context: "Passing score for CMFAS M5, M8, M8A, M9, M9A exams.",
    source: "SCI / IBF",
    details: "The passing mark for all CMFAS Product Knowledge Modules (M5, M8, M9, etc.) is 70%. TRAP: The exam tests the difference between the Product Knowledge Modules (70%) and the Core Conduct Exam (75% for Part I / 80% for Part II)."
  },
  {
    number: "75%",
    context: "Passing score for CMFAS RES 5 Paper 1.",
    source: "SCI / IBF",
    details: "CORRECT. Part I (Rules) requires 75% to pass (Chapter 1).TRAP: The precise passing score for the rules section."
  },
  {
    number: "80%",
    context: "Passing score for CMFAS RES 5 Paper 2.",
    source: "SCI / IBF",
    details: "CORRECT. Part II (Ethics & Skills) requires 80% to pass (Chapter 1).TRAP: The highest score required for the entire exam."
  },
  {
    number: "90",
    context: "Number of days for the Waiting Period for a Critical Illness claim (e.g., Major Cancer).",
    source: "LIA CI Framework",
    details: "CORRECT (Max). The typical waiting period is 90 days from the issue date or reinstatement (LIA CI Framework).TRAP: This prevents anti-selection (buying insurance after diagnosis)."
  },
  {
    number: "90",
    context: "Number of days for the Deferment Period for CareShield Life claims, starting from the claim date.",
    source: "MOH / CareShield Life",
    details: "CORRECT (Default). The standard maximum deferment period (time before payments begin) is 90 days (MOH/CareShield Life).TRAP: The initial waiting period for long-term care payouts."
  },
  {
    number: "S$150",
    context: "Monthly IDAPE grant payout for a severely disabled Singapore Citizen with a PCHI of S$2,001 - S$2,800.",
    source: "MOH / IDAPE",
    details: "The S$150 figure represents one of the tiered payout levels for the old Interim Disability Assistance Programme for the Elderly (IDAPE), which provided grants based on PCHI (Per Capita Household Income). TRAP: This tests a highly specific payout amount based on income tiers for a legacy disability scheme."
  },
  {
    number: "S$250",
    context: "Monthly IDAPE grant payout for a severely disabled Singapore Citizen with a PCHI of S$0 - S$2,000.",
    source: "MOH / IDAPE",
    details: "The S$250 figure represents the maximum monthly payout for the highest-need tier (lowest PCHI). TRAP: Tests the maximum payout level for the legacy scheme."
  },
  {
    number: "S$300",
    context: "MediSave AWL (Age <= 40)",
    source: "CPF / MediSave",
    details: "The lowest annual limit for the private component of Integrated Shield Plans (IPs), reflecting lower health risk and the need to preserve funds for later years."
  },
  {
    number: "S$600",
    context: "CareShield Life monthly payout in 2020.",
    source: "MOH / CareShield Life",
    details: "CORRECT. The initial monthly payout for the 2020 cohort was S$600 (MOH/CareShield Life).TRAP: Tests the base payout amount for the new long-term care scheme."
  },
  {
    number: "S$600",
    context: "MediSave AWL (Age 41-70)",
    source: "CPF / MediSave",
    details: "The standard middle-tier limit for most working and pre-retiree adults for the private component of their Integrated Shield Plan (IP)."
  },
  {
    number: "S$900",
    context: "MediSave AWL (Age >= 71)",
    source: "CPF / MediSave",
    details: "The highest annual limit for the private component of Integrated Shield Plans (IPs), applicable to the most senior policyholders, to help them cope with rapidly increasing IP premiums."
  },
  {
    number: "S$20,000",
    context: "Minimum amount in CPF Ordinary Account that cannot be used for investment.",
    source: "CPF Investment Scheme (CPFIS-OA)",
    details: "CORRECT. The S$20,000 buffer must remain uninvested in the OA (CPFIS-OA) (Chapter 13).TRAP: The non-negotiable minimum buffer for liquidity."
  },
  {
    number: "S$40,000",
    context: "Minimum amount in CPF Special Account that cannot be used for investment.",
    source: "CPF Investment Scheme (CPFIS-SA)",
    details: "CORRECT. The S$40,000 buffer must remain uninvested in the SA (CPFIS-SA) (Chapter 13).TRAP: The non-negotiable minimum buffer for SA."
  },
  {
    number: "S$80,000",
    context: "Cap on total reliefs (excluding CPF cash top-up relief) that can be claimed by an individual for a Year of Assessment.",
    source: "IRAS / Income Tax",
    details: "The S$80,000 figure is the cap on total tax reliefs. It is not the FIDReC claim limit. TRAP: The old FIDReC limit was S$50,000. The new limit is S$100,000/S$150,000."
  },
  {
    number: "S$100,000",
    context: "Jurisdictional limit per claim for FIDReC's Adjudication services (for claims filed before 1 July 2024).",
    source: "FIDReC",
    details: "This is the older limit. For exams, this is often the expected answer unless the question specifies a date on or after July 1, 2024."
  },
  {
    number: "S$150,000",
    context: "Minimum paid-up capital for a Financial Adviser that does not handle client's moneys.",
    source: "MAS",
    details: "This is the minimum capital required for an FA dealing in low-risk products (like general stocks, bonds, and life insurance) that do not involve leveraged trading or high-risk derivatives (Chapter 8A)."
  },
  {
    number: "S$150,000",
    context: "Jurisdictional limit per claim for FIDReC's Adjudication services (for claims filed on or after 1 July 2024).",
    source: "FIDReC",
    details: "CORRECT. The updated jurisdictional limit for claims filed on or after 1 July 2024 is S$150,000.TRAP: This is the current and most accurate compliance figure for FIDReC's claim ceiling."
  },
  {
    number: "S$300,000",
    context: "Minimum Paid-Up Capital (High-Risk Services)",
    source: "MAS",
    details: "This is the capital required for an FA dealing in high-risk products such as Futures, Spot Foreign Exchange (FX), or Over-The-Counter (OTC) derivatives (Chapter 8A)."
  },
  {
    number: "S$500,000",
    context: "Minimum Professional Indemnity Insurance (PII) Coverage",
    source: "MAS",
    details: "This is the mandatory minimum limit of indemnity the FA firm must have on its PII policy to cover client claims resulting from negligence or errors (Chapter 8A)."
  }
];
