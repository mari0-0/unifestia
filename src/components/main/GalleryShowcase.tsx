import Marquee from "react-fast-marquee";

const GalleryShowcase = () => {
	return (
		<section className="pt-12 mb-32">
      <h1 className="mb-10 text-5xl text-center">Gallery</h1>
			<Marquee pauseOnHover >
				<img className="mx-3" src="/images/ncc/1.jpeg" alt="ncc" height={400} width={400} />
				<img className="mx-3" src="/images/ncc/2.jpeg" alt="ncc" height={400} width={400} />
				<img className="mx-3" src="/images/ncc/3.jpeg" alt="ncc" height={400} width={400} />
				<img className="mx-3" src="/images/cultural/1.jpeg" alt="ncc" height={400} width={400} />
				<img className="mx-3" src="/images/cultural/2.jpg" alt="ncc" height={400} width={400} />
				<img className="mx-3" src="/images/cultural/3.jpeg" alt="ncc" height={400} width={400} />
				<img className="mx-3" src="/images/cultural/4.jpeg" alt="ncc" height={400} width={400} />
				<img className="mx-3" src="/college/main1.webp" alt="ncc" height={400} width={400} />
				<img className="mx-3" src="/images/campus/2.jpeg" alt="ncc" height={400} width={400} />
				<img className="mx-3" src="/images/campus/4.avif" alt="ncc" height={400} width={400} />

			</Marquee>

			<Marquee pauseOnHover direction="right" speed={25}>
				<img className="mx-3" src="/images/ncc/1.jpeg" alt="ncc" height={400} width={400} />
				<img className="mx-3" src="/images/ncc/2.jpeg" alt="ncc" height={400} width={400} />
				<img className="mx-3" src="/images/ncc/3.jpeg" alt="ncc" height={400} width={400} />
				<img className="mx-3" src="/images/cultural/1.jpeg" alt="ncc" height={400} width={400} />
				<img className="mx-3" src="/images/cultural/2.jpg" alt="ncc" height={400} width={400} />
				<img className="mx-3" src="/images/cultural/3.jpeg" alt="ncc" height={400} width={400} />
				<img className="mx-3" src="/images/cultural/4.jpeg" alt="ncc" height={400} width={400} />
				<img className="mx-3" src="/college/main1.webp" alt="ncc" height={400} width={400} />
				<img className="mx-3" src="/images/campus/2.jpeg" alt="ncc" height={400} width={400} />
				<img className="mx-3" src="/images/campus/4.avif" alt="ncc" height={400} width={400} />

			</Marquee>
		</section>
	);
};

export default GalleryShowcase;
