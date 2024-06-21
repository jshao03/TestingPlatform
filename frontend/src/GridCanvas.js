// src/GridCanvas.js

import React, { useEffect, useRef } from 'react';

const GridCanvas = ({ nodesData, linesData }) => {
    const canvasRef = useRef(null);

    const CoordinateConversion = (value, adjustment, multiplier) => {
        // Validate inputs
        if (isNaN(value) || isNaN(adjustment) || isNaN(multiplier)) {
            console.error(`Invalid input to CoordinateConversion: value=${value}, adjustment=${adjustment}, multiplier=${multiplier}`);
            return 0;
        }
        
        return (value + adjustment) * multiplier;
    };

    const DrawGraph = (canvas, context,marginSize) => {
        if (nodesData && linesData) {
            const width = canvas.width;
            const height = canvas.height;
            
            // Find minimum x and y values
            const minLat = Math.min(...nodesData.map(node => node.location.lat));
            const maxLat = Math.max(...nodesData.map(node => node.location.lat));
            const minLng = Math.min(...nodesData.map(node => node.location.lng));
            const maxLng = Math.max(...nodesData.map(node => node.location.lng));
            const latAdjustment = minLat >= 0 ? 0 : marginSize - minLat;
            const lngAdjustment = minLng >= 0 ? 0 : marginSize - minLng;
            const latMultiplier = (width - 2 * marginSize) / (maxLat + latAdjustment);
            const lngMultiplier = (height - 2 * marginSize) / (maxLng + lngAdjustment);
            
            // Draw points from nodesData
            context.fillStyle = 'red'; // Example color for points
            const radius = 5; // Radius of the points
            nodesData.forEach(point => {
                const x = CoordinateConversion(point.location.lat, latAdjustment, latMultiplier);
                const y = CoordinateConversion(point.location.lng, lngAdjustment, lngMultiplier);
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
                        const startX = CoordinateConversion(nodesData[rowIndex].location.lat, latAdjustment, latMultiplier);
                        const startY = CoordinateConversion(nodesData[rowIndex].location.lng, lngAdjustment, lngMultiplier);
                        const endX = CoordinateConversion(nodesData[colIndex].location.lat, latAdjustment, latMultiplier);
                        const endY = CoordinateConversion(nodesData[colIndex].location.lng, lngAdjustment, lngMultiplier);

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
    
    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        var marginSize = 30;

        DrawGraph(canvas, context, marginSize);
    }, [nodesData, linesData]);

    return <canvas ref={canvasRef} width={2000} height={600} style={{ border: '1px solid #000' }} />;
};

export default GridCanvas;
