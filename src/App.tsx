import { DragScroll } from "./components/DragScroll";
import MainLayout from "./MainLayout";

export default function App() {
  return (
    <MainLayout>
      <div className="relative isolate overflow-hidden">
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-8 sm:py-24">
      <div className="relative">
        <Shadow direction="right" />

        <DragScroll>
          <div className="flex gap-4 py-4 sm:gap-6">
            <div className="w-[85%] shrink-0 sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)]">
              <Card icon="*" title="C#/.NET" description="-" />
            </div>

            <div className="w-[85%] shrink-0 sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)]">
              <Card icon="*" title="JS/TS" description="React" />
            </div>

            <div className="w-[85%] shrink-0 sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)]">
              <Card icon="*" title="Docker" description="-" />
            </div>

            <div className="w-[85%] shrink-0 sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)]">
              <Card icon="*" title="Aspire" description="-" />
            </div>
          </div>
        </DragScroll>

        <Shadow direction="left" />
      </div>
      </section>
        {/* Footer */}
        <footer className="border-t">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <span>Elias Sørensen.</span>
            <span>Portfolio</span>
          </div>
        </footer>
      </div>
    </MainLayout>
  );
}


type Direction = "left" | "right";

function Shadow({ direction }: { direction: Direction }) {
  const isLeft = direction === "left";

  return (
    <div
      className={`pointer-events-none absolute inset-y-0 z-10 w-8 sm:w-12 ${
        isLeft ? "left-0 bg-linear-to-r" : "right-0 bg-linear-to-l"
      } from-background to-transparent`}
    />
  );
}

function Card({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    /* hover:-translate-y-1*/
    <div className="group rounded-2xl border bg-card p-6 shadow-sm transition duration-300  hover:shadow-xl">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-xl text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
        {icon}
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-3 leading-7 text-muted-foreground">{description}</p>
    </div>
  );
}
