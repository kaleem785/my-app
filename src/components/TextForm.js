import React, { useState } from 'react';

export default function TextForm(props) {
    function capitalizeName(name) {
        return name.replace(/\b(\w)/g, s => s.toUpperCase());
      }
    function extractEmails (text)
    {
        //return text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi).toString();
        
       var separateEmailsBy = ", ";
		var email = "<none>"; // if no match, use this
		var emailsArray = text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
		if (emailsArray) {
			 email = "";
			for (var i = 0; i < emailsArray.length; i++) {
				if (i !== 0) email += separateEmailsBy;
				email += emailsArray[i];
			}
		}
		return email;
        
    }
    const FetchEmail=()=>{
        let newText=extractEmails(text);
        setText(newText);
        props.showAlert("Email Eetch","success")
    }
    const handleUpClick=()=>{
        // console.log("Uppercase was clicked"+text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Convert of UpperCase","success")
    }
    const handleLowerClick=()=>{
        // console.log("Uppercase was clicked"+text);
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Convert of LowerCase","success")
    }
    const handleCapitalFirst=()=>{
        
        let newText=capitalizeName(text);
        setText(newText);
        props.showAlert("Convert of firstCapital of each","success")
    }
    const handleClear=()=>{
        // console.log("Uppercase was clicked"+text);
        let newText=('');
        setText(newText);
        props.showAlert("Clear the text","success")
    }
    
    const handleOnChange=(event)=>{
        // console.log("on change");
        setText(event.target.value)
    }
    const [text, setText] = useState("");
    return (
        <>
        <div className="container " style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="form-group">
            <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
            <button className="btn btn-primary  my-2 mx-1" onClick={handleUpClick}>Convert to uppercase</button>
            <button className="btn btn-primary  my-2 mx-1" onClick={handleLowerClick}>Convert to lowercase</button>
            <button className="btn btn-primary  my-2 mx-1" onClick={handleCapitalFirst}>CapFirst</button>
            <button className="btn btn-primary  my-2 mx-1" onClick={handleClear}>ClearText</button>
            <button className="btn btn-primary  my-2 mx-1" onClick={FetchEmail}>Fetch Email</button>
            </div>
        </div>
        <div className="container" style={{color:props.mode==='dark'?'white':'black'}} >
            <h2>Your text summery</h2>
            <p>your words are {text.split(" ").length} and letters are {text.length}</p>
            <p>{0.008*text.split(" ").length} minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter Something in the textBox above to preview here"}</p>
        </div>
        </>
    )
}
