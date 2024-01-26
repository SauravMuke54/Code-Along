import React, { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router'
import Avatar from 'react-avatar';
import { initSocket } from '../../Helpers/socket';
import { ACTIONS } from '../../Helpers/Actions';
import {toast,Toaster} from 'react-hot-toast'
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
import { BAPI } from '../../variables';
import { isAuthenticated } from '../../Helpers';


export default function Editor() {
    const roomId=useParams()['roomId']
    const param= window.location.href;
    
    // const location=useLocation()
    const [code,setCode]=useState("")
    const [users, setUsers] = useState([]);
    const socketRef=useRef(null)
    const editorRef=useRef(null)
    const navigate=useNavigate()

    const SaveData=async()=>{
        
        axios.post(`${BAPI}/add-data`,{
            roomId,
            code
        }).then((response)=>{
            // console.log(response.data)
        }).catch((err)=>{
            console.log(err)
        })


    }



    const GetData=async()=>{

        axios.post(`${BAPI}/get-data`,{
            roomId,
            
        }).then((response)=>{
            // console.log(response.data.data[0].code)
            setCode(response.data.data[0].code)
        }).catch((err)=>{
            console.log(err)
        })


    }

    useEffect(()=>{
        GetData()

    },[])
  

    useEffect(()=>{
       
        const init=async()=>{
            socketRef.current=await initSocket();
            // editorRef.current=socketRef.current
            socketRef.current.on('connect_error',(err)=>handleErrors(err))
            socketRef.current.on('connect_failed',(err)=>handleErrors(err))

            function handleErrors(e){
                console.log('socket error ',e)
                toast.error('Socket Connection Failed,try again later.')
              navigate('/dashboard')


            }
            socketRef.current.emit(ACTIONS.JOIN,{
                roomId,
                name:isAuthenticated().data.user.name
            })

            //Listening for joined event
            socketRef.current.on(ACTIONS.JOINED,({clients,name,socketId})=>{
                if(name!=isAuthenticated().data.user.name){
                    
                    toast.success(`${name} joined the room`)
                    console.log(`${name} joined the room`)
                }
               
               setUsers(clients)

               setCode(code)

               socketRef.current.emit(ACTIONS.SYNC_CODE,{
                socketId,
                code
               })


            })

            //Listeniing for disconnected
            socketRef.current.on(ACTIONS.DISCONNECTED,({socketId,name})=>{
                    toast.success(`${name} left the room`)
                    setUsers((prev)=>{
                        return prev.filter((client)=>
                            (client.socketId!=socketId)
                        )
                    })
            })


            socketRef.current.on(ACTIONS.CODE_CHANGE,({code})=>{
                editorRef.current.value=code
                setCode(code)
            })

            // editorRef.current.onchange(
            //     console.log("hi")
            // )
           
            

            
            



            


        }
        init()

        return ()=>{
            if (socketRef.current) {
               // socketRef.current.disconnect();
          
                // Remove event listeners
                socketRef.current.off(ACTIONS.JOINED);
                socketRef.current.off(ACTIONS.DISCONNECTED);
              }
        }
    },[])

    const handleChange=(code)=>{

        editorRef.current.value=code
        setCode(code)
    
        socketRef.current.emit(ACTIONS.CODE_CHANGE,{
            roomId,
            code
        })

       

    }


    const copyToClipboard = async () => {
        try {
          // Copy the 'param' state to the clipboard
          await navigator.clipboard.writeText(param);
          console.log('Text copied to clipboard');
        } catch (err) {
          console.error('Unable to copy text to clipboard', err);
        }
      };
    




    // useEffect(()=>{

    //     setUsers([location.state.user.name])

    // },[])

     

    

    
  return (
    <div className="container-fluid vh-100 overflow-auto"
    style={{
      backgroundColor: "#1c2333",
      marginTop: "55px",
      background: "linear-gradient(to right, #8e44ad, #3498db, #00cec9)",
    }}>
        <div className="row p-2">
        
            <div className="col-lg-2 col-sm-12 bg-dark border border-5 border-success mt-5 rounded-2 p-2" >
                <div className="row">
                   <center><h3 className='text-white p-3'>Connected Users</h3></center>
                <hr className='text-white'/>

                {
                    users.map((data,index)=>{
                        return  <Avatar className='m-1' data-toggle="tooltip" data-placement="top" title={data.name} name={data.name} size="50" round={true}/>
                    })
                }
                 </div>
                 <hr className='text-white '/>
                 <div className='row container-fluid'>
                    <center>
                 <button className="btn btn-info " onClick={copyToClipboard}>Share Link</button>
                 </center>
                 </div>
                

            </div>
           
            <div className="col-lg-10 col-sm-12"><textarea
  id="editor"
  className="mt-5 border border-5 border-primary rounded-2 bg-black w-100 text-warning"
  rows={20}
  value={code}  // Use the value state instead of editorRef.current
  onChange={(e) => handleChange(e.target.value)}
  ref={editorRef}
  
   // Add ref attribute to get a reference to the textarea
>
</textarea>
</div>

        
        </div>
        <center>
        <div className="  ">
                <button className="btn btn-success m-2 " onClick={SaveData}>Save Document</button>
                <button className="btn btn-danger m-2">Clear Screen</button>
        </div>
        </center>
           </div>
  )
}
