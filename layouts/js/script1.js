// let js = 'amazing';
// // if (js === 'amazing') alert('JavaScript is FUN!')

// //40 + 8 + 23 - 10;
// console.log(40 + 8 + 23 - 10);

// console.log("Jonas");

// console.log(23);

///++++++++++chalenge++++++++++
// function bmi(w,h){
//   return (w)/(h*h)
// }
// const markW = 78 ;
// const markH = 1.69;
// const johnW = 92; 
// const johnH = 1.76; 

// const markBIM1 = bmi(markW,markH)
// console.log("mark BMI ",markBIM1);
// const johnBIM1 = bmi(johnW,johnH)
// console.log("john BMI",johnBIM1);

// const markBIM2 = (95)/(1.88**2)
// console.log("mark BMI 2 ",markBIM2);
// const johnBIM2 = (85)/(1.79**2)
// console.log("john BMI 2 ",johnBIM2);

// const markHigherBmi = markBIM1>johnBIM1
// console.log('markHigherBmi1',markHigherBmi);

// let markHigherBmi2 = markBIM2>johnBIM2
// console.log('markHigherBmi2',markHigherBmi2);

//++++++++++++++++++++++++++++++++++++++++++

// const age = 15 ;
// const isOldEnough = age >= 18;
// if(age >= 18){
//     console.log('sarah can start driving license 🚓')
// }else{
//     const yearsLeft = 18-age ;
//     console.log(`sarah is too young,waite another ${yearsLeft} years 👶`);
// }
///+++++++++++++++++++++++++++++++++++++++++++
// function bmi(w,h){
//   return (w)/(h*h)
// }
// const markW = 78 ;
// const markH = 1.69;
// const johnW = 92; 
// const johnH = 1.76; 

// const markBMI1 = bmi(markW,markH)
// console.log("mark BMI ",markBMI1);
// const johnBMI1 = bmi(johnW,johnH)
// console.log("john BMI",johnBMI1);

// const markBIM2 = (95)/(1.88**2)
// console.log("mark BMI 2 ",markBIM2);
// const johnBIM2 = (85)/(1.79**2)
// console.log("john BMI 2 ",johnBIM2);

// const markHigherBmi = markBIM1>johnBIM1
// console.log('markHigherBmi1',markHigherBmi);

// let markHigherBmi2 = markBIM2>johnBIM2
// console.log('markHigherBmi2',markHigherBmi2);

// if (markBMI1 > johnBMI1 ){
//     console.log(`Mark bmi ${markBMI1} is higher then John ${johnBMI1} `);
// }else{
//     console.log(`John ${johnBMI1} is higher then Mark bmi ${markBMI1}  `);  
// }

//+++++++++++++++++++++++++++++++++++++++

// const age = '18'
// if(age === 18) console.log('you just become an adult :D (strict)');

// if(age == 18) console.log('you just become an adult :D (loose)');

// const favourite = prompt("what's your favourite number ?")
//  console.log(favourite);
//  console.log(typeof favourite);

//  if ( favourite == 23 ){
//     console.log( "Cool! 23 in amaizing ");
//  }else if ( favourite == 7 ){
//     console.log( "7 also is Cool! and  amaizing ");
//  }else{
//     console.log("is not 23 or 7 " );
//  }
//++++++++++++++++++++++++++++++++++++++++++++==
// const age = 23 ;
// // age >=18 ? console.log('I like drink pepsi 🍹'):console.log('I like drink water 🥛')

// const drink = age >=18 ? ' pepsi 🍹':  'water 🥛'
// console.log(drink);

// // i can use condtion Exsp like this 

// console.log(`i like drink ${age >=18 ? ' pepsi 🍹':  'water 🥛'}` );

//
//+++++++++++++++++++challenge+++++++++++++

// const bill = 40;

// if( bill >= 50 && bill <=300){
//     console.log('the tip is 15%');
// }else{
//     console.log('the tip is 20%');
// }
 

// const tip = bill >= 50 && bill <=300? bil * 0.15: bill * 0.20

// console.log(`the bill was ${bill} ,the tip ws ${tip} , The total value ${bill+tip}`);

//+++++++++++++++++++++++++++++++++++++++++++++++
// 'use strict';

// // const interface = 'Audio';

// function logger(){
//     console.log('My name is Jonas');
// }


// function logger(name,age ){
//   return name , age 
// }
//+++++++++++++++++++
//function declaration
// function calucAge(birthyeah){

//     return 2022-birthyeah
// }
// const age1 = calucAge(1989)
// console.log(age1);
// //function Experssion
// const calucAge2 = function(birthyeah){
//     return 2022 - birthyeah
// }

// const age2 = calucAge2(1990)
//  console.log(age2);

//  //arrow function 
//  const calucAge3 = birthyeah => 2022 - birthyeah;
//  const age3 = calucAge3(1997)
// console.log(age3);

//++++++function calling another function 

// const outPieces = function (fruit){
//     return fruit *4
// }

// const fruitProcessor = function (apples,oranges){
//     const applesPieces = outPieces(apples)
//     const orangesPieces = outPieces(oranges)

//     const juice = `just with ${applesPieces} pieces of apple and  ${orangesPieces} pieces of orange.`
//     return juice;
// }
// console.log(fruitProcessor(2,3));
//=================challenge 38+++++

// const calcAverage= (score1,score2,score3)  => (score1+score2+score3)/ 3;

// console.log(calcAverage(20,30,24));

// const avgDolphins = calcAverage(44,23,71)
// const avgKoalas = calcAverage(65,54,49)

// console.log(`the Average of Dolphins Team is ${avgDolphins}, the Average of Koalas is ${avgKoalas}`);

// function checkWinner(avgD,avgK){
//        if (avgD >= 2 * avgK  ){ 
//         console.log(`the Dolphins is winner (${avgD} vs ${avgK})`);
//     }else if ( avgK >= 2 * avgD )
//         { console.log(`the Koalas is winner (${avgD} vs ${avgK} ) `);
//     }else{ console.log('no team win');}
// }

// checkWinner(avgDolphins,avgKoalas)

//+++++++++++++++++++++++OBJECST +++++++

// const jonas = {
//     firstName :'Jonas',
//     lastName : "Arthere",
//     age : 2037 -1991,
//     job: 'teacher',
//     friends: ['Michae','Peter','Steven']
// }

//this diffrent  dot . squerBracket
//console.log(jonas);
// console.log(jonas.lastName);
// console.log(jonas['lastName']);

// const nameKey = 'Name'
// console.log(jonas['first'+ nameKey]);
// console.log(jonas['last'+ nameKey]);

// const infojonas = prompt('What do you want to know about Jonas? Choose between firstName,lastName,age,job, and friends ')

//console.log(jonas.infojonas);//undefined
/// know we can access proparty from jonas 
// console.log(jonas[infojonas]);


// if (jonas[infojonas]){
//     console.log(jonas[infojonas]);
// }else{
//     console.log('worng request! ');
// }

// jonas.location   = 'kooo',
// jonas['twitter'] = '@jonas'
// console.log(jonas);

// console.log(` ${jonas.firstName} has ${jonas.friends.length} but the best friend who ${jonas.friends[0]}`);

// const jonas = {
//     firstName :'Jonas',
//     lastName : "Arthere",
//     birthYeah : 1991,
//     job: 'teacher',
//     friends: ['Michae','Peter','Steven'],
//     hasDriversLicense : true,
//     // calcAge : function (birthYeah){
//     //     return 2037 -birthYeah
//     // }

//     // calcAge : function (){
//     //     console.log(this);
//     //     return 2037 - this.birthYeah
//     }

//     calcAge : function (){
        
//         this.age = 2037 - this.birthYeah
//         return this.age
//     },

//     getSummary: function(){
//         return `${this.firstName} is a ${jonas.age}-year old ${jonas.job} ,and he has ${this.hasDriversLicense? 'a':'no'} driver's license `
//     }
// }

// const calcAge = function(birthYeah){
//     return 2037 - birthYeah  
// }

// console.log(jonas.calcAge(1991));
// console.log(jonas['calcAge'](1991));

// console.log(jonas.calcAge());

// console.log(jonas.age);

// console.log(jonas.getSummary());

///++++++++++++++++++challenge


// const mark = {
//     firstName:'Mark',
//      lastName: 'Miller',
//      mass: '78',
//      height:'1.69' ,
//      calcBMI:function (){
//         this.bmi = (this.mass)/(this.height*this.height)
//         return this.bmi
//      }
    
// }


// const john = {
//     firstName:'John',
//      lastName: 'Smith',
//      mass: '92',
//      height:'1.95' ,

//      calcBMI:function (){
//         this.bmi = (this.mass)/(this.height*this.height)
//         return this.bmi
//      }
    
// }
// if ( mark.calcBMI() > john.calcBMI() ){
//     console.log(`${mark.firstName} ${mark.lastName}'s BMI ${mark.calcBMI()} is heiher than ${john.firstName} ${john.lastName}'s BMI ${john.calcBMI()}`);
// }else{
//     console.log(`${john.firstName} ${john.lastName}'s BMI ${john.calcBMI()} is heiher than ${mark.firstName} ${mark.lastName}'s BMI ${john.calcBMI()}`);
// }


// const markW = 78 ;
// const markH = 1.69;
// const johnW = 92; 
// const johnH = 1.76;


//////+++++++++++++++++??????+++++++++++++

// const years = [1991,2007,1969,2020]
// const ages = []

// for(let i =0 ; i<years.length; i++){
//  ages.push(2037-years[i] );
// }

// console.log(ages);


///+++++++++++++++++
//  const jonas = ['Jonas','smeth',1990,'teacher']
// console.log("_____ONLY STRING");
// for(let i = 0 ; i< jonas.length ; i++){
//     if(typeof jonas[i] !== 'string') continue;

//     console.log(jonas[i],typeof jonas[i]);
// }

//+++++++++++++++challenge#4+++++++++++++
 const calcTip = function(bill){
    return bill>= 50 && bill<=300 ? bill * 0.15:bill*0.20
 }
const bills = [22,295,179,440,37,105,10,1100,86,52];

const tips = [];
const totals = [];


for (let i = 0 ; i< bills.length; i++){
    const tip = calcTip(bills[i])
    tips.push(tip)
    totals.push(tip + bills[i])
};

//console.log(bills,tips,totals);



const calcAverage = function(arr){
     let sum = 0 ;
     for (let i = 0 ; i < arr.length; i++){
    //   sum = sum + arr[i]
         sum += arr[i];
     }
   return sum / arr.length;
}
console.log(totals);
calcAverage([10,10,10]);
console.log(calcAverage([10,10,10]));
console.log(calcAverage(bills));
console.log(calcAverage(totals));
console.log(calcAverage(tips));
