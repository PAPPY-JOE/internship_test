'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { GoSun } from 'react-icons/go'
import { HiOutlineMoon } from 'react-icons/hi'
import { Tooltip, TooltipContent, TooltipTrigger } from '../../components/ui/tooltip'

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false)
  const {theme, setTheme} = useTheme()

  const handleLightMode = () => setTheme("light")
  const handleDarkMode = () => setTheme("dark")

  useEffect(() => setMounted(true), [])

  if (!mounted) return 

  return (
    <div className="flex items-center justify-center text-xl tranistion-all duration-300 ease hover:rotate-30 active:bg-[#FFFFFF80] rounded-full w-[48px] h-[48px]">
        {theme === "dark" ? (
        <Tooltip>
            <TooltipTrigger>
                <div 
                    className={"cursor-pointer flex justify-center items-center gap-[6px]  h-[34px] rounded-full font-semibold"}
                    onClick={() => handleLightMode()}
                >
                    <GoSun /> 
                </div>
            
            </TooltipTrigger>
            <TooltipContent side="right">
                <p>Light Mode</p>
            </TooltipContent>
        </Tooltip>

        ) : (
           <Tooltip>
                <TooltipTrigger>
                    <div 
                        className={"cursor-pointer flex justify-center items-center gap-[6px] h-[34px] rounded-full font-semibold text-[#FFFFFF80]"}
                        onClick={() => handleDarkMode()}
                    >
                        <HiOutlineMoon /> 
                    </div>
            
                </TooltipTrigger>
                <TooltipContent side="right">
                    <p>Dark Mode</p>
                </TooltipContent>
            </Tooltip>
        )}

    </div>
  )
}

export default ThemeToggle