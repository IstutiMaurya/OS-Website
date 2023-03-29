import './App.css';
import Footer from './Footer';
import HomePage from './HomePage';
import NavbarOfHome from './NavbarOfHome';
import AboutPage from './AboutPage';
import Project from './Project';
import PetersonAlgorithm from './PetersonAlgorithm';
import Try from './Try';
import OptimalPage from './OptimalPage';
// import PriorityTable from './Components/PriorityTable';

function App() {
  return (
    <div className="App">
      <NavbarOfHome />
      {/* <HomePage/> */}
      {/* <Project/> */}
      {/* <AboutPage /> */}
      {/* <Try/> */}
      <OptimalPage/>
      {/* <PetersonAlgorithm /> */}
      <Footer />
    </div>
  );
}

export default App;
