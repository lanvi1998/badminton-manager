import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function PlayerManager(){

const navigate = useNavigate();

const [players,setPlayers] = useState([]);
const [name,setName] = useState("");


useEffect(()=>{

const savedPlayers = localStorage.getItem("players");

if(savedPlayers){
setPlayers(JSON.parse(savedPlayers));
}

},[]);


const addPlayer = () => {

if(name==="") return;

const newPlayers = [...players,name];

setPlayers(newPlayers);

localStorage.setItem("players",JSON.stringify(newPlayers));

setName("");

};


const deletePlayer = (index) => {

const newPlayers = players.filter((p,i)=> i !== index);

setPlayers(newPlayers);

localStorage.setItem("players",JSON.stringify(newPlayers));

};


return(

<div style={{textAlign:"center",marginTop:"50px"}}>

<h2>Quản lý người chơi</h2>

<input
placeholder="Nhập tên người chơi"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<button onClick={addPlayer}>Thêm</button>

<br/><br/>

<table border="1" style={{margin:"auto",padding:"10px"}}>

<thead>
<tr>
<th>STT</th>
<th>Tên</th>
<th>Hành động</th>
</tr>
</thead>

<tbody>

{players.map((p,index)=>(

<tr key={index}>
<td>{index+1}</td>
<td>{p}</td>

<td>
<button onClick={()=>deletePlayer(index)}>
Xoá
</button>
</td>

</tr>

))}

</tbody>

</table>

<br/><br/>

<button onClick={()=>navigate("/dashboard")}>
⬅ Quay về Dashboard
</button>

</div>

)

}

export default PlayerManager;