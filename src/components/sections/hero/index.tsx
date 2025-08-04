const Hero = () => {
	return (
		<div className="mt-[calc(112px+24px)] py-[40px] md:py-[140px] bg-red-300">
			<div className="flex items-center flex-col gap-6 md:gap-[32px] justify-center w-full px-4 lg:w-[70%] mx-auto">
				<h1 className="font-sfprod font-bold text-5xl sm:text-6xl md:text-7xl lg:text-[112px] leading-[1.1] tracking-[0%] text-center flex flex-wrap justify-center gap-x-2 md:gap-x-4 relative">
					<span>Spark your brand's&nbsp;</span>
					<span className="inline-flex items-end space-x-2 md:space-x-4 whitespace-nowrap relative">
						<span className="relative inline-block">
							<svg
								className="absolute -bottom-2 md:-bottom-4 left-0 w-full h-auto -z-10"
								viewBox="0 0 627 130"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								preserveAspectRatio="none"
							>
								<path
									d="M486.973 109.143C439.747 105.143 392.018 108.443 344.792 110.843C298.068 113.243 251.445 117.243 204.721 119.043C159.906 120.743 114.288 120.743 70.5785 110.043C53.2957 105.843 -10.8114 89.5432 15.5147 60.3432C23.7542 51.2432 36.2138 46.1432 47.5682 42.2432C58.9226 38.3432 70.5785 35.6432 82.2343 32.9432C101.125 28.5432 119.915 24.0432 139.006 20.9432C161.815 17.2432 184.826 14.5432 207.936 12.7432C298.972 5.5432 391.516 8.5432 482.049 20.2432C500.437 22.6432 518.926 24.9432 537.214 28.2432C554.396 31.3432 571.88 35.3432 587.555 43.3432C594.89 47.0432 601.823 51.6432 607.751 57.3432C613.881 63.2432 619.809 74.0432 610.464 80.0432C601.723 85.6432 590.167 87.4432 580.119 89.0432C569.167 90.6432 558.214 91.7432 547.262 93.1432C535.907 94.5432 524.553 95.9432 513.199 97.0432C505.562 97.8432 505.261 109.743 513.199 109.143C537.214 107.343 561.128 103.143 584.842 99.2432C602.426 96.3432 631.063 89.6432 625.637 65.8432C621.618 48.2432 601.12 37.1432 585.847 30.6432C568.664 23.4432 550.377 19.7432 531.989 16.9432C438.541 2.84319 344.49 -2.95681 250.038 1.44319C202.711 3.64319 155.485 8.7432 109.063 18.2432C93.9906 21.3432 78.8179 24.8432 63.8462 28.5432C50.2812 31.9432 36.6158 35.9432 24.2566 42.4432C13.8065 47.9432 2.95455 56.3432 0.543004 68.5432C-2.6724 84.6432 8.88296 96.5432 22.247 103.543C40.2331 112.943 61.0327 118.143 80.8276 121.943C103.737 126.343 127.049 128.543 150.461 129.143C200.199 130.543 249.837 126.043 299.374 122.943C349.213 119.743 399.152 118.043 449.092 115.443C461.853 114.743 474.513 113.943 487.174 112.843C489.384 112.643 489.384 109.343 486.973 109.143Z"
									fill="#FF60E6"
								/>
							</svg>
							<span className="relative z-10">imaginative</span>
						</span>
						<span>flair</span>
					</span>
					<span>with us</span>
				</h1>

				<div className="w-full md:w-[80%] mx-auto px-2">
					<p className="text-base text-[20px] font-sfprot leading-relaxed md:leading-[32px] text-center">
						Our team combines strategy, design, and technology to breathe life
						into your brand. Collaborate with us to leave a lasting impression
						on your audience.
					</p>
				</div>

				<div className="relative w-full max-w-[567px] h-12 md:h-[64px]">
					<input
						type="email"
						placeholder="Enter your Email"
						className="w-full h-full rounded-full bg-white pr-28 md:pr-[140px] px-6 text-sm md:text-[16px] focus:outline-none placeholder:font-sfprot placeholder:text-base md:placeholder:text-[20px] placeholder:text-[#D4D4D4]"
					/>
					<button className="absolute top-1/2 right-[4px] md:right-[8px] -translate-y-1/2 py-2 md:py-[12px] px-4 md:px-[32px] rounded-full bg-pink-dark flex items-center justify-center cursor-pointer">
						<span className="font-semibold text-[18px] font-sfprot">Join</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Hero;
