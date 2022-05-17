import { useEffect, useState } from "react";
import { Header } from "./components/header";
import { LogForm } from "./components/form";
import {fetchImages } from "./utils"
import './App.css';



const App = () => {
 
  const [user, setUser] = useState();
  const [images, setImages] = useState([]);
  
  useEffect(() => { 
    fetchImages(setImages);
  } , []);
  


  return (
    <div className="App">
      <Header title = {user}/>
      <LogForm setUser={setUser} />
    <img className ="User" src="./images/usericon.png" alt="user icon "></img>
    <div className="Stats">
    <div className="Profile"> 
    <h4> 10</h4>
    <h4> 300 </h4>
    <h4> 340 </h4>
    <h5> Posts </h5>
    <h5> Followers </h5>
    <h5> Following </h5>
     <div className="Grid">{images.map((image, i) => {
       return(
         <img className="Images" 
         src={image.download_url} 
         alt={`random file from unsplash number ${i}`}></img>
  
       )
      
     })}
     </div>
    </div>
    </div>
      </div>
    
  );
};

export default App;
