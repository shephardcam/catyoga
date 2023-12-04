import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useYogaContext } from '../components/YogaContext';
import '../styles/waiver.scss';

const downloadPdf = () => {
  const pdfPath = '/Waiver.pdf';
  const link = document.createElement('a');
  link.href = pdfPath;
  link.download = 'Waiver.pdf';
  link.click();
};

const WaiverPage = () => {
  const { state } = useYogaContext();
  const { setYogaData } = useYogaContext();
  console.log(state); 
  const { className, price, details, id } = state;

  useEffect(() => {
    downloadPdf();
  }, []);

  const handleAgreeClick = () => {
    setYogaData({ className, price, details, id });
  };

  return (
    <main>
      <h2 className='header'>Read and agree to our waiver to continue.</h2>
      <embed src="/Waiver.pdf" type="application/pdf" width="100%" height="600px" />
      <div className='buttons'>
        <a href="/">Cancel</a>
        <a onClick={handleAgreeClick}>
      <Link to="/payment">
        agree and checkout
      </Link>
      </a>
      </div>
    </main>
  );
};

export default WaiverPage;