import {useState} from 'react'

const useToggle = (initVal = false) => {
    const [val, setVal] = useState(initVal);
    const toggle = ()=>{
        setVal(!val);
    };
    return [val, toggle];
}
  

export default useToggle;
