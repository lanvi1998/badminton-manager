import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Login(){

const navigate = useNavigate()

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

const handleLogin = async ()=>{

const res = await fetch("/auth/login",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
email,
password
})
})

const data = await res.json()

if(res.ok){

localStorage.setItem("user",JSON.stringify(data.user))

alert("Đăng nhập thành công")

navigate("/dashboard")

}else{

alert(data.message)

}

}

return(

<div style={{textAlign:"center",marginTop:"100px"}}>

<h2>Đăng nhập</h2>

<input
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

<br/><br/>

<input
type="password"
placeholder="Mật khẩu"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>

<br/><br/>

<button onClick={handleLogin}>
Đăng nhập
</button>

<br/><br/>

<button onClick={()=>navigate("/")}>
⬅ Quay lại
</button>

</div>

)

}

export default Login