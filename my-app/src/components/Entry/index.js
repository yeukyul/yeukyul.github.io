import React from 'react';

export default function Entry(props) {
    return (
        <div className="entry">
            <div 
                className="entry-header"
                dangerouslySetInnerHTML={{__html:props.header + ':'}}
            >
            </div>
            <div className="entry-content">
                {props.children}
            </div>
        </div>
    );
}