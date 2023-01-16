import logo from './logo.svg';
import './App.css';
import Head from './Compoenent/Head';
import Identification from './Compoenent/Component2/Identification';
import Nom from './Compoenent/Component2/Nom';
import Langue from './Compoenent/Component2/Langue';
import Email from './Compoenent/Component2/Email';

import Groupi from './Compoenent/Compoenent3/Groupi';
  


 const rassem=
 {

   image : "rassem.jpg",
   nometprenom : "Rassem CHAKROUN",
   formation:"FULL STACK JS",
   langue :"Bien",
   email : "rassem.ch@gmail.com"

 }


 const groupe= [
  {
    id:0,
    imago:"avatar.jpg",
    nomprenom:"Ismail FENDRI",
    formati: "FULL STACK JS",
    langu :"Bien",
    emai : "Ismail.fendri@yahoo.com"
  },
  {
    id:1,
    imago:"avatar.jpg",
    nomprenom:"Yessine MASMOUDI",
    formati: "FULL STACK JS",
    langu :"Bien",
    emai : "Ismail.fendri@yahoo.com"
  },
  {
    id:2,
    imago:"avatar.jpg",
    nomprenom:"Mohamed SEBTI",
    formati: "FULL STACK JS",
    langu :"Bien",
    emai : "Mohamedsebti@yahoo.com"
  },
  {
    id:3,
    imago:"avatar.jpg",
    nomprenom:"Mokhtar MOALLA",
    formati: "FULL STACK JS",
    langu :"bien",
    emai : "Ismail.fendri@yahoo.com"
  },
  {
    id:4,
    imago:"avatar.jpg",
    nomprenom:"Wadi SAHNOUN",
    formati: "FULL STACK JS",
    langu :"Moyen",
    emai : "Wadiisahnoun@yahoo.com"
  },
 ]
    const handle= (name,formation)=>alert(`le candidat ${name}est inscrit a la formation ${formation}`);
 

function App() {
  return (
    <div className="App">
      <Head/>
      <div className="ident">
      <Identification rass={rassem}/>
      <div className="identf" >
        <Nom rass={rassem}/>
        <Langue rass={rassem}/>
        <Email rass={rassem}/>
      </div>
      
      </div>
      <div>
        <Groupi grou={groupe} hand={handle}/>
      </div>
     
    </div>
  );
}

export default App;
