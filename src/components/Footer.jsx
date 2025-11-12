import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <footer id="footer" className="footer">
            <div className="footer-columns">
                <div className="footer-resources">
                    <h3>Programming Language Tutorials</h3>
                    <ul>
                        <li><a href="https://www.w3schools.com/python/" target="_blank" rel="noopener noreferrer">Python</a></li>
                        <li><a href="https://www.w3schools.com/js/" target="_blank" rel="noopener noreferrer">JavaScript</a></li>
                        <li><a href="https://www.w3schools.com/java/" target="_blank" rel="noopener noreferrer">Java</a></li>
                        <li><a href="https://www.w3schools.com/cpp/" target="_blank" rel="noopener noreferrer">C++</a></li>
                    </ul>
                    <h3>Artificial Intelligence Resources</h3>
                    <ul>
                        <li><a href="https://www.datacamp.com/blog/how-to-learn-ai" target="_blank" rel="noopener noreferrer">DataCamp AI Guide</a></li>
                        <li><a href="https://www.coursera.org/courses?query=artificial+intelligence" target="_blank" rel="noopener noreferrer">Coursera AI Courses</a></li>
                        <li><a href="https://www.elementsofai.com/" target="_blank" rel="noopener noreferrer">Elements of AI</a></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>AI Chatbots</h4>
                    <ul className="chatbot-list">
                        <li><a href="https://zzzcode.ai/code-debug" target="_blank" rel="noopener noreferrer">ZZZCode</a></li>
                        <li><a href="https://workik.com/ai-code-debugger" target="_blank" rel="noopener noreferrer">Workik AI</a></li>
                        <li><a href="https://copilot.microsoft.com/chats/iLRNXijDMuba22ZKfyyoN" target="_blank" rel="noopener noreferrer">Copilot</a></li>
                        <li><a href="https://www.yeschat.ai/gpts-9t557I9i3b2-Code-Debugger" target="_blank" rel="noopener noreferrer">YesChat</a></li>
                        <li><a href="https://chat.openai.com" target="_blank" rel="noopener noreferrer">ChatGPT</a></li>
                        <li><a href="https://deepseek.ai" target="_blank" rel="noopener noreferrer">DeepSeek</a></li>
                        <li><a href="https://claude.ai" target="_blank" rel="noopener noreferrer">Claude AI</a></li>
                        <li><a href="https://gemini.google.com" target="_blank" rel="noopener noreferrer">Google Gemini</a></li>
                        <li><a href="https://grok.ai" target="_blank" rel="noopener noreferrer">Grok AI</a></li>
                        <li><a href="https://cursor.so" target="_blank" rel="noopener noreferrer">Cursor AI</a></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Contact</h4>
                    <ul>
                        <li>
                            Email: <a href="mailto:madhurimali2004@gmail.com" className="footer-email">
                                madhurimali2004@gmail.com
                            </a>
                        </li>
                        <li>Phone: +91 1234567890</li>
                        <li>Website: bugfinder.com</li>
                    </ul>
                </div>
            </div>
            <div className="footer-social">
                <a href="https://github.com/madhurimali" target="_blank" rel="noopener noreferrer">
                    <img src="/assets/social/github.png" alt="GitHub" />
                </a>
                <a href="https://linkedin.com/in/madhurimali" target="_blank" rel="noopener noreferrer">
                    <img src="/assets/social/linkedin.png" alt="LinkedIn" />
                </a>
                <a href="https://twitter.com/madhurimali" target="_blank" rel="noopener noreferrer">
                    <img src="/assets/social/twitter.png" alt="Twitter" />
                </a>
            </div>

            <div className="footer-bottom">
                &copy; {new Date().getFullYear()} BugFinder. All rights reserved.
            </div>

        </footer>
    );
}

export default Footer;
