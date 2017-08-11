module.exports = {
    test: function (successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "RFR900", "test", [1]);
    }
};







