import {
  MemoryRouter as Router,
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom';
import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { GoogleLogin } from 'react-google-login';
import './App.css';
import appIcon from '../../assets/icon.png';
import Preview from './Preview';

const MainMenu = () => {
  const navigate = useNavigate();
  const defaultURL =
    'https://drive.google.com/file/d/1Rq4OKbpfYi7AE6MAKu4afyebsapds5fQ/view';
  const [url, setUrl] = React.useState(defaultURL);

  const changeURL = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);
  };

  const generatePDF = () => {
    console.debug('[MAIN] URL => ', url);
    navigate(`/preview?url=${url}`);
  };

  const responseGoogle = (response: any) => {
    console.log(response);
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
        <GoogleLogin
          clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy="single_host_origin"
        />
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
          Vista previa
        </Button>
      </div>
    </Paper>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/preview" element={<Preview />} />
      </Routes>
    </Router>
  );
}
