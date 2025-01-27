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
// console.log(3 + 4);
// console.log( '3' + '4');
// console.log( '3' + 4);  // it will concatinate integer 4 and sum will be 34
// console.log( 3 + '4');
// console.log('3' * '4');


//////////////////   Loose and Strict Equality  /////////////////////////
// console.log( 3 == 4 )
// console.log( 3 == 3 )
// console.log( '3' == 3 )

///////////////////  Strict Equality   /////////////////////////////
// console.log( '3' === 3);
// console.log( 3 === 3);
// console.log( undefined == null );
// console.log( undefined === null );


//////////////////////   Conditions   /////////////////////////////
// let x = 3;
// if (x == 5){
//     console.log("What?");
// }else{
//     console.log(" Of course 3 != 5");
// }

/////////////////////    Iteration   ///////////////////////////////
// for (let x = 0; x <5; x++) {
//     console.log(x);
// }


////////////////////  Iteration - in vs of   ///////////////////////
// const v = [11,22,33,44];
// for (const x of v){
//     console.log(x);
// }
// const y = [11,22,33,44];
// for (const x in y){   /// in used to get index value not the actual value
//     console.log(x);
//     console.log(y[x])
// }

///////////////////  Functions   /////////////////////////////////////
/////////////  Regular declaration 
// function add (x,y){
//     return x+y ;
// }
// console.log(add(4,3))

////////////  Named declaration (Assigning to Variables)
// let add = 
// function (x,y){
//     return x + y ;
// }
// console.log(add(4,3))

///////////// Arrow function
// let add = (x, y ) => x+y ;
// console.log(add(4,3))

/////////////// Anonymouse function
// console.log(function(x,y){return x +y ;} (2,3))


//////////
// function add (x, y ){
//     return x + y ;
// }
// console.log(typeof(add));
// console.log(add(2,3));
// add.v  = {'a': 3 , 'b': 6}
// console.log(add.v);
// console.log(add.v.a);
// console.log(add.v.x);



/////////
// const obj = { color : 'red' }
// obj.changecolor = function (color) {this.color = color}
// obj.changecolor('green')
// console.log(obj.color)