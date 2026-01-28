import {JoinIp} from "@/app/join/components/join-ip";
import {BackButton} from "@/app/components/backButton";

export default function JoinPage() {
	return (<>
		<div className="w-1/4">
			<div className="flex flex-row gap-2">
				<BackButton/>
				<h1>Join Minevane Today!</h1>
			</div>
			<h2>Use either IP to join Minevane!</h2>
		</div>
		<div className="mb-4"/>

		<div className="flex flex-col items-center justify-center w-1/4">
			<JoinIp ip="bald.s3raxisbald.com"/>
			<br/>
			<JoinIp ip="codzIsOld.s3raxisbald.com"/>
			<br/>
			<JoinIp ip="mv.s3raxisbald.com"/>
		</div>
	</>);
}