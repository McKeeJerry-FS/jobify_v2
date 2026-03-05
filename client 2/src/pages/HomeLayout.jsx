import React from 'react'
import { Outlet } from 'react-router-dom'

const HomeLayout = () => {
  return (
    <div>
      <Outlet /> {/* This will render the child routes (Login, Register, Dashboard) */}
    </div>
  )
}

export default HomeLayout
