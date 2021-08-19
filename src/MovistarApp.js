import React from 'react';
import { ChangeNow } from './components/ChangeNow';
import { MainInfo } from './components/MainInfo';
import { NavBar } from './components/NavBar';
import { PlanInfo } from './components/PlanInfo';
import './styles/_MovistarApp.css';


export const MovistarApp = () => {
    return (
        <div id="movistarapp__container-app">
            <NavBar />
            <MainInfo />
            <PlanInfo />
            <ChangeNow />
        </div>
    )
}
