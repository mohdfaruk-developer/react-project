import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpper = () => {
        // console.log(text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("text convert to upper case",'success')
    }
    const handleLower = () => {
        // console.log(text)
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("text convert to lower case",'success')
    }

    const Captalize=()=>{
        var myArray = text.split(" ");
        for(var i=0;i<myArray.length;i++){
            myArray[i]=myArray[i].charAt(0).toUpperCase()+ myArray[i].slice(1).toLowerCase()
        }
        setText(myArray.join(" "))
        props.showAlert("text convert to tital case",'success')
    }

    const Remove=()=>{
        let newText=document.getElementById("myBox").value;
        setText(newText.replace(/\s{2,}/g, ' ').trim());
        props.showAlert("removed extra space in the text",'success')
    }

    const handleClear = () => {
        setText("")
        props.showAlert("clear the text",'success')
    }

    const handleCopy = () =>{
        let newText=document.getElementById("myBox");
        newText.select()
        newText.setSelectionRange(0,9999)
        navigator.clipboard.writeText(newText.value)
        props.showAlert("copy the text",'success')
    }

    const handleOnChange = (event) => {
        // console.log("Upper case was click")
        setText(event.target.value)
    }

    const [text, setText] = useState("");
    return (
        <>
            <div className='container mt-4 mb-5'>
                <div className="col-9 mx-auto">
                    {/* <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div> */}
                    <h2 className='my-2' style={{color:`${props.mode==='light'?'black':'white'}`}} >Enter Text in The Textarea</h2>
                    <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="7" style={{backgroundColor: `${props.mode==='dark'?'gray':'white'}`, color:`${props.mode==='light'?'black':'white'}` }}></textarea>
                    <button className="btn btn-primary my-2" onClick={handleUpper}>Upper Case</button>
                    <button className="btn btn-primary my-2 ml-2" onClick={handleLower}>Lower Case</button>
                    <button className="btn btn-primary my-2 ml-2" onClick={Captalize}>Tital Case</button>
                    <button className="btn btn-primary my-2 ml-2" onClick={Remove}>Remove Extra Space</button>
                    <button className="btn btn-primary my-2 ml-2" onClick={handleClear}>Text Clear</button>
                    <button className="btn btn-primary my-2 ml-2" onClick={handleCopy}>Text Copy</button>
                    <button type="button" className="btn btn-primary my-2 ml-2" data-toggle="modal" data-target="#staticBackdrop"> Preview </button>
                </div>
            </div>

            <div className="modal fade " id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true" >
                <div className="modal-dialog" >
                    <div className="modal-content" style={{backgroundColor: `${props.mode==='dark'?'gray':'white'}`, color:`${props.mode==='light'?'black':'white'}`,border:`${props.mode==='light'?'none':'2px solid white'}` }}>
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Text Preview</h5>
                            <button type="button" className={`close text-${props.mode==='light'?'dark':'light'}`} data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>{text}</p>
                        </div>
                        <div className="modal-footer">
                            Text Stutes : {text===''?0:text.split(" ").length} Words {"&"} {text.length} Charater
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
