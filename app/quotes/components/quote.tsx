import {ReactNode} from "react";

export function Quote({children, author, context}: {
	children: ReactNode,
	author?: string,
	context?: string
}) {
	return (<div className="bg-base-300 p-4 rounded-lg shadow-lg text-center mb-5 ml-auto mr-auto transition-all transition-500 hover:shadow-xl">
		<h3>{children}</h3>
		<p className="text-sm"><span className="italic">- {author}</span> {context ? (<span className="">({context})</span>) : (<></>)}</p>
	</div>);
}