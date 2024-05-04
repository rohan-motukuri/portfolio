"use client";

import { Contributors } from "@/types/contributors";
import { CardEventTypeColorMap, CardsEventType } from "@/types/cardType";
import { ReactNode } from "react";
import Pill from "./pill";
import { Button, buttonVariants } from "./ui/button";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "./ui/carousel";
import { Card, CardContent } from "./ui/card";

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
                    className={`w-full h-fit rounded-lg bg-zinc-100 dark:bg-zinc-950 flex flex-col gap-1 p-5 ${innerClassName}`}
                >
                    {/* Header - Ttile, Type, Actions */}
                    <div className="flex gap-2 h-fit justify-between items-center">
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
                    {(!!description?.length || !!image?.length) && (
                        <div className="flex justify-between h-fit">
                            <p className=" text-sm ">{description}</p>
                            <RenderImage_or_S
                                image_s={image}
                                parentCardHash={hashId}
                            />
                        </div>
                    )}

                    {/* Footer - Contributions */}
                    {contributersList?.length ?? <div className=""></div>}
                </div>
            </div>
        </>
    );
}

function RenderImage_or_S({
    image_s,
    className = "w-40 h-40",
    parentCardHash,
}: {
    image_s: GitBoxProps["image"];
    className?: string;
    parentCardHash: string;
}) {
    if (image_s) {
        if (typeof image_s === "string") {
            return (
                <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                        <img src={image_s} />
                    </CardContent>
                </Card>
            );
        } else {
            return (
                <Carousel className="w-32">
                    <CarouselContent>
                        {image_s.map((image, index) => (
                            <CarouselItem
                                key={
                                    "GitCard_" +
                                    parentCardHash +
                                    "ImageContent_" +
                                    index
                                }
                            >
                                <div className="">
                                    <Card>
                                        <CardContent className="flex aspect-square items-center justify-center p-6">
                                            <img src={image} />
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            );
        }
    }
}
