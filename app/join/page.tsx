import {JoinIp} from "@/app/join/components/join-ip";

export default function JoinPage() {
	return (<>
		<h1>Join Minevane Today!</h1>
		<h3>Use either of the following two IPs to join the Minevane Minecraft Server today:</h3>
		<div className="mb-4"/>

		<div className="flex flex-col items-center justify-center w-1/4">
			<JoinIp ip="s3raxisbald.com"/>
			<br/>
			<JoinIp ip="codzIsOld.s3raxisbald.com"/>
		</div>
	</>);
}