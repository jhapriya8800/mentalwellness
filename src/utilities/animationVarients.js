const fadeIn = (direct,delay)=>{
    return {
        hidden:{
            y:direct === 'up'? 40 : direct === 'down' ? -40:0,
            opacity :0,
            x:direct==='left'?40:direct==='right'? -40 :0,
        },
        show:{
            y:0,
            x:0,
            opacity:1,
            transition:
            {
                type:"tween",
                duratio:1.2,
                delay:delay,
                else:[0.25,0.25,0.25,0.75]
            }
        }
    }

}