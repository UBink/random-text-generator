//going for a star reading theme. creating arrays that have the words that will be randomized
const stars = ['Polaris', 'Sirius', 'Alpha Centauri System', "Betelgeuse", 'Rigel', 'Vega', 'Pleiades', 'Antares', 'Canopus'];
const reading = ["Good things are coming", "Be careful", "Oh! so bad I can't even start", 'You achieve great things in the future']
const array3 = ['sushi', 'burger', 'salad', 'desert']

//creating the randomizer function
const randomizer = (arr1, arr2, arr3) => {
    //creating empty array that will contain the randomized message
    let container =[];
    //using loops to have a possibilty of getting multiple stars
     for (let i = Math.floor(Math.random() * arr1.length); i <= arr1.length; i++ ) {
        container.push( arr1[i]);
    }
    //creating conditionals to correct grammar when we get multiple stars
    if (container.length >= 3) {
        console.log('Your lucky stars are: ')
        
     } else if(container.length <= 2) {
        console.log('Your lucky star is: ')
     }
    //randomizing the second array
    let j = Math.floor(Math.random() * arr2.length);
     //creating conditionals to correct grammar when we get multiple stars
    if (container.length >= 3) {
        container.push('Your stars say: ' + arr2[j]);
    } else if( container.length <= 2){
        container.push('Your star says: ' + arr2[j]);
    }
    //randomizing the third array
    let l = Math.floor(Math.random() * arr3.length);
    container.push('Your lucky food is: ' + arr3[l]);
    
     //returning the randomized array
     return container.join('\n');
}


console.log(randomizer(stars, reading, array3));