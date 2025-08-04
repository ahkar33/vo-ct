import { NavLogo } from "@/assets";
import { NAV_LINKS } from "@/configs/constants";
import { Menu } from "lucide-react";

const Navbar = () => {
	const handleMenuClick = (sectionId: string) => {
		const section = document.getElementById(sectionId);
		if (section) {
			const yOffset = sectionId === "review" ? -130 : -100;
			const y =
				section.getBoundingClientRect().top + window.pageYOffset + yOffset;

			window.scrollTo({ top: y, behavior: "smooth" });
		}
	};

	return (
		<nav className="fixed pt-[56px] pb-[24px] left-0 top-0 z-[50]  w-full bg-secondary x-padding">
			<div className="flex w-full justify-between ">
				<div className="flex gap-[8px] items-center">
					<img src={NavLogo} alt="nav-logo" className="w-[32px] h-[32px]" />
					<h2 className="text-primary font-bold text-[24px] font-kulim tracking-[0%]">
						The Creator
					</h2>
				</div>
				<div className="gap-[24px] xl:gap-[32px] items-center hidden lg:flex">
					{NAV_LINKS.map((link, index) => (
						<div
							key={index + link.name}
							onClick={() => handleMenuClick(link.sectionId)}
							className="font-medium h-full flex items-center text-[20px] cursor-pointer font-sfprot "
						>
							{link.name}
						</div>
					))}
				</div>
				<div className="flex items-center gap-[8px]">
					<button className="bg-pink-dark rounded-[100px] cursor-pointer flex items-center justify-center py-[12px] px-[16px] sm:px-[32px]">
						<p className="font-semibold font-sfprot text-[18px] tracking-[0.01em]">
							<span>Join</span>
							<span className="hidden sm:inline">&nbsp;The Creator</span>
						</p>
					</button>
					<Menu className="w-[36px] h-[36px] cursor-pointer lg:hidden" />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
