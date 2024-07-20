import { OrbitControls, PerspectiveCamera, View } from "@react-three/drei";
import { useRef, useEffect, Suspense } from "react";
import Lights from "./Lights";
import * as THREE from "three"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { Pointer } from "./Pointer";

gsap.registerPlugin(ScrollTrigger)

const PointerModel = () => {
	const cameraRef = useRef(null);

	useGSAP(() => {
		if (cameraRef.current) {
			gsap.to(cameraRef.current.position, {
				y: -1,
				z: 1,
				x: -3,
				scrollTrigger: {
					trigger: "#pointerObj",
					start: "top 20%",
					end: "bottom 60%",
					scrub: 1,
					// pin: true,
					// markers: true
				},

			});
		}
	}, [cameraRef.current]);

	return (
		<View id="pointerObj" className={`w-full h-full absolute`}>
			<PerspectiveCamera ref={cameraRef} makeDefault position={[-4, 2, 4]} />
			<ambientLight intensity={0.3} />
			<Lights />
			<OrbitControls
				makeDefault
				enableZoom={false}
				enablePan={false}
				enableRotate={false}
				rotateSpeed={0.4}
				target={new THREE.Vector3(0, 0, 0)}
			/>
			<group position={[-2, 1, -2]} rotation={[0, 0, 0]}>
				{/* <Suspense fallback={<Loader3D />}> */}
					<Pointer scale={[1, 1, 1]} />
				{/* </Suspense> */}
			</group>
		</View>
	);
};

export default PointerModel;