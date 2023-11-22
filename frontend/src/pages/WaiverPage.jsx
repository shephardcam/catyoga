//import TopNav from './components/TopNav';
//import Waiver from './components/Waiver';
import React, { useEffect } from 'react';
import './styles/waiver.scss';

const downloadPdf = () => {
  const pdfPath = '../public/Waiver.pdf';
  const link = document.createElement('a');
  link.href = pdfPath;
  link.download = 'Waiver.pdf';
  link.click();
};

const WaiverPage = () => {
  useEffect(() => {
    downloadPdf();
  }, []);

  return (
    <main>
      <h2>Sign Waiver</h2>
      <embed src="/Waiver.pdf" type="application/pdf" width="100%" height="600px" />

      <div className='buttons'> 
       <a href="/">Cancel</a>
       <a href="/payment">Agree</a>
      </div>
    </main>
  );
};


export default WaiverPage;
