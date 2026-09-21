import { useEffect, useRef, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./components/ui/button";
import { Link } from "lucide-react";
import { useTheme } from "./components/theme-provider";
import { Menu } from "lucide-react";
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
        Elias Sørensen
      </a>

      <div className="flex items-center gap-2">
        <HamburgerDropdown/>
        {/* <a href="/" className="rounded-full px-4 py-2 text-sm text-muted-foreground transition hover:bg-accent hover:text-accent-foreground">
          Home
        </a> */}
      </div>
    </nav>
  );
}


function HamburgerDropdown() {
  const { setTheme } = useTheme();


  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger>
        <Button
          variant="outline"
          size="icon"
          className="fixed right-4 top-4 z-50 rounded-none rounded-2xl"
        >
          <Menu />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="rounded-none">
        <DropdownMenuGroup>
          <DropdownMenuLabel>My Socials</DropdownMenuLabel>

          <DropdownMenuItem>
          <a href="https://github.com/elias-kodehode" target="_blank"rel="noopener noreferrer">
          Github</a>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <a href="">LinkedIn</a>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuLabel>Theme</DropdownMenuLabel>

          <DropdownMenuItem onClick={() => setTheme("light")}>
            Light
          </DropdownMenuItem>

          <DropdownMenuItem onClick={() => setTheme("dark")}>
            Dark
          </DropdownMenuItem>

          <DropdownMenuItem onClick={() => setTheme("system")}>
            System
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}