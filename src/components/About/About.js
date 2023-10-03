import React from "react";
import './About.css';
const imageAvatar = require('../../images/avatar.png');

export default function About() {
    return (
        <div className="about">
            <img className="about__avatar" src={imageAvatar} />
            <div className="about__info">
                <h2 className="about__title">About the author</h2>
                <p className="about__paragraph">This block describes the project author. Here you should indicate your name, what you do, and which development technologies you know.

                    You can also talk about your experience with Practicum, what you learned there, and how you can help potential customers.</p>
            </div>
        </div>
    )
}
