
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
// import Oppo from './components/Oppo';
// import Header from './components/Header';
// import Cards from './components/Cards';
// import Section2 from './components/Section2';
// import Section3 from './components/Section3';
// import Section4 from './components/Section4';
// import Section5 from './components/Section5';
// import Section6 from './components/Section6';
// import Section7 from './components/Section7';
// import Footer from './components/Footer';
// import Section8 from './components/Section8';
import Homepage from './components/Homepage';



const App = ()=>{
  return(
 <div>
 <Homepage/>
 {/* <Oppo/> */}
 {/* <Navbar/> */}
 
 {/* <Header/>
 <Cards/>
 <Section2/>
 <Section3/>
 <Section4/>
 <Section6/>
 <Section5/>
 <Section6/>
 <Section7/>
 <Section8/>
 <Footer/> */}
 
   <Routes>

   </Routes>
   <ToastContainer/>
 </div>
 
  )
}
export default App;