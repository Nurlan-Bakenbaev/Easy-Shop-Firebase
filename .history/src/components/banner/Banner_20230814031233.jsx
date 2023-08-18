import React from 'react'
import './Banner.css'
import img from '/banner.svg'
import { Padding } from '@mui/icons-material'

const Banner = () => {
  return (
    <div className='banner-bg'>
        <video src="http://localhost:5173/" autoPlay loop muted/>
    </div>
  )
}

export default Banner