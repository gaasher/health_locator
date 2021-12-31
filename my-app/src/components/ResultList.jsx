import React, { Component, propTypes, useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import './ResultList.css'



function ResultList(props) {

    const [resultlist, setResultList] = useState([]);

    const location = useLocation();
    const data = location.state;
    const baseaddress = data['baseaddress'];
    const doctype = data['doctype'];

    useEffect(() => {
        fetch(process.env.REACT_APP_API+"results/?addy="+baseaddress+"&doctype="+doctype)
        .then(response => response.json())
        .then(data=>{
            setResultList(data);
            console.log("Resultlist Created");
        });
      }, []);



    return (
        <div className='cardlist'>
            {resultlist.map(
                res=>
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
        </div>
    )
    
}

export default ResultList;