import { X } from "lucide-react";
import { useEffect, useRef } from "react";

type Props = { src: string | null; alt: string; onClose: () => void };

/** Full-size poster viewer built on the native <dialog> (focus trap and Esc built in). */
export function PosterLightbox({ src, alt, onClose }: Props) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (src && !dialog.open) dialog.showModal();
    if (!src && dialog.open) dialog.close();
  }, [src]);

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => {
        if (e.target === ref.current) onClose();
      }}
      aria-label="Poster preview"
      className="m-auto max-h-[94dvh] w-[min(92vw,460px)] overflow-visible bg-transparent p-0 backdrop:bg-navy/85 backdrop:backdrop-blur-sm"
    >
      {src && (
        <div className="relative">
          <img src={src} alt={alt} className="max-h-[90dvh] w-full rounded-2xl object-contain shadow-lift" />
          <button
            type="button"
            onClick={onClose}
            className="absolute -top-3 -right-3 inline-flex size-11 items-center justify-center rounded-full bg-white text-navy shadow-lift hover:bg-brand-soft"
            aria-label="Close poster preview"
          >
            <X className="size-5" strokeWidth={2} aria-hidden="true" />
          </button>
        </div>
      )}
    </dialog>
  );
}
