import { Suspense } from "react";
import { Resource } from "../../types/resource";
import { Loading } from "../Loading/Loading";
import { UserProfile } from "../UserProfile/UserProfile";

export const UserProfileList = ({ resource }: { resource: Resource }) => (
  <>
    <Suspense fallback={<Loading />}>
      <UserProfile userId={1} resource={resource} />
    </Suspense>
    <Suspense fallback={<Loading />}>
      <UserProfile userId={2} resource={resource} />
    </Suspense>
    <Suspense fallback={<Loading />}>
      <UserProfile userId={3} resource={resource} />
    </Suspense>
  </>
);