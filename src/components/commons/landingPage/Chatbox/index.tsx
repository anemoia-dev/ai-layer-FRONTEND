import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ArrowLeft, Info, X } from 'lucide-react';
import React from 'react';

function Chatbox() {
  useGSAP(() => {
    const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: '[data-animate="chatBoxContainer"]',
        start: 'top 40%',
      },
    });
    tl3
      .from('[data-animate="mainChat"]', {
        y: '100%',
        opacity: 0,
      })
      .from('[data-animate="firstMsg"]', {
        x: '-100%',
        opacity: 0,
      })
      .from('[data-animate="secondMsg"]', {
        opacity: 0,
        x: '100%',
      })
      .from('[data-animate="thirdMsg"]', {
        x: '-100%',
        opacity: 0,
      });
  });

  return (
    <section
      data-animate="chatBoxContainer"
      className=" mt-32 flex    items-center justify-center px-5 md:px-10 lg:px-20"
    >
      <div className="flex h-[90%] w-full flex-col items-center justify-end overflow-hidden  rounded-b-3xl  bg-gradient-to-r from-[#E8F3FF] via-[#D6EAFE] to-[#C4E0FD] pt-10">
        <div
          data-animate="mainChat"
          className=" w-4/5 max-w-3xl overflow-hidden rounded-t-3xl bg-white shadow-lg md:w-2/5"
        >
          {/* Header */}
          <header className="flex items-center border-b px-3 py-2 sm:px-4 sm:py-3 ">
            <button type="button" className="text-blue-500 hover:text-blue-600">
              <ArrowLeft className="size-5 sm:size-6" />
            </button>
            <div className=" ml-2 flex items-center">
              <div className="flex size-8 items-center justify-center rounded-lg bg-black sm:size-10">
                <span className="text-xs text-white sm:text-sm">AI</span>
              </div>
              <div className="ml-3 mr-2 rtl:text-right">
                <h1 className="text-base font-semibold sm:text-lg">
                  مجلس إدارة القانون
                </h1>
                <div className="flex items-center">
                  <span className="rounded bg-gray-100 px-1 text-[10px] sm:text-xs">
                    AI
                  </span>
                  <span className="mr-1 text-xs text-gray-500 sm:text-sm">
                    بوت
                  </span>
                </div>
              </div>
            </div>
          </header>

          {/* Chat Messages */}
          <div className=" space-y-3 overflow-hidden overflow-y-auto p-3 sm:h-[400px] sm:space-y-4  sm:p-4">
            {/* Bot Message */}
            <div
              data-animate="firstMsg"
              className=" flex items-start space-x-2"
            >
              <div className="flex size-7 items-center justify-center rounded-lg bg-gray-200 sm:size-8">
                <span className="text-[10px] text-gray-600 sm:text-xs">AI</span>
              </div>
              <div className="max-w-[85%] rounded-2xl rounded-tl-none bg-gray-100 p-2.5 sm:max-w-[80%] sm:p-3 rtl:text-right">
                <p className="text-sm text-gray-800 sm:text-base">
                  مرحباً، كيف يمكنني مساعدتك؟
                </p>
              </div>
            </div>

            {/* File Attachment Message */}
            <div data-animate="secondMsg" className=" flex justify-end">
              <div className="max-w-[85%] rounded-2xl rounded-tr-none bg-blue-500 p-3 text-white sm:max-w-[80%] sm:p-4">
                <div className="mb-2 rounded-lg bg-white/10 p-2.5 sm:p-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex size-7 items-center justify-center rounded bg-white/20 sm:size-8">
                        <span className="text-[10px] text-white sm:text-xs">
                          PDF
                        </span>
                      </div>
                      <div className="ml-2">
                        <p className="text-sm">CivilLawcase.Pdf</p>
                        <p className="text-[10px] opacity-75 sm:text-xs">
                          5.4 MB
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="rounded-full p-1 hover:bg-white/20"
                    >
                      <X className="size-3.5 sm:size-4" />
                    </button>
                  </div>
                </div>
                <p className="text-right text-sm sm:text-base">
                  إنشاء سيناريو قضية قانون مدني للطالب وفقاً لملف pdf المرفق
                  أعلاه
                </p>
              </div>
            </div>

            {/* Bot Response */}
            <div
              data-animate="thirdMsg"
              className=" flex items-start space-x-2"
            >
              <div className="flex size-7 items-center justify-center rounded-lg bg-gray-200 sm:size-8">
                <span className="text-[10px] text-gray-600 sm:text-xs">AI</span>
              </div>
              <div className="max-w-[85%] rounded-2xl rounded-tl-none bg-gray-100 p-2.5 sm:max-w-[80%] sm:p-3 rtl:text-right">
                <p className="text-sm text-gray-800 sm:text-base">
                  حسناً بالتأكيد!
                </p>
              </div>
            </div>
          </div>

          {/* Input Area */}
          <div className=" border-t p-3 sm:p-4">
            <div className="flex items-center rounded-xl bg-gray-100 p-1">
              <div className="flex flex-1 items-center">
                <div className="mx-2 flex size-7 items-center justify-center rounded-lg bg-black sm:size-8">
                  <span className="text-[10px] text-white sm:text-xs">AI</span>
                </div>
                <span className="text-sm text-gray-500 sm:text-base">
                  الإجابة
                </span>
              </div>
              <button
                type="button"
                className="rounded-full p-1.5 hover:bg-gray-200 sm:p-2"
              >
                <Info className="size-4 text-gray-500 sm:size-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Chatbox;
