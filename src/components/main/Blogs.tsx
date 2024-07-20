import React from "react";
import "./css/blogs.css"
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Blogs = () => {
  useGSAP(() => {
    gsap.from("#blogText", {
      opacity: 0,
      duration: 1,
      ease: "power2.inOut",
      y: -200,

    })
  } ,[])

	return (
    <>
    <Navbar />
		<section>
			<h1 id="blogText" className="font-semibold text-5xl text-center my-10">Vlogs</h1>
			<div className="blogs">
				<div className="blog">
					<iframe
						width="450"
						height="315"
						border-radius="20%"
						src="https://www.youtube.com/embed/rhngerdufrk?si=YXb2u1xNhBL_su7r"
						title="YouTube video player"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					></iframe>
				</div>
				<div className="blog">
					<iframe
						width="450"
						height="315"
						src="https://www.youtube.com/embed/5VZxOA9BuFE?si=CITYStBQHTDA8pQP"
						title="YouTube video player"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					></iframe>
				</div>
				<div className="blog">
					<iframe
						width="450"
						height="315"
						src="https://www.youtube.com/embed/rNw5J_MW3oY?si=yIco8ZCQPILhBc9Q"
						title="YouTube video player"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					></iframe>
				</div>
			</div>
			<div className="blogs final">
				<div className="blog">
					<iframe
						width="450"
						height="315"
						src="https://www.youtube.com/embed/jLNnbhKO2do?si=3rzNe2-v_-WvWsbe"
						title="YouTube video player"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					></iframe>
				</div>
				<div className="blog">
					<iframe
						width="450"
						height="315"
						src="https://www.youtube.com/embed/yb68yTd5_YQ?si=EirR6gIDuP1F9CSn"
						title="YouTube video player"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					></iframe>
				</div>
				<div className="blog">
					<iframe
						width="450"
						height="315"
						src="https://www.youtube.com/embed/YUbhEZ4lCiU?si=triEHmKGqM2OnLaM"
						title="YouTube video player"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					></iframe>
				</div>
			</div>
		</section>
    <Footer />
    </>
	);
};

export default Blogs;
