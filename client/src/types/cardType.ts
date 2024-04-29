import { PillColors } from "@/components/pill"

 
export type CardsEventType = "Work" | "Project" | "Academic Project" | "Open Source" | "Initiaitve" | "Life Event"

export const CardEventTypeColorMap: {
    [key in CardsEventType]: PillColors
} = {
    "Work": "blue",
    "Project": "yellow",
    "Academic Project": "coolGray",
    "Initiaitve": "cyan",
    "Open Source": "green",
    "Life Event": "indigo",
}