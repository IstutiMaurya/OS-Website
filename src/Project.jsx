import React from 'react'
import './Project.css';

function Project() {
  return (
    <div className="Project">
        
        <ul className="row111">
            <li> <a href="/" className='topleft'>PROJECT 1</a> </li>
            <li> <a href="/" className='topright'>PROJECT 2</a> </li>
        </ul>
        
        <ul className="row222">
        <li> <a href="/" className='bottomleft'>PROJECT 3</a> </li>
        <li> <a href="/" className='bottomright'>PROJECT 4</a> </li>
        </ul>
    </div>
  )
}

export default Project