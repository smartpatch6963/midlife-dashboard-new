"use client";

import Image from "next/image";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import type { Slide } from "@/lib/types";

interface SlideDialogProps {
  open: boolean;
  slide: Slide;
  onOpenChange: (open: boolean) => void;
}

export function SlideDialog({ open, slide, onOpenChange }: SlideDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={false}
        className="w-full max-w-[min(96vw,1200px)] gap-0 overflow-hidden rounded-lg border-0 bg-white p-0 shadow-[0_30px_90px_rgba(0,0,0,0.35)] ring-0 sm:max-w-[min(96vw,1200px)]"
      >
        <div className="dialog-head">
          <DialogTitle render={<strong />} id="dialogTitle">
            Slide {slide.id}: {slide.title}
          </DialogTitle>
          <DialogClose aria-label="Close slide">X</DialogClose>
        </div>
        <div className="dialog-body">
          <Image
            id="dialogImage"
            src={slide.img}
            alt="Expanded slide"
            width={1200}
            height={675}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
