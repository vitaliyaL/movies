import React from "react";
import "./TrueHeader.css";
import {Link} from 'react-router-dom'
function TrueHeader() {
  return <div className='true_header'>
    <Link to="/favorite">
    <div><button>favorite</button></div>
    </Link>
  </div>;
}

export default TrueHeader;
