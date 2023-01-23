import { Switch } from '@chakra-ui/react'
import { useState } from 'react';
import AvatarImage from '/avatar.png'

import LightMode from '/light-mode.png'
import DarkMode from '/dark-mode.png'


export function Avatar() {

    const [isOn, setIsOn] = useState(false)

    return (
        <>
            <img className='w-44' src={AvatarImage} />
            <p className='mb-5 mt-3 text-white text-xl'>@Leuzindev</p>
            <div>
                {/* <Switch 
                    size='lg'
                    colorScheme='red'
                    className='m-4'
                /> */}
                <div className={`switch ${isOn ? 'bg-green-500' : 'bg-gray-300'} relative`} onClick={() => setIsOn(!isOn)}>
                    <img src={isOn ? LightMode : DarkMode} alt="switch" />
                    <div className={`absolute bottom-0 w-3 h-6 bg-white transition-transform duration-300 ${isOn ? 'transform translate-x-full' : 'transform -translate-x-full'}`} />
                </div>
                );
            </div>
        </>
    )
}