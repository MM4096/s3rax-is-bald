"use client";

import {useRef} from "react";
import {BiInfoCircle} from "react-icons/bi";

export function Credit() {
	const modalRef = useRef<HTMLDialogElement>(null);

	return (<>
		<button className="btn btn-circle absolute bottom-2 right-2" onClick={() => {
			if (modalRef.current) {
				modalRef.current.showModal();
			}
		}}><BiInfoCircle/></button>


		<dialog className="modal" ref={modalRef}>
			<div className="modal-box">
				<p>Site developed by MM4096 and hosted by yeetcraft12.</p>
				<br/>
				<p>This site exists for entertainment purposes only. There is no direct evidence that the individual
					this site is about, s3rax, is bald. However, there is a distinct lack of evidence that s3rax is not
					bald. s3rax&apos;s baldness is left as an exercise for the viewer.</p>
			</div>
			<form method="dialog" className="modal-backdrop">
				<button>close</button>
			</form>
		</dialog>
	</>)
}