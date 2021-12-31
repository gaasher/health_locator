import React from 'react';
import ResultList from '../components/ResultList';
import './ResultPage.css';

function ResultPage() {
    return(
        <div className='page-background'>
            <div className='list-container'> 
                <ResultList/>
            </div>
        </div>
    )
}

export default ResultPage;