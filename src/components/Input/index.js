import React from 'react'

export default function Input(props) {
    function handleChange(e) {
        if (props.onChange) props.onChange(e)
    }
    return (
        <input type='email' name={props.name} value={props.value} onChange={handleChange} ref={props.ref} />
    )
}