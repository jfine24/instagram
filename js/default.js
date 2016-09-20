

var instagram = angular.module('instagram', []);
      instagram.controller('instaCtrl', function ($scope, $http, $window){
        
        $scope.login = function() {
          var user = $scope.user;
          console.log(user);
          $http.post("/login/ + user", function(result){
          console.log(result);
        })
        }
        

        $scope.getUserFeed = function() {
          console.log("in function");
          $http.get("/getUserFeeds/1").success(function(data) {
          console.log("in function");
          $scope.results = data;
          });
        }

      });


  // $(function() {
  //   $.post("/default", null, function(result){
  //       if (result.error) {
  //         window.location.replace("/login.html");
  //       } else {
  //         $('#userName').html(result.userName);
  //         getUserFeeds(result.userID);
  //       }
  //   }, "json");
  // });

  // function getUserFeeds(id) {
  //   var br = document.createElement('br');
  //   var param = '/getUserFeeds/'+id;
  //   $.getJSON(param, function(result){
  //     if (result.error) {
  //       $('#main').html(result.error);
  //     } else {
  //       var feeds = document.getElementById('feeds');
  //       feeds.innerHTML = '';
  //       $.each(result, function(i, field) {
  //         feeds.appendChild(br);
  //         var d = document.createElement('div');
  //         d.id = "Block"+field["ImgID"];
  //         d.className = "block";
  //         var img = document.createElement('img');
  //         img.id = "Img"+ field["ImgID"];
  //         img.src = 'getImage/' + field["UserID"] + "/" + field["ImgLocation"];
  //         img.width = '400';
  //         d.appendChild(img);
  //         var p = document.createElement('p');
  //         p.innerHTML = field['ImgName'] + ' (' + field['PostDate'] + ')';
  //         d.appendChild(p);
  //         feeds.appendChild(d);
  //       });
  //     }      
  //   }, "json");    
  //  }