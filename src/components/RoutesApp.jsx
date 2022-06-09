import { Main } from "./Main";

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
                
                
          
        </Routes>
      </Router>
     );
}

export default RoutesApp;