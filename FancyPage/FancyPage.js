import React from 'react';
import './FancyPage.css';

const FancyPage = ({ children }) => {

    return (
        <div className="layout">
            <header>Ima fancy header</header>
            <div className="content-split">
                <nav>
                    Ima fancy nav
                </nav>
                <div>{children}</div>
            </div>
        </div>
    );
};

export default FancyPage;
