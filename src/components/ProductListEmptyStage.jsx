import React from 'react'

const ProductListEmptyStage = () => {
  return (
    <>
       <tr className=" border-gray-200 border hidden last:table-row">
                            
            <td colSpan={5} className="px-6 py-4 text-center">
                There is no Product
            </td>
        </tr>
    </>
  )
}

export default ProductListEmptyStage
