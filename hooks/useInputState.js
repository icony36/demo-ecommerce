import { useState } from "react";

export default initVal => {
    const [val, setVal] = useState(initVal);
    const handleChange = evt => {
        setVal({ ...val, [evt.target.name]: evt.target.value });
    };
    const reset = () => {
        setVal("");
    };
    return [val, handleChange, reset];
};
