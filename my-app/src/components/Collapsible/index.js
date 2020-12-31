import React, { useState } from "react";

export default function Collapsible(props) {
    const { children, heading } = props;
    const [open, setOpen] = useState(false);
    const onClickHandler = (e) => {
        e.preventDefault();
        setOpen(!open);
    }
    return (
        <div className="md-margin">
            <a href="#" onClick={onClickHandler}>
                {open ? 
                    (<i className="profile-icon fas fa-chevron-down fa-sm" aria-hidden="true"></i>) : 
                    (<i className="profile-icon fas fa-chevron-right fa-sm" aria-hidden="true"></i>) }
                &nbsp;
                {heading}
            </a>
            {open && children}
        </div>
    );
}