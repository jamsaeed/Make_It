import { Navigate, useNavigate } from "react-router-dom"
import { useState } from "react"
import { useParams } from "react-router-dom"
import characters from "../data/characters.js"


const SavedComic = () => {
  const { id } = useParams()

  return (
    <>
      <main>
        <div className="savedcomicpage">
          {panels.map((panel) => {
            const savedObj = characters.find(
              (obj) => obj.id === panel.droppedCharacter
            )
          })}
        </div>
      </main>
    </>
  )
}

export default SavedComic
