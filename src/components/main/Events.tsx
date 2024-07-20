import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { upComingPlaces } from "@/constants";
import { GoCalendar } from "react-icons/go";
import { SiGooglemaps } from "react-icons/si";
import Countdown from "./Countdown";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Events() {
	const [view, setView] = useState("grid");

	const events = upComingPlaces.flatMap((place) =>
		place.events.map((event) => ({
			...event,
			location: place.name,
		}))
	);

	useGSAP(() => {
		gsap.from("#eventsTitle", {
			opacity: 0,
			duration: 1,
			ease: "power2.inOut",
			x: -200,
		});

		gsap.from("#eventsMainImg, #eventButtons", {
      opacity: 0,
      duration: 1,
      ease: "power2.inOut",
      x: 200,
    })

		gsap.from("#eventCard", {
			x: 200,
			opacity: 0,
			duration: 1,
      ease: "power2.inOut",
      stagger: 0.1,
			scrollTrigger: {
				trigger: "#eventCard",
        start: "top 90%",

			}
		})
	}, []);

	return (
		<>
			<Navbar />
			<div>
				<div className="px-[10vw] flex flex-col gap-4 md:flex-row justify-between !overflow-x-hidden">
					<section
						id="eventsTitle"
						className="flex flex-col items-center justify-center py-12 md:py-16 lg:py-20 !overflow-x-hidden"
					>
						<h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
							Upcoming Events
						</h1>
						<p className="mt-3 max-w-3xl text-md sm:mt-5 text-muted-foreground font-poppins text-gray-500 ">
							Discover our upcoming events and join us for an unforgettable
							experience.
						</p>
					</section>
					<section id="eventsMainImg" className="relative h-[70vh] w-[70vh] overflow-hidden !overflow-x-hidden">
						<img
							src="/rvr map.jpg"
							alt="Events Map"
							className="h-full w-full object-cover aspect-square"
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
					</section>
				</div>

				<section id="eventButtons" className="container mx-auto py-12 md:py-16 lg:py-20 !overflow-x-hidden">
					<div className="flex justify-end items-center gap-4 mb-6">
						<Button variant="ghost" size="sm" onClick={() => setView("grid")}>
							<LayoutGridIcon className="w-4 h-4 mb-1 mr-2" />
							<span>Grid View</span>
						</Button>
						<Button variant="ghost" size="sm" onClick={() => setView("list")}>
							<ListIcon className="w-4 h-4 mb-1 mr-2" />
							List View
						</Button>
					</div>
					{view === "grid" ? (
						<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 !overflow-x-hidden">
							{events.map((event, index) => {
								if (
									calculateCountdown(event.month, event.date, event.fromTime)
								) {
									return (
										<Card id="eventCard" key={index}>
											{event.imgSrc && event.imgSrc !== "/path/to/image" ? (
												<img
													src={event.imgSrc}
													className="h-56 w-56 object-cover rounded-l-md"
												/>
											) : (
												<div className="p-4 text-sm w-full h-56 text-center flex-center bg-custom-gradient">
													{event.name}
												</div>
											)}
											<CardContent>
												<div className="mt-4 space-y-2 font-poppins">
													<h3 className="text-xl font-semibold">
														{event.name}
													</h3>
													<p className="text-muted-foreground text-gray-500 flex items-center gap-2">
														<GoCalendar />
														{`${event.month} ${event.date}, ${
															event.fromTime && event.toTime
																? event.fromTime + " - " + event.toTime
																: event.fromTime
														}`}
													</p>
													<p className="text-muted-foreground text-gray-500 flex items-center gap-2">
														<SiGooglemaps />
														{event.location}
													</p>
													<p className="text-muted-foreground text-gray-500">
														{event.description}
													</p>
												</div>
											</CardContent>
											<CardFooter className="flex items-center justify-between">
												<Button
													className="font-poppins font-semibold"
													variant="outline"
													size="sm"
													disabled={event.registerLink ? false : true}
												>
													<a
														href={event.registerLink}
														target="_blank"
														rel="noopener noreferrer"
													>
														Register Now
													</a>
												</Button>
												<Countdown
													month={event.month}
													date={event.date}
													time={event.fromTime && event.fromTime}
												/>
											</CardFooter>
										</Card>
									);
								}
							})}
						</div>
					) : (
						<div className="space-y-6">
							{events.map((event, index) => {
								if (
									calculateCountdown(event.month, event.date, event.fromTime)
								) {
									return (
										<Card key={index} className="flex flex-row">
											{event.imgSrc && event.imgSrc !== "/path/to/image" ? (
												<img
													src={event.imgSrc}
													className="h-56 w-56 object-cover rounded-l-md"
												/>
											) : (
												<div className="p-4 text-sm w-56 h-56 text-center flex-center bg-custom-gradient">
													{event.name}
												</div>
											)}

											<CardContent>
												<div className="space-y-3 font-poppins py-3">
													<h3 className="text-xl font-semibold">
														{event.name}
													</h3>
													<p className="text-muted-foreground">{`${
														event.month
													} ${event.date}, ${
														event.fromTime && event.toTime !== ""
															? event.fromTime + " - " + event.toTime
															: event.fromTime
													}`}</p>
													<p className="text-muted-foreground">
														{event.location}
													</p>
													<p className="text-muted-foreground">
														{event.description}
													</p>
													<div className="flex gap-4">
														<Button
															className="font-poppins font-semibold"
															variant="outline"
															size="sm"
															disabled={event.registerLink ? false : true}
														>
															Register Now
														</Button>
														<Countdown
															month={event.month}
															date={event.date}
															time={event.fromTime && event.fromTime}
														/>
													</div>
												</div>
											</CardContent>
										</Card>
									);
								}
							})}
						</div>
					)}
				</section>
			</div>
			<Footer />
		</>
	);
}

function calculateCountdown(
	month: string,
	date: string,
	time: string = "00:00"
) {
	const now = new Date();
	const eventTime = new Date(`${month} ${date}, ${now.getFullYear()} ${time}`);
	const timeDifference = eventTime.getTime() - now.getTime();

	if (timeDifference < 0) return false;
	else return true;
}

function LayoutGridIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<rect width="7" height="7" x="3" y="3" rx="1" />
			<rect width="7" height="7" x="14" y="3" rx="1" />
			<rect width="7" height="7" x="14" y="14" rx="1" />
			<rect width="7" height="7" x="3" y="14" rx="1" />
		</svg>
	);
}

function ListIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<line x1="8" x2="21" y1="6" y2="6" />
			<line x1="8" x2="21" y1="12" y2="12" />
			<line x1="8" x2="21" y1="18" y2="18" />
			<line x1="3" x2="3.01" y1="6" y2="6" />
			<line x1="3" x2="3.01" y1="12" y2="12" />
			<line x1="3" x2="3.01" y1="18" y2="18" />
		</svg>
	);
}
