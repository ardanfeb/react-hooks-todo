import React, { useState, useRef } from 'react'
import './Form.css'

function Form(props) {

    const [value, setValue] = useState('')
    const putFocus = useRef(null)
    
    const handleSubmit = val => {
        val.preventDefault()
        props.onSubmitTodos(value)
        setValue('')
        putFocus.current.focus()
    }
    
    return (
        <form className="input-group" onSubmit={handleSubmit}>
            <input 
                ref={putFocus}
                type="text" 
                className="form-control" 
                placeholder="Input aktifitas"
                value={value}
                onChange={val => setValue(val.target.value)}
            />

            <div className="input-group-append">
                <button className="btn btn-success" type="submit">Tambah</button>
            </div>
        </form>
    )
}

export default Form
