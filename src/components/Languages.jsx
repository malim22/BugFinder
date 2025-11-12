import React from "react";
import languages from "../data/languagesData.js";
import LanguageCard from "./LanguageCard.jsx";
import "./Languages.css";

function Languages() {
  return (
    <section id="languages" className="languages-section">
      <div className="languages-intro">
        <h2>Programming Languages & Common Errors</h2>
        <p>Hover on each language to see the most common errors.</p>
      </div>
      <div className="languages-container">
        {languages.map(lang => (
          <LanguageCard key={lang.id} language={lang} />
        ))}
      </div>
    </section>
  );
}

export default Languages;
