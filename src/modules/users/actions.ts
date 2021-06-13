export const FETCH_USERS = "FETCH_USERS";
export const fetchUsersListAction = (userList: string[]) => {
  return {
    type: "FETCH_USERS",
    payload: userList,
  };
};
