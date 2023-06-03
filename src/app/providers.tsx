'use client'
import React, {ReactNode} from 'react';
import {ThemeProvider} from "next-themes";

type ProvidersProps = {
    children?: ReactNode;
}

function Providers({children}: ProvidersProps){
    return (
        <ThemeProvider enableSystem={true} attribute="class">
            <div className="dark:text-gray-200 text-gray-800 dark:bg-gray-700 bg-gray-200
            transition-colors duration-500 min-h-screen select-none">
                {children}
            </div>
        </ThemeProvider>
    );
}

export default Providers;