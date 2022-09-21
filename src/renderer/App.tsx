import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import './App.css';
import appIcon from '../../assets/icon.png';

const Hello = () => {
  const defaultURL =
    'https://drive.google.com/file/d/1Rq4OKbpfYi7AE6MAKu4afyebsapds5fQ/view';
  const [url, setUrl] = React.useState(defaultURL);

  const changeURL = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);
  };

  const generatePDF = () => {
    console.debug('URL => ', url);
  };

  return (
    <Paper
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: '#cd9ad7',
      }}
      square
    >
      <img
        src={appIcon}
        alt="App Icon"
        style={{
          borderRadius: '50%',
        }}
      />

      <div className="center">
        <h1>Drive PDF downloader</h1>
      </div>

      <div className="center">
        Por favor, pega la url de google drive que corresponde al pdf que
        quieres descargar:
      </div>
      <div
        className="center"
        style={{
          marginTop: 20,
          width: '90%',
          flexDirection: 'row',
        }}
      >
        <TextField
          required
          id="outlined-required"
          label="URL"
          defaultValue=""
          fullWidth
          value={url}
          onChange={changeURL}
          color="secondary"
        />
        <Button
          variant="contained"
          style={{
            marginLeft: 8,
            marginRight: 8,
          }}
          color="secondary"
          onClick={generatePDF}
        >
          Generar PDF
        </Button>
      </div>
    </Paper>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
