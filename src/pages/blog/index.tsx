import React, {useEffect, useState} from "react";
import "./index.scss"
import ProductCard from "@/components/product";
import BlogCard from "@/components/blog";
import Pagination from "@mui/material/Pagination";
import {useAppDispatch, useAppSelector} from "@/redux/hooks.ts";
import {RootState} from "@/redux/store.ts";
import {getBlogByPage, getProductWithFilter} from "@/redux/features/productSlice.ts";
import {LoadingStatus} from "@/enums/enum.ts";
import AsyncWrapper from "@/layouts/AsyncWrapper.tsx";
function BlogPage() {
    const dispatch = useAppDispatch()
    const [page, setPage] = useState(1)
    const onPageChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value)
        dispatch(getBlogByPage({page: value - 1, limit: 9}))
    };

    useEffect(() => {
        dispatch(getBlogByPage({page: page - 1, limit: 9}))
    }, [])

    const blogs =  useAppSelector((root: RootState) => root.product.blogs)
    const totalPage =  useAppSelector((root: RootState) => root.product.metadata.totalPages)
    const isLoading = useAppSelector((root: RootState) => root.product.loading) == LoadingStatus.Pending
    return (
        <div className={"flex flex-col justify-center items-center bg-zinc-100"}>
            <div style={{fontSize: "20pt", marginTop: "30px"}}>
                <h2>
                    Blog
                </h2>
            </div>
            <AsyncWrapper loading={isLoading} fulfilled={true}>
                <div className={"grid grid-cols-3 gap-3 bg-white w-3/4 p-8 mt-5"}>
                    {
                        blogs ? blogs.map(it => <BlogCard key={it.id} data={it} />) : <></>
                    }
                </div>

                <Pagination page={page} count={totalPage ? totalPage : 1} onChange={onPageChange}/>
            </AsyncWrapper>
        </div>
    );
}
export default BlogPage;
