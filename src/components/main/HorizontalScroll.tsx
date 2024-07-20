import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger)
const HorizontalScroll = () => {
	useGSAP(() => {
		const horText = document.getElementById("hor-text");

		function getScrollAmount() {
			let textWidth = horText?.scrollWidth ?? 0;
			return -(textWidth - window.innerWidth);
		}

		const tween = gsap.to(horText, {
			x: getScrollAmount,
			duration: 3,
			ease: "none",
		});

		ScrollTrigger.create({
			trigger: ".textWrapper",
			start: "top 20%",
			end: () => `+=${getScrollAmount() * -1}`,
			scrub: 1,
			pin: true,
			animation: tween,
			invalidateOnRefresh: true,
		});

	}, []);

	return (
		<>
			{/* <div className="h-[50vh] w-full"></div> */}
			<div className="textWrapper w-[100vw] overflow-x-hidden whitespace-nowrap">
				<div id="hor-text">
					<h1 className="text-[20vw] px-[10vw] bg-blue-500 font-semibold inline-block">
						NEWS & ANNOUNCEMENTS
					</h1>
				</div>
			</div>
			<div className="h-[30vh] w-full"></div>
		</>
	);
};

export default HorizontalScroll;
