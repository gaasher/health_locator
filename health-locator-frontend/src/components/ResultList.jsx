import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useLocation, Link } from 'react-router-dom';
import './ResultList.css'



function ResultList() {

    const [resultlist, setResultList] = useState([]);
    const [loaded, setLoaded] = useState(false);

    const location = useLocation();
    const data = location.state;
    const baseaddress = data['baseaddress'];
    const doctype = data['doctype'];

    useEffect(() => {
        fetch(process.env.REACT_APP_API+"results/?addy="+baseaddress+"&doctype="+doctype)
        .then(response => response.json())
        .then(data=>{
            setResultList(data);
            setLoaded(true);
            console.log("Resultlist Created");
        });
    }, []);



    if (resultlist.length == 0 && loaded){
        return(
            <div className='display-noresults'>
                    <div className='body'>
                        <hr className='hr-div' />
                        <span className='span-noresults'>
                            <a> Sorry, no results matched your query! </a> 
                        </span>
                        <hr className='hr-div' />
                        <div className='home'>
                            <a href='/' className='buttondiv'>
                                <span className='buttontext'> Search Here </span>
                            </a>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className='cardlist'>
            {resultlist.map( res=> {
                return(
                    <Card key={res.Name} className='cardstyle'>
                        <Card.Body className='cardbody'>
                            <Card.Title className='cardtitle'>
                                {res.Name}
                            </Card.Title>
                            <Card.Text className='cardinfo'>
                                {res.Rating, res.StreetAddress}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                )}
            )}
        </div>
    )
    
}

export default ResultList;