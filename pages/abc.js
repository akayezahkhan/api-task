//imports
import React, {useState,useEffect} from "react"

const Abc = () => {

const [dataStore, setDataStore] = useState(null)

const getData = ()=>{
    return fetch('https://random-data-api.com/api/users/random_user?size=9').then(
        (completeResponse)=>completeResponse.json()
    )
}
 
const setData =() =>{
    getData().then((data)=>{
        setDataStore(data)
        for(let i=0;i<data.length;i++){
            console.log(data[i])
        }
    })
}

useEffect( 
    ()=>{ setData() }
    , [] 
)

return <div>

    <nav className="flex justify-evenly h-16 min-w-[750px] max-w-full items-center bg-blue-500 text-white">
        <div className="text-bold text-[36px]">Users</div>
        <div className="w-96">
        <div className="items-center rounded-full bg-white hover:drop-shadow-lg 
        border-2 border-gray-200 
        my-1 p-2">
            <input  className="flex-grow bg-white text-gray-500 focus:outline-none flex justify-center"
            type = "text" placeholder = "         Search Users"/>
        </div>
        </div>

    </nav>        
    <hr/>

    <div className="min-w-[750px] max-w-full 
    flex flex-col justify-around
    md:grid md:grid-cols-2 sm:mx-4 md:mx-6 
    lg:mx-6 xl:mx-24 2xl:mx-28 lg:grid-cols-3 
    2xl:grid-cols-4 my-16">

        {dataStore?.map(({avatar, first_name, last_name, employment,id,gender,subscription})=>{
        return <div className="flex my-2 mx-1" key={id}>
            <div className="flex bg-slate-50  justify-start
            h-50 min-w-[310px] w-[380px] rounded-2xl space-x-2 p-4 px-5
            hover:bg-blue-50 hover:scale-105 hover:border-2 
            hover:cursor-pointer hover:shadow-lg 
            border border-gray-600 hover:border-blue-300"
        >
                <div className="flex justify-start h-28 w-44 rounded-full border overflow-hidden bg-white"><img  src={avatar} /></div>
                <div className="flex flex-col pr-2 h-50 justify-center w-full">
                    <div className="font-bold text-base"> {first_name + " " + last_name}</div>
                    <div className="text-sm">{employment['title']}</div>
                    <hr/>
                    <div className="grid grid-cols-2 pt-1" >
                        <button className="text-xs border rounded-full m-1 hover:border-black border-yellow-600 hover:bg-yellow-500 hover:text-white bg-yellow-200 text-black">{gender}</button>
                        <button className="text-xs border rounded-full m-1 hover:border-black border-green-600 hover:bg-green-500 hover:text-white bg-green-200 text-black">{subscription['plan']}</button>
                    </div>
                    <button className="text-xs border rounded-full m-1 hover:border-black border-red-600 hover:bg-red-500 hover:text-white bg-red-200 text-black">{employment['key_skill']}</button>
                </div>
                </div>
    </div>
})}
</div>

</div>
}

export default Abc;