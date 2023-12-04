import React from 'react';
import { ReactDOM } from 'react';
import { useNavigate } from 'react-router-dom';

const MiniGallery: React.FC = () => {
    const navigate = useNavigate();

    const handleGalleryClick = () => {
        // Navigate to the /gallery route
        navigate('/gallery');
    };
    return (
        <div className="container mx-auto  py-2   w-full  hover:cursor-pointer" onClick={handleGalleryClick}
        >
            <div className="-m-1 flex flex-wrap md:-m-2">
                <div className="flex w-1/2 flex-wrap">
                    <div className="w-1/2 p-1 md:p-2">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src="https://images.pexels.com/photos/54098/us-army-soldiers-army-men-54098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    </div>
                    <div className="w-1/2 p-1 md:p-2">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src="https://images.pexels.com/photos/78783/submachine-gun-rifle-automatic-weapon-weapon-78783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    </div>
                    <div className="w-full p-1 md:p-2">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src="https://visitukraine.today/media/blog/previews/cMwyVhhQy352aXkOxmcbcZL2kTIDBjoAdOKMhbHk.jpg" />
                    </div>
                </div>
                <div className="flex w-1/2 flex-wrap">
                    <div className="w-full p-1 md:p-2">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src="https://iran.mfa.gov.ua/storage/app/uploads/public/629/9c0/99c/6299c099c1616075478460.jpg" />
                    </div>
                    <div className="w-1/2 p-1 md:p-2">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src="https://nova.net.ua/wp-content/uploads/2021/01/image-203.png" />
                    </div>
                    <div className="w-1/2 p-1 md:p-2">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src="https://war.ukraine.ua/wp-content/uploads/2022/04/Irpin-1-April-freed-Gleb-Garanich-g_garanich.jpg" />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default MiniGallery;
