import { Component } from "react";
import AutocompleteLocation from "../components/GoogleMap";
import './Home.css'
import Dropdown from "../components/Dropdown";
import SearchButton from '../components/SearchButton';


class Home extends Component{
    constructor(props){
        super(props);
        this.state= { address : '',
                      doctype : '',
                      doctypes : ['Cardiologist', 'Therapist', 'Psychiatrist', 'Ophthalmologist',
                                  'Neurologist', 'OBGYN']};
    }
    
    updateSearchData = (data) =>{
        this.setState({ address : data});
    }

    updateDocType = (data) =>{
        this.setState({ doctype : data })
    }

    render(){

        return(
            <div className="background-container">
                <body className="bodyhome">
                    <div className="title"> 
                        <span> Find your Doc </span>
                    </div>
                    <div className="searchbar">
                        <Dropdown updateDocType={this.updateDocType} doctypes={this.state.doctypes}/>
                        <AutocompleteLocation updateSearchData={this.updateSearchData}/>
                        <div className="searchbuttondiv">
                            <SearchButton baseaddress={this.state.address} doctype={this.state.doctype} 
                                condition={this.state.address !== '' && this.state.doctype !== ''}/>
                        </div>
                    </div>
                    <div className="githublogo">
                        <a className='githublink' href='https://github.com/gaasher/health_locator' aria-label="github"/>
                    </div>
                </body>
            </div>
        )
    }

}

export default Home