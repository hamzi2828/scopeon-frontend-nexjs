import React from 'react';

const MoreLeadsBanner: React.FC = () => {
    return (
        <div 
            className="relative bg-cover bg-center py-32 bg-fixed" 
            style={{ backgroundImage: "url('https://theme.bitspecksolutions.com/html-template/listright/demo/assets/images/aggrement.jpg')" }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-60"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white">
                <h1 className="text-orange-500 text-5xl font-semibold mb-4">
                    Get More Leads To Grow Your Business
                </h1>
                <p className="text-lg md:text-xl mb-6 max-w-screen-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam voluptatem nam rem.
                </p>
                <button className="bg-orange-600 hover:scale-110 hover:bg-[#00000033] border-0 hover:border border-orange-600 duration-700 text-white py-2 px-5 rounded">
                    Add Your Business Listing
                </button>
            </div>
        </div>
    );
};

export default MoreLeadsBanner;
