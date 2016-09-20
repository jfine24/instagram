/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\admin\\Documents\\SSA 4Week\\web\\instagram\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\admin\\Documents\\SSA 4Week\\web\\instagram\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	var instagram = angular.module('instagram', []);
	instagram.controller('instaCtrl', function ($scope, $http) {
	
	  $scope.getUserFeed = function () {
	    console.log("in function");
	    $http.get("/getUserFeeds/1").success(function (data) {
	      console.log("in function");
	      $scope.results = data;
	    });
	  };
	});
	// function getUserFeeds(userID) {
	//   var xhttp = new XMLHttpRequest();
	//   var feedUrl= "http://localhost:3000/getUserFeeds/" + userID + "/";
	
	//   console.log(feedUrl);
	//   console.log(xhttp.responseText);
	
	//   xhttp.onreadystatechange = function() {
	//  if (xhttp.readyState === 4 && xhttp.status === 200) { 
	//      var obj = JSON.parse(xhttp.responseText);        
	//      for (var i = 0; i < obj.length; i++) {           
	//             // console.log(i + " -> " + obj[i]['tweetText']);   
	//             var cp =  document.createElement('span');            
	//             var userTweethref='http://localhost:8080/getUserTweets/' + obj[i]['authorID']  + '/';    
	//             console.log("userTweethref  -> " + userTweethref);            
	//             cp.innerHTML = '<a id="userTweets" onclick="window.open(\'' + userTweethref + '\', \'pop\', \'top=50,left=500,width=400,height=600,resizable=1,scrollbars=1,titlebar=1\');"><u>' +  obj[i]['UserName'] + '</u></a>' + 
	//             '&nbsp;&nbsp;&nbsp;' + obj[i]['lastupdated'] + '<br/>' + obj[i]['tweetText'] + '<br/>' +
	//             '<button id="replyBtn' +  obj[i]['tweetID'] + '" onclick="getReplies(' + obj[i]['tweetID'] + ')">Replies</button><br/><div id="replies' +  obj[i]['tweetID'] + '""></div><br/>';
	//              if (i % 2 != 0) {
	//                  cp.style['background-color'] = '#d3d3d3';
	//          } 
	//         document.getElementById("feeds").appendChild(cp);   
	//         cp = null;
	//         hasReplies(obj[i]['tweetID']);  
	//       } 
	//     } 
	//   };
	//   xhttp.open("GET", feedUrl, true);
	//   xhttp.send();
	// }
	
	// render((
	//     <Main/>
	// ), document.getElementById('main'));
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\admin\\Documents\\SSA 4Week\\web\\instagram\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "main.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map