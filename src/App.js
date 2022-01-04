import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import { AnimatedComponent } from "./AnimatedComponent";
import useStayAwake from "use-stay-awake";


const ENDPOINT = "http://192.168.2.195:5005";


function App() {
  const [response, setResponse] = useState("");
  const [dht, setDht] = useState(null);
  const [zzz, setZzz] = useState(false);
  const device = useStayAwake();
  useEffect(() => {
    device.preventSleeping();
    const socket = socketIOClient(ENDPOINT);
    socket.on("connect", () => {
      setResponse("- Connected to socketio server @ http://192.168.2.195:5005");
    });
    
    socket.on("disconnect", () => {
        console.log("client disconnected");
    });

    socket.on("dht_message", (data) => {
      setDht(data);
    });

  }, []);

  return (
  <>
    {/* <div style={{width: '450px', position: 'fixed', zIndex: 10, top: 20, left: 20}}>{response}</div> */}
    {/* <div style={{display:'flex', position: 'fixed', flexDirection: 'row', zIndex: 10, top: 40}}>
      <div style={{width: '200px'}}>dht_message</div>
      <div>{dht ? dht.time.slice(0, -3) : ""}</div>
    </div> */}
    <div style={{
      height: '20px', 
      width: '20px', 
      display:'flex', 
      position: 'fixed', 
      flexDirection: 'row', 
      zIndex: 10, 
      borderRadius: '50px',
      right: 40,
      top: 40,
      backgroundColor: '#7CFC00',
    }}>{zzz ? "zzz" : ""}</div>

    {/* <div style={{
      height: '50px', 
      width: '200px', 
      display:'flex', 
      position: 'fixed', 
      flexDirection: 'row', 
      zIndex: 10, 
      // borderRadius: '0 200px 0 0',
      left: 0,
      bottom:0,
      background: 'linear-gradient(#ffffff, #ff9393)'
    }}>
    </div>
    <div style={{
      width: '200px', 
      height: '50px', 
      display:'flex', 
      position: 'fixed', 
      flexDirection: 'row', 
      zIndex: 10, 
      right: 0,
      bottom:0,
      // borderRadius: '200px 0 0 0',
      background: 'linear-gradient(#ffffff, #ff9393)'
    }}>
    </div> */}

    <div style={{          
      width: '100%', 
      height: '100%', display:'flex', flexDirection: 'column', alignItems: 'center'}}>
        <div style={{
          width: '100%', 
          height: '100%',
          // border: '1px solid black',
          display:'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center'}}>
          <AnimatedComponent 
            // y={500 - parseInt(dht ? dht.time.slice(9, -3) : 0)}
          />
        </div>
    </div>
  </>
  );
}

export default App;