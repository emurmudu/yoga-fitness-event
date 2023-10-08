import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="h-screen relative">

            <div
                className="absolute inset-0 bg-cover bg-center opacity-40"
                style={{
                    backgroundImage: `url('https://i.ibb.co/vL97L11/yoga4.jpg')`,
                }}
            ></div>


            <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                <h1 className=" text-xl md:text-2xl lg:text-6xl text-pink-600 font-bold">Yoga And Fitness Retreats</h1>
                <div className=" py-4 mb-4">
                    <p className=" text-pink-600 font-bold md:text-xl text-lg">Empower Your Body, Free Your Mind: Embrace Yoga & Fitness for a Healthier You!</p>
                </div>
                <div className="flex items-center">
                    <Link to="/register">
                        <button className="px-4 py-2 bg-pink-500 text-white rounded-md hover:bg-black focus:outline-none">
                            Register Now
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;