import { Mail, Instagram, Phone, Github } from "lucide-react";

const Hero = () => {
  return (
    <div>
          <div className="flex items-center gap-x-3">
            <div className="shrink-0 relative group cursor-pointer">
              {/* Animated background rings */}
              <div className="absolute inset-0 rounded-full">
                <div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-75 animate-spin"
                  style={{ animationDuration: "3s" }}
                ></div>
                <div
                  className="absolute inset-1 rounded-full bg-gradient-to-r from-pink-500 via-blue-500 to-purple-500 opacity-50 animate-spin"
                  style={{
                    animationDuration: "2s",
                    animationDirection: "reverse",
                  }}
                ></div>
                <div className="absolute inset-2 rounded-full bg-white dark:bg-gray-900"></div>
              </div>

              {/* Pulsing outer glow */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-30 blur-lg transition-all duration-500 animate-pulse"></div>

              {/* Hexagonal frame overlay */}
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <svg
                  className="absolute inset-0 w-full h-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"
                  viewBox="0 0 100 100"
                >
                  <polygon
                    points="50,5 85,25 85,75 50,95 15,75 15,25"
                    fill="none"
                    stroke="url(#hexGradient)"
                    strokeWidth="2"
                    className="animate-pulse"
                  />
                  <defs>
                    <linearGradient
                      id="hexGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="50%" stopColor="#8b5cf6" />
                      <stop offset="100%" stopColor="#ec4899" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Main image */}
              <div className="relative z-10">
                <img
                  className="relative size-20 sm:size-24 rounded-full object-cover shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] border-4 border-white dark:border-gray-800"
                  src="/img/ayush.jpg"
                  alt="Ayush Niraula - Software Engineer"
                />

                {/* Floating particles */}
                <div
                  className="absolute -top-2 -right-2 w-3 h-3 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-bounce"
                  style={{ animationDelay: "0s" }}
                ></div>
                <div
                  className="absolute -top-1 -left-3 w-2 h-2 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                ></div>
                <div
                  className="absolute -bottom-2 -left-2 w-2.5 h-2.5 bg-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-bounce"
                  style={{ animationDelay: "0.4s" }}
                ></div>
                <div
                  className="absolute -bottom-1 -right-3 w-2 h-2 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-bounce"
                  style={{ animationDelay: "0.6s" }}
                ></div>
              </div>

              {/* Status indicator with enhanced styling */}
              <div className="absolute -bottom-1 -right-1 z-20">
                <div className="relative">
                  <div className="absolute inset-0 w-7 h-7 bg-green-400 rounded-full animate-ping opacity-75"></div>
                  <div className="relative w-7 h-7 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full border-3 border-white dark:border-gray-800 shadow-lg flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>

              {/* Hover text indicator */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                <div className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-2 py-1 rounded text-xs font-medium whitespace-nowrap shadow-lg">
                  👋 Say Hi!
                </div>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-gray-900 dark:border-b-white"></div>
              </div>
            </div>

            <div className="grow space-y-1">
              <h1 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-neutral-100">
                Ayush Niraula
              </h1>
              <p className="text-sm text-gray-700 dark:text-neutral-300">
                Software Engineer / Full Stack Developer
              </p>
              <div className="space-y-2">
                <div className="flex flex-wrap gap-2">
                  {["TypeScript", "React", "Node.js", "Express", "MongoDB"].map(
                    (tech, index) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-300 rounded-full border border-gray-300 dark:border-gray-600 hover:from-blue-50 hover:to-blue-100 dark:hover:from-blue-900 dark:hover:to-blue-800 hover:text-blue-700 dark:hover:text-blue-300 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-200 hover:scale-105 cursor-default"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed hover:text-gray-800 dark:hover:text-gray-100 transition-colors duration-200 text-sm">
              I am a dedicated full stack developer with over{" "}
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                3 years of experience
              </span>{" "}
              in building robust, scalable, and user-friendly web applications.
              My expertise lies in software development and modern web
              technologies, delivering high-quality solutions from concept to
              deployment.
            </p>
            <br />
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed hover:text-gray-800 dark:hover:text-gray-100 transition-colors duration-200 text-sm">
              Throughout my career, I have contributed to multiple impactful
              projects, including a{" "}
              <span className="font-semibold text-green-600 dark:text-green-400">
                fintech digital wallet serving over 500K users
              </span>
              , a remittance application, and various management systems. I am
              passionate about creating efficient, maintainable, and innovative
              solutions that drive real-world results.
            </p>

            <div className="border- border-gray-200 dark:border-gray-700 pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    icon: Mail,
                    label: "Email",
                    value: "ayushnir18@gmail.com",
                    href: "mailto:ayushnir18@gmail.com",
                    color: "text-red-500",
                  },
                  {
                    icon: Phone,
                    label: "Phone",
                    value: "+977 9861281996",
                    href: "tel:+9779861281996",
                    color: "text-green-500",
                  },
                  {
                    icon: Instagram,
                    label: "Instagram",
                    value: "@the.ayush.niraula",
                    href: "https://instagram.com/the.ayush.niraula",
                    color: "text-pink-500",
                  },
                  {
                    icon: Github,
                    label: "GitHub",
                    value: "ayush-nir-18",
                    href: "https://github.com/ayush-nir-18",
                    color: "text-gray-600 dark:text-gray-400",
                  },
                ].map((contact, index) => {
                  const IconComponent = contact.icon;
                  return (
                    <a
                      key={contact.label}
                      href={contact.href}
                      target={
                        contact.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        contact.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="group flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-white dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-200 hover:shadow-md hover:-translate-y-1"
                      style={{ animationDelay: `${index * 150}ms` }}
                      aria-label={`Contact via ${contact.label}: ${contact.value}`}
                    >
                      <div
                        className={`flex items-center justify-center w-10 h-10 rounded-lg bg-white dark:bg-gray-900 shadow-sm group-hover:scale-110 transition-transform duration-200 ${contact.color}`}
                      >
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-medium text-gray-500 dark:text-gray-400 upprcase tracking-wider">
                          {contact.label}
                        </p>
                        <small className="text-xs font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 truncate">
                          {contact.value}
                        </small>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <svg
                          className="w-4 h-4 text-gray-400 dark:text-gray-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
    </div>
  )
}

export default Hero