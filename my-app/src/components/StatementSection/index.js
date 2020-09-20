import React from 'react';

export default function StatementSection(props) {
    return (
        <div className="row">
            <div className="eyebrow"></div>
            <div className="statement">{props.statement}</div>
            <div class="entries">
                {props.children}
            </div>
        </div>
    );
}