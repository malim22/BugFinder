import React, { useState } from "react";
import "./LanguageCard.css";

function LanguageCard({ language }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="language-card"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <h3>{language.name}</h3>
      {hover && (
        <div className="errors">
          {language.errors.map((err, idx) => (
            <p key={idx}>{err}</p>
          ))}
        </div>
      )}
    </div>
    
  );
}

export default LanguageCard;
