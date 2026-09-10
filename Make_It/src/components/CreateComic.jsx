import { Navigate, useNavigate } from "react-router-dom"
import { useState } from "react"

import bob from "../assets/Characters/bob.png"
import chad from "../assets/Characters/chad.png"
import chad1 from "../assets/Characters/chad1.png"
import chad2 from "../assets/Characters/chad2.png"
import coolAunt from "../assets/Characters/coolAunt.png"
import coolUnc from "../assets/Characters/coolunc.png"
import curly from "../assets/Characters/curly.png"
import curly1 from "../assets/Characters/curly1.png"
import dude from "../assets/Characters/dude.png"
import dude1 from "../assets/Characters/dude1.png"
import dude2 from "../assets/Characters/dude2.png"
import dude3 from "../assets/Characters/dude3.png"
import ella from "../assets/Characters/ella.png"
import genz from "../assets/Characters/genz.png"
import genz1 from "../assets/Characters/genz1.png"
import maria from "../assets/Characters/maria(.png"
import maria1 from "../assets/Characters/maria2.png"
import maria2 from "../assets/Characters/mariaO.png"
import mia from "../assets/Characters/mia.png"
import uncle from "../assets/Characters/nice-.png"
import uncle1 from "../assets/Characters/nice.png"
import sister from "../assets/Characters/sister.png"
import sister1 from "../assets/Characters/sister1.png"
import ui from "../assets/Characters/ui.png"
import BigUnc from "../assets/Characters/Uncle.png"

const CreateComic = () => {
  let navigate = useNavigate()

  // const [sticker, setSticker] = useState([]) // no need
  const [panels, setPanels] = useState([
    {
      id: 1,
      droppedCharacter: null,
    },
    {
      id: 2,
      droppedCharacter: null,
    },
    {
      id: 3,
      droppedCharacter: null,
    },
    {
      id: 4,
      droppedCharacter: null,
    },
    {
      id: 5,
      droppedCharacter: null,
    },
    {
      id: 6,
      droppedCharacter: null,
    },
    {
      id: 7,
      droppedCharacter: null,
    },
    {
      id: 8,
      droppedCharacter: null,
    },
    {
      id: 9,
      droppedCharacter: null,
    },
  ])
  // const droppedC = panels.find((dC) => dC.id === panels)// no need
  let characters = [
    { id: 1, src: bob, alt: "Bob" },

    {
      id: 2,
      src: chad,
      alt: "Chad",
    },

    {
      id: 3,
      src: chad1,
      alt: "Chad-Smiling",
    },
    {
      id: 4,
      src: chad2,
      alt: "Chad-Poker-Face",
    },
    {
      id: 5,
      src: coolAunt,
      alt: "Cool Aunty",
    },
    {
      id: 6,
      src: coolUnc,
      alt: "Cool Uncle",
    },
    {
      id: 7,
      src: curly,
      alt: "Curly-Hair-Girl",
    },
    {
      id: 8,
      src: curly1,
      alt: "Curly-Hair-Smiling",
    },
    {
      id: 9,
      src: dude,
      alt: "Dude",
    },
    {
      id: 10,
      src: dude1,
      alt: "dudeSmiling",
    },
    {
      id: 11,
      src: dude2,
      alt: "Dude-Smirking",
    },
    {
      id: 12,
      src: dude3,
      alt: "dude is angry",
    },
    {
      id: 13,
      src: ella,
      alt: "I'm too cool",
    },
    {
      id: 14,
      src: genz,
      alt: "I'm GenZ",
    },
    {
      id: 15,
      src: genz1,
      alt: "GenZ1",
    },
    {
      id: 16,
      src: maria,
      alt: "Maria",
    },
    {
      id: 17,
      src: maria1,
      alt: "Maria-angry",
    },
    {
      id: 18,
      src: maria2,
      alt: "Maria O",
    },
    {
      id: 19,
      src: mia,
      alt: "I am Not Maria",
    },
    {
      id: 20,
      src: uncle,
      alt: "I am the nice Uncle",
    },
    {
      id: 21,
      src: uncle1,
      alt: "Nice Uncle",
    },
    {
      id: 22,
      src: sister,
      alt: "Sister",
    },
    {
      id: 23,
      src: sister1,
      alt: "I'm the youngest sister",
    },
    {
      id: 24,
      src: ui,
      alt: "Ui",
    },
    {
      id: 25,
      src: BigUnc,
      alt: "the oldest Uncle",
    },
  ]

  const [dropped, setDropped] = useState(null)
  // to find which character was dropped find charecter id and which one wss dropped

  // const findCharacter = characters.find((charecter) => charecter.id === dropped)

  // const charObj = characters.find((charaObj) => charaObj.id === panel.droppedCharacter)

  return (
    <>
      <button onClick={() => navigate("/")}>Back</button>

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
                  panels.map((p)=> {
                    if (p.id === panel.id){
                      return{...p, droppedCharacter: character}
                    } else {
                      return p
                    }
                  })
                )
              }}
            >
              {panel.droppedCharacter && (
                <img src={charObj.src} alt={charObj.alt}
                 style={{width: "200px", height: "auto"}}/>
              )}
{console.log(charObj, "charObj")}
            </div>
          )
        })}
      </article>

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
      {/* <article className="comic">
        <div
          className="panel"
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            const character = parseInt(e.dataTransfer.getData("character"))
            setDropped(character)
          }}
        >
          {dropped && (
            <img
              src={findCharacter.src}
              alt={findCharacter.alt}
              style={{ width: "200px", height: "auto" }}
            />
          )}
          <p className="text top-left">Suddenly...</p>
          <p className="text bottom-right">...something amazing happened</p>
        </div>
        <div
          className="panel"
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            const characterX = parseInt(e.dataTransfer.getData("character"))
            setDropped(characterX)
          }}
        >
          {dropped && (
            <img
              src={findCharacter.src}
              alt={findCharacter.alt}
              style={{ width: "200px", height: "auto" }}
            />
          )}
          <p className="text top-left">Try resizing...</p>
          <p className="text bottom-right">...it's responsive</p>
        </div>
        <div className="panel">
          <p className="speech">A speech bubble</p>
        </div>
        <div className="panel"></div>
        <div className="panel"></div>
        <div className="panel"></div>
        <div className="panel"></div>
        <div className="panel"></div>
        <div className="panel">
          <p className="text bottom-right">THE END</p>
        </div>
      </article> */}
    </>
  )
}
export default CreateComic
