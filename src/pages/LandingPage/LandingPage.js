import React from "react";
import './LandingPage.css'

function LandingPage() {
    return (
            <div className='container'>
                <article >
                    <section>
                        <h1 className='hi'>hi!</h1>
                    </section>
                    <section className='gap'>
                        <h4 className='welcome'>Welcome to my personal website.</h4>
                        <p className='text'>I am creating this portfolio to feel like a game/sci-fi interface.
                            all text inside is trying to reflect on this.</p>
                        <p className='text'>you will find 'achievements' or 'quests' that show the progress in
                            my professional life and are related to what i am working on</p>
                        <button type="button" className='button'> Enter The System</button>
                    </section>
                </article>
            </div>
    )

}



export default LandingPage;