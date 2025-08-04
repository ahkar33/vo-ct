import Navbar from "@/components/layout/navbar";
import AnyPlatForm from "@/components/sections/any-platform";
import Charity from "@/components/sections/charity";
import Hero from "@/components/sections/hero";
import Partners from "@/components/sections/partners";
import Reviews from "@/components/sections/reviews";
import WeDo from "@/components/sections/we-do";
import WeDoList from "@/components/sections/we-do-list";
import WeTaught from "@/components/sections/we-taught";

const Main = () => {
	return (
		<>
			<Navbar />
			<Hero />
			<Partners />
			<AnyPlatForm />
			<WeDo />
			<WeDoList />
			<WeTaught />
			<Reviews />
			<Charity />
		</>
	);
};

export default Main;
