import React from 'react'
import './Banner.css'
import img from '/banner.svg'
import { Padding } from '@mui/icons-material'

const Banner = () => {
  return (
    <div className='banner-bg'>
        <video style={{padding:'100px'}} src="https://firebasestorage.googleapis.com/v0/b/kleinerladen-6644f.appspot.com/o/iPhone%20Xr%20Official%20Trailer.mp4?alt=media&token=ec2ba736-d375-4768-a42c-d4f2c64f68c0" autoPlay loop muted/>
    </div>
  )
}

export default Banner