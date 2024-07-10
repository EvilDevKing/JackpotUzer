"use client"
import React, {useState, SyntheticEvent, useEffect} from "react"
import Image from "next/image"
import {
    Box,
    Button,
    FormControl,
    InputLabel,
    TextField,
    Select,
    MenuItem,
    Tab
  } from "@mui/material"
import { TabContext, TabList, TabPanel } from "@mui/lab"
import { AddCircle } from '@mui/icons-material'
import QuestionItem from "./QuestionItem"
import {useTheme} from "@mui/material"

function templateQuestionItem(
    title: string,
    questionType: string,
    fieldType: string,
    objOptions: boolean[],
    subjDoubleValues: string[],
    subjSingleValue: string
) {
    return { title, questionType, fieldType, objOptions, subjDoubleValues, subjSingleValue }
}

const CreateNewQuestion: React.FC = () => {
    const theme = useTheme()
    const [awardType, setAwardType] = useState('1')
    const [tabIndex, setTabIndex] = useState('1')
    const [commonData, setCommonData] = useState<object[]>([])
    const [bronzeData, setBronzeData] = useState<object[]>([])
    const [prataData, setPrataData] = useState<object[]>([])
    const [ouroData, setOuroData] = useState<object[]>([])

    const handleTabChange = (e: SyntheticEvent, newValue: string) => {
        setTabIndex(newValue)
    }

    const addQuestionItem = () => {
        if (awardType === '1') {
            setCommonData([...commonData, templateQuestionItem('', '1', '1', [false, false, false, false, false, false], ['','',''], '')])
        } else {
            switch (tabIndex) {
                case '1':
                    setBronzeData([...bronzeData, templateQuestionItem('', '1', '1', [false, false, false, false, false, false], ['','',''], '')])
                    break
                case '2':
                    setPrataData([...prataData, templateQuestionItem('', '1', '1', [false, false, false, false, false, false], ['','',''], '')])
                    break
                case '3':
                    setOuroData([...ouroData, templateQuestionItem('', '1', '1', [false, false, false, false, false, false], ['','',''], '')])
                    break
                default: break
            }
        }
    }

    const deleteQuestionItem = (index: number) => {
        if (awardType === '1') {
            setCommonData(commonData.filter((_, i) => i !== index))
        } else {
            switch (tabIndex) {
                case '1':
                    setBronzeData(bronzeData.filter((_, i) => i !== index))
                    break
                case '2':
                    setPrataData(prataData.filter((_, i) => i !== index))
                    break
                case '3':
                    setOuroData(ouroData.filter((_, i) => i !== index))
                    break
                default: break
            }
        }
    }

    const updateQuestionItem = (index: number, key: string, value: any) => {
        if (awardType === '1') {
            setCommonData(commonData.map((item, i) =>
                index === i ? {...item, [key]: value} : item
            ))
        } else {
            switch (tabIndex) {
                case '1':
                    setBronzeData(bronzeData.map((item, i) =>
                        index === i ? {...item, [key]: value} : item
                    ))
                    break
                case '2':
                    setPrataData(prataData.map((item, i) =>
                        index === i ? {...item, [key]: value} : item
                    ))
                    break
                case '3':
                    setOuroData(ouroData.map((item, i) =>
                        index === i ? {...item, [key]: value} : item
                    ))
                    break
                default: break
            }
        }
    }

    useEffect(() => {
        console.log(commonData)
    }, [commonData])

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
                        <MenuItem value='1'>VALOR DO POTE</MenuItem>
                        <MenuItem value='2'>PRÊMIOS</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            {
                awardType === '1' ?
                    commonData.length ? 
                        <Box width="50%" paddingY={3}>
                            { commonData.map((item, i) => 
                                <QuestionItem 
                                    key={i}
                                    index={i}
                                    item={item}
                                    onUpdate={updateQuestionItem}
                                    onDelete={deleteQuestionItem} />
                            )}
                        </Box>
                    :
                    <></>
                :
                <Box width="100%">
                    <TabContext value={tabIndex}>
                        <Box>
                            <TabList
                                onChange={handleTabChange}
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
                            <Box display="flex" width="50%">
                                {
                                    bronzeData.map((item, i) => 
                                        <QuestionItem
                                            key={i}
                                            index={i}
                                            item={item}
                                            onUpdate={updateQuestionItem}
                                            onDelete={deleteQuestionItem} />
                                    )
                                }
                            </Box>
                        </TabPanel>
                        <TabPanel value="2">
                            <Box display="flex" width="50%">
                                {
                                    prataData.map((item, i) => 
                                        <QuestionItem
                                            key={i}
                                            index={i}
                                            item={item}
                                            onUpdate={updateQuestionItem}
                                            onDelete={deleteQuestionItem} />
                                    )
                                }
                            </Box>
                        </TabPanel>
                        <TabPanel value="3">
                            <Box display="flex" width="50%">
                                {
                                    ouroData.map((item, i) => 
                                        <QuestionItem
                                            key={i}
                                            index={i}
                                            item={item}
                                            onUpdate={updateQuestionItem}
                                            onDelete={deleteQuestionItem} />
                                    )
                                }
                            </Box>
                        </TabPanel>
                    </TabContext>
                </Box>
            }
            <Box display="flex" justifyContent="flex-end" width="50%" marginTop={3}>
                <Button
                    variant="contained"
                    style={{
                        padding: "10px 50px",
                        borderRadius: "9999px",
                        color: 'white',
                        backgroundColor: theme.palette.secondary.main
                    }}
                    startIcon={<AddCircle />}
                    onClick={(e) => addQuestionItem()}>
                    Adicionar Pergunta
                </Button>
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

export default CreateNewQuestion