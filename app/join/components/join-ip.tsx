"use client";

export function JoinIp({ip}: {
	ip: string,
}) {
	return (<input className="join-ip" value={ip} disabled={false} readOnly={true} onClick={(e) => {
		(e.target as HTMLInputElement).select()
		navigator.clipboard.writeText(ip).then()
	}}/>)
}