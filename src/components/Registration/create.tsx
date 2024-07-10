"use client"
import React, {useState} from "react"
import ValueForm from "./ValueForm"
import AwardForm from "./AwardForm"
import {
    Box,
    Button,
    FormControl,
    InputLabel,
    Select,
    MenuItem
  } from "@mui/material"
import toastr from "toastr"
import "toastr/build/toastr.min.css"

const CreateNewRegist: React.FC = () => {
    const [awardType, setAwardType] = useState('1')

    return (
        <Box display="flex" flexDirection="column" width="100%" paddingX={3}>
            <p className="text-[18px]">Cadastro de JackPot</p>
            <Box display="flex" gap={5} alignItems="center" marginTop={5} width="100%">
                <FormControl variant="filled" className="w-[50%]">
                    <InputLabel id="demo-simple-select-filled-label">TIPO DE PREMIAÇÃO</InputLabel>
                    <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={awardType}
                        onChange={(e) => setAwardType(e.target.value)}
                    >
                        <MenuItem value="1">VALOR DO POTE</MenuItem>
                        <MenuItem value="2">PRÊMIOS</MenuItem>
                    </Select>
                </FormControl>
                <FormControl variant="filled" className="w-[50%]">
                    <InputLabel id="demo-simple-select-filled-label">CAMPEONATO</InputLabel>
                    <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={awardType}
                        onChange={(e) => setAwardType(e.target.value)}
                    >
                        <MenuItem value="1">Brasileirão</MenuItem>
                        <MenuItem value="2">Brasileirão</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            {
                awardType === "1" ? <ValueForm /> : <AwardForm />
            }
            <Box display="flex" justifyContent="flex-end" alignItems="center" width="100%">
                <Button
                    variant="contained"
                    style={{
                        marginTop: '30px',
                        marginRight: '20px',
                        borderRadius: '9999px',
                        color: 'white',
                        padding: '10px 50px'
                    }}
                    onClick={() => toastr.success('Hello')}
                >
                    Cadastrar JackPot
                </Button>
            </Box>
        </Box>
    )
}

export default CreateNewRegist