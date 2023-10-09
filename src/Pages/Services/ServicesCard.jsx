import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const ServicesCard = ({ services }) => {
    const { id, image_url, thumbnail_url, title, price, short_description, details } = services;


    useEffect(() => {
        AOS.init({
            duration: 1200,
            offset: 200,
            easing: 'ease-in-out',
        });
    }, []);


    return (
        <div data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" className="card bg-base-100 shadow-xl mt-10 ">
            <figure><img src={image_url} alt="cardImage" /></figure>
            <div className="card-body">
                <h2 className="card-title text-pink-400 font-bold">
                    {title}
                </h2>
                <p>Price : {price}</p>
                {
                    details.length > 150
                        ? <p> {details.slice(0, 150)} <Link
                            to={`/services/${id}`}
                            className=" text-blue-700 font-bold"
                        >
                            <a className="text-pink-400 font-bold" href="">Read More .....</a>
                        </Link></p>
                        : <p>{details}</p>
                }
            </div>
        </div>
    );
};

export default ServicesCard;