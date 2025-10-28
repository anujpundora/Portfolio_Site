import "./Animate.css"

function HomeAnimation(){

    const width=800;
    const height=600;
    const particles=Array.from({length:80},()=>({
        x:Math.random()*width - width/2,
        y:Math.random()* height - height/2,
        size:Math.random() * 30 + 1,
        delay:Math.random() * 3,
        duration : Math.random()* 3 + 2
    }))
    return(
        <div className="relative h-screen w-full overflow-hidden ">
           
            {
                particles.map((part,i)=>(
                <div
                key={i}
                className=" absolute bg-white rounded-full animate-moveToCenter"
                style={{
                    width:`${part.size}px`,
                    height:`${part.size}px`,
                    '--x':`${part.x}px`,
                    '--y':`${part.y}px`,
                    animationDelay:`${part.delay}s`,
                    animationDuration:`${part.duration}s`
                }}/>  
                ))  
            }
            <img src="src/assets/spaceJet.png"
             className=" absolute h-100 w-100 left-1/2  top-1/2 transform  animate-float"
             alt="Space Ship" />
        </div>
    )
}

export default HomeAnimation;