"use client"
import React, {useState, SyntheticEvent} from "react";
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
    Tab,
    Switch
  } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { AddCircle } from '@mui/icons-material';
import QuestionItem from "./QuestionItem";
import {useTheme} from "@mui/material";

const CreateNewQuestion: React.FC = () => {
    const theme = useTheme()
    const [awardType, setAwardType] = useState('1')
    const [tabIndex, setTabIndex] = useState('1')

    const handleTabChange = (e: SyntheticEvent, newValue: string) => {
        setTabIndex(newValue)
    }

    return (
        <Box display="flex" flexDirection="column" width="100%">
            <p className="text-[18px]">Cadastro de Perguntas</p>
            <Box display="flex" gap={5} marginTop={5}>
                <TextField
                    size="medium"
                    variant="filled"
                    label="DESCRIÇÃO DA PERGUNTA"
                    placeholder="Ex: Padrão Potes"
                    className="w-[40%]"
                />
                <FormControl variant="filled" className="w-[40%]">
                    <InputLabel id="demo-simple-select-filled-label">TIPO DA PREMIAÇÃO</InputLabel>
                    <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={awardType}
                        onChange={(e) => setAwardType(e.target.value)}
                    >
                        <MenuItem value={1}>VALOR DO POTE</MenuItem>
                        <MenuItem value={2}>PRÊMIOS</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <Box width="100%">
                <TabContext value={tabIndex}>
                    <Box>
                        <TabList
                            onChange={handleTabChange}
                            aria-label="lab API tabs example"
                            className="mt-5"
                            style={{ minHeight: 'auto' }}
                        >
                            <Tab
                                icon={<Image width={30} height={30} src={'/images/icon/icon-bronze.svg'} alt="" />}
                                iconPosition="end"
                                label="POTE BRONZE"
                                value="1"
                            />
                            <Tab
                                icon={<Image width={30} height={30} src={'/images/icon/icon-silver.svg'} alt="" />}
                                iconPosition="end" 
                                label="POTE PRATA" 
                                value="2"
                            />
                            <Tab
                                icon={<Image width={30} height={30} src={'/images/icon/icon-gold.svg'} alt="" />}
                                iconPosition="end" 
                                label="POTE OURO" 
                                value="3"
                            />
                        </TabList>
                    </Box>
                    <TabPanel value="1">
                        <Box display="flex" flexDirection="column" alignItems="flex-end" width="50%">
                            <QuestionItem />
                            <Button variant="contained" style={{
                                padding: "10px 50px",
                                borderRadius: "9999px",
                                color: 'white',
                                backgroundColor: theme.palette.secondary.main
                            }} startIcon={<AddCircle />}>
                                Adicionar Pergunta
                            </Button>
                        </Box>
                    </TabPanel>
                    <TabPanel value="2">
                        Item Two
                    </TabPanel>
                    <TabPanel value="3">
                        Item Three
                    </TabPanel>
                </TabContext>
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
                    Cadastrar Pergunta
                </Button>
            </Box>
        </Box>
    )
}

export default CreateNewQuestion;