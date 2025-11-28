export default function BlogExpand({ blog }) {
  return (
    <div className="blog-expand">
      <div className="blog-expand-content">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide">
          {blog.title}
        </h1>
        <div className="text-base font-normal py-2 border-t border-b border-gray-400 mt-10 mb-4">
          By <span className="font-bold">{blog.author}</span> | Last Updated:{" "}
          <span className="font-bold">{blog.date}</span> | Category:{" "}
          <span className="font-bold">{blog.category}</span> | Reading Time:{" "}
          <span className="font-bold">{blog.readingTime}</span>
        </div>
        <img
          src={blog.img}
          alt={blog.title}
          srcset=""
          className="max-h-102 w-full my-6"
        />
        <p className="text-lg text-black/70 py-6 tracking-wide">
          {blog.content}
        </p>
      </div>
    </div>
  );
}
