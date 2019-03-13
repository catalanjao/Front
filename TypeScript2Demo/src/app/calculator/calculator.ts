interface ICalculator{
    suma(number1: number, number2: number): number;
    resta(number1: number, number2: number): number;
}

class Calculator implements ICalculator{
    
    suma(number1: number, number2: number): number {
        let suma = number1 + number2;
        console.log(number1 + number2);
        return suma;    
    }    
    
    resta(number1: number, number2: number): number {
        let resta = number1 - number2;
        console.log(number1 - number2);
        return resta;
    }
    
}

window.onload = function(){
    
    var calc: ICalculator = new Calculator();
    
    console.log(`Resultado suma: ${calc.suma(1,2)}`);
    console.log(`Resultado resta: ${calc.resta(2,1)}`);
}