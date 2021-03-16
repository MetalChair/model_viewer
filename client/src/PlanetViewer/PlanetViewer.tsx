import React, { ReactElement, useEffect } from 'react'
import { PlanetAnimator } from './PlanetAnimator';
interface Props {
    
}
var animator : PlanetAnimator;

export default function PlanetViewer({}: Props): ReactElement {
    useEffect(() => {
        const element = document.getElementById("viewer-container");
        if(element){
            animator = new PlanetAnimator(element);
            animator.addCube();
            animator.doTick();
        }

        onkeypress = (code: KeyboardEvent) => {
            animator.onKeyPress(code);
        }
    })

    return (
        <div id = "viewer-container">
            
        </div>
    )
}
