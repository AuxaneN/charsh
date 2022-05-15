import create from "zustand"
import axios from axios

type Character = {
body:string
// Name, pronouns, age, height, Species
infos?:string,
about?:string
//Qualities, flaws
personnality?:string,
//Eyes, nose, mouth, faceshape, ears
face?:string,
// Happy, neutral, surprised, sad, scared, fucking horny man > 6 image urls
expressions?:string,
}

type CharacterState = {
  character?:Character,
  getCharacter: () => void
}

export const useStore = create<CharacterState>((set) => ({
    character:{
      body:"null"
    },
    getCharacter: () => {
      axios.get("v1/characters/6276ade659ff7c2d0e0d3073")
      set(
      () => ({
        character: {
          body:"hello"
        }
      })
    )}
  })
)
