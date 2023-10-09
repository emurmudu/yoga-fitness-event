import Banner from "../../Header/Banner/Banner";
import LeftSideHome from "../LeftSideHome/LeftSideHome";
import RightSideHome from "../RightSideHome/RightSideHome";

const Home = () => {
    return (
        <div>
            <Banner></Banner>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="">
                    <LeftSideHome></LeftSideHome>
                </div>
                <div className="md:col-span-2 border">

                </div>
                <div className="">
                    <RightSideHome></RightSideHome>
                </div>
            </div>
        </div>
    );
};

export default Home;