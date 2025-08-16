
const Testimonial = () => {
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
        What People Say
      </h2>
    </div>
    <div className="mt-4 h-px bg-gradient-to-r from-blue-500 via-purple-500 to-transparent opacity-40"></div>
  </div>

  {/* Testimonials Grid */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
    {/* Testimonial 1 */}
    <div 
      className="group relative bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/60 dark:border-neutral-700/60 hover:border-emerald-300/50 dark:hover:border-emerald-500/50 shadow-sm hover:shadow-xl transition-all duration-500"
      style={{
        animation: "fadeInUp 0.6s ease forwards",
        animationDelay: "0ms"
      }}
    >
      {/* Quote Icon */}
      <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
        <svg className="w-8 h-8 text-emerald-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
        </svg>
      </div>

      <blockquote className="relative">
        {/* Stars Rating */}
       

        <p className="text-gray-700 text-sm dark:text-neutral-300 leading-relaxed mb-6 group-hover:text-gray-800 dark:group-hover:text-neutral-200 transition-colors duration-300">
          "I'm absolutely floored by the level of care and attention to detail Eliana has put into this project. The results exceeded all expectations and I can guarantee that we will be a return customer."
        </p>

        <footer>
          <div className="flex items-center gap-4">
            <div className="relative">
              <img
                className="w-12 h-12 rounded-full object-cover ring-2 ring-emerald-500/20 group-hover:ring-emerald-500/40 transition-all duration-300"
                src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                alt="Josh Grazioso"
              />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white dark:border-neutral-900 flex items-center justify-center">
                <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
              </div>
            </div>
            <div>
              <div className="font-semibold text-gray-900 dark:text-white text-sm">
                Josh Grazioso
              </div>
              <div className="text-xs text-gray-500 dark:text-neutral-500">
                CEO, TechFlow Solutions
              </div>
            </div>
          </div>
        </footer>
      </blockquote>

      {/* Subtle Background Glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/5 via-teal-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10"></div>
    </div>

    {/* Testimonial 2 */}
    <div 
      className="group relative bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/60 dark:border-neutral-700/60 hover:border-emerald-300/50 dark:hover:border-emerald-500/50 shadow-sm hover:shadow-xl transition-all duration-500"
      style={{
        animation: "fadeInUp 0.6s ease forwards",
        animationDelay: "200ms"
      }}
    >
      {/* Quote Icon */}
      <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
        <svg className="w-8 h-8 text-emerald-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
        </svg>
      </div>

      <blockquote className="relative">
        {/* Stars Rating */}
       

        <p className="text-gray-700 text-sm dark:text-neutral-300 leading-relaxed mb-6 group-hover:text-gray-800 dark:group-hover:text-neutral-200 transition-colors duration-300">
          "To say that hiring Eliana has been life-changing is an understatement. My business has tripled, my workflow is streamlined, and I got my life back. Absolutely incredible work!"
        </p>

        <footer>
          <div className="flex items-center gap-4">
            <div className="relative">
              <img
                className="w-12 h-12 rounded-full object-cover ring-2 ring-emerald-500/20 group-hover:ring-emerald-500/40 transition-all duration-300"
                src="https://images.unsplash.com/photo-1671726203390-cdc4354ee2eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                alt="Nicole Grazioso"
              />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white dark:border-neutral-900 flex items-center justify-center">
                <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
              </div>
            </div>
            <div>
              <div className="font-semibold text-gray-900 dark:text-white text-sm">
                Nicole Grazioso
              </div>
              <div className="text-xs text-gray-500 dark:text-neutral-500">
                Founder, Creative Ventures
              </div>
            </div>
          </div>
        </footer>
      </blockquote>

      {/* Subtle Background Glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/5 via-teal-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10"></div>
    </div>
  </div>

  

  {/* Animation Keyframes */}
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

export default Testimonial