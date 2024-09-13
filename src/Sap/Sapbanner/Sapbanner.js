import React from 'react'
import "./Sapbanner.css"
import { Link } from 'react-router-dom'
function Sapbanner() {
  return (
    <div className='container-fluid sapbannerpart'>
        <div className='sapbannertext p-5'>
        <h1>Discover Our Comprehensive</h1>
        <h1>Portfolio Of End-to-End Services.</h1>
        <p>Through technology, we provide advanced solutions to meet the current and future challenges of organizations. KGGL offers an extensive range of SAP solutions and ERP software that are customizable to match the unique needs of clients</p>
        <Link>S/4HANA Implementations </Link>
        <Link>SAP Support Services</Link>
        <Link>Data & Analytics</Link>
        <Link>Value Added Solutions</Link>
        </div>
    </div>
  )
}

export default Sapbanner