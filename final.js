var Util;
(function (Util) {
    function concatKeysAndValues(obj) {
        var result = "";
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (typeof obj[key] === "object") {
                    result += concatKeysAndValues(obj[key]);
                }
                else {
                    result += key + ": " + obj[key] + ", ";
                }
            }
        }
        return result;
    }
    Util.concatKeysAndValues = concatKeysAndValues;
})(Util || (Util = {}));
var Data = {
    name: "Anjali",
    email: "anjali@123",
    city: "Telangana",
    state: "Telangana",
};
console.log(Util.concatKeysAndValues(Data));
