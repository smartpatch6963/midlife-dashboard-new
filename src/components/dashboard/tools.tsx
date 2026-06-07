"use client";

import { useEffect, useState } from "react";
import { faqItems } from "@/lib/data";

/* ---------------------------------------------------------------
   Checklist persistence — mirrors the original localStorage logic
   ("midlife-screen" / "midlife-action"), storing an array of booleans.
   --------------------------------------------------------------- */
function useChecklist(kind: string, count: number) {
  const [checks, setChecks] = useState<boolean[]>(() =>
    Array(count).fill(false),
  );
  const [hydrated, setHydrated] = useState(false);
  const [hadStored, setHadStored] = useState(false);

  useEffect(() => {
    const raw = localStorage.getItem(`midlife-${kind}`);
    if (raw) {
      try {
        const values = JSON.parse(raw) as boolean[];
        setChecks(Array.from({ length: count }, (_, i) => !!values[i]));
        setHadStored(true);
      } catch {
        /* ignore malformed storage */
      }
    }
    setHydrated(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggle = (index: number) => {
    setChecks((prev) => {
      const next = prev.slice();
      next[index] = !next[index];
      localStorage.setItem(`midlife-${kind}`, JSON.stringify(next));
      return next;
    });
    setHadStored(true);
  };

  return { checks, toggle, hydrated, hadStored };
}

function Checklist({
  kind,
  items,
}: {
  kind: string;
  items: string[];
}) {
  const { checks, toggle } = useChecklist(kind, items.length);
  return (
    <div className="checklist">
      {items.map((text, i) => (
        <label className="check-row" key={text}>
          <input
            type="checkbox"
            checked={checks[i] ?? false}
            onChange={() => toggle(i)}
          />
          <span>{text}</span>
        </label>
      ))}
    </div>
  );
}

/* --------------------------- Risk tool --------------------------- */
const trackItems = [
  "Waist size monthly",
  "Blood pressure",
  "HbA1c or fasting glucose",
  "Lipid profile",
  "Fatty liver risk",
  "Sleep quality and snoring",
  "Strength and walking capacity",
];

export function RiskTool() {
  const [waist, setWaist] = useState(88);
  const [height, setHeight] = useState(160);
  const [weight, setWeight] = useState(78);
  const [age, setAge] = useState(48);

  const valid = waist > 0 && height > 0 && weight > 0;
  const whtr = valid ? waist / height : 0;
  const bmi = valid ? weight / Math.pow(height / 100, 2) : 0;
  const waistFlag = waist >= 80;
  const whtrFlag = whtr >= 0.5;
  const bmiFlag = bmi >= 23;
  const flags = [waistFlag, whtrFlag, bmiFlag].filter(Boolean).length;
  const level =
    flags >= 2
      ? "Higher metabolic-risk pattern"
      : flags === 1
        ? "Early risk signal"
        : "Lower risk pattern";

  return (
    <div className="tool-grid" style={{ marginTop: 14 }}>
      <div className="tool-card">
        <h3>Waist and BMI Risk Check</h3>
        <div className="fields">
          <label>
            Waist cm
            <input
              type="number"
              min={40}
              max={180}
              value={waist}
              onChange={(e) => setWaist(Number(e.target.value))}
            />
          </label>
          <label>
            Height cm
            <input
              type="number"
              min={120}
              max={220}
              value={height}
              onChange={(e) => setHeight(Number(e.target.value))}
            />
          </label>
          <label>
            Weight kg
            <input
              type="number"
              min={30}
              max={250}
              value={weight}
              onChange={(e) => setWeight(Number(e.target.value))}
            />
          </label>
          <label>
            Age
            <input
              type="number"
              min={18}
              max={90}
              value={age}
              onChange={(e) => setAge(Number(e.target.value))}
            />
          </label>
        </div>
        <div className="result" id="riskResult">
          {valid && (
            <>
              <strong>{level}</strong>
              <br />
              Waist-to-height ratio: {whtr.toFixed(2)}. BMI: {bmi.toFixed(1)}{" "}
              kg/m2.{" "}
              {waistFlag &&
                "Waist is above the commonly used Asian female risk marker of 80 cm. "}
              {whtrFlag && "Waist is at least half of height. "}
              {bmiFlag && "BMI is in the Asian-risk range. "}
              Use this for discussion, not self-diagnosis.
            </>
          )}
        </div>
      </div>
      <div className="tool-card">
        <h3>What to Track</h3>
        <div className="checklist">
          {trackItems.map((t) => (
            <label className="check-row" key={t}>
              <input type="checkbox" />
              <span>{t}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ------------------------- Screening tool ------------------------- */
const screenItems = [
  "Waist circumference recorded",
  "BMI calculated with Asian-risk context",
  "Blood pressure checked",
  "HbA1c or fasting glucose ordered",
  "Fasting insulin / HOMA-IR considered when insulin resistance is suspected",
  "Fasting lipid profile ordered",
  "Liver enzymes and fatty liver risk reviewed",
  "Sleep apnea symptoms asked",
  "Menopause symptoms documented",
  "Medication list reviewed for weight-promoting drugs",
];

export function ScreenTool() {
  const { checks, toggle, hadStored } = useChecklist("screen", screenItems.length);
  const done = checks.filter(Boolean).length;
  return (
    <div className="tool-card" style={{ marginTop: 14 }}>
      <h3>Metabolic Screening Checklist</h3>
      <div className="checklist" id="screenChecklist">
        {screenItems.map((t, i) => (
          <label className="check-row" key={t}>
            <input
              type="checkbox"
              data-save="screen"
              checked={checks[i] ?? false}
              onChange={() => toggle(i)}
            />
            <span>{t}</span>
          </label>
        ))}
      </div>
      <div className="result" id="screenResult">
        {hadStored
          ? `${done} of ${checks.length} screening steps completed.`
          : "Tick items as completed. The dashboard saves checklist progress in this browser."}
      </div>
    </div>
  );
}

/* ------------------------- Pathway tool ------------------------- */
const pathwaySteps: [string, string][] = [
  [
    "Recognize the phenotype",
    "Rising waist, metabolic risk, symptoms and body-composition changes.",
  ],
  [
    "Measure and screen",
    "Waist, BP, HbA1c, lipids, liver risk, sleep and menopause symptoms.",
  ],
  [
    "Start the foundation",
    "Protein-centered nutrition, walking, resistance training, sleep repair.",
  ],
  [
    "Personalize medical care",
    "MHT, anti-obesity medication or diabetes/liver/sleep referrals when indicated.",
  ],
  [
    "Escalate thoughtfully",
    "Bariatric/metabolic surgery for eligible patients through a specialist team.",
  ],
];

export function PathwayTool() {
  return (
    <div className="tool-card" style={{ marginTop: 14 }}>
      <h3>Treatment Pathway</h3>
      <div className="pathway">
        {pathwaySteps.map(([title, desc]) => (
          <div className="step" key={title}>
            <div>
              <strong>{title}</strong>
              <span>{desc}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------- Action tool ------------------------- */
const actionItems = [
  "Measure waist once a month",
  "Book metabolic screening",
  "Add protein to first meal",
  "Start 2 strength sessions per week",
  "Keep sugary drinks out of routine",
  "Discuss menopause symptoms",
  "Review medicines with doctor",
];

export function ActionTool() {
  return (
    <>
      <div className="tool-grid" style={{ marginTop: 14 }}>
        <div className="tool-card">
          <h3>My Visit Notes</h3>
          <div className="fields">
            <label>
              Waist cm
              <input type="text" placeholder="e.g. 88" />
            </label>
            <label>
              Recent HbA1c
              <input type="text" placeholder="e.g. 6.1" />
            </label>
            <label>
              Sleep issue
              <input type="text" placeholder="snoring, hot flashes..." />
            </label>
            <label>
              Main goal
              <input type="text" placeholder="waist, sugar, strength..." />
            </label>
          </div>
          <div className="result">
            These fields are for printing or discussing with your clinician.
            They are not transmitted anywhere.
          </div>
        </div>
        <div className="tool-card">
          <h3>Next 30 Days</h3>
          <Checklist kind="action" items={actionItems} />
        </div>
      </div>
      <div className="module" style={{ marginTop: 14 }}>
        <h3>References for Clinical Accuracy</h3>
        <ul className="source-list">
          <li>
            NIDDK: Health risks of overweight and obesity; insulin resistance
            and prediabetes.
          </li>
          <li>
            The Menopause Society / NAMS 2022 hormone therapy position
            statement.
          </li>
          <li>Endocrine Society: pharmacological management of obesity.</li>
          <li>ASMBS/IFSO 2022 metabolic and bariatric surgery indications.</li>
        </ul>
      </div>
    </>
  );
}

/* ----------------------------- FAQs ----------------------------- */
export function Faqs() {
  return (
    <div className="faq">
      {faqItems.map(([q, a]) => (
        <details key={q}>
          <summary>{q}</summary>
          <p>{a}</p>
        </details>
      ))}
    </div>
  );
}
