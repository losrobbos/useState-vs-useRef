import { useRef, useState } from "react";

export const UseRefDemo = () => {
  const refEmail = useRef(null);
  const refPw = useRef(null);
  const [errors, setErrors] = useState("");

  // validation is not done on each Typing, instead on SUBMIT!
  // and we use refs to lookup the form values
  // in case of an error, we display all errors at once. using a state change
  const onSubmit = (e) => {
    e.preventDefault(); // prevent reloading of page (= default behavior of a form submit)

    if (refEmail.current === null || refPw.current === null) return;
    let strErrors = "";

    // advantage of REFs!
    // instead of just setting an error message, we can also change the "faulty" item visually
    // because we have the "ref" to it (=> meaning: to the whole DOM node, including its style)
    if (refEmail.current.value.length < 5) {
      strErrors = "Email not long enough, bro! 5 min please, ok? ";
      refEmail.current.style.border = "3px solid red";
    }
    // no error => clear error style
    else {
      refEmail.current.style.border = "1px solid #ccc";
    }

    // error? set error style on field to kick users as***+
    if (refPw.current.value.length < 7) {
      strErrors += "Pw not long enough, bro! 7 min please, ok? ";
      refPw.current.style.border = "3px solid red";
    }
    // no error => clear error style
    else {
      refPw.current.style.border = "1px solid #ccc";
    }

    // any errors? put them in state => to trigger UI update (so user can see them)
    if (strErrors) {
      setErrors(strErrors);
    }
    // no errors detected? clear error state
    else {
      setErrors("");
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <h2>Validation on SUBMIT</h2>
      <h3>(useRef)</h3>
      <div>
        <input
          type="text"
          name="email"
          placeholder="Email pleeeze..."
          ref={refEmail}
        />
      </div>
      <div>
        <input
          type="password"
          name="password"
          placeholder="PW pleeeze..."
          ref={refPw}
        />
      </div>
      <div>
        <div className="error">{errors}</div>
      </div>
      <div>
        <button type="submit">Send</button>
      </div>
      <div className="hint">
        Hint: Here we instead validate the inputs on SUBMIT, instead of each keystroke. 
        We can use Refs to gain access to the input fields anytime (e.g. when we submit).
        Another advantage: With a ref we get access to the full input DOM node, so we can access and change it's style on validation too!
      </div>
    </form>
  );
};
