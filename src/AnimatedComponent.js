import { motion } from "framer-motion"

export const AnimatedComponent = (props) => (
  <motion.div
    style={{
        background: 'linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%), linear-gradient(127deg, rgba(255,255,0,.8), rgba(255,255,0,0) 70.71%), linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%)',
        borderRadius: '10px', width:'100px', height: '100px', display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}
    animate={{ background: [
        'linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%), linear-gradient(127deg, rgba(255,255,0,.8), rgba(255,255,0,0) 70.71%), linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%)',

        'linear-gradient(217deg, rgba(255,255,0,.8), rgba(255,255,0,0) 70.71%), linear-gradient(127deg, rgba(150,255,66,.8), rgba(100,255,255,0) 70.71%), linear-gradient(336deg, rgba(10,55,0,.8), rgba(0,255,255,0) 70.71%)',
        
        'linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%), linear-gradient(127deg, rgba(255,255,0,.8), rgba(255,255,0,0) 70.71%), linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,255,0,0) 70.71%)'
    ]
    // , rotate: [360, 0, 0, 0, 0, 0 , 0]
    }}
    transition={{ 
        repeat: Infinity,
        type: 'spring',
        bounce: 1,
        duration: 30, 
        // mass: 0  
        // mass: props.y/2000  

    }}
  >
  </motion.div>
)