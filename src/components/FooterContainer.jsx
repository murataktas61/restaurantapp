import React from 'react'

const FooterContainer = () => {
  return (
    <div className='w-full flex items-center justify-between footerbg p-8 rounded-lg'>
        <p className='hidden md:flex gap-3 items-center'>
        © 2022 All Rights Reserved
        </p>
        <div className='hidden md:flex gap-3 items-center'>
        <p>Powered by <a href='https://www.aktyazilim.com/' target="_blank" className='text-textColor hover:text-orange-400'>aktyazilim</a></p>
        </div>
    </div> 
  )
}

export default FooterContainer
