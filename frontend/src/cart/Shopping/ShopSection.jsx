import React, { useState } from 'react';
import productsData from '../../StateMangement/productsData';
import ProductsCard from './ProductsCard';
import '../Shopping/ShopSection.css'
const ShopSection = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (direction) => {
    const container = document.getElementById('product-container');
    const scrollAmount = direction === 'left' ? -200 : 200; // Adjust the scroll amount as needed

    container.scrollLeft += scrollAmount;

    setScrollPosition(container.scrollLeft);
  };

  return (
    <>
      <section className="relative flex flex-col items-center pr-10 pl-10 pt-20 pb-20">
        <h1 className="text-[50px] font-[600] text-center pb-10">What's new?</h1>
        <div
          className="whitespace-nowrap"
          id="product-container"
          style={{ overflowX: 'auto' }}
        >
          <div className="flex flex-row gap-x-4">
            <button
              className="absolute top-[400px] left-2 transform -translate-y-1/2 z-10 bg-opacity-50 border-none pt-3.5 pb-4 px-6 py-6 cursor-pointer text-[30px] rounded-full bg-gray-300"
              onClick={() => handleScroll('left')}
            >
              &lt;
            </button>
            <div className="flex flex-row gap-x-4 max-w-[1100px]">
            {productsData.map((item) => (
              <ProductsCard key={item.id} {...item} />
            ))}
            <button
              className="absolute top-[400px] right-2 transform -translate-y-1/2 z-10 bg-opacity-50 border-none p-2 cursor-pointer text-[30px] pt-3.5 pb-4 px-6 py-6 rounded-full bg-gray-300"
              onClick={() => handleScroll('right')}
            >
              &gt;
            </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopSection;