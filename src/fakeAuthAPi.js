export const Users = [
    {
      username: "ajith",
      password: "billava"
    },
    {
      username: "amit",
      password: "billava"
    },
    {
      username: "pranit",
      password: "karkera"
    }
  ];

  
  const findUser = (username) =>{
      return Users.find(user=>user.username===username)
  }

  export const fakeAuthAPI = (username,password) =>{
      return new Promise((resolve,reject)=>{
        const user = findUser(username);
        if(user===undefined){
            resolve({success:false,staus:401,errorMessage:"User Not found"})
        }
        if(user.password!==password){
            resolve({success:false,status:401,errorMessage:"Password is incorrect"})
        }
        if(user!==undefined && user.password===password){
            resolve({success:true,status:200})
        }
        // reject({success:false,status:401})
      })
  }