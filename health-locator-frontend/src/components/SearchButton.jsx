import { Link } from "react-router-dom";
import React from "react";
import { Button } from "react-bootstrap";
import './SearchButton.css';

//use inline conditional rendering to either render a link w button or dummy button depending on state
//of condition
const SearchButton = ( {baseaddress, doctype, condition} ) => (condition) ?
    <div>
        <Link to={'/results/'} state={{ baseaddress: baseaddress,
                                        doctype: doctype}}>
            <Button className="searchbutton"></Button>
        </Link>
    </div>
    :
    <div>
        <Button className="searchbutton"></Button>
    </div>

export default SearchButton;