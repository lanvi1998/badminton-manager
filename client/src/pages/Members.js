import { useEffect, useState } from "react";

function Members(){

const [members,setMembers] = useState([]);

useEffect(()=>{

fetch("http://localhost:5000/users")
.then(res=>res.json())
.then(data=>setMembers(data));

},[]);

return(

<div style={{textAlign:"center",marginTop:"50px"}}>

<h2>Danh sách thành viên</h2>

<table border="1" style={{margin:"auto",width:"500px"}}>

<thead>
<tr>
<th>STT</th>
<th>Tên</th>
<th>Email</th>
</tr>
</thead>

<tbody>

{members.map((m,index)=>(

<tr key={index}>
<td>{index+1}</td>
<td>{m.username || m.name}</td>
<td>{m.email || "-"}</td>
</tr>

))}

</tbody>

</table>

</div>

)

}

export default Members;