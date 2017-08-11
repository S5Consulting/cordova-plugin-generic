module.exports = {
    open: function (paramters) {
        cordova.exec(successCallback, errorCallback, "RFR900", "open", [1]);
    }
};
