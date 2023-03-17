

function canvasSize(){
    size = prompt("How big would you like your canvas to be?");
    // limits canvas size to no greater than 100
    if(size > 100) {
        alert("Please keep canvas size below 100 to avoid browser issues.")
        return canvasSize();
    }

    // creates canvas based on user input size
    let createCanvas = function(size) {
        const container = document.querySelector(".container");
        //removes all child nodes from containder effectively clearing canvas
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }

        //creates canvas based on user input size
        for (let i = 1; i < size; i++){
            for(let j = 1; j < size; j++){
                const div = document.createElement("div");
                div.classList.add(`block${i}`);
                div.setAttribute("id", "changeColor");
                div.setAttribute("style", `grid-row: ${i} / ${i + 1}; grid-column: ${j} / ${j + 1}; background: white;`);
                div.addEventListener("mouseover", () => { 
                    div.style.backgroundColor = "purple";
                })
                
                div.addEventListener("mouseout", () => { 
                    div.style.backgroundColor = "blue";
                })
                container.appendChild(div);
                
            } 
        };
        
    }
    createCanvas(size);
}










