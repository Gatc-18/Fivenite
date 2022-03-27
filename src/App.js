import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/navbar';
import MainBlock from './components/mainBlock';
import MoreInformation from './components/moreInformation';


const App = () => {


    return (
        <>
            <NavbarComponent />
            <MainBlock/>
            <MoreInformation/>
        </>
    )
}


export default App;