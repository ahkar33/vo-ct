const JoinInput = () => {
	return (
		<div className="relative z-[3] w-full max-w-[567px] h-12 md:h-[64px]">
			<input
				type="email"
				placeholder="Enter your Email"
				className="w-full h-full rounded-full bg-white pr-28 md:pr-[140px] px-6 text-sm md:text-[16px] focus:outline-none placeholder:font-sfprot placeholder:text-base md:placeholder:text-[20px] placeholder:text-[#D4D4D4]"
			/>
			<button className="absolute top-1/2 right-[4px] md:right-[8px] -translate-y-1/2 py-2 md:py-[12px] px-4 md:px-[32px] rounded-full bg-pink-dark flex items-center justify-center cursor-pointer">
				<span className="font-semibold text-[18px] font-sfprot">Join</span>
			</button>
		</div>
	);
};

export default JoinInput;
