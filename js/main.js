import React from "react";
import {render} from 'react-dom';

class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            clickCount: 5,
        };
    }
    render() {
        return <div>
            <a href="" onClick={this.handleClick.bind(this)}>Clicks: {this.state.clickCount}</a>
        </div>;
    }
    handleClick(event) {
        event.preventDefault();
        this.setState({
            clickCount: this.state.clickCount + 1,
        });
    }
}

function getUserFeeds() {
  var xhttp = new XMLHttpRequest();
  var feedUrl= "http://localhost:3000/getUserFeeds/" + 4 + "/";
  
  console.log(feedUrl);
  console.log(xhttp.responseText);
  
  xhttp.onreadystatechange = function() {
 if (xhttp.readyState === 4 && xhttp.status === 200) { 
     var obj = JSON.parse(xhttp.responseText);        
     for (var i = 0; i < obj.length; i++) {           
            // console.log(i + " -> " + obj[i]['tweetText']);   
            var cp =  document.createElement('span');            
            var userTweethref='http://localhost:8080/getUserTweets/' + obj[i]['authorID']  + '/';    
            console.log("userTweethref  -> " + userTweethref);            
            cp.innerHTML = '<a id="userTweets" onclick="window.open(\'' + userTweethref + '\', \'pop\', \'top=50,left=500,width=400,height=600,resizable=1,scrollbars=1,titlebar=1\');"><u>' +  obj[i]['UserName'] + '</u></a>' + 
            '&nbsp;&nbsp;&nbsp;' + obj[i]['lastupdated'] + '<br/>' + obj[i]['tweetText'] + '<br/>' +
            '<button id="replyBtn' +  obj[i]['tweetID'] + '" onclick="getReplies(' + obj[i]['tweetID'] + ')">Replies</button><br/><div id="replies' +  obj[i]['tweetID'] + '""></div><br/>';
             if (i % 2 != 0) {
                 cp.style['background-color'] = '#d3d3d3';
         } 
        document.getElementById("feeds").appendChild(cp);   
        cp = null;
        hasReplies(obj[i]['tweetID']);  
      } 
    } 
  };
  xhttp.open("GET", feedUrl, true);
  xhttp.send();
}

render((
    <Main/>
), document.getElementById('main'));
