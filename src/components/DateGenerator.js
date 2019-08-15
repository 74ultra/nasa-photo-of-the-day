import React from 'react';

export const randDate = () => {  
  
    let mth;
    let day;
    
    function randMth(){
      mth = (Math.floor((Math.random() * 12) + 1)).toString();
      if (mth.length === 1){
        mth = '0' + mth;
      }
      return mth
    }
  
    function randDay(){
      day = (Math.floor((Math.random() * 31) + 1)).toString();
      if (day.length === 1){
        day = '0' + day;
      }
      return day
    }
  
    return `2018-${randMth()}-${randDay()}`
  
  }
