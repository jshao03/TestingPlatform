// src/TableComponent.js

import React from 'react';
import './TableComponent.css'; // Import CSS for styling

const TableComponent = ({ data }) => {
    if (!data || !Array.isArray(data) || data.length === 0) {
        return <div>No data available</div>; // Render a message if data is undefined, not an array, or empty
    }
    
    return (
        <div className="table-container">
            <table className="table">
                <thead>
                    <tr>
                        {data[0] && data[0].map((_, index) => (
                            <th key={index}>Header {index + 1}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((cell, cellIndex) => (
                                <td key={cellIndex}>{cell}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableComponent;
