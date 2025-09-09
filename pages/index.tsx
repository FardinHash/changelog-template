import Link from "next/link";
import Head from "next/head";
import {
  FiCalendar,
  FiUsers,
  FiCode,
  FiArrowRight,
  FiZap,
  FiGithub,
} from "react-icons/fi";
import { RiSparklingFill } from "react-icons/ri";

// Sample releases data
const releases = [
  {
    version: "v2.1",
    title: "Advanced LLM Integration & Optimization",
    date: "December 15, 2025",
    status: "Live",
    description:
      "GPT-4 Turbo integration, context window optimization, and advanced prompt engineering techniques",
    contributors: ["@ai_engineer", "@ml_researcher"],
  },
  {
    version: "v2.0",
    title: "Reinforcement Learning Framework",
    date: "November 28, 2025",
    status: "Released",
    description:
      "Complete RL framework with PPO, DQN algorithms and multi-agent training environments",
    contributors: ["@rl_expert", "@ai_engineer", "@data_scientist"],
  },
  {
    version: "v1.5",
    title: "Agentic AI & Multi-Agent Systems",
    date: "October 20, 2025",
    status: "Released",
    description:
      "Autonomous AI agents with tool usage, memory systems, and collaborative workflows",
    contributors: ["@ai_engineer", "@ml_researcher"],
  },
];

export default function ChangelogIndex() {
  return (
    <>
      <Head>
        <title>AI Platform - Changelog</title>
        <meta
          name="description"
          content="Advanced AI/ML Platform - LLMs, Reinforcement Learning & Agentic AI Updates"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen bg-gray-950">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 max-w-4xl">
          <header className="text-center mb-12 sm:mb-20">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
              AI Platform
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto">
              Advanced AI/ML Platform - LLMs, Reinforcement Learning & Agentic
              AI
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center max-w-md mx-auto">
              <a
                href="#"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-all duration-200 border border-white/20 hover:border-white/30 text-sm font-medium"
              >
                <FiCode className="w-4 h-4 mr-2" />
                API Docs
              </a>
              <a
                href="#"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white rounded-xl transition-all duration-200 border border-white/10 hover:border-white/20 text-sm font-medium"
              >
                <FiZap className="w-4 h-4 mr-2" />
                Models
              </a>
            </div>
          </header>

          <div className="space-y-4 sm:space-y-6">
            {releases.map((release) => (
              <Link
                key={release.version}
                href={`/${release.version.toLowerCase()}`}
                className="block group"
              >
                <article className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-200 p-6 sm:p-8 group-hover:bg-white/10">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                      <span className="inline-flex items-center justify-center bg-white/10 text-white px-4 py-2 rounded-xl text-sm font-medium backdrop-blur-sm border border-white/20 w-fit">
                        {release.version}
                      </span>
                      {release.status === "Live" && (
                        <div className="inline-flex items-center gap-1.5 bg-emerald-500/20 text-emerald-400 px-3 py-1.5 rounded-xl text-xs font-medium border border-emerald-500/30 w-fit">
                          <RiSparklingFill className="w-3 h-3" />
                          <span>Live</span>
                        </div>
                      )}
                    </div>
                    <div className="flex items-center text-gray-400 text-sm">
                      <FiCalendar className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span>{release.date}</span>
                    </div>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3 group-hover:text-gray-200 transition-colors leading-tight">
                    {release.title}
                  </h2>

                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {release.description}
                  </p>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <FiUsers className="w-4 h-4 text-gray-500 flex-shrink-0" />
                      <div className="flex flex-wrap gap-2">
                        {release.contributors.map((contributor) => (
                          <span
                            key={contributor}
                            className="bg-white/10 text-gray-400 px-3 py-1 rounded-lg text-xs border border-white/20"
                          >
                            {contributor}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center text-gray-400 text-sm font-medium group-hover:text-gray-300 transition-colors">
                      <span className="mr-2">View Details</span>
                      <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          <footer className="text-center mt-16 pt-8 border-t border-white/10">
            <p className="text-gray-500 text-sm">
              AI Platform - Advancing AI/ML Research
            </p>
          </footer>
        </div>
      </div>
    </>
  );
}
