import React from 'react'
import "./Header.css"
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Input from '../Input/Input';
function Header({movies}) {
  return (
    <div className='header'>
        {/* <img src="https://cdn.forbes.ru/forbes-static/1082x609/new/2022/03/GettyImages-904490726-62334a92c1186.webp"/> */}
        <Fade>
        {movies.map(({id,backdrop_path}) => (
          <div className="each-fade" key={id}>
              <img width="1080px" src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} />
          
          </div>
        ))}
      </Fade>
    </div>
  )
}

export default Header