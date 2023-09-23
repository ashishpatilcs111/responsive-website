import Font from './Components/font';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Card from './Components/card';
import About from './Components/about';
import Projects from './Components/projects';
import Faq from './Components/faq';
import Contect from './Components/contect';
import './App.css';
function App() {
  return (
    <>
   <div class="container-fluid" id='app'>
     <Font/>
     <Card/>
     <About/>
     <Projects/>
     <Faq/>
    <Contect/>
    </div>    
    </>
  );
}

export default App;
