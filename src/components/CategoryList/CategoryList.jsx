import React from 'react';
import useDonation from '../../Hooks/useDonation';
import CardDefault from '../Card/CardDefault';


const CategoryList = () => {
    const{data,loading}=useDonation()
    console.log(data)
    return (
        <div className='grid grid-cols-4 gap-8 max-w-7xl mx-auto py-3 mt-12'>
            {
              data.map((item)=><CardDefault
               key={item.id}
                item={item}>          
                </CardDefault>)  
            }
        </div>
    );
};

export default CategoryList;