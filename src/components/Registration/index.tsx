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
import { Search } from "@mui/icons-material";
import Pagination from "../Pagination";
import { useTheme } from "@mui/material";

const RegistComponent: React.FC = () => {
    const theme = useTheme()
    const [typeJackpot, setTypeJackpot] = useState('')
    const [tableData, setTableData] = useState([
        {
            createdDate: "21/05/2024",
            event: "Flamengo X Goiás",
            championship: "Campeonato Brasileiro",
            potValue: "R$ 16.000,00",
            status: "Ativo",
            endedDate: "30/05/2024"
        },
        {
            createdDate: "21/05/2024",
            event: "Flamengo X Goiás",
            championship: "Campeonato Brasileiro",
            potValue: "R$ 16.000,00",
            status: "Encerrado",
            endedDate: "21/04/2024"
        },
        {
            createdDate: "21/05/2024",
            event: "Flamengo X Goiás",
            championship: "Campeonato Brasileiro",
            potValue: "R$ 16.000,00",
            status: "Encerrado",
            endedDate: "19/04/2024"
        },
        {
            createdDate: "21/05/2024",
            event: "Flamengo X Goiás",
            championship: "Campeonato Brasileiro",
            potValue: "R$ 16.000,00",
            status: "Ativo",
            endedDate: "30/05/2024"
        },
        {
            createdDate: "21/05/2024",
            event: "Flamengo X Goiás",
            championship: "Campeonato Brasileiro",
            potValue: "R$ 16.000,00",
            status: "Ativo",
            endedDate: "30/05/2024"
        },
        {
            createdDate: "21/05/2024",
            event: "Flamengo X Goiás",
            championship: "Campeonato Brasileiro",
            potValue: "R$ 16.000,00",
            status: "Ativo",
            endedDate: "30/05/2024"
        }
    ])

    const handleChange = (index: any, data: any, isActive: Boolean) => {
        setTableData(data.map((item: any, i: any) => 
            index === i ? {...item, isActive} : item
        ))
    }

    const deleteItem = (index: any, data: any) => {
        setTableData(data.filter((item: any, i: any) => 
            index !== i
        ))
    }

    return (
        <Box display="flex" flexDirection="column">
            <Box display="flex" justifyContent="space-between">
                <Box display="flex" gap={3} width="50%">
                    <FormControl variant="filled" className="w-[50%]">
                        <InputLabel id="demo-simple-select-filled-label">Tipos de JackPot</InputLabel>
                        <Select
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                            value={typeJackpot}
                            onChange={(e) => setTypeJackpot(e.target.value)}
                        >
                            <MenuItem value={1}>Ativos</MenuItem>
                            <MenuItem value={2}>Twenty</MenuItem>
                            <MenuItem value={3}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        size="medium"
                        variant="filled"
                        placeholder="Pesquisar..."
                        className="left-5 w-[50%]"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Search />
                                </InputAdornment>
                            )
                        }}
                    />
                </Box>
                <Link
                    href="/regist/create"
                    className="text-white rounded-[9999px] text-[16px] px-[50px] py-[5px] flex items-center"
                    style={{ backgroundColor: theme.palette.primary.main }}
                >
                    Novo JackPot
                </Link>
            </Box>
            <div className="mt-10">
                <div className="max-w-full overflow-x-auto">
                    <table className="w-full table-auto">
                        <thead>
                            <tr className="text-center">
                                <th className="py-4 font-bold text-dark dark:text-white">
                                    Data de Criação
                                </th>
                                <th className="min-w-[150px] py-4 font-bold text-dark dark:text-white">
                                    Evento/Local Controlado
                                </th>
                                <th className="min-w-[120px] py-4 font-bold text-dark dark:text-white">
                                    Campeonato
                                </th>
                                <th className="min-w-[120px] py-4 font-bold text-dark dark:text-white">
                                    Valor atual do pote
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
                                    <h5 className="text-dark dark:text-white">
                                        {packageItem.createdDate}
                                    </h5>
                                </td>
                                <td className={`border-[#eee] px-4 py-2 dark:border-dark-3 ${index === tableData.length - 1 ? "border-b-0" : "border-b"}`}>
                                    <p className="text-dark dark:text-white">
                                        {packageItem.event}
                                    </p>
                                </td>
                                <td className={`border-[#eee] px-4 py-2 dark:border-dark-3 ${index === tableData.length - 1 ? "border-b-0" : "border-b"}`}>
                                    <p className={`inline-flex rounded-full py-1 text-body-sm font-medium`}>
                                        {packageItem.championship}
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
                </div>
            </div>
            <Box display="flex" justifyContent="end" marginTop={5}>
                <Pagination />
            </Box>
        </Box>
    )
}

export default RegistComponent;