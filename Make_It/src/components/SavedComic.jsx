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

  if (!findComic){
    return (
      <main>
        <button onClick={() => navigate("/")}>Back</button>
        <p>Comic not found.</p>
      </main>
    )
  }

  console.log(id, "id is correct")
  console.log(saveComic, "save is correct")
  console.log(findComic, "find is correct")

  return (
    <>
      <main>
        <button onClick={() => navigate("/")}>Back</button>
        <article className="comic">
          {findComic.panels.map((saved) => {
            return (
              <div className="panel" key={saved.id}>
                {saved.droppedCharacter.map((savedChar) => {
                  const CharObj = characters.find(
                    (character) => character.id === savedChar
                  )
                  if (!CharObj) return null
                  return (
                    <img key={CharObj.id} src={CharObj.src} alt={CharObj.alt} style={{ width: "143px", height: "auto" }}/>
                  )
                })}
                {saved.SpeechBubble && <p className="speech">{saved.SpeechBubble}</p>}
              </div>
            )
          })}
        </article>
      </main>
    </>
  )
}

export default SavedComic
