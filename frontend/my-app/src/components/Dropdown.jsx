import React, { useEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import './Dropdown.css';

function Dropdown( {updateDocType, doctypes} ){
    const dropdownRef = useRef(null);
    const buttonRef = useRef(null);
    const [IsActive, setIsActive] = useState(false);
    const [doctype, setDocType] = useState('Treatment Type')

    const onClick = () => setIsActive(!IsActive);

    //use effect hook allows for change of design when button is clicked/mouse clicked/hovered
    //outside of dropdown menu

    useEffect(() => {
        const pageClickEvent = (e) =>{
            if (dropdownRef.current !== null && !dropdownRef.current.contains(e.target) && 
                !buttonRef.current.contains(e.target)){
                setIsActive(!IsActive);
            }
        }

        if (IsActive) {
            window.addEventListener('click', pageClickEvent);
            window.addEventListener('mouseover', pageClickEvent);
        }

        return () => {
            window.removeEventListener('click', pageClickEvent);
            window.removeEventListener('mouseover', pageClickEvent)
        }
    }, [IsActive]);


    return(
        <div className="menu-container">
            <Button onClick={onClick} className="menu-trigger" ref={buttonRef}>
                <span> {doctype} </span>
            </Button>
            <div ref={dropdownRef} className={`menu ${IsActive ? 'active' : 'inactive'}`}>
                <ul>
                    {doctypes.map(doctype => {
                        return (
                            <li className=""> 
                                <Button onClick={() => {
                                    updateDocType(doctype);
                                    setDocType(doctype);
                                    }}> {doctype} </Button>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    );
}

export default Dropdown;