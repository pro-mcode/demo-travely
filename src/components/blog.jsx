// import { blogItems } from "./blog-items";
// import { useNavigate } from "react-router";
// export default function Blog() {
//   const navigate = useNavigate();
//   return (
//     <div className="blog py-24">
//       <div className="blog-top mb-4">blog posts</div>
//       <h2 className="section-title">Recent Blog Posts</h2>
//       <div className="section-note">
//         Supply chain assets vesting period mass market graphical user interface.
//         Advisor traction seed money.
//       </div>
//       <div
//         className="blog-content w-full mx-auto
//       grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 space-y-8 sm:space-y-0  sm:gap-4 sm:max-w-[95%]"
//       >
//         {blogItems.map((blog, index) => (
//           <div
//             key={index}
//             className="blog-card bg-white px-8 py-12 pb-16 shadow-sm w-100 max-w-[90%] mx-auto sm:min-w-full"
//           >
//             <h4 className="text-lg font-medium md:text-2xl">{blog.title}</h4>
//             <div className="date text-sm py-5">{blog.date}</div>
//             <div className="content text-base">
//               {blog.content.split(" ").slice(0, 15).join(" ")}...
//             </div>
//             <button
//               onClick={() => navigate(`/blog/${blog.slug}`)}
//               className="btn-blog mt-4"
//             >
//               Read more
//             </button>
//           </div>
//         ))}
//       </div>
//       <div className="btn-blog mt-8 w-fit mx-auto">Load more</div>
//     </div>
//   );
// }

import { useState } from "react";
import { blogItems } from "./blog-items";
import { useNavigate } from "react-router";

export default function Blog() {
  const navigate = useNavigate();

  const ITEMS_PER_LOAD = 3;

  const [visibleCount, setVisibleCount] = useState(3);
  const [loading, setLoading] = useState(false);

  const handleLoadMore = () => {
    setLoading(true);

    setTimeout(() => {
      setVisibleCount((prev) => prev + ITEMS_PER_LOAD);
      setLoading(false);
    }, 600); // simulate loading animation
  };

  const visibleBlogs = blogItems.slice(0, visibleCount);

  const noMoreItems = visibleCount >= blogItems.length;

  return (
    <div id="blogs" className="blog py-24">
      <div className="blog-top mb-4">blog posts</div>
      <h2 className="section-title">Recent Blog Posts</h2>
      <div className="section-note">
        Supply chain assets vesting period mass market GUI. Advisor traction
        seed money.
      </div>

      <div
        className="blog-content w-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
        space-y-8 sm:space-y-0 sm:gap-4 sm:max-w-[95%]"
      >
        {visibleBlogs.map((blog, index) => (
          <div
            key={index}
            className="blog-card bg-white px-8 py-12 pb-16 shadow-sm w-100 max-w-[90%] 
            mx-auto sm:min-w-full animate-fadeIn"
          >
            <h4 className="text-lg font-medium md:text-2xl">{blog.title}</h4>
            <div className="date text-sm py-5">{blog.date}</div>
            <div className="content text-base">
              {blog.content.split(" ").slice(0, 15).join(" ")}...
            </div>

            <button
              onClick={() => navigate(`/blog/${blog.slug}`)}
              className="btn-blog mt-4 cursor-pointer"
            >
              Read more
            </button>
          </div>
        ))}
      </div>

      {/* Loading Spinner */}
      {loading && (
        <div className="loader mx-auto mt-6 animate-spin rounded-full border-t-primary h-10 w-10"></div>
      )}

      {/* Load More Button */}
      {!noMoreItems && !loading && (
        <div
          onClick={handleLoadMore}
          className="btn-blog mt-8 w-fit mx-auto cursor-pointer"
        >
          Load more
        </div>
      )}

      {/* Disabled when finished */}
      {noMoreItems && (
        <div className="text-center mt-6 opacity-60 text-sm">No more posts</div>
      )}
    </div>
  );
}
