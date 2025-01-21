import React from 'react';
import { workingCards } from "../../../data/Data";

interface WorkingCard {
    id: number;
    step: string;
    icon: React.ReactElement;
    title: string;
    description: string;
}

const WorkingCards: React.FC = () => {
    return (
        <div className="bg-[#f8f8ed] py-10">
            <div className='max-w-screen-xl mx-auto'>
                <div className="flex flex-col justify-center items-center text-center mb-10">
                    <h2 className="text-orange-500 text-5xl font-semibold">How It Works?</h2>
                    <p className="text-gray-700 mt-2 text-xl max-w-screen-sm">It&apos;s really simple. Follow the steps and get started today!</p>
                </div>
                <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 mx-auto px-4">
                    {workingCards.map((carddata: WorkingCard) => (
                        <div key={carddata.id} className="bg-white px-4 pt-8 pb-10 rounded-lg shadow-lg hover:shadow-2xl duration-300 relative text-center hover:text-orange-100 group">
                            <div className="absolute top-0 left-0 text-7xl text-gray-200 group-hover:text-orange-100 transition-colors duration-300">
                                {carddata.step}
                            </div>
                            <div className="relative z-10">
                                <div className="inline-block bg-orange-100 p-6 mb-4 border border-orange-600 rounded-custom-shape text-orange-600">
                                    {carddata.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">{carddata.title}</h3>
                                <p className="text-gray-800 mt-2">{carddata.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WorkingCards;
