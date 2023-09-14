import MiddleTop from "./MiddleTop"
import MiddleSec2 from "./MiddleSec2"
import MiddleSec3 from "./MiddleSec3"
export default function Middle(){
  return(
    <>
    <div className=" flex flex-col px-0 mx-0">
        <MiddleTop
        name= "Jeremy"
        />
        <MiddleSec2/>
        <MiddleSec3/>

    </div>
      
    </>
  )
}