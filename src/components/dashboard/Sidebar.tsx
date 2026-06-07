import Image from "next/image";
import { menu } from "@/lib/data";
import type { SectionId } from "@/lib/types";
import { icons } from "./icons";

interface SidebarProps {
  currentSection: SectionId;
  onSelect: (id: SectionId) => void;
}

export function Sidebar({ currentSection, onSelect }: SidebarProps) {
  return (
    <aside className="sidebar" aria-label="Dashboard menu">
      <div className="brand">
        <Image
          className="brand-logo"
          src="/assets/brand/dr-samir-logo.jpg"
          alt="Dr Samir Contractor logo"
          width={218}
          height={120}
          priority
        />
        <div>
          <strong>Dr Samir Contractor</strong>
          <span>
            Senior Consultant Laparoscopic, Anorectal &amp; Bariatric Surgeon
          </span>
          <span>MS, FRCS(UK), FMAS, FACS(USA)</span>
          <span>PN Certified exercise and Nutrition Coach (Canada)</span>
          <a href="https://www.drsamircontractor.com">
            www.drsamircontractor.com
          </a>
        </div>
      </div>
      <div className="nav-title">Learning Menu</div>
      <nav className="nav" id="nav">
        {menu.map((item) => (
          <button
            key={item.id}
            data-section={item.id}
            className={item.id === currentSection ? "active" : ""}
            onClick={() => onSelect(item.id)}
          >
            <span className="icon">{icons[item.icon]}</span>
            <span>{item.label}</span>
            <small>{item.range}</small>
          </button>
        ))}
      </nav>
      <div className="disclaimer">
        Educational dashboard only. It does not replace diagnosis,
        prescriptions, or individualized medical care.
      </div>
    </aside>
  );
}
