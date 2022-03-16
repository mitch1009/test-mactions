export const additions = (adds:numbers): number =>{
return adds.a + adds.b;
}

export interface numbers {
    a:number
    b:number
}

additions({a:6,b:7})
