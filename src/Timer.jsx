import React, { useState, useEffect } from 'react'

const Timer = () => {
    console.log('From Timer')
    const [seconds, setSeconds] = useState(0)

    const tick = () => {
        setSeconds((seconds) => seconds + 1)
    }

    useEffect(() => {
        const interval = setInterval(() => tick(), 1000);
        return () => clearInterval(interval);
    }, [])

    return (
        <div>{`Время: ${seconds}`}</div>
    )
}

export default Timer;