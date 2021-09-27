import React,{ useState } from 'react';
import axios from 'axios'

export const PostReq = () => {
    const [id, setid] = useState("");
    const [title, settitle] = useState("");
    const [body, setbody] = useState("");

    const submit=async(e)=>{
        e.preventDefault();
        const request=await axios.post('https://jsonplaceholder.typicode.com/posts',{id,title,body});
        console.log(request.data);

    }
    return (
        <div>
            <form onSubmit={submit}>
                <br/><div className="userid">
                    <input type="text" placeholder="enter user id" value={id}
                     onChange={(e)=>{setid(e.target.value)}}/>
                </div><br/>
                <div className="title">
                    <input type="text" placeholder="enter title" value={title}
                    onChange={(e)=>{settitle(e.target.value)}}/>
                </div><br/>
                <div className="body">
                    <input type="text" placeholder="enter body" value={body}
                    onChange={(e)=>{setbody(e.target.value)}}/>
                </div><br/>
                <div className="submit">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

