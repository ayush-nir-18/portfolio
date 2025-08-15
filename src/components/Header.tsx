const Header = () => {
  return (
    <>
      <header className="sticky top-0 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm">
        <nav className="mt-4 relative max-w-2xl w-full bg-white border border-gray-200 rounded-[24px] mx-2 flex flex-wrap md:flex-nowrap items-center justify-between p-1 ps-4 md:py-0 sm:mx-auto dark:bg-neutral-900 dark:border-neutral-700">
          <div className="flex items-center">
            <a
              className="flex-none rounded-md text-xl inline-block font-semibold focus:outline-hidden focus:opacity-80 cursor-pointer"
              onClick={() => {
                scrollTo({ top: 0, behavior: "smooth" });
              }}
              aria-label="Preline"
            >
              <img
                className="h-8 w-8"
                src="https://static.vecteezy.com/system/resources/thumbnails/011/658/583/small_2x/letter-a-abstract-logo-flat-capital-letter-a-abstract-logo-icon-image-with-transparent-background-png.png"
                alt="Preline"
              />
            </a>

            <div className="ms-1 sm:ms-2">
              <div className="hs-dropdown  relative  [--scope:window] [--auto-close:inside] inline-flex">
                <button
                  id="hs-dropdown-preview-navbar"
                  type="button"
                  className="hs-dropdown-toggle  group relative flex justify-center items-center size-8 text-xs rounded-full text-gray-800 hover:bg-gray-100 focus:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden"
                  aria-haspopup="menu"
                  aria-expanded="false"
                  aria-label="Dropdown"
                >
                  <span className="">
                    <svg
                      className=" size-4 shrink-0"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </span>

                  <span className="absolute -top-0.5 -end-0.5">
                    <span className="relative flex">
                      <span className="animate-ping absolute inline-flex size-full rounded-full bg-red-400 dark:bg-red-600 opacity-75"></span>
                      <span className="relative inline-flex size-2 bg-red-500 rounded-full"></span>
                      <span className="sr-only">Notification</span>
                    </span>
                  </span>
                </button>

                <div
                  className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-full min-w-90 md:w-125 transition-[opacity,margin] duration opacity-0 hidden z-61 overflow-hidden border border-gray-200 bg-white rounded-xl shadow-xl dark:bg-neutral-800 dark:border-neutral-700"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="hs-dropdown-preview-navbar"
                >
                  <div className="p-3 pb-0 flex flex-wrap justify-between items-center gap-3 border-b border-gray-200 dark:border-neutral-700">
                    <nav
                      className="flex gap-1"
                      aria-label="Tabs"
                      role="tablist"
                      aria-orientation="horizontal"
                    >
                      <button
                        type="button"
                        className="hs-tab-active:after:bg-gray-800 hs-tab-active:text-gray-800 px-2 py-1.5 mb-2 relative inline-flex justify-center items-center gap-x-2 hover:bg-gray-100 text-gray-500 hover:text-gray-800 text-sm rounded-lg disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 after:absolute after:-bottom-2 after:inset-x-2 after:z-10 after:h-0.5 after:pointer-events-none dark:hs-tab-active:text-neutral-200 dark:hs-tab-active:after:bg-neutral-400 dark:text-neutral-500 dark:hover:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden active"
                        id="hs-pmn-item-free"
                        aria-selected="true"
                        data-hs-tab="#hs-pmn-free"
                        aria-controls="hs-pmn-free"
                        role="tab"
                      >
                        Free
                      </button>
                    </nav>

                    <div className="mb-2 flex items-center gap-x-0.5">
                      <button
                        type="button"
                        className="hs-dark-mode hs-dark-mode-active:hidden flex shrink-0 justify-center items-center gap-x-1 text-xs text-gray-500 hover:text-gray-800 focus:outline-hidden focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                        data-hs-theme-click-value="dark"
                      >
                        <svg
                          className="shrink-0 size-3.5"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                        </svg>
                        Switch to Dark
                      </button>
                      <button
                        type="button"
                        className="hs-dark-mode hs-dark-mode-active:flex hidden shrink-0 justify-center items-center gap-x-1 text-xs text-gray-500 hover:text-gray-800 focus:outline-hidden focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                        data-hs-theme-click-value="light"
                      >
                        <svg
                          className="shrink-0 size-3.5"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="12" cy="12" r="4"></circle>
                          <path d="M12 2v2"></path>
                          <path d="M12 20v2"></path>
                          <path d="m4.93 4.93 1.41 1.41"></path>
                          <path d="m17.66 17.66 1.41 1.41"></path>
                          <path d="M2 12h2"></path>
                          <path d="M20 12h2"></path>
                          <path d="m6.34 17.66-1.41 1.41"></path>
                          <path d="m19.07 4.93-1.41 1.41"></path>
                        </svg>
                        Switch to Light
                      </button>
                    </div>
                  </div>

                  <div
                    id="hs-pmn-pro"
                    className="hidden"
                    role="tabpanel"
                    aria-labelledby="hs-pmn-item-pro"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                    quia accusamus et, iste quaerat quibusdam quos labore, ex
                    laborum hic saepe? Eum neque fuga obcaecati magni
                    consequatur alias animi asperiores?
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1 md:order-4 md:ms-4">
            <a
              className="w-full sm:w-auto whitespace-nowrap py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-full border border-transparent bg-gray-800 text-white 
  transition-all duration-300 ease-in-out 
  hover:bg-gray-900 hover:scale-105 hover:shadow-lg 
  focus:outline-hidden focus:bg-blue-700 
  disabled:opacity-50 disabled:pointer-events-none 
  dark:bg-white dark:text-neutral-800 dark:hover:bg-neutral-200"
              href="#"
            >
              <small>Let’s Work Together 😁</small>
            </a>

            <div className="md:hidden">
              <button
                type="button"
                className="hs-collapse-toggle flex justify-center items-center size-9.5 border border-gray-200 text-gray-500 rounded-full hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                id="hs-navbar-header-floating-collapse"
                aria-expanded="false"
                aria-controls="hs-navbar-header-floating"
                aria-label="Toggle navigation"
                data-hs-collapse="#hs-navbar-header-floating"
              >
                <svg
                  className="hs-collapse-open:hidden shrink-0 size-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="3" x2="21" y1="6" y2="6" />
                  <line x1="3" x2="21" y1="12" y2="12" />
                  <line x1="3" x2="21" y1="18" y2="18" />
                </svg>
                <svg
                  className="hs-collapse-open:block hidden shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>
          </div>

          <div
            id="hs-navbar-header-floating"
            className="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow md:block"
            aria-labelledby="hs-navbar-header-floating-collapse"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-end gap-2 md:gap-3 mt-3 md:mt-0 py-2 md:py-0 md:ps-7">
              <a
                className="py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 border-gray-800 font-medium text-gray-800 hover:text-gray-800 focus:outline-hidden dark:border-neutral-200 dark:text-neutral-200 dark:hover:text-neutral-200"
                href="#overview"
                aria-current="page"
              >
                Overview
              </a>

              <a
                className="py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 border-transparent text-gray-500 hover:text-gray-800 focus:outline-hidden dark:text-neutral-400 dark:hover:text-neutral-200"
                href="#expertise"
                aria-current="page"
              >
                Expertise
              </a>
              <a
                className="py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 border-transparent text-gray-500 hover:text-gray-800 focus:outline-hidden dark:text-neutral-400 dark:hover:text-neutral-200"
                href="#experience"
                aria-current="page"
              >
                Experience
              </a>
              <a
                className="py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 border-transparent text-gray-500 hover:text-gray-800 focus:outline-hidden dark:text-neutral-400 dark:hover:text-neutral-200"
                href="#education"
              >
                Education
              </a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
