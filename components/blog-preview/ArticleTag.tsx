import React from "react";

interface ArticleTagProps {
    title: string;
}

const tagBaseStyle = "text-xs mr-2 py-1.5 px-4 text-black-600 rounded-2xl";

const textsStyles: any = [
    `${tagBaseStyle} bg-sky-100  text-sky-600`,
    `${tagBaseStyle} bg-green-100  text-green-600`,
    `${tagBaseStyle} bg-yellow-100  text-yellow-600`,
    `${tagBaseStyle}  bg-cyan-100  text-cyan-600`,
    `${tagBaseStyle}  bg-sky-100  text-sky-600`,
    `${tagBaseStyle}  bg-indigo-100  text-indigo-600`,
    `${tagBaseStyle}  bg-violet-100  text-violet-600`,
    `${tagBaseStyle}  bg-rose-100  text-rose-600`,
    `${tagBaseStyle}  bg-lime-100  text-lime-600`,
];
export default function ArticleTag({title}: ArticleTagProps) {
    const index = title.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0) % textsStyles.length;
    return <div className={textsStyles[index]}>{title}</div>;
}
