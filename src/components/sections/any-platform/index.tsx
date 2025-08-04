import { AnyPlatformImg, PlatformYoutube1, PlatformYoutube2 } from "@/assets";

const AnyPlatForm = () => {
	return (
		<div
			id="how-we-work"
			className="flex py-[32px] lg:py-[64px] flex-col gap-[32px] lg:gap-[64px] x-padding"
		>
			<div className="lg:w-[80%] mx-auto">
				<h3 className="z-[2] font-sfprod font-bold text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] text-center leading-tight">
					Making it big on any Platform is tougher than you think
				</h3>
			</div>
			<div className="w-full max-w-[891px] h-auto mx-auto relative">
				<img
					src={AnyPlatformImg}
					alt="any-platform"
					className="w-full h-auto relative z-[10]"
				/>

				<img
					src={PlatformYoutube1}
					alt="pyt-1"
					className="absolute top-[10%] right-[15%] w-[60px] sm:w-[80px] md:w-[120px] z-[5]"
				/>
				<img
					src={PlatformYoutube1}
					alt="pyt-1"
					className="absolute bottom-[20%] right-[10%] w-[25px] z-[5]"
				/>
				<img
					src={PlatformYoutube2}
					alt="pyt-2"
					className="absolute bottom-[15%] left-[20%] w-[56px] z-[5]"
				/>
			</div>
		</div>
	);
};

export default AnyPlatForm;
