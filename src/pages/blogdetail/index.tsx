import React, {useEffect} from "react";
import {useLocation} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "@/redux/hooks.ts";
import {getBlogById, getProductById} from "@/redux/features/productSlice.ts";
import {RootState} from "@/redux/store.ts";
import HTMLReactParser from "html-react-parser";

function BlogDetailPage() {
    const location = useLocation();
    const dispatch = useAppDispatch()
    const  id = Number(location.pathname.substring(location.pathname.lastIndexOf('/') + 1))
    const blog  = useAppSelector((root: RootState) => root.product.blog)
    useEffect(() => {
        dispatch(getBlogById(id))
    }, [])

    return (
        <div className={"flex flex-col justify-center items-center bg-zinc-100"}>

            <div style={{fontSize: "20pt", marginTop: "30px"}}>
                <h2>
                    Pescatarian Diet Là Gì? Lợi Ích Từ Việc Ăn Chay Để Duy Trì Sức Khoẻ
                </h2>
            </div>
            <div className="content w-9/12 mt-10 flex flex-col">
                {HTMLReactParser(blog?.content || "")}
            </div>
        </div>
    );
}
export default BlogDetailPage;
