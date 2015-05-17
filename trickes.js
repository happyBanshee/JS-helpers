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


