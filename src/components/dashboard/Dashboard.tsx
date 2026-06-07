"use client";

import { useEffect, useState } from "react";
import { sections, sectionSlides, slides } from "@/lib/data";
import type { SectionId } from "@/lib/types";
import { SectionView } from "./SectionView";
import { Sidebar } from "./Sidebar";
import { SlideDialog } from "./SlideDialog";
import { SlidePanel } from "./SlidePanel";
import { Topbar } from "./Topbar";

export function Dashboard() {
  const [currentSection, setCurrentSection] = useState<SectionId>("overview");
  const [currentSlide, setCurrentSlide] = useState(1);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  // Mirror the original behaviour of toggling `menu-open` on <body>.
  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  const section = sections[currentSection];
  const thumbs = sectionSlides(currentSection);
  const current = slides.find((s) => s.id === currentSlide) ?? slides[0];

  const showSection = (id: SectionId) => {
    setCurrentSection(id);
    const first = sectionSlides(id)[0];
    if (first) setCurrentSlide(first.id);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const moveSlide = (direction: number) => {
    const scoped = sectionSlides(currentSection);
    const fallback = scoped.length ? scoped : sectionSlides("overview");
    const index = fallback.findIndex((item) => item.id === currentSlide);
    const nextIndex =
      index === -1
        ? 0
        : (index + direction + fallback.length) % fallback.length;
    setCurrentSlide(fallback[nextIndex].id);
  };

  return (
    <div className="app">
      <Sidebar currentSection={currentSection} onSelect={showSection} />

      <div className="content">
        <Topbar onToggleMenu={() => setMenuOpen((v) => !v)} />

        <main className="main">
          <div className="dashboard">
            <div>
              <SectionView
                key={currentSection}
                id={currentSection}
                section={section}
              />
            </div>

            <SlidePanel
              current={current}
              thumbs={thumbs}
              onSetSlide={setCurrentSlide}
              onPrev={() => moveSlide(-1)}
              onNext={() => moveSlide(1)}
              onZoom={() => setDialogOpen(true)}
            />
          </div>
        </main>
      </div>

      <SlideDialog
        open={dialogOpen}
        slide={current}
        onOpenChange={setDialogOpen}
      />
    </div>
  );
}
