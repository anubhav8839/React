import React, { useState } from 'react'

export default function Textform(props){
    const [text,setText]=useState('Enter Text Here')
    const handleUpClick=()=>{
            let newText=text.toUpperCase()
            setText(newText)
    }
    const handleLowClick=()=>{
        let newText=text.toLowerCase()
        setText(newText)
    }
    const handleOnChange=(event)=>{
            setText(event.target.value)
    }
    return(
        <>
        <div className='container'>
            <form>
  <div className="mb-3">
    <h1>{ props.heading }</h1>
    <textarea className="form-control" id="mybox" rows="8" value={text} onChange={handleOnChange}></textarea>
  </div>
  <button type="button" className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UPPERCASE</button>
  <button type="button" className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>

</form>
</div>
<div className='container my-2'>
<h1>Your Text Summary</h1>
<p>{text.split(' ').length} Words {text.length} characters</p>
<p>{0.008*text.split(' ').length} Minutes of Read.</p>
<h3>Preview</h3>
<p>{text}</p>
</div>
</>
);
}