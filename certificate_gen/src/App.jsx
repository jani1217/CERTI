import  { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for prop type validation
import './App.css'; // Import your CSS file for styling
import * as XLSX from 'xlsx';

const NavBar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li><a href="/" className="navbar-link">Home</a></li>
                <li><a href="/add-excel" className="navbar-link">Add Excel Sheet</a></li>
                <li><a href="/faq" className="navbar-link">FAQ</a></li>
            </ul>
        </nav>
    );
};

const TemplateSelector = ({ selectedTemplate, setSelectedTemplate }) => {
    return (
        <div className="template-selector">
            <h2>Select Template</h2>
            <select value={selectedTemplate} onChange={(e) => setSelectedTemplate(e.target.value)} className="template-dropdown">
                <option value="">Select Template</option>
                <option value="template1">Template 1</option>
                <option value="template2">Template 2</option>
                {/* Add more template options as needed */}
            </select>
        </div>
    );
};

// Prop type validation for TemplateSelector component
TemplateSelector.propTypes = {
    selectedTemplate: PropTypes.string.isRequired,
    setSelectedTemplate: PropTypes.func.isRequired
};

const ExcelSheetAdder = ({ setSelectedFile }) => {
    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    return (
        <div className="excel-sheet-adder">
            <h2>Add Excel Sheet</h2>
            <input type="file" onChange={handleFileChange} className="file-input" />
        </div>
    );
};

// Prop type validation for ExcelSheetAdder component
ExcelSheetAdder.propTypes = {
    setSelectedFile: PropTypes.func.isRequired
};

const GenerateCertificateButton = ({ selectedTemplate, selectedFile }) => {
    const handleGenerateCertificate = () => {
        // Add logic to generate certificate based on selectedTemplate and selectedFile
        alert("Certificate generated!"); // Placeholder for actual generation logic
    };

    return (
        <div className="generate-certificate-button">
            <button onClick={handleGenerateCertificate} disabled={!selectedTemplate || !selectedFile} className="generate-button">Generate Certificate</button>
        </div>
    );
};

// Prop type validation for GenerateCertificateButton component
GenerateCertificateButton.propTypes = {
    selectedTemplate: PropTypes.string.isRequired,
    selectedFile: PropTypes.object // You can adjust the prop type as needed
};

const FAQSection = () => {
    return (
        <div className="faq-section">
            <h2 className="faq-heading">FAQ</h2>
            <p className="faq-text">Here are some frequently asked questions:</p>
            <ul className="faq-list">
                <li className="faq-item">Question 1: Lorem ipsum dolor sit amet?</li>
                <li className="faq-item">Question 2: Consectetur adipiscing elit?</li>
                <li className="faq-item">Question 3: Sed do eiusmod tempor incididunt?</li>
            </ul>
        </div>
    );
};

const App = () => {
    const [selectedTemplate, setSelectedTemplate] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);

    return (
        <div className="app-container">
            <NavBar />
            <TemplateSelector selectedTemplate={selectedTemplate} setSelectedTemplate={setSelectedTemplate} />
            <ExcelSheetAdder setSelectedFile={setSelectedFile} />
            <GenerateCertificateButton selectedTemplate={selectedTemplate} selectedFile={selectedFile} />
            <FAQSection />
        </div>
    );
};

export default App;
