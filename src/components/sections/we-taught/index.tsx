import { Person1, Person2, Person3 } from "@/assets";

const WeTaught = () => {
	return (
		<div className="x-padding py-[32px] lg:py-[64px]">
			<div className="flex flex-col gap-[32px] lg:gap-[64px]">
				<p className="text-[16px] text-center md:text-[18px] font-sfprot leading-[24px] lg:leading-[32px] lg:text-[20px]">
					Hear from our customers from Top YouTube Channel
				</p>

				<div className="mt-[24px] font-sfprod font-bold text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] leading-tight">
					<span className="inline">We’ve taught </span>
					<img
						src={Person1}
						alt="person1"
						className="inline-block w-[48px] h-[48px] lg:w-[64px] lg:h-[64px] mx-[4px]  object-cover"
					/>
					<span className="inline"> over 3,000 creators</span>
					<br />
					<span className="inline">how to </span>
					<img
						src={Person2}
						alt="person2"
						className="inline-block w-[48px] h-[48px] lg:w-[64px] lg:h-[64px] mx-[4px] mr-[16px] object-cover"
					/>

					{/* Highlighted phrase with SVG background */}
					<span className="relative inline-block">
						<svg
							height="71"
							viewBox="0 0 565 71"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className="absolute -bottom-[10px]  left-1/2 -translate-x-1/2 z-0 w-[350px] md:w-[500px] lg:w-[565px]"
						>
							<path
								d="M201.061 62.7846C165.761 60.0846 129.961 60.2846 94.5609 60.4846C79.3609 60.5846 64.0609 61.0846 48.9609 59.4846C41.4609 58.6846 33.961 57.1846 26.761 54.7846C21.461 52.9846 11.7609 50.1846 10.0609 43.8846C6.56094 30.5846 33.4609 25.6846 41.3609 24.0846C58.5609 20.5846 76.361 19.5846 93.761 18.0846C129.661 15.0846 165.661 13.1846 201.661 12.0846C237.661 10.8846 273.661 10.4846 309.661 10.1846C345.061 9.88456 380.561 9.38456 416.061 9.68456C451.261 9.98456 486.661 11.9846 521.461 17.6846C527.761 18.6846 559.461 21.5846 551.661 34.6846C548.561 39.7846 539.461 40.4846 534.161 40.8846C526.261 41.5846 518.361 41.7846 510.461 42.1846C474.861 44.0846 439.161 43.2846 403.461 43.4846C367.561 43.6846 330.861 41.8846 295.161 46.5846C286.261 47.7846 277.261 47.8846 268.361 48.3846C265.361 48.5846 265.261 52.9846 268.361 53.0846C278.361 53.3846 288.261 53.5846 298.161 54.7846C307.661 55.8846 317.361 56.2846 326.961 56.3846C346.461 56.5846 366.061 56.0846 385.561 55.8846C424.561 55.4846 463.561 56.2846 502.561 54.6846C511.461 54.2846 520.361 53.7846 529.361 53.3846C537.061 52.9846 545.061 52.3846 552.161 49.1846C564.561 43.6846 568.861 27.8846 558.561 18.0846C552.761 12.4846 544.561 10.8846 536.861 9.58457C527.861 8.08457 518.761 6.68456 509.661 5.48456C490.861 3.08456 471.861 1.58457 452.861 0.884574C414.461 -0.715426 375.961 0.284571 337.561 0.584571C298.561 0.884571 259.561 1.28457 220.561 2.38457C181.561 3.38457 142.561 5.18456 103.761 8.18456C84.561 9.68456 65.3609 11.1846 46.3609 13.9846C32.6609 15.9846 14.9609 18.5846 5.16095 29.5846C0.860946 34.3846 -1.13905 40.8846 0.660946 47.1846C2.66095 54.0846 9.06095 58.2846 15.261 61.0846C30.161 67.6846 46.4609 69.8846 62.5609 70.3846C79.4609 70.8846 96.361 69.5846 113.261 69.0846C132.861 68.5846 152.661 68.2846 172.161 66.6846C181.861 65.8846 191.461 65.0846 201.161 64.0846C201.761 63.8846 201.761 62.7846 201.061 62.7846Z"
								fill="#FFADF2"
							/>
						</svg>
						<span className="relative z-10">grow on any Platform</span>
					</span>

					<img
						src={Person3}
						alt="person3"
						className="inline-block w-[48px] h-[48px] lg:w-[64px] lg:h-[64px] ml-[20px] object-cover"
					/>
				</div>
				<h3 className="font-sfprod z-[4] font-bold text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] leading-tight">
					Now{" "}
					<span className="relative inline-block">
						<svg
							width="171"
							height="13"
							viewBox="0 0 171 13"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className="absolute -bottom-[4px] left-1/2 -translate-x-1/2 z-0"
						>
							<path
								d="M1.1628 9.57499C29.3628 9.57499 57.5628 9.67502 85.8628 9.97502C99.6628 10.075 113.463 10.475 127.263 10.475C133.963 10.475 140.763 10.475 147.463 10.975C150.663 11.175 153.763 11.575 156.863 11.975C160.763 12.475 163.463 12.075 167.363 11.675C170.663 11.375 172.063 7.27501 169.063 5.37501C166.163 3.47501 164.263 1.875 160.763 1.275C157.563 0.675003 154.363 0.475003 151.063 0.275003C144.363 -0.124997 137.563 -0.025003 130.863 0.174997C116.463 0.574997 102.163 1.375 87.7628 2.175C58.8628 3.675 29.9628 5.375 1.1628 7.275C-0.337198 7.275 -0.437198 9.57499 1.1628 9.57499Z"
								fill="#FFADF2"
							/>
						</svg>
						<span className="relative z-10">we can do</span>
					</span>{" "}
					it for you
				</h3>
			</div>
		</div>
	);
};

export default WeTaught;
