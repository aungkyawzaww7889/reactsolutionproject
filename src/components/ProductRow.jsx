import React from 'react'
import { HiOutlinePencil, HiOutlineSearch, HiPlus, HiTrash  } from "react-icons/hi";
const ProductRow = () => {
  return (
    <>
        <tr className=" border-gray-200 border">
            
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                0
            </th>

            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                Apple MacBook Pro 17"
            </th>

            <td className="px-6 py-4 text-end">
                299
            </td>

            <td className="px-6 py-4 text-end">
                <p className='text-xs'>7 Sep 2024</p>
                <p className='text-xs'>10:00PM</p>
            </td>

            <td className="px-6 py-4 flex justify-end">

                {/* <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"><HiOutlinePencil/></a>
                <a href="#" className="font-medium text-blue-600 dark:text-red-500 hover:underline"><HiTrash/></a> */}

                <div className="inline-flex rounded-md shadow-sm" role="group">
                <button type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-teal-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
                    <HiOutlinePencil/>
                </button>
                
                <button type="button" className="px-4 py-2 text-sm font-medium text-blue-600 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-red-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
                    <HiTrash/>
                </button>
                </div>

            </td>

        </tr>
    </>
  )
}

export default ProductRow
