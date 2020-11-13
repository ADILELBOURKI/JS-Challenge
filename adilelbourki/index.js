
/**
 * 
 * ADIL EL BOURKI 
 */





/*
* F to C 
 *  C = 0 => F=32
 *  C = 1 => F=>33.8 
 * 
 * F = 32 + 1.8 * C => F = 32 + 1.8C => C = ( F - 32 ) / 1.8 
 * 
 */
//conversion fonction 
const convertFahrenheitToCelsius = (F) => {
     return (F - 32)/1.8
}
 
