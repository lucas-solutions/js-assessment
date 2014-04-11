if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        return arr.indexOf(item);
    },

    sum : function(arr) {
        var result = 0;
        for (var i = 0, count = arr.length; i < count; i++) {
            result += arr[i];
        }
        return result;
    },

    remove : function(arr, item) {
        var copy = [];
        for (var i = 0, count = arr.length; i < count; i++) {
            if (arr[i] !== item) {
                copy.push(arr[i]);
            }
        }
        return copy;
    },

    removeWithoutCopy : function(arr, item) {
        for (var idx = arr.indexOf(item); idx > -1; idx = arr.indexOf(item)) {
            arr.splice(idx, 1);
        }
        return arr;
    },

    append : function(arr, item) {
        arr.push(item);
        return arr;
    },

    truncate : function(arr) {
        arr.pop();
        return arr;
    },

    prepend : function(arr, item) {
        arr.reverse();
        arr.push(item);
        arr.reverse();
        return arr;
    },

    curtail : function(arr) {
        arr.reverse();
        arr.pop();
        arr.reverse();
        return arr;
    },

    concat : function(arr1, arr2) {
        var arr = [];
        arr.push.apply(arr, arr1);
        arr.push.apply(arr, arr2);
        return arr;
    },

    insert : function(arr, item, index) {
        arr.splice(index, 0, item);
        return arr;
    },

    count : function(arr, item) {
        var count = 0;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === item) {
                count++;
            }
        }
        return count;
    },

    duplicates : function(arr) {
        var counter = {};
        for (var i = 0, count = arr.length; i < count; i++) {
            counter[arr[i]] = (counter[arr[i]] || 0) + 1;
        }
        var result = [];
        for (key in counter) {
            if (counter[key] > 1) {
                result.push(key);
            }
        }
        return result;
    },

    square : function(arr) {
        var square = [];
        for (var i = 0, count = arr.length; i < count; i++) {
            square.push(arr[i] * arr[i]);
        }
        return square;
    },

    findAllOccurrences : function(arr, target) {
        var res = [];
        for (var i = 0, count = arr.length; i < count; i++) {
            if (arr[i] === target) {
                res.push(i);
            }
        }
        return res;
    }
  };
});
