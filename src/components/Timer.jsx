import React, { useState, useEffect } from 'react'
import { useGameContext } from '../context/GameContext';
import transformSeconds from '../helpFunction/transformSeconds';

const Timer = () => {
    const [seconds, setSeconds] = useState(0)

    const { field, getTime } = useGameContext();

    const tick = () => {
        setSeconds((seconds) => seconds + 1)
    }

    useEffect(() => {
        getTime(seconds)
        setSeconds(0)
        // eslint-disable-next-line
    }, [field.cleanCanvas])

    useEffect(() => {
        getTime(seconds)
        // eslint-disable-next-line
    }, [seconds])

    useEffect(() => {
        const interval = setInterval(() => tick(), 1000);
        return () => clearInterval(interval);
        // eslint-disable-next-line
    }, []);


    return (
        <>{`Время ${transformSeconds(seconds)}`}</>
    )
}

export default Timer;