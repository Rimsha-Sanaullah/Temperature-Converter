import React, { useState } from 'react'; 
import { Box, TextField, FormControl, InputLabel, Select, MenuItem, Button, Typography } from '@mui/material'; 
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import './App.css';

function App() {
  const [input, setInput] = useState(''); // State for input value
  const [scale, setScale] = useState('Fahrenheit'); // State for scale
  const [result, setResult] = useState('0.00'); // State for result

  function handleChange(event) {
    setScale(event.target.value); 
  }

  function convertTemperature(input, scale) {
    if (input === '') return;

    let convertedValue;
    if (scale === 'Fahrenheit') {
      convertedValue = (parseFloat(input) * 9 / 5) + 32;
    } else if (scale === 'Celsius') {
      convertedValue = (parseFloat(input) - 32) * 5 / 9;
    } else if (scale === 'Kelvin') {
      convertedValue = parseFloat(input) + 273.15;
    }

    setResult(convertedValue.toFixed(2)); 
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f5f5f5', 
      }}
    >
      <Typography 
        variant='h4'
        color='primary'
        sx={{
          marginBottom: '60px',
          fontFamily: { xs: 'Arial, sans-serif', sm: 'Roboto, sans-serif' }, 
          textAlign: 'center',
        }}
      >
        Temperature Converter
      </Typography>
      <Box
        sx={{
          backgroundColor: '#ffffff', 
          padding: { xs: '20px', sm: '40px' },
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
          width: { xs: '90%', sm: 'auto' },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' }, 
            justifyContent: 'center',
            alignItems: 'center',
            gap: '20px',
            marginBottom: '20px',
          }}
        >
          <TextField 
            label='Degrees' 
            type='number' 
            variant='outlined' 
            required 
            sx={{ width: { xs: '100%', sm: '150px' } }} 
            value={input} 
            onChange={e => setInput(e.target.value)} 
          />

          <FormControl sx={{ width: { xs: '100%', sm: '150px' } }}
            variant="outlined"
          > 
            <InputLabel>Scale</InputLabel>
            <Select
              label="Select"
              value={scale} 
              onChange={handleChange}
            >
              <MenuItem value='Fahrenheit'>Fahrenheit</MenuItem>
              <MenuItem value='Celsius'>Celsius</MenuItem>
              <MenuItem value='Kelvin'>Kelvin</MenuItem>
            </Select>
          </FormControl>

          <Button 
            color='primary' 
            variant='contained'
            endIcon={<NavigateNextIcon />}
            size='large'
            onClick={() => convertTemperature(input, scale)}
          >
            Convert
          </Button>
        </Box>  

        <Typography variant='body2' sx={{ color: 'gray' }}>
          Result:
        </Typography>
        <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
          {result}
        </Typography>
      </Box>
    </Box>
  );
}

export default App;
