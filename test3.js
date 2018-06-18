'use strict'

const yearIni = 2010;
const yearFin = 2021;

let yearsBisiesto = [];

const  es_bisiesto = (year) =>{
	return ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) ? true : false;
}


   for (let i = yearIni; i <= yearFin; i++){

   let yesOrNot =  es_bisiesto(i);
    
   if (Object.is(yesOrNot,true)){
        yearsBisiesto.push(i);   
   }


console.log(`el año ${i} es bisiesto?  
          R= ${yesOrNot}`);      

   }

   console.log(yearsBisiesto);