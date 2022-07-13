import React from 'react'
import './Buttons.css'
function Buttons({name, onclick}) {
    return (
    <button className='btn' onClick={onclick} >
        {name}
    </button>
  )
}

export default Buttons