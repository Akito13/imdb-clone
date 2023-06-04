'use client'
import React, {useEffect, useState} from 'react';
import {MdLightMode, MdDarkMode} from "react-icons/all";
import {useTheme} from "next-themes";

type DarkModeSwitchProps = {

};

function DarkModeSwitch() {
    const {setTheme, theme, systemTheme} = useTheme();
    const currentTheme = theme === "system" ? systemTheme : theme;
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);
    return (
        <>
            {mounted && currentTheme === "dark"
                ? <MdLightMode className="cursor-pointer hover:text-amber-600 text-2xl"  onClick={event => setTheme("light")}/>
                : <MdDarkMode  className="cursor-pointer hover:text-amber-600 text-2xl" onClick={event => setTheme("dark")}/>}
        </>
    );
}

export default DarkModeSwitch;