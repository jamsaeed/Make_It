import { Navigate, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import characters from "../data/characters.js"

const SavedComic = () => {
  const { id } = useParams()
  let navigate = useNavigate()

  const saveComic = JSON.parse(localStorage.getItem("SaveComic")) || []

  const findComic = saveComic.find(
    (savesComic) => savesComic.id === parseInt(id)
  )

  console.log(id, "id is correct")
  console.log(saveComic, "save is correct")
  console.log(findComic, "find is correct")

  return (
    <>
      <main>
        <button onClick={() => navigate("/")}>Back</button>
        <article>
          {findComic.panels.map((saved) => {
            return (
              <div className="panel" key={saved.id}>
                {saved.droppedCharacter.map((savedChar) => {
                  const CharObj = characters.find(
                    (character) => character.id === savedChar
                  )
                  return (
                    <img key={CharObj.id} src={CharObj.src} alt={CharObj.alt} />
                  )
                })}
                {saved.SpeechBubble && <p>{saved.SpeechBubble}</p>}
              </div>
            )
          })}
        </article>
      </main>
    </>
  )
}

export default SavedComic
