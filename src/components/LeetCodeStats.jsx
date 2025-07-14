import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import ExternalLinkIcon from "../assets/External_link.png";
import { RotateCcw } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const LeetCodeStatsCard = ({ username }) => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const COLORS = {
    Easy: "#22c55e",
    Medium: "#eab308",
    Hard: "#ef4444",
  };

  useEffect(() => {
    fetchStats();
  }, [username]);

  const fetchStats = async () => {
    try {
      setRefreshing(true);
      const response = await axios.post("http://localhost:5000/leetcode", {
        username,
      });
      setStats(response.data);
    } catch (err) {
      console.error("LeetCode API Error:", err);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  const getTier = (rating) => {
    if (rating >= 2200) return "🌟 Legendary";
    if (rating >= 2000) return "🔥 Knight";
    if (rating >= 1800) return "💥 Guardian";
    if (rating >= 1600) return "🔷 Coder";
    return "🧹 Beginner";
  };

  const difficultyColors = {
    All: "bg-blue-500",
    Easy: "bg-green-400",
    Medium: "bg-yellow-400",
    Hard: "bg-red-400",
  };

  const easyCount =
    stats?.submitStats.acSubmissionNum.find((d) => d.difficulty === "Easy")
      ?.count || 0;
  const mediumCount =
    stats?.submitStats.acSubmissionNum.find((d) => d.difficulty === "Medium")
      ?.count || 0;
  const hardCount =
    stats?.submitStats.acSubmissionNum.find((d) => d.difficulty === "Hard")
      ?.count || 0;
  const totalSolved = easyCount + mediumCount + hardCount;

  const chartData = [
    { name: "Easy", value: easyCount },
    { name: "Medium", value: mediumCount },
    { name: "Hard", value: hardCount },
  ];

  return (
    <div className="bg-gradient-to-br from-[#0a1636] to-[#14061f] min-h-screen flex items-center justify-center px-4 py-4 sm:py-10">
      <motion.div
        className="w-full max-w-5xl bg-white/10 backdrop-blur-md rounded-2xl p-3 sm:p-10 border border-white/10 shadow-xl shadow-cyan-500/10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.4 }}
      >
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4 sm:mb-10">
          <div className="flex items-center gap-2 sm:gap-3">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
              alt="leetcode logo"
              className="h-10 sm:h-16 w-auto"
            />
            <h2 className="text-lg sm:text-4xl font-extrabold text-gray-200 tracking-tight">
              LeetCode
            </h2>
            <a
              href="https://leetcode.com/u/Dipanshusandhaki/"
              target="_blank"
              rel="noopener noreferrer"
              title="View Profile"
            >
              <img
                src={ExternalLinkIcon}
                alt="external link"
                className="h-5 sm:h-8 w-5 sm:w-8 opacity-80 hover:opacity-100 transition duration-200 cursor-pointer"
              />
            </a>
          </div>

          <button
            onClick={fetchStats}
            disabled={refreshing}
            className={`flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm rounded-full font-semibold shadow ${
              refreshing
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-400"
            } text-black transition`}
          >
            {refreshing ? (
              <>
                <svg
                  className="animate-spin h-4 w-4 sm:h-5 sm:w-5 text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  ></path>
                </svg>
                Loading...
              </>
            ) : (
              <>
                <RotateCcw size={16} />
                Refresh
              </>
            )}
          </button>
        </div>

        {/* User Info */}
        {stats ? (
          <>
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-8 mb-6 sm:mb-8">
              <img
                src={stats.profile.userAvatar}
                alt="avatar"
                className="w-20 sm:w-24 h-20 sm:h-24 rounded-full border-4 border-yellow-400 shadow-lg"
              />
              <div className="text-center sm:text-left">
                <div className="flex flex-col sm:flex-row items-center sm:items-center justify-center sm:justify-start gap-1 sm:gap-3">
                  <h3 className="text-lg sm:text-3xl font-semibold text-white">
                    {stats.username}
                  </h3>
                  <span className="bg-yellow-500 text-black font-semibold px-3 py-1 text-[11px] sm:text-xs rounded-full sm:mt-0 mt-1">
                    Total Solved: {totalSolved}
                  </span>
                </div>

                <p className="text-gray-300 text-xs sm:text-sm mt-1">
                  🌐 Global Rank:{" "}
                  <span className="font-medium">#{stats.profile.ranking}</span>
                </p>
                {stats.contestRanking?.rating && (
                  <p className="text-yellow-400 text-xs sm:text-sm font-medium mt-1">
                    Tier: {getTier(stats.contestRanking.rating)} (Rating:{" "}
                    {stats.contestRanking.rating})
                  </p>
                )}
              </div>
            </div>

            {/* Chart & Progress */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-12">
              {/* Chart */}
              <div className="w-full h-56 sm:h-72 bg-white/5 backdrop-blur-md p-3 sm:p-4 rounded-xl border border-white/10">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData}>
                    <XAxis dataKey="name" stroke="#fff" />
                    <YAxis stroke="#fff" />
                    <Bar dataKey="value">
                      {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[entry.name]} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>

                <div className="flex justify-center gap-4 mt-4 text-xs sm:text-sm text-white flex-wrap">
                  {chartData.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <span
                        className="w-3 h-3 rounded-full inline-block"
                        style={{ backgroundColor: COLORS[item.name] }}
                      ></span>
                      <span>{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Progress Bars */}
              <div className="space-y-3">
                {["All", "Easy", "Medium", "Hard"].map((level) => {
                  const count =
                    level === "All"
                      ? totalSolved
                      : stats.submitStats.acSubmissionNum.find(
                          (item) => item.difficulty === level
                        )?.count || 0;
                  const progress = Math.min((count / 300) * 100, 100);
                  return (
                    <div key={level}>
                      <div className="flex justify-between text-xs sm:text-sm text-white mb-1">
                        <span>{level}</span>
                        <span>
                          <CountUp end={count} duration={1.2} /> solved
                        </span>
                      </div>
                      <div className="w-full bg-gray-950 h-3 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full ${difficultyColors[level]} rounded-full`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${progress}%` }}
                          transition={{ duration: 1.2 }}
                          style={{ minWidth: "8px" }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        ) : (
          <div className="text-center text-sm text-gray-400 animate-pulse mt-10">
            Fetching stats...
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default LeetCodeStatsCard;
