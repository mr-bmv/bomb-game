import React, { useState, useEffect } from 'react'
import { useGameContext } from '../context/GameContext';
import transformSeconds from '../helpFunction/transformSeconds';

const Timer = () => {
    const [seconds, setSeconds] = useState(0)

    const { getTime } = useGameContext();

    const tick = () => {
        setSeconds((seconds) => seconds + 1)
    }

    useEffect(() => {
        getTime(seconds)
        // eslint-disable-next-line
    }, [seconds])

    useEffect(() => {
        const interval = setInterval(() => tick(), 1000);
        return () => clearInterval(interval);
    }, []);


    return (
        <div>{`Время ${transformSeconds(seconds)}`}</div>
    )
}

export default Timer;