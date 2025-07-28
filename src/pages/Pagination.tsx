import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import {
  DATA_GARBAGE_TIME,
  DATA_STALE_TIME,
  getUsersApi,
  USERS_LIMIT,
} from "../utils/constansts";
import ErrorComponent from "../components/ErrorComponent";
import { UserListResponse } from "../interfaces/IUsers";
import UsersComponent from "../components/UsersComponent";
import Loading from "../components/Loading";

const Pagination = () => {
  const [skip, setSkip] = useState(0);

  const { isLoading, data: usersList, error, isFetching } = useQuery<UserListResponse>({
    queryKey: ["users", skip],
    queryFn: () =>
      fetch(getUsersApi(USERS_LIMIT, skip)).then((res) => {
        if (!res.ok) throw new Error("Failed to fetch users");
        return res.json();
      }),
    staleTime: DATA_STALE_TIME,
    gcTime: DATA_GARBAGE_TIME,
  });

  const handlePrev = () => {
    setSkip((prev) => Math.max(0, prev - USERS_LIMIT));
  };

  const handleNext = () => {
    if (usersList && usersList.total > skip + USERS_LIMIT) {
      setSkip((prev) => prev + USERS_LIMIT);
    }
  };

  return (
    <div className="m-6">
      {isLoading || isFetching ? (
        <Loading />
      ) : error ? (
        <ErrorComponent errorMessage={error?.message} />
      ) : (
        <>
          {usersList?.users && <UsersComponent users={usersList.users} />}

          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={handlePrev}
              disabled={skip === 0}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
            >
              Previous
            </button>
            <p className="p-[10px]">{(skip / USERS_LIMIT) + 1}</p>
            <button
              onClick={handleNext}
              disabled={usersList && skip + USERS_LIMIT >= usersList.total}
              className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Pagination;
