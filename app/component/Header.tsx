import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full py-4 shadow" style={{ backgroundColor: '#E5D5C0', color: '#3A0D08' }}>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <p className="px-0 text-xl font-bold hover:underline sm:px-2 sm:text-2xl">Debbie</p>
        <nav className="flex gap-3 text-sm sm:gap-8 sm:text-base">
          <Link href="#home" className="hover:underline font-semibold">Home</Link>
          <Link href="#about" className="hover:underline font-semibold">About</Link>
          <Link href="#projects" className="hover:underline font-semibold">Project</Link>
          <Link href="#skills" className="hover:underline font-semibold">Skill</Link>
        </nav>
      </div>
    </header>
  );
}