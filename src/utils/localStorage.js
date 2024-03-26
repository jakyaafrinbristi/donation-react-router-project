import { toast } from "react-toastify";

export const saveToLocalStorage = (data) => {
    const savedData = JSON.parse(localStorage.getItem("donate")) || [];
    const existedData = savedData.find((item) => item.id == data.id);
    if (!existedData) {
      savedData.push(data);
      localStorage.setItem("donate", JSON.stringify(savedData));
      toast.success("Added succesfully to local storage ")
    }
    else{
        toast.warning('this data already stored')
    }
    }
    export const getFromLocalStorage = () => {
        const data = JSON.parse(localStorage.getItem("donate")) || [];
        console.log('local',data)
        return data;
      };
  