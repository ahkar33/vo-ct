import Navbar from "@/components/layout/navbar";
import AnyPlatForm from "@/components/sections/any-platform";
import Hero from "@/components/sections/hero";
import Partners from "@/components/sections/partners";
import WeDo from "@/components/sections/we-do";

const Main = () => {
	return (
		<>
			<Navbar />
			<Hero />
			<Partners />
			<AnyPlatForm />
			<WeDo />
		</>
	);
};

export default Main;
