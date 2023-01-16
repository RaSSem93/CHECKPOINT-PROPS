import React from 'react'

import './Groupi.css';

const Groupi = ({grou,hand}) => {
  return (
    <div className="gro">
        {grou.map(el=>(
        <div className='grou1'key={el.id} >
         <img className='ima3'src={el.imago} alt="222"/>
         <h1> {el.nomprenom}</h1>
         <h2> Il est inscrit a la formation"{el.formati}"</h2>
         <h2>Le niveau d'anglais est {el.langu}</h2>
         <h3>{el.emai}</h3>
         <button onClick={()=>hand(el.nomprenom, el.formati)}>Voir la Formation</button>
        </div>


        )
        )}

    </div>
  )
}

export default Groupi