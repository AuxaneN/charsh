import {useEffect} from 'react'

import {useParams} from 'react-router-dom'

import {characterStore} from "../../stores/characterStore"


const Character = () => {
  const {getCharacter, character} = characterStore((state) => state)
  let id:string = useParams().id as string
  useEffect(
    () =>
    {
      getCharacter(id) 
      console.log(character)
    }, []
  )

  return (
    <div>
      {id}
    </div>
  )
}

export default Character
