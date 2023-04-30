


type Person = {
    name: string,
    gender: string,
    age: number ,
    BloodGroup?: string,
    Genotype?: string,
}

const Human: Person = {
    name : "Francis",
    gender : "male",
    age : 19,
    BloodGroup: "O+",
    Genotype: "AA"
}

// console.log(Human)

let vals: string[] = ["Francis", "Abel", "Amidat", "Bolutife", "Zinny"];
let cal: string[] =vals.sort()
console.log(cal)