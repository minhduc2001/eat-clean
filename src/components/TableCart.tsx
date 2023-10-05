import { formatCurrency } from "@/utils/convert";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

interface TableCartProps {
  image: string;
  name: string;
  price: number;
  quantity: number;
}

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

function TableCart() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="center">PRODUCT</TableCell>
            <TableCell align="center">Price</TableCell>
            <TableCell align="center">quantity</TableCell>
            <TableCell align="center">SUBTOTAL</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <img
                  className="w-[50px] h-[76px] object-cover shadow-lg shadow-gray-600"
                  src="https://demo.kaliumtheme.com/bookstore/wp-content/uploads/2019/02/2-Rules-for-Life-An-Antidote-to-Chaos-by-Jordan-B.-Peterson-820x1238.jpg"
                  alt=""
                />
              </TableCell>
              <TableCell align="center">
                <p className="text-xl">
                  {"12 Rules for Life: An Antidote to Chaos"}
                </p>
              </TableCell>
              <TableCell align="center">
                <p className="text-xl">{formatCurrency(9209809)}</p>
              </TableCell>
              <TableCell align="center">
                <input
                  type="number"
                  className="w-[90px] h-[20px] p-6 bg-gray-200 focus:outline-none text-xl"
                />
              </TableCell>
              <TableCell align="center">{row.carbs}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableCart;
