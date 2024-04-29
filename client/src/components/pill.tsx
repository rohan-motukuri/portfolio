import { ReactNode } from "react";

const colorMatch = {
    gray: {
        border: "border-gray-600",
        background: "bg-[#7180961a]",
        text: "text-gray-400",
    },

    red: {
        border: "border-red-600",
        background: "bg-[#e3342f1a]",
        text: "text-red-400",
    },

    yellow: {
        border: "border-yellow-600",
        background: "bg-[#d69e2e1a]",
        text: "text-yellow-400",
    },

    green: {
        border: "border-green-600",
        background: "bg-[#38a1691a]",
        text: "text-green-400",
    },

    blue: {
        border: "border-blue-600",
        background: "bg-[#3490dc1a]",
        text: "text-blue-400",
    },

    indigo: {
        border: "border-indigo-600",
        background: "bg-[#6574cd1a]",
        text: "text-indigo-400",
    },

    purple: {
        border: "border-purple-600",
        background: "bg-[#805ad51a]",
        text: "text-purple-400",
    },

    pink: {
        border: "border-pink-600",
        background: "bg-[#f66d9b1a]",
        text: "text-pink-400",
    },

    orange: {
        border: "border-orange-600",
        background: "bg-[#d4a23e1a]",
        text: "text-orange-400",
    },

    teal: {
        border: "border-teal-600",
        background: "bg-[#3197951a]",
        text: "text-teal-400",
    },

    cyan: {
        border: "border-cyan-600",
        background: "bg-[#6cb2eb1a]",
        text: "text-cyan-400",
    },

    lime: {
        border: "border-lime-600",
        background: "bg-[#84cc161a]",
        text: "text-lime-400",
    },

    rose: {
        border: "border-rose-600",
        background: "bg-[#ef44441a]",
        text: "text-rose-400",
    },

    warmGray: {
        border: "border-warmGray-600",
        background: "bg-[#57534e1a]",
        text: "text-warmGray-400",
    },

    coolGray: {
        border: "border-coolGray-600",
        background: "bg-[#6b72801a]",
        text: "text-coolGray-400",
    },

    blueGray: {
        border: "border-blueGray-600",
        background: "bg-[#64748b1a]",
        text: "text-blueGray-400",
    },
};

export type PillColors = keyof typeof colorMatch;

export default function Pill({
    content,
    color,
    className,
}: {
    content: ReactNode;
    color: PillColors;
    className?: string;
}) {
    const colorMatched = colorMatch[color];
    const background = colorMatched.background;
    const border = colorMatched.border;
    const text = colorMatched.text;

    return (
        <div
            className={`w-fit rounded-2xl  border-[1px]  px-4 py-1 text-xs ${background} ${border} ${text} ${className} `}
        >
            {content}
        </div>
    );
}
