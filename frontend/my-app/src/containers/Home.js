import { Component } from "react";
import AutocompleteLocation from "../components/GoogleMap";
import { Button } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom"
import './Home.css'

class Home extends Component{
    constructor(props){
        super(props);
        this.state= { address : ''};
    }
    
    updateSearchData = (data) =>{
        this.setState({ address : data});
    }

    render(){
        return(
            <body>
                <div className="searchbar">
                    <AutocompleteLocation updateSearchData={this.updateSearchData}/>
                </div>
                <div className="searchbuttondiv">
                    <Link to={'/results/'} 
                    state={{ baseaddress: this.state.address }}>
                        <Button className="searchbutton">
                            Search
                        </Button>
                    </Link>
                </div>
            </body>
        )
    }

}

export default Home