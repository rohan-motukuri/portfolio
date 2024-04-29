"use client";
import GitBox from "@/components/gitBox";
import Image from "next/image";

export default function Home() {
    return (
        <main className="flex min-h-screen w-screen flex-col items-center justify-between bg-zinc-900">
            <GitBox
                title="Hello World"
                className="p-3"
                type="Project"
				customActionButtons={[
					{
						name: "Hi",
						action: ()=>console.log("Hi")
					}
				]}
                hashId="1"
            />
        </main>
    );
}

function PreviousAsset() {
    return (
        <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
        >
            <h2 className="mb-3 text-2xl font-semibold">
                Learn{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
                Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
        </a>
    );
}
