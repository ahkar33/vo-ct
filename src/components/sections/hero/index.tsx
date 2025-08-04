const Hero = () => {
	return (
		<div className="mt-[calc(112px+24px)] py-[140px]">
			<div className="flex  items-center flex-col gap-[32px] justify-center w-[65%] mx-auto">
				<h1 className="font-sfprod font-bold text-[112px] leading-[112px] tracking-[0%] text-center">
					Spark your brand's imaginative flair with us
				</h1>
				<div className="w-[80%] mx-auto">
					<p className="text-[20px] font-sfprot leading-[32px] text-center">
						Our team combines strategy, design, and technology to breathe life
						into your brand. Collaborate with us to leave a lasting impression
						on your audience.
					</p>
				</div>
				<div className="relative w-[567px] h-[64px]">
					<input
						type="email"
						placeholder="Enter your Email"
						className="w-full h-full rounded-[32px] bg-white pr-[140px] px-[24px] text-[16px] focus:outline-none placeholder:font-sfprot placeholder:text-[20px] placeholder:text-[#D4D4D4]"
					/>
					<button className="absolute top-1/2 right-[8px] -translate-y-1/2 py-[12px] px-[32px] rounded-[24px] bg-pink-dark  flex items-center justify-center cursor-pointer">
						<span className=" font-semibold text-[18px] font-sfprot">Join</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Hero;
