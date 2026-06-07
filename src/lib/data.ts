import type { MenuItem, Section, SectionId, Slide } from "./types";

export const menu: MenuItem[] = [
  { id: "overview", label: "Overview", range: "01-06", icon: "overview" },
  { id: "hormones", label: "Hormones", range: "07-12", icon: "hormones" },
  { id: "risk", label: "Belly Fat & Indian Risk", range: "13-22", icon: "risk" },
  { id: "tests", label: "Tests", range: "32-38", icon: "tests" },
  { id: "treatment", label: "5-Pillar Treatment", range: "39-40", icon: "treatment" },
  { id: "diet", label: "Diet", range: "41-42", icon: "food" },
  { id: "exercise", label: "Exercise", range: "23-26,43", icon: "exercise" },
  { id: "sleep", label: "Sleep & Stress", range: "27-31", icon: "sleep" },
  { id: "medicines", label: "Medicines", range: "44-46", icon: "medicine" },
  { id: "surgery", label: "Surgery", range: "47-48", icon: "surgery" },
  { id: "myths", label: "Myths & FAQs", range: "51,55-56", icon: "myth" },
  { id: "plan", label: "Action Plan", range: "49-53", icon: "plan" },
];

const slideData: [title: string, topic: string, section: string][] = [
  ["Midlife Obesity and the Metabolic Transition in Women", "Blueprint for early detection and integrated care.", "overview"],
  ["One Syndrome, Four Fragmented Treatments", "Why integrated care matters.", "overview"],
  ["What Walks Into the Gynaecology Clinic", "Common symptoms that may hide metabolic transition.", "overview"],
  ["The Misdiagnosis", "Why eat-less-move-more often fails in midlife women.", "overview"],
  ["The Midlife as a Metabolic Stress Test", "The transition reveals vulnerable systems.", "overview"],
  ["The 6 Interlocking Drivers", "Estrogen, muscle, insulin, sleep, stress and appetite.", "overview"],
  ["Estrogen: A Systemic Metabolic Hormone", "Estrogen affects liver, muscle, brain, vessels and adipose tissue.", "hormones"],
  ["The Hormonal Architecture of Menopause", "Changing estrogen and cardiometabolic signaling.", "hormones"],
  ["The Core Driver: Estrogen Attrition", "From gynoid protection to abdominal fat distribution.", "hormones"],
  ["Section 2: Hormonal Architecture", "Estrogen withdrawal in midlife.", "hormones"],
  ["The Phenotype Matrix", "South Asian thin-fat phenotype and TOFI risk.", "hormones"],
  ["Why Visceral Fat Expands", "Adipose biology during estrogen withdrawal.", "hormones"],
  ["The Anatomy of Visceral Adipose Tissue", "Why menopause midline adiposity is high risk.", "risk"],
  ["Visceral Adiposity and the Overflow Model", "Ectopic fat and metabolic overflow.", "risk"],
  ["How Fatty Liver Affects the Body", "MASLD, liver stress and blood fats.", "risk"],
  ["Inflammation: The Quiet Amplifier", "Adipose tissue as a biologically inflamed organ.", "risk"],
  ["Section 4: Hyperinsulinemia", "Diagnostic delay and cardiometabolic risk.", "risk"],
  ["Hyperinsulinemia Precedes Prediabetes by Years", "Compensatory insulin phase before glucose failure.", "risk"],
  ["The Diagnostic Timeline", "Stop waiting for glucose failure.", "risk"],
  ["The Cardiometabolic Inflection Point", "How risk branches into diabetes, liver and CVD.", "risk"],
  ["Menopause Drives Atherogenic Lipid Shift", "LDL, triglycerides, HDL and insulin resistance.", "risk"],
  ["Recognizing Midlife Metabolic Syndrome", "A practical diagnostic cluster.", "risk"],
  ["Section 5: Sarcopenic Obesity", "Weight-neutrality trap and muscle loss.", "exercise"],
  ["Skeletal Muscle: Forgotten Metabolic Sink", "Muscle as a glucose disposal organ.", "exercise"],
  ["The Sarcopenic Obesity Illusion", "Same weight, different body composition.", "exercise"],
  ["Rethinking Treatment", "Preserve muscle over calorie deficit alone.", "exercise"],
  ["Section 6: Sleep, Stress, Cortisol, Appetite", "Biology that drives hunger and weight gain.", "sleep"],
  ["Sleep Disruption and Circadian Misalignment", "Obesity, metabolic syndrome and menopause transition.", "sleep"],
  ["Sleep Management is Weight Management", "Clinical sleep questions and intervention points.", "sleep"],
  ["Cortisol's Role in Fat Redistribution", "Stress physiology and abdominal adiposity.", "sleep"],
  ["The Appetite Axis: Why Willpower Fails", "Leptin, ghrelin and reward pathways.", "sleep"],
  ["Section 7: Screening and Early Detection", "Early detection in the gynaecology clinic.", "tests"],
  ["Paradigm Shift Matrix", "Symptom-based vs system-based care.", "tests"],
  ["Why the Tape Measure is a Vital Sign", "Waist size as a metabolic screening tool.", "tests"],
  ["Upgrading the Gyn Clinic Toolkit", "Waist, risk scores and metabolic checklist.", "tests"],
  ["Mandatory Midlife Metabolic Screening Protocol", "Make screening routine.", "tests"],
  ["The Gynaecologist's Window of Opportunity", "Intervention before overt disease.", "tests"],
  ["The 15-Minute Algorithm", "Recognize, measure, screen, start, escalate.", "tests"],
  ["Section 8: Integrated Treatment Framework", "Multimodal treatment.", "treatment"],
  ["The Multimodal Treatment Framework", "Nutrition, exercise, MHT, pharmacotherapy and surgery.", "treatment"],
  ["The Physiology Prescription", "Target insulin, preserve muscle.", "diet"],
  ["Pillar 1: Precision Nutrition and Protein Pacing", "Protein, vegetables, lower glycemic load.", "diet"],
  ["Pillar 2: Prescriptive Resistance Training", "Power training and muscle retention.", "exercise"],
  ["Pillar 3: Menopausal Hormone Therapy", "MHT role and selection.", "medicines"],
  ["The MHT Window of Opportunity", "Timing and individualized assessment.", "medicines"],
  ["Pillar 4: Advanced Pharmacotherapy", "Medication options and supervision.", "medicines"],
  ["Pillar 5: Bariatric Surgical Indications for Indians", "BMI and comorbidity thresholds.", "surgery"],
  ["Types of Bariatric Surgery", "Sleeve, bypass and other options.", "surgery"],
  ["Medically Supervised Weight Loss Plan", "Assessment, medication, follow-up.", "plan"],
  ["Stage-Specific Treatment Strategies", "Perimenopause, menopause and postmenopause.", "plan"],
  ["Clinical Myth vs Evidence-Based Reality", "Treat the cause, not only the weight.", "myths"],
  ["The Integrative Synthesis Dashboard", "Diagnostic, lifestyle, medical and monitoring tracks.", "plan"],
  ["Integrated Management Strategy", "Nutrition, resistance training, medical therapy and sleep.", "plan"],
  ["Section 9: Final Takeaways", "Closing chapter.", "myths"],
  ["Midlife Health Transition", "Clinical label vs physiological reality.", "myths"],
  ["Practice-Changing Takeaways", "Transition, phenotype and metabolic BMI.", "myths"],
];

export const slides: Slide[] = slideData.map(([title, topic, section], i) => ({
  id: i + 1,
  title,
  topic,
  section,
  img: `/assets/slides/slide-${String(i + 1).padStart(2, "0")}.jpg`,
  thumb: `/assets/thumbs/slide-${String(i + 1).padStart(2, "0")}.jpg`,
}));

export const sections: Record<SectionId, Section> = {
  overview: {
    title: "Overview",
    intro:
      "Midlife obesity is a metabolic transition, not a failure of discipline. The dashboard begins with the full model: fragmented care, hidden clinic presentations and six interacting drivers.",
    patient:
      "If your waist is increasing after 40 despite eating less, your body may be responding to hormonal change, lower muscle, poor sleep, stress, insulin resistance or fatty liver risk. The first step is assessment, not blame.",
    doctor:
      "Frame midlife obesity as a gynaecology-centered cardiometabolic risk state. Screen beyond BMI and fasting glucose: waist, BP, HbA1c, lipids, fatty liver risk, sleep apnea symptoms and sarcopenia signals.",
    cards: [
      ["Clinical reframing", "Move from weight-only advice to metabolic-risk detection."],
      ["Main drivers", "Estrogen withdrawal, visceral fat, hyperinsulinemia, sarcopenia, sleep/stress and appetite biology."],
      ["Care model", "Gyn clinic as the early-detection window before diabetes and cardiovascular disease appear."],
      ["Patient message", "Treat the cause, not just the weight."],
    ],
  },
  hormones: {
    title: "Hormones",
    intro:
      "Estrogen is not only a reproductive hormone. It influences fat distribution, insulin sensitivity, vessels, liver, muscle and appetite pathways.",
    patient:
      "During perimenopause and menopause, fat may shift toward the abdomen. This does not mean you are doing something wrong. It means your treatment plan must protect sleep, muscle and metabolic health.",
    doctor:
      "Assess vasomotor symptoms, sleep disruption, menstrual stage, hysterectomy status, contraindications and timing. MHT may help selected symptoms but is not prescribed as stand-alone obesity therapy.",
    cards: [
      ["Estrogen attrition", "Loss of gynoid protection can expose visceral adiposity."],
      ["Body composition", "Waist and muscle matter as much as body weight."],
      ["MHT role", "Symptom-focused, individualized and risk-screened."],
      ["Counseling point", "Normalize physiology while emphasizing early action."],
    ],
  },
  risk: {
    title: "Belly Fat & Indian Risk",
    intro:
      "South Asian women can develop metabolic disease at lower BMI. Waist size, fatty liver and insulin resistance reveal risk earlier than weight alone.",
    patient:
      "A normal-looking weight can still carry risk if waist size rises. Belly fat around organs is more dangerous than fat under the skin because it links with sugar, blood pressure, cholesterol and fatty liver.",
    doctor:
      "Use ethnic-risk aware thresholds and avoid BMI reassurance when waist, triglycerides, HDL, BP, HbA1c or fatty liver signals are abnormal.",
    cards: [
      ["Waist is a vital sign", "Risk often rises around 80 cm in Asian women."],
      ["Thin-fat phenotype", "Lower BMI can hide visceral and ectopic fat."],
      ["Overflow model", "Adipose spillover affects liver, pancreas and muscle."],
      ["Metabolic syndrome", "Waist, BP, glucose and lipids travel together."],
    ],
    tools: "risk",
  },
  tests: {
    title: "Tests",
    intro:
      "Do not wait for glucose failure. Routine screening in midlife can detect risk years earlier.",
    patient:
      "Ask your doctor whether your waist, blood pressure, HbA1c, lipid profile, liver risk and HOMA-IR need to be checked. Bring your reports to each visit.",
    doctor:
      "Build a repeatable screening protocol into midlife visits. Consider HbA1c, fasting glucose, fasting insulin with HOMA-IR when insulin resistance is suspected, lipid profile, BP, waist, BMI, liver enzymes, ultrasound when indicated, TSH and sleep apnea screening.",
    cards: [
      ["Early markers", "Waist, triglycerides, BP and sleep symptoms may precede diabetes."],
      ["Gyn clinic window", "Women attend for symptoms before metabolic disease is named."],
      ["15-minute algorithm", "Recognize, measure, screen, start, escalate."],
      ["Escalation", "Refer for bariatric, endocrine, sleep or menopause care when needed."],
    ],
    tools: "screen",
  },
  treatment: {
    title: "5-Pillar Treatment",
    intro:
      "Integrated care works better than isolated advice. The treatment framework combines nutrition, resistance training, MHT where appropriate, pharmacotherapy and bariatric surgery when indicated.",
    patient:
      "You do not need every treatment. You need the right combination for your body, symptoms, reports and preferences.",
    doctor:
      "Stratify by stage, phenotype, comorbidities, prior attempts, menopause symptoms and patient readiness. Use shared decision-making and measurable follow-up.",
    cards: [
      ["Pillar 1", "Precision nutrition and protein pacing."],
      ["Pillar 2", "Prescriptive resistance training."],
      ["Pillar 3", "Menopause symptom care and MHT when appropriate."],
      ["Pillar 4", "Supervised pharmacotherapy."],
      ["Pillar 5", "Metabolic and bariatric surgery for eligible patients."],
    ],
    tools: "pathway",
  },
  diet: {
    title: "Diet",
    intro:
      "The goal is not starvation. The goal is lowering metabolic load while preserving muscle.",
    patient:
      "Start with protein at meals, vegetables, fewer sweets and liquid sugars, and smaller refined grain portions. Do not follow extreme diets without medical advice.",
    doctor:
      "Individualize for diabetes, kidney disease, vegetarian patterns, GI tolerance, sarcopenia risk and medication use. Protein adequacy and sustainability matter.",
    cards: [
      ["Protein pacing", "Distribute protein to protect muscle and fullness."],
      ["Lower insulin load", "Reduce sugar, juices and refined starches."],
      ["Meal rhythm", "Avoid grazing if hunger is habit-driven."],
      ["Cultural fit", "Modify Indian meals rather than prescribing impossible menus."],
    ],
  },
  exercise: {
    title: "Exercise",
    intro:
      "Skeletal muscle is a metabolic sink. Weight loss without muscle protection can worsen long-term outcomes.",
    patient:
      "Walking is good, but strength training is essential after 40. Begin with safe, supervised movements if you have knee, back or balance concerns.",
    doctor:
      "Prescribe resistance training with progression. Screen for frailty, sarcopenia, osteoarthritis, falls risk and cardiopulmonary symptoms before escalation.",
    cards: [
      ["Muscle magic", "More muscle improves glucose disposal and function."],
      ["Weight-neutral trap", "Same weight can hide muscle loss and fat gain."],
      ["Training dose", "2-3 resistance sessions weekly plus walking."],
      ["Safety", "Pain, dizziness or chest symptoms require review."],
    ],
  },
  sleep: {
    title: "Sleep & Stress",
    intro:
      "Sleep disruption, cortisol and appetite biology can make weight gain feel like a willpower failure.",
    patient:
      "If you sleep poorly, wake with hot flashes, snore, or feel exhausted, fix sleep first. Hunger and cravings often improve when sleep improves.",
    doctor:
      "Screen for vasomotor symptoms, insomnia, OSA, depression/anxiety, shift work, alcohol and late meals. Treat sleep as metabolic therapy.",
    cards: [
      ["Circadian mismatch", "Late eating and poor sleep worsen metabolic control."],
      ["Cortisol", "Chronic stress favors abdominal fat redistribution."],
      ["Appetite axis", "Leptin, ghrelin and reward pathways alter hunger."],
      ["Clinical synthesis", "Do not reduce hunger to willpower."],
    ],
  },
  medicines: {
    title: "Medicines",
    intro:
      "Medication can be appropriate for selected patients, but must be supervised and paired with lifestyle foundations.",
    patient:
      "Do not buy weight-loss medicines without medical supervision. Ask about benefits, side effects, cost, monitoring and what happens if you stop.",
    doctor:
      "Anti-obesity medications are adjuncts to nutrition, activity and behavior change. Review contraindications, weight-promoting medications, response at follow-up and discontinuation criteria.",
    cards: [
      ["MHT", "For selected menopause symptoms, not stand-alone weight loss."],
      ["GLP-1/GIP era", "Powerful but requires monitoring and muscle protection."],
      ["Metformin/SGLT2", "May fit selected metabolic profiles."],
      ["Follow-up", "Measure response, adverse effects and adherence."],
    ],
  },
  surgery: {
    title: "Surgery",
    intro:
      "Bariatric/metabolic surgery is evidence-based treatment for eligible patients, not a last-resort moral judgment.",
    patient:
      "Surgery may be considered when obesity and metabolic disease are significant. It requires proper evaluation, nutrition support and lifelong follow-up.",
    doctor:
      "Consider Asian BMI thresholds and comorbidities. Discuss sleeve, bypass and other options through a bariatric team with long-term nutritional monitoring.",
    cards: [
      ["Indications", "BMI plus metabolic risk and prior attempts guide eligibility."],
      ["Types", "Sleeve, bypass and revisional procedures differ."],
      ["Benefits", "Weight loss plus diabetes, BP, sleep and liver benefits in selected patients."],
      ["Risks", "Nutritional deficiency, surgical risk and follow-up burden."],
    ],
  },
  myths: {
    title: "Myths & FAQs",
    intro:
      "The deck repeatedly challenges a simple calorie-only model. This section turns those points into counseling answers.",
    patient:
      "The most important myth: midlife obesity is not laziness. It is physiology plus environment plus habits, and it can be treated.",
    doctor:
      "Use myth correction to preserve dignity and improve adherence. Patients act better when the model explains their lived experience.",
    faqs: true,
  },
  plan: {
    title: "Action Plan",
    intro:
      "Convert education into next steps. Use this as a pre-consultation and follow-up checklist.",
    patient:
      "Complete what you can, print the plan, and take it to your appointment.",
    doctor: "Use the plan to structure counseling, investigation and escalation.",
    tools: "action",
  },
};

export const sectionOrder = Object.keys(sections) as SectionId[];

export const sectionSlides = (id: string): Slide[] =>
  slides.filter((s) => s.section === id);

export const faqItems: [string, string][] = [
  [
    "Why do old diets stop working?",
    "Because midlife weight regulation is affected by hormones, muscle, sleep, stress, insulin resistance and appetite biology. Calorie reduction without muscle and sleep protection often fails.",
  ],
  [
    "Is menopause weight gain inevitable?",
    "No. It is common, but waist, muscle, metabolic tests and symptoms can be addressed early.",
  ],
  [
    "Why measure waist?",
    "Waist size is a practical signal of visceral fat and metabolic risk, especially in South Asian women.",
  ],
  [
    "Are medicines shortcuts?",
    "No. In eligible patients they are medical tools, but they require supervision and lifestyle foundations.",
  ],
  [
    "When should surgery be discussed?",
    "When obesity and metabolic disease meet eligibility criteria and previous structured care has not produced durable results.",
  ],
  [
    "What should families do?",
    "Support sleep, walking, strength routines, home food changes and appointments. Avoid shame-based comments.",
  ],
];
