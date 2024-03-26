import React, { useState } from 'react';
import useLocalStorage from '../../Hooks/useLocalStorage';
import DonationCard from '../../components/DonationCard/DonationCard';
import { Button } from '@material-tailwind/react';

const Donation = () => {
    const {localData}=useLocalStorage();
    const [showAll,setShowAll]=useState(false);
    console.log(showAll)
    const handleShowAll=()=>{
        setShowAll(!showAll);
    }
    if(localData.length == 0){
        return <p>No data found</p>
    }

    // console.log(localData)
    return (
       <>
        <div className='grid grid-cols-2 gap-8 mt-12 max-w-7xl mx-auto'>
            {
                localData.slice(0, showAll ? localData.length : 4).map((data)=>
                <DonationCard key={data.id} data={data}></DonationCard>)
            }
        </div>
      {
        localData.length > 4 ?
      (  <div className='mt-4 text-center'>
        <Button onClick={handleShowAll} color="green">{
         !showAll ? "ShowAll" :"ShowLess"}</Button>
         </div>)
         : null
      }
        
       </>
    );
};

export default Donation;