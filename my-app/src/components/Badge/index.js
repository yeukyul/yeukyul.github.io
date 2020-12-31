import React from "react";
import "./Badge.css";

export default function Badge(props) {
    const { type, content } = props;
    return (
        <div className={`badge ${type}`}>
            {content.toUpperCase()}
        </div>
    );
}