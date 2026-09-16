import { useEffect, useRef, useState } from "react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const mainRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const main = mainRef.current;

    if (!main) return;

    const handleScroll = () => {
      setScrolled(main.scrollTop > 10);
    };

    main.addEventListener("scroll", handleScroll);

    return () => {
      main.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="h-screen flex flex-col">
      <header
        className={[
          "z-50 shrink-0 border-b transition-all duration-300",
          scrolled
            ? "bg-background/80 shadow-lg backdrop-blur-xl"
            : "bg-background",
        ].join(" ")}
      >
        <NavBar scrolled={scrolled} />
      </header>

      <main ref={mainRef} className="flex-1 min-h-0 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}

function NavBar({ scrolled }: { scrolled: boolean }) {
  return (
    <nav
      className={[
        "mx-auto flex max-w-6xl items-center justify-between px-6 transition-all duration-300",
        scrolled ? "py-3" : "py-5",
      ].join(" ")}
    >
      <a href="/" className="font-heading text-xl font-semibold">
        Portfolio
      </a>

      <div className="flex items-center gap-2">
        <a
          href="/"
          className="rounded-full px-4 py-2 text-sm text-muted-foreground transition hover:bg-accent hover:text-accent-foreground"
        >
          Home
        </a>
      </div>
    </nav>
  );
}
