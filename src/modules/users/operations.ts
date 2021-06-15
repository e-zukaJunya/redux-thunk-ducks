export const fetchUsersList = () => {
  return async (dispatch: any) => {
    let usersList: string[] = [];
    return new Promise((resolve) => {
      //1秒後に実行する処理
      setTimeout(() => {
        console.log("2番目(1秒後に実行)");
        //無事処理が終わったことを伝える
        resolve(usersList);
      }, 500);
    }).then(() => {
      // 処理が無事終わったことを受けとって実行される処理
      console.log("3番目");
    });
    // return db.collection('users').get()
    //     .then(snapshot => {
    //         for (let i = 0 ; i < snapshot.size; i = (i + 1) | 0) {
    //             const doc = snapshot.docs[i];
    //             const data = doc.data();
    //             usersList.push({
    //                 icon: data.icon
    //                 uid: doc.id,
    //                 username: data.username,
    //             })
    //         }
    //         dispatch(fetchUsersListAction(usersList))
    //     })
  };
};
