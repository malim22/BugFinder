import React, { useEffect } from "react"; // added useEffect import
import chatbots from "../data/chatbotsData.js";
import "./Chatbots.css";

function Chatbots() {
  // Intersection Observer for animations
  useEffect(() => {
    const cards = document.querySelectorAll(".chatbot-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.3 }
    );

    cards.forEach((card) => observer.observe(card));
  }, []);

  return (
    <section id="chatbots" className="chatbots-section">
      <h2 className="section-heading">AI Chatbots for Coding</h2>
      <p className="chatbots-intro">
        Click on any chatbot logo to visit their official page and solve coding errors.
      </p>
      <div className="chatbots-container">
        {chatbots.map((chatbot) => (
          <a
            key={chatbot.id}
            href={chatbot.link}
            target="_blank"
            rel="noopener noreferrer"
            className="chatbot-card"
            data-tooltip={chatbot.description} // tooltip added here
          >
            <img src={chatbot.logo} alt={chatbot.name} />
            <span>{chatbot.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Chatbots;
