// src/App.js

import React, { useState } from 'react';
import './App.css';
import TableComponent from './TableComponent';

function App() {
    const [tableData, setTableData] = useState([]);

    const fetchTableData = () => {
        fetch('http://localhost:5000/api/TodoItems')
            .then(response => response.json())
            .then(data => setTableData(data))
            .catch(error => console.error('Error fetching table data:', error));
    };

    return (
        <div className="App">
            <main>
                <button onClick={fetchTableData}>Fetch Table Data</button>
                <TableComponent data={tableData} />
            </main>
        </div>
    );
}

export default App;
