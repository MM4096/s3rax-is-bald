import SkinRender from "@/app/components/skin_render";
import {BiArrowFromRight, BiRightArrow, BiSolidRightArrow, BiSolidRightArrowAlt} from "react-icons/bi";

export default function Home() {
	return (
		<>
			<h1>s3raxisbald.com</h1>
			<SkinRender/>
			<h3>A website dedicated to our favorite bald-headed co-owner of Minevane</h3>
			<button className="btn btn-special">Learn More <BiRightArrow/> </button>
		</>
	);
}
