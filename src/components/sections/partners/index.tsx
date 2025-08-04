"use client";

import { PinterestIcon, TwitterIcon } from "@/assets/icons";
import { cn } from "@/utils/cn";
import { Swiper, SwiperSlide } from "swiper/react";

const Partners = () => {
	return (
		<div className="py-[56px] relative x-padding overflow-hidden">
			{/* Heading */}
			<div className="w-[90%] md:w-[80%] mx-auto mb-[64px]">
				<h3 className="font-sfprod font-bold text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] text-center leading-tight">
					Contact us today to explore
					<br />
					<span className="relative inline-block">
						<span className="relative z-10">partnership opportunities!</span>
						<svg
							className="absolute bottom-[4px] left-0 w-full h-[16px] sm:h-[20px] -z-[1]"
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
				</h3>
			</div>

			{/* Card Section */}
			<div className="relative rounded-[24px] bg-white overflow-visible">
				<div className="flex flex-col md:flex-row justify-between items-start relative z-10 px-[20px] md:pl-[80px] md:pr-0 py-[60px]">
					{/* Left Text */}
					<div className="w-full md:w-[50%]">
						<h4 className="font-sfprod font-semibold text-[32px] md:text-[48px] leading-[100%] mb-[16px]">
							Partners:
						</h4>
						<p className="font-sfprot text-[16px] md:text-[20px] leading-[28px] md:leading-[32px] max-w-[500px]">
							Our creative agency forms strong partnerships with diverse
							businesses, from startups to global brands, based on trust,
							respect, and a shared vision for success.
						</p>
					</div>

					{/* Right Swiper */}
					<div className="w-full md:w-[65%] pr-0 md:pr-[40px] lg:-mr-[200px] overflow-visible relative">
						<Swiper
							spaceBetween={24}
							slidesPerView="auto"
							breakpoints={{
								0: {
									slidesPerView: 1.1,
									spaceBetween: 16,
								},
								640: {
									slidesPerView: 1.2,
									spaceBetween: 20,
								},
								768: {
									slidesPerView: 1.5,
									spaceBetween: 24,
								},
								1024: {
									slidesPerView: 2,
									spaceBetween: 24,
								},
							}}
						>
							{[
								{
									icon: TwitterIcon,
									date: "2008 — TODAY",
									desc: "Provides communication between the agency and brands. Collects customer feedback and encourages discussion about the product, which helps improve it.",
								},
								{
									icon: PinterestIcon,
									date: "2010 — TODAY",
									desc: "Provides unlimited access to audience boards. Encourages creative partnerships and improves visibility.",
								},
								{
									icon: "",
									date: "",
									desc: "",
									invisible: true,
								},
							].map((card, index) => (
								<SwiperSlide
									key={index}
									className={`${
										card.invisible ? "!w-[24px]" : "!w-[404px]"
									} !h-[196px]`}
								>
									{!card.invisible && (
										<div
											className={cn("rounded-[16px] p-[24px]  w-full h-full", {
                        "bg-pink-light": index % 2 === 1,
                        "bg-pink-dark": index % 2 === 0,
                      })}
										>
											<div className="flex justify-between items-center">
												<img
													src={card.icon}
													alt={card.date}
													className="w-[40px] h-[40px]"
												/>
												<p className="font-sfprot font-medium text-[20px] leading-[30px]">
													{card.date}
												</p>
											</div>
											<div className="text-[16px] font-sfprot leading-[24px] mt-[12px]">
												{card.desc}
											</div>
										</div>
									)}
								</SwiperSlide>
							))}
						</Swiper>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Partners;
