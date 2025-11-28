import Blog from "../components/blog";
import BlogExpand from "../components/blog-expand";
import Footer from "../components/footer";
import { useParams } from "react-router";
import { blogItems } from "../components/blog-items";
import Header from "../components/header";

export default function BlogPage() {
  const { slug } = useParams();

  const blog = blogItems.find((item) => item.slug === slug);

  return (
    <>
      <title>Blogs</title>
      <Header />
      <BlogExpand blog={blog} />
      <Blog blog={blog} />
      <Footer />
    </>
  );
}
