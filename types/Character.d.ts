type Character = {
_id:string
body:string
// Name, pronouns, age, height, Species
infos?:{
  name:string,
  height:number,
  age:number
},
about?:string
//Qualities, flaws
personnality?:string,
//Eyes, nose, mouth, faceshape, ears
face?:string,
// Happy, neutral, surprised, sad, scared, fucking horny man > 6 image urls
expressions?:string,
}
type CharacterObject = {
    data:{[key:string]:Character}
    isPublic: boolean
    id:string
}

export type {CharacterObject}
