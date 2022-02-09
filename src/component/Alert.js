import React from 'react'

export default function Alert(props) {
    const capatlize=(word)=>{
        const lower=word.toLowerCase()
        return lower.charAt(0).toUpperCase()+lower.slice(1)
    }
    return (
            <div style={{height:'40px'}}>
                {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capatlize(props.alert.type)}</strong>: {capatlize(props.alert.msg)} 
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>}
        </div>
    )
}
