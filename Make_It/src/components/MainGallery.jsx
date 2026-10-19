import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
const MainGallery = () => {

let navigate = useNavigate()

const[savedComics , setSavedComics] = useState([])


useEffect(()=> {
  const saved = JSON.parse(localStorage.getItem('SaveComic')) || []
  setSavedComics(saved)
}, [])

return (
  <>
<button className="CreateComic" onClick={()=> navigate("/create-your-comic")}>Create Your Comic</button>

{savedComics.map((comic , index) => (
<div  className='comic-card'  onClick={() => navigate(`/comic/${comic.id}`)} key={comic.id}>
 Comic #{index + 1}
</div>
))}
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
