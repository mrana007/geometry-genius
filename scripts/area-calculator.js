function calculateTriangleArea (){
    // get triangle base value
    const baseField = document.getElementById('triangle-base');
    const baseValueText = baseField.value;
    const base =parseFloat(baseValueText);
    console.log(base);

    // get triangle height value
    const heightField = document.getElementById('triangle-height');
    const heightValueText = heightField.value;
    const height =parseFloat(heightValueText);
    console.log(height);

    // calculate triangle area
    const area = 0.5 * base * height;
    console.log(area);

    // show triangle area
    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = area;

    addToCalculationEntry('Triangle', area)
};
function calculateRectangleArea(){
    // get rectangle width value
    const widthField = document.getElementById('rectangle-width');
    const widthValueText = widthField.value;
    const width =parseFloat(widthValueText);
    console.log(width);

    // get rectangle length value
    const lengthField =document.getElementById('rectangle-length');
    const lengthValueText = lengthField.value;
    const length =parseFloat(lengthValueText);
    console.log(length);

    // validation input: width and length
    if(isNaN(width) || isNaN(length)){
        alert('Please insert number');
        return;
    }

    // calculate rectangle area
    const area = width * length;
    console.log(area);

    // show rectangle area
    const areaSpan =document.getElementById('rectangle-area')
    areaSpan.innerText = area;

    addToCalculationEntry('Rectangle', area)
}

// reusable function --> reduce duplicate code
// calculate Parallelogram Area
function calculateParallelogramArea(){
    const base = getInputValue('parallelogram-base');
    const height = getInputValue('parallelogram-height');
    // validate
    if(isNaN(base) || isNaN(height)){
        alert('Please insert number')
        return;
    }
    const area = base * height;
    setElementInnerText('parallelogram-area', area);

    // add to calculation entry
    addToCalculationEntry('Parallelogram', area)
}
// calculate Rhombus area
function calculateRhombusArea(){
    const diagonal1 = getInputValue('rhombus-diagonal1');
    const diagonal2 = getInputValue('rhombus-diagonal2');
    // validate
    if(isNaN(diagonal1) || isNaN(diagonal2)){
        alert('Please insert number')
        return;
    }
    const area = 0.5 * diagonal1 * diagonal2;
    const areaTwoDecimal = area.toFixed(2);
    setElementInnerText('rhombus-area', areaTwoDecimal);

    addToCalculationEntry('Rhombus', areaTwoDecimal);
}
// calculate Pentagon Area
function calculatePentagonArea(){
    const perimeter = getInputValue('pentagon-perimeter');
    const apothem = getInputValue('pentagon-apothem');
    // validate
    if(isNaN(perimeter) || isNaN(apothem)){
        alert('Please insert number')
        return;
    }
    const area = 0.5 * perimeter * apothem;
    const areaTwoDecimal = area.toFixed(2);
    setElementInnerText('pentagon-area', areaTwoDecimal);

    addToCalculationEntry('Pentagon', areaTwoDecimal);

}

// calculate Ellipse Area
function calculateEllipseArea(){
    const majorRadius = getInputValue('ellipse-major-radius');
    const minorRadius = getInputValue('ellipse-minor-radius');
    // validate
    if(isNaN(majorRadius) || isNaN(minorRadius)){
        alert('Please insert number')
        return;
    }
    const area = 3.14 * majorRadius * minorRadius;
    const areaTwoDecimal = area.toFixed(2);
    setElementInnerText('ellipse-area', areaTwoDecimal);

    addToCalculationEntry('Ellipse', areaTwoDecimal)
}


// reusable get input value field in number(parent function)
function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}
// reusable set span, p, div, etc text
function setElementInnerText(elementId, area){
    const element =document.getElementById(elementId)
    element.innerText = area;
}

// add to calculation entry
/**
* 1. get the element where you want to add the dynamic HTML 
* 2. create an element you want to add
* 3. if needed add some class
* 4. set inner HTML. it could be dynamic Template string
* 5. append the created element as a child of the parent 
*/
function addToCalculationEntry(areaType, area){
    console.log(areaType + ' ' + area);
    const calculationEntry = document.getElementById('calculation-entry');

    const count = calculationEntry.childElementCount;

    const p = document.createElement('p');
    p.classList.add('my-4');
    p.innerHTML = `${count + 1}. ${areaType} ${area} cm<sup>2</sup> <button class="btn btn-sm btn-success">Convert</button>`;
    calculationEntry.appendChild(p);
}

// Data validation
/* 
1. set the proper type of the input field. (number, data, email)
2. check type using typeof
3. isNaN is checking whether the input is not a number or not
*/