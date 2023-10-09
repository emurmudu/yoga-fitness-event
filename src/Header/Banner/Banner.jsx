import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Banner = () => {

    useEffect(() => {
        AOS.init({
            duration: 1200,
            offset: 200,
            easing: 'ease-in-out',
        });
    }, []);

    return (
        <div className="h-screen relative p-2 md:p-4">

            <div data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1200"
                className=" absolute inset-0 bg-cover bg-center opacity-40"
                style={{
                    backgroundImage: `url('https://i.ibb.co/vL97L11/yoga4.jpg')`,
                }}
            ></div>


            <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                <h1 data-aos="fade-up" data-aos-duration="1200" className=" text-xl md:text-2xl lg:text-6xl text-pink-600 font-bold">Yoga And Fitness Retreats</h1>
                <div data-aos="fade-up" data-aos-duration="1200" className=" py-4 md:mb-4">
                    <p className=" text-pink-600 font-bold  md:text-xl text-base text-center">Empower Your Body, Free Your Mind: Embrace Yoga & Fitness for a Healthier You!</p>
                </div>
                <div data-aos="fade-up" data-aos-duration="1200" className="flex items-center">
                    <Link to="/register">
                        <button className="px-4 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700 focus:outline-none">
                            Register Now
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;