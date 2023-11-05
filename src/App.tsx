import { useRef, useState } from "react";

const UseStateDemo = () => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");


  // form validates on each TYPING
  // because each state change triggers a re-render of this block
  return (
    <form>
      <h2>Validation on TYPING</h2>
      <h3>(useState)</h3>
      <div>
        <input type="text" name="email" placeholder="Email pleeeze..." onChange={(e) => setEmail(e.target.value)} />
        {/* Email check is executed on EACH typing! (=> validation of typing)  */}
        <div className="error">{email && email.length < 5 && "Email not long enough, bro! 5 min please, ok?"}</div>
      </div>
      <div>
        <input type="password" name="password" placeholder="PW pleeeze..." onChange={(e) => setPw(e.target.value)} />
        {/* Email check is executed on EACH typing! (=> validation of typing)  */}
        <div className="error">{pw && pw.length < 7 && "Pw not long enough, bro! 7 min please, ok?"}</div>
      </div>
      {/* this empty div is just here to make the layout exactly the same as the useRef form*/}
      <div></div>
      <div>
        <button type="submit">Send</button>
      </div>
    </form>
  );
};

const UseRefDemo = () => {
  const refEmail = useRef<HTMLInputElement>(null);
  const refPw = useRef<HTMLInputElement>(null);
  const [errors, setErrors] = useState("")

  // validation is not done on each Typing, instead on SUBMIT!
  // and we use refs to lookup the form values
  // in case of an error, we display all errors at once. using a state change
  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault() // prevent reloading of page (= default behavior of a form submit)

    if (refEmail.current === null || refPw.current === null) return
    let strErrors = ""

    // advantage of REFs!
    // instead of just setting an error message, we can also change the "faulty" item visually
    // because we have the "ref" to it (=> meaning: to the whole DOM node, including its style) 
    if (refEmail.current.value.length < 5) {
      strErrors = "Email not long enough, bro! 5 min please, ok? "
      refEmail.current.style.border = "3px solid red"
    }
    // no error => clear error style
    else {
      refEmail.current.style.border = "1px solid #ccc"
    }

    // error? set error style on field to kick users as***+
    if (refPw.current.value.length < 7) {
      strErrors += "Pw not long enough, bro! 7 min please, ok? "
      refPw.current.style.border = "3px solid red"
    }
    // no error => clear error style
    else {
      refPw.current.style.border = "1px solid #ccc"
    }

    // any errors? put them in state => to trigger UI update (so user can see them)
    if (strErrors) {
      setErrors(strErrors)
    }
    // no errors detected? clear error state
    else {
      setErrors("")
    }

  }

  return (
    <form onSubmit={onSubmit}>
      <h2>Validation on SUBMIT</h2>
      <h3>(useRef)</h3>
      <div>
        <input type="text" name="email" placeholder="Email pleeeze..." ref={refEmail} />
      </div>
      <div>
        <input type="password" name="password" placeholder="PW pleeeze..." ref={refPw} />
      </div>
      <div>
        <div className="error">{errors}</div>
      </div>
      <div>
        <button type="submit">Send</button>
      </div>
    </form>
  )
};

function App() {
  return (
    <div className="demo">
      <UseStateDemo />
      <UseRefDemo />
    </div>
  );
}

export default App;
