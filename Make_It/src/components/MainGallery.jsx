import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
const MainGallery = () => {

let navigate = useNavigate()

const[savedComics , setSavedComics] = useState([])


useEffect(()=> {
  const saved = JSON.parse(localStorage.getItem('savedComics')) || []
  setSavedComics(saved)
}, [])

return (
  <>
<button className="CreateComic" onClick={()=> navigate("/create-your-comic")}>Create Your Comic</button>


  </>
)



}
export default MainGallery

// // Save data
// localStorage.setItem("key", "value");

// // Retrieve data
// const value = localStorage.getItem("key");

// // Remove data
// localStorage.removeItem("key");
