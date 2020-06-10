export async function uiUpdate(imagepath) {
    let response = await fetch('http://localhost:3000/all');
    console.log('uiUpdate function in progress');
    try {
        let data = await response.json();
        console.log('uiUpdate ' + data);

        // Set background image from local storage
        document.getElementById(
            'citypic'
        ).style.backgroundImage = `url('./images/${imagepath}.png')`;

        // Create date block
        document.getElementById('date').innerHTML = 'Travel Date Info';

        document
            .getElementById('datepara')
            .innerHTML =
                `${data.dates[1]} day(s) remaining until you leave on ${data.dates[0]}`
            ;

        // Create weather block
        document.getElementById('temp').innerHTML = 'Destination Weather Info';

        // Determine weather report based on travel date
        if (data.dates[2] == 'false') {
            console.log('Dates[2] is false');
            document.getElementById(
                'temppara'
            ).innerHTML = `The forecast for ${data.city} in two weeks \
                is ${data.descrip} at ${data.temp}&deg; Fahrenheit`;
        } else {
            console.log('Dates[2] is true');
            document.getElementById(
                'temppara'
            ).innerHTML = `The current forecast for ${data.city} is \
                ${data.descrip} at ${data.temp}&deg; Fahrenheit`;
        }
    } catch (error) {
        console.log(error);
    }
}
