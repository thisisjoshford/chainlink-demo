import React from 'react'
import '../styles/diagramOverlay.css'

// This component is used to hide the diagram before the first search result

const DiagramOverlay = () => {

    return (
        <div className="diagram-overlay">
            <div>
                <h1>Welcome to the Chainlink Oracle Demo</h1>
                <p>
                    Please select one of the available token prices and check the price.
                    We will then display a diagram that will walk you through the process of accessing the price through the Chainlink Oracle.
                </p>
            </div>
        </div>
    )
}

export default DiagramOverlay
