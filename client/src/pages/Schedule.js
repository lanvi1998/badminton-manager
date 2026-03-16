import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

function Schedule(){

const navigate = useNavigate()

const [date,setDate] = useState("")
const [time,setTime] = useState("")
const [place,setPlace] = useState("")
const [note,setNote] = useState("")

const [schedules,setSchedules] = useState(() => {
const saved = localStorage.getItem("schedules")
return saved ? JSON.parse(saved) : []
})


useEffect(()=>{
localStorage.setItem("schedules", JSON.stringify(schedules))
},[schedules])


const addSchedule = () => {

if(date === "" || time === "" || place === ""){
alert("Vui lòng nhập đầy đủ")
return
}

const newSchedule = {
date,
time,
place,
note
}

setSchedules(prev => [...prev,newSchedule])

setDate("")
setTime("")
setPlace("")
setNote("")
}


const deleteSchedule = (index)=>{
setSchedules(prev => prev.filter((_,i)=> i !== index))
}


return(

<div style={{textAlign:"center",marginTop:"50px"}}>

<h2>📅 Lịch đánh cầu</h2>

<input
type="date"
value={date}
onChange={(e)=>setDate(e.target.value)}
/>

<br/><br/>

<input
placeholder="Thời gian"
value={time}
onChange={(e)=>setTime(e.target.value)}
/>

<br/><br/>

<input
placeholder="Địa điểm"
value={place}
onChange={(e)=>setPlace(e.target.value)}
/>

<br/><br/>

<input
placeholder="Ghi chú"
value={note}
onChange={(e)=>setNote(e.target.value)}
/>

<br/><br/>

<button onClick={addSchedule}>
Thêm lịch
</button>

<br/><br/>

<table border="1" style={{margin:"auto",width:"700px"}}>

<thead>
<tr>
<th>STT</th>
<th>Ngày</th>
<th>Thời gian</th>
<th>Địa điểm</th>
<th>Ghi chú</th>
<th>Xóa</th>
</tr>
</thead>

<tbody>

{schedules.map((s,index)=>(

<tr key={index}>
<td>{index+1}</td>
<td>{s.date}</td>
<td>{s.time}</td>
<td>{s.place}</td>
<td>{s.note}</td>
<td>
<button onClick={()=>deleteSchedule(index)}>
X
</button>
</td>
</tr>

))}

</tbody>

</table>

<br/>

<button onClick={()=>navigate("/dashboard")}>
⬅ Quay về Dashboard
</button>

</div>

)

}

export default Schedule