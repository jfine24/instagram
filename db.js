var sqlite3 = require('sqlite3');
var db = new sqlite3.Database("insta.sqlite", sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE);
var fs = require('fs');

exports.getUserIdByName = getUserIdByName;
function getUserIdByName(userName) {
        return new Promise(
        (resolve, reject) => {          
            db.all("SELECT UserID FROM User WHERE UserName = ?", userName,
                function (err, rows) {
                    if (err) {
                        console.log(err);
                        reject(err);
                        return false;
                    }                    
                    resolve(rows);
                });
        }).then(
        (rows) => {
            var jsonrows = JSON.stringify(rows);
            console.log("db.js jsonrows " + jsonrows);
            return rows[0].UserID;
        }
        ).catch(
        (err) => {
            console.log(err);
        });
}

exports.uploadImage = uploadImage;
function uploadImage(img) {

    var image = JSON.parse(img);
    //console.log("inside upload image " + image.imgName);

    return new Promise(
        (resolve, reject) => {          
            db.all("INSERT INTO Image (ImgName, ImgCaption, ImgLocation, UserID) VALUES (?, ?, ?, ?)", image.imgName, image.imgCaption, image.imgLocation, image.userID,
                function (err, rows) {
                    if (err) {
                        console.log(err);
                        reject(err);
                        return false;
                    }         
                    resolve(rows);
                });
        }).then(
        (rows) => {
            console.log("userImages rows: " + rows);
            var jsonrows = JSON.stringify(rows);
            console.log("userImages json: " + jsonrows);
            return jsonrows;
        }
        ).catch(
        (err) => {
            console.log(err);
        });
}

exports.getImage = getImage;
function getImage(location, UserID) {
    console.log(__dirname);
    return fs.readFileSync(__dirname + "/Images/" + UserID + "/" + location);
}

// function getImagePathByID(imgID) {
//         return new Promise(
//         (resolve, reject) => {          
//             db.all("SELECT ImgLocation FROM Image WHERE ImgID = ?", userName,
//                 function (err, rows) {
//                     if (err) {
//                         console.log(err);
//                         reject(err);
//                         return false;
//                     }                    
//                     resolve(rows);
//                 });
//         }).then(
//         (rows) => {
//             var jsonrows = JSON.parse(JSON.stringify(rows));
//             return jsonrows[0].UserID;
//         }
//         ).catch(
//         (err) => {
//             console.log(err);
//         });
// }

exports.getUserImages = getUserImages;
function getUserImages(userID) {
        return new Promise(
        (resolve, reject) => {          
            db.all("SELECT DISTINCT i.ImgID, i.UserID, i.ImgCaption, i.ImgName, I.PostDate, i.ImgLocation FROM Image as i WHERE i.UserID = ? ORDER BY i.PostDate desc", userID,
                function (err, rows) {
                    if (err) {
                        console.log(err);
                        reject(err);
                        return false;
                    }         
                    resolve(rows);
                });
        }).then(
        (rows) => {
            console.log("userImages rows: " + rows);
            var jsonrows = JSON.stringify(rows);
            console.log("userImages json: " + jsonrows);
            return jsonrows;
        }
        ).catch(
        (err) => {
            console.log(err);
        });
 }

exports.getUserFeed = getUserFeed;
function getUserFeed(userID) {
    return new Promise(
        (resolve, reject) => {          
            db.all("SELECT  i.ImgID,  i.UserID, (SELECT  u.UserName from User as u WHERE u.UserID = i.UserID) as UserName, i.ImgCaption, i.ImgName, i.PostDate, i.ImgLocation FROM Image as i WHERE i.UserID in ( select UserFollowed from Follow as f where f.UserID = ?)  ORDER BY i.PostDate desc", userID,
                function (err, rows) {
                    if (err) {
                        console.log(err);
                        reject(err);
                        return false;
                    }         
                    resolve(rows);
                });
        }).then(
        (rows) => {
            console.log("selectUserFeeds rows: " + rows);
            var jsonrows = JSON.stringify(rows);
            console.log("selectUserFeeds json: " + jsonrows);
            return jsonrows;
        }
        ).catch(
        (err) => {
            console.log(err);
        });
}

//var testUser = 4;
//getUserImages(testUser);
//getUserFeed(testUser);
//uploadImage(JSON.stringify(testImage), "C:\\Users\\admin\\Desktop\\clown.jpg");