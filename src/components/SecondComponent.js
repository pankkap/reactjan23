// Custom Component using Class 
import React from "react";

export default class SecondComponent extends React.Component
{
    render()
    {
        return(
            <div className="container bg-warning p-3 text-center">
                <h2>This is Second Component</h2>
                <h3>Using React Class </h3>
            </div>
        ); 
    }
}

// export default SecondComponent;