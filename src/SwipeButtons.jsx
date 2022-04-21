import React from 'react'
import {Close, StarRate, Favorite, FlashOn, Replay} from '@mui/icons-material'
import {IconButton} from '@mui/material'
function SwipeButtons() {
    const icons = [
        {icon: <Replay fontSize="large" className="m-2 text-[#f5b748]"/>},
        {icon: <Close fontSize="large" className="m-2 text-[#ec5e6f]"/>},
        {icon: <StarRate fontSize="large" className="m-2 text-[#62b4f9]"/>},
        {icon: <Favorite fontSize="large" className="m-2 text-[#76e2b3]"/>}, 
        {icon: <FlashOn fontSize="large" className="m-2 text-[#915dd1]"/>}
    ]
  return (
    <div className="fixed bottom-[10vh] flex w-full justify-evenly">
        {icons.map((icon, index)=>(
            <IconButton key={index} className="bg-white shadow-xl drop-shadow-xl">{icon.icon}</IconButton>
        ))}
    </div>
  )
}

export default SwipeButtons