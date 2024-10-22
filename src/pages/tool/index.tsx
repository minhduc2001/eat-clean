import React, {useEffect, useState} from "react";
import "./index.scss"
import ProductCard from "@/components/product";
import Pagination from '@mui/material/Pagination';
import { GoSearch } from "react-icons/go";
import { BiCategory } from "react-icons/bi";
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import {useAppDispatch, useAppSelector} from "@/redux/hooks.ts";
import {getCategory, getCombo, getProductWithFilter} from "@/redux/features/productSlice.ts";
import {RootState} from "@/redux/store.ts";
import AsyncWrapper from "@/layouts/AsyncWrapper.tsx";
import {LoadingStatus} from "@/enums/enum.ts";
import {Divider} from "@mui/material";
import {useLocation} from "react-router-dom";
import Helmet from "@/components/Helmet.tsx";

function CombosPage() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        handleFilter();
    }, [])

    const products = useAppSelector((root: RootState) => root.product.combos)
    const isLoading = useAppSelector((root: RootState) => root.product.loading) == LoadingStatus.Pending
    const handleFilter = () => {
        dispatch(getCombo())
    }

    return (
        <div className={"flex flex-col justify-center items-center bg-zinc-100"}>
            <Helmet title={"Combo"}/>
            <div style={{fontSize: "20pt", marginTop: "30px"}}>
                <h2>
                    Combo
                </h2>
            </div>
            <AsyncWrapper loading={isLoading} fulfilled={true}>
                <div className="grid list-product gap-4 bg-white mt-2">
                    {
                        products ? products.map(it => (
                            <ProductCard product={it}/>
                        )) : <></>
                    }
                </div>
            </AsyncWrapper>
        </div>
    );
}
export default CombosPage;
