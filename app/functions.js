if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
        if (typeof fn === 'function' && typeof arr === 'object') {
            return fn.apply(this, arr);
        }
    },

    speak : function(fn, obj) {
        if (typeof fn === 'function' && typeof obj === 'object') {
            return fn.apply(obj);
        }
    },

    functionFunction : function(str) {
        return function (str2) {
            return str + ', ' + str2;
        };
    },

    makeClosures : function(arr, fn) {   
        var result = []
        for (var i = 0, count = arr.length; i < count; i++) {
            result.push((function() {
                var val = fn(arr[i]);
                return function() {
                    return val;
                };
            })());
        }
        return result;
    },

    partial : function(fn, str1, str2) {
        return (function () {
            var _that = this;
            var _fn = fn;
            var _str1 = str1;
            var _str2 = str2;
            return function (str3) {
                if (typeof fn === 'function') {
                    return fn.call(_that, _str1, _str2, str3);
                }
            };
        })();
    },

    useArguments : function() {
        var result = 0;
        for (var i = 0, count = arguments.length; i < count; i++) {
            result += arguments[i];
        }
        return result;
    },

    callIt : function(fn) {
        // slice doesn't seem defined for Array on Node JS
        var args = [];//arguments.slice(1, arguments.length - 1);
        for (var i = 1, count = arguments.length; i < count; i++) {
            args.push(arguments[i]);
        }
        if (typeof fn === 'function') {
            return fn.apply(this, args); 
        }
    },

    partialUsingArguments : function(fn) {
        return (function () {
            var _that = this;
            var _fn = fn;
            var _args = [];//Array.prototype.slice(arguments, 1, arguments.length - 1);
            for (var i = 1, count = arguments.length; i < count; i++) {
                _args.push(arguments[i]);
            }
            return function () {
                if (typeof _fn === 'function') {
                    var args = [];
                    // clone _args
                    args.push.apply(args, _args);
                    // add more arguments
                    args.push.apply(args, arguments);
                    return _fn.apply(_that, args);
                }
            };
        }).apply(this, arguments);
    },

    curryIt : function(fn) {
        return (function() {
            var _that = this;
            var _fn = fn;
            var _args = [];
            function curry() {
                _args.push.apply(_args, arguments);
                //curry.length = arguments.length;
                return (_args.length === 3) ? _fn.apply(_that, _args) : curry;
            }
            var args = [];//Array.prototype.slice(arguments, 1, arguments.length - 1);
            for (var i = 1, count = arguments.length; i < count; i++) {
                args.push(arguments[i]);
            }
            return curry.apply(this, args);
        })(this, arguments);
    }
  };
});
