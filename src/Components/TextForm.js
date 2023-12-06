import React,{useState} from 'react'



export default function TextForm(props) {
    const [text, setText] = useState('')
    const HandleUpClick = (event) =>{
        let newtext = text.toUpperCase();
        setText(newtext);
        event.preventDefault();
    }

    const HandleLoClick = (event) =>{
        setText(text.toLowerCase());
        event.preventDefault();
    }

    const HandleClearClick = (event) =>{
        setText("");
        event.preventDefault();
    }

    const HandleCopyClick = (event) =>
    {
        var text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
        //preventDefault allows user to avoid reloading of page 
        event.preventDefault();
    }

    const HandleOnChange = (event) =>{
        setText(event.target.value);
    }

    return (
        <>
            <div>
                <form>
                    <h1 className={`my-2 text-${props.mode==='light'?'dark':'light'}`}>{props.heading}</h1>
                    <div className="mb-3 my-2">
                        <textarea className="form-control" placeholder="Enter text here" style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='light'?'black':'white'}} value = {text} onChange = {HandleOnChange} id="myBox" rows="3"/>
                    </div>
                    <button className="btn btn-primary mx-2" onClick={HandleUpClick}>Convert To Uppercase</button>
                    <button className="btn btn-primary mx-2" onClick={HandleLoClick}>Convert To Lowercase</button>
                    <button className="btn btn-danger mx-2" onClick={HandleClearClick}>Clear Text</button>
                    <button className="btn btn-primary mx-2" onClick={HandleCopyClick}>Copy Text</button>
                </form>
            </div>
            <div className="container my-3">
                <h1 className={`text-${props.mode==='light'?'dark':'light'}`}>Text Summary</h1>
                <p className={`text-${props.mode==='light'?'dark':'light'}`}>{text.split(" ").length} words, {text.length} characters</p>
                <p className={`text-${props.mode==='light'?'dark':'light'}`} style={{fontStyle:"italic"}}>{0.008 * text.split(" ").length} minutes read</p>
            </div>
        </>
    )
}
