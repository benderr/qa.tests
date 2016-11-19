function createIt(title, fn) {
    var t = it(title, fn);
    t.reportData = fn(function () {
    });
}

module.exports = createIt;