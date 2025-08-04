import {
	WeDoHandLeft,
	WeDoHandRight,
	WeDoHeartLeft,
	WeDoHeartRight,
	WeDoStringLeft,
	WeDoStringRight,
} from "@/assets";

const WeDo = () => {
	return (
		<div className="py-[32px] lg:py-[64px] relative overflow-y-visible">
			<div className="flex x-padding z-[4] px-[16px] flex-col gap-[32px] lg:gap-[64px] items-center justify-center lg:w-[70%] mx-auto">
				<h3 className="font-sfprod z-[4] font-bold text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] text-center leading-tight">
					We do it for you. No more struggling to grow on any Platform
				</h3>
				<div className="text-center z-[4] font-bold font-sfprod text-[20px] md:text-[24px] lg:text-[32px] leading-[100%]">
					<p>Work with our expert strategists</p>
					<p>writers, editors, and producers to create content</p>
					<p>that transforms your content</p>
				</div>
				<p className="text-center z-[4] font-sfprot text-[16px] md:text-[18px] lg:text-[20px]  leading-[24px] lg:leading-[32px]">
					No managing a team of freelancers or spending countless hours trying
					to master all the skillsets Platform requires - all you need is
					<span className="font-medium z-[4]">&nbsp;The Creator</span>
				</p>
			</div>

			<img
				src={WeDoHandLeft}
				alt="hand-left"
				className="absolute z-[2] top-[-50px] lg:top-[-120px] w-[140px] lg:w-[280px] opacity-50 lg:opacity-100"
			/>
			<img
				src={WeDoHeartLeft}
				alt="heart-left"
				className="w-[70px] z-[2] top-[120px] left-[80px] lg:top-[200px] lg:left-[190px] absolute lg:w-[120px] opacity-30 lg:opacity-100"
			/>
			<img
				src={WeDoHandRight}
				alt="hand-right"
				className="absolute z-[2] bottom-[-50px] lg:bottom-[-100px] w-[120px] lg:w-[250px] right-0 opacity-50 lg:opacity-100"
			/>
			<img
				src={WeDoHeartRight}
				alt="heart-right"
				className="w-[70px] z-[2] lg:w-[120px] bottom-[120px] lg:right-[160px] lg:bottom-[240px] right-[90px] absolute opacity-30 lg:opacity-100"
			/>
			<img
				src={WeDoStringLeft}
				alt="string-left"
				className="absolute top-0 left-0 h-[400px] z-[1] lg:h-[680px] hidden sm:block opacity-40 lg:opacity-100"
			/>
			<img
				src={WeDoStringRight}
				alt="string-right"
				className="absolute bottom-[10px] z-[1] h-[400px] right-0 lg:h-[366px] hidden sm:block opacity-40 lg:opacity-100"
			/>
		</div>
	);
};

export default WeDo;
