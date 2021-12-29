import logo from './logo.svg';
import './App.css';
import SearchBar from './Components/SearchBar';
import InfoData from './Data.json'




function App() {
  
  return (
    
    <div className="App">
      <div className='foto'> 
        <img src='/images/tes.png'/>
        </div>
        <div className='alt'>
        <img src='/images/bas.PNG'/>
        </div>
        
     
    <SearchBar placeholder="SEARCH" data={InfoData}/>
    
    </div>
    
  );
  
}

export default App;
