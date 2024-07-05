"use client"
import React, {useState} from "react";
import Link from "next/link";
import {
    Box,
    Button,
    FormControl,
    InputLabel,
    TextField,
    Select,
    SelectChangeEvent,
    MenuItem,
    InputAdornment,
    Switch
  } from "@mui/material";
import { Search, FilterAlt, FilterAltOutlined, Menu } from "@mui/icons-material";
import Pagination from "../Pagination";
import { useTheme } from "@mui/material";

const RealiCardComponent: React.FC = () => {
    const theme = useTheme()
    const [typeJackpot, setTypeJackpot] = useState('')
    const [tableData, setTableData] = useState([
        {
            championTime: "Brasileirão 2024 / Flamengo",
            bettorsNum: "2.000",
            raisedAmount: "R$ 35.000,00",
            potValue: "R$ 25.000,00",
            status: "Ativo",
            endedDate: "30/05/2024"
        },
        {
            championTime: "Brasileirão 2024 / Flamengo",
            bettorsNum: "2.000",
            raisedAmount: "R$ 35.000,00",
            potValue: "R$ 25.000,00",
            status: "Ativo",
            endedDate: "30/05/2024"
        },
        {
            championTime: "Brasileirão 2024 / Flamengo",
            bettorsNum: "2.000",
            raisedAmount: "R$ 35.000,00",
            potValue: "R$ 25.000,00",
            status: "Ativo",
            endedDate: "30/05/2024"
        },
        {
            championTime: "Brasileirão 2024 / Flamengo",
            bettorsNum: "2.000",
            raisedAmount: "R$ 35.000,00",
            potValue: "R$ 25.000,00",
            status: "Ativo",
            endedDate: "30/05/2024"
        },
        {
            championTime: "Brasileirão 2024 / Flamengo",
            bettorsNum: "2.000",
            raisedAmount: "R$ 35.000,00",
            potValue: "R$ 25.000,00",
            status: "Ativo",
            endedDate: "30/05/2024"
        },
        {
            championTime: "Brasileirão 2024 / Flamengo",
            bettorsNum: "2.000",
            raisedAmount: "R$ 35.000,00",
            potValue: "R$ 25.000,00",
            status: "Ativo",
            endedDate: "30/05/2024"
        }
    ])

    return (
        <Box display="flex" flexDirection="column">
            <Box display="flex" flexDirection="column">
                <Box display="grid" gridTemplateColumns="1fr 1fr 1fr 1fr" columnGap={5} alignItems="center" width="100%">
                    <FormControl variant="filled" className="w-full">
                        <InputLabel id="demo-simple-select-filled-label">Tipos de Evento</InputLabel>
                        <Select
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                            // value={age}
                            // onChange={handleChange}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl variant="filled" className="w-full">
                        <InputLabel id="demo-simple-select-filled-label">Tipos de Evento</InputLabel>
                        <Select
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                            // value={age}
                            // onChange={handleChange}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        size="medium"
                        variant="filled"
                        placeholder="Pesquisar"
                        className="w-full"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Search />
                                </InputAdornment>
                            )
                        }}
                        />
                    <Box display="flex" justifyContent="flex-end" alignItems="center" width="100%">
                        <Button onClick={() => console.log("asdfadf")}>
                            <Box display="flex" alignItems="center" gap={1}>
                                <FilterAltOutlined color="primary" />
                                <span className="underline" style={{ color: theme.palette.primary.main }}>Filtros</span>
                            </Box>
                        </Button>
                    </Box>
                </Box>
                <TextField
                    size="medium"
                    variant="filled"
                    placeholder="Pesquisar"
                    className="w-[45%] !mt-5"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Search />
                            </InputAdornment>
                        )
                    }}
                    />
            </Box>
            <Box marginTop={5}>
                <Box maxWidth="100%" overflow="auto">
                    <table className="w-full table-auto">
                        <thead>
                            <tr className="text-center">
                                <th className="py-4 font-bold text-dark dark:text-white">
                                    Campeonato/Time
                                </th>
                                <th className="min-w-[150px] py-4 font-bold text-dark dark:text-white">
                                    Apostadores
                                </th>
                                <th className="min-w-[120px] py-4 font-bold text-dark dark:text-white">
                                    Valor arrecadado
                                </th>
                                <th className="min-w-[120px] py-4 font-bold text-dark dark:text-white">
                                    Saldo do Pote
                                </th>
                                <th className="min-w-[120px] py-4 font-bold text-dark dark:text-white">
                                    Status
                                </th>
                                <th className="py-4 font-bold text-dark dark:text-white">
                                    Data de encerramento
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map((packageItem, index) => (
                                <tr key={index} className="text-center">
                                    <td className={`border-[#eee] px-4 py-2 dark:border-dark-3 ${index === tableData.length - 1 ? "border-b-0" : "border-b"}`} >
                                        <Link href={`/realicard/detail`} className="hover:text-green-300 duration-500">
                                            {packageItem.championTime}
                                        </Link>
                                    </td>
                                    <td className={`border-[#eee] px-4 py-2 dark:border-dark-3 ${index === tableData.length - 1 ? "border-b-0" : "border-b"}`}>
                                        <p className="text-dark dark:text-white">
                                            {packageItem.bettorsNum}
                                        </p>
                                    </td>
                                    <td className={`border-[#eee] px-4 py-2 dark:border-dark-3 ${index === tableData.length - 1 ? "border-b-0" : "border-b"}`}>
                                        <p className={`inline-flex rounded-full py-1 text-body-sm font-medium`}>
                                            {packageItem.raisedAmount}
                                        </p>
                                    </td>
                                    <td className={`border-[#eee] px-4 py-2 dark:border-dark-3 ${index === tableData.length - 1 ? "border-b-0" : "border-b"}`}>
                                        <p className={`inline-flex rounded-full py-1 text-body-sm font-medium`}>
                                            {packageItem.potValue}
                                        </p>
                                    </td>
                                    <td className={`border-[#eee] px-4 py-2 dark:border-dark-3 ${index === tableData.length - 1 ? "border-b-0" : "border-b"}`} >
                                        <p
                                            className={`inline-flex rounded-full py-1 text-body-sm font-medium`}
                                            style={{
                                                color: packageItem.status === "Ativo" ? theme.palette.primary.main : theme.palette.error.main
                                            }}
                                        >
                                            {packageItem.status}
                                        </p>
                                    </td>
                                    <td className={`border-[#eee] px-4 py-2 dark:border-dark-3 ${index === tableData.length - 1 ? "border-b-0" : "border-b"}`} >
                                        <p
                                            className={`inline-flex rounded-full py-1 text-body-sm font-medium`}
                                            style={{
                                                color: packageItem.status === "Ativo" ? theme.palette.primary.main : theme.palette.error.main
                                            }}
                                        >
                                            {packageItem.endedDate}
                                        </p>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Box>
            </Box>
            <Box display="flex" justifyContent="end" marginTop={5}>
                <Pagination />
            </Box>
        </Box>
    )
}

export default RealiCardComponent;