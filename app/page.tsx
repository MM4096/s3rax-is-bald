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
			<Link href="/quotes" className="btn-special">See what others say about s3rax <BiRightArrow/></Link>
		</>
	);
}
