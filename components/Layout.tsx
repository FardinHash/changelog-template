import Link from "next/link";
import Head from "next/head";
import {
  FiArrowLeft,
  FiCalendar,
  FiUsers,
  FiExternalLink,
} from "react-icons/fi";
import { RiSparklingFill } from "react-icons/ri";

interface Meta {
  version: string;
  title: string;
  date: string;
  status: string;
  contributors: string[];
}

interface LayoutProps {
  meta: Meta;
  children: React.ReactNode;
}

export default function Layout({ meta, children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>
          {meta.version} - {meta.title} - AI Platform
        </title>
        <meta
          name="description"
          content={`AI Platform ${meta.version}: ${meta.title} - Advanced AI/ML release notes`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen bg-gray-950">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12 max-w-4xl">
          <nav className="mb-8 sm:mb-12">
            <Link
              href="/"
              className="inline-flex items-center text-gray-400 hover:text-white transition-all duration-200 group text-sm sm:text-base"
            >
              <FiArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Changelog
            </Link>
          </nav>

          <div className="mb-8 sm:mb-12">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                  <span className="inline-flex items-center justify-center bg-white/10 text-white px-4 py-2 rounded-xl text-sm font-medium backdrop-blur-sm border border-white/20">
                    {meta.version}
                  </span>
                  {meta.status === "Live" && (
                    <div className="inline-flex items-center gap-1.5 bg-emerald-500/20 text-emerald-400 px-3 py-1.5 rounded-xl text-xs font-medium border border-emerald-500/30">
                      <RiSparklingFill className="w-3 h-3" />
                      <span>Live</span>
                    </div>
                  )}
                </div>
                <div className="flex items-center text-gray-400 text-sm">
                  <FiCalendar className="w-4 h-4 mr-2" />
                  <span>{meta.date}</span>
                </div>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
                {meta.title}
              </h1>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <FiUsers className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  <div className="flex flex-wrap gap-2">
                    {meta.contributors.map((contributor) => (
                      <span
                        key={contributor}
                        className="bg-white/10 text-gray-300 px-3 py-1 rounded-lg text-xs border border-white/20"
                      >
                        {contributor}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Optional external link - customize or remove as needed */}
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-all duration-200 text-sm border border-white/20 hover:border-white/30"
                >
                  <FiExternalLink className="w-4 h-4 mr-2" />
                  API Docs
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 sm:p-8">
            <div className="prose prose-lg max-w-none prose-invert">
              {children}
            </div>
          </div>

          <footer className="text-center mt-12 pt-8 border-t border-white/10">
            <p className="text-gray-400 text-sm">
              AI Platform - Advancing AI/ML Research
            </p>
          </footer>
        </div>
      </div>
    </>
  );
}
