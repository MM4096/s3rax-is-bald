"use client";

import {Children, cloneElement, CSSProperties, isValidElement, ReactNode, useEffect, useState} from "react";

export function FadeIn({children, fadeTime, timeBetweenFades}: {
	children: ReactNode,
	fadeTime: number,
	timeBetweenFades: number,
}) {
	const [visibleChildren, setVisibleChildren] = useState<ReactNode[]>([]);

	useEffect(() => {
		let cancelled = false;
		if (visibleChildren.length > 0) return;

		(async () => {
			const arr = Children.toArray(children);
			for (let i = 0; i < arr.length; i++) {
				console.log(`Fading in item ${i}`)
				if (cancelled) {
					console.warn(`Break triggered, stopping fade`)
					break;
				}
				const child = arr[i];

				if (!isValidElement(child)) {
					setVisibleChildren(prev => [...prev, child]);
					continue;
				}

				const props = child.props as { className?: string; style?: CSSProperties };
				const existingClass = props.className ?? "";
				const existingStyle = props.style ?? {};

				const start = cloneElement(child, {
					className: [existingClass, "opacity-0"].filter(Boolean).join(" "),
					style: {...existingStyle, transition: `opacity ${fadeTime}ms`},
				} as never);

				setVisibleChildren(prev => [...prev, start]);

				// ensure the browser applies the initial opacity before starting the transition
				await new Promise<void>(resolve => {
					requestAnimationFrame(() => resolve());
					setTimeout(resolve, 50);
				});

				const end = cloneElement(child, {
					className: [existingClass, "opacity-100"].filter(Boolean).join(" "),
					style: {...existingStyle, transition: `opacity ${fadeTime}ms`},
				} as never);

				setVisibleChildren(prev => prev.map((c, idx) => idx === prev.length - 1 ? end : c));

				// wait for the fade to finish, then the configured gap before next child
				await new Promise(resolve => setTimeout(resolve, timeBetweenFades));
			}
		})();

		return () => {
			cancelled = true;
		};
	}, [children, fadeTime, timeBetweenFades]);

	return <>{visibleChildren}</>;
}