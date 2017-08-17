let unionVariable: number | string;

unionVariable = 42;

unionVariable = 'some string';

var nullableString: string | null | undefined;
nullableString = null;
nullableString = undefined;


let anyValue: any = 5;
//let anyValue: any = 'string val';

let fixedString1: string = (anyValue as number).toFixed(4); //type assertions doesn't exactly work as planned :(
let fixedString2: string = (<number>anyValue).toFixed(4); //type assertions doesn't exactly work as planned :(

console.log((<number>anyValue).toString());
console.log(`Fixed strings after type assertions ${fixedString1} - ${fixedString2}`);;