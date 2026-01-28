"use client";

import Link from "next/link";
import {BiLeftArrow} from "react-icons/bi";

export function BackButton() {
	return <Link className="btn btn-circle" href="/"><BiLeftArrow/></Link>
}