import React from 'react'
import useSWR from 'swr';
import ProductListSkeletonLoader from './ProductListSkeletonLoader';
import ProductRow from './ProductRow';
import { HiOutlineSearch, HiPlus } from 'react-icons/hi';
import ProductListEmptyStage from './ProductListEmptyStage';


const fetcher = (url) => fetch(url).then(response=>response.json());

const ProductList = () => {

    // console.log(import.meta.env.VITE_API_URL + "/products");
    const {data,isLoading,error} = useSWR(import.meta.env.VITE_API_URL + "/products",fetcher);
    // console.log(data );
   

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

                   {isLoading ? (<ProductListSkeletonLoader/>) : data.length === 0 ? (<ProductListEmptyStage/>) : (
                        data.map((el,idx)=> <ProductRow key={idx} el={el}/>)
                   )}

                
                </tbody>
            </table>
        </div>

    </section>
  )
}

export default ProductList
