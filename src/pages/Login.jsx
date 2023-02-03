import React from 'react'
import '@passageidentity/passage-elements/passage-auth';


const Login = () => {

 

  return (
    <div className="flex justify-center ">
      <div className=" container bg-emerald-900 justify-end rounded-[20px] w-fit ">
          <passage-auth app-id="uLld4TjJcUQW073uRWG7RTzN"></passage-auth>
      </div>
     
    </div>
  )
}

export default Login