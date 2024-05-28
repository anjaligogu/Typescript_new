var Util;
(function (Util) {
    function concatKeysAndValues(obj) {
        var result = "";
        for (var key in obj) {
            
            result += key + ": " + obj[key] + ", ";
          
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
