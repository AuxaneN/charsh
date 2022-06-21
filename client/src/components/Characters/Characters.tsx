import {characterStore} from "../../stores/characterStore"
import {useEffect} from 'react'
import CharacterCardStyle from './CharacterCardStyle'


const Characters = () => {
  const {getAllCharacters, characterList} = characterStore((state) => state)
  useEffect(() => {
    getAllCharacters()
    console.log("Character list", characterList)
  },[])

  return (
    <>
     Characters? Characters.
     {
       characterList && characterList.length > 0 ?
         characterList.map(character =>
           {
              let keys = Array.from(Object.keys(character.data))
              let chars = keys.map((key,index)=>
                {
                  let information = character.data[key]
                  return (
                    <>
                    {
                      information.infos?.name &&
                        <CharacterCardStyle key={index}>
                        <span className="picture">
                        </span>
                          {information.infos?.name}
                      </CharacterCardStyle>
                    }
                    </>
                  )
                }
              )
              return chars
            }
           )
       :
         <div>
          You don't have any characters yet.
          Make one ?
         </div>

     }
    </>

  )
}

export default Characters
