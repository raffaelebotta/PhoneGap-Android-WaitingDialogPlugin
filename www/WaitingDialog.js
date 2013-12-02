var WaitingDialog = {
    show: function(successCallback, errorCallback) {
        cordova.exec (
            null,
            null,
            'WaitingDialog',
            'show'',
            [text]
        );
    },
    hide: function(successCallback, errorCallback) {
        cordova.exec (
            null,
            null,
            'WaitingDialog',
            'hide',
            []
        );
    }    
}

module.exports = WaitingDialog;
