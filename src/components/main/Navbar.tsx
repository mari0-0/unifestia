import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";

const Navbar = () => {
	useGSAP(() => {
		const logoElement: any = document.getElementById("logoNavbar");

		gsap.to(logoElement, {
			rotation: 360,
			duration: 3,
			ease: "linear",
			repeat: -1,
		});

		gsap.from("#logoDiv", {
			duration: 1,
			opacity: 0,
			y: -100,
			ease: "power1.out",
		});

		gsap.from("#nav-item", {
			duration: 1,
			opacity: 0,
			y: -100,
			stagger: 0.2,
			ease: "power1.out",
		});
	}, []);

	return (
		<nav className="w-full z-10 bg-[#FFF6E0] flex py-5 px-[10vw] justify-between items-center">
			<div id="logoDiv" className="flex justify-center items-center">
				<img id="logoNavbar" className="w-9 mr-3" src="/logo1.png" alt="" />
				<Link to="/">
					<a className="text-[#222] text-3xl font-semibold cursor-pointer flex-center">
						UniFestia
					</a>
				</Link>
			</div>

			<div className="flex gap-10">
				<Link to="/gallery">
					<p
						id="nav-item"
						className="text-md text-gray-600 font-poppins cursor-pointer hover:text-[#222] font-semibold"
					>
						Gallery
					</p>
				</Link>
				<Link to="/events">
					<p
						id="nav-item"
						className="text-md text-gray-600 font-poppins cursor-pointer hover:text-[#222] font-semibold"
					>
						Events
					</p>
				</Link>
				<Link to="/blogs">
					<p
						id="nav-item"
						className="text-md text-gray-600 font-poppins cursor-pointer hover:text-[#222] font-semibold"
					>
						Vlogs
					</p>
				</Link>

				<Link to="/aboutUs">
					<p
						id="nav-item"
						className="text-md text-gray-600 font-poppins cursor-pointer hover:text-[#222] font-semibold"
					>
						About
					</p>
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
