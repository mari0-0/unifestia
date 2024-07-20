import {
  Environment,
	Lightformer,
	OrbitControls,
	PerspectiveCamera,
	View,
} from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Guitar } from "./Guitar";

gsap.registerPlugin(ScrollTrigger);

const GuitarModel = () => {
	const cameraRef = useRef(null);

  useEffect(() => {
    if (cameraRef.current) {
      gsap.to(cameraRef.current.position, {
				y: -30,
				z: 35,
        scrollTrigger: {
          trigger: "#pointerObj",
          start: "top 10%",
          end: "bottom 60%",
          scrub: 1,
          // pin: true,
          // markers: true
        },
      });
    }
  }, []);

	return (
		<View className={`w-full h-full absolute`}>
			<PerspectiveCamera ref={cameraRef} makeDefault position={[-50, 3, 30]} />
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
				target={new THREE.Vector3(0, 0, 0)}
			/>
			<group position={[52, 3, 45]} rotation={[-1.2, 0, -0.4]}>
				{/* <Suspense fallback={<Loader3D />}> */}
				<Guitar scale={[0.12, 0.15, 0.15]} />
				{/* </Suspense> */}
			</group>{" "}
		</View>
	);
};

export default GuitarModel;
