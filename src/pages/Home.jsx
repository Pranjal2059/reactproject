import axios from "axios"
import Card from "../components/Card"
import Navbar from "../components/Navbar"
import { useEffect, useState } from "react"


function Home(){
    // let name = "Manish"
    // const [name,setName] = useState("Manish")
    // setName("Pranjal")
    // const [age,setAge] = useState(22)
    // setAge(25)
    // const [data,setData] = useState(["Manish","Arpan","Pranjal"])
    // const [datas,setDatas] = useState({
    //     name : "Manish", 
    //     address : "Itahari"
    // })
    const [blogs,setBlogs] = useState([])
   async function fetchBlog(){
        let response = await axios.get("https://67dba9491fd9e43fe4755320.mockapi.io/blogs")
        if(response.status == 200){
            setBlogs(response.data)
        }else{
            console.log("something went wrong, error happened")
        }
    }
    useEffect(()=>{
        fetchBlog()
    },[])
    console.log(blogs)
    return(
    <>
    <Navbar />
<div className="flex flex-wrap pl-20">
    {
        blogs.map(function(blog){
            // console.log(blog,"This is blog inside map")
            return (
                <Card key={blog.id} haha={blog}  />
            )
        })
    }



</div>



    </>


    )
}

export default Home