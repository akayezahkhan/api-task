const getData = () => {
    return fetch(
      "https://random-data-api.com/api/users/random_user?size=6"
    ).then((completeResponse) => completeResponse.json());
  };


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

export {alpha,getData}