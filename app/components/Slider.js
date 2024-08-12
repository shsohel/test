/** @format */

"use client";

import React, { useState } from "react";

const valuetext = (value) => `${value}°C`;

const minDistance = 10;

export default function DualThumbSlider() {
  const [range, setRange] = useState([20, 37]);

  const handleChange = (event) => {
    const value = event.target.valueAsNumber;
    const index = event.target.dataset.index;

    // Handle range updates based on thumb index
    if (index === "0") {
      // Handle min thumb movement
      setRange(([min, max]) => {
        if (value + minDistance > max) {
          return [max - minDistance, max];
        }
        return [value, max];
      });
    } else {
      // Handle max thumb movement
      setRange(([min, max]) => {
        if (value - minDistance < min) {
          return [min, min + minDistance];
        }
        return [min, value];
      });
    }
  };

  return (
    <div className="relative w-80">
      <input
        type="range"
        min="0"
        max="100"
        value={range[0]}
        onChange={handleChange}
        data-index="0"
        className="absolute w-full h-2 bg-transparent appearance-none cursor-pointer"
        style={{
          //   background: `linear-gradient(to right, #4caf50 ${range[0]}%, #d1d5db ${range[0]}%, #d1d5db ${range[1]}%, #4caf50 ${range[1]}%)`,
          zIndex: 4,
        }}
      />
      <input
        type="range"
        min="0"
        max="100"
        value={range[1]}
        onChange={handleChange}
        data-index="1"
        className="absolute w-full h-2 bg-transparent appearance-none cursor-pointer"
        style={{
          background: `linear-gradient(to right, #4caf50 ${range[0]}%, #d1d5db ${range[0]}%, #d1d5db ${range[1]}%, #4caf50 ${range[1]}%)`,
          zIndex: 2,
        }}
      />
      <div className="relative mt-2 text-center text-sm text-gray-600">
        <span>{`Min: ${valuetext(range[0])}`}</span>
        <span className="ml-4">{`Max: ${valuetext(range[1])}`}</span>
      </div>
    </div>
  );
}
