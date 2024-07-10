"use client"
import React, {useState} from "react"
import Image from "next/image"
import {
    Box,
    Button,
    FormControl,
    FormControlLabel,
    InputLabel,
    TextField,
    InputAdornment,
    Select,
    MenuItem,
    Checkbox
} from "@mui/material"
import { Close } from "@mui/icons-material"
import { DatePicker, TimePicker, LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import "dayjs/locale/pt-br"
import toastr from "toastr"
import "toastr/build/toastr.min.css"

const CreateNewRegist: React.FC = () => {
    const [awardType, setAwardType] = useState('1')
    const [prizeCategory, setPrizeCategory] = useState('1')
    const [question, setQuestion] = useState('1')
    const [team, setTeam] = useState('1')
    const [ticketSale, setTicketSale] = useState('1')
    const [teamClient, setTeamClient] = useState('1')
    const [teamVisitor, setTeamVisitor] = useState('1')
    const [bannerLImgData, setBannerLImgData] = useState('')
    const [bannerRImgData, setBannerRImgData] = useState('')
    const [clientTeamImgData, setClientTeamImgData] = useState('')
    const [visitorTeamImgData, setVisitorTeamImgData] = useState('')
    const bannerLInputRef: React.RefObject<HTMLInputElement> = React.createRef()
    const bannerRInputRef: React.RefObject<HTMLInputElement> = React.createRef()
    const clientTeamInputRef: React.RefObject<HTMLInputElement> = React.createRef()
    const visitorTeamInputRef: React.RefObject<HTMLInputElement> = React.createRef()

    const readFileDataAsBase64 = (file: any) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader()
    
            reader.onload = (event) => {
                resolve(event.target?.result)
            }
    
            reader.onerror = (err) => {
                reject(err)
            }
    
            reader.readAsDataURL(file)
        })
    }

    return (
        <Box display="flex" flexDirection="column" width="100%" paddingX={3}>
            <p className="text-[18px]">Cadastro de JackPot</p>
            <Box display="flex" gap={5} marginTop={5} width="100%">
                <Box display="flex" flexDirection="column" width="100%">
                    <FormControl variant="filled">
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
                    <FormControl variant="filled" className="!mt-5">
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
                    <FormControl variant="filled" className="!mt-5">
                        <InputLabel id="demo-simple-select-filled-label">TIME RESPONSÁVEL JACKPOT</InputLabel>
                        <Select
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                            value={team}
                            onChange={(e) => setTeam(e.target.value)}
                        >
                            <MenuItem value="1">FLAMENGO</MenuItem>
                            <MenuItem value="2">PALMEIRAS</MenuItem>
                            <MenuItem value="3">GOIÁS</MenuItem>
                        </Select>
                    </FormControl>
                    {
                        awardType === "2" &&
                            <Box display="flex" flexDirection="column">
                                <p className="mt-5">Selecione os Prêmios conforme sequência de perguntas:</p>
                                <FormControl variant="filled" className="!mt-3">
                                    <InputLabel id="demo-simple-select-filled-label">SELECIONE O PRÊMIO DA PERGUNTA 01</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-filled-label"
                                        id="demo-simple-select-filled"
                                        value={team}
                                        onChange={(e) => setTeam(e.target.value)}
                                    >
                                        <MenuItem value="1">CARRO</MenuItem>
                                        <MenuItem value="2">MOTO</MenuItem>
                                        <MenuItem value="3">BICICLETA</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                    }
                    <Box display="flex" flexDirection="column" marginTop={3}>
                        <p>Encerramento do JackPot :</p>
                        <Box display="grid" gridTemplateColumns="2fr 1.5fr 2fr" columnGap={3} marginTop={1}>
                            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
                                <DatePicker
                                    label="DATA"
                                    slotProps={{ textField: { variant: 'filled' } }}
                                    className="w-full"
                                />
                                <TimePicker
                                    label="HORA"
                                    slotProps={{ textField: { variant: 'filled' } }}
                                    views={['hours','minutes']}
                                    format="HH:mm"
                                    className="w-full"
                                />
                            </LocalizationProvider>
                            {
                                awardType === "1" &&
                                    <TextField
                                        size="medium"
                                        variant="filled"
                                        label="VALOR DO POTE"
                                        className="w-full"
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    R$
                                                </InputAdornment>
                                            )
                                        }}
                                    />
                            }
                        </Box>
                    </Box>
                    {
                        awardType === "1" &&
                            <Box display="flex" flexDirection="column" marginTop={3}>
                                <Box display="flex" alignItems="center" gap={1} marginBottom={2}>
                                    <Image
                                        width={20}
                                        height={20}
                                        alt=""
                                        src={'/images/placeholder/photo_placeholder_sm.svg'}
                                    />
                                    <p>Selecione o tipo de banner:</p>
                                </Box>
                                <FormControlLabel
                                    control={<Checkbox style={{ paddingTop: 3, paddingBottom: 3 }} />}
                                    label={`Usar banner padrão JackPot`}
                                    className={`w-full`}
                                />
                                <FormControlLabel
                                    control={<Checkbox style={{ paddingTop: 3, paddingBottom: 3 }} />}
                                    label={`Inserir banner Patrocinador`}
                                    className={`w-full`}
                                />
                                <button className="relative mt-5 h-auto w-[80%]" onClick={() => bannerLInputRef.current?.click()}>
                                    {
                                        bannerLImgData === '' && <span className="absolute left-[50%] translate-x-[-50%] top-5">Insira uma imagem</span>
                                    }
                                    <Image
                                        width={0}
                                        height={0}
                                        alt=""
                                        src={bannerLImgData === '' ? '/images/placeholder/pic_placeholder_dark.svg' : bannerLImgData}
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
                                    ref={bannerLInputRef}
                                    type="file"
                                    accept=".jpg,.png,.jpeg"
                                    hidden
                                    onChange={async (e) => {
                                        if (!bannerLInputRef.current?.files) return
                                        let file = bannerLInputRef.current?.files[0]
                                        if (file) {
                                            await readFileDataAsBase64(file)
                                                .then((res) => setBannerLImgData(String(res)))
                                                .catch((error) => console.log(error))
                                        }
                                    }}
                                />
                            </Box>
                    }
                    {
                        awardType === "2" &&
                            <Box display="flex" flexDirection="column" marginTop={3}>
                                <p>Data base da Loteria Federal</p>
                                <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
                                    <DatePicker
                                        label="DATA"
                                        slotProps={{ textField: { variant: 'filled' } }}
                                        className="w-[50%] !mt-3"
                                    />
                                </LocalizationProvider>
                            </Box>
                    }
                </Box>
                <Box display="flex" flexDirection="column" width="100%">
                    {
                        awardType === "2" &&
                            <FormControl variant="filled">
                                <InputLabel id="demo-simple-select-filled-label">CATEGORIA DO PRÊMIO</InputLabel>
                                <Select
                                    labelId="demo-simple-select-filled-label"
                                    id="demo-simple-select-filled"
                                    value={prizeCategory}
                                    onChange={(e) => setPrizeCategory(e.target.value)}
                                >
                                    <MenuItem value="1">JOGO</MenuItem>
                                    <MenuItem value="2">RODADA</MenuItem>
                                    <MenuItem value="3">CAMPEONATO</MenuItem>
                                </Select>
                            </FormControl>
                    }
                    <FormControl variant="filled" className="!mt-5">
                        <InputLabel id="demo-simple-select-filled-label">CLASSE DE PERGUNTA</InputLabel>
                        <Select
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                        >
                            <MenuItem value="1">Padrão 01</MenuItem>
                            <MenuItem value="2">Padrão 02</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl variant="filled" className="!mt-5">
                        <InputLabel id="demo-simple-select-filled-label">INTEGRAÇÃO EM QUAL VENDA DE INGRESSO</InputLabel>
                        <Select
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                            value={ticketSale}
                            onChange={(e) => setTicketSale(e.target.value)}
                        >
                            <MenuItem value="1">FLAMENGO X CORINTHIANS (20/05/2024)</MenuItem>
                            <MenuItem value="2">FLAMENGO X PALMEIRAS (20/05/2024)</MenuItem>
                            <MenuItem value="3">GOIÁS X CORINTHIANS (20/05/2024)</MenuItem>
                        </Select>
                    </FormControl>
                    <Box display="flex" flexDirection="column" width="100%" marginTop={3}>
                        <p>Informações do Jogo:</p>
                        <Box display="grid" gridTemplateColumns="1fr 1fr 1fr" columnGap={3} marginTop={1}>
                            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
                                <DatePicker
                                    label="DATA"
                                    slotProps={{ textField: { variant: 'filled' } }}
                                    className="w-full"
                                />
                                <TimePicker
                                    label="HORA"
                                    slotProps={{ textField: { variant: 'filled' } }}
                                    views={['hours','minutes']}
                                    format="HH:mm"
                                    className="w-full"
                                />
                            </LocalizationProvider>
                        </Box>
                        <Box display="grid" gridTemplateColumns="2fr 3fr 1fr" columnGap={3} width="80%" marginTop={2}>
                            <TextField
                                size="medium"
                                variant="filled"
                                label="CEP"
                                placeholder="Ex: 00000-000"
                                className="w-full"
                            />
                            <TextField
                                size="medium"
                                variant="filled"
                                label="CIDADE"
                                placeholder="Ex: Goiânia"
                                className="w-full"
                            />
                            <TextField
                                size="medium"
                                variant="filled"
                                label="ESTADO"
                                placeholder="Ex: GO"
                                className="w-full"
                            />
                        </Box>
                        <TextField
                            size="medium"
                            variant="filled"
                            label="ENDEREÇO"
                            placeholder="Ex: Rua Amilton Pereira da Silva"
                            className="w-[80%] !mt-4"
                        />
                        <Box display="grid" gridTemplateColumns="5fr 1fr" columnGap={3} width="80%" marginTop={2}>
                            <TextField
                                size="medium"
                                variant="filled"
                                label="COMPLEMENTO"
                                placeholder="Ex: Qd 000, Lt 000"
                                className="w-full"
                            />
                            <TextField
                                size="medium"
                                variant="filled"
                                label="NÚMERO"
                                placeholder="Ex: 1230"
                                className="w-full"
                            />
                        </Box>
                        <Box display="flex" gap={2} marginTop={3}>
                            <Box display="flex" flexDirection="column" width="45%">
                                <FormControl variant="filled" className="w-full">
                                    <InputLabel id="demo-simple-select-filled-label">TIME MANDANTE</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-filled-label"
                                        id="demo-simple-select-filled"
                                        value={teamClient}
                                        onChange={(e) => setTeamClient(e.target.value)}
                                    >
                                        <MenuItem value="1">Flamengo</MenuItem>
                                        <MenuItem value="2">Goias</MenuItem>
                                    </Select>
                                </FormControl>
                                <button className="relative mt-2 h-auto w-full" onClick={() => clientTeamInputRef.current?.click()}>
                                    {
                                        clientTeamImgData === '' && <span className="absolute left-[50%] translate-x-[-50%] top-5">Insira uma imagem</span>
                                    }
                                    <Image
                                        width={0}
                                        height={0}
                                        alt=""
                                        src={clientTeamImgData === '' ? '/images/placeholder/pic_placeholder_light.svg' : clientTeamImgData}
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
                                    ref={clientTeamInputRef}
                                    type="file"
                                    accept=".jpg,.png,.jpeg"
                                    hidden
                                    onChange={async (e) => {
                                        if (!clientTeamInputRef.current?.files) return
                                        let file = clientTeamInputRef.current?.files[0]
                                        if (file) {
                                            await readFileDataAsBase64(file)
                                                .then((res) => setClientTeamImgData(String(res)))
                                                .catch((error) => console.log(error))
                                        }
                                    }}
                                />
                            </Box>
                            <Box display="flex" justifyContent="center" width="5%">
                                <Close style={{ width: "50px", height: "50px" }} />
                            </Box>
                            <Box display="flex" flexDirection="column" width="45%">
                                <FormControl variant="filled" className="w-full">
                                    <InputLabel id="demo-simple-select-filled-label">TIME VISITANTE</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-filled-label"
                                        id="demo-simple-select-filled"
                                        value={teamVisitor}
                                        onChange={(e) => setTeamVisitor(e.target.value)}
                                    >
                                        <MenuItem value="1">Corinthians</MenuItem>
                                        <MenuItem value="2">Goias</MenuItem>
                                    </Select>
                                </FormControl>
                                <button className="relative mt-2 h-auto w-full" onClick={() => visitorTeamInputRef.current?.click()}>
                                    {
                                        visitorTeamImgData === '' && <span className="absolute left-[50%] translate-x-[-50%] top-5">Insira uma imagem</span>
                                    }
                                    <Image
                                        width={0}
                                        height={0}
                                        alt=""
                                        src={visitorTeamImgData === '' ? '/images/placeholder/pic_placeholder_light.svg' : visitorTeamImgData}
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
                                    ref={visitorTeamInputRef}
                                    type="file"
                                    accept=".jpg,.png,.jpeg"
                                    hidden
                                    onChange={async (e) => {
                                        if (!visitorTeamInputRef.current?.files) return
                                        let file = visitorTeamInputRef.current?.files[0]
                                        if (file) {
                                            await readFileDataAsBase64(file)
                                                .then((res) => setVisitorTeamImgData(String(res)))
                                                .catch((error) => console.log(error))
                                        }
                                    }}
                                />
                            </Box>
                        </Box>
                    </Box>
                    {
                        awardType === "2" &&
                            <Box display="flex" flexDirection="column" marginTop={3}>
                                <Box display="flex" alignItems="center" gap={1} marginBottom={2}>
                                    <Image
                                        width={20}
                                        height={20}
                                        alt=""
                                        src={'/images/placeholder/photo_placeholder_sm.svg'}
                                    />
                                    <p>Selecione o tipo de banner:</p>
                                </Box>
                                <FormControlLabel
                                    control={<Checkbox style={{ paddingTop: 3, paddingBottom: 3 }} />}
                                    label={`Usar banner padrão JackPot`}
                                    className={`w-full`}
                                />
                                <FormControlLabel
                                    control={<Checkbox style={{ paddingTop: 3, paddingBottom: 3 }} />}
                                    label={`Inserir banner Patrocinador`}
                                    className={`w-full`}
                                />
                                <button className="relative mt-5 h-auto w-[80%]" onClick={() => bannerRInputRef.current?.click()}>
                                    {
                                        bannerRImgData === '' && <span className="absolute left-[50%] translate-x-[-50%] top-5">Insira uma imagem</span>
                                    }
                                    <Image
                                        width={0}
                                        height={0}
                                        alt=""
                                        src={bannerRImgData === '' ? '/images/placeholder/pic_placeholder_dark.svg' : bannerRImgData}
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
                                    ref={bannerRInputRef}
                                    type="file"
                                    accept=".jpg,.png,.jpeg"
                                    hidden
                                    onChange={async (e) => {
                                        if (!bannerRInputRef.current?.files) return
                                        let file = bannerRInputRef.current?.files[0]
                                        if (file) {
                                            await readFileDataAsBase64(file)
                                                .then((res) => setBannerRImgData(String(res)))
                                                .catch((error) => console.log(error))
                                        }
                                    }}
                                />
                            </Box>
                    }
                    {
                        awardType === "2" &&
                            <TextField
                                size="medium"
                                variant="filled"
                                label="NOME DA RODADA"
                                placeholder="Ex.: PRIMEIRA RODADA"
                                className="w-[50%] !mt-5"
                            />
                    }
                </Box>
            </Box>
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