import { Navigate, useNavigate } from "react-router-dom"
import { useState } from "react"
import characters from "../data/characters.js"

const CreateComic = () => {
  let navigate = useNavigate()

  const [panels, setPanels] = useState([
    {
      id: 1,
      droppedCharacter: [],
      SpeechBubble: "",
    },
    {
      id: 2,
      droppedCharacter: [],
      SpeechBubble: "",
    },
    {
      id: 3,
      droppedCharacter: [],
      SpeechBubble: "",
    },
    {
      id: 4,
      droppedCharacter: [],
      SpeechBubble: "",

    },
    {
      id: 5,
      droppedCharacter: [],
      SpeechBubble: "",

    },
    {
      id: 6,
      droppedCharacter: [],
      SpeechBubble: "",

    },
    {
      id: 7,
      droppedCharacter: [],
      SpeechBubble: "",

    },
    {
      id: 8,
      droppedCharacter: [],
      SpeechBubble: "",

    },
    {
      id: 9,
      droppedCharacter: [],
      SpeechBubble: "",

    },
  ])


  const saveComic = () => {
     const existingComic = JSON.parse(localStorage.getItem('SaveComic')) || []
     const newComic = {id: Date.now(), panels: panels }
    // here can be written any names it doesn't have to be SaveComic
     localStorage.setItem('SaveComic', JSON.stringify([...existingComic, newComic]))
      console.log('button was clicked');
      navigate('/')

  }

  return (
    <>
      <button onClick={() => navigate("/")}>Back</button>

      <button className="save-comic"  onClick={saveComic}>Save Comic</button>

      <article className="comic">
        {panels.map((panel) => {
          const charObj = characters.find(
            (charaObj) => charaObj.id === panel.droppedCharacter
          )
          return (
            <div
              key={panel.id}
              className="panel"
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                const character = parseInt(e.dataTransfer.getData("character"))

                setPanels(
                  panels.map((p) => {
                    if (p.id === panel.id) {
                      return {
                        ...p,
                        droppedCharacter: [...p.droppedCharacter, character],
                      }
                    } else {
                      return p
                    }
                  })
                )
              }}
            >

              {panel.droppedCharacter.map((charId, index) => {
                const CharacterObject = characters.find((c) => c.id === charId)
                if (!CharacterObject) return null
                return (
                  <img
                    key={index}
                    src={CharacterObject.src}
                    alt={CharacterObject.alt}
                    style={{ width: "145px", height: "auto" }}
                  />
                )
              })}

            <input
            type="text"
            placeholder="Add your dialogue..."
            className="speech"
            value={panel.SpeechBubble}
            onChange={(e) =>
              setPanels(
                panels.map((p)=>{
                  if(p.id === panel.id){
                    return {...p, SpeechBubble: e.target.value}
                  } else {
                    return p
                  }
                })
              )
            }

            />
            {panel.SpeechBubble && <p className="speech">{panel.SpeechBubble}</p>}

            </div>
          )
        })}
      </article>

      <div className="footerNav-bar">
        {" "}
        Drag The Characters
        <div className="Character-Rendering">
          {characters.map((character) => (
            <img
              draggable="true"
              key={character.id}
              src={character.src}
              alt={character.alt}
              onDragStart={(e) =>
                e.dataTransfer.setData("character", character.id)
              }
            />
          ))}
        </div>
      </div>
    </>
  )
}
export default CreateComic
