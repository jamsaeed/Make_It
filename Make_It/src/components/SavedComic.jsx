import { Navigate, useNavigate } from "react-router-dom"
import { useState, useEffect, useRef } from "react"
import { useParams } from "react-router-dom"
import characters from "../data/characters.js"
import html2canvas from "html2canvas"

// download the comic as an image

const exportAsImage = async (element, imageFileName) => {
  const canvas = await html2canvas(element)
  const image = canvas.toDataURL("image/png", 1.0)
  downloadImage(image, imageFileName)
}

const downloadImage = (blob, fileName) => {

  const fakeLink = window.document.createElement('a')
  fakeLink.style = 'display:none;'
  fakeLink.download = fileName
  fakeLink.href = blob

  document.body.appendChild(fakeLink)
  fakeLink.click()
  document.body.removeChild(fakeLink)
  fakeLink.remove()
}
///

const SavedComic = () => {
 //for downloading
const exportRef = useRef()

  const { id } = useParams()
  let navigate = useNavigate()

  const saveComic = JSON.parse(localStorage.getItem("SaveComic")) || []

  const findComic = saveComic.find(
    (savesComic) => savesComic.id === parseInt(id)
  )

  if (!findComic) {
    return (
      <main>
        <button onClick={() => navigate("/")}>Back</button>
        <p>Comic not found.</p>
      </main>
    )
  }


  // console.log(id, "id is correct")
  // console.log(saveComic, "save is correct")
  // console.log(findComic, "find is correct")










  return (
    <>
      <main>
        <button className="export" onClick={()=> exportAsImage(exportRef.current, "Comic-downloaded")}> Download</button>

        <button onClick={() => navigate("/")}>Back</button>

        <div className="exporting">
          <div ref={exportRef}>
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
                      <img
                        key={CharObj.id}
                        src={CharObj.src}
                        alt={CharObj.alt}
                        style={{ width: "143px", height: "auto" }}
                      />
                    )
                  })}
                  {saved.SpeechBubble && (
                    <p className="speech">{saved.SpeechBubble}</p>
                  )}
                </div>
              )
            })}
          </article>
          </div>
        </div>
      </main>
    </>
  )
}

export default SavedComic
