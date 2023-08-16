import React from 'react'
export default function Footer()
{
    return(
        <div className="card text-center" style={{backgroundColor: 'black'}}>
  <div className="card-header" style={{color:'white', fontSize:'2rem',fontFamily: 'Tektur, cursive'}}>
    Inpired by fast touch typing Fascinating Skills
  </div>
  <div className="card-body " style={{color:'white',  fontFamily: 'Ubuntu, sans-serif'}}>
    <h5 className="card-title">Create by Abhishek Jaiswal</h5>
    <p className="card-text">Every Computer Engineer Should master the touch typing Skills</p>
    <a href="/" className="btn btn-primary">Learn More ...</a>
  </div>
</div>
    )
}