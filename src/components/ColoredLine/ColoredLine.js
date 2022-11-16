import React from "react";


const ColoredLine = ({ text }) => {
    return (
        <div class="inline-flex justify-center items-center w-full">
            <hr class="my-8 w-64 h-px bg-gray-200 border-0 dark:bg-gray-700"/>
            <span class="absolute left-1/2 px-3 font-medium text-gray-900 bg-white -translate-x-1/2 dark:text-white dark:bg-gray-900">{text}</span>
        </div>
    )


};

export default ColoredLine;