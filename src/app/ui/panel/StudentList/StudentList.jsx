import React from 'react'

const StudentList = () => {
    return (
        <div className='w-full h-fit bg-primary rounded-lg mt-4 flex gap-6'>
            <div className='w-full h-full rounded-lg text-sm flex flex-col'>
                <div className='w-full grid grid-cols-7 bg-secondary px-6 py-4 rounded-t-lg'>
                    <div className='font-bold'>İsim</div>
                    <div className='font-bold'>Doğum Tarihi</div>
                    <div className='font-bold'>Bölge</div>
                    <div className='font-bold'>Takım</div>
                    <div className='font-bold'>Grup</div>
                    <div className='font-bold'>Y. Grubu</div>
                    <div className='font-bold'>Telefon</div>
                </div>
                <div className='w-full grid grid-cols-7 px-6 py-2' style={{borderTop: '1px solid #313D4F'}}>
                    <div>Ali Akcan</div>
                    <div>12.12.2000</div>
                    <div>Hamitler</div>
                    <div>Alanyaspor</div>
                    <div>1</div>
                    <div>2012</div>
                    <div>0532 123 45 67</div>
                </div>
                <div className='w-full grid grid-cols-7 px-6 py-2' style={{borderTop: '1px solid #313D4F'}}>
                    <div>Ali Akcan</div>
                    <div>12.12.2000</div>
                    <div>Hamitler</div>
                    <div>Alanyaspor</div>
                    <div>1</div>
                    <div>2012</div>
                    <div>0532 123 45 67</div>
                </div>
            </div>
        </div>
    )
}

export default StudentList