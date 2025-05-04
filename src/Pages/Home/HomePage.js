import React from "react";
import './HomePage.css';
import NavigationBar from "../../Componentes/Navigation/NavigaionBar";
import Character from "../../Componentes/Character/Character";
import Header from "../../Componentes/Header/Header";
import ActiveQuest from "../../Componentes/Utility/ActiveQuest";
import Settings from "../../Componentes/Utility/Settings";

function HomePage() {
    return (
        <div>
            <article className='homepage-container'>
                <section className='homepage-header'>
                    <Header/>
                </section>
                <section className='homepage-left'>
                    <Character/>
                </section>
                <section className='homepage-middle'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, optio.</p>
                </section>
                <section className='homepage-right'>
                    <ActiveQuest/>
                    <Settings/>
                </section>
                <section className='homepage-bottom'>
                    <NavigationBar/>
                </section>
            </article>

        </div>
    )
}

export default HomePage;