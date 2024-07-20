import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const WhyUnifestia = () => {
	useGSAP(() => {
		gsap.from("#question", {
			x: 300,
			opacity: 0,

			scrollTrigger: {
				trigger: "#question",
				start: "top 20%",
				end: "bottom bottom",
				scrub: 1,
			},
		});

		gsap.to("#question", {
			y: 30,
			ease: "sine.inOut",
			repeat: -1,
			yoyo: true,
			duration: 1.5,
		});

		gsap.from(".subTitleHero", {
			x: -300,
			delay: 1,
			opacity: 0,
			duration: 1,
			ease: "power4.inOut",
			scrollTrigger: {
				trigger: ".subTitleHero",
				start: "top 90%",
			},
		});

		gsap.from(".whyText", {
			x: -100,
			delay: 1,
			opacity: 0,
			duration: 1,
			ease: "power4.inOut",
			scrollTrigger: {
				trigger: ".whyText",
				start: "top 90%",
			},
		});
	}, []);

	return (
		<>
			{/* <QuestionMarkModel /> */}

			<section className="px-[10vw] my-12 py-4 w-[98.9vw] h-screen overflow-hidden">
				<div className="w-full flex flex-col justify-between sm:flex-row">
					<div className="w-full flex-center flex-col gap-10 ">
						<div className="subTitleHero w-full h-full">
							<h1 className="text-4xl font-semibold">
								Your One-Stop Platform for College Events and Announcements
							</h1>
							<p className="pl-5 mt-5 text-lg font-light font-poppins ">
								Unifestia brings you the latest updates on college events, news,
								announcements, and more. Stay connected with everything
								happening on campus and never miss out on the fun!
							</p>
						</div>

						<div className="whyText w-full h-full">
							<h1 className="text-4xl font-semibold">Why Unifestia?</h1>
							<div className="mt-5 text-lg font-light font-poppins flex-center flex-col gap-4">
								<p className="pl-5">
									Easy Event Registration: Simple and quick registration for all
									college events.
								</p>
								<p className="pl-5">
									Up-to-Date Information: Stay informed with the latest news and
									announcements.
								</p>
								<p className="pl-5">
									Community Engagement: Connect with fellow students through
									clubs and activities.
								</p>
								<p className="pl-5">
									Memorable Experiences: Relive your favorite moments with our
									extensive gallery.
								</p>
							</div>
						</div>
					</div>
					<div id="question" className="mb-32 w-full h-full flex-center">
						<img width={400} src="/questionMark.png" alt="question mark" />
					</div>
				</div>
			</section>
		</>
	);
};

export default WhyUnifestia;
