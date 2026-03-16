import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Register(){

const navigate = useNavigate()

const [name,setName] = useState("")
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

const handleRegister = async ()=>{

// kiểm tra tên
if(name.trim() === ""){
alert("Tên không được để trống")
return
}

// kiểm tra email
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
if(!emailRegex.test(email)){
alert("Email không hợp lệ")
return
}

// kiểm tra mật khẩu
if(password.length < 6){
alert("Mật khẩu phải ít nhất 6 ký tự")
return
}

try{

const res = await fetch("https://badminton-manager-3kmq.onrender.com/auth/register",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
name,
email,
password
})
})

const data = await res.json()

if(res.ok){

alert("Đăng ký thành công")
navigate("/login")

}else{

alert(data.message || "Đăng ký thất bại")

}

}catch(err){

alert("Không kết nối được server")

}

}

return(

<div style={{textAlign:"center",marginTop:"100px"}}>

<h2>Đăng ký tài khoản</h2>

<input
placeholder="Tên"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<br/><br/>

<input
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

<br/><br/>

<input
type="password"
placeholder="Mật khẩu (ít nhất 6 ký tự)"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>

<br/><br/>

<button onClick={handleRegister}>
Đăng ký
</button>

<br/><br/>

<button onClick={()=>navigate("/login")}>
⬅ Quay lại đăng nhập
</button>

</div>

)

}

export default Register