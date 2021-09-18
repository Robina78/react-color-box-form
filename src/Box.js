import React from "react";
import './Box.css'

const Box = ({id, handleRemove, width=5, height=5, backgroundColor="blue"}) => {
    const remove = () => handleRemove(id);
    return (
        <div className="Box">
           <div 
             style={{
                height: `${height}em`,
                width: `${width}em`,
                backgroundColor
             }}
            >
            <button onClick={remove}>Remove The Box!</button>
            </div>               
        </div>
    );
}

export default Box;