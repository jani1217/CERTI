import Login from './components/login';
import CertificateGenerator from './components/CertificateGenerator';//import Footer from './components/footer'; // Import the ExcelFileUpload component
import Navbar from './components/navbar';
import ImageSlider from './components/ImageSlider';
const App = () => {
    return (
    
        <div className="app">
            <Navbar/>
            <Login />
            <ImageSlider/>
            <CertificateGenerator />
        </div>
    
    );
};

export default App;
