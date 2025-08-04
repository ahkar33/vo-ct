import { useAtom } from "jotai";
import { isDrawerOpenAtom } from "@/store";
import { NAV_LINKS } from "@/configs/constants";
import { useEffect } from "react";
import { X } from "lucide-react";

const MobileDrawer = () => {
	const [isOpen, setIsOpen] = useAtom(isDrawerOpenAtom);

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
		return () => {
			document.body.style.overflow = "";
		};
	}, [isOpen]);

	const handleClick = (sectionId: string) => {
		const section = document.getElementById(sectionId);
		if (section) {
			const yOffset = sectionId === "review" ? -130 : -100;
			const y =
				section.getBoundingClientRect().top + window.pageYOffset + yOffset;
			window.scrollTo({ top: y, behavior: "smooth" });
		}
		setIsOpen(false);
	};

	return (
		<>
			{/* Overlay */}
			<div
				style={{
					position: "fixed",
					inset: 0,
					backgroundColor: isOpen ? "rgba(0, 0, 0, 0.5)" : "rgba(0, 0, 0, 0)",
					zIndex: 500,
					transition: "opacity 300ms",
					opacity: isOpen ? 1 : 0,
					pointerEvents: isOpen ? "auto" : "none",
				}}
				onClick={() => setIsOpen(false)}
			/>

			<div
				className={`fixed top-0 right-0 h-full w-80 bg-secondary z-[501] shadow-xl transform transition-transform duration-300 ease-in-out ${
					isOpen ? "translate-x-0" : "translate-x-full"
				}`}
			>
				<div className="flex flex-col h-full p-6">
					<button
						onClick={() => setIsOpen(false)}
						className="absolute top-4 right-4 text-primary"
					>
						<X size={24} />
					</button>

					<h2 className="text-xl font-bold mb-6">Menu</h2>

					{NAV_LINKS.map((link) => (
						<button
							key={link.name}
							onClick={() => handleClick(link.sectionId)}
							className="text-left text-lg font-medium font-sfprot mb-4"
						>
							{link.name}
						</button>
					))}
				</div>
			</div>
		</>
	);
};

export default MobileDrawer;
