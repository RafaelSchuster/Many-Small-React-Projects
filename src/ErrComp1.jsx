import React, { useState } from 'react'

function ErrComp1(props) {
    const [show, setshow] = useState(false)
    const handleClick = () => {
        setshow(true)
    }
    return (
        <div>
            {show && props.map(el => <h1>el</h1>)}
            <button onClick={handleClick}>Error Creator 1</button>
        </div>
    )
}

export default ErrComp1
