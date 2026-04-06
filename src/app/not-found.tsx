import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="py-24 bg-ace-gray flex-1 flex items-center">
      <div className="max-w-lg mx-auto px-4 text-center">
        <div className="text-8xl font-black text-ace-red mb-4">404</div>
        <h1 className="text-3xl font-black text-ace-black mb-4">
          Page Not Found
        </h1>
        <p className="text-ace-gray-dark mb-8">
          The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get
          you back on track.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-ace-red hover:bg-ace-red-dark text-white font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Go Home
            <ArrowRight className="size-5" />
          </Link>
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 bg-ace-black text-white font-bold px-6 py-3 rounded-lg hover:bg-ace-gray-dark transition-colors"
          >
            View Programs
          </Link>
        </div>
      </div>
    </section>
  );
}
