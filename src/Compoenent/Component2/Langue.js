import React from 'react'

const Langue = ({rass}) => {
  return (
    <div>
        <h2> Le niveau d'anglais est {rass.langue}</h2>
        <h2>Il est inscrit a la formation de "{rass.formation}"</h2>
    </div>
  )
}

export default Langue