import React from 'react';
import { upcomingCards } from "../../../data/Data";
import Image from 'next/image';

interface UpcomingCard {
    id: number;
    imageUrl: string;
    title: string;
    location: string;
    heartIcon: React.ReactNode;
}

const UpcomingEvents: React.FC = () => {
    return (
        <div className="py-10 max-w-screen-xl mx-auto">
            <div className="flex flex-col justify-center items-center text-center mb-10">
                <h2 className="text-orange-500 text-5xl font-semibold">Upcoming events</h2>
                <p className="text-gray-700 mt-2 text-xl max-w-screen-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam voluptatem nam rem.</p>
            </div>
            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mx-5 gap-4">
                {upcomingCards.map((upcomingcard: UpcomingCard) => (
                    <div key={upcomingcard.id} className="bg-white rounded-none shadow-md hover:shadow-2xl duration-300">
                        <div className="relative">
                            <Image className="w-full h-60 object-cover rounded-t-lg" src={upcomingcard.imageUrl} alt="Event Image" width={384} height={240} />
                            <div className="absolute top-0 left-0 bg-green-600 text-white text-sm px-3 py-1 text-center">
                                <span>12-15</span>
                                <br />
                                <span>NOV</span>
                            </div>
                        </div>
                        <div className="p-4">
                            <h3 className="text-xl font-semibold text-gray-800">{upcomingcard.title}</h3>
                            <div className="flex items-center mt-2 text-gray-600">
                                <svg className="mr-2 text-orange-600" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 576 512">
                                    <path fill="currentColor" d="M288 0c-69.59 0-126 56.41-126 126c0 56.26 82.35 158.8 113.9 196.02c6.39 7.54 17.82 7.54 24.2 0C331.65 284.8 414 182.26 414 126C414 56.41 357.59 0 288 0m0 168c-23.2 0-42-18.8-42-42s18.8-42 42-42s42 18.8 42 42s-18.8 42-42 42M20.12 215.95A32.01 32.01 0 0 0 0 245.66v250.32c0 11.32 11.43 19.06 21.94 14.86L160 448V214.92c-8.84-15.98-16.07-31.54-21.25-46.42zM288 359.67c-14.07 0-27.38-6.18-36.51-16.96c-19.66-23.2-40.57-49.62-59.49-76.72v182l192 64V266c-18.92 27.09-39.82 53.52-59.49 76.72c-9.13 10.77-22.44 16.95-36.51 16.95m266.06-198.51L416 224v288l139.88-55.95A32 32 0 0 0 576 426.34V176.02c0-11.32-11.43-19.06-21.94-14.86"></path>
                                </svg>
                                <p className="text-sm">{upcomingcard.location}</p>
                            </div>
                        </div>

                        <div className="flex items-center justify-between p-4 border-t border-gray-200">
                            <a href="#" className="flex items-center text-orange-500 font-semibold text-sm hover:tracking-widest duration-300">
                                View Details
                                <svg className='ms-1' xmlns="http://www.w3.org/2000/svg" width="1.7em" height="1.7em" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M8.7 7.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l3.3 3.3l-3.3 3.3c-.2.2-.3.4-.3.7c0 .6.4 1 1 1c.3 0 .5-.1.7-.3l4-4c.4-.4.4-1 0-1.4zM16 7c-.6 0-1 .4-1 1v8c0 .6.4 1 1 1s1-.4 1-1V8c0-.6-.4-1-1-1" />
                                </svg>
                            </a>
                            <button className="text-orange-500 hover:text-white bg-gray-200 hover:bg-orange-600 p-1 rounded-full duration-300">
                                {upcomingcard.heartIcon}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center mt-10">
                <div className="custom-btn view-all-btn">
                    <span>
                        <a href="#!">see All</a>
                    </span>
                </div>
            </div>  
        </div>
    );
};

export default UpcomingEvents;
