import React from "react";
import "./Avatar.css";

const Avatar = (props) => {
    const { author } = props;
    const firstInitial = author[0];

    return (
        <div className="avatar">
            <p>{firstInitial}</p>
        </div>
    );
};

export default Avatar;