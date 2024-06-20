// src/App.js

import React, { useEffect, useState } from 'react';
import './App.css';
import TableComponent from './TableComponent';
import axios from 'axios';
import GridCanvas from './GridCanvas';

function App() {
    const [DijkstraData, setDijkstraData] = useState([]);

    const fetchDijkstraData = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/Dijkstra/GetNodes');
            setDijkstraData(response.data);
        } catch (error) {
            console.error('Error fetching table data:', error);
        }
    };

    return (
        <div className="App">
            <main className='App-main'>
                <GridCanvas nodesData={DijkstraData.nodes} linesData={DijkstraData.graph}/>
                <button className='fetch-button' onClick={fetchDijkstraData}>Dijkstra Algorithm</button>
            </main>
        </div>
    );
}

export default App;
