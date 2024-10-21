import React from 'react'
import { Link } from 'react-scroll';
import './Home.css'
function Home() {

  return (
     <div className='home'>
      <div>
        <div style={{fontSize :'1.1em'}}>Trusted  by thousands of </div>
        <div style={{fontSize:'2em'}}>Pets and Their Owners</div>
        <div style={{fontSize:'0.6em'}}>Discover why countless pet owners trust our innovative approach to bringing lost pets safely back home</div>
        <button style={{padding:"0.25em 0.5em",
                        marginTop:'0.8em',
                        fontSize:'1em',
                        borderRadius:'100%',
                        border:'none'}}>
          <Link  id='text' activeClass="active" smooth spy to="Shop"> <i class="fa-solid fa-angle-down"></i></Link>
        </button>
      </div>
    </div>
  );
}

export default Home
