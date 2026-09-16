import { useRef } from "react";

export function DragScroll({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startScrollLeft = useRef(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    const container = containerRef.current;
    if (!container) return;

    isDragging.current = true;
    startX.current = e.pageX - container.offsetLeft;
    startScrollLeft.current = container.scrollLeft;

    container.style.cursor = "grabbing";
    container.style.userSelect = "none";
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const container = containerRef.current;

    if (!container || !isDragging.current) return;

    const x = e.pageX - container.offsetLeft;
    const walk = x - startX.current;

    container.scrollLeft = startScrollLeft.current - walk;
  };

  const stopDragging = () => {
    const container = containerRef.current;

    isDragging.current = false;

    if (container) {
      container.style.cursor = "grab";
      container.style.userSelect = "";
    }
  };

  return (
    <div
      ref={containerRef}
      className="cursor-grab overflow-x-auto scrollbar-hide"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={stopDragging}
      onMouseLeave={stopDragging}
    >
      {children}
    </div>
  );
}
