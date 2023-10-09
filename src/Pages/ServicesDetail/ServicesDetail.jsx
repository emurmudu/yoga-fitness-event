import { useParams } from "react-router-dom";
import RightSideHome from "../RightSideHome/RightSideHome";
import { useEffect, useState } from "react";


const ServicesDetail = () => {
    const { id } = useParams();
    const [serviceDetails, setServiceDetails] = useState(null);


    useEffect(() => {
        fetch(`/yoga.json`)
            .then(response => response.json())
            .then(data => {
                const service = data.find(service => service.id === Number(id));
                setServiceDetails(service);
            })
            .catch(error => console.error('Error fetching service details:', error));
    }, [id]);


    return (
        <div className="grid md:grid-cols-1 lg:grid-cols-4 gap-4 px-6 md:px-10 mb-4">
            <div className=" col-span-3">
                {serviceDetails && (
                    <>
                        <h2 className="text-pink-400 text-lg md:text-2xl lg:text-3xl py-6 font-bold">{serviceDetails.title}</h2>
                        <img className=" mb-4" src={serviceDetails.image_url} alt="Service" />
                        <p>{serviceDetails.details}</p>
                    </>
                )}
            </div>
            <div>
                <RightSideHome />
            </div>
        </div>
    );
};

export default ServicesDetail;