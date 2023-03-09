
import { useSession, signIn,signOut } from "next-auth/react";
import { UserCard } from "./userCard";

export default function Login(){
    const { data: session } = useSession();

 if(session) {
      return (
        <>
          <button onClick={() => signOut} type="button" className="">
            {" "}
            sign out of google
          </button>
          <UserCard user={session?.user} />
        </>
      );
    } else {
      return (
        <>
          <button onClick={() => signIn} type="button" className="">
            {" "}
            sign in to google
          </button>
        </>
      );
    }

}