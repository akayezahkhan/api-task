function alpha(){

    let p = new Promise((resolve)=>{
        setTimeout(
            ()=>{
            resolve("data from alpha")
            }
        , 5000)
    })

    return p.then(
        (data)=>{
            return data
        }
    )

}

export {alpha}