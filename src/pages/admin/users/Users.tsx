import { useEffect } from "react";
import { Selected } from "../../../types/props";


function Users({setSelectedLink, link}:Selected) {

    useEffect(() => {
        setSelectedLink(link);
      }, []);

  return (
    <div>Users</div>
  )
}

export default Users