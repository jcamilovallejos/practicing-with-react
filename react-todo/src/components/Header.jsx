import MoonIcon from './icons/MoonIcon'
import SunIcon from './icons/IconSun'
import { useEffect, useState } from 'react'

const initialStateDarkMode = localStorage.getItem('theme') === 'dark';

const Header = () => {

    const [darkMode, setDarkMode] = useState(initialStateDarkMode)

    const handleClickToggleTheme = () => {
        setDarkMode(!darkMode)
    }

    useEffect(() => {
        if(darkMode) {
            document.documentElement.classList.add('dark')
        }else{
            document.documentElement.classList.remove('dark')
        }
    }, [darkMode])

    return (
        <header className="container mx-auto px-4 pt-8">
            <div className='flex justify-between'>
                <h1 className="uppercase text-white text-3xl font-semibold tracking-[0.5em]">
                    TODO
                </h1>
                <button onClick={() => handleClickToggleTheme()}>
                    {
                        darkMode ? <SunIcon /> : <MoonIcon />
                    }
                </button>
            </div>
        </header>
    );
};

export default Header;