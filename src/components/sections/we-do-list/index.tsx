import { ConceptImg, DesignImg, ResearchImg } from "@/assets";

const WeDoList = () => {
	return (
		<div className="x-padding lg:w-[85%] xl:w-[80%] mx-auto py-[32px] lg:py-[64px]">
			<div className="flex-col flex gap-[32px] lg:gap-[64px]">
				<div className="grid gap-[16px] lg:gap-[32px] lg:grid-cols-2">
					<div className="flex flex-col gap-[16px]">
						<h4 className="font-bold xl:text-nowrap z-[3] text-[24px] md:text-[32px] lg:text-[40px] leading-[100%] font-sfprod">
							1# Research & Analysis
						</h4>
						<p className="text-[16px] z-[3] md:text-[18px] font-sfprot leading-[24px] lg:leading-[32px] lg:text-[20px]">
							Our agency's research-driven approach involves gathering insights
							into our clients' industries, competitors, and target audiences to
							develop tailored strategies that deliver exceptional results. This
							deep understanding allows us to create innovative and effective
							campaigns that resonate with our clients' audiences.
						</p>
					</div>
					<img
						src={ResearchImg}
						alt="research"
						className="w-[518px] aspect-square lg:m-0 mx-auto"
					/>
				</div>
				<div className="grid gap-[16px] lg:gap-[32px] lg:grid-cols-2">
					<div className="flex flex-col gap-[16px] lg:order-2">
						<h4 className="font-bold xl:text-nowrap z-[3] text-[24px] md:text-[32px] lg:text-[40px] leading-[100%] font-sfprod">
							2# Concept development:
						</h4>
						<p className="text-[16px] z-[3] md:text-[18px] font-sfprot leading-[24px] lg:leading-[32px] lg:text-[20px]">
							Based on the brief and research, the agency's creative team
							generates ideas for the campaign. These concepts are presented to
							the client for feedback and refinement.
						</p>
					</div>
					<img
						src={ConceptImg}
						alt="concept"
						className="w-[518px] aspect-square lg:order-1 lg:m-0 mx-auto"
					/>
				</div>
				<div className="grid gap-[16px] lg:gap-[32px] lg:grid-cols-2">
					<div className="flex flex-col gap-[16px]">
						<h4 className="font-bold xl:text-nowrap z-[3] text-[24px] md:text-[32px] lg:text-[40px] leading-[100%] font-sfprod">
							3# Design and execution:
						</h4>
						<p className="text-[16px] z-[3] md:text-[18px] font-sfprot leading-[24px] lg:leading-[32px] lg:text-[20px]">
							Once the concept is approved, the agency's designers and
							developers bring it to life. This includes creating visual assets,
							writing copy, and developing multimedia content.
						</p>
					</div>
					<img
						src={DesignImg}
						alt="design"
						className="w-[518px] aspect-square lg:m-0 mx-auto"
					/>
				</div>
			</div>
		</div>
	);
};

export default WeDoList;
