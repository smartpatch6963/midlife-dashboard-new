import Image from "next/image";
import type { Slide } from "@/lib/types";
import { icons } from "./icons";

interface SlidePanelProps {
  current: Slide;
  thumbs: Slide[];
  onSetSlide: (id: number) => void;
  onPrev: () => void;
  onNext: () => void;
  onZoom: () => void;
}

export function SlidePanel({
  current,
  thumbs,
  onSetSlide,
  onPrev,
  onNext,
  onZoom,
}: SlidePanelProps) {
  return (
    <aside className="slide-panel" aria-label="Relevant teaching slides">
      <div className="slide-viewer">
        <Image
          id="currentSlide"
          src={current.img}
          alt={`Slide ${current.id}: ${current.title}`}
          width={640}
          height={360}
          onClick={onZoom}
          priority
        />
        <div className="slide-meta">
          <strong id="slideTitle">
            Slide {current.id}: {current.title}
          </strong>
          <span id="slideTopic">{current.topic}</span>
        </div>
        <div className="slide-controls">
          <button className="ghost-btn" id="prevSlide" onClick={onPrev}>
            <span className="icon">{icons.chevronLeft}</span>
            Previous
          </button>
          <button className="ghost-btn" id="nextSlide" onClick={onNext}>
            Next
            <span className="icon">{icons.chevronRight}</span>
          </button>
        </div>
      </div>
      <div className="slide-library">
        <div className="thumbs" id="thumbs">
          {thumbs.map((s) => (
            <button
              key={s.id}
              className={`thumb ${s.id === current.id ? "active" : ""}`}
              data-slide={s.id}
              onClick={() => onSetSlide(s.id)}
            >
              <Image
                src={s.thumb}
                alt={`Slide ${s.id}: ${s.title}`}
                width={200}
                height={112}
                loading="lazy"
              />
              <span>
                {s.id}. {s.title}
              </span>
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}
