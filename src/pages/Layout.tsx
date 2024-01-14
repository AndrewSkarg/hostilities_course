import { FC } from 'react';
import { Outlet } from 'react-router-dom'
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState } from 'react';
const Layout: FC = () => {
    const [name, setName] = useState('');
    const handleNameChange = (name:string) => {
        setName(name);
    }
    return (
        <>
            <Header onChange={handleNameChange} /> 
                <Outlet context={[name,setName]}/>
            <Footer />
        </>
    )
}

export default Layout;