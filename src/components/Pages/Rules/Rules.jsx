import React from 'react'
import { Spring } from 'react-spring/renderprops';
import './Rules.css'

const Rules = () => {
    return (
        <Spring
            from={{ opacity: 0, transform: `translateY(30%)` }}
            to={{ opacity: 1, transform: `translateY(0%)` }}
            config={{ duration: 500 }}>
            {props => (
                <div className="rules-wrapper" style={props}>
                    <h2>Правила игры</h2>
                    <div className="card">
                        <p>Для начала игры необходимо выбрать уровень сложности:</p>
                        <ul>
                            <li>Новичок </li>
                            <li>Профессионал </li>
                            <li>Эксперт  </li>
                            <li>Мегамозг </li>
                        </ul>
                        <p>Каждый уровень представляет из себя поле определенного размера со спрятанными бомбами <span role="img" aria-label="bomb">💣</span> .</p>
                        <p>Цифра в каждой ячейке указывает на количество пустых (без бомб) ячеек, которые с ней соприкасаются.</p>
                        <p>Если Вы считаете, что в ячейке бомба, то отметьте её <span className="red">красным цветом</span> , дважды кликнув по ней.</p>
                        <p>Если Вы считаете, что в ячейка пустая, то отметьте её <span className="green">зеленым цветом</span>, кликнув по ней один раз.</p>
                        <p>Игра заканчивается, когда все бомбы будут найдены, т.е. все ячейки с бомбами помечены красным цветом.</p>
                    </div>
                </div>
            )}
        </Spring>
    )
}

export default Rules;