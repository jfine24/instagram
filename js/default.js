

var instagram = angular.module('instagram', []);
      instagram.controller('instaCtrl', function ($scope, $http, $window){
        
        $scope.login = function() {

          $http.post("/login/", {userName: $scope.userName})
          .then(function (response) {
            var userID = response.data.userName;

            if(userID !== undefined)
            {
              $scope.loginError = null;
              $scope.getUserFeed(userID);
            }
            else {
              $scope.loginError = "Invalid Login";
              $scope.userName = "";
            }
              
            });
        }
        
        $scope.logout = function() {
          $scope.loginError = "Login to continue!";
          $scope.userName = "";
        }

        $scope.getUserFeed = function(id) {
          console.log(id);
          $http.get("/getUserFeeds/" + id).success(function(data) {
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