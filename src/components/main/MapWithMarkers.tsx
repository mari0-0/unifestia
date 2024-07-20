import { useRef, useState } from "react";
import "./css/MapWithMarkers.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { completedPlaces, upComingPlaces } from "@/constants";
import { CiClock2 } from "react-icons/ci";
import { BiLinkAlt } from "react-icons/bi";
import PointerModel from "./PointerModel";

const windowWidth = window.innerWidth;
console.log(windowWidth);

const MapWithMarkers = () => {
	const mapRef = useRef(null);
	const eventsRef = useRef(null);
	const [activeBtn, setActiveBtn] = useState("upcoming");
	const [isSmallScrn, _] = useState(window.innerWidth < 640 ? false : true);
	let places = upComingPlaces;

	if (activeBtn === "upcoming") {
		places = upComingPlaces;
	} else {
		places = completedPlaces;
	}

	useGSAP(() => {
		gsap.from(eventsRef.current, {
			opacity: 0,
			x: 100,
			scrollTrigger: {
				trigger: mapRef.current,
				start: "top 70%",
			},
		});

		gsap.from("#eventsHeading, #eventsPara", {
			opacity: 0,
			x: 100,
			scrollTrigger: {
				trigger: "#eventsHeading",
				start: "top 70%",
			},
		});

		gsap.from("#eventButtons", {
			opacity: 0,
			x: 100,
			scrollTrigger: {
				trigger: "#eventButtons",
				start: "top 70%",
			},
		});

		if (isSmallScrn) {
			gsap.from(mapRef.current, {
				scrollTrigger: {
					trigger: mapRef.current,
					endTrigger: "#events",
					start: "top 10%",
					end: "bottom bottom",
					pin: true,
					scrub: true,
				},
			});
		}

		gsap.from(mapRef.current, {
			opacity: 0,
			x: -300,
			scrollTrigger: {
				trigger: mapRef.current,
				start: "top 80%",
			},
		});

		// gsap.to(".marker", {
		// 	scale: 1.1,
		// 	ease: "circ.inOut",
		// 	duration: 1,
		// 	repeat: -1,
		// 	yoyo: true,
		// });

		return () => {
			gsap.set(mapRef.current, { clearProps: "all" });
		};
	}, []);

	const [hoveredPlaceName, setHoveredPlaceName] = useState("");

	return (
		<>
			<PointerModel />

			<div
				id="events-heading"
				className="overflow-x-hidden flex-center flex-col"
			>
				<h1
					id="eventsHeading"
					className="mt-10 mb-4 text-center text-[#222] font-bold text-9xl"
				>
					Events
				</h1>
				<p
					id="eventsPara"
					className="mb-5 max-w-md text-center px-5 font-light font-poppins text-gray-400"
				>
					Stay informed about all the exciting events happening at your college.
					From cultural festivals to academic seminars, find all the details
					here and register with just a click.
				</p>
			</div>
			<div
				id="eventButtons"
				className="w-fit mr-[10vw] ml-auto flex gap-3 justify-end font-poppins text-sm border-2 p-2 border-slate-200 rounded-xl overflow-x-hidden"
			>
				<button
					className={`${
						activeBtn === "upcoming" && "active-btn"
					} p-3 w-fit rounded-[0.5rem] text-[#222]`}
					onClick={() => setActiveBtn("upcoming")}
				>
					Upcoming
				</button>
				<button
					className={`${
						activeBtn === "completed" && "active-btn"
					} p-3 w-fit rounded-[0.5rem] text-[#222]`}
					onClick={() => setActiveBtn("completed")}
				>
					completed
				</button>
			</div>
			<div className="py-12 pt-3 px-[10vw] flex sm:flex-row flex-col overflow-x-hidden">
				<div className="w-full h-full">
					<div
						ref={mapRef}
						id="map"
						className="map-class mx-auto border-slate-200 border-2 max-w-lg h-full"
					>
						<img
							height={400}
							width={400}
							src="./rvr map.jpg"
							alt="College Map"
							className="w-full h-full object-cover"
						/>
						{places.map((place) => (
							<div
								key={place.name}
								className="z-[100] marker group overflow-y-visible absolute lg:w-3 lg:h-3 md:w-2 md:h-2 w-1 h-1 rounded-full transform -translate-x-1/2 -translate-y-1/2"
								style={{ left: `${place.x}%`, top: `${place.y}%` }}
							>
								<div
									className={`z-[30] tooltip line-clamp-3 max-w-sm p-2 font-poppins font-light absolute ${
										hoveredPlaceName === place.name ? "block" : "hidden"
									} top-[125%] left-1/2 -translate-x-1/2 bg-[#222] text-[#FFF6E0] rounded-[5px] whitespace-nowrap group-hover:block`}
								>
									<h1 className="mb-2 font-acma font-bold text-lg">
										{place.name}
									</h1>
									{place.events.map((event, i) => (
										<h2 key={i} className="text-sm">
											- {event.name}
										</h2>
									))}
								</div>
							</div>
						))}
					</div>
					<h1 className="pt-5 text-center text-[#222] font-poppins sm:text-lg text-sm">
						RVR & JC College of Engineering Map
					</h1>
				</div>

				<div
					ref={eventsRef}
					id="events"
					className="sm:pl-7 sm:mt-0 mt-10 w-full"
				>
					<div className="flex flex-col gap-3">
						{places.map((place) =>
							place.events.map((event, i) => (
								<div
									key={i}
									className="event font-poppins p-4 rounded-xl text-xl cursor-pointer flex items-center gap-4 border-2 border-slate-200"
									onMouseEnter={() => setHoveredPlaceName(place.name)}
									onMouseLeave={() => setHoveredPlaceName("")}
								>
									<div className="flex flex-col justify-center items-center">
										<h1 className="text-red-500 font-bold">{event.month}</h1>
										<h1 className="text-[#222] font-semibold">{event.date}</h1>
									</div>

									<span className="w-[2px] h-12 bg-slate-200"></span>

									<div className="w-full flex flex-col justify-center items-start">
										<div className="w-full flex justify-between">
											<h1 className="font-semibold max-w-md font-sm">
												{event.name}
											</h1>
											{event.fromTime || event.toTime ? (
												<h2 className="w-1/5 font-light text-sm flex justify-center items-center gap-1">
													<span className="mb-[2px]">
														<CiClock2 />
													</span>
													{event.toTime
														? event.fromTime + "-" + event.toTime
														: event.fromTime}
												</h2>
											) : undefined}
										</div>
										<div className="w-full flex justify-between items-center">
											<h1 className="font-light text-slate-600 text-[1rem]">
												Venue: {place.name}
											</h1>
											{activeBtn === "upcoming" && event.registerLink ? (
												<h1 className="flex gap-1 items-center justify-center font-light text-blue-600 text-[1rem]">
													<BiLinkAlt />
													Register Now
												</h1>
											) : undefined}
										</div>
									</div>
								</div>
							))
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default MapWithMarkers;
