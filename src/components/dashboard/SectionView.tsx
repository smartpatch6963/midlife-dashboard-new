import type { Section, SectionId, ToolKind } from "@/lib/types";
import {
  ActionTool,
  Faqs,
  PathwayTool,
  RiskTool,
  ScreenTool,
} from "./tools";

function Tool({ kind }: { kind?: ToolKind }) {
  switch (kind) {
    case "risk":
      return <RiskTool />;
    case "screen":
      return <ScreenTool />;
    case "pathway":
      return <PathwayTool />;
    case "action":
      return <ActionTool />;
    default:
      return null;
  }
}

interface SectionViewProps {
  id: SectionId;
  section: Section;
}

export function SectionView({ id, section }: SectionViewProps) {
  return (
    <section className="section active" id={`section-${id}`}>
      <div className="section-head">
        <div>
          <h2>{section.title}</h2>
          <p>{section.intro}</p>
        </div>
      </div>
      <div className="module-stack">
        <div className="module">
          <h3>Teaching Summary</h3>
          <div className="mode-note">{section.patient}</div>
          {section.cards && (
            <div className="cards">
              {section.cards.map(([title, body]) => (
                <div className="mini-card" key={title}>
                  <strong>{title}</strong>
                  <p>{body}</p>
                </div>
              ))}
            </div>
          )}
          {section.faqs && <Faqs />}
          <Tool kind={section.tools} />
        </div>
      </div>
    </section>
  );
}
