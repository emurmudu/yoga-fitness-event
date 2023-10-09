import { useLoaderData } from "react-router-dom";
import Banner from "../../Header/Banner/Banner";
import LeftSideHome from "../LeftSideHome/LeftSideHome";
import RightSideHome from "../RightSideHome/RightSideHome";
import ServicesCard from "../Services/ServicesCard";


const Home = () => {
    const services = useLoaderData();

    return (
        <div>
            <Banner></Banner>

            <div className=" p-2 md:p-4 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-2">
                <div className="">
                    <LeftSideHome></LeftSideHome>
                </div>
                <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2">
                    {
                        services.map(service => <ServicesCard key={service.id} services={service}></ServicesCard>)
                    }
                </div>
                <div className="">
                    <RightSideHome></RightSideHome>
                </div>
            </div>
        </div>
    );
};

export default Home;