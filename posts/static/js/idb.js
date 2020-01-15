var post = "";
dbPromise.then(function (db) {
    var tx = db.transaction('feeds', 'readonly');
    var feedsStore = tx.objectStore('feeds');
    return feedsStore.openCursor();
}).then(function logItems(cursor) {
    if (!cursor) {
        document.getElementById('offlinedata').innerHTML = post;
        return;
    }
    for (var field in cursor.value) {
        if (field == 'fields') {
            feedsData = cursor.value[field];
            for (var key in feedsData) {
                if (key == 'title') {
                    var title = '<h3>' + feedsData[key] + '</h3>';
                }
                if (key == 'author') {
                    var author = feedsData[key];
                }
                if (key == 'body') {
                    var body = '<p>' + feedsData[key] + '</p>';
                }
            }
            post = post + '<br>' + title + '<br>' + author + '<br>' + body + '<br>';
        }
    }
    return cursor.continue().then(logItems);
});