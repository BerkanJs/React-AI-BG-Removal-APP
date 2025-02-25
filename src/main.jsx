
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import { ImageProvider } from './context/ImageContext.jsx'



createRoot(document.getElementById('root')).render(
  
  <BrowserRouter>
 <ImageProvider>
 <App />


 </ImageProvider>
     
     
 
    

    
  </BrowserRouter>
  

)
