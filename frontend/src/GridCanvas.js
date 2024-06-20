// src/GridCanvas.js

import React, { useEffect, useRef } from 'react';

const GridCanvas = ({ nodesData, linesData }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        const drawGrid = () => {
            const cellSize = 20;
            const width = canvas.width;
            const height = canvas.height;

            // Clear canvas
            context.clearRect(0, 0, width, height);

            // // Draw grid lines
            // context.beginPath();
            // for (let x = 0; x <= width; x += cellSize) {
            //     context.moveTo(x, 0);
            //     context.lineTo(x, height);
            // }
            // for (let y = 0; y <= height; y += cellSize) {
            //     context.moveTo(0, y);
            //     context.lineTo(width, y);
            // }
            // context.strokeStyle = '#888';
            // context.stroke();

            if (nodesData && linesData) {
                // Draw points from nodesData
                context.fillStyle = 'red'; // Example color for points
                const radius = 5; // Radius of the points
                nodesData.forEach(point => {
                    const x = point.location.lat;
                    const y = point.location.lng;
                    const fontSize = 18; // Font size for labels
                    context.font = `${fontSize}px Arial`; // Font style for labels

                    // Draw circle (you can change this to draw squares or customize further)
                    context.beginPath();
                    context.arc(x, y, radius, 0, 2 * Math.PI);
                    context.fill();

                    // Draw label using node ID
                    context.fillStyle = '#000'; // Label color
                    context.textAlign = 'center';
                    context.fillText(point.id.toString(), x, y - radius - 5); // Adjust position of label
                });

                // Draw lines from linesData
                context.strokeStyle = 'blue'; // Example color for lines
                context.lineWidth = 2; // Example line width
                context.fillStyle = 'blue'; // Arrow color
                
                linesData.forEach((row, rowIndex) => {
                    row.forEach((element, colIndex) => {
                        if (element !== 0) {
                            const startX = nodesData[rowIndex].location.lat;
                            const startY = nodesData[rowIndex].location.lng;
                            const endX = nodesData[colIndex].location.lat;
                            const endY = nodesData[colIndex].location.lng;

                            // Calculate angle and arrow points
                            const angle = Math.atan2(endY - startY, endX - startX);
                            const arrowLength = 10;
                            const arrowWidth = 5;

                            // Draw line
                            context.beginPath();
                            context.moveTo(startX, startY);
                            context.lineTo(endX, endY);
                            context.stroke();

                            // Draw arrowhead
                            context.beginPath();
                            context.moveTo(endX - arrowLength * Math.cos(angle - Math.PI / 6), endY - arrowLength * Math.sin(angle - Math.PI / 6));
                            context.lineTo(endX, endY);
                            context.lineTo(endX - arrowLength * Math.cos(angle + Math.PI / 6), endY - arrowLength * Math.sin(angle + Math.PI / 6));
                            context.closePath();
                            context.fill();
                        }
                    });
                });
            }
        };

        drawGrid();
    }, [nodesData, linesData]);

    return <canvas ref={canvasRef} width={800} height={600} style={{ border: '1px solid #000' }} />;
};

export default GridCanvas;
