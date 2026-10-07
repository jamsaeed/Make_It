import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
const MainGallery = () => {

let navigate = useNavigate()

const[comics , setComics] = useState()

return (
  <>
<button className="CreateComic" onClick={()=> navigate("/create-your-comic")}>Create Your Comic</button>


  </>
)



}
export default MainGallery
