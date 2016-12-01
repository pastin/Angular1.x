'use strict';

/* Filters */

/*angular.module('jthink.filters', []).
  filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    }
  }]);*/

  app.filter('sex', function() {
    return function(str) {
        if(str){
        	if(str=="0"){
        		return "保密";
        	}else if(str=="1"){
        		return "男";
        	}else{
        		return "女";
        	}
        }else{
            return str;
        }
    }
});
