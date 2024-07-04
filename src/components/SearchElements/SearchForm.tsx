import React, {useState} from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  Select,
  SelectChangeEvent,
  MenuItem,
  TextField,
  InputAdornment
} from "@mui/material";
import { Search, GridView, FilterAlt, Menu } from "@mui/icons-material";
import { useTheme } from "@mui/material";


const SearchForm: React.FC = () => {
    const theme = useTheme()
    const [age, setAge] = useState('')

    const handleChange = (e: SelectChangeEvent) => {
        setAge(e.target.value);
    }

    return (
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box display="flex" alignItems="center" width="100%">
          <FormControl variant="filled" className="w-[25%]">
              <InputLabel id="demo-simple-select-filled-label">Tipos de Evento</InputLabel>
              <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  value={age}
                  onChange={handleChange}
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
              className="left-5 w-[25%]"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                )
              }}
            />
        </Box>
        <Box display="flex" alignItems="center">
          <Button onClick={() => console.log("asdfadf")}>
            <Box display="flex" alignItems="center" gap={1}>
              <FilterAlt color="primary" />
              <span className="underline" style={{ color: theme.palette.primary.main }}>Filtros</span>
            </Box>
          </Button>
          <Button sx={{ width: 'auto' }}>
            <GridView color="primary"/>
          </Button>
          <Button>
            <Menu />
          </Button>
        </Box>
      </Box>
    )
}

export default SearchForm