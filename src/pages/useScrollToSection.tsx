import { useCallback } from "react";
import { useSetAtom } from "jotai";
import { isManuallyScrollingAtom } from "@/store";

export function useScrollToSection(navbarOffset = 80) {
	const setIsManuallyScrolling = useSetAtom(isManuallyScrollingAtom);

	const scrollToSection = useCallback(
		(
			sectionId: string,
			index: number,
			setActiveIndex: (index: number) => void
		) => {
			const section = document.getElementById(sectionId);

			setIsManuallyScrolling(true);
			setActiveIndex(index);

			if (index === 0) {
				window.scrollTo({ top: 0, behavior: "smooth" });
			} else if (section) {
				const elementTop =
					section.getBoundingClientRect().top + window.pageYOffset;
				const scrollTo = elementTop - navbarOffset;

				window.scrollTo({ top: scrollTo, behavior: "smooth" });
			}

			// Restore scroll tracking after scroll completes
			setTimeout(() => {
				setIsManuallyScrolling(false);
			}, 800);
		},
		[navbarOffset, setIsManuallyScrolling]
	);

	return scrollToSection;
}
