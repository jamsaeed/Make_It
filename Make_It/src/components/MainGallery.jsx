import { useNavigate } from "react-router-dom"

const MainGallery = () => {

let navigate = useNavigate()

return (
  <>
<button className="CreateComic" onClick={()=> navigate("/create-your-comic")}>Create Your Comic</button>


  </>
)



}
export default MainGallery
