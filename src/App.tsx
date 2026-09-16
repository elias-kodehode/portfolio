import { DragScroll } from "./components/DragScroll";
import MainLayout from "./MainLayout";

export default function App() {
  return (
    <MainLayout>
      <div className="relative isolate overflow-hidden">
        {/* Background decoration */}
        {/* <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[500px] overflow-hidden"
        >
          <div className="absolute left-1/2 top-[-250px] h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute left-[10%] top-[100px] h-40 w-40 rounded-full bg-purple-500/10 blur-3xl" />
          <div className="absolute right-[10%] top-[150px] h-48 w-48 rounded-full bg-blue-500/10 blur-3xl" />
        </div> */}
        <section className="mx-auto max-w-6xl px-6 py-24 sm:px-8">
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-background to-transparent" />

            <DragScroll>
              <div className="flex gap-6 py-4">
                <div className="w-[calc((100%-3rem)/3)] shrink-0">
                  <Card icon="*" title="C#/.NET" description="-" />
                </div>

                <div className="w-[calc((100%-3rem)/3)] shrink-0">
                  <Card icon="*" title="JS/TS" description="React" />
                </div>

                <div className="w-[calc((100%-3rem)/3)] shrink-0">
                  <Card icon="*" title="Docker" description="-" />
                </div>

                <div className="w-[calc((100%-3rem)/3)] shrink-0">
                  <Card icon="*" title="Aspire" description="-" />
                </div>
              </div>
            </DragScroll>
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-background to-transparent" />
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
