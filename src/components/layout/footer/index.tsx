import {
	FacebookSocial,
	InstagramSocial,
	LinkedinSocial,
} from "@/assets/icons";
import JoinInput from "@/components/shared/join-input";
import { NAV_LINKS } from "@/configs/constants";
import { Copyright } from "lucide-react";

const Footer = () => {
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
		<footer className="py-[32px] lg:py-[64px] x-padding">
			<div className="flex items-center justify-center flex-col gap-[32px] lg:gap-[64px]">
				<div>
					<h3 className="font-sfprod z-[4] font-bold text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] text-center leading-tight">
						We are waiting for you to contact us
					</h3>
					<p className="text-center mt-[8px] z-[4] font-sfprot text-[16px] md:text-[18px] lg:text-[20px]  leading-[24px] lg:leading-[32px]">
						You can write to us at any time and get an instant response.
					</p>
				</div>
				<JoinInput />
				<div className="flex justify-between gap-[16px] w-full items-center">
					<div className="flex items-center gap-[8px]">
						<Copyright className="text-primary w-[24px] h-[24px]" />
						<p className="text-center mb-[6px] mt-[8px] z-[4] font-sfprot text-[16px] md:text-[18px] lg:text-[20px]  leading-[24px] lg:leading-[32px]">
							Copywriting
						</p>
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
					<div className="flex items-center gap-[16px]">
						<a href="https://www.instagram.com/" target="_blank">
							<img
								src={InstagramSocial}
								alt="instagram"
								className="w-[32px] h-[32px]"
							/>
						</a>
						<a href="https://facebook.com/" target="_blank" >
							<img
								src={FacebookSocial}
								alt="facebook"
								className="w-[32px] h-[32px]"
							/>
						</a>
						<a href="https://www.linkedin.com/" target="_blank">
							<img
								src={LinkedinSocial}
								alt="linkedin"
								className="w-[32px] h-[32px]"
							/>
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
