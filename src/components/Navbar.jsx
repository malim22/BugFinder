import React, { useState } from "react";
import "./Navbar.css"; // Make sure to import CSS

function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const chatbots = [
    { name: "ChatGPT", link: "https://chat.openai.com/" },
    { name: "Bard", link: "https://bard.google.com/" },
    { name: "Perplexity", link: "https://www.perplexity.ai/" },
    { name: "Bing Chat", link: "https://www.bing.com/chat" },
    { name: "Claude", link: "https://www.anthropic.com/claude" },
    { name: "YouChat", link: "https://you.com/chat" },
    { name: "Ernie AI", link: "https://www.ernie.ai/" },
    { name: "Open Assistant", link: "https://open-assistant.io/" },
    { name: "HuggingChat", link: "https://huggingface.co/chat/" },
    { name: "ChatSonic", link: "https://writesonic.com/chat" },
    { name: "Mistral", link: "https://mistral.ai/" },
    { name: "ZZZCode", link: "https://zzzcode.ai/code-debug" },
    { name: "Workik AI", link: "https://workik.com/ai-code-debugger" },
    { name: "Copilot", link: "https://copilot.microsoft.com/chats/iLRNXijDMuba22ZKfyyoN" },
    { name: "YesChat", link: "https://www.yeschat.ai/gpts-9t557I9i3b2-Code-Debugger" },
    { name: "DeepSeek", link: "https://deepseek.ai" },
    { name: "Claude AI", link: "https://claude.ai" },
    { name: "Google Gemini", link: "https://gemini.google.com" },
    { name: "Grok AI", link: "https://grok.ai" },
    { name: "Cursor AI", link: "https://cursor.so" }
  ];

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      const found = chatbots.find(
        (bot) => bot.name.toLowerCase() === searchTerm.trim().toLowerCase()
      );
      if (found) {
        window.open(found.link, "_blank");
        setSearchTerm("");
      } else {
        alert("Chatbot not found!");
      }
    }
  };

  return (
    <>
      <nav className="navbar">
        {/* Left Logo */}
        <div className="navbar-logo">BugFinder</div>

        {/* Center Search */}
        <div className="navbar-search-wrapper">
          <input
            type="text"
            placeholder="Search any chatbot..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleSearch}
            className="navbar-search"
          />
        </div>

        {/* Right Links & Theme */}
        <div className="navbar-right">
          <ul className="navbar-links">
            <li><a href="#languages">Languages</a></li>
            <li><a href="#chatbots">Chatbots</a></li>
            <li><a href="#footer">Footer</a></li>
          </ul>
          <button
            className="theme-toggle"
            onClick={() => document.body.classList.toggle("dark-mode")}
          >
            🌙
          </button>
        </div>

        {/* Hamburger */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>

      {/* Sidebar */}
      <div className={`sidebar ${menuOpen ? "open" : ""}`}>
        <ul>
          <li><a href="#languages" onClick={() => setMenuOpen(false)}>Languages</a></li>
          <li><a href="#chatbots" onClick={() => setMenuOpen(false)}>Chatbots</a></li>
          <li><a href="#footer" onClick={() => setMenuOpen(false)}>Footer</a></li>
          <li>
            <button
              className="theme-toggle-sidebar"
              onClick={() => document.body.classList.toggle("dark-mode")}
            >
              🌙
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
