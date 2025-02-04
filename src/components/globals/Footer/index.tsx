import React from 'react';

function Footer() {
  return (
    <div className="mb-10 mt-32 px-5 text-4xl text-black md:px-10 lg:px-20">
      <div className="relative flex min-h-[20vh] w-full flex-col overflow-hidden rounded-2xl bg-gradient-to-r from-[#0F1F3D] to-[#020b1c] text-white shadow-2xl transition-all duration-500 hover:shadow-[0_20px_50px_rgba(15,_31,_61,_0.5)]">
        {/* Animated background elements */}
        <div className="absolute inset-0 animate-pulse opacity-10">
          <div className="absolute -right-20 -top-20 size-60 rounded-full bg-[#1d4ed8] blur-3xl" />
          <div className="absolute -bottom-20 -left-20 size-60 rounded-full bg-[#3b82f6] blur-3xl" />
        </div>

        <div className="flex flex-col md:flex-row">
          {/* Left Column */}
          <div className="relative z-10 w-full p-5 md:w-1/2 md:p-10">
            <h3 className="flex items-center gap-2 text-xl">anemoia.dev</h3>
            <p className="mt-3 text-sm text-gray-400">ai layer</p>

            <div className="mt-10 flex w-full justify-between gap-5 md:justify-normal">
              <div className="relative w-3/4">
                <input
                  className="w-full rounded-xl bg-[#0F1F3D] px-5 py-3 text-xs outline-none transition-all duration-300 focus:bg-[#1a2d4f] focus:ring-2 focus:ring-blue-400 md:py-5"
                  placeholder="work@email.com"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute right-3 top-1/2 size-4 -translate-y-1/2 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <button
                className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-400 to-blue-600 px-5 text-xs font-bold text-white shadow-lg transition-all duration-300 hover:gap-3 hover:shadow-blue-500/30"
                type="button"
              >
                Sign Up
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative z-10 flex w-full justify-between p-5 md:w-1/2 md:p-10 lg:p-20">
            {['Product', 'Learn', 'Company'].map((section) => (
              <div key={section} className="flex flex-col gap-3">
                <h3 className="text-sm text-white">{section}</h3>
                {['Overview', 'Changelog', 'Guide'].map((item) => (
                  <p
                    key={item}
                    className="group flex items-center gap-2 text-xs text-gray-400 transition-all duration-300 hover:text-white"
                  >
                    <span>{item}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-3 opacity-0 transition-all duration-300 group-hover:opacity-100"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="relative z-10 p-5 md:p-10 lg:p-20">
          <div className="mt-10 flex flex-col gap-5 border-t border-gray-700 py-2 text-xs text-gray-600 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <p>© 2025 ailexfuture.com</p>
            </div>
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 text-[#FF6B00]"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 2L2 19.78h9.75V22h.75v-2.22H22L12 2zm1.5 16.28h-3v-1.5h3v1.5zm0-2.78h-3V9.5h3v6z"
                />
              </svg>
              <p>powered by anemoia.dev</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
