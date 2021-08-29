import { Resource } from "../../types/resource";
import { UserId } from "../../types/userType";

export const UserProfile = ({ userId, resource }: { userId: UserId, resource: Resource }) => {
    const data = resource[userId].read()
  
    return (
      <>
        <h1>{data.name}</h1>
        <h2>{data.html_url}</h2>
      </>
    );
  };