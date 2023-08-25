import { useEffect, useState } from "react"

const useLocalStorage = (key, fallback, device) => {
    const [value, setvalue] = useState(JSON.parse(localStorage.getItem(key)) || fallback)
    console.log(device)
    useEffect(() =>{
        localStorage.setItem(key, JSON.stringify(value))
    }, [value, key])

    const changevalue = () => {
        if(device == 'MOBILE'){
            setvalue(false)
        }
        setvalue((prev) => !prev)
    }

    return[value, changevalue]

}

export default useLocalStorage