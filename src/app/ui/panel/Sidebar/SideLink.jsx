import Link from 'next/link'
import React, { useContext } from 'react'
import { SelectedSideLinkContext } from '../../../context/Context'

const SideLink = ({ text, link }) => {
    const { selectedSideLink, setSelectedSideLink } = useContext(SelectedSideLinkContext)

    const isActive = selectedSideLink === link;

    return (
        <div className={`text-white flex justify-center items-center py-3 w-full`} onClick={() => setSelectedSideLink(link)}>
            {
                isActive && <div className='w-2 bg-bl h-14 rounded-r-lg'></div>
            }
            <Link href={link} className={`w-full text-center py-4 rounded-lg mx-6 ${isActive ? 'bg-bl' : ''}`}>
                {text}
            </Link>
        </div>
    )
}

export default SideLink