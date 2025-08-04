import Navbar from "@/components/layout/navbar";
import AnyPlatForm from "@/components/sections/any-platform";
import Hero from "@/components/sections/hero";
import Partners from "@/components/sections/partners";
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
		</>
	);
};

export default Main;
