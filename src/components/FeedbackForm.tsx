import { useState } from "react";
import { MAX_CHARACTERS } from "../lib/constants";

const FeedbackForm = () => {
  const [text, setText] = useState("");

  const characterCount = MAX_CHARACTERS - text.length;

  return (
    <form className="form">
      <textarea
        value={text}
        onChange={(event) => setText(event.target.value)}
        id="feedback-textarea"
        placeholder="test"
        spellCheck={false}
      />
      <label htmlFor="feedback-textarea">
        Enter your feedback here, remember to #hashtag the company
      </label>
      <div>
        <p className="u-italic">{characterCount}</p>
        <button>
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
};

export default FeedbackForm;
