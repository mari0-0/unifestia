import { BiLinkAlt } from "react-icons/bi";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function AboutUs() {
  useGSAP(() => {
    gsap.from("#aboutUsClgText", {
      opacity: 0,
      duration: 1,
      ease: "power2.inOut",
      x: -200,
    })

		gsap.from("#aboutUsClgImg", {
      opacity: 0,
      duration: 1,
      ease: "power2.inOut",
      x: 200,
    })
  } ,[])

	return (
		<>
			<Navbar />
			<div className="flex flex-col min-h-dvh">
				<section className="w-full pt-12 md:pt-24 lg:pt-32">
					<div className="container space-y-10 xl:space-y-16">
						<div className="grid gap-4 px-10 md:grid-cols-2 md:gap-16">
							<div id="aboutUsClgText">
								<h1  className="lg:leading-tighter text-3xl font-semibold tracking-normal sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
									About R.V.R & JC College Of Engineering
								</h1>
								<p className="mt-12 mx-auto max-w-[700px] font-poppins !text-gray-700 text-muted-foreground md:text-lg">
									Established by the renowned Nagarjuna Education Society (1967)
									in the year 1985, the College drew its initial impetus from
									people's representatives, local doctors, charitable trusts and
									commercial houses of Guntur District.
									<br /> <br />
									Today, it enjoys flagship status among the eight constituent
									institutions that are governed by Nagarjuna Education Society.
									The founder-members of Nagarjuna Education Society and their
									successors have provided abundant inputs to turn a mere 3
									programmes -180-intake College into a 19 programmes - 1596 -
									intake by the academic year 2023-2024. The premier status of
									the institution is made possible by sticking to our
									core-principles of student-focus, Human Resource Development
									and emphasis on total quality.
								</p>
							</div>
							<div id="aboutUsClgImg" className="flex flex-col items-start space-y-4">
								<img
									src="/college/main1.webp"
									width={550}
									height={550}
									alt="About Us"
									className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last lg:aspect-square"
								/>
							</div>
						</div>
					</div>
				</section>

				<section className="w-full py-12 md:py-24 lg:py-32">
					<div className="container grid items-center justify-center gap-8 px-4 md:px-6 lg:grid-cols-3 lg:gap-12">
						<video
							width={550}
							height={310}
							autoPlay
							loop
							muted
							controls
							// playsInline
							className="mx-auto aspect-[16/9] overflow-hidden rounded-xl object-cover sm:w-full"
						>
							<source src="/college/collegeVideo.mp4" type="video/mp4" />
						</video>

						<img
							src="/college/main1.jpg"
							width={550}
							height={310}
							alt="Our Work"
							className="mx-auto aspect-[16/9] overflow-hidden rounded-xl object-cover sm:w-full"
						/>

						<video
							width={550}
							height={310}
							autoPlay
							loop
							muted
							controls
							// playsInline
							className="mx-auto aspect-[16/9] overflow-hidden rounded-xl object-cover sm:w-full"
						>
							<source src="/college/hackathonVideo.mp4" type="video/mp4" />
						</video>
					</div>

					<div className="hidden lg:grid mt-10 container items-center justify-center gap-8 px-4 md:px-6 lg:grid-cols-3 lg:gap-12">
						<div className="z-1 absolute w-[92vw] h-1/2 bg-gradient-to-t from-[#FFF6E0] from-[30%] to-transparent"></div>

						<video
							width={550}
							height={310}
							muted
							className="mx-auto aspect-[16/9] overflow-hidden rounded-xl object-cover sm:w-full"
						>
							<source src="/college/collegeVideo.mp4" type="video/mp4" />
						</video>

						<img
							src="/college/main1.jpg"
							width={550}
							height={310}
							alt="Our Work"
							className="mx-auto aspect-[16/9] overflow-hidden rounded-xl object-cover sm:w-full"
						/>

						<video
							width={550}
							height={310}
							muted
							className="mx-auto aspect-[16/9] overflow-hidden rounded-xl object-cover sm:w-full"
						>
							<source src="/college/hackathonVideo.mp4" type="video/mp4" />
						</video>
					</div>
				</section>
				<div className="  ">
					<Link to="/gallery">
						<a className="flex-center mt-6 text-2xl font-poppins text-center text-blue-500 underline cursor-pointer">
							View More in our Gallery
							<BiLinkAlt />
						</a>
					</Link>
				</div>

				<section className="w-full py-12 md:py-24 lg:py-32 flex justify-center">
					<div>
						<h1 className="lg:leading-tighter text-3xl font-semibold tracking-normal sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
							Vision
						</h1>
						<p className="mt-12 mx-auto max-w-[700px] font-poppins !text-gray-700 text-muted-foreground md:text-lg">
							To develop integrated manpower with right attitude, possessing
							knowledge and skills, required to make an honorable living and
							contribute to the socioeconomic development and welfare of the
							society.
						</p>
						<p className="mt-12 mx-auto max-w-[700px] font-poppins !text-gray-700 text-muted-foreground md:text-lg">
							To pursue standards in all endeavors, with a holistic educational
							motive of continuous monitoring, evaluation and improvement,
							aiming at the total satisfaction of the stakeholders.
						</p>
					</div>

					<div>
						<h1 className="lg:leading-tighter text-3xl font-semibold tracking-normal sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
							Mission
						</h1>
						<ul>
							<li className="mt-12 mx-auto max-w-[700px] font-poppins !text-gray-700 text-muted-foreground md:text-lg">
								To produce globally agile graduates with value orientation,
								professional competency, critical and creative thinking and
								lifelong learning.
							</li>

							<li className="mt-12 mx-auto max-w-[700px] font-poppins !text-gray-700 text-muted-foreground md:text-lg">
								To enrich the society through education and research by
								generating proficient manpower, capable of contributing to the
								needs of the industry.
							</li>

							<li className="mt-12 mx-auto max-w-[700px] font-poppins !text-gray-700 text-muted-foreground md:text-lg">
								To provide conducive learning environment, encompassing
								knowledge, communication and soft skills that enables the
								students to transform themselves into global leaders.
							</li>
						</ul>
					</div>
				</section>

				<section className="w-full py-12 md:py-24 lg:py-32">
					<div className="container px-4 md:px-6">
						<div className="mx-auto w-full max-w-4xl">
							<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
								Find Us
							</h2>
							<p className="mx-auto max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
								Visit our College at.
							</p>
							<div className="mt-8 aspect-[16/9] overflow-hidden rounded-xl">
								<iframe
									className="w-full h-full"
									src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3466.2506317169664!2d80.32564600000002!3d16.254765!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a76e740000001%3A0xc41c8498715c6da0!2sR.V.R.%20%26%20J.C.College%20of%20Engineering!5e1!3m2!1sen!2sus!4v1721404308452!5m2!1sen!2sus"
									loading="lazy"
								></iframe>
							</div>
						</div>
					</div>
				</section>
			</div>

			<Footer />
		</>
	);
}
