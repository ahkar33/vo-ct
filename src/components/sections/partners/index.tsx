const Partners = () => {
	return (
		<div className="py-[56px] x-padding relative">
			<div className="flex flex-col gap-[64px] ">
				<div className="w-[80%] mx-auto">
					<h3 className="font-sfprod font-bold text-[56px] text-center">
						Contact us today to explore
						<br />
						<span className="relative inline-block">
							partnership&nbsp;
							<span className="relative inline-block">
								<span className="relative z-10">opportunities</span>
								<svg
									className="absolute bottom-[6px] left-0 w-full h-[20px] -z-[1]"
									width="411"
									height="31"
									viewBox="0 0 411 31"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									preserveAspectRatio="none"
								>
									<path
										d="M2.34786 30.4872C55.0679 29.9273 107.879 26.0671 160.597 23.8043C212.716 21.5068 264.935 19.2151 317.049 17.0175C331.611 16.3564 346.068 15.7894 360.625 15.2281C375.686 14.5959 390.913 14.5741 406.015 13.243C413.266 12.5602 412.261 0.482112 405.05 0.466131C391.837 0.30372 378.55 1.43916 365.391 2.08118C352.132 2.71744 338.973 3.35946 325.714 3.99572C299.297 5.27401 272.873 6.65213 246.432 8.32975C194.561 11.543 142.583 14.8503 90.7537 19.0677C61.1662 21.465 31.6017 23.463 2.13308 27.2695C0.130645 27.2539 0.34542 30.4717 2.34786 30.4872Z"
										fill="#FF60E6"
									/>
								</svg>
							</span>
							!
						</span>
					</h3>
				</div>

				<div className="bg-white rounded-[24px] py-[69px] px-[140px]">
					<div className="h-[201px] w-[530px] flex flex-col gap-[16px]">
						<h4 className="font-sfprod font-semibold text-[48px] leading-[100%]">
							Partners:
						</h4>
						<p className="font-sfprot text-[20px] leading-[32px]">
							Our creative agency forms strong partnerships with diverse
							businesses, from startups to global brands, based on trust,
							respect, and a shared vision for success.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Partners;
