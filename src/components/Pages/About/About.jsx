import React from 'react'
import './About.css'

const About = () => {
    return (
        <div className="about-wrapper">
            <h2>Обо мне</h2>
            <div className="card"><p>Меня зовут <span style={{ color: '#73a839' }}>Михаил Боткин</span></p>
                <p>Я работал как <span style={{ color: '#73a839' }}>Software Developer </span>три года и теперь решил попробовать себя в Web разработке.</p>
                <p>Это приложение - мой первый самостоятельный проект.</p>
            </div>
        </div>
    )
}

export default About;