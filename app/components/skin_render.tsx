"use client";

import {useEffect, useRef} from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
// @ts-expect-error This does exist
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh } from "three";
import {randFloat} from "three/src/math/MathUtils";

function MeshComponent() {
	const fileUrl = "/s3_skin.gltf";
	const mesh = useRef<Mesh>(null!);
	const gltf = useLoader(GLTFLoader, fileUrl);

	useFrame(() => {
		mesh.current.rotation.y += 0.025;
	});

	useEffect(() => {
		if (mesh) {
			mesh.current.rotation.x = Math.PI / 8;
			mesh.current.rotation.y = randFloat(0, Math.PI * 2);
		}
	}, [mesh]);

	return (
		<mesh ref={mesh}>
			<primitive object={gltf.scene} />
		</mesh>
	);
}

export default function SkinRender() {
	return (
		<div className="min-h-96">
		<Canvas camera={{position: [0, 0, 4]}}>
			<ambientLight intensity={1}/>
			<MeshComponent/>
			<OrbitControls/>
		</Canvas>
		</div>
	);
}
