import Navbar from "@/components/layout/navbar";
import AnyPlatForm from "@/components/sections/any-platform";
import Hero from "@/components/sections/hero";
import Partners from "@/components/sections/partners";

const Main = () => {
	return (
		<>
			<Navbar />
			<Hero />
			<Partners />
			<AnyPlatForm />
		</>
	);
};

export default Main;
