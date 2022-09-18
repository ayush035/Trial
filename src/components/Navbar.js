import React from 'react'
export default function Navbar (){
    return(
        <nav className="navbar navbar-expand-lg bg-none">

  <div className="container-fluid">
    <a className="navbar-brand" href="/"><h2><font color ='#208351'>Dappify</font></h2></a>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/"><font color ='black' size="4">Home</font></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://opensea.io/"><font color ='black' size="4">NFTs</font></a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false" background color='dark'><font color ='black' size="4">
            Connect Wallet</font>
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/Metamask.js/"><img src='' sizes='2px'/>MetaMask</a></li>
            <li><a className="dropdown-item" href="/"><img src='' sizes='2px'/>Coinbase</a></li>
            <li><a className="dropdown-item" href="/"><img src='' sizes='10%'/>Trust WAllet</a></li>
          </ul>
        </li>
        <li className="nav-item">
          
        </li>
      </ul>

    </div>
    <div>
      <hr
        style={{
          background: 'black',
          color: 'black',
          borderColor: 'black',
          height: '3px',
        }}
      />
      </div>


  </div>
</nav>
        


    )
}