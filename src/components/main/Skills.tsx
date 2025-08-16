
const Skills = () => {
  return (
    <div>
          <div className="mt-10 sm:mt-14">
  {/* Header */}
  <div className="mb-8 relative">
    <div className="flex items-center gap-4">
      <div className="w-7 h-7 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center shadow-lg">
        <svg
          className="w-5 h-5 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4v16m8-8H4"
          />
        </svg>
      </div>
      <h2 className="text-sm font-medium bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 dark:from-neutral-100 dark:via-neutral-200 dark:to-neutral-300 bg-clip-text text-transparent transition-all duration-300 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 dark:hover:from-blue-400 dark:hover:via-purple-400 dark:hover:to-pink-400 cursor-default">
        Skills
      </h2>
    </div>
    <div className="mt-4 h-px bg-gradient-to-r from-blue-500 via-purple-500 to-transparent opacity-40"></div>
  </div>

  {/* Skills List */}
  <div className="space-y-4">
    {[
      { label: "Design Tools:", skills: ["Figma", "Sketch"] },
      { label: "Development:", skills: ["HTML", "CSS", "Tailwind CSS", "React", "Vue"] },
      { label: "Collaboration:", skills: ["Notion", "Mailchimp", "Slack"] },
      { label: "Design Expertise:", skills: ["UI/UX Design", "Design Systems", "Custom Illustrations", "Responsive Design"] },
      { label: "Soft Skills:", skills: ["Strong communication", "Problem-solving", "Attention to detail", "Time management"] }
    ].map((category, index) => (
      <dl
        key={index}
        className="flex flex-col sm:flex-row gap-1 items-start sm:items-center group transition-all duration-300"
        style={{
          animation: "fadeInUp 0.6s ease forwards",
          animationDelay: `${index * 100}ms`
        }}
      >
        <dt className="min-w-40">
          <span className="block text-sm text-gray-500 dark:text-neutral-500 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300">
            {category.label}
          </span>
        </dt>
        <dd>
          <ul>
            {category.skills.map((skill, i) => (
              <li
                key={i}
                className={`me-1 inline-flex items-center text-sm text-gray-800 dark:text-neutral-200 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300 ${
                  i !== category.skills.length - 1 ? "after:content-[',']" : ""
                }`}
              >
                {skill}
              </li>
            ))}
          </ul>
        </dd>
      </dl>
    ))}
  </div>

  {/* Animation */}
  <style>{`
    @keyframes fadeInUp {
      0% { opacity: 0; transform: translateY(10px) scale(0.98); }
      100% { opacity: 1; transform: translateY(0) scale(1); }
    }
  `}</style>
</div>
    </div>
  )
}

export default Skills