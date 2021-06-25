import React, { useEffect } from 'react'

function LifecyclesMsgHook(props) {
    useEffect(() => {
        console.log('Hook Mounted');
        return () => {
            console.log('Hook Unmounted');
        }
    })
    return (
        <div>
            {props.msg}
        </div>
    )
}

export default LifecyclesMsgHook
