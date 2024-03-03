
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar';
import Login from './components/login';
import CertificateGenerator from './components/CertificateGenerator';
import ImageSlider from './components/ImageSlider';

const App = () => {
    return (
        <Router>
            <div className="app">
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route path="/image-slider" component={ImageSlider} />
                    <Route path="/certificate-generator" component={CertificateGenerator} />
                    {/* Add more routes here */}
                </Switch>
            </div>
        </Router>
    );
};

export default App;
