"use client";

import { Contributors } from "@/types/contributors";
import { CardEventTypeColorMap, CardsEventType } from "@/types/cardType";
import { ReactNode } from "react";
import Pill from "./pill";
import { Button, buttonVariants } from "./ui/button";

export type CustomActionsGitBox = {
    name: string;
    icon: ReactNode | any;
    action: (...x: any) => any;
};

export type CustomDescriptionAddons = {
    className: string[] | string;
    addons: ReactNode[] | ReactNode;
};

export interface GitBoxProps {
    hashId: string;
    className?: string;
    presetStyles?: {
        border: boolean;
    };
    title: string;
    description?: string;
    image?: string | string[];
    type?: CardsEventType;
    customDescriptionAddons?: CustomDescriptionAddons;
    customActionButtons?: CustomActionsGitBox[];
    contributersList?: Contributors[];
}

export default function GitBox({
    title,
    className,
    presetStyles = {
        border: true,
    },
    description,
    type,
    image,
    customActionButtons,
    customDescriptionAddons,
    contributersList,
    hashId,
}: GitBoxProps) {
    let innerClassName = "";
    if (presetStyles?.border) {
        innerClassName += " border-[1px] border-neutral-700";
    }

    return (
        <>
            <div className={`w-full h-fit ${className}`}>
                <div
                    className={`w-full h-40 rounded-lg bg-zinc-100 dark:bg-zinc-950 flex flex-col p-5 ${innerClassName}`}
                >
                    {/* Header - Ttile, Type, Actions */}
                    <div className="flex gap-2 justify-between items-center">
                        {/* Title */}
                        <span className="text-md flex-1 font-bold">
                            {title}
                        </span>
                        {/* Type */}
                        <span className="min-w-fit">
                            {type && (
                                <Pill
                                    content={type}
                                    color={CardEventTypeColorMap[type]}
                                    className=""
                                />
                            )}
                        </span>
                        {/* Actions */}
                        <div className="min-w-fit flex gap-2 justify-between">
                            {customActionButtons?.map((customAction) => (
                                <Button
                                    onClick={() => customAction.action()}
                                    className="p-2"
                                    variant={"custom-actions"}
                                    size={"xs_icon"}
                                >
                                    {customAction.icon}
                                </Button>
                            ))}
                        </div>
                    </div>

                    {/* Description, Addons, Image(s) */}
                    <div className="flex justify-between">
                        <p>{description}</p>
                        <RenderImage_or_S image_s={image}/>
                    </div>

                    {/* Footer - Contributions */}
                    <div className="">
                        
                    </div>
                </div>
            </div>
        </>
    );
}

function RenderImage_or_S ({image_s}:{image_s:GitBoxProps["image"]}) {
    if(image_s) {
        if(typeof image_s === "string") {
            return <img src={image_s}/>
        } else {
            return <>
                {
                    image_s.map(image => {
                        <img src={image}/>
                    })
                }
            </> 
        }
    }
}