
import Navbar from './Components/Navbar/Navbar.js'
import Justsee from './Components/Justsee/Justsee'
import Footer from './Components/footer/Footer.js'
import Test from './Components/Test/Test.js'
import Remark from './Components/Remark/Remark'
import Middle from './Components/Middle/Middle'
import Content from './Components/Test/Testcontent'
import About from './Components/About.js'
import Notestate from './Context/notes/NoteState.js'
import {useEffect} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Notestate>
      <Router>
      <Navbar/>
         <Routes>
           <Route path='/Justsee' element={<Justsee></Justsee>}>
           </Route>
           <Route path='/' element={ <Middle/>}>
           </Route>
           <Route path='/Test' element={ <Test/>}>
           </Route>
           <Route path='/Remark' element={ <Remark/>}>
           </Route>
         </Routes>
      </Router>
      
       
      <Footer/>
      {/* <About></About> */}
      </Notestate>
       {/* <Content></Content> */}
    </div>
  );
}

export default App;
