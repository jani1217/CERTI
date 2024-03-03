import { useState } from 'react';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import './CertificateGenerator.css';

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
      
      // Create a new PDF document
      const doc = new jsPDF();
      
      // Certificate content
      const certificateContent = `
Certificate of Achievement

This is to certify that
${name}

has won the prize for
${prize}

Description: ${description}
`;

      // Add certificate template
      doc.setLineWidth(1.5);
      doc.setDrawColor(0, 0, 0); // Black color for border
      doc.setFillColor(255, 255, 255); // White color for background
      doc.roundedRect(20, 20, 170, 240, 5, 5, 'FD'); // Rounded rectangle for certificate

      // Set font to Google Sans
      doc.setFont('GOOGLE SANS', 'bold');

      // Add text content
      doc.setFontSize(14);
      doc.setTextColor(0, 0, 0); // Black color for text
      // Adjusted position for content closer to the top
      doc.text(certificateContent, 105, 50, { align: 'center' });

      // Add watermarks
      const watermarkContent = 'CONFIDENTIAL';
      const fontSize = 20;
      const angle = -45; // Rotation angle of the watermark

      // Define watermark positions
      const watermarkPositions = [
        { x: doc.internal.pageSize.getWidth() / 2, y: doc.internal.pageSize.getHeight() / 2 },
        { x: doc.internal.pageSize.getWidth() / 4, y: doc.internal.pageSize.getHeight() / 4 },
        // Add more positions as needed
      ];

      // Iterate over each position and add watermark
      watermarkPositions.forEach(({ x, y }) => {
        doc.setFontSize(fontSize);
        doc.setTextColor(200); // Gray color for watermark
        doc.text(watermarkContent, x, y, null, angle);
      });

      // Save PDF for each student
      doc.save(`${name}_certificate.pdf`);
    });
  };

  return (
    <div className="certificate-generator">
      <div className="input-container">
        <input type="file" id="file" onChange={handleFileUpload} />
        <label htmlFor="file">Upload Excel File</label>
      </div>
      <button className="generate-button" onClick={generatePDFCertificates}>Generate PDF Certificates</button>
    </div>
  );
};

export default CertificateGenerator;
