import {createContext, useState} from "react";
import { useEffect } from "react";
import axios from "axios";
const PrayerContext = createContext();
export function PrayerProvider({children}){
  const [prayer,setPrayers] = useState();
  const [count, setCount] = useState(0);
  const [currentPrayers,setCurrentPrayers] = useState('');

  useEffect(() => {
    const grabPrayer = async () =>{
        try {
            const request = await axios.get('https://doeclient-production.up.railway.app/api/prayer');
            if(request.status === 200){
              setCurrentPrayers(request.data);
            }
        } catch (error) {
            console.log(error);
        }
    }
    grabPrayer();   
  }, []);

  const increase = (id, item) => {
    // check if the prayer already exists in local storage
    let existingPrayer = currentPrayers.find((prayer) => prayer.id === id);

    if (existingPrayer) {
      // if the prayer already exists, update its count
      existingPrayer.count += 1;
      setPrayers(currentPrayers);
      setCount(existingPrayer.count);
      localStorage.setItem("prayers", JSON.stringify(currentPrayers));
      } else {
      // if the prayer does not exist, add it to local storage with a count of 1
      item.count = 1;
      currentPrayers.push(item);
      setPrayers(currentPrayers);
      setCount(item.count);
      localStorage.setItem("prayers", JSON.stringify(currentPrayers));
    }
  };

  return(
    <PrayerContext.Provider value={{prayer,increase,setCount,count}}>{children}</PrayerContext.Provider>
  )
}

export default PrayerContext;