var WaitingDialog = {
    show: function(text) {
        cordova.exec (
            null,
            null,
            'WaitingDialog',
            'show',
            [text]
        );
    },
    hide: function() {
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
