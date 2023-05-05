console.log('Welcome To Our Shop')


let stock = {
    fruits: ['Apple', 'Banana', 'Cherry', 'Mango', 'Watermelon'],
    liquids: ['Water', 'Ice'],
    holders: ['Cup', 'Cone', 'Stick'],
    toppings: ['Chocolate', 'Peanuts']
}


// let order = (fruit, call_production) => {
//     setTimeout(() => {
//         console.log(`Order is place for ${stock.fruits[fruit]}`)
//         call_production();
//     }, 2000);
// }

// let production = () => {
//     console.log('Production is started...')
//     setTimeout(() => {
//         console.log('Fruits has bee chopped')
//         setTimeout(() => {
//             console.log(`${stock.liquids[0]} and ${stock.liquids[1]} is adding.`);
//         }, 1000);
//     }, 2000);
// }  

// order(1, production);


// let is_shop_open = true 
// let task_finisher = (time, task) => {
//     return new Promise((resolve, reject) => {
//         if (is_shop_open){
//             setTimeout(() => {
//                 resolve(task());
//             }, time);
//         }
//         else{
//             reject('Sorry! Shop is closed...');
//         }
//     })
// }

// function order(){
//     console.log(`Order is placed for a juice of ${stock.fruits[3]}.`);
// }

// function startProduction(){
//     console.log(`Product is started for ${stock.fruits[3]} juice.`);
// }

// function cuttingFruits(){
//     console.log(`Fruits has been chopped.`);
// }

// function addingLiquides(){
//     console.log(`${stock.liquids[0]} and ${stock.liquids[1]} are added.`);
// }

// function serve(){
//     console.log(`${stock.fruits[3]} juice is served.`);
// }

// task_finisher(2000, order)
// .then(() => task_finisher(2000, cuttingFruits))
// .then(() => task_finisher(1000, addingLiquides))
// .then(() => task_finisher(3000, serve))
// .catch(() => console.log('Something wrong. Customer left...'))
// .finally( () => console.log('Day ended. Time for shop closing.'));