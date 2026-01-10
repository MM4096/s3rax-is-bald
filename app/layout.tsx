import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import {ReactNode} from "react";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "s3raxisbald",
	description: "A website dedicated to our favorite bald dude, s3rax",
};

export default function RootLayout({
									   children,
								   }: Readonly<{
	children: ReactNode;
}>) {
	return (
		<html lang="en">
		<body
			className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			data-theme={"light"}
		>
		<div className="flex w-screen h-screen items-center justify-center flex-col">
			{children}
		</div>
		</body>
		</html>
	);
}
