// ビルド時のステージごとの名称
// const stages = {
  const stages: { [key: string]: string } = {
  LOCAL: "local",
  DEV: "dev",
  STG: "stg",
  PROD: "prod",
};

const getConfigJson = (
  region: string,
  userPoolId: string,
  userPoolWebClientId: string,
  apiEndPoint: string
) => {
  return {
    Auth: {
      region,
      userPoolId,
      userPoolWebClientId,
      storage: localStorage,
    },
    API: {
      endpoints: [
        {
          endpoint: apiEndPoint,
          region: region,
        },
      ],
    },
  };
};

// 各種設定値
export const serverConstants = {
  //環境情報
  AWS_CONFIG: getConfigJson(
    // todo nullやundefじゃだめなのか？
    process.env.REACT_APP_REGION ?? "",
    process.env.REACT_APP_USER_POOL_ID ?? "",
    process.env.REACT_APP_WEB_CLIENT_ID ?? "",
    process.env.REACT_APP_ENDPOINT ?? ""
  ),
  // コンソール出力フラグ（環境変数が開発環境系のものであればtrue）
  DEBUG_LOG:
    process.env.REACT_APP_STAGE?.trim() === stages.LOCAL ||
    process.env.REACT_APP_STAGE?.trim() === stages.DEV,
};

//システム管理者のユーザーグループ
export const adminUser = process.env.REACT_APP_AUTH_ADMIN_GROUP;

//パスワード再設定API照合用文字列
export const keyString = process.env.REACT_APP_KEY_STRING ?? "";
