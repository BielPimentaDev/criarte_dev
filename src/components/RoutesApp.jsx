import { Main } from "./Main";
import {Teste} from './Teste.jsx'
import ClientsModal from "./ClientsTable/ClientsModal";


import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
import RegisterModal from "./Register/RegisterModal";






function RoutesApp() {
    return ( 
        <Router>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/clients-table" element={<ClientsModal/>}/>
          <Route path="/client-register" element={<RegisterModal/>}/>
          <Route path='/teste' element={<Teste/>} />        
                
          
        </Routes>
      </Router>
     );
}

export default RoutesApp;