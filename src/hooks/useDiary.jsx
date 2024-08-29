import { useContext, useState, useEffect } from "react";
import { DiaryStateContex } from "../App";
import { useNavigate } from "react-router-dom";

const useDiary = (id) => {
    const data = useContext(DiaryStateContex);
    const [currentDiaryItem, setCurrentDiaryItem] = useState();
    const nav = useNavigate();
    
    useEffect(()=>{
        const currentDiaryItem = data.find((item) => String(item.id) === String(id))
        if (!currentDiaryItem){
            window.alert("존재하지 않은 일기입니다.")
            nav("/",{replace:true});
        }
        
        setCurrentDiaryItem(currentDiaryItem);
    },[id, data])

    return currentDiaryItem;
}

export default useDiary;