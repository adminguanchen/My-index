var mock = require("mockjs")


mock.mock("/shouye","get",require("./json/shouye.json"));
mock.mock("/luyou","get",require("./json/luyou.json"));
mock.mock("/moive","get",require("./json/moive.json"));
mock.mock("/goodmoive","get",require("./json/goodmoive.json"));

