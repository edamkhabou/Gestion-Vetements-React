import {Routes,Route,BrowserRouter} from "react-router-dom";
import Listarticle from'./Componets/Articles/Listarticles';
import Listcategories from "./Componets/Categories/Listcategories";
import Listmarque from "./Componets/Marque/Listmarque";

import Editcategories from'./Componets/Categories/Editcategories';
//import Editmarque from './Components/Marque/Editmarque';
import Insertarticle from './Componets/Articles/Insertarticle';
import Insertcategories from'./Componets/Categories/Insertcategories';
import Insertmarque from "./Componets/Marque/Insertmarque";

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarre from './Navbarre';
import Editarticle from "./Componets/Articles/Editarticle";
import Editmarque from "./Componets/Marque/Editmarque";
//import Insertmarque from './Components/Marque/Insertmarque';


function App() {
  return (
    <BrowserRouter>
    <Navbarre/>
    <Routes>
    <Route path="/Articles" element={<Listarticle/>}/>
   <Route path="/Categories" element={<Listcategories/>}></Route>
    <Route path='/Marque' element={<Listmarque/>}></Route>
    
    <Route path="/Editarticle/:id" element= {<Editarticle/>}></Route>
    <Route path="/Editcategories/:id" element={<Editcategories/>}></Route>
    <Route path="/Editmarque/:id" element={<Editmarque/>}></Route>
    

    <Route path='/Insertarticle' element={<Insertarticle/>}></Route>
    <Route path='/Insertcategories' element={<Insertcategories/>}></Route>
    <Route path='/Insertmarque' element={<Insertmarque/>}></Route>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
