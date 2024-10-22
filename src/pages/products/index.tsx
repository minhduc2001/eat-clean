import React, {useEffect, useState} from "react";
import "./index.scss"
import ProductCard from "@/components/product";
import Pagination from '@mui/material/Pagination';
import { GoSearch } from "react-icons/go";
import { BiCategory } from "react-icons/bi";
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import {useAppDispatch, useAppSelector} from "@/redux/hooks.ts";
import {getCategory, getProductWithFilter} from "@/redux/features/productSlice.ts";
import {RootState} from "@/redux/store.ts";
import AsyncWrapper from "@/layouts/AsyncWrapper.tsx";
import {LoadingStatus} from "@/enums/enum.ts";
import {Divider} from "@mui/material";
import {useLocation} from "react-router-dom";
import Helmet from "@/components/Helmet.tsx";

function ProductsPage() {
    const [current, setCurrent] = useState(' ');
    const [page, setPage] = useState(1)
    const [filter, setFilter] = useState("name")
    const [sort, setSort] = useState("ASC")
    const [search, setSearch] = useState("")
    const [categories, setCategories] = useState([])
    const location = useLocation();
    const onPageChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value)
        dispatch(getProductWithFilter({
            page: value - 1,
            limit: 12,
            filter: filter,
            sort: sort,
            search: search,
            label: current
        }))

    };
    const onChangeCategory: MenuProps['onClick'] = (e) => {
        setCurrent(e.key)
        //scroll to item has id = category-e.key
        const element = document.getElementById(`category-${e.key}`)
        if (element) {
            element.scrollIntoView({behavior: "smooth"})
        }
    };

    const dispatch = useAppDispatch();

    useEffect(() => {
        getCategories();
        handleFilter("name", "ASC");
    }, [])

    const products = useAppSelector((root: RootState) => root.product.products)
    const category = useAppSelector((root: RootState) => root.product.categories)
    const totalPage = useAppSelector((root: RootState) => root.product.metadata?.totalPages)
    const isLoading = useAppSelector((root: RootState) => root.product.loading) == LoadingStatus.Pending

    const items: MenuProps['items'] = [
        {
            label: !current ? 'Tất cả' : category?.find(it => it.key === current)?.label || 'Tất cả',
            key: '*',
            icon: <BiCategory />,
            children: [{label: "Tất cả", key: "Tất cả"}].concat(category || [])
        },
    ];
    const handleFilter = (filter: string, sort: string) => {
        dispatch(getProductWithFilter({
            page: page - 1,
            limit: 12,
            filter: filter,
            sort: sort,
            search: search,
            label: current
        }))
    }

    useEffect(() => {
        const element = document.getElementById(`category-${location.hash.replace("#", "")}`)
        if (element) {
            element.scrollIntoView({behavior: "smooth"})
        }
    }, [location.hash, products, category]);


    const getCategories = () => {
        dispatch(getCategory())
    }

    const ProductCategory = (data: any) => {
        if (products?.filter(it => it?.categories?.some(it => it.key === data.category)).length === 0) {
            return <></>
        }
        return (
            <>
                <h3 className="bg-white category-nav pl-5 uppercase font-medium text-xl text-green-700 pt-5" id={`category-${data.category}`}>
                    {category?.find(it => it.key === data.category)?.label}
                </h3>
                <div className="grid list-product gap-4 bg-white">
                    {
                        products ? products.filter(it => it?.categories?.some(it => it.key === data.category)).map(it => (
                            <ProductCard product={it}/>
                        )) : <></>
                    }
                </div>
                <Divider />
            </>
        )
    }
    const onSearch = (e) => {
        setSearch(e.target.value)
        dispatch(getProductWithFilter({
            page: page - 1,
            limit: 12,
            filter: filter,
            sort: sort,
            search: e.target.value,
            label: current
        }))
    }

    return (
        <div className={"flex flex-col justify-center items-center bg-zinc-100"}>
            <Helmet title={"Sản phẩm"}/>
            <div style={{fontSize: "20pt", marginTop: "30px"}}>
                <h2>
                    sản phẩm giảm cân
                </h2>
            </div>
            <div className={"category-nav p-5 bg-white mt-5 font-sans"}>
                <div className={"filter flex "}>
                    <ul className={" ml-1 mb-0 w-full flex justify-between relative"}>
                        <Menu className={"mr-5 w-full"} onClick={onChangeCategory} selectedKeys={[current]} mode="horizontal" items={items} />
                    </ul>
                </div>
            </div>
            <AsyncWrapper loading={isLoading} fulfilled={true}>
                {
                    category && products ?
                        category.map(it => {
                            return <ProductCategory category={it.key} key={it.key}/>
                        })
                        : <></>
                }
                {/*<Pagination page={page} count={totalPage} onChange={onPageChange}/>*/}
            </AsyncWrapper>
        </div>
    );
}
export default ProductsPage;
