import { useParams } from "react-router-dom";
import useDonation from "../../Hooks/useDonation";
import { useEffect, useState } from "react";


const DonationDetails = () => {
    const [singleData,setSingleData]=useState({});
    const { id }=useParams();
    const { data,loading }=useDonation();

    console.log(typeof id,singleData);
    useEffect(()=>{
    if(data){
        const singleData = data.find((item) => item.id == id);
        console.log(singleData);
        setSingleData(singleData);
    }
    },[data,id]);
    return (
        <div>
            
        </div>
    );
};

export default DonationDetails;