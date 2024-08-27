'use client'
import { SelectedSideLinkContext } from '../../../context/Context'
import SideLink from './SideLink'
import React, { useEffect, useState } from 'react'

const Sidebar = () => {
  const [selectedSideLink, setSelectedSideLink] = useState('')

  useEffect(() => {
    setSelectedSideLink(window.location.pathname)
  }, [])

  return (
    <SelectedSideLinkContext.Provider value={{ selectedSideLink, setSelectedSideLink }}>
      <div className='flex flex-col items-center justify-center p-0 m-0 h-screen'>
        <div className='py-4 bg-primary w-full flex justify-center'>
          <a href="/" className=''>Alanyaspor Logo</a>
        </div>
        <div className='bg-primary w-full h-full'>
          <ul className='flex flex-col justify-center items-center bg-primary'>
            <li className='w-full'>
              <SideLink text='Öğrenciler' link='/panel/users' />
            </li>
            <li className='w-full'>
              <SideLink text='Antrenmanlar' link='/panel/trainings' />
            </li>
            <li className='w-full'>
              <SideLink text='Ödemeler' link='/panel/payments' />
            </li>
          </ul>
        </div>
      </div>
    </SelectedSideLinkContext.Provider>
  )
}

export default Sidebar