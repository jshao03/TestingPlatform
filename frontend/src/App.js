// src/App.js

import React, { useEffect, useState } from 'react';
import './App.css';
import TableComponent from './TableComponent';
import axios from 'axios';
import GridCanvas from './GridCanvas';

function App() {
    const [tableData, setTableData] = useState([]);

    const fetchTableData = () => {
        fetch('http://localhost:5000/api/TodoItems')
            .then(response => response.json())
            .then(data => setTableData(data))
            .catch(error => console.error('Error fetching table data:', error));
    };

    const [DijkstraData, setDijkstraData] = useState([]);

    const fetchDijkstraData = () => {
        axios.get('http://localhost:5000/api/Dijkstra')
            .then(response => {
                // Assuming response.data is a JSON object and you want to display a specific property
                setDijkstraData(response.data); // Replace 'someProperty' with the actual property you want to display
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    };

    // const [message, setMessage] = useState('');

    // useEffect(() => {
    //     axios.get('http://localhost:5000/api/ProcessingTime')
    //         .then(response => {
    //             setMessage(response.data);
    //         })
    //         .catch(error => {
    //             console.error('Error fetching data:', error);
    //         });
    // }, []);

    return (
        <div className="App">
            <header className="App-header">
                <h1>Shortest Path Algorithms Demo</h1>
            </header>
            <main className='App-main'>
                <GridCanvas />
                <button className='fetch-button' onClick={fetchDijkstraData}>Dijkstra Algorithm</button>
                <h1>{DijkstraData}</h1>
                {/* <TableComponent data={tableData} />
                <h1>{ message }</h1> */}
            </main>
        </div>
    );
}

export default App;
