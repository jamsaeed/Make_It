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
          
        </div>
      </main>
    </>
  )
}

export default SavedComic
