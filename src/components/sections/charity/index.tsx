import { Charity1, Charity2 } from "@/assets";

const Charity = () => {
	return (
		<div className="py-[32px] lg:py-[64px] x-padding">
			<div className="grid md:grid-cols-2 gap-[16px] lg:gap-[32px]">
				<div className="bg-pink-dark rounded-[16px] py-[32px] lg:py-[56px] w-full md:h-[515px] aspect-[580/515]">
					<div className="flex flex-col gap-[16px]">
						<img src={Charity1} alt="c-1" />
						<img src={Charity2} alt="c-1" />
					</div>
					<div className="px-[32px] lg:px-[64px] mt-[20px]">
						<p className="text-[16px] md:text-[18px] font-sfprot leading-[24px] lg:leading-[32px] lg:text-[20px]">
							We've participated in events for children's education, health
							initiatives, and disaster relief. We're dedicated to ongoing
							involvement and exploring new opportunities.
						</p>
					</div>
				</div>
				<div className="bg-white rounded-[16px] flex flex-col gap-[16px] p-[32px] lg:p-[56px] w-full md:h-[515px] aspect-[580/515]">
					<h3 className="font-sfprod z-[4] font-bold text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] leading-tight">
						Charity
					</h3>
					<p className="text-[16px] md:text-[18px] font-sfprot leading-[24px] lg:leading-[32px] lg:text-[20px]">
						We've participated in events for children's education, health
						initiatives, and disaster relief. We're dedicated to ongoing
						involvement and exploring new opportunities.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Charity;
