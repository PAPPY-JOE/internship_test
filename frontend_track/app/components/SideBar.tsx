'use client'

import { useState } from 'react'
import Image from 'next/image'
import { BiBarChartSquare } from 'react-icons/bi' 
import { FiCalendar } from 'react-icons/fi'
import { MdLogout } from 'react-icons/md'
import { RxDashboard } from 'react-icons/rx'
import { VscSettings } from 'react-icons/vsc' 
import ThemeToggle from './ThemeToggle'
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip'

const nav_items = [
    {
      icon: RxDashboard,
      active: true,
      title: "Dashboard"
    },  
    {
      icon: FiCalendar,
      active: false,
      title: "Schedule"
    },
    {
      icon: BiBarChartSquare,
      active: false,
      title: "Metrics"
    },   
    {
      icon: VscSettings,
      active: false,
      title: "Settings"
    },
] 

const SideBar = () => { 
  return ( 
    <div 
      className={"mr-[90px] tranistion-all duration-300 ease"}>
      <div className="flex flex-col items-center bg-sidebar w-[90px] z-50 fixed top-0 left-0 h-full">
        <div className="mt-[24px] flex items-center w-[36px] gap-x-[8px]">
          <div className="w-[6px] h-[6px] bg-[#fff] rounded-full" />
          <div className="w-[6px] h-[6px] bg-[#FFFFFF66] rounded-full" />
          <div className="w-[6px] h-[6px] bg-[#FFFFFF33] rounded-full" />
        </div>

        {/* Logo */}
        <div className="flex mt-[40px] mb-[24px]">
          <Image
            alt="logo"
            src="/assets/td_logo.png"
            width={24}
            height={26}
          />
        </div>

        {/* Nav Icons */}
        <div className='scroll-container max-h-[calc(100vh-265px)] px-4 pb-4'>
          <div className="flex flex-col">
            {nav_items.map((item, index) => (
              <div key={index}>
                <Tooltip>
                  <TooltipTrigger>
                    <div                   
                      className={`flex items-center justify-center hover:bg-sidebar-active active:bg-[#FFFFFF80] rounded-full w-[48px] h-[48px] mt-[12px] mb-[4px] text-[#FFFFFF80] hover:text-white cursor-pointer tranistion-all duration-300 ease ${item.active && "bg-sidebar-active text-white"}`}
                    >
                        <item.icon 
                          className='text-[20px]' 
                        />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent side="right">
                    <p>{item.title}</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            ))}
          </div>
        </div>

        {/* Log out */}
        <div className="flex border-b border-gray">
          <Tooltip>
            <TooltipTrigger>
              <div 
                className={"flex items-center justify-center hover:bg-red-500 active:bg-red-400 rounded-full w-[48px] h-[48px] mb-[14px] text-[#FFFFFF80] hover:text-white cursor-pointer tranistion-all duration-300 ease"}
              >
                  <MdLogout 
                    className='text-[20px]' 
                  />
              </div>              
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>Sign Out</p>
            </TooltipContent>
          </Tooltip>
        </div>

        {/* Toggle Light Modes */}
        <div className='w-full flex items-center justify-center mt-[28px]'>
          <div className='fixe-d bott-om-[28px]'>
            <ThemeToggle />
          </div>          
        </div>
      </div> 
    </div>
  )
}

export default SideBar