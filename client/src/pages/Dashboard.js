import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Dashboard(){

const navigate = useNavigate();

useEffect(()=>{

const user = localStorage.getItem("user");

if(!user){
navigate("/");   // quay về trang login
}

},[]);

return(

<div style={{textAlign:"center",marginTop:"100px"}}>

<h1>🏸 Badminton Manager</h1>

<br/>

<button onClick={() => navigate("/players")}>
ĐĂNG KÍ THAM GIA
</button>

<br/><br/>

<button onClick={() => navigate("/schedule")}>
Lịch đánh cầu
</button>

<br/><br/>

<button onClick={() => navigate("/court")}>
Tiền sân
</button>

<br/><br/>

<button onClick={()=>navigate("/members")}>
Danh sách thành viên
</button>

<br/><br/>

<button onClick={()=>{
localStorage.removeItem("user")
navigate("/")
}}>
Đăng xuất
</button>

</div>

)

}

export default Dashboard;