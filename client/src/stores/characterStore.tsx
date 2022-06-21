import create from "zustand"
import axios from "axios"

type Character = {
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

type CharacterState = {
  character?:Character,
  characterList?:Array<CharacterObject>
  getCharacter: (id:string) => void
  getAllCharacters: () => void
}

export const characterStore = create<CharacterState>((set) => ({
    character:{
      body:""
    },
    characterList:[],
    getCharacter: async (id) => {
        const res = await axios.get(`/api/v1/characters/${id}`)
        set(
        () => ({
          character: res.data
        })
      )
    },
    getAllCharacters: async () => {
        const res = await axios.get("/api/v1/characters/")
        console.log("Retrieved characters", res.data)
        set(
        () => ({
          characterList: res.data.data
        })
      )
    }
  })
)
