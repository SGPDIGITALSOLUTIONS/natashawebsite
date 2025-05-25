import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-purple-900 text-white py-8 px-4 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left text-sm">
          © {new Date().getFullYear()} <Link href="/" className="font-semibold hover:underline">Hudson Virtual</Link>. All rights reserved.
        </div>
        <div className="text-center md:text-right text-xs opacity-80">
          Proudly created by Hudson Virtual
        </div>
      </div>
    </footer>
  );
} 