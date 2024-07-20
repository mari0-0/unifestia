import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./css/Hero.css";
import { heroImages } from "@/constants";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
	const heroRef = useRef(null);

	useGSAP(() => {
		const heroElement = heroRef.current;
		gsap.fromTo(
			heroElement,
			{ opacity: 0 },
			{ opacity: 1, duration: 1, ease: "power2.inOut" }
		);

		gsap.fromTo(
			".color-change",
			{
				color: "#fff",
			},
			{
				duration: 3,
				color: "#2563eb",
			}
		);

		const footer: any = document.querySelector(".end-scroll-img");
		const lastCard: any = document.querySelector(".card.scroll");
		const pinnedSections = gsap.utils.toArray(".pinned");

		pinnedSections.forEach((section: any, index, sections) => {
			let img = section.querySelector(".img");
			let nextSection = sections[index + 1] || lastCard;
			let endScalePoint = `top+=${
				nextSection.offsetTop - section.offsetTop
			} top`;

			gsap.to(section, {
				scrollTrigger: {
					trigger: section,
					start: "top top",
					end:
						index === sections.length
							? `+=${lastCard.offsetHeight / 2}`
							: footer.offsetTop - window.innerHeight,
					pin: true,
					pinSpacing: false,
					scrub: 1,
				},
			});

			gsap.fromTo(
				img,
				{ scale: 1 },
				{
					scale: 0.5,
					ease: "none",
					scrollTrigger: {
						trigger: section,
						start: "top top",
						end: endScalePoint,
						scrub: 1,
					},
				}
			);
		});

		const heroH1: any = document.querySelector(".hero h1");
		ScrollTrigger.create({
			trigger: document.body,
			start: "top top",
			end: "+=400vh",
			scrub: 1,
			onUpdate: (self) => {
				let opacityProgress = self.progress;
				heroH1.style.opacity = 1 - opacityProgress;
			},
		});
	}, []);

	return (
		<div className="container-1" ref={heroRef}>

			<section className="hero pinned">
				<h1>
					Welcome To <br />
					<span className="color-change">Colorido</span>
				</h1>
			</section>
			<span id="gallery">
				{heroImages.map(({ src, alt }, index) => (
					<section
						className={`card ${
							heroImages.length - 1 === index ? "scroll" : "pinned"
						}`}
						key={index}
					>
						<div className="img">
							<div className="image-title">
								<h1 className="text-xl">RVR & JC Fest 2K24</h1>
								<h3 className="image-subtitle">This is fake subtitle</h3>
							</div>
							<img src={src} alt={alt} />
						</div>
					</section>
				))}
			</span>
			<section className="end-scroll-img w-[100vw] h-[50vh]"></section>
		</div>
	);
};

export default Hero;
