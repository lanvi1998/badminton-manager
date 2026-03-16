import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Login(){

const navigate = useNavigate()

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

const handleLogin = async ()=>{

try{

const res = await fetch("https://badminton-manager-3kmq.onrender.com/auth/login",{
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

console.log("Server response:",data)

if(res.ok){

localStorage.setItem("user",JSON.stringify(data.user))

alert("Đăng nhập thành công")

navigate("/dashboard")

}else{

alert(data.message || "Sai tài khoản hoặc mật khẩu")

}

}catch(error){

console.log(error)
alert("Không kết nối được server")

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