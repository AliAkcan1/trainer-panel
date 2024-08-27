import React from 'react'
import StudentList from '../../ui/panel/StudentList/StudentList'

const UsersPage = () => {
  return (
    <div className='w-full h-fit p-6 text-md text-white'>
      <h1 className='text-lg'>
        Öğrenciler
      </h1>
      <div className='bg-primary flex rounded-xl mt-4 w-fit' style={{ border: '1px solid #313D4F' }}>
        <div className='p-5' style={{borderRight: '1px solid #313D4F'}}>
          <i className="fa-solid fa-filter text-lg"></i>
        </div>
        <div className='flex justify-center items-center py-5 px-4' style={{borderRight: '1px solid #313D4F'}}>
          <h1>Şuna göre filtrele:</h1>
        </div>
        <button className='flex justify-center items-center py-5 px-4 gap-4 hover:bg-secondary duration-200' style={{borderRight: '1px solid #313D4F'}}>
          <h1>Doğum Tarihi</h1>
          <i className="fa-solid fa-chevron-down"></i>
        </button>
        <button className='flex justify-center items-center py-5 px-4 gap-4 hover:bg-secondary duration-200' style={{borderRight: '1px solid #313D4F'}}>
          <h1>Bölge</h1>
          <i className="fa-solid fa-chevron-down"></i>
        </button>
        <button className='flex justify-center items-center py-5 px-4 gap-4 hover:bg-secondary duration-200' style={{borderRight: '1px solid #313D4F'}}>
          <h1>Takım</h1>
          <i className="fa-solid fa-chevron-down"></i>
        </button>
        <button className='flex justify-center items-center py-5 px-4 gap-4 hover:bg-secondary duration-200' style={{borderRight: '1px solid #313D4F'}}>
          <h1>Grup</h1>
          <i className="fa-solid fa-chevron-down"></i>
        </button>
        <button className='flex justify-center items-center py-5 px-4 gap-4 hover:bg-secondary duration-200'>
          <h1>Y. Grup</h1>
          <i className="fa-solid fa-chevron-down"></i>
        </button>
      </div>
      <StudentList />
    </div>
  )
}

export default UsersPage