import { ReviewPerson1, ReviewPerson3, ReviewPreson2 } from "@/assets";
import { cn } from "@/utils/cn";
import { MoveLeft, MoveRight } from "lucide-react";
import { useState } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const ReviewList = [
	{
		img: ReviewPerson1,
		name: "John Li",
		review:
			"The Creator innovative ideas, strategic approach, and outstanding results have left a lasting impression on me as a blogger, making them a standout in the creative industry.",
	},
	{
		img: ReviewPreson2,
		name: "Amanda Steen",
		review:
			"The Creator innovative ideas, strategic approach, and outstanding results have left a lasting impression on me as a blogger, making them a standout in the creative industry.",
	},
	{
		img: ReviewPerson3,
		name: "Nicholas Love",
		review:
			"The Creator innovative ideas, strategic approach, and outstanding results have left a lasting impression on me as a blogger, making them a standout in the creative industry.",
	},
];

const Reviews = () => {
	const [isBeginning, setIsBeginning] = useState(true);
	const [isEnd, setIsEnd] = useState(false);

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const handleSlideChange = (swiper: any) => {
		setIsBeginning(swiper.isBeginning);
		setIsEnd(swiper.isEnd);
	};

	return (
		<div id="review" className="pb-[32px] lg:pb-[64px]">
			<div className="x-padding">
				<div className="flex justify-between flex-wrap gap-[32px] mb-[32px]">
					<div className="font-bold font-sfprod text-[20px] md:text-[24px] lg:text-[32px] leading-[100%]">
						<p>See what our famous clients</p>
						<p>write about us:</p>
					</div>
					<div className="flex gap-4">
						<button
							className={cn(
								"swiper-button-prev custom-prev-btn bg-pink-dark w-[40px] h-[40px] p-2 cursor-pointer rounded-full border-pink-dark border-[1px]",
								{ "bg-transparent": isBeginning }
							)}
							disabled={isBeginning}
						>
							<MoveLeft className="text-primary" />
						</button>
						<button
							className={cn(
								"swiper-button-next bg-pink-dark custom-next-btn w-[40px] h-[40px] p-2 cursor-pointer rounded-full border-pink-dark border-[1px]",
								{ "bg-transparent": isEnd }
							)}
							disabled={isEnd}
						>
							<MoveRight className="text-primary" />
						</button>
					</div>
				</div>
			</div>
			<div className="x-left-padding ">
				<Swiper
					onSlideChange={handleSlideChange}
					spaceBetween={24}
					slidesPerView={1.2}
					breakpoints={{
						768: {
							slidesPerView: 1.5,
						},
						1024: {
							slidesPerView: 2.5,
						},
					}}
					pagination={false}
					modules={[Pagination, Navigation]}
					navigation={{
						prevEl: ".swiper-button-prev",
						nextEl: ".swiper-button-next",
					}}
					className="mySwiper"
				>
					{ReviewList.map((review, index) => (
						<SwiperSlide key={index}>
							<div
								className={cn(
									"rounded-[16px] px-[24px] lg:px-[56px] py-[16px] lg:py-[24px] min-h-[352px] w-full flex flex-col gap-[16px]",
									{
										"bg-pink-light": index % 2 === 0,
										"bg-pink-dark": index % 2 === 1,
									}
								)}
							>
								<img
									src={review.img}
									alt={review.name}
									className="w-[80px] h-[80px] rounded-full object-cover"
								/>
								<p className="font-medium font-sfprot text-[20px] md:text-[24px] lg:text-[32px] leading-[100%]">
									{review.name}
								</p>
								<p className="text-[16px] md:text-[18px] font-sfprot leading-[24px] lg:leading-[32px] lg:text-[20px]">
									{review.review}
								</p>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};

export default Reviews;
