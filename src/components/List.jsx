import React, { useEffect, useState } from 'react';
import axios from "axios";
import CardItem from './CardItem';
import style from "../style/list.module.css";

const List = () => {
    const [list,setList] = useState([]);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async()=>{
    const {data} =await axios.get("https://isro.vercel.app/api/spacecrafts") ;
    setList(data.spacecrafts);
    console.log(data)
    }
    
  return (
    <div>
        <h3
        className={style.title}
        >spacecrafts</h3>
      {list.length !==0 &&
        list.map(item=>(
          <CardItem 
          key={item.id}
          text = {item.name}
          id={item.id}
          />  
        ))
      }
    </div>
  )
}

export default List
