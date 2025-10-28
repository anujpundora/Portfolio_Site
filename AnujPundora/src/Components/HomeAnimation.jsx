import image from "../src/assets/image.png"
function Animation(){
    const spaceShip="../src/assets/image.png"
    const width=600;
    const height=400;
    const particles=Array.from({length:50},()=>({
        x:Math.random()* width - width/2,
        y:Math.random()* height - height/2,
        size:Math.random() * 3 - 1,
        delay:Math.random() * 3,
        duration : Math.random()* 3 + 2
    }))
    return(
        <div className="h-400 w-600 overflow-hidden ">
            <img 
            src={spaceShip}
            alt="Space SHip Image"
            className=" absolute "
            />
           
            {
                particles.map((part,i)=>{
                <div
                key={i}
                className=" absolute bg-white rounded-full "//Add keyframes later
                style={{
                    width:`${part.size}px`,
                    heigth:`${part.size}px`,
                    '--x':`${part.x}px`,
                    '--y':`${part.y}px`,
                    animationDelay:`${part.delay}s`,
                    animationDuration:`${part.duration}s`
                }}/>  
                })  
            }
        
        </div>
    )
}

export default Animation();