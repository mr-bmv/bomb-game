import React, { useState, useEffect } from 'react'

const Timer = () => {
    const [seconds, setSeconds] = useState(0)

    const tick = () => {
        setSeconds((seconds) => seconds + 1)
    }

    useEffect(() => {
        const interval = setInterval(() => tick(), 1000);
        return () => clearInterval(interval);
    }, [])
    const min = Math.floor(seconds / 60)
    const sec = seconds % 60
    return (
        <div>{`Время ${min > 9 ? '' : 0}${min} : ${sec > 9 ? '' : 0}${sec}`}</div>
    )
}

export default Timer;