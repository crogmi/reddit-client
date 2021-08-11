import React from "react";
import "./Avatar.css";

const Avatar = (props) => {
    const { name } = props;
    const firstInitial = name[0].toUpperCase();

    return (
        <div className="avatar">
            <p className="initial">{firstInitial}</p>
        </div>
    );
};

export default Avatar;