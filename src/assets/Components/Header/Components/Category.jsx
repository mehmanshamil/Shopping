import React from 'react'

const Category = ({item}) => {
  return (
    <div className='bg-red-600 text-white text-center w-3/12 p-2 rounded-xl cursor-pointer hover:bg-black transition duration-1000'>
      {item}
    </div>
  )
}

export default Category
