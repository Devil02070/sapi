'use client'

import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md"
import { useTheme } from 'next-themes'
import { useEffect, useState } from "react";
import { toast } from 'react-toastify'
export default function ToggleTheme() {
    const { theme, setTheme } = useTheme()
    const currentTheme = process.env.NEXT_PUBLIC_CURRENT_THEME || 'light';
    const [mounted, setMounted] = useState(false);
    const ToggleTheme = () => {
        if (theme == 'light') {
            setTheme(currentTheme)
            toast.success("Dark Theme Enabled", {
                icon: <MdOutlineDarkMode size={20} className="text-green-500" />,
                className: 'text-green-700 font-medium',
            })
        } else {
            setTheme('light')
            toast.success("Light Theme Enabled", {
                icon: <MdOutlineLightMode size={20} className="text-green-500" />,
                className: 'text-green-700 font-medium',
            })
        }
    }
    useEffect(() => {
        setMounted(true);
    }, []);
    if (!mounted) return null;
    return (
        <>
            <button className="text-primary text-sm md:text-lg p-3 btn-bg rounded-full cursor-pointer" onClick={() => ToggleTheme()}>
                {
                    theme == 'light' ?
                        <MdOutlineLightMode />
                        :
                        <MdOutlineDarkMode />
                }
            </button>
        </>
    )
}