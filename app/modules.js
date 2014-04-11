if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
    var module = function(greeting, name) {
        this.greeting = greeting;
        this.name = name;
    };
    
    module.prototype.sayIt = function () {
        return this.greeting + ', ' +  this.name;
    };
    
    return {
        createModule : function(str1, str2) {
            return new module(str1, str2);
        }
    };
});

