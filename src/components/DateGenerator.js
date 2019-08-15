

export const randDate = () => {  
  
    let mth;
    let day;
    let yr;
    
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

    function randYear(){
      yr = (2019 - (Math.floor(Math.random() * 10) + 1)).toString();
      return yr
    }
  
    return `${randYear()}-${randMth()}-${randDay()}`
  
  }
