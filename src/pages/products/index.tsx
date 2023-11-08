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

const filters = [
    {
        label: "Tên A -> Z",
        filter: "name",
        state: false,
        sort: "ASC"
    },
    {
        label: "Tên Z -> A",
        filter: "name",
        state: false,
        sort: "DESC"
    },
    {
        label: "Giá tăng dần",
        filter: "price",
        state: false,
        sort: "ASC"
    },
    {
        label: "Giá giảm dần",
        filter: "price",
        state: false,
        sort: "DESC"
    },
    {
        label: "Mới nhất",
        filter: "createAt",
        state: false,
        sort: "DESC"
    },
    {
        label: "Mua nhiều nhất",
        filter: "buycount",
        state: false,
        sort: "DESC"
    }

]

function ProductsPage() {
    const [current, setCurrent] = useState('');
    const [page, setPage] = useState(1)
    const [filter, setFilter] = useState("name")
    const [sort, setSort] = useState("ASC")
    const [search, setSearch] = useState("")
    const [categories, setCategories] = useState([])
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
    const onClick: MenuProps['onClick'] = (e) => {
        setCurrent(e.key)
        dispatch(getProductWithFilter({
            page: page - 1,
            limit: 12,
            filter: filter,
            sort: sort,
            search: search,
            label: e.key == "Tất cả" ? '' : e.key
        }))
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
            label: !current ? 'Tất cả' : current,
            key: 'SubMenu',
            icon: <BiCategory />,
            children: [{label: "Tất cả", key: "Tất cả"}].concat(category)
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


    const getCategories = () => {
        dispatch(getCategory())
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
            <div style={{fontSize: "20pt", marginTop: "30px"}}>
                <h2>
                    sản phẩm giảm cân
                </h2>
            </div>
            <div className={"w-3/4 p-5 bg-white mt-5 font-sans"}>
                <div className={"filter flex bg"}>
                    <ul className={"ul_col ml-1 mb-0 w-full flex justify-between relative"}>
                        <Menu className={"mr-5 w-1/5"} onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
                        <li className={'w-4/5 flex relative'}>
                            <ul className={"flex w-full justify-around pe-100 items-center"}>
                                {
                                    filters.map((it, index) => {
                                        return  (it.filter == filter && it.sort == sort ?
                                                <li key={it.label}>
                                                    <p onClick={() => {
                                                        setFilter(it.filter)
                                                        setSort(it.sort)
                                                        handleFilter(it.filter, it.sort)
                                                    }} className={"filter-content bg-green-700 text-white"}>{it.label}</p>
                                                </li> :
                                                <li key={it.label}>
                                                    <p onClick={() => {
                                                        setFilter(it.filter)
                                                        setSort(it.sort)
                                                        handleFilter(it.filter, it.sort)
                                                    }} className={"filter-content"}>{it.label}</p>
                                                </li>
                                            )
                                        }
                                    )
                                }
                            </ul>
                        </li>
                        <li className={'ml-16'}>
                            <div className={'flex h-full items-center relative'}>
                                <input className={'border rounded-2xl p-1 pl-4 text-xs'} value={search} onChange={onSearch}/>
                                <div className={'absolute right-2 text-xs'}>
                                    <GoSearch />
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <AsyncWrapper loading={isLoading} fulfilled={true}>
                <div className={"grid grid-cols-4 gap-4 bg-white w-3/4 p-8"}>
                    {
                        products ?
                            products.map(it => {
                                return <ProductCard key={it.id} product={it}/>
                            })
                            : <></>
                    }
                </div>
                <Pagination page={page} count={totalPage} onChange={onPageChange}/>
            </AsyncWrapper>
        </div>
    );
}
export default ProductsPage;
