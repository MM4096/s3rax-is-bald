import SkinRender from "@/app/components/skin_render";
import {BiRightArrow} from "react-icons/bi";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<h1>s3raxisbald.com</h1>
			<SkinRender/>
			<h3>A website dedicated to our favorite bald-headed co-owner of Minevane</h3>
			<div className="mb-4"/>
			<div className="flex flex-col gap-2 items-center justify-center w-1/3">
				<Link href="/quotes" className="btn-special w-full"><span>See what others say about s3rax</span> <BiRightArrow/></Link>
				<Link href="/s3rax-the-bald" className="btn-special w-full"><span>Read an amazing poem by
					TheRealBigBeard</span> <BiRightArrow/></Link>
				<Link href="/join" className="btn-special w-full"><span>Join Minevane today!</span> <BiRightArrow/></Link>
			</div>

		</>
	);
}
