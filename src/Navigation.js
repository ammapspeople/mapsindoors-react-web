import React from 'react';

function NavButton() {
    return <button className="app-nav-button">☰</button>
}

function NavBar() {
    return <div className="app-nav">
        <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        </ul>
    </div>
}

export default function Nav(props) {
    if (props.navIsActive === false) {
        return <NavButton></NavButton>
    }

    return <NavBar></NavBar>;
}
