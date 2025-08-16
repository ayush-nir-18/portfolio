import { useState } from "react";

const Projects = () => {
      const [lightbox, setLightbox] = useState<any | null>(null);

  const projects = [
    {
      src: "https://images.unsplash.com/photo-1656618724305-a4257e46e847?q=80&w=800&auto=format&fit=crop",
      title: "Portfolio Website",
      tech: "React • Tailwind • Framer Motion",
    },
    {
      src: "https://images.unsplash.com/photo-1616427592793-67b858804534?q=80&w=800&auto=format&fit=crop",
      title: "E-Commerce Platform",
      tech: "Next.js • Stripe • MongoDB",
    },
    {
      src: "https://images.unsplash.com/photo-1516131206008-dd041a9764fd?q=80&w=800&auto=format&fit=crop",
      title: "Dashboard UI",
      tech: "Vue • Chart.js • Firebase",
    },
    {
      src: "https://images.unsplash.com/photo-1707760696486-2a2cd7e0b6a6?q=80&w=800&auto=format&fit=crop",
      title: "AI Chatbot",
      tech: "Python • FastAPI • OpenAI",
    },
    {
      src: "https://images.unsplash.com/photo-1585159812596-fac104f2f069?q=80&w=800&auto=format&fit=crop",
      title: "Travel Blog",
      tech: "Gatsby • GraphQL • Netlify",
    },
    {
      src: "https://images.unsplash.com/photo-1654131300276-db70adf4f85d?q=80&w=800&auto=format&fit=crop",
      title: "Finance App",
      tech: "Flutter • Firebase • Stripe",
    },
  ];
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
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      </div>
      <h2 className="text-sm font-medium bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 dark:from-neutral-100 dark:via-neutral-200 dark:to-neutral-300 bg-clip-text text-transparent transition-all duration-300 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 dark:hover:from-blue-400 dark:hover:via-purple-400 dark:hover:to-pink-400 cursor-default">
        Projects
      </h2>
    </div>
    <div className="mt-4 h-px bg-gradient-to-r from-blue-500 via-purple-500 to-transparent opacity-40"></div>
  </div>

  {/* Projects Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {projects.map((project, index) => (
      <button
        key={index}
        onClick={() => setLightbox(project)}
        className="group relative block overflow-hidden rounded-2xl border border-gray-200/60 dark:border-neutral-700/60 hover:border-blue-300/70 dark:hover:border-blue-500/70 shadow-sm hover:shadow-2xl transition-all duration-500 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm"
        style={{
          animationDelay: `${index * 150}ms`,
          animation: "fadeInUp 0.8s ease forwards",
        }}
      >
        <div className="relative overflow-hidden rounded-2xl">
          <img
            className="w-full h-48 object-cover transition-all duration-700 group-hover:scale-105"
            src={project.src}
            alt={project.title}
          />
          
          {/* Subtle Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
          
          {/* Hover Content */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
            <div className="text-center text-white transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3 border border-white/30">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <p className="text-sm font-medium">View Project</p>
            </div>
          </div>
        </div>

        {/* Project Info */}
        <div className="p-4">
          <h3 className="text-base font-medium text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {project.tech}
          </p>
        </div>

        {/* Subtle Glow Border */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10 blur-xl"></div>
      </button>
    ))}
  </div>

 

  {/* Lightbox Modal */}
  {lightbox && (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4"
      onClick={() => setLightbox(null)}
    >
      <div
        className="relative max-w-5xl w-full bg-white/95 dark:bg-neutral-900/95 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-sm border border-white/20 dark:border-neutral-700/50"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <img src={lightbox.src} alt={lightbox?.title} className="w-full h-auto max-h-[70vh] object-contain" />
          
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 w-10 h-10 bg-black/20 backdrop-blur-sm text-white rounded-full hover:bg-black/40 transition-all duration-300 flex items-center justify-center border border-white/20"
            onClick={() => setLightbox(null)}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="p-6 border-t border-gray-200/50 dark:border-neutral-700/50">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            {lightbox.title}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            {lightbox.tech}
          </p>
          
          {/* Action Buttons */}
          <div className="flex gap-3">
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300 text-sm font-medium">
              Live Demo
            </button>
            <button className="px-4 py-2 bg-gray-100 dark:bg-neutral-800 hover:bg-gray-200 dark:hover:bg-neutral-700 text-gray-700 dark:text-gray-300 rounded-lg transition-colors duration-300 text-sm font-medium">
              View Code
            </button>
          </div>
        </div>
      </div>
    </div>
  )}

  {/* Enhanced Animation Keyframes */}
  <style>{`
    @keyframes fadeInUp {
      0% { 
        opacity: 0; 
        transform: translateY(20px) scale(0.95); 
      }
      100% { 
        opacity: 1; 
        transform: translateY(0) scale(1); 
      }
    }
  `}</style>
</div>
    </div>
  )
}

export default Projects