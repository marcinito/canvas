import React,{useEffect,useState,useRef} from 'react'
import './css/style.css'
function App() {
  const [isDraw,setIsDraw]=useState(false)
  const canvasRef=useRef(null)
  const contextRef=useRef(null)
  useEffect(()=>{
const canvas=canvasRef.current
canvas.width=window.innerWidth
canvas.height=window.innerHeight

const context=canvas.getContext("2d")
contextRef.current=context

  },[])

const mouse={
  x:undefined,
  y:undefined
}

useEffect(()=>{
 
})
window.addEventListener("mousemove",(e)=>{
  mouse.x=e.offsetX
  mouse.y=e.offsetY

  })
  const start=()=>{
    
 
     setIsDraw(true)
if(isDraw){
  contextRef.current.beginPath()
  contextRef.current.lineTo(mouse.x,mouse.y)
  return
}
  }
  const move=()=>{
    let xx=mouse.x
    let yy=mouse.y
 if(isDraw){
  
contextRef.current.lineTo(xx,yy)

contextRef.current.stroke()


return



 }
  }
  const end=()=>{
    
  setIsDraw(false)
  }
  console.log(isDraw)
  return (
    <div>
      <canvas ref={canvasRef} 
      onTouchStart={start}
      onTouchMove={move}
      onTouchEnd={end}
      ></canvas>
    </div>
  )
}

export default App