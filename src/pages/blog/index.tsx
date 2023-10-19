import React from "react";
import "./index.scss"
import ProductCard from "@/components/product";
import { Pagination } from 'antd';
import BlogCard from "@/components/blog";
function BlogPage() {
    return (
        <div className={"flex flex-col justify-center items-center bg-zinc-100"}>
            <div style={{fontSize: "20pt", marginTop: "30px"}}>
                <h2>
                    Blog
                </h2>
            </div>
            <div className={"grid grid-cols-3 gap-3 bg-white w-3/4 p-8 mt-5"}>
                <BlogCard color={""} title={""} image={""} />
                <BlogCard color={""} title={""} image={""} />
                <BlogCard color={""} title={""} image={""} />
                <BlogCard color={""} title={""} image={""} />
                <BlogCard color={""} title={""} image={""} />
                <BlogCard color={""} title={""} image={""} />
                <BlogCard color={""} title={""} image={""} />
                <BlogCard color={""} title={""} image={""} />
                <BlogCard color={""} title={""} image={""} />
            </div>

            <Pagination defaultCurrent={1} total={50} />
        </div>
    );
}
export default BlogPage;
