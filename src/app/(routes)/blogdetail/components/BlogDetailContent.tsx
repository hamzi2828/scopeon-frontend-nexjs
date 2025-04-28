"use client";
import React from "react";
import {
  FaUser,
  FaCalendarAlt,
  FaComments,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPinterestP,
  FaThumbsUp,
  FaThumbsDown,
} from "react-icons/fa";
import { BlogCardsData } from "../../../data/Data";
import Link from "next/link";

interface BlogDetailContentProps {
  id: string;
}

const BlogDetailContent: React.FC<BlogDetailContentProps> = ({ id }) => {
  const blog = BlogCardsData.find((blog) => blog.id === parseInt(id));

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Blog Not Found
          </h1>
          <Link href="/blogs" className="text-orange-500 hover:underline">
            Return to Blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="my-5">
      <div key={id} className="h-96">
        <img
          src={blog.imageUrl}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="bg-white py-5 px-4 border gap-4 shadow">
        <div className="p-4">
          <h1 className="text-3xl font-semibold mb-4">{blog.title}</h1>
          <div className="flex flex-wrap items-center justify-between md:justify-start sm:space-x-4 text-gray-600 mb-4">
            <div className="flex items-center space-x-1">
              <FaUser className="text-orange-500" />
              <span>{blog.author}</span>
            </div>
            <div className="flex items-center space-x-1">
              <FaCalendarAlt className="text-orange-500" />
              <span>{blog.date}</span>
            </div>
            <div className="flex items-center space-x-1">
              <FaComments className="text-orange-500" />
              <span>5 Comments</span>
            </div>
          </div>
          <p className="text-gray-800 leading-relaxed mb-6">
            {blog.description}
          </p>
          <div className="bg-gray-100 p-4 mb-6">
            <p className="text-2xl font-normal">
              <span className="text-orange-500 text-4xl font-bold">L</span>
              aboriosam similique nam corporis optio animi, officia eos quas.
              Unde consequuntur aut.
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">
            Doloribus voluptates architecto recusandae, obcaecati praesentium
            voluptatem eligendi quas accusantium fuga soluta eius ducimus sed
            voluptatum?
          </p>
          <div className="h-96 mb-6">
            <img
              src="https://theme.bitspecksolutions.com/html-template/listright/demo/assets/images/event-2.jpg"
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="flex justify-between md:items-center pt-4 border-t border-gray-200">
            <div className="flex flex-col items-start">
              <span className="font-bold mb-2">Tags</span>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-100 text-gray-800 px-3 py-1 text-sm uppercase hover:text-white hover:bg-orange-500 duration-300 cursor-pointer rounded-full">
                  Creative
                </span>
                <span className="bg-gray-100 text-gray-800 px-3 py-1 text-sm uppercase hover:text-white hover:bg-orange-500 duration-300 cursor-pointer rounded-full">
                  Digital
                </span>
                <span className="bg-gray-100 text-gray-800 px-3 py-1 text-sm uppercase hover:text-white hover:bg-orange-500 duration-300 cursor-pointer rounded-full">
                  Music
                </span>
              </div>
            </div>
            <div className="flex flex-col md:items-end items-start">
              <span className="font-bold mb-2">Share</span>
              <div className="flex gap-2">
                <Link
                  href=""
                  className="text-gray-500 hover:text-orange-500 text-xl hover:translate-x-1 duration-300"
                >
                  <FaFacebookF />
                </Link>
                <Link
                  href=""
                  className="text-gray-500 hover:text-orange-500 text-xl hover:translate-x-1 duration-300"
                >
                  <FaTwitter />
                </Link>
                <Link
                  href=""
                  className="text-gray-500 hover:text-orange-500 text-xl hover:translate-x-1 duration-300"
                >
                  <FaLinkedinIn />
                </Link>
                <Link
                  href=""
                  className="text-gray-500 hover:text-orange-500 text-xl hover:translate-x-1 duration-300"
                >
                  <FaInstagram />
                </Link>
                <Link
                  href=""
                  className="text-gray-500 hover:text-orange-500 text-xl hover:translate-x-1 duration-300"
                >
                  <FaPinterestP />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Comments Section */}
      <div className="bg-white py-5 px-4 border gap-4 shadow mt-5">
        <div className="mb-3">
          <h5 className="text-xl md:text-2xl font-semibold text-black relative inline-block">
            Comments (7)
            <span className="block h-1 bg-orange-500 w-28 mt-2"></span>
          </h5>
          <div className="border-t-4 border-gray-200 mt-[-4px] w-full"></div>
        </div>
        <div className="flex items-start p-4">
          <div className="w-20 h-20 mr-4 flex-shrink-0">
            <img
              className="w-full h-full rounded-full object-cover"
              src="https://theme.bitspecksolutions.com/html-template/listright/demo/assets/images/meta/img-2.png"
              alt="User"
            />
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <h2 className="font-bold text-lg">Thiego Silva</h2>
                <p className="text-sm text-gray-500 ms-3">12 Sep, 2027</p>
              </div>
            </div>
            <p className="text-gray-700 mt-2 leading-relaxed">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus architecto eos fugiat.
            </p>
            <div className="flex mt-4 space-x-4">
              <div className="flex items-center space-x-1 border px-2 py-1 rounded-2xl">
                <FaThumbsUp size={15} />
                <span>12</span>
              </div>
              <div className="flex items-center space-x-1 border px-2 py-1 rounded-2xl">
                <FaThumbsDown size={15} />
                <span>2</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Comment Form */}
      <div className="bg-white py-5 px-4 border gap-4 shadow mt-5">
        <h2 className="font-bold text-lg mb-4">Leave Your Comment</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="User Name *"
            className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:border-gray-500"
          />
          <input
            type="email"
            placeholder="Email *"
            className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:border-gray-500"
          />
          <textarea
            placeholder="Write Review"
            className="w-full border border-gray-300 px-4 py-2 h-32 resize-none focus:outline-none focus:border-gray-500"
          ></textarea>
          <div className="flex space-x-4">
            <button
              type="submit"
              className="bg-orange-500 text-white px-6 py-2 font-bold uppercase text-sm hover:bg-orange-600"
            >
              Submit Comment
            </button>
            <button
              type="reset"
              className="border border-gray-300 text-gray-600 px-6 py-2 text-sm hover:bg-gray-200"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogDetailContent;
