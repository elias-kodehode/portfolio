export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="text-white">
      <header className="bg-accent-foreground">
        <NavBar />
      </header>

      <main className="">{children}</main>
    </div>
  );
}

function NavBar() {
  return (
    <nav className="h-fit flex flex-1 p-4 justify-around [&_a]:p-3 [&_a]:rounded-full [&_a:hover]:bg-primary">
      <a href="/">Home</a>
      <a href="/">Home</a>
    </nav>
  );
}
