import { useEffect } from "react";
import "./css/gallery.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Marquee from "react-fast-marquee";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Gallery = () => {

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
