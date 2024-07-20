import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Footer() {

  useGSAP(() => {
    gsap.to("#logoFooter", {
      rotation: 360,
      duration: 3,
      ease: "linear",
      repeat: -1,
    })
  })

	return (
		<footer className="bg-muted py-12">
			<div className="container font-poppins mx-auto max-w-5xl flex flex-col items-center justify-center gap-6 text-center">
				<div className="flex items-center gap-2 font-acma">
					<img id="logoFooter" className="w-9 mr-3" src="/logo1.png" alt="" />
					<span className="text-lg font-semibold">UniFestia</span>
          <span className="text-sm font-normal">by RVR & JC</span>
				</div>
				<p className="max-w-md text-muted-foreground">
          Your One-Stop Platform for College Events and Announcements
				</p>
				<nav className="flex gap-4 text-sm font-medium">
					<a href="#" className="hover:underline">
						Home
					</a>
					<a href="#" className="hover:underline">
						About
					</a>
					<a href="#" className="hover:underline">
						Events
					</a>
          <a href="#" className="hover:underline">
						Clubs
					</a>
					<a href="#" className="hover:underline">
						Gallery
					</a>
				</nav>
				<p className="text-xs text-muted-foreground">
					&copy; 2024 UniFestia. All rights reserved.
				</p>
			</div>
		</footer>
	);
}
