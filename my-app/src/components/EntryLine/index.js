import React from 'react';

export default function EntryLine(props) {
    return (
        <div className="entry-line v-center">
            <div className="line-logo">
                <i className={`${props.iconClass}`}></i>
            </div>
            <div>
                <div className="line-title">{props.title}</div>
                <div className="line-content">{props.children}</div>
            </div>
        </div>
    );
}