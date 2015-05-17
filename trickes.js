// wait for
mmcore.waitFor(function () {
    return true
    /*statement to be checked*/
}, {
    isNotStoppedOnDocumentReadiness: true,
    timeout: 5000
}).done(function () {
    //body here
});


// wait foe Element Arrival
mmcore.waitForElementArrival(el).done(function () {
    //body here
});


//set cookie
mmcore.SetCookie('cookie_name', 1, 1, 1);
// set session cookie
mmcore.SetCookie('cookie_name', 1, 0, 1);
// set endless cookie
mmcore.SetCookie('cookie_name', 1, 365, 1);
// get cookie
mmcore.GetCookie('cookie_name', 1);
//remove cookie
mmcore.SetCookie('mm_payment_passed', -1, -1, 1);


// developer helper
function trackAction(name, val, attr) {
    //mmcore.$Action(name, val, attr);
    mmcore.SetAction(name, val, attr);
    mmcore.request();

    if (navigator.userAgent.toLowerCase().indexOf('msie') + 1) { //for IE<11
        console.log('Action Tracked: ' + name + ', ' + 1 + (attr ? (', ' + attr) : ''));
    } else {
        console.groupCollapsed('%cAction Track: ' + name, 'color:#009922');
        console.log('%cName: ' + name, 'color:#009922');
        console.log('%cValue: ' + val, 'color:#009922');
        console.log('%cAttribute: ' + attr, 'color:#009922');
        console.groupEnd();
    }
}

