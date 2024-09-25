import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

function BannerIT() {
  return (
    <div className='container-fluid sapbannerpart' id='DMBanner'>
    <div className='row p-sm-0 p-md-5'>
<h1 className='dmheadertext'>Elevating performance marketing <br/>
with our data-driven<br/>
Digital marketing intuition</h1>
<p className='dmpara'>Consistent outcomes, innovative Strategies</p>
<div>
  <Link className='linkhover'>Product and Solutions <FontAwesomeIcon icon={faAngleRight} /></Link>
  <Link className='linkhover'>Bespoke Applications <FontAwesomeIcon icon={faAngleRight} /></Link>
</div>
    </div>
</div>
  )
}

export default BannerIT