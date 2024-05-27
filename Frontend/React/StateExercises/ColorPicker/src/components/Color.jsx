import React from 'react'
import { useState } from 'react'

const Color = () => {
    const [selectedColor, setSelectedColor] = useState([])
    const [newColor, setNewColor] = useState("#000000")

    const handleColorChange = (event) => {
        setNewColor(event.target.value)
    }

    const handleClick = () => {
        setSelectedColor([...selectedColor, newColor])
        setNewColor("#000000")
    }
    const handleReset = () => {
        setSelectedColor([])
    }

    const renderColors = selectedColor.map((color, index) =>
        <div key={index}
            style={{
                backgroundColor: color,
                width: "100px",
                height: "100px",
                marginLeft: "5px"
            }}>
            {color}
        </div>)
    return (
        <div>
            Selected Colors:
            <div style={{ display: "flex", marginBottom: "10px" }}>
                {renderColors}
            </div>
            <div>
                <input type="color" value={newColor} onChange={handleColorChange} />
                <br />
                <button onClick={handleClick}>Add Color</button>
                <button onClick={handleReset}>Reset Color</button>
            </div>
        </div>
    )
}

export default Color