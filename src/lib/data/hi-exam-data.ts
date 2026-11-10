
import type { Quiz } from "../types";

export const hiExam: Quiz = {
    id: "hi-exam",
    year: "2024",
    title: "HI Mock Exam",
    description: "A 50-question master mock exam for the HI (Health Insurance) paper in Singapore, focusing on complex concepts and numerical calculations.",
    price: "$60.00",
    subscriptionPrice: "$39.90/month",
    examDetails: [
        { label: "Format", value: "50 multiple-choice questions (MCQs)." },
        { label: "Duration", value: "75 minutes." },
        { label: "Passing Score", value: "70%." },
        { label: "Prerequisites", value: "None. Can be retaken without limits." }
    ],
    questions: [
      {
        id: 501,
        questionText: { english: "The Singapore Government's healthcare philosophy prioritizes individual responsibility. This philosophy is primarily reflected in the expectation that individuals should finance their medical needs through:" },
        options: [
          { text: { english: "Relying solely on MediFund for subsidized care." }, isCorrect: false },
          { text: { english: "Using competition and market forces to drive down costs." }, isCorrect: false },
          { text: { english: "Contributing to MediSave and purchasing appropriate medical insurance." }, isCorrect: true },
          { text: { english: "Nurturing a healthy nation through preventive care programs." }, isCorrect: false }
        ],
        explanation: { english: "The core tenet of Singapore's financing model is the emphasis on personal responsibility, primarily achieved through compulsory MediSave contributions and the mandatory purchase of insurance like MediShield Life (Ch 1, 2.1)." },
        difficulty: 4,
        topic: "Healthcare Philosophy"
      },
      {
        id: 502,
        questionText: { english: "The Community Health Assist Scheme (CHAS) provides subsidized medical and dental care specifically to:" },
        options: [
          { text: { english: "All Singapore Citizens, regardless of income." }, isCorrect: false },
          { text: { english: "Lower- to middle-income Singapore Citizens and all Pioneer/Merdeka Generation members." }, isCorrect: true },
          { text: { english: "Only individuals receiving assistance from MediFund." }, isCorrect: false },
          { text: { english: "Singapore Citizens aged 65 and above only." }, isCorrect: false }
        ],
        explanation: { english: "CHAS targets lower- to middle-income citizens and automatically includes all Pioneer and Merdeka Generation citizens (Ch 1, 6.2)." },
        difficulty: 5,
        topic: "Healthcare Schemes"
      },
      {
        id: 503,
        questionText: { english: "The maximum amount that can be accumulated in the MediSave Account (MA) is capped by the Basic Healthcare Sum (BHS). Contributions beyond the BHS are automatically transferred to:" },
        options: [
          { text: { english: "The Central Provident Fund Investment Scheme (CPFIS)." }, isCorrect: false },
          { text: { english: "The member's Special Account (SA) or Retirement Account (RA)." }, isCorrect: true },
          { text: { english: "The member's spouse's MediSave Account." }, isCorrect: false },
          { text: { english: "A segregated account used only for long-term care needs." }, isCorrect: false }
        ],
        explanation: { english: "Funds exceeding the BHS flow to the member's SA (if under 55) or RA (if 55 and above), and subsequently to the OA if the respective retirement sums are met (Ch 1, 4.3)." },
        difficulty: 6,
        topic: "MediSave"
      },
      {
        id: 504,
        questionText: { english: "The primary objective of the 'Beyond Healthcare to Health' initiative (part of the 3 Beyonds) is to shift the focus of healthcare from:" },
        options: [
          { text: { english: "Treating acute illnesses to treating chronic diseases." }, isCorrect: false },
          { text: { english: "Treating sickness (curative care) to promoting wellness (preventive care)." }, isCorrect: true },
          { text: { english: "Reducing hospital waiting times to improving hospital efficiency." }, isCorrect: false },
          { text: { english: "Reducing the cost of medical care to improving the quality of care." }, isCorrect: false }
        ],
        explanation: { english: "'Beyond Healthcare to Health' aims to shift focus from reactive curative care (treating sickness) towards proactive preventive care (promoting wellness) across the community (Ch 1, 2.4)." },
        difficulty: 5,
        topic: "Healthcare Philosophy"
      },
      {
        id: 505,
        questionText: { english: "Which category of long-term care service is typically provided in a facility setting (e.g., nursing homes or hospices) for seniors who require continuous nursing supervision and cannot be cared for at home?" },
        options: [
          { text: { english: "Centre-based services." }, isCorrect: false },
          { text: { english: "Residential care facilities." }, isCorrect: true },
          { text: { english: "Home-based services." }, isCorrect: false },
          { text: { english: "Community outreach services." }, isCorrect: false }
        ],
        explanation: { english: "Residential care facilities (e.g., nursing homes) are for those who require continuous, 24-hour medical supervision and care, necessitating residency in the facility (Ch 1, 3.2)." },
        difficulty: 4,
        topic: "Long-Term Care"
      },
      {
        id: 506,
        questionText: { english: "Which statement regarding the Pioneer Generation (PG) and Merdeka Generation (MG) packages is correct?" },
        options: [
          { text: { english: "Both packages provide free Integrated Shield Plan (IP) coverage." }, isCorrect: false },
          { text: { english: "Only the PG package provides subsidies for all types of healthcare services." }, isCorrect: false },
          { text: { english: "Both packages provide additional subsidies for MediShield Life premiums for life." }, isCorrect: true },
          { text: { english: "The MG package provides greater annual MediSave top-ups than the PG package." }, isCorrect: false }
        ],
        explanation: { english: "Both the PG and MG packages provide significant financial support, including annual MediSave top-ups and additional lifetime subsidies for MediShield Life premiums (Ch 1, 6.4)." },
        difficulty: 6,
        topic: "Healthcare Schemes"
      },
      {
        id: 507,
        questionText: { english: "Which statement is TRUE regarding the portability of medical coverage when an employee leaves a company that provided Group Health Insurance?" },
        options: [
          { text: { english: "All group health policies are fully transferable and retain the same premium." }, isCorrect: false },
          { text: { english: "The employee loses all coverage and must reapply for an individual plan." }, isCorrect: false },
          { text: { english: "The employee can convert the coverage to an individual plan if the group policy included a portability clause." }, isCorrect: true },
          { text: { english: "The portable benefits are restricted only to hospitalization coverage, not outpatient benefits." }, isCorrect: false }
        ],
        explanation: { english: "Portability is not automatic. The employee's ability to convert coverage relies on the specific group policy contract including a portability clause (conversion privilege) (Ch 7, 5.2)." },
        difficulty: 7,
        topic: "Group Insurance"
      },
      {
        id: 508,
        questionText: { english: "A policyholder has an Integrated Shield Plan (IP) with a deductible of S$3,000 and a co-insurance requirement of 10%. If the total approved hospital bill is S$40,000, what is the policyholder's total out-of-pocket cost?" },
        options: [
          { text: { english: "S$3,000 (Deductible only)." }, isCorrect: false },
          { text: { english: "S$3,700." }, isCorrect: false },
          { text: { english: "S$4,000." }, isCorrect: false },
          { text: { english: "S$6,700." }, isCorrect: true }
        ],
        explanation: { english: "Calculation: Deductible paid by patient: S$3,000. Remaining bill subject to co-insurance: S$40,000 - S$3,000 = S$37,000. Co-insurance paid by patient (10% of remaining): S$37,000 * 0.10 = S$3,700. Total Out-of-Pocket Cost: S$3,000 (Deductible) + S$3,700 (Co-insurance) = S$6,700 (Ch 2, 2.5)." },
        difficulty: 8,
        topic: "IP Calculations"
      },
      {
        id: 509,
        questionText: { english: "Medical Expense Insurance (MEI) typically excludes coverage for which type of medical need?" },
        options: [
          { text: { english: "Emergency surgery due to accidental injury." }, isCorrect: false },
          { text: { english: "In-patient treatment for cancer." }, isCorrect: false },
          { text: { english: "Elective cosmetic surgery." }, isCorrect: true },
          { text: { english: "Rehabilitation after a major stroke." }, isCorrect: false }
        ],
        explanation: { english: "MEI policies are designed to cover expenses arising from necessary treatment due to injury or sickness. Elective cosmetic surgery is explicitly excluded as it is not medically necessary (Ch 2, 4.3)." },
        difficulty: 4,
        topic: "Exclusions"
      },
      {
        id: 510,
        questionText: { english: "Which component of an Integrated Shield Plan (IP) provides the mandatory basic level of coverage and is administered by the CPF Board?" },
        options: [
          { text: { english: "The Private Rider component." }, isCorrect: false },
          { text: { english: "The Optional Additional Benefit component." }, isCorrect: false },
          { text: { english: "The MediShield Life component." }, isCorrect: true },
          { text: { english: "The MediSave component." }, isCorrect: false }
        ],
        explanation: { english: "The MediShield Life component is compulsory and administered centrally by the CPF Board (Ch 3, 2.3)." },
        difficulty: 3,
        topic: "Integrated Shield Plans"
      },
      {
        id: 511,
        questionText: { english: "The Deductible in a medical expense insurance policy serves which primary function?" },
        options: [
          { text: { english: "To cap the maximum amount of coverage the insured can receive." }, isCorrect: false },
          { text: { english: "To provide coverage for the insured's pre-existing conditions." }, isCorrect: false },
          { text: { english: "To discourage over-utilization of medical services by requiring the insured to bear the initial cost." }, isCorrect: true },
          { text: { english: "To simplify the claims process for the insurer." }, isCorrect: false }
        ],
        explanation: { english: "Deductibles require the insured to pay the first portion of the claim, primarily functioning to discourage over-utilization of medical facilities (Ch 2, 2.5)." },
        difficulty: 5,
        topic: "Policy Provisions"
      },
      {
        id: 512,
        questionText: { english: "All Integrated Shield Plans (IPs) must adhere to which key restriction regarding premium payment, particularly for the private coverage component?" },
        options: [
          { text: { english: "Premiums must be fully paid using cash after age 65." }, isCorrect: false },
          { text: { english: "Premiums are capped at S$5,000 annually." }, isCorrect: false },
          { text: { english: "MediSave use is subject to Additional Withdrawal Limits (AWL), requiring cash payments if the premium exceeds the AWL." }, isCorrect: true },
          { text: { english: "Premiums must remain level throughout the policy term." }, isCorrect: false }
        ],
        explanation: { english: "The premiums for the private IP component are restricted by the Additional Withdrawal Limits (AWL) for MediSave use, necessitating cash payment for any excess premium (Ch 3, 2.7)." },
        difficulty: 7,
        topic: "MediSave"
      },
      {
        id: 513,
        questionText: { english: "Which policy provision ensures that an individual who is not currently insured may enroll in a Group Health Insurance plan without medical underwriting, provided they join within a short time of becoming eligible (e.g., within 30 days of employment)?" },
        options: [
          { text: { english: "Portability Clause." }, isCorrect: false },
          { text: { english: "Continuation of Coverage." }, isCorrect: false },
          { text: { english: "Open Enrolment Period." }, isCorrect: true },
          { text: { english: "Free-Cover Limit." }, isCorrect: false }
        ],
        explanation: { english: "The Open Enrolment Period (or eligibility period) is the short window granted to a newly eligible employee to join the group plan without having to provide evidence of insurability (Ch 7, 2.4)." },
        difficulty: 6,
        topic: "Group Insurance"
      },
      {
        id: 514,
        questionText: { english: "When an individual's claim is rejected due to non-disclosure of a material fact during the application, the insurer is exercising the legal right to contest the policy based on the principle of:" },
        options: [
          { text: { english: "Indemnity." }, isCorrect: false },
          { text: { english: "Proximate Cause." }, isCorrect: false },
          { text: { english: "Utmost Good Faith (Uberrima Fides)." }, isCorrect: true },
          { text: { english: "Subrogation." }, isCorrect: false }
        ],
        explanation: { english: "Insurance contracts rely on the principle of Utmost Good Faith, meaning the insurer can contest (and possibly void) the policy if the applicant breaches their duty to disclose all material facts (Ch 8, 2.1)." },
        difficulty: 5,
        topic: "Insurance Principles"
      },
      {
        id: 515,
        questionText: { english: "A benefit that is paid to the insured only after they have been totally disabled and unable to work for a defined initial period (e.g., 90 days) is referred to as having a:" },
        options: [
          { text: { english: "Guaranteed benefit period." }, isCorrect: false },
          { text: { english: "Elimination period (or waiting period)." }, isCorrect: true },
          { text: { english: "Probationary period." }, isCorrect: false },
          { text: { english: "Recurrent disability period." }, isCorrect: false }
        ],
        explanation: { english: "The Elimination Period (or Waiting Period) is the initial duration following the onset of disability during which benefits are not payable (Ch 4, 3.4)." },
        difficulty: 6,
        topic: "Disability Insurance"
      },
      {
        id: 516,
        questionText: { english: "What is the maximum duration an insurer can typically contest the validity of a policy based on misstatements made in the application, according to the Incontestability Clause?" },
        options: [
          { text: { english: "1 year." }, isCorrect: false },
          { text: { english: "2 years." }, isCorrect: true },
          { text: { english: "3 years." }, isCorrect: false },
          { text: { english: "5 years." }, isCorrect: false }
        ],
        explanation: { english: "The Incontestability Clause limits the period during which the insurer can contest the policy due to misstatements to 2 years from the issue date (Ch 9, 3.1)." },
        difficulty: 5,
        topic: "Policy Provisions"
      },
      {
        id: 517,
        questionText: { english: "The standard health insurance policy requires the insured to continue paying a small percentage of the approved medical bill after the deductible has been satisfied. This is known as:" },
        options: [
          { text: { english: "Deductible Cap." }, isCorrect: false },
          { text: { english: "Co-insurance." }, isCorrect: true },
          { text: { english: "Stop-loss Limit." }, isCorrect: false },
          { text: { english: "Co-payment." }, isCorrect: false }
        ],
        explanation: { english: "Co-insurance is the fixed percentage of the remaining eligible expense that the insured must bear after the deductible is met (Ch 2, 2.5)." },
        difficulty: 4,
        topic: "Policy Provisions"
      },
      {
        id: 518,
        questionText: { english: "In a medical expense insurance policy, the Stop-Loss Limit (or Out-of-Pocket Maximum) serves to:" },
        options: [
          { text: { english: "Cap the insurer's liability for any single claim." }, isCorrect: false },
          { text: { english: "Limit the number of claims the insured can make in a year." }, isCorrect: false },
          { text: { english: "Cap the total annual cost (Deductible + Co-insurance) the insured must pay for covered services." }, isCorrect: true },
          { text: { english: "Reduce the annual premium if no claims are made." }, isCorrect: false }
        ],
        explanation: { english: "The Stop-Loss Limit sets the maximum total amount the insured must pay out-of-pocket annually for covered expenses, protecting the insured against catastrophic costs (Ch 2, 2.5)." },
        difficulty: 6,
        topic: "Policy Provisions"
      },
      {
        id: 519,
        questionText: { english: "A policyholder is covered by an Integrated Shield Plan (IP) that excludes coverage for a pre-existing condition. If the patient requires treatment for this condition, the IP insurer's liability extends only to the reimbursement covered by:" },
        options: [
          { text: { english: "The Private Rider component." }, isCorrect: false },
          { text: { english: "The MediShield Life component." }, isCorrect: true },
          { text: { english: "The full policy sum assured." }, isCorrect: false },
          { text: { english: "Zero, since the condition is excluded." }, isCorrect: false }
        ],
        explanation: { english: "MediShield Life provides mandatory coverage for pre-existing conditions. If the private insurer excludes the condition, the patient is still covered by the mandatory MediShield Life component of the IP (Ch 3, 2.3)." },
        difficulty: 7,
        topic: "Integrated Shield Plans"
      },
      {
        id: 520,
        questionText: { english: "Which factor is NOT typically used when underwriting a Critical Illness (CI) policy?" },
        options: [
          { text: { english: "Applicant's height and weight." }, isCorrect: false },
          { text: { english: "Applicant's immediate family history of major illnesses." }, isCorrect: false },
          { text: { english: "Applicant's annual income level." }, isCorrect: true },
          { text: { english: "Applicant's smoking status." }, isCorrect: false }
        ],
        explanation: { english: "CI underwriting focuses on mortality and morbidity risk (A, B, D). The applicant's income level (C) is primarily used for underwriting Disability Income policies to prevent over-insurance/moral hazard, not for assessing CI risk itself (Ch 8, 3.1)." },
        difficulty: 6,
        topic: "Underwriting"
      },
      {
        id: 521,
        questionText: { english: "A medical expense insurance policy imposes a Reasonable and Customary charge limit. This limits the claim payment to the cost of treatment that is:" },
        options: [
          { text: { english: "The cheapest available in the market." }, isCorrect: false },
          { text: { english: "Consistent with the average charge for similar services in the same geographical area." }, isCorrect: true },
          { text: { english: "The original cost of the procedure determined by the hospital." }, isCorrect: false },
          { text: { english: "The full bill, provided the patient stays in a subsidized ward." }, isCorrect: false }
        ],
        explanation: { english: "The Reasonable and Customary charge is the expense level commonly charged for similar services, ensuring the insurance fund does not pay for unusually high or excessive charges (Ch 2, 2.6)." },
        difficulty: 5,
        topic: "Policy Provisions"
      },
      {
        id: 522,
        questionText: { english: "Under the Singapore Health Insurance regulatory framework, which entity acts as the primary administrator for the MediShield Life scheme?" },
        options: [
          { text: { english: "The Ministry of Health (MOH)." }, isCorrect: false },
          { text: { english: "The Financial Industry Disputes Resolution Centre (FIDReC)." }, isCorrect: false },
          { text: { english: "The Central Provident Fund (CPF) Board." }, isCorrect: true },
          { text: { english: "Private Integrated Shield Plan providers." }, isCorrect: false }
        ],
        explanation: { english: "MediShield Life is administered and managed by the CPF Board (Ch 3, 2.3)." },
        difficulty: 4,
        topic: "Regulation"
      },
      {
        id: 523,
        questionText: { english: "Which definition of disability is generally considered the most restrictive (making it hardest for the insured to qualify for benefits)?" },
        options: [
          { text: { english: "Any Occupation (unable to perform any gainful work)." }, isCorrect: true },
          { text: { english: "Own Occupation (unable to perform the duties of one's own occupation)." }, isCorrect: false },
          { text: { english: "Partial Disability (unable to perform one or more duties of one's own occupation)." }, isCorrect: false },
          { text: { english: "Presumptive Disability (loss of sight, speech, or use of limbs)." }, isCorrect: false }
        ],
        explanation: { english: "The Any Occupation definition is the most restrictive, requiring the insured to prove they cannot perform any job for which they are reasonably suited by training, education, or experience (Ch 4, 3.2)." },
        difficulty: 7,
        topic: "Disability Insurance"
      },
      {
        id: 524,
        questionText: { english: "The primary difference between the benefit payout of a Disability Income (DI) policy and a Critical Illness (CI) policy is that a DI policy pays a:" },
        options: [
          { text: { english: "Monthly indemnity benefit (replacement income)." }, isCorrect: true },
          { text: { english: "One-time lump sum benefit." }, isCorrect: false },
          { text: { english: "Reimbursement benefit for medical bills." }, isCorrect: false },
          { text: { english: "Fixed benefit only upon permanent paralysis." }, isCorrect: false }
        ],
        explanation: { english: "DI policies pay a monthly indemnity benefit to replace lost income, whereas CI policies typically pay a single, lump sum benefit upon diagnosis (Ch 4, 1.2)." },
        difficulty: 4,
        topic: "Product Comparison"
      },
      {
        id: 525,
        questionText: { english: "A Recurrent Disability Clause in a Disability Income policy addresses the situation where the insured recovers from a disability and then suffers a relapse of the same disability within a specified timeframe (e.g., 6 months) by:" },
        options: [
          { text: { english: "Treating the relapse as a completely new claim with a new elimination period." }, isCorrect: false },
          { text: { english: "Denying coverage for the relapse as a pre-existing condition." }, isCorrect: false },
          { text: { english: "Treating the relapse as a continuation of the original claim, waiving the elimination period." }, isCorrect: true },
          { text: { english: "Automatically converting the policy to a Partial Disability benefit." }, isCorrect: false }
        ],
        explanation: { english: "The Recurrent Disability Clause prevents the application of a new elimination period, treating the relapse (of the same cause) as a continuation of the original claim (Ch 4, 3.7)." },
        difficulty: 6,
        topic: "Policy Provisions"
      },
      {
        id: 526,
        questionText: { english: "The Critical Illness (CI) definitions used in Singapore must adhere to the standards set by which industry association's framework?" },
        options: [
          { text: { english: "MAS Notice 117." }, isCorrect: false },
          { text: { english: "General Insurance Association (GIA)." }, isCorrect: false },
          { text: { english: "Life Insurance Association (LIA)." }, isCorrect: true },
          { text: { english: "Financial Industry Disputes Resolution Centre (FIDReC)." }, isCorrect: false }
        ],
        explanation: { english: "The LIA Critical Illness Framework sets the mandatory minimum definitions for the 37 standard critical illnesses covered in Singapore (Ch 5, 2.4)." },
        difficulty: 5,
        topic: "Regulation"
      },
      {
        id: 527,
        questionText: { english: "Which of the following conditions is an example of a Late Stage Critical Illness benefit trigger?" },
        options: [
          { text: { english: "Angioplasty and other invasive treatment for coronary artery disease." }, isCorrect: false },
          { text: { english: "Carcinoma-in-Situ (early stage cancer)." }, isCorrect: false },
          { text: { english: "Major heart attack (of specified severity)." }, isCorrect: true },
          { text: { english: "Pre-cancerous skin lesions." }, isCorrect: false }
        ],
        explanation: { english: "Late Stage CI benefits cover severe, life-threatening conditions (e.g., major heart attack, late-stage cancer, kidney failure). Angioplasty (A) and Carcinoma-in-Situ (B) are typically considered Early/Intermediate Stage CI (Ch 5, 2.4)." },
        difficulty: 6,
        topic: "Critical Illness"
      },
      {
        id: 528,
        questionText: { english: "A benefit rider that provides an additional lump sum payout if the insured suffers an injury resulting in loss of sight or paralysis is categorized as a(n):" },
        options: [
          { text: { english: "Waiver of Premium Rider." }, isCorrect: false },
          { text: { english: "Critical Illness Rider." }, isCorrect: false },
          { text: { english: "Accidental Death and Dismemberment (AD&D) Rider." }, isCorrect: true },
          { text: { english: "Cost of Living Adjustment Rider." }, isCorrect: false }
        ],
        explanation: { english: "The Accidental Death and Dismemberment (AD&D) Rider pays a benefit for specific serious injuries, such as loss of limbs, sight, or hearing, usually due to an accident (Ch 5, 3.2)." },
        difficulty: 4,
        topic: "Riders"
      },
      {
        id: 529,
        questionText: { english: "The Cost of Living Adjustment (COLA) Rider in a Disability Income policy serves to:" },
        options: [
          { text: { english: "Reduce the annual premium based on inflation rates." }, isCorrect: false },
          { text: { english: "Increase the benefit amount if the policyholder relocates overseas." }, isCorrect: false },
          { text: { english: "Periodically increase the monthly benefit payout during disability to keep pace with inflation." }, isCorrect: true },
          { text: { english: "Automatically reduce the elimination period in later years." }, isCorrect: false }
        ],
        explanation: { english: "The COLA Rider is designed to protect the purchasing power of the monthly benefit by increasing the payout amount periodically (usually annually) based on a specified index or rate (Ch 4, 3.6)." },
        difficulty: 6,
        topic: "Riders"
      },
      {
        id: 530,
        questionText: { english: "A key provision in a Disability Income policy that guarantees the insurer cannot cancel the policy or increase the premium rate, regardless of the insured's health status, is the:" },
        options: [
          { text: { english: "Renewable Term Provision." }, isCorrect: false },
          { text: { english: "Non-Cancellable and Guaranteed Renewable Provision." }, isCorrect: true },
          { text: { english: "Conditional Renewable Provision." }, isCorrect: false },
          { text: { english: "Incontestability Clause." }, isCorrect: false }
        ],
        explanation: { english: "The Non-Cancellable and Guaranteed Renewable provision is the strongest guarantee, ensuring the insurer cannot cancel the policy or raise the premium on an individual basis (Ch 4, 3.3)." },
        difficulty: 7,
        topic: "Policy Provisions"
      },
      {
        id: 531,
        questionText: { english: "A key difference between CareShield Life and the original ElderShield 400 scheme is that CareShield Life offers:" },
        options: [
          { text: { english: "Optional participation after age 40." }, isCorrect: false },
          { text: { english: "Payouts that are limited to a maximum of 6 years." }, isCorrect: false },
          { text: { english: "Payouts that increase annually and are paid for life." }, isCorrect: true },
          { text: { english: "Premiums that must be paid in cash, not MediSave." }, isCorrect: false }
        ],
        explanation: { english: "CareShield Life is an enhanced scheme offering higher, escalating payouts and lifetime coverage for severe disability, addressing the limitations of ElderShield's fixed, limited-duration payouts (Ch 6, 2.2)." },
        difficulty: 6,
        topic: "Long-Term Care"
      },
      {
        id: 532,
        questionText: { english: "For a person to receive benefits under CareShield Life, they must be assessed as being unable to perform a minimum of:" },
        options: [
          { text: { english: "3 out of 6 Activities of Daily Living (ADLs)." }, isCorrect: true },
          { text: { english: "4 out of 6 Activities of Daily Living (ADLs)." }, isCorrect: false },
          { text: { english: "5 out of 6 Activities of Daily Living (ADLs)." }, isCorrect: false },
          { text: { english: "All 6 Activities of Daily Living (ADLs)." }, isCorrect: false }
        ],
        explanation: { english: "The standard trigger for severe disability payout under both CareShield Life and ElderShield is the inability to perform independently 3 out of 6 ADLs (Ch 6, 2.3)." },
        difficulty: 3,
        topic: "Long-Term Care"
      },
      {
        id: 533,
        questionText: { english: "The funds for CareShield Life premiums are generally drawn from which CPF account?" },
        options: [
          { text: { english: "Ordinary Account (OA)." }, isCorrect: false },
          { text: { english: "MediSave Account (MA)." }, isCorrect: true },
          { text: { english: "Special Account (SA)." }, isCorrect: false },
          { text: { english: "Retirement Account (RA)." }, isCorrect: false }
        ],
        explanation: { english: "CareShield Life premiums are designed to be fully payable using the member's MediSave funds (Ch 6, 3.1)." },
        difficulty: 2,
        topic: "MediSave"
      },
      {
        id: 534,
        questionText: { english: "Which party is responsible for administering the MediSave Care component (which involves cash withdrawals for long-term care needs)?" },
        options: [
          { text: { english: "The Ministry of Health (MOH)." }, isCorrect: false },
          { text: { english: "Private insurance providers." }, isCorrect: false },
          { text: { english: "The Central Provident Fund (CPF) Board." }, isCorrect: true },
          { text: { english: "The Agency for Integrated Care (AIC)." }, isCorrect: false }
        ],
        explanation: { english: "MediSave Care, which allows for cash withdrawals from MediSave for long-term care, is administered by the CPF Board (Ch 6, 2.1)." },
        difficulty: 5,
        topic: "Regulation"
      },
      {
        id: 535,
        questionText: { english: "Which statement about the Activities of Daily Living (ADLs) criterion for severe disability is TRUE?" },
        options: [
          { text: { english: "ADLs are primarily assessed based on the insured's cognitive ability." }, isCorrect: false },
          { text: { english: "The inability to perform an ADL must be due to an accident only." }, isCorrect: false },
          { text: { english: "The assessment measures the functional ability to perform basic self-care tasks (e.g., dressing, washing, toileting)." }, isCorrect: true },
          { text: { english: "ADLs only cover activities related to earning a living." }, isCorrect: false }
        ],
        explanation: { english: "The ADLs (Dressing, Washing, Toileting, Feeding, Mobility, Transferring) are measures of functional ability to perform basic self-care and mobility tasks (Ch 6, 2.3)." },
        difficulty: 3,
        topic: "Long-Term Care"
      },
      {
        id: 536,
        questionText: { english: "Premiums for CareShield Life are generally designed to be fully payable using:" },
        options: [
          { text: { english: "Cash only, as it is a long-term care product." }, isCorrect: false },
          { text: { english: "MediSave funds." }, isCorrect: true },
          { text: { english: "Ordinary Account (OA) funds." }, isCorrect: false },
          { text: { english: "The member's employer's CPF contributions." }, isCorrect: false }
        ],
        explanation: { english: "CareShield Life premiums are designed to be fully payable using the member's MediSave funds (Ch 6, 3.1)." },
        difficulty: 2,
        topic: "MediSave"
      },
      {
        id: 537,
        questionText: { english: "A key disadvantage of the original ElderShield scheme, compared to CareShield Life, was that the cash payouts for severe disability were:" },
        options: [
          { text: { english: "Indexed to inflation." }, isCorrect: false },
          { text: { english: "Available for life (lifetime payout)." }, isCorrect: false },
          { text: { english: "Limited to a fixed amount (e.g., $400) and for a limited duration (e.g., 5 or 6 years)." }, isCorrect: true },
          { text: { english: "Only available to individuals with low income." }, isCorrect: false }
        ],
        explanation: { english: "The original ElderShield scheme provided a fixed, limited-duration payout, which was insufficient for lifetime care costs (Ch 6, 2.2)." },
        difficulty: 6,
        topic: "Long-Term Care"
      },
      {
        id: 538,
        questionText: { english: "A policyholder buys a CareShield Life Supplement that provides a benefit for less severe disability (e.g., inability to perform 2 ADLs). This type of coverage is categorized as:" },
        options: [
          { text: { english: "Primary disability cover." }, isCorrect: false },
          { text: { english: "Enhanced disability benefits." }, isCorrect: true },
          { text: { english: "Medisave-approved coverage." }, isCorrect: false },
          { text: { english: "Catastrophic health cover." }, isCorrect: false }
        ],
        explanation: { english: "Benefits for less severe disability (e.g., 2 ADLs) are not covered by the basic CareShield Life scheme and are considered Enhanced Disability Benefits provided by supplements (Ch 6, 5.1)." },
        difficulty: 7,
        topic: "Long-Term Care"
      },
      {
        id: 539,
        questionText: { english: "When underwriting a Group Health Insurance policy, the insurer's decision is typically based on the overall risk profile of the entire group. Which factor is considered most crucial in assessing the group's risk?" },
        options: [
          { text: { english: "The average age of the top 10 executives." }, isCorrect: false },
          { text: { english: "The frequency of voluntary employee turnover." }, isCorrect: false },
          { text: { english: "The stability and size of the group." }, isCorrect: true },
          { text: { english: "The physical health of the CEO only." }, isCorrect: false }
        ],
        explanation: { english: "Group size and stability are paramount in group underwriting because a large, stable group ensures a predictable average risk pool, mitigating adverse selection (Ch 7, 3.1)." },
        difficulty: 5,
        topic: "Underwriting"
      },
      {
        id: 540,
        questionText: { english: "Under the Principle of Insurable Interest, who possesses an insurable interest in the life of a key employee of a corporation?" },
        options: [
          { text: { english: "The employee's spouse only." }, isCorrect: false },
          { text: { english: "The employee's children only." }, isCorrect: false },
          { text: { english: "The Corporation itself (up to the amount of potential financial loss due to the employee's death)." }, isCorrect: true },
          { text: { english: "The employee's creditor only." }, isCorrect: false }
        ],
        explanation: { english: "A corporation has an insurable interest in the life of a key employee up to the extent of the pecuniary loss it would suffer upon that employee's death (Ch 8, 2.1)." },
        difficulty: 6,
        topic: "Insurance Principles"
      },
      {
        id: 541,
        questionText: { english: "After submitting a claim for a severe illness, the insurer uses a Reserving Method to account for the claim. This involves:" },
        options: [
          { text: { english: "Delaying the claim decision until the policyholder's health improves." }, isCorrect: false },
          { text: { english: "Setting aside an estimated amount of funds (reserve) to meet the future financial obligation of the claim." }, isCorrect: true },
          { text: { english: "Liquidating a portion of the policyholder's accumulated cash value." }, isCorrect: false },
          { text: { english: "Transferring the claim liability to a reinsurance company." }, isCorrect: false }
        ],
        explanation: { english: "The reserving method in claims involves the insurer setting aside a financial reserve immediately after the claim is filed and deemed payable to cover the estimated future liability (Ch 9, 3.2)." },
        difficulty: 7,
        topic: "Claims"
      },
      {
        id: 542,
        questionText: { english: "The claim settlement process begins when the claimant provides 'due proof of loss.' This proof must demonstrate which key facts?" },
        options: [
          { text: { english: "The insured's income level and financial stability." }, isCorrect: false },
          { text: { english: "The insured's willingness to accept a settlement offer." }, isCorrect: false },
          { text: { english: "That the insured event (e.g., illness, injury) occurred while the policy was in force and is covered by the contract." }, isCorrect: true },
          { text: { english: "That the insured had no history of previous claims." }, isCorrect: false }
        ],
        explanation: { english: "Proof of loss must establish that the loss occurred while the policy was valid and that the event is covered by the terms and conditions of the policy (Ch 9, 2.2)." },
        difficulty: 5,
        topic: "Claims"
      },
      {
        id: 543,
        questionText: { english: "A Critical Illness policy is designed to be a valued contract. This means that upon a valid claim, the insurer pays:" },
        options: [
          { text: { english: "The amount of the actual medical expenses incurred." }, isCorrect: false },
          { text: { english: "The lesser of the actual loss or the sum assured." }, isCorrect: false },
          { text: { english: "The full policy sum assured (lump sum) regardless of the actual expenses or financial loss." }, isCorrect: true },
          { text: { english: "The cost of future premiums only." }, isCorrect: false }
        ],
        explanation: { english: "A valued contract pays the full sum assured regardless of the actual financial loss incurred by the policyholder (Ch 1, 4.4)." },
        difficulty: 4,
        topic: "Product Features"
      },
      {
        id: 544,
        questionText: { english: "If an insurer discovers a material misstatement on a Critical Illness application after the two-year contestable period has expired, the insurer may:" },
        options: [
          { text: { english: "Terminate the policy immediately." }, isCorrect: false },
          { text: { english: "Adjust the policy to what the premium would have purchased at the correct age." }, isCorrect: false },
          { text: { english: "Only contest the policy if the misstatement was fraudulent." }, isCorrect: true },
          { text: { english: "Automatically reduce the sum assured." }, isCorrect: false }
        ],
        explanation: { english: "After the contestable period, the insurer can only contest the policy validity and deny the claim if the misstatement was proven to be fraudulent (Ch 9, 3.1)." },
        difficulty: 7,
        topic: "Policy Provisions"
      },
      {
        id: 545,
        questionText: { english: "Which factor is most crucial for a reinsurance company when calculating the risk it accepts from a direct insurer for a pool of Critical Illness policies?" },
        options: [
          { text: { english: "The direct insurer's customer service rating." }, isCorrect: false },
          { text: { english: "The actuarial accuracy of the underlying mortality and morbidity statistics." }, isCorrect: true },
          { text: { english: "The agent's annual sales target." }, isCorrect: false },
          { text: { english: "The volume of policy loans requested by policyholders." }, isCorrect: false }
        ],
        explanation: { english: "Reinsurance pricing depends fundamentally on the actuarial data (mortality/morbidity statistics) used to model the probability and severity of claims from the reinsured block of policies (Ch 9, 6.2)." },
        difficulty: 8,
        topic: "Reinsurance"
      },
      {
        id: 546,
        questionText: { english: "In the context of Individual Health Insurance renewal, the provision that allows the insurer to raise premiums for the entire class of policies but not for the individual policyholder based on their claims experience is known as:" },
        options: [
          { text: { english: "Non-Cancellable." }, isCorrect: false },
          { text: { english: "Guaranteed Renewable." }, isCorrect: false },
          { text: { english: "Guaranteed Renewable at Class Rates." }, isCorrect: true },
          { text: { english: "Optionally Renewable." }, isCorrect: false }
        ],
        explanation: { english: "Guaranteed Renewable at Class Rates ensures the individual cannot be singled out for a premium increase based on their poor health, but the insurer retains the right to increase rates for the entire class of policyholders (Ch 2, 4.1)." },
        difficulty: 7,
        topic: "Policy Provisions"
      },
      {
        id: 547,
        questionText: { english: "A key exclusion commonly found in Disability Income policies is coverage for disability arising from:" },
        options: [
          { text: { english: "Traffic accidents." }, isCorrect: false },
          { text: { english: "Pre-existing conditions that were not disclosed in the application." }, isCorrect: true },
          { text: { english: "Work-related injuries (covered by WCIS)." }, isCorrect: false },
          { text: { english: "Severe heart attack." }, isCorrect: false }
        ],
        explanation: { english: "Policies typically exclude disabilities arising from undisclosed pre-existing conditions, aligning with the principle of Utmost Good Faith (Ch 4, 4.1)." },
        difficulty: 5,
        topic: "Exclusions"
      },
      {
        id: 548,
        questionText: { english: "What document must be provided to a client when submitting an application for any health insurance product to ensure adequate disclosure of costs?" },
        options: [
          { text: { english: "The insurer's annual financial report." }, isCorrect: false },
          { text: { english: "The claim history of the insurer." }, isCorrect: false },
          { text: { english: "The Product Summary/Benefits Illustration." }, isCorrect: true },
          { text: { english: "The full list of all insured employees in a group plan." }, isCorrect: false }
        ],
        explanation: { english: "The Product Summary/Benefits Illustration is the mandated disclosure document that details the features, benefits, costs, and risks of the policy (Ch 2, 6.1)." },
        difficulty: 4,
        topic: "Disclosure"
      },
      {
        id: 549,
        questionText: { english: "The financial institution's internal control procedure that provides an objective, periodic assessment of the insurer's compliance with regulations and internal rules related to underwriting and claims is the:" },
        options: [
          { text: { english: "Claims Adjustment Process." }, isCorrect: false },
          { text: { english: "Actuarial Valuation." }, isCorrect: false },
          { text: { english: "Compliance Audit/Review." }, isCorrect: true },
          { text: { english: "Agency Performance Review." }, isCorrect: false }
        ],
        explanation: { english: "A Compliance Audit/Review is performed by an independent unit (often internal audit or compliance) to objectively assess adherence to regulatory standards (Ch 9, 6.1)." },
        difficulty: 6,
        topic: "Compliance"
      },
      {
        id: 550,
        questionText: { english: "In the context of long-term care insurance, which of the following is an example of the ADL known as Transferring?" },
        options: [
          { text: { english: "Moving from a standing to a sitting position." }, isCorrect: false },
          { text: { english: "Moving from a bed to a chair." }, isCorrect: false },
          { text: { english: "Moving from a chair to a shower." }, isCorrect: false },
          { text: { english: "All of the above." }, isCorrect: true }
        ],
        explanation: { english: "Transferring refers to the ability to move from one seat or position to another (e.g., bed to chair, chair to commode, standing to sitting), making all three examples relevant (Ch 6, 2.3)." },
        difficulty: 5,
        topic: "Long-Term Care"
      }
    ],
    questionsEasy: [],
    questionsHard: [],
  };
