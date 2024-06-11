// src/App.js

import React, { useEffect, useState } from 'react';
import './App.css';
import TableComponent from './TableComponent';
import axios from 'axios';

function App() {
    const [tableData, setTableData] = useState([]);

    const fetchTableData = () => {
        fetch('http://localhost:5000/api/TodoItems')
            .then(response => response.json())
            .then(data => setTableData(data))
            .catch(error => console.error('Error fetching table data:', error));
    };

    const [message, setMessage] = useState('');

    useEffect(() => {
        axios.get('http://localhost:5000/api/ProcessingTime')
            .then(response => {
                setMessage(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div className="App">
            <main>
                <button onClick={fetchTableData}>Fetch Table Data</button>
                <TableComponent data={tableData} />
                <h1>{ message }</h1>
            </main>
        </div>
    );
}

export default App;
