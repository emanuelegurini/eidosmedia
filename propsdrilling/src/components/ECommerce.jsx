import {useState} from "react";

const shoes = [
    { path: '/shoes/image-product-1-thumbnail.jpg', index: 1},
    { path: '/shoes/image-product-2-thumbnail.jpg', index: 2},
    { path: '/shoes/image-product-3-thumbnail.jpg', index: 3},
    { path: '/shoes/image-product-4-thumbnail.jpg', index: 4},
]

export const ECommerce = () => {

    const [count, setCount] = useState(1);

    /*
    * This function use the setCount to update the count state,
    * and update the image selected based on his index, corresponding to count state.
    */
    const handleCount = (e) => {
          setCount([e.target.id]);
    }

    return (

        <div className="min-h-screen bg-gray-50">

          <img className={'w-full h-full'} src={`/shoes/image-product-${count}-thumbnail.jpg`}/>
                {
             shoes.map((shoe) => (
                 <img
                     src={shoe?.path}
                     id={shoe.index}
                     key={'product' + shoe.index}
                     onClick={handleCount}
                     className={'w-12 h-12'}
                 />
             ))
          }

        </div>

    )
}
