if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {

    var counter = function() {
        this._current = -1;
        this._running = false;
        this._handler = null;
    };

    counter.prototype.count = function (start, end) {
        this._running = true;
        this._current = start;
        console.log(this._current);
        var that = this;
        this._handler = setInterval(function () {
            if  (that._running && that._current < end) {
                that._current += 1;
                console.log(that._current);
            }
        }, 100);
        
        return this;
    };
            
    counter.prototype.cancel = function () {
        this._running = false;
        clearInterval(this._handler);
    };
    
    return new counter();
});