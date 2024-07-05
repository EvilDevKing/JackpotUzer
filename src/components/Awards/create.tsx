"use client"
import React, {useState} from "react";
import Image from "next/image";
import {
    Box,
    Button,
    FormControl,
    InputLabel,
    TextField,
    InputAdornment,
    Select,
    MenuItem,
    Switch
  } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useTheme } from "@mui/material";

const CreateNewAward: React.FC = () => {
    const theme = useTheme()
    const [imageData, setImageData] = useState('')
    const [category, setCategory] = useState('')
    const inputRef: React.RefObject<HTMLInputElement> = React.createRef()

    const readFileDataAsBase64 = (file: any) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
    
            reader.onload = (event) => {
                resolve(event.target?.result);
            };
    
            reader.onerror = (err) => {
                reject(err);
            };
    
            reader.readAsDataURL(file);
        });
    }

    return (
        <Box display="flex" flexDirection="column">
            <Box display="flex" width="100%">
                <Box display="flex" flexDirection="column" width="50%">
                    <p className="ml-5 text-[20px]">Cadastro de Prêmios</p>
                    <FormControl variant="filled" className="left-5 w-[70%] !mt-15">
                        <InputLabel id="demo-simple-select-filled-label">CATEGORIA DO PRÊMIO</InputLabel>
                        <Select
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <MenuItem value={1}>JOGO</MenuItem>
                            <MenuItem value={2}>RODADA</MenuItem>
                            <MenuItem value={3}>CAMPEONATO</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        size="medium"
                        variant="filled"
                        label="DESCRIÇÃO DO PRÊMIO"
                        placeholder="Ex.: Moto"
                        className="left-5 w-[70%] !mt-5"
                    />
                    <TextField
                        size="medium"
                        variant="filled"
                        label="COD. IDENTIFICAÇÃO DO PRÉMIO"
                        placeholder="Ex.: Chassi 000000000000"
                        className="left-5 w-[70%] !mt-5"
                    />
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            label="DATA INICIO"
                            slotProps={{ textField: { variant: 'filled' } }}
                            className="left-5 w-[30%] !mt-5"
                        />
                    </LocalizationProvider>
                    <button className="relative mt-10 ml-5 h-auto w-[70%]" onClick={() => inputRef.current?.click()}>
                        {
                            imageData === '' && <span className="absolute left-[50%] translate-x-[-50%] top-5">Insira um Banner</span>
                        }
                        <Image
                            width={0}
                            height={0}
                            alt=""
                            src={imageData === '' ? '/images/placeholder/pic_placeholder_light.svg' : imageData}
                            priority
                            style={{
                                width: '100%',
                                height: 'auto',
                                objectFit: 'fill',
                                borderRadius: 10
                            }}
                        />
                    </button>
                    <input
                        ref={inputRef}
                        type="file"
                        accept=".jpg,.png,.jpeg"
                        hidden
                        onChange={async (e) => {
                            if (!inputRef.current?.files) return
                            let file = inputRef.current?.files[0]
                            if (file) {
                                await readFileDataAsBase64(file)
                                    .then((res) => setImageData(String(res)))
                                    .catch((error) => console.log(error))
                            }
                        }}
                    />
                </Box>
                <Box display="grid" gridTemplateColumns='1fr 1fr 1fr' width="50%">
                    <Box display="flex" flexDirection="column" alignItems="center">
                        <p>Data criação</p>
                        <p className="text-[20px] font-bold">21/05/2024</p>
                    </Box>
                    <Box display="flex" flexDirection="column" alignItems="center">
                        <p>Ativo/Inativo</p>
                        <Switch />
                    </Box>
                    <Box display="flex" flexDirection="column" alignItems="center">
                        <p>Status</p>
                        <p className="text-[20px] font-bold">Em sorteio</p>
                    </Box>
                </Box>
            </Box>
            <Box display="flex" justifyContent="end">
                <Button
                    variant="contained"
                    style={{
                        marginTop: '30px',
                        marginRight: '20px',
                        borderRadius: '9999px',
                        color: 'white',
                        padding: '10px 50px'
                    }}
                >
                    Cadastrar Premio
                </Button>
            </Box>
        </Box>
    )
}

export default CreateNewAward;