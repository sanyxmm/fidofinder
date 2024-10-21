import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../StateMangement/cartSlice';

const ProductsCard = (props) => {
    const { img, rating, title, price } = props;
    const [isAdded, setIsAdded] = useState(false);
    const dispatch = useDispatch();

    const handleAddToCart = () => {

        // here, we cannot directly pass the `props` as it is, if we need to access the same value within the child component. So, we've to pass it as a different prop like this- `{...props}`
        const item = { ...props };
        dispatch(addItem(item));

        setIsAdded(true);

        setTimeout(() => {
            setIsAdded(false);
        }, 1000);
    };


    return (
            <div className="flex flex-col justify-center items-center p-5  min-w-[260px] h-[430px] bg-gray-100 rounded-md">
                <figure className='h-[250px]'>
                    <img  src={img} className='h-[250px]' alt="item-img" />
                </figure>
                <strong className="rating1">{rating}</strong>
                <h4 className="title1">{title}</h4>
                <h3 className="price1">₹ {price.toLocaleString()}</h3>
                <button className="bg-[#3498db] px-10 py-2 rounded-xl"
                    type="button"
                    onClick={handleAddToCart}
                >
                    {isAdded ? 'Added' : 'Add to cart'}
                </button>
            </div>
    );
};

export default ProductsCard;