import { useState } from 'react';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';

const CertificateGenerator = () => {
  const [studentsData, setStudentsData] = useState([]);

  // Function to handle file upload
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    
    reader.onload = (event) => {
      const binaryString = event.target.result;
      const workbook = XLSX.read(binaryString, { type: 'binary' });
      const worksheetName = workbook.SheetNames[0]; // Assuming data is in the first sheet
      const worksheet = workbook.Sheets[worksheetName];
      const data = XLSX.utils.sheet_to_json(worksheet);

      setStudentsData(data);
    };

    reader.readAsBinaryString(file);
  };

  // Function to generate and save PDF for each student
  const generatePDFCertificates = () => {
    studentsData.forEach((student) => {
      const { name, prize, description } = student;
      const certificateContent = `
        Certificate of Achievement
        This is to certify that
        ${name}
        has won the prize for
        ${prize}
        Description: ${description}
      `;
      
      // Create a new PDF document
      const doc = new jsPDF();
      doc.text(certificateContent, 10, 10);

      // Save PDF for each student
      doc.save(`${name}_certificate.pdf`);
    });
  };

  return (
    <div>
      <h1>Certificate Generator</h1>
      <input type="file" onChange={handleFileUpload} />
      <button onClick={generatePDFCertificates}>Generate PDF Certificates</button>
    </div>
  );
};

export default CertificateGenerator;
