/* eslint-disable @next/next/no-img-element */
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Calendar,
  ChevronDown,
  Menu,
  MessageCircle,
  Mic2Icon,
  Paperclip,
  Search,
  Settings,
  SmilePlus,
  Users,
  Video,
} from 'lucide-react';
import React from 'react';

gsap.registerPlugin(ScrollTrigger);

function SecondChatBox() {
  useGSAP(() => {
    const secondchatBox = gsap.timeline({
      scrollTrigger: {
        trigger: '[data-animate="secondChatBox"]',
        start: 'top 40%',
      },
    });

    secondchatBox
      .from('[data-animate="secondChatBox"]', {
        x: '-100%',
        opacity: 0,
      })
      .from('[data-animate="chatNav"]', {
        y: '-20%',
        opacity: 0,
      })
      .from('[data-animate="sideBar"]', {
        x: '30%',
        opacity: 0,
      })
      .from('[data-animate="nextBar"]', {
        x: '30%',
        opacity: 0,
      })
      .from('[data-animate="chatBox"]', {
        y: '-50%',
        opacity: 0,
      });
  });

  return (
    <section
      data-animate="secondChatBox"
      className="mt-4 flex flex-col  items-center justify-center  px-5 md:mt-32 md:px-10 lg:px-20"
    >
      <div className=" h-[55vh] w-full   overflow-hidden rounded-xl shadow-xl shadow-gray-400 md:h-[70vh] lg:h-[90vh] ">
        {/* Mac Window Buttons */}
        <div
          data-animate="chatNav"
          className="items-cente flex  justify-between border-b px-4 py-3 md:px-10 md:py-5"
        >
          <div className="flex items-center space-x-4">
            <button type="button" className="lg:hidden">
              <Menu className="size-5" />
            </button>
            <button type="button" className="lg:hidden">
              <Users className="size-5" />
            </button>
          </div>
          <div className="flex gap-2">
            <div className="size-3 rounded-full bg-[#FF5F56] md:size-5" />
            <div className="size-3 rounded-full bg-[#FFBD2E] md:size-5" />
            <div className="size-3 rounded-full bg-[#27C93F] md:size-5" />
          </div>
        </div>

        <div className="relative flex h-[calc(100%-3rem)]">
          <div
            data-animate="sideBar"
            className="hidden w-72 border-r bg-white lg:block"
          >
            <div className="px-4 py-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="البحث..."
                  className="w-full rounded-lg bg-[#F5F5F5] py-2 pl-10 pr-4 text-right text-sm"
                />
                <Search className="absolute left-3 top-2.5 size-4 text-gray-400" />
              </div>
            </div>

            <nav className="px-4 py-2">
              <ul className="space-y-1">
                {[
                  {
                    icon: MessageCircle,
                    text: 'صندوق البريد الرئيسي',
                    count: '2',
                  },
                  { icon: Settings, text: 'الإعدادات' },
                  { icon: Users, text: 'المحادثون' },
                  { icon: Calendar, text: 'التقسيمات' },
                ].map((item) => (
                  <li key={item.text}>
                    <p className="flex items-center justify-end rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-100">
                      {item.count && (
                        <span className="mr-2 rounded-full bg-blue-100 px-2 text-xs text-blue-600">
                          {item.count}
                        </span>
                      )}
                      <span className="flex-1 text-right">{item.text}</span>
                      <item.icon className="ml-2 size-4" />
                    </p>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* NextBar - Desktop */}
          <div
            data-animate="nextBar"
            className="hidden w-72 border-r bg-white lg:block"
          >
            <div className="flex items-center justify-between border-b p-4 ">
              <div className="flex items-center gap-2">
                <div className="flex size-8 items-center justify-center rounded bg-[#1a1a1a]">
                  <img alt="logo" src="/fullLogo.png" />
                </div>
                <div className="text-right">
                  <h2 className="text-sm font-semibold">مستقبل القانون</h2>
                  <p className="text-xs text-gray-500">صندوق الوارد</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between px-4 py-2">
              <div className="flex items-center space-x-2">
                <span className="text-sm">٨ مفتوح</span>
                <ChevronDown className="size-4" />
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm">الأولوية الأولى</span>
                <ChevronDown className="size-4" />
              </div>
            </div>

            <div className="px-4 py-2">
              <div data-animate="chatList1" className="space-y-2">
                {[
                  {
                    name: 'عمر',
                    time: '10:30 - 11:30',
                    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
                  },
                  {
                    name: 'فرح',
                    time: '10:30 - 11:30',
                    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
                  },
                  {
                    name: 'محمد',
                    time: '10:30 - 11:30',
                    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
                  },
                ].map((user) => (
                  <div
                    key={user.name}
                    className="flex cursor-pointer items-center justify-between gap-2 rounded-lg  bg-gray-100 p-2 shadow-md shadow-gray-200 hover:bg-gray-50"
                  >
                    <div className="mr-3 text-right">
                      <p className="text-sm font-medium">{user.name}</p>
                      <p className="text-xs text-gray-500">{user.time}</p>
                    </div>
                    <img
                      src={user.img}
                      alt={user.name}
                      className="size-10 rounded-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Chat Area */}
          <div
            data-animate="chatBox"
            className="flex w-full flex-1 flex-col bg-[#f8de6b28]"
          >
            {/* Chat Header */}
            <header className="flex h-16 flex-row-reverse items-center justify-between border-b bg-white px-4">
              <div className="flex items-center space-x-4">
                <div className="flex items-center gap-2">
                  <div className="text-right ">
                    <h2 className="text-sm font-semibold">
                      فصل دراسي عبر الإنترنت
                    </h2>
                    <p className="text-xs text-gray-500">
                      القانون المدني • منذ 3 ساعات
                    </p>
                  </div>
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150"
                    alt="Profile"
                    className="ml-3 size-8 rounded-full object-cover md:size-10"
                  />
                </div>
              </div>
              <div className="flex justify-between gap-2 rounded-md bg-gray-100 p-1.5 md:gap-3 md:p-2">
                <Mic2Icon className="size-4 md:size-5" />
                <Video className="size-4 md:size-5" />
              </div>
            </header>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-3 md:p-4">
              <div className="mx-auto max-w-3xl space-y-4">
                <div className="flex justify-end">
                  <div className="max-w-[85%] rounded-lg bg-white p-3 shadow-sm md:max-w-[80%]">
                    <p className="text-right text-sm">مرحباً، كيف حالك؟</p>
                    <span className="block text-right text-xs text-gray-400">
                      منذ 5 دقائق
                    </span>
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="max-w-[85%] rounded-lg bg-white p-3 shadow-sm md:max-w-[80%]">
                    <p className="text-right text-sm">حسناً بالتأكيد!</p>
                    <span className="block text-right text-xs text-gray-400">
                      منذ 3 دقائق
                    </span>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="max-w-[85%] rounded-lg bg-white p-3 shadow-sm md:max-w-[80%]">
                    <p className="text-right text-sm">حسناً بالتأكيد!</p>
                    <span className="block text-right text-xs text-gray-400">
                      منذئق
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Input Area */}
            <div className="border-t bg-white p-3 md:p-4">
              <div className="mx-auto flex w-full max-w-3xl items-center justify-center">
                <div className="flex w-full items-center rounded-lg bg-[#F5F5F5] p-1.5 md:p-2">
                  <div className="flex space-x-1 md:space-x-2">
                    <button
                      type="button"
                      className="rounded-full p-1.5 hover:bg-gray-200 md:p-2"
                    >
                      <Paperclip className="size-4 text-gray-500 md:size-5" />
                    </button>
                    <button
                      type="button"
                      className="rounded-full p-1.5 hover:bg-gray-200 md:p-2"
                    >
                      <SmilePlus className="size-4 text-gray-500 md:size-5" />
                    </button>
                  </div>
                  <input
                    type="text"
                    placeholder="اكتب رسالتك..."
                    className="w-full flex-1 border-none bg-transparent px-2 text-right focus:outline-none md:px-3"
                  />
                  <button
                    type="button"
                    className="mr-1 rounded-md bg-blue-500 px-3 py-1 text-sm text-white md:mr-2 md:px-4 md:text-base"
                  >
                    إرسال
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SecondChatBox;
