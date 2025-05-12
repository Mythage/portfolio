import React, {useState} from 'react';
import './Header.css';

function Header() {
    const [count, setCount] = useState(0); // State voor de teller

    const incrementCount = () => {
        setCount(count + 1); // Functie om de teller te verhogen
    };

    return (
        <div>
            <section>
                <h2>31</h2>
                <h4>Level</h4>
            </section>
            <section>
                <button onClick={incrementCount}>+</button>{/*button om de tellel te verhogen*/}
                <h2>{count}</h2> {/* De actuele waarde van de teller */}
                <h4>Coins awarded</h4>
            </section>
        </div>

    );
}

export default Header;