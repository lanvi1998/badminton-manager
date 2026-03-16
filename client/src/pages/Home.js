import { useNavigate } from "react-router-dom"

function Home(){

const navigate = useNavigate()

return(

<div style={{textAlign:"center",marginTop:"100px"}}>

<h2>🏸 Badminton Manager</h2>

<button onClick={()=>navigate("/login")}>
Đăng nhập
</button>

<br/><br/>

<button onClick={()=>navigate("/register")}>
Đăng ký
</button>

</div>

)

}

export default Home