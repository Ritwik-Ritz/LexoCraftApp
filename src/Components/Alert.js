import React from 'react'

function Alert(props) {
    return (
        //using this condition just in case alert is null
        props.alert &&
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{props.alert.type}</strong>: {props.alert.msg}
        </div>
    )
}

export default Alert
