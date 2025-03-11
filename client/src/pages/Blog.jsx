import React from "react";
import blogImg1 from "../assets/makeup2.jpg";
import blogImg2 from "../assets/FRONT-COVER.jpg";
import blogImg3 from "../assets/NIGHT-CLUB3.jpg";
import blogImg4 from "../assets/skincare1.jpg"; // New image for blog
import blogImg5 from "../assets/haircare1.jpg"; // New image for blog
import blogImg6 from "../assets/photography2.jpg"; // New image for blog

const blogPosts = [
  {
    id: 1,
    title: "5 Makeup Trends You Need to Try This Season",
    image: blogImg1,
    summary:
      "Discover the latest makeup trends that are taking over the beauty world. From bold lips to soft glam, find out what suits your style!",
    date: "March 12, 2025",
  },
  {
    id: 2,
    title: "How to Choose the Perfect Hairstyle for Your Face Shape",
    image: blogImg2,
    summary:
      "Your hairstyle can transform your entire look! Learn how to pick a flattering hairstyle that enhances your natural features.",
    date: "March 18, 2025",
  },
  {
    id: 3,
    title: "Photography Tips: Capturing Beauty Like a Pro",
    image: blogImg3,
    summary:
      "Want stunning portraits? Our expert photographers share pro tips on lighting, angles, and posing for perfect beauty shots.",
    date: "March 25, 2025",
  },
  {
    id: 4,
    title: "Skincare Routine: The Secret to Flawless Makeup",
    image: blogImg4,
    summary:
      "Your makeup is only as good as your skincare. Discover the essential steps to prep your skin for a flawless, long-lasting finish.",
    date: "April 5, 2025",
  },
  {
    id: 5,
    title: "The Ultimate Guide to Haircare for Every Season",
    image: blogImg5,
    summary:
      "Each season affects your hair differently. Learn how to protect, style, and nourish your hair year-round for healthy, luscious locks.",
    date: "April 15, 2025",
  },
  {
    id: 6,
    title: "Mastering the Art of Editorial Fashion Photography",
    image: blogImg6,
    summary:
      "Want to create high-fashion editorial shots? Get expert insights on lighting, posing, and styling for stunning magazine-worthy images.",
    date: "April 22, 2025",
  },
];

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
                <button className="mt-4 text-lg text-amber-500 font-bold hover:text-amber-700 transition-all cursor-pointer">
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
