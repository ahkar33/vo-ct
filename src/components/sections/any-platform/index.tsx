import { AnyPlatformImg } from "@/assets";

const AnyPlatForm = () => {
	return (
		<div id="how-we-work" className="flex py-[32px] lg:py-[64px] flex-col gap-[32px] lg:gap-[64px] x-padding">
			<div className="lg:w-[80%] mx-auto">
				<h3 className="font-sfprod font-bold text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] text-center leading-tight">
					Making it big on any Platform is tougher than you think
				</h3>
			</div>
			<img src={AnyPlatformImg} alt="any-platform" className="w-[891px] h-auto mx-auto" />
		</div>
	);
};

export default AnyPlatForm;
