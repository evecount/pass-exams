
import type { Quiz } from "../types";

export const masterChallenge: Quiz = {
    id: "exam-1",
    year: "2024",
    title: "CMFAS Master Challenge",
    description: "A taster of 20 of the most challenging questions from across the RES 5, HI, M9, and M9A exams. Test your overall readiness.",
    questions: [
        {
            id: 797,
            questionText: {
                english: "Which policy pays the annuity benefit only for the duration of the annuitant's life and provides no refund to the beneficiaries?",
                chinese: "哪种保单只在年金领取人生存期间支付年金利益，并且不向受益人提供任何退款？",
                malay: "Polisi manakah yang membayar faedah anuiti hanya sepanjang hayat penerima anuiti dan tidak memberikan bayaran balik kepada benefisiari?",
                tamil: "ஆண்டுத்தொகை பெறுபவரின் ஆயுட்காலம் வரை மட்டுமே ஆண்டுத்தொகை பலனை செலுத்தும் மற்றும் பயனாளிகளுக்கு எந்தவிதமான பணத்தையும் திருப்பிச் செலுத்தாத பாலிசி எது?"
            },
            options: [
              { text: { english: "Life Annuity With Period Certain", chinese: "有保证期的终身年金", malay: "Anuiti Hayat Dengan Tempoh Tertentu", tamil: "குறிப்பிட்ட காலத்துடன் கூடிய ஆயுள் ஆண்டுத்தொகை" }, isCorrect: false },
              { text: { english: "Life Income With Refund Annuity", chinese: "有退款的终身收入年金", malay: "Anuiti Pendapatan Hayat Dengan Bayaran Balik", tamil: "பணம் திரும்பப்பெறும் ஆயுள் வருமான ஆண்டுத்தொகை" }, isCorrect: false },
              { text: { english: "Pure Life Annuity", chinese: "纯粹终身年金", malay: "Anuiti Hayat Tulen", tamil: "தூய ஆயுள் ஆண்டுத்தொகை" }, isCorrect: true },
              { text: { english: "Joint and Survivor Annuity", chinese: "联合生存者年金", malay: "Anuiti Bersama dan Kemandirian", tamil: "கூட்டு மற்றும் உயிர் பிழைத்தவர் ஆண்டுத்தொகை" }, isCorrect: false }
            ],
            explanation: { 
                english: "Correct: Pure Life Annuity is the policy with the highest mortality risk assumption, leading to the highest payout for the annuitant.",
                chinese: "正确：纯粹终身年金是具有最高死亡率风险假设的保单，因此能为年金领取人带来最高的派彩。",
                malay: "Betul: Anuiti Hayat Tulen ialah polisi dengan andaian risiko kematian tertinggi, yang membawa kepada pembayaran tertinggi untuk penerima anuiti.",
                tamil: "சரி: தூய ஆயுள் ஆண்டுத்தொகை என்பது அதிக இறப்பு ஆபத்து அனுமானத்தைக் கொண்ட பாலிசி ஆகும், இது ஆண்டுத்தொகை பெறுபவருக்கு அதிகபட்ச கொடுப்பனவுக்கு வழிவகுக்கிறது."
            },
            difficulty: 7,
            topic: "Annuities"
        },
        {
            id: 613,
            questionText: { 
                english: "The technique where a fund manager borrows capital to increase the portfolio's exposure beyond the client's actual investment amount is called:",
                chinese: "基金经理借入资本以增加投资组合的风险敞口，使其超出客户实际投资金额的技术称为什么？",
                malay: "Teknik di mana pengurus dana meminjam modal untuk meningkatkan pendedahan portfolio melebihi jumlah pelaburan sebenar pelanggan dipanggil:",
                tamil: "ஒரு நிதி மேலாளர் வாடிக்கையாளரின் உண்மையான முதலீட்டுத் தொகையைத் தாண்டி போர்ட்ஃபோலியோவின் வெளிப்பாட்டை அதிகரிக்க மூலதனத்தைக் கடன் வாங்கும் நுட்பம் என்னவென்று அழைக்கப்படுகிறது?"
            },
            options: [
              { text: { english: "Asset Rebalancing.", chinese: "资产再平衡。", malay: "Pengimbangan Semula Aset.", tamil: "சொத்து மறுசீரமைப்பு." }, isCorrect: false },
              { text: { english: "Margin Call.", chinese: "追加保证金通知。", malay: "Panggilan Margin.", tamil: "மார்ஜின் அழைப்பு." }, isCorrect: false },
              { text: { english: "Leverage (Gearing).", chinese: "杠杆（负债比率）。", malay: "Leveraj (Gearing).", tamil: "நெம்புகோல் (Gearing)." }, isCorrect: true },
              { text: { english: "Drip-Feeding.", chinese: "点滴式投资。", malay: "Suntikan Dana Berperingkat.", tamil: "சொட்டு-ஊட்டல்." }, isCorrect: false }
            ],
            explanation: { 
                english: "Leverage (or Gearing) is the technique used by managers, often by borrowing or using margin, to increase the potential rate of return by gaining exposure to assets greater than the initial capital.",
                chinese: "杠杆（或负债比率）是基金经理常用的一种技术，通过借贷或使用保证金来增加潜在回报率，获得比初始资本更大的资产风险敞口。",
                malay: "Leveraj (atau Gearing) ialah teknik yang digunakan oleh pengurus, selalunya dengan meminjam atau menggunakan margin, untuk meningkatkan potensi kadar pulangan dengan mendapatkan pendedahan kepada aset yang lebih besar daripada modal permulaan.",
                tamil: "நெம்புகோல் (அல்லது கியரிங்) என்பது மேலாளர்கள் பயன்படுத்தும் ஒரு நுட்பமாகும், இது பெரும்பாலும் கடன் வாங்குவதன் மூலம் அல்லது மார்ஜினைப் பயன்படுத்துவதன் மூலம், ஆரம்ப மூலதனத்தை விட பெரிய சொத்துக்களுக்கு வெளிப்பாட்டைப் பெறுவதன் மூலம் சாத்தியமான வருவாய் விகிதத்தை அதிகரிக்கிறது."
            },
            difficulty: 6,
            topic: "Derivatives"
        },
        {
            id: 1,
            questionText: { 
                english: "The rule that an appointed or provisional representative can act only for one principal at any one time aims to",
                chinese: "规定指定或临时代表在任何时候只能为一个委托人行事的规则旨在",
                malay: "Peraturan bahawa wakil yang dilantik atau sementara hanya boleh bertindak untuk satu prinsipal pada satu-satu masa bertujuan untuk",
                tamil: "ஒரு நியமிக்கப்பட்ட அல்லது தற்காலிக பிரதிநிதி எந்த நேரத்திலும் ஒரு முதன்மைக்காக மட்டுமே செயல்பட முடியும் என்ற விதி எதை நோக்கமாகக் கொண்டுள்ளது"
             },
            options: [
              {
                text: { english: "avoid any contract requirements misunderstanding for the representative.", chinese: "避免代表对任何合同要求产生误解。", malay: "mengelakkan sebarang salah faham keperluan kontrak untuk wakil.", tamil: "பிரதிநிதிக்கான எந்தவொரு ஒப்பந்தத் தேவைகளையும் தவறாகப் புரிந்துகொள்வதைத் தவிர்க்கவும்." },
                isCorrect: false,
              },
              { text: { english: "reduce the number of RNF identifications issued.", chinese: "减少RNF身份证明的签发数量。", malay: "mengurangkan bilangan pengenalan RNF yang dikeluarkan.", tamil: "வழங்கப்பட்ட RNF அடையாளங்களின் எண்ணிக்கையைக் குறைக்கவும்." }, isCorrect: false },
              {
                text: { english: "avoid the ease of filing complaints for the investors.", chinese: "避免投资者轻易提出投诉。", malay: "mengelakkan kemudahan memfailkan aduan untuk pelabur.", tamil: "முதலீட்டாளர்களுக்கு புகார்களை தாக்கல் செய்வதை எளிதாக்குவதைத் தவிர்க்கவும்." },
                isCorrect: false,
              },
              {
                text: { english: "ensure that the financial advisers closely monitor and supervise their representatives at all times.", chinese: "确保财务顾问在任何时候都密切监督和指导其代表。", malay: "memastikan penasihat kewangan memantau dan menyelia wakil mereka dengan teliti pada setiap masa.", tamil: "நிதி ஆலோசகர்கள் தங்கள் பிரதிநிதிகளை எல்லா நேரங்களிலும் உன்னிப்பாகக் கண்காணித்து மேற்பார்வை செய்வதை உறுதிசெய்யவும்." },
                isCorrect: true,
              },
            ],
            explanation: { 
                english: "This rule ensures that principals (financial advisers) can effectively supervise their representatives, maintaining accountability and upholding standards of practice.",
                chinese: "这项规则确保委托人（财务顾问）能够有效地监督其代表，维持问责制并维护执业标准。",
                malay: "Peraturan ini memastikan bahawa prinsipal (penasihat kewangan) dapat menyelia wakil mereka dengan berkesan, mengekalkan kebertanggungjawaban dan menegakkan standard amalan.",
                tamil: "இந்த விதி முதலாளிகள் (நிதி ஆலோசகர்கள்) தங்கள் பிரதிநிதிகளை திறம்பட மேற்பார்வையிட முடியும் என்பதை உறுதிசெய்கிறது, பொறுப்புக்கூறல் மற்றும் நடைமுறைத் தரங்களை நிலைநிறுத்துகிறது."
            },
            difficulty: 5,
            topic: "FAA & FAR"
        },
        {
            id: 2,
            questionText: { 
                english: "In assessing an application for a financial adviser’s licence, the MAS takes into consideration",
                chinese: "在评估财务顾问牌照的申请时，新加坡金融管理局（MAS）会考虑",
                malay: "Dalam menilai permohonan untuk lesen penasihat kewangan, MAS mengambil kira",
                tamil: "ஒரு நிதி ஆலோசகரின் உரிமத்திற்கான விண்ணப்பத்தை மதிப்பிடும்போது, ​​MAS கருத்தில் கொள்கிறது"
            },
            options: [
              { text: { english: "its business growth in the last 3 years.", chinese: "其过去3年的业务增长。", malay: "pertumbuhan perniagaannya dalam 3 tahun yang lalu.", tamil: "கடந்த 3 ஆண்டுகளில் அதன் வணிக வளர்ச்சி." }, isCorrect: false },
              { text: { english: "the number of board members.", chinese: "董事会成员的人数。", malay: "bilangan ahli lembaga pengarah.", tamil: "குழு உறுப்பினர்களின் எண்ணிக்கை." }, isCorrect: false },
              { text: { english: "its fitness and propriety.", chinese: "其适当性。", malay: "kesesuaian dan kelayakannya.", tamil: "அதன் தகுதி மற்றும் பொருத்தம்." }, isCorrect: true },
              {
                text: { english: "the number of representatives with at least 5 years of relevant experience.", chinese: "拥有至少5年相关经验的代表人数。", malay: "bilangan wakil yang mempunyai sekurang-kurangnya 5 tahun pengalaman yang relevan.", tamil: "குறைந்தது 5 வருட தொடர்புடைய அனுபவமுள்ள பிரதிநிதிகளின் எண்ணிக்கை." },
                isCorrect: false,
              },
            ],
            explanation: { 
                english: "The Monetary Authority of Singapore (MAS) assesses the fitness and propriety of the applicant, its directors, and key officers to ensure they are competent, honest, and have integrity.",
                chinese: "新加坡金融管理局（MAS）评估申请人、其董事和主要高级职员的适当性，以确保他们有能力、诚实和正直。",
                malay: "Pihak Berkuasa Monetari Singapura (MAS) menilai kesesuaian dan kelayakan pemohon, pengarah, dan pegawai utamanya untuk memastikan mereka cekap, jujur, dan berintegriti.",
                tamil: "சிங்கப்பூர் நாணய ஆணையம் (MAS) விண்ணப்பதாரர், அதன் இயக்குநர்கள் மற்றும் முக்கிய அதிகாரிகளின் தகுதி மற்றும் பொருத்தத்தை அவர்கள் தகுதியானவர்கள், நேர்மையானவர்கள் மற்றும் ஒருமைப்பாடு கொண்டவர்கள் என்பதை உறுதிப்படுத்த மதிப்பிடுகிறது."
            },
            difficulty: 4,
            topic: "Licensing"
        },
        {
            id: 4,
            questionText: { 
                english: "How often does an existing financial adviser’s licence have to be renewed?",
                chinese: "现有的财务顾问牌照需要多久更新一次？",
                malay: "Berapa kerap lesen penasihat kewangan sedia ada perlu diperbaharui?",
                tamil: "தற்போதுள்ள நிதி ஆலோசகர் உரிமத்தை எவ்வளவு அடிக்கடி புதுப்பிக்க வேண்டும்?"
            },
            options: [
              { text: { english: "Annually.", chinese: "每年。", malay: "Setiap tahun.", tamil: "ஆண்டுதோறும்." }, isCorrect: false },
              { text: { english: "Biannually.", chinese: "每两年一次。", malay: "Dua kali setahun.", tamil: "ஈராண்டுக்கு ஒருமுறை." }, isCorrect: false },
              { text: { english: "Every 3 years.", chinese: "每3年一次。", malay: "Setiap 3 tahun.", tamil: "ஒவ்வொரு 3 வருடங்களுக்கும்." }, isCorrect: false },
              { text: { english: "No renewal is needed.", chinese: "无需更新。", malay: "Tiada pembaharuan diperlukan.", tamil: "புதுப்பித்தல் தேவையில்லை." }, isCorrect: true },
            ],
            explanation: { 
                english: "A financial adviser's licence is valid until it is revoked or suspended by MAS. No renewal is required.",
                chinese: "财务顾问的牌照在其被MAS撤销或暂停之前一直有效。无需更新。",
                malay: "Lesen penasihat kewangan adalah sah sehingga ia dibatalkan atau digantung oleh MAS. Tiada pembaharuan diperlukan.",
                tamil: "ஒரு நிதி ஆலோசகரின் உரிமம் MAS ஆல் ரத்துசெய்யப்படும் வரை அல்லது இடைநிறுத்தப்படும் வரை செல்லுபடியாகும். புதுப்பித்தல் தேவையில்லை."
            },
            difficulty: 6,
            topic: "Licensing"
        },
        {
            id: 505,
            questionText: { 
                english: "Mr. Tan, aged 72 (ANB), has a private IP component premium of S$1,200. How much cash must he pay for this premium?",
                chinese: "陈先生，72岁（下一个生日年龄），其私人综合健保计划（IP）部分的保费为1200新元。他必须支付多少现金？",
                malay: "Encik Tan, berumur 72 tahun (ANB), mempunyai premium komponen IP swasta sebanyak S$1,200. Berapakah wang tunai yang perlu dibayarnya untuk premium ini?",
                tamil: "திரு. டான், வயது 72 (ANB), ஒரு தனியார் IP கூறு பிரீமியம் S$1,200 உள்ளது. இந்த பிரீமியத்திற்கு அவர் எவ்வளவு ரொக்கமாக செலுத்த வேண்டும்?"
            },
            options: [
              { text: { english: "S$300", chinese: "300新元", malay: "S$300", tamil: "S$300" }, isCorrect: true },
              { text: { english: "S$600", chinese: "600新元", malay: "S$600", tamil: "S$600" }, isCorrect: false },
              { text: { english: "S$900", chinese: "900新元", malay: "S$900", tamil: "S$900" }, isCorrect: false },
              { text: { english: "S$1,200", chinese: "1,200新元", malay: "S$1,200", tamil: "S$1,200" }, isCorrect: false },
            ],
            explanation: { 
                english: "The Additional Withdrawal Limit (AWL) for IP premiums for ages 71 and above is S$900. Therefore, the cash portion is the premium less the AWL. Calculation: S$1,200 - S$900 = S$300.",
                chinese: "71岁及以上人士的IP保费额外提取限额（AWL）为900新元。因此，现金部分为保费减去AWL。计算：1200新元 - 900新元 = 300新元。",
                malay: "Had Pengeluaran Tambahan (AWL) untuk premium IP bagi umur 71 tahun ke atas ialah S$900. Oleh itu, bahagian tunai ialah premium tolak AWL. Pengiraan: S$1,200 - S$900 = S$300.",
                tamil: "71 வயது மற்றும் அதற்கு மேற்பட்டவர்களுக்கான ஐபி பிரீமியங்களுக்கான கூடுதல் திரும்பப் பெறுதல் வரம்பு (AWL) S$900 ஆகும். எனவே, ரொக்கப் பகுதி பிரீமியம் கழித்தல் AWL ஆகும். கணக்கீடு: S$1,200 - S$900 = S$300."
            },
            difficulty: 8,
            topic: "MediSave"
        },
        {
            id: 513,
            questionText: { 
                english: "Which of the following is the defining characteristic of a Disability-based Long-Term Care (LTC) policy?",
                chinese: "以下哪项是基于残疾的长期护理（LTC）保单的定义性特征？",
                malay: "Antara berikut, yang manakah ciri penentu bagi polisi Penjagaan Jangka Panjang (LTC) berasaskan Hilang Upaya?",
                tamil: "பின்வருவனவற்றில் எது இயலாமை அடிப்படையிலான நீண்ட கால பராமரிப்பு (LTC) பாலிசியின் வரையறுக்கும் பண்பு?"
            },
            options: [
              { text: { english: "It pays a benefit when the insured meets the disability trigger, regardless of the service used.", chinese: "当受保人达到残疾触发条件时，无论使用何种服务，都会支付赔偿金。", malay: "Ia membayar faedah apabila orang yang diinsuranskan memenuhi pencetus hilang upaya, tidak kira perkhidmatan yang digunakan.", tamil: "காப்பீடு செய்யப்பட்டவர் இயலாமை தூண்டுதலை சந்திக்கும் போது, ​​பயன்படுத்தப்படும் சேவையைப் பொருட்படுத்தாமல் அது ஒரு பலனை செலுத்துகிறது." }, isCorrect: true },
              { text: { english: "It only pays for services rendered by an approved nursing home.", chinese: "它只支付经批准的疗养院提供的服务费用。", malay: "Ia hanya membayar untuk perkhidmatan yang diberikan oleh rumah jagaan yang diluluskan.", tamil: "இது அங்கீகரிக்கப்பட்ட நர்சிங் ஹோம் மூலம் வழங்கப்படும் சேவைகளுக்கு மட்டுமே செலுத்துகிறது." }, isCorrect: false },
              { text: { english: "It requires receipts for care services before making a payment.", chinese: "在付款前需要提供护理服务的收据。", malay: "Ia memerlukan resit untuk perkhidmatan penjagaan sebelum membuat pembayaran.", tamil: "பணம் செலுத்துவதற்கு முன் பராமரிப்பு சேவைகளுக்கான ரசீதுகள் தேவை." }, isCorrect: false },
              { text: { english: "It provides a lump sum benefit upon diagnosis.", chinese: "诊断后提供一笔总付赔偿金。", malay: "Ia memberikan faedah sekaligus semasa diagnosis.", tamil: "இது நோயறிதலின் பேரில் ஒரு மொத்தத் தொகையை வழங்குகிறது." }, isCorrect: false },
            ],
            explanation: { 
                english: "Disability-based LTC policies pay out a regular benefit once the insured meets the disability criteria (e.g., failure of ADLs), without requiring proof that specific care services have been engaged. This contrasts with service-based policies.",
                chinese: "基于残疾的长期护理保单在受保人符合残疾标准（例如，无法进行日常生活活动）后，会定期支付赔偿金，而无需证明已使用特定的护理服务。这与基于服务的保单形成对比。",
                malay: "Polisi LTC berasaskan hilang upaya membayar faedah tetap sebaik sahaja orang yang diinsuranskan memenuhi kriteria hilang upaya (cth., kegagalan ADL), tanpa memerlukan bukti bahawa perkhidmatan penjagaan khusus telah digunakan. Ini berbeza dengan polisi berasaskan perkhidmatan.",
                tamil: "இயலாமை அடிப்படையிலான LTC பாலிசிகள், காப்பீடு செய்யப்பட்டவர் இயலாமைக்கான அளவுகோல்களைப் பூர்த்தி செய்தவுடன் (எ.கா., ADL களின் தோல்வி), குறிப்பிட்ட பராமரிப்பு சேவைகள் ஈடுபடுத்தப்பட்டுள்ளன என்பதற்கான ஆதாரத்தைக் கோராமல், வழக்கமான பலனைச் செலுத்துகின்றன. இது சேவை அடிப்படையிலான பாலிசிகளுக்கு முரணானது."
            },
            difficulty: 6,
            topic: "Long-Term Care"
        },
        {
            id: 522,
            questionText: { 
                english: "Which of the following describes the Fee Schedule payment method used by a Managed Healthcare Organization (MHO)?",
                chinese: "以下哪项描述了管理式医疗组织（MHO）使用的收费表支付方式？",
                malay: "Antara berikut, yang manakah menerangkan kaedah pembayaran Jadual Yuran yang digunakan oleh Organisasi Penjagaan Kesihatan Terurus (MHO)?",
                tamil: "நிர்வகிக்கப்பட்ட சுகாதாரப் பாதுகாப்பு அமைப்பு (MHO) பயன்படுத்தும் கட்டண அட்டவணை கட்டண முறையை பின்வருவனவற்றில் எது விவரிக்கிறது?"
            },
            options: [
              { text: { english: "The MHO places caps or limits on the dollar amounts reimbursed for specific medical procedures and services.", chinese: "MHO对特定医疗程序和服务的报销金额设置上限或限制。", malay: "MHO meletakkan had atau batasan pada jumlah dolar yang dibayar balik untuk prosedur dan perkhidmatan perubatan tertentu.", tamil: "MHO குறிப்பிட்ட மருத்துவ நடைமுறைகள் மற்றும் சேவைகளுக்கு திருப்பிச் செலுத்தப்படும் டாலர் தொகையின் மீது வரம்புகள் அல்லது வரம்புகளை வைக்கிறது." }, isCorrect: true },
              { text: { english: "The MHO provides a fixed monthly payment to the healthcare provider for each member enrolled.", chinese: "MHO为每个注册会员向医疗保健提供者提供固定的月度付款。", malay: "MHO menyediakan bayaran bulanan tetap kepada penyedia penjagaan kesihatan untuk setiap ahli yang mendaftar.", tamil: "MHO பதிவுசெய்யப்பட்ட ஒவ்வொரு உறுப்பினருக்கும் சுகாதார வழங்குநருக்கு நிலையான மாதாந்திர கட்டணத்தை வழங்குகிறது." }, isCorrect: false },
              { text: { english: "The MHO pays a percentage discount off the provider's usual and customary charges.", chinese: "MHO从提供商的常规和惯例收费中支付折扣百分比。", malay: "MHO membayar diskaun peratusan daripada caj biasa dan lazim penyedia.", tamil: "MHO வழங்குநரின் வழக்கமான மற்றும் வழக்கமான கட்டணங்களிலிருந்து ஒரு சதவீத தள்ளுபடியை செலுத்துகிறது." }, isCorrect: false },
              { text: { english: "The MHO reimburses all medical expenses without any limits.", chinese: "MHO无限制地报销所有医疗费用。", malay: "MHO membayar balik semua perbelanjaan perubatan tanpa sebarang had.", tamil: "MHO வரம்புகள் இல்லாமல் அனைத்து மருத்துவ செலவுகளையும் திருப்பிச் செலுத்துகிறது." }, isCorrect: false },
            ],
            explanation: { 
                english: "A Fee Schedule is a list of maximum fees the MHO will reimburse for specific medical services, which helps control costs. A fixed prepayment is Capitation, and paying a percentage off is a Discounted Fee-for-Service.",
                chinese: "收费表是MHO将为特定医疗服务报销的最高费用清单，有助于控制成本。固定预付款是按人头付费，而按折扣付费是折扣服务费。",
                malay: "Jadual Yuran ialah senarai yuran maksimum yang akan dibayar balik oleh MHO untuk perkhidmatan perubatan tertentu, yang membantu mengawal kos. Bayaran pendahuluan tetap ialah Kapitasi, dan membayar potongan peratusan ialah Yuran-untuk-Perkhidmatan Diskaun.",
                tamil: "கட்டண அட்டவணை என்பது MHO குறிப்பிட்ட மருத்துவ சேவைகளுக்கு திருப்பிச் செலுத்தும் அதிகபட்ச கட்டணங்களின் பட்டியல் ஆகும், இது செலவுகளைக் கட்டுப்படுத்த உதவுகிறது. ஒரு நிலையான முன்பணம் என்பது கேபிடேஷன் ஆகும், மேலும் ஒரு சதவீதத்தை தள்ளுபடி செய்வது தள்ளுபடி செய்யப்பட்ட சேவைக்கான கட்டணம் ஆகும்."
            },
            difficulty: 7,
            topic: "Managed Healthcare"
        },
        {
            id: 537,
            questionText: { 
                english: "Which payment structure used by a Managed Healthcare Organization (MHO) creates the strongest financial incentive for the provider to focus on preventive care?",
                chinese: "管理式医疗组织（MHO）使用的哪种支付结构为提供者专注于预防保健创造了最强的财务激励？",
                malay: "Struktur pembayaran manakah yang digunakan oleh Organisasi Penjagaan Kesihatan Terurus (MHO) yang mewujudkan insentif kewangan terkuat bagi penyedia untuk memberi tumpuan kepada penjagaan pencegahan?",
                tamil: "நிர்வகிக்கப்பட்ட சுகாதாரப் பாதுகாப்பு அமைப்பு (MHO) பயன்படுத்தும் எந்த கட்டண அமைப்பு வழங்குநருக்கு தடுப்பு சிகிச்சையில் கவனம் செலுத்த வலுவான நிதி ஊக்கத்தை உருவாக்குகிறது?"
            },
            options: [
              { text: { english: "Capitation", chinese: "按人头付费", malay: "Kapitasi", tamil: "கேபிடேஷன்" }, isCorrect: true },
              { text: { english: "Discounted Fee-for-Service", chinese: "折扣服务费", malay: "Yuran-untuk-Perkhidmatan Diskaun", tamil: "தள்ளுபடி செய்யப்பட்ட சேவைக்கான கட்டணம்" }, isCorrect: false },
              { text: { english: "Fee Schedule", chinese: "收费表", malay: "Jadual Yuran", tamil: "கட்டண அட்டவணை" }, isCorrect: false },
              { text: { english: "Reimbursement", chinese: "报销", malay: "Bayaran Balik", tamil: "திரும்பப்பெறுதல்" }, isCorrect: false },
            ],
            explanation: { 
                english: "Under Capitation, the provider receives a fixed fee per member per month, regardless of how many services are used. This incentivizes the provider to keep members healthy to reduce costs and maximize profit.",
                chinese: "在按人头付费模式下，无论使用多少服务，提供者每月都会为每个会员获得固定费用。这激励提供者保持会员健康，以降低成本并实现利润最大化。",
                malay: "Di bawah Kapitasi, penyedia menerima yuran tetap bagi setiap ahli sebulan, tidak kira berapa banyak perkhidmatan yang digunakan. Ini memberi insentif kepada penyedia untuk memastikan ahli sihat bagi mengurangkan kos dan memaksimumkan keuntungan.",
                tamil: "கேபிடேஷனின் கீழ், எத்தனை சேவைகள் பயன்படுத்தப்பட்டாலும், வழங்குநர் ஒரு உறுப்பினருக்கு மாதந்தோறும் ஒரு நிலையான கட்டணத்தைப் பெறுகிறார். இது வழங்குநர்களை செலவுகளைக் குறைக்கவும் லாபத்தை அதிகரிக்கவும் உறுப்பினர்களை ஆரோக்கியமாக வைத்திருக்க ஊக்குவிக்கிறது."
            },
            difficulty: 8,
            topic: "Managed Healthcare"
        },
        {
            id: 541,
            questionText: { 
                english: "What is the primary difference between an Acceleration Benefit CI rider and an Additional Benefit CI rider?",
                chinese: "加速给付重疾附加险和额外给付重疾附加险之间的主要区别是什么？",
                malay: "Apakah perbezaan utama antara rider CI Manfaat Percepatan dan rider CI Manfaat Tambahan?",
                tamil: "முடுக்கப் பலன் CI ரைடருக்கும் கூடுதல் பலன் CI ரைடருக்கும் உள்ள முதன்மை வேறுபாடு என்ன?"
            },
            options: [
              { text: { english: "The Acceleration Benefit reduces the basic Life Insurance sum assured upon CI claim.", chinese: "加速给付在重疾索赔后会减少基本人寿保险的保额。", malay: "Manfaat Percepatan mengurangkan jumlah asas insurans Hayat yang diinsuranskan semasa tuntutan CI.", tamil: "முடுக்கம் பலன் CI கோரிக்கையின் பேரில் அடிப்படை ஆயுள் காப்பீட்டுத் தொகையைக் குறைக்கிறது." }, isCorrect: true },
              { text: { english: "The Additional Benefit rider has a longer waiting period.", chinese: "额外给付附加险的等待期更长。", malay: "Rider Manfaat Tambahan mempunyai tempoh menunggu yang lebih lama.", tamil: "கூடுதல் பலன் ரைடர் நீண்ட காத்திருப்பு காலத்தைக் கொண்டுள்ளது." }, isCorrect: false },
              { text: { english: "The Acceleration Benefit can only be claimed once.", chinese: "加速给付只能索赔一次。", malay: "Manfaat Percepatan hanya boleh dituntut sekali.", tamil: "முடுக்கம் பலனை ஒரு முறை மட்டுமே கோர முடியும்." }, isCorrect: false },
              { text: { english: "The Additional Benefit does not cover the same range of critical illnesses.", chinese: "额外给付不涵盖相同范围的重大疾病。", malay: "Manfaat Tambahan tidak meliputi rangkaian penyakit kritikal yang sama.", tamil: "கூடுதல் பலன் ஒரே அளவிலான गंभीर நோய்களை உள்ளடக்காது." }, isCorrect: false },
            ],
            explanation: { 
                english: "An Acceleration Benefit is an advance payment of the death benefit; thus, the sum assured of the basic policy is reduced after the claim. An Additional Benefit pays out on top of the death benefit, leaving the basic sum assured intact.",
                chinese: "加速给付是死亡赔偿金的预付款；因此，索赔后基本保单的保额会减少。额外给付是在死亡赔偿金之外支付的，基本保额保持不变。",
                malay: "Manfaat Percepatan ialah bayaran pendahuluan manfaat kematian; oleh itu, jumlah yang diinsuranskan bagi polisi asas dikurangkan selepas tuntutan. Manfaat Tambahan membayar di atas manfaat kematian, membiarkan jumlah asas yang diinsuranskan tidak terjejas.",
                tamil: "முடுக்கம் பலன் என்பது மரணப் பலனின் முன்பணமாகும்; எனவே, கோரிக்கைக்குப் பிறகு அடிப்படைக் பாலிசியின் காப்பீட்டுத் தொகை குறைக்கப்படுகிறது. ஒரு கூடுதல் பலன் மரணப் பலனுக்கு மேல் செலுத்துகிறது, அடிப்படை காப்பீட்டுத் தொகையை அப்படியே விட்டுவிடுகிறது."
            },
            difficulty: 7,
            topic: "Riders"
        },
        {
            id: 708,
            questionText: { 
                english: "The conversion of a traditional Whole Life policy to an Extended Term Insurance option is funded by liquidating which policy element?",
                chinese: "将传统终身寿险保单转换为展期定期寿险选项是通过清算哪个保单元素来提供资金的？",
                malay: "Penukaran polisi Hayat Sepenuh tradisional kepada pilihan Insurans Bertempoh Lanjutan dibiayai dengan mencairkan elemen polisi yang mana?",
                tamil: "ஒரு பாரம்பரிய முழு ஆயுள் பாலிசியை நீட்டிக்கப்பட்ட கால காப்பீட்டு விருப்பமாக மாற்றுவது எந்த பாலிசி உறுப்பை கலைப்பதன் மூலம் நிதியளிக்கப்படுகிறது?"
            },
            options: [
                { text: { english: "The policy loan outstanding.", chinese: "未偿还的保单贷款。", malay: "Pinjaman polisi yang belum dijelaskan.", tamil: "நிலுவையில் உள்ள பாலிசி கடன்." }, isCorrect: false },
                { text: { english: "The accumulated cash value.", chinese: "累积的现金价值。", malay: "Nilai tunai terkumpul.", tamil: "திரட்டப்பட்ட பண மதிப்பு." }, isCorrect: true },
                { text: { english: "The non-guaranteed Reversionary Bonus.", chinese: "非保证的复归红利。", malay: "Bonus Pulangan tidak terjamin.", tamil: "உத்தரவாதமில்லாத மீள்வு போனஸ்." }, isCorrect: false },
                { text: { english: "The premium allocated for expenses.", chinese: "用于费用的保费分配。", malay: "Premium yang diperuntukkan untuk perbelanjaan.", tamil: "செலவுகளுக்கு ஒதுக்கப்பட்ட பிரீமியம்." }, isCorrect: false }
            ],
            explanation: { 
                english: "Correct: The accumulated net Cash Value is used as a single premium to buy a new Term policy with the original sum assured for a limited time. A, C: The loan is deducted from the cash value; the bonus is part of the cash value, not the sole funding source.",
                chinese: "正确：累积的净现金价值被用作一次性保费，以购买一份具有原始保额但期限有限的新定期保单。A、C：贷款从现金价值中扣除；红利是现金价值的一部分，而不是唯一的资金来源。",
                malay: "Betul: Nilai Tunai bersih terkumpul digunakan sebagai premium tunggal untuk membeli polisi Bertempoh baharu dengan jumlah diinsuranskan asal untuk masa yang terhad. A, C: Pinjaman ditolak daripada nilai tunai; bonus adalah sebahagian daripada nilai tunai, bukan satu-satunya sumber pembiayaan.",
                tamil: "சரி: திரட்டப்பட்ட நிகர பண மதிப்பு ஒரு வரையறுக்கப்பட்ட காலத்திற்கு அசல் காப்பீட்டுத் தொகையுடன் ஒரு புதிய கால பாலிசியை வாங்க ஒற்றை பிரீமியமாகப் பயன்படுத்தப்படுகிறது. A, C: கடன் பண மதிப்பிலிருந்து கழிக்கப்படுகிறது; போனஸ் பண மதிப்பின் ஒரு பகுதியாகும், ஒரே நிதி ஆதாரம் அல்ல."
            },
            difficulty: 7,
            topic: "Policy Provisions"
        },
        {
            id: 737,
            questionText: { 
                english: "In the calculation of a Regular Premium ILP with DB4 (Higher of Units or Sum Assured), what is the Net Amount at Risk (NAR)?",
                chinese: "在计算具有DB4（单位价值或保额中的较高者）的定期保费投资连结保险（ILP）时，风险净额（NAR）是多少？",
                malay: "Dalam pengiraan ILP Premium Biasa dengan DB4 (Lebih Tinggi daripada Unit atau Jumlah Diinsuranskan), apakah Jumlah Bersih Berisiko (NAR)?",
                tamil: "DB4 (அலகுகள் அல்லது காப்பீட்டுத் தொகையில் எது அதிகமோ) உடன் வழக்கமான பிரீமியம் ILP கணக்கீட்டில், ஆபத்தில் உள்ள நிகரத் தொகை (NAR) என்ன?"
            },
            options: [
                { text: { english: "Always the Sum Assured", chinese: "始终为保额", malay: "Sentiasa Jumlah Diinsuranskan", tamil: "எப்போதும் காப்பீட்டுத் தொகை" }, isCorrect: false },
                { text: { english: "Sum Assured x Mortality Rate", chinese: "保额 x 死亡率", malay: "Jumlah Diinsuranskan x Kadar Kematian", tamil: "காப்பீட்டுத் தொகை x இறப்பு விகிதம்" }, isCorrect: false },
                { text: { english: "Sum Assured minus Unit Value", chinese: "保额减去单位价值", malay: "Jumlah Diinsuranskan tolak Nilai Unit", tamil: "காப்பீட்டுத் தொகை கழித்தல் யூனிட் மதிப்பு" }, isCorrect: true },
                { text: { english: "Unit Value minus Sum Assured", chinese: "单位价值减去保额", malay: "Nilai Unit tolak Jumlah Diinsuranskan", tamil: "யூனிட் மதிப்பு கழித்தல் காப்பீட்டுத் தொகை" }, isCorrect: false }
            ],
            explanation: { 
                english: "Correct: The NAR = Sum Assured minus Unit Value (v - u). This is the amount the insurer must cover if the unit value is lower than the guarantee.",
                chinese: "正确：风险净额 = 保额 - 单位价值（v - u）。如果单位价值低于保证金额，这是保险公司必须承担的金额。",
                malay: "Betul: NAR = Jumlah Diinsuranskan tolak Nilai Unit (v - u). Ini adalah jumlah yang perlu ditanggung oleh syarikat insurans jika nilai unit lebih rendah daripada jaminan.",
                tamil: "சரி: NAR = காப்பீட்டுத் தொகை கழித்தல் யூனிட் மதிப்பு (v - u). யூனிட் மதிப்பு உத்தரவாதத்தை விட குறைவாக இருந்தால் காப்பீட்டாளர் ஈடுசெய்ய வேண்டிய தொகை இதுவாகும்."
            },
            difficulty: 8,
            topic: "ILPs"
        },
        {
            id: 761,
            questionText: { 
                english: "(DB4 Payout - Verbatim Mock Q98) Samantha's ILP has 27,027 units and the sum assured is S$50,000. Offer price: S$1.91. Bid-offer spread: 5%. What would be the death benefit payable?",
                chinese: "（DB4赔付 - 模拟题Q98逐字记录）Samantha的投资连结保险（ILP）有27,027个单位，保额为50,000新元。卖出价：1.91新元。买卖差价：5%。应付的死亡赔偿金是多少？",
                malay: "(Bayaran DB4 - Mock Q98 verbatim) ILP Samantha mempunyai 27,027 unit dan jumlah diinsuranskan ialah S$50,000. Harga tawaran: S$1.91. Spread bida-tawar: 5%. Apakah faedah kematian yang akan dibayar?",
                tamil: "(DB4 செலுத்துதல் - சொல் மாறாத மாக் Q98) சமந்தாவின் ILP 27,027 யூனிட்களைக் கொண்டுள்ளது மற்றும் காப்பீட்டுத் தொகை S$50,000 ஆகும். சலுகை விலை: S$1.91. ஏல-சலுகை பரவல்: 5%. செலுத்த வேண்டிய மரணப் பலன் என்னவாக இருக்கும்?"
            },
            options: [
                { text: { english: "S$49,019", chinese: "49,019新元", malay: "S$49,019", tamil: "S$49,019" }, isCorrect: false },
                { text: { english: "S$50,000", chinese: "50,000新元", malay: "S$50,000", tamil: "S$50,000" }, isCorrect: true },
                { text: { english: "S$51,621.57", chinese: "51,621.57新元", malay: "S$51,621.57", tamil: "S$51,621.57" }, isCorrect: false },
                { text: { english: "S$52,500", chinese: "52,500新元", malay: "S$52,500", tamil: "S$52,500" }, isCorrect: false }
            ],
            explanation: { 
                english: "Step 1: BP = S$1.91 * 0.95 = S$1.8145. Step 2: Unit Value = 27,027 * S$1.8145 ≈ S$49,019. Step 3: DB4 = Max(S$49,019, S$50,000). Correct: The Sum Assured acts as the guaranteed minimum floor, as the unit value is currently lower.",
                chinese: "步骤1：买入价 = 1.91新元 * 0.95 = 1.8145新元。步骤2：单位价值 = 27,027 * 1.8145新元 ≈ 49,019新元。步骤3：DB4 = Max(49,019新元, 50,000新元)。正确：由于单位价值目前较低，保额作为保证的最低底线。",
                malay: "Langkah 1: BP = S$1.91 * 0.95 = S$1.8145. Langkah 2: Nilai Unit = 27,027 * S$1.8145 ≈ S$49,019. Langkah 3: DB4 = Maks(S$49,019, S$50,000). Betul: Jumlah Diinsuranskan bertindak sebagai lantai minimum yang dijamin, kerana nilai unit pada masa ini lebih rendah.",
                tamil: "படி 1: BP = S$1.91 * 0.95 = S$1.8145. படி 2: யூனிட் மதிப்பு = 27,027 * S$1.8145 ≈ S$49,019. படி 3: DB4 = அதிகபட்சம்(S$49,019, S$50,000). சரி: காப்பீட்டுத் தொகை உத்தரவாதமான குறைந்தபட்ச தளமாக செயல்படுகிறது, ஏனெனில் யூனிட் மதிப்பு தற்போது குறைவாக உள்ளது."
            },
            difficulty: 9,
            topic: "ILP Calculations"
        },
        {
            id: 762,
            questionText: { 
                english: "(Net Unit Change - Verbatim Mock Q96) Annual premium: S$1,000. Offer price: S$2.11. BOS: 5%. Allocation rate: 80%. Charges: S$63. By how many units will the total units increase?",
                chinese: "（净单位变更 - 模拟题Q96逐字记录）年保费：1,000新元。卖出价：2.11新元。买卖差价：5%。分配率：80%。费用：63新元。总单位将增加多少单位？",
                malay: "(Perubahan Unit Bersih - Mock Q96 verbatim) Premium tahunan: S$1,000. Harga tawaran: S$2.11. BOS: 5%. Kadar peruntukan: 80%. Caj: S$63. Berapa banyakkah jumlah unit akan meningkat?",
                tamil: "(நிகர யூனிட் மாற்றம் - சொல் மாறாத மாக் Q96) ஆண்டு பிரீமியம்: S$1,000. சலுகை விலை: S$2.11. BOS: 5%. ஒதுக்கீடு விகிதம்: 80%. கட்டணங்கள்: S$63. மொத்த யூனிட்கள் எத்தனை யூனிட்கள் அதிகரிக்கும்?"
            },
            options: [
                { text: { english: "348 units", chinese: "348个单位", malay: "348 unit", tamil: "348 அலகுகள்" }, isCorrect: true },
                { text: { english: "379 units", chinese: "379个单位", malay: "379 unit", tamil: "379 அலகுகள்" }, isCorrect: false },
                { text: { english: "31 units", chinese: "31个单位", malay: "31 unit", tamil: "31 அலகுகள்" }, isCorrect: false },
                { text: { english: "400 units", chinese: "400个单位", malay: "400 unit", tamil: "400 அலகுகள்" }, isCorrect: false }
            ],
            explanation: { 
                english: "Step 1 (UP): (S$1,000 * 0.80) / S$2.11 ≈ 379.15 units. Step 2 (BP): S$2.11 * 0.95 ≈ S$2.0045. Step 3 (UC): S$63 / S$2.0045 ≈ 31.43 units. Step 4 (Net): 379.15 - 31.43 ≈ 347.72 units. Correct: The calculation requires four steps: UP at OP, then finding BP, calculating UC at BP, and subtracting UC from UP.",
                chinese: "步骤1（购买单位）：(1,000新元 * 0.80) / 2.11新元 ≈ 379.15单位。步骤2（买入价）：2.11新元 * 0.95 ≈ 2.0045新元。步骤3（取消单位）：63新元 / 2.0045新元 ≈ 31.43单位。步骤4（净值）：379.15 - 31.43 ≈ 347.72单位。正确：计算需要四个步骤：在卖出价购买单位，然后找到买入价，在买入价计算取消单位，并从购买单位中减去取消单位。",
                malay: "Langkah 1 (UP): (S$1,000 * 0.80) / S$2.11 ≈ 379.15 unit. Langkah 2 (BP): S$2.11 * 0.95 ≈ S$2.0045. Langkah 3 (UC): S$63 / S$2.0045 ≈ 31.43 unit. Langkah 4 (Bersih): 379.15 - 31.43 ≈ 347.72 unit. Betul: Pengiraan memerlukan empat langkah: UP pada OP, kemudian mencari BP, mengira UC pada BP, dan menolak UC daripada UP.",
                tamil: "படி 1 (UP): (S$1,000 * 0.80) / S$2.11 ≈ 379.15 அலகுகள். படி 2 (BP): S$2.11 * 0.95 ≈ S$2.0045. படி 3 (UC): S$63 / S$2.0045 ≈ 31.43 அலகுகள். படி 4 (நிகரம்): 379.15 - 31.43 ≈ 347.72 அலகுகள். சரி: கணக்கீட்டிற்கு நான்கு படிகள் தேவை: OP இல் UP, பின்னர் BP ஐக் கண்டறிதல், BP இல் UC ஐக் கணக்கிடுதல், மற்றும் UP இலிருந்து UC ஐக் கழித்தல்."
            },
            difficulty: 10,
            topic: "ILP Calculations"
        },
        {
            id: 742,
            questionText: { 
                english: "A policy owner holds a Revocable Nomination. Which action requires the nominee's written consent?",
                chinese: "保单持有人持有可撤销提名。哪个行动需要被提名人的书面同意？",
                malay: "Seorang pemilik polisi memegang Penamaan Boleh Batal. Tindakan manakah yang memerlukan persetujuan bertulis penama?",
                tamil: "ஒரு பாலிசி உரிமையாளர் ரத்துசெய்யக்கூடிய நியமனத்தை வைத்திருக்கிறார். எந்த செயலுக்கு நியமனதாரரின் எழுத்துப்பூர்வ ஒப்புதல் தேவை?"
            },
            options: [
                { text: { english: "Surrendering the policy for cash value.", chinese: "为现金价值退保。", malay: "Menyerahkan polisi untuk nilai tunai.", tamil: "பண மதிப்பிற்காக பாலிசியை ஒப்படைத்தல்." }, isCorrect: false },
                { text: { english: "Taking a policy loan against the accumulated cash value.", chinese: "以累积的现金价值为抵押进行保单贷款。", malay: "Mengambil pinjaman polisi terhadap nilai tunai terkumpul.", tamil: "திரட்டப்பட்ட பண மதிப்பிற்கு எதிராக பாலிசி கடன் வாங்குதல்." }, isCorrect: false },
                { text: { english: "Changing the sum assured of the policy.", chinese: "更改保单的保额。", malay: "Mengubah jumlah diinsuranskan polisi.", tamil: "பாலிசியின் காப்பீட்டுத் தொகையை மாற்றுதல்." }, isCorrect: false },
                { text: { english: "None of the above.", chinese: "以上皆非。", malay: "Tiada satu pun di atas.", tamil: "மேற்கூறிய எதுவும் இல்லை." }, isCorrect: true }
            ],
            explanation: { 
                english: "Correct: The policy owner retains full control over a Revocable Nomination and does not need the nominee's consent for any of these actions. A, B, C: Consent is required only under a Trust Nomination.",
                chinese: "正确：保单持有人对可撤销提名保留完全控制权，并且不需要被提名人对这些行动中的任何一项表示同意。A、B、C：只有在信托提名下才需要同意。",
                malay: "Betul: Pemilik polisi mengekalkan kawalan penuh ke atas Penamaan Boleh Batal dan tidak memerlukan persetujuan penama untuk mana-mana tindakan ini. A, B, C: Persetujuan hanya diperlukan di bawah Penamaan Amanah.",
                tamil: "சரி: பாலிசி உரிமையாளர் ரத்துசெய்யக்கூடிய நியமனத்தின் மீது முழுமையான கட்டுப்பாட்டை வைத்திருக்கிறார், மேலும் இந்த செயல்களில் எதற்கும் நியமனதாரரின் ஒப்புதல் தேவையில்லை. A, B, C: ஒரு அறக்கட்டளை நியமனத்தின் கீழ் மட்டுமே ஒப்புதல் தேவை."
            },
            difficulty: 7,
            topic: "Nominations & Trusts"
        },
        {
            id: 602,
            questionText: { 
                english: "Which product is the definitive example of a Yield Enhancement Product and exposes the investor to receiving depreciated shares instead of principal cash at maturity?",
                chinese: "哪种产品是收益增强产品的明确例子，并使投资者在到期时面临收到贬值股票而不是本金现金的风险？",
                malay: "Produk manakah yang merupakan contoh muktamad Produk Peningkatan Hasil dan mendedahkan pelabur untuk menerima saham susut nilai dan bukannya wang tunai prinsipal pada tempoh matang?",
                tamil: "எந்த தயாரிப்பு மகசூல் மேம்படுத்தும் தயாரிப்புக்கு உறுதியான எடுத்துக்காட்டு மற்றும் முதிர்ச்சியின் போது அசல் பணத்திற்குப் பதிலாக மதிப்பிழந்த பங்குகளைப் பெறுவதற்கு முதலீட்டாளரை வெளிப்படுத்துகிறது?"
            },
            options: [
              { text: { english: "Tracker Certificate.", chinese: "追踪凭证。", malay: "Sijil Penjejak.", tamil: "டிராக்கர் சான்றிதழ்." }, isCorrect: false },
              { text: { english: "Discount Certificate.", chinese: "折扣凭证。", malay: "Sijil Diskaun.", tamil: "தள்ளுபடி சான்றிதழ்." }, isCorrect: false },
              { text: { english: "Reverse Convertible Bond.", chinese: "反向可转换债券。", malay: "Bon Boleh Tukar Songsang.", tamil: "தலைகீழ் மாற்றத்தக்க பத்திரம்." }, isCorrect: true },
              { text: { english: "Airbag Certificate.", chinese: "安全气囊凭证。", malay: "Sijil Beg Udara.", tamil: "ஏர்பேக் சான்றிதழ்." }, isCorrect: false }
            ],
            explanation: { 
                english: "The Reverse Convertible Bond is a Yield Enhancement Product. If the underlying asset falls below the kick-in level, the investor is obligated to receive the depreciated shares instead of the principal cash.",
                chinese: "反向可转换债券是一种收益增强产品。如果基础资产跌破触发水平，投资者有义务接收贬值的股票而不是本金现金。",
                malay: "Bon Boleh Tukar Songsang ialah Produk Peningkatan Hasil. Jika aset pendasar jatuh di bawah paras 'kick-in', pelabur diwajibkan menerima saham yang telah susut nilai dan bukannya wang tunai prinsipal.",
                tamil: "தலைகீழ் மாற்றத்தக்க பத்திரம் ஒரு மகசூல் மேம்படுத்தும் தயாரிப்பு ஆகும். அடிப்படைச் சொத்து கிக்-இன் நிலைக்குக் கீழே விழுந்தால், முதலீட்டாளர் அசல் பணத்திற்குப் பதிலாக மதிப்பிழந்த பங்குகளைப் பெறக் கடமைப்பட்டிருக்கிறார்."
            },
            difficulty: 8,
            topic: "Structured Products"
        },
        {
            id: 617,
            questionText: { 
                english: "An investor who buys a stock and sells a call option on that stock is using which strategy?",
                chinese: "购买股票并卖出该股票的看涨期权的投资者正在使用哪种策略？",
                malay: "Seorang pelabur yang membeli saham dan menjual opsyen panggilan ke atas saham itu menggunakan strategi yang mana?",
                tamil: "ஒரு பங்குகளை வாங்கி அந்தப் பங்குகளில் கால் ஆப்ஷனை விற்கும் ஒரு முதலீட்டாளர் எந்த உத்தியைப் பயன்படுத்துகிறார்?"
            },
            options: [
              { text: { english: "Protective Put.", chinese: "保护性看跌期权。", malay: "Put Pelindung.", tamil: "பாதுகாப்பு புட்." }, isCorrect: false },
              { text: { english: "Long Straddle.", chinese: "多头跨式期权。", malay: "Straddle Panjang.", tamil: "நீண்ட ஸ்ட்ராடில்." }, isCorrect: false },
              { text: { english: "Covered Call.", chinese: "备兑看涨期权。", malay: "Panggilan Terlindung.", tamil: "மூடப்பட்ட அழைப்பு." }, isCorrect: true },
              { text: { english: "Naked Put.", chinese: "裸卖看跌期权。", malay: "Put Terdedah.", tamil: "நிர்வாண புட்." }, isCorrect: false }
            ],
            explanation: { 
                english: "This combination of Long Stock + Short Call is the definition of a Covered Call, a strategy used by conservative investors to generate premium income while capping upside profit.",
                chinese: "这种多头股票+空头看涨期权的组合是备兑看涨期权的定义，这是一种保守投资者用来产生权利金收入同时限制上行利润的策略。",
                malay: "Gabungan Saham Panjang + Panggilan Pendek ini adalah definisi Panggilan Terlindung, satu strategi yang digunakan oleh pelabur konservatif untuk menjana pendapatan premium sambil mengehadkan keuntungan menaik.",
                tamil: "லாங் ஸ்டாக் + ஷார்ட் கால் ஆகியவற்றின் இந்த கலவையானது மூடப்பட்ட அழைப்பின் வரையறை ஆகும், இது ஒரு பழமைவாத முதலீட்டாளர்கள் பிரீமியம் வருமானத்தை உருவாக்கும் அதே வேளையில் மேல்நோக்கிய லாபத்தை வரம்பிடுவதற்குப் பயன்படுத்தும் ஒரு உத்தி ஆகும்."
            },
            difficulty: 7,
            topic: "Options"
        },
        {
            id: 620,
            questionText: { 
                english: "A Naked Call Seller is exposed to what type of financial consequence?",
                chinese: "裸卖看涨期权的卖方会面临什么样的财务后果？",
                malay: "Seorang Penjual Panggilan Terdedah terdedah kepada jenis akibat kewangan yang mana?",
                tamil: "நிர்வாண அழைப்பு விற்பனையாளர் எந்த வகையான நிதி விளைவுகளுக்கு ஆளாகிறார்?"
            },
            options: [
              { text: { english: "Unlimited upside potential.", chinese: "无限的上行潜力。", malay: "Potensi kenaikan tanpa had.", tamil: "வரம்பற்ற மேல்நோக்கிய சாத்தியம்." }, isCorrect: false },
              { text: { english: "Limited profit and limited loss.", chinese: "有限的利润和有限的损失。", malay: "Keuntungan terhad dan kerugian terhad.", tamil: "வரையறுக்கப்பட்ட லாபம் மற்றும் வரையறுக்கப்பட்ட இழப்பு." }, isCorrect: false },
              { text: { english: "Limited profit and unlimited loss.", chinese: "有限的利润和无限的损失。", malay: "Keuntungan terhad dan kerugian tanpa had.", tamil: "வரையறுக்கப்பட்ட லாபம் மற்றும் வரம்பற்ற இழப்பு." }, isCorrect: true },
              { text: { english: "Limited loss equal to the premium received.", chinese: "损失有限，等于收到的权利金。", malay: "Kerugian terhad sama dengan premium yang diterima.", tamil: "பெறப்பட்ட பிரீமியத்திற்கு சமமான வரையறுக்கப்பட்ட இழப்பு." }, isCorrect: false }
            ],
            explanation: { 
                english: "The Naked Call Seller's maximum profit is limited to the premium received, but their potential loss is unlimited because the stock price can theoretically rise indefinitely, forcing them to buy at a high price to sell low.",
                chinese: "裸卖看涨期权卖方的最大利润仅限于收到的权利金，但其潜在损失是无限的，因为股价理论上可以无限上涨，迫使他们高价买入低价卖出。",
                malay: "Keuntungan maksimum Penjual Panggilan Terdedah terhad kepada premium yang diterima, tetapi potensi kerugian mereka tidak terhad kerana harga saham secara teorinya boleh meningkat tanpa had, memaksa mereka untuk membeli pada harga tinggi untuk menjual pada harga rendah.",
                tamil: "நிர்வாண அழைப்பு விற்பனையாளரின் அதிகபட்ச லாபம் பெறப்பட்ட பிரீமியத்திற்கு மட்டுப்படுத்தப்பட்டுள்ளது, ஆனால் அவர்களின் சாத்தியமான இழப்பு வரம்பற்றது, ஏனெனில் பங்கு விலை கோட்பாட்டளவில் காலவரையின்றி உயரக்கூடும், இது அவர்களை அதிக விலைக்கு வாங்கவும் குறைந்த விலைக்கு விற்கவும் கட்டாயப்படுத்துகிறது."
            },
            difficulty: 9,
            topic: "Options"
        },
        {
            id: 641,
            questionText: { 
                english: "Margin Call: A futures account has an Initial Margin (IM) of S$5,000 and a Maintenance Margin (MM) of S$4,000. If the account balance falls to S$3,500, what is the amount of the margin call (Variation Margin)?",
                chinese: "追加保证金通知：一个期货账户的初始保证金（IM）为5,000新元，维持保证金（MM）为4,000新元。如果账户余额降至3,500新元，追加保证金（变动保证金）的金额是多少？",
                malay: "Panggilan Margin: Akaun niaga hadapan mempunyai Margin Permulaan (IM) sebanyak S$5,000 dan Margin Penyelenggaraan (MM) sebanyak S$4,000. Jika baki akaun jatuh kepada S$3,500, berapakah jumlah panggilan margin (Margin Variasi)?",
                tamil: "மார்ஜின் அழைப்பு: ஒரு ஃபியூச்சர்ஸ் கணக்கில் ஆரம்ப மார்ஜின் (IM) S$5,000 மற்றும் பராமரிப்பு மார்ஜின் (MM) S$4,000 உள்ளது. கணக்கு இருப்பு S$3,500 ஆகக் குறைந்தால், மார்ஜின் அழைப்பின் (மாறுபாடு மார்ஜின்) தொகை என்ன?"
            },
            options: [
              { text: { english: "S$500.", chinese: "500新元。", malay: "S$500.", tamil: "S$500." }, isCorrect: false },
              { text: { english: "S$1,000.", chinese: "1,000新元。", malay: "S$1,000.", tamil: "S$1,000." }, isCorrect: false },
              { text: { english: "S$1,500.", chinese: "1,500新元。", malay: "S$1,500.", tamil: "S$1,500." }, isCorrect: true },
              { text: { english: "S$4,000.", chinese: "4,000新元。", malay: "S$4,000.", tamil: "S$4,000." }, isCorrect: false }
            ],
            explanation: { 
                english: "Margin Call = IM - Current Balance = S$5,000 - S$3,500 = S$1,500. (The margin call must restore the account to the Initial Margin of S$5,000).",
                chinese: "追加保证金 = 初始保证金 - 当前余额 = 5,000新元 - 3,500新元 = 1,500新元。（追加保证金必须将账户恢复到5,000新元的初始保证金）。",
                malay: "Panggilan Margin = IM - Baki Semasa = S$5,000 - S$3,500 = S$1,500. (Panggilan margin mesti memulihkan akaun kepada Margin Permulaan sebanyak S$5,000).",
                tamil: "மார்ஜின் அழைப்பு = IM - தற்போதைய இருப்பு = S$5,000 - S$3,500 = S$1,500. (மார்ஜின் அழைப்பு கணக்கை S$5,000 ஆரம்ப மார்ஜினுக்கு மீட்டெடுக்க வேண்டும்)."
            },
            difficulty: 8,
            topic: "Futures"
        },
        {
            id: 645,
            questionText: { 
                english: "Hedge Ratio: A portfolio worth S$12,000,000 has a Beta (β) of 1.10. One futures contract covers S$20,000. How many contracts must the manager sell to fully hedge the systematic risk? (Round up).",
                chinese: "对冲比率：一个价值12,000,000新元的投资组合的贝塔系数（β）为1.10。一份期货合约涵盖20,000新元。经理必须卖出多少份合约才能完全对冲系统性风险？（四舍五入）。",
                malay: "Nisbah Lindung Nilai: Sebuah portfolio bernilai S$12,000,000 mempunyai Beta (β) 1.10. Satu kontrak niaga hadapan meliputi S$20,000. Berapa banyakkah kontrak yang perlu dijual oleh pengurus untuk melindungi nilai sepenuhnya risiko sistematik? (Bundarkan).",
                tamil: "ஹெட்ஜ் விகிதம்: S$12,000,000 மதிப்புள்ள ஒரு போர்ட்ஃபோலியோவில் 1.10 பீட்டா (β) உள்ளது. ஒரு ஃபியூச்சர்ஸ் ஒப்பந்தம் S$20,000 ஐ உள்ளடக்கியது. முறையான அபாயத்தை முழுமையாகத் தடுக்க மேலாளர் எத்தனை ஒப்பந்தங்களை விற்க வேண்டும்? (முழுமையாக்கவும்)."
            },
            options: [
              { text: { english: "550 contracts.", chinese: "550份合约。", malay: "550 kontrak.", tamil: "550 ஒப்பந்தங்கள்." }, isCorrect: false },
              { text: { english: "600 contracts.", chinese: "600份合约。", malay: "600 kontrak.", tamil: "600 ஒப்பந்தங்கள்." }, isCorrect: false },
              { text: { english: "660 contracts.", chinese: "660份合约。", malay: "660 kontrak.", tamil: "660 ஒப்பந்தங்கள்." }, isCorrect: true },
              { text: { english: "720 contracts.", chinese: "720份合约。", malay: "720 kontrak.", tamil: "720 ஒப்பந்தங்கள்." }, isCorrect: false }
            ],
            explanation: { 
                english: "Hedge Contracts = (Portfolio Value / Contract Value) x β. (12,000,000 / 20,000) x 1.10 = 600 x 1.10 = 660 contracts.",
                chinese: "对冲合约 = (投资组合价值 / 合约价值) x β。(12,000,000 / 20,000) x 1.10 = 600 x 1.10 = 660份合约。",
                malay: "Kontrak Lindung Nilai = (Nilai Portfolio / Nilai Kontrak) x β. (12,000,000 / 20,000) x 1.10 = 600 x 1.10 = 660 kontrak.",
                tamil: "ஹெட்ஜ் ஒப்பந்தங்கள் = (போர்ட்ஃபோலியோ மதிப்பு / ஒப்பந்த மதிப்பு) x β. (12,000,000 / 20,000) x 1.10 = 600 x 1.10 = 660 ஒப்பந்தங்கள்."
            },
            difficulty: 9,
            topic: "Futures"
        }
    ],
    questionsEasy: [
      {
          id: 79701,
          questionText: { english: "What is the main feature of a 'Pure Life Annuity'?" },
          options: [
              { text: { english: "It pays out for a fixed number of years only." }, isCorrect: false },
              { text: { english: "It stops paying when the person dies, with no money left for family." }, isCorrect: true },
              { text: { english: "It pays for your hospital bills." }, isCorrect: false },
              { text: { english: "It pays your family a lump sum when you die." }, isCorrect: false }
          ],
          explanation: { english: "A Pure Life Annuity provides income for the annuitant's life only. Payments cease upon death with no residual value for beneficiaries, which is why it offers the highest payout." },
          difficulty: 3,
          topic: "Annuities"
      },
      {
          id: 61301,
          questionText: { english: "When a fund manager borrows money to invest more than the fund's actual cash, this is called:" },
          options: [
              { text: { english: "Diversification" }, isCorrect: false },
              { text: { english: "Leverage or Gearing" }, isCorrect: true },
              { text: { english: "Hedging" }, isCorrect: false },
              { text: { english: "Allocating" }, isCorrect: false }
          ],
          explanation: { english: "Leverage (or Gearing) is the strategy of using borrowed money to increase potential returns. It amplifies both gains and losses." },
          difficulty: 3,
          topic: "Derivatives"
      },
      {
          id: 101,
          questionText: { english: "Why can a financial representative usually only work for one company at a time?" },
          options: [
              { text: { english: "To make sure the company can properly supervise them." }, isCorrect: true },
              { text: { english: "To limit the number of products they can sell." }, isCorrect: false },
              { text: { english: "To make it harder for clients to complain." }, isCorrect: false },
              { text: { english: "To reduce the amount of paperwork they have to do." }, isCorrect: false }
          ],
          explanation: { english: "The 'one principal' rule ensures clear accountability and allows the financial advisory firm to effectively monitor and supervise its representatives' conduct." },
          difficulty: 2,
          topic: "FAA & FAR"
      }
    ],
    questionsHard: [
        {
            id: 79702,
            questionText: { english: "A 68-year-old retiree with no dependents wants to maximize her monthly income from a S$500,000 lump sum. She accepts that the insurer will keep any remaining capital upon her death. Which annuity structure aligns with this risk-return objective?" },
            options: [
                { text: { english: "Life Annuity With a 10-Year Period Certain" }, isCorrect: false },
                { text: { english: "Life Income With Full Refund Annuity" }, isCorrect: false },
                { text: { english: "Pure Life Annuity" }, isCorrect: true },
                { text: { english: "Joint and Last Survivor Annuity" }, isCorrect: false }
            ],
            explanation: { english: "To maximize payout, the annuitant must accept the highest risk. A Pure Life Annuity transfers all capital to the insurer in exchange for the highest possible lifetime income, as there is no need to fund a refund or survivor benefit." },
            difficulty: 8,
            topic: "Annuities"
        },
        {
            id: 61302,
            questionText: { english: "A hedge fund manager uses OTC derivatives to take on S$150 million of market exposure with only S$50 million of investor capital. If the underlying assets fall by 20%, what is the percentage loss on the actual investor capital, ignoring fees?" },
            options: [
                { text: { english: "20%" }, isCorrect: false },
                { text: { english: "30%" }, isCorrect: false },
                { text: { english: "40%" }, isCorrect: false },
                { text: { english: "60%" }, isCorrect: true }
            ],
            explanation: { english: "The fund has a leverage ratio of 3:1 (150M/50M). A 20% loss on the S$150M exposure equals a S$30M loss. As a percentage of the actual capital (S$50M), this is a 60% loss (30M/50M)." },
            difficulty: 9,
            topic: "Derivatives"
        },
        {
            id: 102,
            questionText: { english: "A financial adviser's licence application may be rejected under the 'fit and proper' criteria if a substantial shareholder of the firm was previously convicted of an offence involving fraud. This falls under which pillar of the test?" },
            options: [
                { text: { english: "Competence and Capability" }, isCorrect: false },
                { text: { english: "Honesty, Integrity, and Reputation" }, isCorrect: true },
                { text: { english: "Financial Soundness" }, isCorrect: false },
                { text: { english: "Business Model Viability" }, isCorrect: false }
            ],
            explanation: { english: "A criminal conviction for an offense involving fraud or dishonesty directly impacts the assessment of an individual's or entity's honesty, integrity, and reputation, which is a core pillar of the Fit and Proper test." },
            difficulty: 7,
            topic: "Licensing"
        }
    ]
  };

