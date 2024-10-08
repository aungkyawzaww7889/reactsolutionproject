import React from 'react'
import { HiOutlinePencil, HiOutlineSearch, HiOutlineTrash, HiPlus, HiTrash, HiDesktopComputer } from "react-icons/hi";

const ProductList = () => {
  return (
    <section>
      
        <div className="relative overflow-x-auto sm:rounded-lg">

            <div className='flex justify-between items-center my-3'>

                <div className=" inset-y-0 flex items-center ps-3.5 bg-blue-600 text-white rounded-md gap-3">
                   <HiOutlineSearch className='text-2xl'/>
                   <input type="text" className="md:w-full p-3 ps-10 text-sm text-gray-900 border focus:outline-none rounded-md" placeholder="Search Products..." required />
                </div>

                <div>
                    <button type='button' className='bg-blue-700 text-sm md:text-md text-white rounded-md p-2.5 focus:outline-none hover:bg-blue-600'>Add New Product <HiPlus className ="inline-block" /> </button>
                  

                </div>

            </div> 

            <table className="w-full text-sm text-left rtl:text-right text-gray-500 border">
                <thead className="text-xs text-gray-700 uppercase">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            #
                        </th>
                        <th scope="col" className="px-6 py-3">
                            PRODUCT NAME
                        </th>
                        <th scope="col" className="px-6 py-3 text-end">
                            PRICE
                        </th>
                        <th scope="col" className="px-6 py-3 text-end">
                            Created At
                        </th>
                        <th scope="col" className="px-6 py-3 text-end">
                            ACTION
                        </th>
                    </tr>
                </thead>
                <tbody>

                    <tr className=" border-gray-200 border hidden last:table-row">
                        
                        <td colSpan={5} className="px-6 py-4 text-center">
                           There is no Product
                        </td>
        
                    </tr>

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

                   
 
                </tbody>
            </table>
        </div>

    </section>
  )
}

export default ProductList
