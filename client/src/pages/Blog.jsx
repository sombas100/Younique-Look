import React from "react";
import { blogPosts } from "../constants/BlogPosts";

const Blog = () => {
  return (
    <section className="py-30 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Blog Header */}

        <p className="text-2xl font-bold text-gray-600 max-w-2xl mx-auto mb-10">
          Stay updated with the latest beauty tips, hairstyling trends, and
          photography insights from our expert team.
        </p>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                className="w-full h-56 object-cover hover:brightness-50 transition-all ease-in"
                src={post.image}
                alt={post.title}
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800">
                  {post.title}
                </h2>
                <i className="text-lg text-gray-500 mt-2">{post.date}</i>
                <p className="text-lg font-semibold text-gray-600 mt-4">
                  {post.summary}
                </p>
                <button className="mt-4 text-lg text-amber-300 font-bold hover:text-amber-500 transition-all cursor-pointer">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
