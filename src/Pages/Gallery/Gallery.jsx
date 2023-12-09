

// import galleryData from './../../../public/gallery.json';
import galleryData from '../../gallery.json';

const Gallery = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-4 md:p-6 lg:px-10 lg:mt-4 lg:mb-4 gap-4">
            {galleryData.map(image => (
                <div key={image.id} className="overflow-hidden">
                    <img
                        src={image.image_url}
                        alt={image.title}
                        className="w-full h-auto"
                    />
                    <p className="text-center mt-2">{image.title}</p>
                </div>
            ))}
        </div>
    );
};

export default Gallery;