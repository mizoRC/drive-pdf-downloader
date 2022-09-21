import { useLocation, useNavigate } from 'react-router-dom';
import React from 'react';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
// import appIcon from '../../assets/icon.png';

// A custom hook that builds on useLocation to parse
// the query string for you.
function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

// eslint-disable-next-line react/prop-types
const Preview = () => {
  const navigate = useNavigate();
  const query = useQuery();
  const [url, setUrl] = React.useState<string | null>();

  const goBack = () => {
    navigate('/');
  };

  React.useEffect(() => {
    const newUrl = query.get('url');
    setUrl(newUrl);
  }, [query]);

  React.useEffect(() => {
    console.debug('[PREVIEW] URL => ', url);
  }, [url]);

  // 'https://drive.google.com/file/d/1Rq4OKbpfYi7AE6MAKu4afyebsapds5fQ/view';

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
      <div className="center">
        <Button
          variant="contained"
          style={{
            marginLeft: 8,
            marginRight: 8,
          }}
          color="secondary"
          onClick={goBack}
        >
          Volver
        </Button>

        <Button
          variant="contained"
          style={{
            marginLeft: 8,
            marginRight: 8,
          }}
          color="secondary"
        >
          Generar pdf
        </Button>
      </div>

      {url && <iframe title="doc_view" src={url} />}
    </Paper>
  );
};

export default Preview;
