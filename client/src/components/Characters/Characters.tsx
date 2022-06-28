import {characterStore} from "../../stores/characterStore"
import {useEffect} from 'react'
import {useNavigate} from "react-router-dom"


import CharacterCardStyle from './CharacterCardStyle'


const Characters = () => {
  const navigate = useNavigate()

  const {getAllCharacters, characterList} = characterStore((state) => state)
  useEffect(() => {
    getAllCharacters()
    console.log("Character list", characterList)
  },[])

  const handleClick = (e:React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>,id:string) => {
      e.preventDefault()
      // Redirect to character
      navigate(`${id}`)
  }

  return (
    <>
    <h4>
     Characters? Characters.
    </h4>
     {
       characterList && characterList.length > 0 ?
         characterList.map(character =>
           {
              let keys = Array.from(Object.keys(character.data))
              let chars = keys.map((key,index)=>
                {
                  let information = character.data[key]
                  console.log(character)
                  return (
                    <>
                    {
                      information.infos?.name &&
                        <CharacterCardStyle key={index} onClick={(e) => handleClick(e, character._id)}>
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
