// src/GridCanvas.js

import React, { useEffect, useRef } from 'react';

const GridCanvas = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        const drawGrid = () => {
            const cellSize = 20;
            const width = canvas.width;
            const height = canvas.height;

            context.clearRect(0, 0, width, height);

            context.beginPath();
            for (let x = 0; x <= width; x += cellSize) {
                context.moveTo(x, 0);
                context.lineTo(x, height);
            }

            for (let y = 0; y <= height; y += cellSize) {
                context.moveTo(0, y);
                context.lineTo(width, y);
            }

            context.strokeStyle = '#888';
            context.stroke();
            context.setLineDash([5, 3])
        };

        drawGrid();
    }, []);

    return <canvas ref={canvasRef} width={800} height={600} style={{ border: '1px solid #000' }} />;
};

export default GridCanvas;
