import React, { Component, propTypes, useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';




function ResultList(props) {

    const [resultlist, setResultList] = useState([]);

    const location = useLocation();
    const { baseaddress } = location.state;

    useEffect(() => {
        fetch(process.env.REACT_APP_API+"results/?addy="+baseaddress)
        .then(response => response.json())
        .then(data=>{
            setResultList(data);
            console.log("Resultlist Created");
        });
      }, []);



    return (
        <div>
        <p> Results for: {baseaddress} </p>
            {resultlist.map(
                res=>
                <Card key={res.Name}>
                    <Card.Title>
                        {res.Name}
                    </Card.Title>
                    <Card.Text>
                        {res.Rating, res.StreetAddress}
                    </Card.Text>
                </Card>
            )}
        </div>
    )
    
}

export default ResultList;