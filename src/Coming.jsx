import React, { useState } from "react";


const coming =()=>{
    const [image]=useState([
        'C:\Users\user\Downloads\img\th',
        'C:\Users\user\Downloads\img\th(1)';
        'C:\Users\user\Downloads\img\th(2)';
        'C:\Users\user\Downloads\img\th(3)';
        
    ]):
    return(
        <div className="image">
            {image.map((image, index)=>(<img key={index} src={image} alt={'Image${index +1}'}/>
            ))}
        </div>
    );
    
}
export default coming;