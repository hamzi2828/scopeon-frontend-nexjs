import React from 'react';
import { blogs } from '../../app/data/Data';
import Image from 'next/image';

interface Blog {
    id: number;
    imageUrl: string;
    title: string;
    author: string;
    description: string;
    detailsLink: string;
    date: string;
    category: string;
    icons: {
        authorIcon: React.ReactNode;
        dateIcon: React.ReactNode;
        categoryIcon: React.ReactNode;
    };
}

const Blogs: React.FC = () => {
    return (
        <div className="py-10 max-w-screen-xl mx-auto">
            <div className="flex flex-col justify-center items-center text-center mb-10">
                <h2 className="text-orange-600 text-5xl font-semibold">Latest Blog</h2>
                <p className="text-gray-700 mt-2 text-xl max-w-screen-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam voluptatem nam rem.</p>
            </div>

            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mx-5 gap-4">
                {blogs.map((event: Blog) => (
                    <div key={event.id} className="rounded overflow-hidden shadow-md hover:shadow-2xl duration-300 bg-white">
                        {/* Image Section */}
                        <Image className="w-full h-60 object-cover" src={event.imageUrl} alt={event.title} height={360} width={640} />

                        {/* Content Section */}
                        <div className="px-6 py-4">
                            <h2 className="font-semibold text-xl mb-2 text-gray-900">{event.title}</h2>
                            <div className="flex items-center text-sm text-gray-600 mb-3">
                                {event.icons.authorIcon}
                                <span>{event.author}</span>
                            </div>
                            <p className="text-gray-700 text-base mb-4 line-clamp-3">
                                {event.description}
                            </p>
                            <a href={event.detailsLink} className="flex items-center text-orange-500 font-semibold text-sm hover:tracking-widest duration-300">
                                View Details
                                <svg className='ms-1' xmlns="http://www.w3.org/2000/svg" width="1.7em" height="1.7em" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M8.7 7.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l3.3 3.3l-3.3 3.3c-.2.2-.3.4-.3.7c0 .6.4 1 1 1c.3 0 .5-.1.7-.3l4-4c.4-.4.4-1 0-1.4zM16 7c-.6 0-1 .4-1 1v8c0 .6.4 1 1 1s1-.4 1-1V8c0-.6-.4-1-1-1" />
                                </svg>
                            </a>
                        </div>

                        {/* Footer Section */}
                        <div className="px-6 py-4 border-t border-gray-200">
                            <div className="flex justify-between items-center text-sm text-gray-600">
                                <div className="flex items-center">
                                    {event.icons.dateIcon}
                                    <span>{event.date}</span>
                                </div>
                                <div className="flex items-center">
                                    {event.icons.categoryIcon}
                                    <span>{event.category}</span>
                                </div>
                            </div>
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

export default Blogs;
