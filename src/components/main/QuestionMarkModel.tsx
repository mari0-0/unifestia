import {
  Environment,
	Lightformer,
	OrbitControls,
	PerspectiveCamera,
	View,
} from "@react-three/drei";
import { useRef, Suspense } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { QuestionMark } from "./QuestionMark";

gsap.registerPlugin(ScrollTrigger);

const QuestionMarkModel = () => {
	const cameraRef = useRef(null);

	// useGSAP(() => {
	// 	if (cameraRef.current) {
	// 		gsap.to(cameraRef.current.position, {
	// 			y: -30,
	// 			z: 35,
  //       // x: 0,
	// 			scrollTrigger: {
	// 				trigger: "#canvas",
	// 				start: "top 10%",
	// 				end: "70% 20%",
	// 				scrub: 1,
	// 				// pin: true,
	// 				// markers: true
	// 			},
	// 		});
	// 	}
	// }, [cameraRef.current]);

	return (
		<View className={`w-full h-full absolute`}>
			<PerspectiveCamera ref={cameraRef} makeDefault position={[0, 0, 0]} />
			<ambientLight intensity={1} />

      <group name="lights">
				<Environment resolution={256}>
					<group>
						<Lightformer
							form="rect"
							intensity={1}
							position={[-2, -1, 0]}
							scale={10}
							rotation-y={Math.PI / 2}
						/>
					</group>
				</Environment>

				<spotLight
					position={[-9, -1, -10]}
					angle={0.15}
					penumbra={1} // the penumbra is the soft edge of a shadow cast by a point light
					decay={0} // the amount the light dims as it moves away from the source
					intensity={Math.PI * 0.2} // the light intensity
					color={"#f8f9fa"}
				/>
			</group>

			<OrbitControls
				makeDefault
				enableZoom={false}
				enablePan={false}
				enableRotate={false}
				rotateSpeed={0.4}
        autoRotate={true}
				target={new THREE.Vector3(0, 0, 0)}
			/>
			<group position={[0, 0, 0]} rotation={[0,0,0]}>
				{/* <Suspense fallback={<Loader3D />}> */}
				<QuestionMark scale={[0.01, 0.01, 0.01]} />
				{/* </Suspense> */}
			</group>{" "}
		</View>
	);
};

export default QuestionMarkModel;
