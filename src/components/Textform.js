import React , {useState} from 'react'
import { GrammarlyEditorPlugin } from '@grammarly/editor-sdk-react'



export default function Textform(props) {
const [text,setText] = useState('');
//uppercase
 const handleuptext=()=>{
   // console.log("Convert To Uppercase Was Clicked");
     let newText = text.toUpperCase();
     setText(newText);
     props.showAlert("Successfully Converted To Upper Case","success");
 }

 //speak
 const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }

  


  // remove extra spaces
  const handleExtraSpaces = ()=>{
    let words = text.split(' ');
    let joinedWords = '';
    // console.log(words);
    words.forEach((elem)=>{
        if(elem[0] !== undefined){
            joinedWords += elem + " ";
            console.log(joinedWords);
        }
    })
    setText(joinedWords);
    props.showAlert("Successfully Removed Extra Spaces","success");
}

//download text files
const downloadTxtFile = () => {
    const element = document.createElement("a");
    const file = new Blob([text], {
      type: "text/plain"
    });
    element.href = URL.createObjectURL(file);
    element.download = "myFile.txt";
    element.click();
    props.showAlert("Successfully Downloaded The Text File","success");
}

//copy to clipboard
const copyText = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Successfully copied the text","success");
}
 const handlelotext=()=>{
    // console.log("Convert To Uppercase Was Clicked");
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Successfully converted to Lower Case","success");
  }
 const handleuponchange=(event)=>{
    // console.log("Uppercase on change");
     setText(event.target.value)
 }


//clear text 
const clearttext=()=>{
  let newText="";
  setText(newText);
  props.showAlert("Text Cleared","success");
}

const countWords = (str) => {
  let words;
  if (text === "") {

    words = 0;
  } else {
    words = str.trim().split(/\s+/).length;
  }
  return words;
};


//text="New text";//wrong way to set a text
//setText("New Text");

  return (
      <>
  <div className="container my-2"  style={{color:props.mode==='dark'?'white':'#042743'}}>
  <h1>{props.heading}</h1>
<div class="mb-3">
<GrammarlyEditorPlugin clientId="client_J3yN5YxZyPjamoYchMARLo">
 <textarea className="form-control"  value={text} id="mybox"  rows="8" onChange={handleuponchange}  style={{backgroundColor:props.mode==='dark'?'grey':'white' ,
color:props.mode==='dark'?'white':'#042743'}} ></textarea>
    </GrammarlyEditorPlugin>
</div>
<div class="d-grid gap-2 d-md-block">
<button disabled={text.length===0} type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
<button disabled={text.length===0}  className="btn btn-outline-primary mx-2"  onClick={handleExtraSpaces}  >Remove Extra Spaces</button>
<button disabled={text.length===0}  className='btn btn-primary mx-2' onClick={copyText}>Copy To Clipboard</button>
<button disabled={text.length===0}  className="btn btn-outline-primary mx-2"  onClick={handleuptext}  >Convert To Upper case</button>
<button disabled={text.length===0}  className="btn btn-primary mx-2"  onClick={handlelotext}  >Convert To Lower Case</button>
<button disabled={text.length===0}  className="btn btn-outline-primary mx-2"  onClick={clearttext}  >Clear Text</button>
<button disabled={text.length===0}  className='btn btn-primary mx-2' onClick={downloadTxtFile}>Download Text file</button>

</div>

  </div>
     
  <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h2>Your Text Summary</h2>
      <p> <b>{countWords(text)}</b>  <b>Words</b> | <b>{text.length}</b>  <b>Charater</b> </p>
      <p> <b>{0.008 * countWords(text)}</b>  <b>Minutes Read</b> </p>
      <h2>Preview</h2>
      <p><b>{text.length>0?text:"Nothing To Preview !!!"}</b></p>

  </div>

      </>
   
  )
}
