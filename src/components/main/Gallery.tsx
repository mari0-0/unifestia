import React, { useEffect, useState } from "react";
import "./css/gallery.css";
import { spawn } from "child_process";
import { div } from "three/examples/jsm/nodes/Nodes.js";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Marquee from "react-fast-marquee";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Gallery = () => {
	const [currentCategory, setCurrentCategory] = useState("");
	const [currentIndex, setCurrentIndex] = useState(0);

	const categories = {
		campus: ["campus/1.jpg", "6.jpg", "campus/3.jpeg", "campus/4.avif"],
		events: ["1.jpeg", "2.jpeg", "3.jpeg"],
		sports: ["sports/1.jpeg", "sports/2.jpeg", "sports/4.jpg"],
		ncc: ["ncc/1.jpeg", "ncc/2.jpeg", "ncc/3.jpeg"],
		cultural: ["cultural/1.jpeg", "cultural/2.jpg", "cultural/3.jpeg"],
		activities: ["activities/1.jpeg", "activities/3.jpeg"],
		college: [
			"images/college1.jpg",
			"images/college2.jpg",
			"images/college3.jpg",
		],
	};

	const nextHandler = () => {
		const items = document.querySelectorAll(".item");
		if (items.length > 0) {
			document.querySelector(".slide").appendChild(items[0]);
		}
	};

	const prevHandler = () => {
		const items = document.querySelectorAll(".item");
		if (items.length > 0) {
			document.querySelector(".slide").prepend(items[items.length - 1]);
		}
	};

	useEffect(() => {
		const next = document.querySelector(".next");
		const prev = document.querySelector(".prev");

		next.addEventListener("click", nextHandler);
		prev.addEventListener("click", prevHandler);

		return () => {
			next.removeEventListener("click", nextHandler);
			prev.removeEventListener("click", prevHandler);
		};
	}, []);

	const openCarousel = (category) => {
		setCurrentCategory(category);
		setCurrentIndex(0);
		document.getElementById("carousel-image").src = categories[category][0];
		document.getElementById("image-carousel").style.display = "flex";
	};

	const closeCarousel = () => {
		document.getElementById("image-carousel").style.display = "none";
	};

	const changeSlide = (direction) => {
		let newIndex = currentIndex + direction;
		if (newIndex >= categories[currentCategory].length) {
			newIndex = 0;
		} else if (newIndex < 0) {
			newIndex = categories[currentCategory].length - 1;
		}
		setCurrentIndex(newIndex);
		document.getElementById("carousel-image").src =
			categories[currentCategory][newIndex];
	};

	return (
		<>
			<Navbar />
			<section className="gallery-section w-fit h-fit overflow-hidden">
				<div className="container-gallery overflow-x-hidden">
					<div className="slide">
						<div className="item bg-[url('/images/slider/1.jpeg')]"></div>
						<div className="item bg-[url('/images/slider/2.jpeg')]"></div>
						<div className="item bg-[url('/images/slider/3.jpeg')]"></div>
						<div className="item bg-[url('/images/slider/4.jpeg')]"></div>
						<div className="item bg-[url('/images/slider/5.jpeg')]"></div>
						<div className="item bg-[url('/images/slider/6.jpg')]"></div>
					</div>
					<div className="button">
						<button className="prev w-4 h-4">
							<div className="w-full h-full flex-center">
								<FaArrowLeft />
							</div>
						</button>
						<button className="next w-4 h-4">
							<div className="w-full h-full flex-center">
								<FaArrowRight />
							</div>
						</button>
					</div>
				</div>

				<div className="mt-[100vh] w-full ">
					<h2 className="font-acma font-semibold text-center text-5xl mx-5 mt-32">
						Campus
					</h2>

					<Marquee className="mt-10">
						<div className="flex items-center justify-between gap-10">
							<img
								id="galleryImg"
								src="/images/campus/2.jpeg"
								alt=""
								height={315}
								width={450}
							/>
							<img
								id="galleryImg"
								src="/college/main1.jpg"
								alt=""
								height={315}
								width={450}
							/>
							<img
								id="galleryImg"
								src="/images/campus/4.avif"
								alt=""
								height={315}
								width={450}
							/>
							<img
								id="galleryImg"
								className="mr-10"
								src="/images/campus/5.jpeg"
								alt=""
								height={315}
								width={450}
							/>
						</div>
					</Marquee>
					<h2 className="font-acma font-semibold text-center text-5xl mx-5 mt-32">
						Cultural
					</h2>

					<Marquee className="mt-10">
						<div className="flex items-center justify-between gap-10">
							<img
								id="galleryImg"
								src="/images/cultural/1.jpeg"
								alt=""
								height={315}
								width={450}
							/>
							<img
								id="galleryImg"
								src="/images/cultural/2.jpg"
								alt=""
								height={315}
								width={450}
							/>
							<img
								id="galleryImg"
								src="/images/cultural/3.jpeg"
								alt=""
								height={315}
								width={450}
							/>
							<img
								id="galleryImg"
								className="mr-10"
								src="/images/cultural/4.jpeg"
								alt=""
								height={315}
								width={450}
							/>
						</div>
					</Marquee>

					<h2 className="font-acma font-semibold text-center text-5xl mx-5 mt-32">
						NCC
					</h2>
					<Marquee className="my-10">
						<div className="flex items-center justify-between gap-10">
							<img
								id="galleryImg"
								src="/images/ncc/1.jpeg"
								alt=""
								height={315}
								width={450}
							/>
							<img
								id="galleryImg"
								src="/images/ncc/2.jpeg"
								alt=""
								height={315}
								width={450}
							/>
							<img
								id="galleryImg"
								src="/images/ncc/3.jpeg"
								alt=""
								height={315}
								width={450}
							/>
							<img
								id="galleryImg"
								className="mr-10"
								src="/images/ncc/4.png"
								alt=""
								height={315}
								width={450}
							/>
						</div>
					</Marquee>

					<h1 className="mt-32 font-acma text-5xl font-semibold text-center">
						Activities
					</h1>

					<div className="flex items-center justify-between gap-4">
						<img
							id="galleryImg"
							src="/images/activities/1.jpeg"
							alt=""
							height={315}
							width={450}
						/>
						<img
							id="galleryImg"
							src="/images/activities/2.jpeg"
							alt=""
							height={315}
							width={450}
						/>
						<img
							id="galleryImg"
							src="/images/activities/3.jpeg"
							alt=""
							height={315}
							width={450}
						/>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
};

export default Gallery;
