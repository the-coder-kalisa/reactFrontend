import React from 'react'
import {IconButton} from '@mui/material'
import {Person, Forum} from '@mui/icons-material'
function Header() {
  return (
    <div className="flex items-center p-1 justify-between border-b-2 border-solid border-gray-200">
       <IconButton><Person fontSize='large'/></IconButton> 
       <img className="object-contain h-[40px]" src="https://logos-world.net/wp-content/uploads/2020/09/Tinder-Emblem-700x394.png" alt="logo"/>
       <IconButton><Forum fontSize='large'/></IconButton> 
    </div>
  )
}

export default Header