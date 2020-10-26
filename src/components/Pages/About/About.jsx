import React from 'react'
import { Spring } from 'react-spring/renderprops';
import './About.css'

const About = () => {
    return (
        <Spring
            from={{ opacity: 0, transform: `translateY(30%)` }}
            to={{ opacity: 1, transform: `translateY(0%)` }}
            config={{ duration: 500 }}>
            {props => (
                <div className="about-wrapper" style={props}>
                    <h2>Обо мне</h2>
                    <div className="card"><p>Меня зовут <span style={{ color: '#73a839' }}>Михаил Боткин</span></p>
                        <p>Я работал как <span style={{ color: '#73a839' }}>Software Developer </span>три года и теперь решил попробовать себя в Web разработке.</p>
                        <p>Это приложение - мой первый самостоятельный проект.</p>
                    </div>
                </div>
            )}
        </Spring>
    )
}

export default About;