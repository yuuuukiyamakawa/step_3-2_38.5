// User型の定義
export type User = {
    "id": number;
    "user_name": string;
    "login_info_id": number;
    "login_status_id": number;
    "occupation_attributes_id": number;
    "grid_id": number;
    "details_id": number;
    // "id_1": number;
    "login_status": string;
    "status_color": string;
    // "id_2": number;
    "occupation_attributes_name": string;
    "occupation_attributes_image_id": number;
    // "id_3": number;
    "occupation_attributes_image": string;
    // "id_4": number;
    "user_x_grid": number;
    "user_y_grid": number;
    "island_grid_id": number;
    // "id_5": number;
    "island_name": string;
    "island_x_grid": number;
    "island_y_grid": number;
  };

  // "id":1,
  // "user_name":"ヒロ",
  // "login_info_id":1,
  // "login_status_id":1,
  // "occupation_attributes_id":1,
  // "grid_id":1,
  // "details_id":1,
  // "id_1":1.0,
  // "login_status":"オンライン",
  // "status_color":"#63E941",
  // "id_2":1,
  // "occupation_attributes_name":"AAA",
  // "occupation_attributes_image_id":1,
  // "id_3":1,
  // "occupation_attributes_image":"AAA.png",
  // "id_4":1,
  // "user_x_grid":-1.9424458914,
  // "user_y_grid":1.4817194188,
  // "island_grid_id":1,
  // "id_5":1,
  // "island_name":"Creative",
  // "island_x_grid":-1.5094083123,
  // "island_y_grid":1.6355047429},

  export type UserProfile = {
    "id": number;
    "user_name": string;
    "login_info_id": number;
    "login_status_id": number;
    "occupation_attributes_id": number;
    "grid_id": number;
    "details_id": number;
    "id_1": number;
    "sex_id": number;
    "age": number;
    "living_place_id": number;
    "birth_place_id": number;
    "industry": string;
    "occupation": string;
    "certification": string;
    "skill": string;
    "career": string;
    "self_introduction": string;
    "want": string;
    "spend_time_id": number;
    "by_when_id": number;
    "id_2": number;
    "sex_name": string;
    "id_3": number;
    "living_place_name": string;
    "id_4": number;
    "birth_place_name": string;
    "id_5": number;
    "spend_time": string;
    "id_6": number;
    "by_when": string;
  };

// "id":1;
// "user_name":"ヒロ";
// "login_info_id":1;
// "login_status_id":1;
// "occupation_attributes_id":1;
// "grid_id":1;
// "details_id":1;
// "id_1":1;
// "sex_id":1;
// "age":27;
// "living_place_id":40;
// "birth_place_id":35;
// "industry":"電気機械製造";
// "occupation":"システムエンジニア";
// "certification":"電気主任技術者";
// "skill":"C++、Java";
// "career":"\"2017~現在｜エレマック株式会社\"";
// "self_introduction":"最新技術を駆使して新しいプロダクト開発を行っています。一緒に挑戦しませんか？";
// "want":"最先端技術の開発プロジェクトに参加したい。";
// "spend_time_id":4;
// "by_when_id":1;
// "id_2":1;
// "sex_name":"男";
// "id_3":40;
// "living_place_name":"福岡県";
// "id_4":35;
// "birth_place_name":"山口県";
// "id_5":4;
// "spend_time":"12時間以上";
// "id_6":1;
// "by_when":"3年以内";