import { Navigate, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import characters from "../data/characters.js"


const SavedComic = () => {
  const { id } = useParams()


  const saveComic = JSON.parse(localStorage.getItem('SaveComic')) || []

   const findComic = saveComic.find((savesComic) => savesComic.id === parseInt(id))


  console.log(id ,'id is correct');
  console.log(saveComic ,'save is correct');
  console.log(findComic ,'find is correct');


  return (
    <>
      <main>

        <div className="panel"></div>
        <div className="Character-Rendering">
          {characters.map((character) => (
            <img src={character.src} alt={character.alt} />
          ))}

              </div>

      </main>
    </>
  )
}

export default SavedComic
