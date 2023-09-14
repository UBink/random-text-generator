// Add an event listener to the button
document.getElementById('generateButton').addEventListener('click', () => {
    const stars = ['Polaris', 'Sirius', 'Alpha Centauri System', "Betelgeuse", 'Rigel', 'Vega', 'Pleiades', 'Antares', 'Canopus'];
    const reading = ["Good things are coming", "Be careful", "Oh! so bad I can't even start", 'You achieve great things in the future'];
    const food = ['sushi', 'burger', 'salad', 'dessert'];

    
    const output = document.getElementById('output');
    output.innerHTML = randomizer(stars, reading, food) + ;
});
// Your randomizer function with corrected loop condition
const randomizer = (arr1, arr2, arr3) => {
    // Creating an empty array that will contain the randomized message
    var container = [];
    // Using loops to have a possibility of getting multiple stars
    let starContainer = []
        for (let i = Math.floor(Math.random() * arr1.length); i < arr1.length; i++) {
           starContainer.push(arr1[i]);
        }
        if (starContainer.length >= 3) {
            container.push('Your lucky stars are:');
        } else if (starContainer.length <= 2) {
            container.push('Your lucky star is:');
        }
    
    container.push(starContainer)
    // Creating conditionals to correct grammar when we get multiple stars
    
    // Randomizing the second array
    let j = Math.floor(Math.random() * arr2.length);
    // Creating conditionals to correct grammar when we get multiple stars
    if (container.length >= 3) {
        container.push('Your stars say: ' + arr2[j]);
    } else if (container.length <= 2) {
        container.push('Your star says: ' + arr2[j]);
    }
    // Randomizing the third array
    let l = Math.floor(Math.random() * arr3.length);
    container.push('Your lucky food is: ' + arr3[l]);

    // Returning the randomized array
    return container.join('\n');
};
