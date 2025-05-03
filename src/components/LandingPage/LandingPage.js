import React from "react";
import './LandingPage.css'

function LandingPage() {
    return (
        <div className='container'>
            <article>
                <h1 className='item-b'>hi!</h1>
                <section className='gap'>
                    <h4 className='welcome item-c'>Welcome to my personal website.</h4>
                    <p className='text item-d'>I am creating this portfolio to feel like a game/sci-fi interface.
                        all text inside is trying to reflect on this.</p>
                    <p className='text item-d'>you will find 'achievements' or 'quests' that show the progress in
                        my professional life and are related to what i am working on</p>
                    <button type="button" className='button item-e'> Enter The System</button>
                </section>
            </article>
            <p className='text item-f'>If your not what this and you want to stay out of the system en there is the option to
                go for a plain loadout. </p>
        </div>
    )
}

export default LandingPage;