import React,{useState, useEffect} from 'react';
import MainMenu from './Component/menu';

function CommonMenu(props) {
  const [data,updatedData] =useState({})
  const  configureData =(value)=>{
    return value.reduce(function(acc,key,i){
      acc[key]=key; 
      return acc;
    })
  }
  useEffect(()=>{
  updatedData(configureData(props))
  },[props]);

  return (
    <React.Fragment>
      <MainMenu dataParsed={data}/>
    </React.Fragment>
  );
}

export default CommonMenu;
