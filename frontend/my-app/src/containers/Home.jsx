import { Component } from "react";
import AutocompleteLocation from "../components/GoogleMap";
import { Button } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom"
import './Home.css'
import Dropdown from "../components/Dropdown";


class Home extends Component{
    constructor(props){
        super(props);
        this.state= { address : '',
                      doctype : '',
                      doctypes : ['Cardiologist', 'Therapist', 'Psychiatrist']};
    }
    
    updateSearchData = (data) =>{
        this.setState({ address : data});
    }

    updateDocType = (data) =>{
        this.setState({ doctype : data })
    }

    render(){

        return(
            <body className="bodyhome">
                <div className="searchbar">
                    <Dropdown updateDocType={this.updateDocType} doctypes={this.state.doctypes}/>
                    <AutocompleteLocation updateSearchData={this.updateSearchData}/>
                    <div className="searchbuttondiv">
                        <Link to={'/results/'} 
                        state={{ baseaddress: this.state.address,
                                doctype: this.state.doctype}}>
                            <Button className="searchbutton"></Button>
                        </Link>
                    </div>
                </div>
            </body>
        )
    }

}

export default Home