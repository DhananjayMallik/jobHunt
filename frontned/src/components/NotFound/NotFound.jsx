import React from 'react'
import {Link} from "react-router-dom";
const NotFound = () => {
  return (
    <div>
      <section className='page notfound'>
          <div className="content">
            <img src="/notfound.png" alt="notfound" />
            <Link to={'/'}>RETURN TO HOME PAGE</Link>
          </div>
        </section>
    </div>
  )
}

export default NotFound;
