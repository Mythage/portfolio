import React from "react";
import './HomePage.css'

function homePage() {
    return (
        <div>
            <article>
                <section>
                    <div>
                        <h3>level en coin awarded</h3>
                    </div>
                    <div>
                        <h3>times</h3>
                    </div>
                </section>
                <section>
                    <div>
                        <h3> carscreen</h3>
                    </div>
                    <div>
                        <h3> middel text/background</h3>
                    </div>
                    <div>
                        <h3>active quests</h3>
                        <button>Exit system</button>
                    </div>
                </section>
                <section>
                    <nav>
                        <ul>
                            <li>Home</li>
                            <li>achievements</li>
                            <li>creations</li>
                            <li>about me</li>
                        </ul>
                    </nav>
                </section>
            </article>

        </div>
    )
}

export default homePage()