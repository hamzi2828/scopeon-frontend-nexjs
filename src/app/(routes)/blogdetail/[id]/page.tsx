"use client";
import React from 'react';
import NavBar from '../../../components/NavBar';
import Footer from '../../../components/Footer';
import BlogDetailHeader from '../components/BlogDetailHeader';
import BlogDetailContent from '../components/BlogDetailContent';
import BlogFilters from '../../blogs/components/BlogFilters';



export default function BlogDetail({ params }: { params: { id: string } }) {

    return (
        <main>
            <NavBar />
            <BlogDetailHeader />
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Main Content */}
                    <div className="lg:w-2/3">
                        <BlogDetailContent id={params.id} />
                    </div>

                    {/* Sidebar */}
                    <div className="lg:w-1/3">
                        <BlogFilters />
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
