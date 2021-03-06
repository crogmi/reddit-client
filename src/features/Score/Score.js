import React, { useState } from "react";
import "./Score.css";
import { simplifyNum } from "../../util/SimplifyNumber/SimplifyNumber";

const Score = (props) => {
    let score = props.score;
    const [upColor, setUpColor] = useState("var(--white)");
    const [downColor, setDownColor] = useState("var(--white)");

    const upClick = (e) => {
        e.preventDefault();
        if (upColor === "var(--white)") {
            setUpColor("var(--purple)");
            setDownColor("var(--white)");
        } else {
            setUpColor("var(--white)");
        }
    }

    const downClick = (e) => {
        e.preventDefault();
        if (downColor === "var(--white)") {
            setDownColor("var(--purple)");
            setUpColor("var(--white)");
        } else {
            setDownColor("var(--white)");
        }
    }

    const upStyle = {color: upColor};
    const downStyle = {color: downColor};

    return (
        <div className="score">
            <button onClick={upClick} 
                    style={upStyle}
                    data-testid="up_vote" >
                <i class="fas fa-arrow-circle-up score-up"></i>
            </button>
            <p className="score-text">{simplifyNum(score)}</p>
            <button onClick={downClick}
                    style={downStyle}
                    data-testid="down_vote" >
                <i class="fas fa-arrow-circle-down score-down"></i>
            </button>
        </div>
    )
}

export default Score;