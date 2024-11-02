import React, {ChangeEvent, useEffect, useState} from "react";

import {useAppDispatch, useAppSelector} from "@/redux/hooks.ts";
import {RootState} from "@/redux/store.ts";
import {getBills, getBlogByPage, getProductWithFilter} from "@/redux/features/productSlice.ts";
import {LoadingStatus} from "@/enums/enum.ts";
import AsyncWrapper from "@/layouts/AsyncWrapper.tsx";
import {
    Box,
    Table,
    TableRow,
    TableCell,
    TableContainer,
    TableHead,
    TableBody,
    Typography,
    CircularProgress, TablePagination
} from "@mui/material"
import {Badge} from "antd";
import {formatCurrency} from "@/utils/convert.tsx";
import Helmet from "@/components/Helmet.tsx";
function HistoryPage() {
    const dispatch = useAppDispatch()
    const [page, setPage] = useState(0)

    useEffect(() => {
        dispatch(getBills({page: page, limit: 15}))
    }, [])
    const isLoading = useAppSelector((root: RootState) => root.product.loading) == LoadingStatus.Pending
    const bills = useAppSelector((root: RootState) => root.product.bills)
    const metadata = useAppSelector((root: RootState) => root.product.metadata)
    const [limit, setLimit] = useState<number>(5);
    const handlePageChange = (event: any, newPage: number): void => {
        setPage(newPage);
        dispatch(getBills({page: page - 1, limit: 10}))
    };
    return (
        <div className={"flex flex-col justify-center items-center bg-zinc-100 min-h-[60vh]"}>
            <Helmet title={"Lịch sử đặt hàng"}/>
            <div style={{fontSize: "20pt", marginTop: "30px"}}>
                <h2>
                    Lịch sử đặt hàng
                </h2>
            </div>
            <AsyncWrapper loading={isLoading} fulfilled={true}>
                <div className={'w-9/12 bg-white mb-5 mt-5'}>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Order ID</TableCell>
                                    <TableCell>Product</TableCell>
                                    <TableCell>Username</TableCell>
                                    <TableCell>Phone</TableCell>
                                    <TableCell align="center">Address</TableCell>
                                    <TableCell>Price</TableCell>
                                    <TableCell>Status</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {bills ? bills.map((it) => {
                                    return (
                                        <TableRow
                                            hover
                                            key={it.id}
                                        >
                                            <TableCell>
                                                <Typography
                                                    variant="body1"
                                                    fontWeight="bold"
                                                    color="text.primary"
                                                    gutterBottom
                                                    noWrap
                                                >
                                                    {it.id}
                                                </Typography>
                                            </TableCell>
                                            <TableCell>
                                                <div className={'flex flex-col bg-white max-h-[100px] overflow-auto'}>
                                                    {it.carts.map(it =>
                                                        <ProductOrder data={it} />
                                                    )}
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <Typography
                                                    variant="body1"
                                                    fontWeight="bold"
                                                    color="text.primary"
                                                    gutterBottom
                                                    noWrap
                                                >
                                                    {it.username}
                                                </Typography>
                                            </TableCell>
                                            <TableCell>
                                                <Typography
                                                    variant="body1"
                                                    fontWeight="bold"
                                                    color="text.primary"
                                                    gutterBottom
                                                    noWrap
                                                >
                                                    {it.phone}
                                                </Typography>
                                            </TableCell>
                                            <TableCell align="right">
                                                {it.address}
                                            </TableCell>
                                            <TableCell>
                                                {it.price}
                                            </TableCell>
                                            <TableCell align="right">
                                                {it.billStatus}
                                            </TableCell>
                                        </TableRow>
                                    );
                                }) : <TableRow><TableCell><CircularProgress /></TableCell></TableRow>}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Box p={2}>
                        <TablePagination
                            component="div"
                            count={metadata ? metadata.totalPages : 0}
                            onPageChange={handlePageChange}
                            page={page}
                            rowsPerPage={10}
                            rowsPerPageOptions={[10]}
                        />
                    </Box>
                </div>
            </AsyncWrapper>
        </div>
    );
}


function ProductOrder(props: any) {
    console.log(props, 'ssss')
    return (
        <div className="flex h-full items-center w-[300px]  max-h-[100px] justify-around">
            <div className="w-[50px]">
                <a className="pos-relative embed-responsive embed-responsive-1by1" title="Trà Gạo Lứt Đông Trùng Wise Food 300g, 20 Gói /Hộp Giảm Stress Hiệu Quả">
                    <img className="w-full" src={props?.data?.foods?.imgs[0]} />
                </a>
            </div>
            <div className="product-cart-infor flex justify-between w-7/12 border-y-green-900 ml-5">
                <div className="w-full flex items-center">
                    <h3 className="product-name">
                        <p className="text-gray-700 text-sm">
                            {props?.data?.foods?.name}
                        </p>
                    </h3>
                    <span className="variant-title font-semibold ml-5">x{props?.data?.quantity}</span>
                </div>
            </div>
        </div>
    )
}
export default HistoryPage;
