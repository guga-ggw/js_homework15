import React, { useEffect, useState } from 'react'

const  useWindowsResize = () => {
    const [device, setdevice] = useState('')
    const [width, setwidth] = useState(window.innerWidth)
   

    useEffect(() =>{
        const changewidth = () => {
            setwidth(window.innerWidth)
            
            if(width < 600){
                
                setdevice('MOBILE')
                
            }
            else{
                setdevice('DESKTOP')
                
            }
        }

        window.addEventListener('resize', changewidth)
    }, [width])

  return device
}

export default  useWindowsResize 