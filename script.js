const styleInputs = ['input_width', 'input_height', 'input_radius', 'input_color', 'input_count'];

document.getElementById('btn_show').addEventListener('click', () => {
    const styleProps = styleInputs.reduce((acc, value) => {
        acc[value] = document.getElementById(value).value;
        return acc;
    }, {})
    let playground = document.getElementById('playground');

    for (let i = 0; i <= Number(styleProps.input_count)-1; i++) {
        let resDiv = document.createElement('div');
        resDiv.style.width = styleProps.input_width + "px";
        resDiv.style.height = styleProps.input_height + "px";
        resDiv.style.borderRadius = styleProps.input_radius + "px";
        resDiv.style.backgroundColor = `${styleProps.input_color}`;
        playground.appendChild(resDiv);
    }
})

