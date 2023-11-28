import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/waiver.scss';

const downloadPdf = () => {
  const pdfPath = '/Waiver.pdf';
  const link = document.createElement('a');
  link.href = pdfPath;
  link.download = 'Waiver.pdf';
  link.click();
};

const WaiverPage = () => {
  const location = useLocation();

  useEffect(() => {
    downloadPdf();
  }, []);

  const { search } = location || {}; // Check if location is available
  const queryParams = new URLSearchParams(search);

  const className = queryParams.get('name');
  const price = queryParams.get('price');
  const details = queryParams.get('details');
  const duration = queryParams.get('duration');
  const maxCapacity = queryParams.get('maxCapacity');

  const handleAgreeClick = () => {
    // Redirect to "/payment" with the same parameters
    window.location.href = `/payment?name=${className}&price=${price}&details=${details}&duration=${duration}&maxCapacity=${maxCapacity}`;
  };

  return (
    <main>
      <h2 className='header'>Read and agree to our waiver to continue.</h2>
      <embed src="/Waiver.pdf" type="application/pdf" width="100%" height="600px" />

      <div className='buttons'> 
        <a href="/">Cancel</a>
        <a onClick={handleAgreeClick}>Agree</a>
      </div>
    </main>
  );
};

export default WaiverPage;
