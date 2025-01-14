// console.log("Hello console!");


// //////////////////////     Identifiers and Variables         ////////////////
// let x = 5;
// const AnotherVariable = 43;
// var we_do_not_use_var = true;


// /////////////////////////   Unicode!   ////////////////////////////////
// ////////// - JavaScript uses UTF-16
// let lan =  'বাংলা' ;
// console.log(lan)

// let ভাষা = "English";
// console.log(ভাষা )

//////////////////////////    Scope - change var/let   //////////////////
//// block 1 here x2 will show output
// var x1  = 10;
// {
//     console.log(x1);
//     var x2 = 30;    
// }
// console.log(x2)

//// block 2 here x2 will not show output
// let x1  = 11;
// {
//     console.log(x1);
//     let x2 = 32;    
// }
// console.log(x2) //// In block 2 we have taken x2 only in second bracket

//// block 3 here x2 will not show output
// const x1  = 12;
// {
//     console.log(x1);
//     const x2 = 33;    
// }
// console.log(x2) //// In block 3 we have taken x2 only in second bracket

///// Always try to use 'const'



////////////////    String   /////////////////////////////////////////
// let s = "Hello";
// console.log(s);
// console.log(s.length);
// console.log(s[0]); //// like python it starts with 0(zero)
// console.log(s.substring(2,4));

// let ভাষা = "English";
// console.log(ভাষা.length )


/////////////////////    Templates    /////////////////////////////////
// let s = "Hello";
// let ভাষা = "English";
// let st = `${s} World`;
// console.log(st);
// console.log(`Length of "${ভাষা}" = ${ভাষা.length} `)

////////////////////   Operators and Coercion ////////////////////////


