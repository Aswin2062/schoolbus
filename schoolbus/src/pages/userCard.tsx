import { DefaultSession } from "next-auth"


export  function UserCard( { user } : { user :DefaultSession["user"]})  {
    return (
      <div>
        <div>
          <p>current user</p>
          <h1>user name{user?.name}</h1>
          <p>user email{user?.email}</p>
        </div>
      </div>
    );

}