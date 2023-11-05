import { useState } from "react";

export const UseStateDemo = () => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  // form validates on each TYPING
  // because each state change triggers a re-render of this block
  return (
    <form>
      <h2>Validation on TYPING</h2>
      <h3>(useState)</h3>
      <div>
        <input
          type="text"
          name="email"
          placeholder="Email pleeeze..."
          onChange={(e) => setEmail(e.target.value)}
        />
        {/* Email check is executed on EACH typing! (=> validation of typing)  */}
        <div className="error">
          {email &&
            email.length < 5 &&
            "Email not long enough, bro! 5 min please, ok?"}
        </div>
      </div>
      <div>
        <input
          type="password"
          name="password"
          placeholder="PW pleeeze..."
          onChange={(e) => setPw(e.target.value)}
        />
        {/* Email check is executed on EACH typing! (=> validation of typing)  */}
        <div className="error">
          {pw && pw.length < 7 && "Pw not long enough, bro! 7 min please, ok?"}
        </div>
      </div>
      {/* this empty div is just here to make the layout exactly the same as the useRef form*/}
      <div></div>
      <div>
        <button type="submit">Send</button>
      </div>
      <div className="hint">
        Hint: On each key stroke =&gt; we store the input in state! State change causes:
        Re-Rendering (=&gt; update of UI)! We can make use of this to show IMMEDIATE feedback to user on typing!
      </div>
    </form>
  );
};
