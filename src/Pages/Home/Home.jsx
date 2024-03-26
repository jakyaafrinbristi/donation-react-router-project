
import { useEffect, useState } from 'react';
import Banner from '../../components/Banner/Banner';
import CategoryList from '../../components/CategoryList/CategoryList';
import useDonation from '../../Hooks/useDonation';

const Home = () => {
    const [value,setValue]=useState("")
    const{data,loading}=useDonation();
    const [filterdData,setFilteredData]=useState([]);
    useEffect(()=>{
        setFilteredData(data)
    },[data])
    // console.log(value)
    const handleSearch =()=>{
        if(value.trim() != ""){
         const filterd = data.filter((item)=>item.category.toLowerCase().includes(value.toLowerCase())
        ); 
        setFilteredData(filterd);
        }
        else{
            setFilteredData(data)
        }
    };
    return (
        <div>
            <Banner value={value} setValue={setValue} handleSearch={handleSearch}></Banner>
            <CategoryList filterdData={filterdData}></CategoryList>
        </div>
    );
};

export default Home;