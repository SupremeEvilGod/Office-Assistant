// Import React and any additional dependencies
import React from "react";
import './1.css'; // Import your CSS file
import { Link } from "react-router-dom";
import { useSocket } from "../context/SocketProvider";

// Create a functional component for your HTML
const GameMenu = () => {
  return (
    <body>
      <section>
        <div className="circle"></div>
        <header>
          <a href="/">
            <img src="logo.png" className="logo" alt="" />
            Chatty Coffee
          </a>
          <ul className="navigation">
            <li><a href="/">Home</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">What's New</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </header>
        <div className="buttons">
          <div className="textBox">
            <h2>Chat Your Minds OFF</h2>
            <p>
              Chatty Coffee fosters virtual connections and enhances remote
              work experiences. Chat & Video Chat for secure and seamless
              communication. GPT integration for intelligent interactions.
              Brain-boosting games: Crossword, Sudoku, Tic Tac Toe.
            </p>
            <div>
              <a href="https://sudoku.com/" className="button">
                <span className="front">
                <i class="fa fa-table" aria-hidden="true"></i> Sudoko
                </span>
                <span className="center"></span>
                <span className="back">
                <i class="fa fa-table" aria-hidden="true"></i> Sudoko
                </span>
              </a>
              <a href="/tic tac to/index.html" className="button">
                <span className="front">
                  <i class="fa fa-window-close" aria-hidden="true"></i>{" "}
                  Tic Tac Toe
                </span>
                <span className="center"></span>
                <span className="back">
                <i class="fa fa-window-close" aria-hidden="true"></i>{" "}
                  Tic Tac Toe
                </span>
              </a>
              <a href="https://playscrabble.com/" className="button">
                <span className="front">
                <i class="fa fa-table" aria-hidden="true"></i>Playscrable
                </span>
                <span className="center"></span>
                <span className="back">
                <i class="fa fa-table" aria-hidden="true"></i> Playscrable
                </span>
              </a>
              <a href="https://www.boatloadpuzzles.com/playcrossword" className="button">
                <span className="front">
                <i class="fa fa-table" aria-hidden="true"></i> Crossword
                </span>
                <span className="center"></span>
                <span className="back">
                <i class="fa fa-table" aria-hidden="true"></i> Crossword
                </span>
              </a>
            </div>
          </div>
          <div>
            <img src="logo.png" alt="logo" />
          </div>
        </div>
      </section>
      <footer>
        <div className="sci">
          <li>
            <a href="" className="social facebook">
              <svg viewBox="0 0 126.22 246">
                <path d="M173.6,27h35.92V70.19h-29.7c-15,2.39-14,19.79-14,19.79v29.33h47.27l-7.05,47.52H166.33V273H119.19V166.09H86.89V119.31h32.3V87.74A68.5,68.5,0,0,1,127,55.49c5.27-9.87,14-20.18,28.41-25.47A53,53,0,0,1,173.6,27Z" transform="translate(-86.89 -27)"/>
              </svg>
            </a>
          </li>
          <li>
            <a href="" className="social twitter">
              <svg viewBox="0 0 245.97 198.8">
                <path d="M44.28,59.23S89.07,113,147.62,111C140.12,86,172.14,21.7,234,65.49c0,0,24.77-5.26,32.28-12.51,0,0-3.5,14.76-20.77,27.52,0,0-1.25,2.5,27.53-6.76,0,0-12.27,16.77-25.28,26,0,0,7.18,101-91.91,141,0,0-60.72,26.69-128.79-14,0,0,40.71,6.67,74.4-20.69,0,0-38.36-3.67-46.37-35.36,0,0,13.35,3.67,22-1,0,0-36-4-39.7-49.71,0,0,17,7.33,22.35,6.33C59.71,126.37,23.85,104.52,44.28,59.23Z" transform="translate(-27.01 -50.6)"/>
              </svg>
            </a>
          </li>
          <li>
            <a href="" className="social instagram">
              <svg viewBox="0 0 246.15 246.15">
                <path d="M201,51.5A47.49,47.49,0,0,1,248.41,99V200.88A47.49,47.49,0,0,1,201,248.32H99a47.49,47.49,0,0,1-47.44-47.44V99A47.49,47.49,0,0,1,99,51.5H201m0-24.66H99A72.11,72.11,0,0,0,26.92,99V200.88A72.12,72.12,0,0,0,99,273H201a72.12,72.12,0,0,0,72.11-72.11V99A72.11,72.11,0,0,0,201,26.84Z" transform="translate(-26.92 -26.84)"/>
                <path class="cls-1" d="M150,124.34a25.57,25.57,0,1,1-25.57,25.57A25.6,25.6,0,0,1,150,124.34m0-24.66a50.24,50.24,0,1,0,50.23,50.23A50.23,50.23,0,0,0,150,99.68Z" transform="translate(-26.92 -26.84)"/>
                <circle class="cls-1" cx="189.98" cy="55.33" r="13.81"/>
              </svg>
            </a>
          </li>
          <li>
            <a href="" className="social linkedin">
              <svg viewBox="0 0 244.65 226.28">
                <path d="M35.73,81.63a24.22,24.22,0,0,1-8-18.5,24.59,24.59,0,0,1,8-18.79q8.06-7.47,20.76-7.48,12.43,0,20.48,7.48a24.59,24.59,0,0,1,8,18.79,24.22,24.22,0,0,1-8,18.5q-8,7.5-20.48,7.49Q43.79,89.12,35.73,81.63ZM80.5,105.51V263.14H32.2V105.51Z" transform="translate(-27.68 -36.86)"/>
                <path class="cls-1" d="M255.8,121.75q16.51,17.94,16.52,49.3v92.09h-48v-85.6q0-15.81-8.19-24.57t-22-8.76q-13.84,0-22,8.76t-8.2,24.57v85.6H115.53V105.51h48.31v20.9a51.15,51.15,0,0,1,19.78-16.53,63,63,0,0,1,28-6.07Q239.27,103.81,255.8,121.75Z" transform="translate(-27.68 -36.86)"/>
              </svg>
            </a>
          </li>
        </div>
      </footer>
    </body>
  );
}

// Export the component
export default GameMenu;
