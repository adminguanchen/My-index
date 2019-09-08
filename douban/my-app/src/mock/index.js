var mock = require("mockjs")


mock.mock("/shouye","get",require("./json/shouye.json"));
mock.mock("/luyou","get",require("./json/luyou.json"));
mock.mock("/moive","get",require("./json/moive.json"));
mock.mock("/moive1","get",require("./json/moive1.json"));
mock.mock("/moive2","get",require("./json/moive2.json"));
mock.mock("/moive3","get",require("./json/moive3.json"));
mock.mock("/goodmoive","get",require("./json/goodmoive.json"));
mock.mock("/goodbook","get",require("./json/goodbook.json"));
mock.mock("/moiveclass","get",require("./json/moiveclass.json"));
mock.mock("/tushu","get",require("./json/tushu.json"));
