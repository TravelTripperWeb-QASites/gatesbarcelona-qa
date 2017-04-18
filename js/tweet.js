(function(root,factory){if(typeof define==='function'&&define.amd){define([],factory)}else if(typeof exports==='object'){module.exports=factory()}else{factory()}}(this,function(){var domNode='';var maxTweets=20;var parseLinks=!0;var queue=[];var inProgress=!1;var printTime=!0;var printUser=!0;var formatterFunction=null;var supportsClassName=!0;var showRts=!0;var customCallbackFunction=null;var showInteractionLinks=!0;var showImages=!1;var targetBlank=!0;var lang='en';var permalinks=!0;var dataOnly=!1;var script=null;function handleTweets(tweets){if(customCallbackFunction===null){var x=tweets.length;var n=0;var element=document.getElementById(domNode);var html='<div>';while(n<x){if(n<2){html+='<div class="col-sm-4 col-md-3">'+tweets[n]+'</div></a></div><div class="col-sm-4 col-md-3 photolist'+n+'"></div>';}else{html+='<div class="col-sm-4 col-md-3 photolist'+n+'"></div><div class="col-sm-4 col-md-3">'+tweets[n]+'</div></a></div>';}n++}
html+='</div>';element.innerHTML=html}else{customCallbackFunction(tweets)}}
function strip(data){return data.replace(/<b[^>]*>(.*?)<\/b>/gi,function(a,s){return s}).replace(/class="(?!(tco-hidden|tco-display|tco-ellipsis))+.*?"|data-query-source=".*?"|dir=".*?"|rel=".*?"/gi,'')}
function targetLinksToNewWindow(el){var links=el.getElementsByTagName('a');for(var i=links.length-1;i>=0;i--){links[i].setAttribute('target','_blank')}}
function getElementsByClassName(node,classname){var a=[];var regex=new RegExp('(^| )'+classname+'( |$)');var elems=node.getElementsByTagName('*');for(var i=0,j=elems.length;i<j;i++){if(regex.test(elems[i].className)){a.push(elems[i])}}
return a}
function extractImageUrl(image_data){if(image_data!==undefined&&image_data.innerHTML.indexOf('data-srcset')>=0){var data_src=image_data.innerHTML.match(/data-srcset="([A-z0-9%_\\.\-]+)/i)[0];return decodeURIComponent(data_src).split('"')[1]}}
var twitterFetcher={fetch:function(config){if(config.maxTweets===undefined){config.maxTweets=20}
if(config.enableLinks===undefined){config.enableLinks=!0}
if(config.showUser===undefined){config.showUser=!0}
if(config.showTime===undefined){config.showTime=!0}
if(config.dateFunction===undefined){config.dateFunction='default'}
if(config.showRetweet===undefined){config.showRetweet=!0}
if(config.customCallback===undefined){config.customCallback=null}
if(config.showInteraction===undefined){config.showInteraction=!0}
if(config.showImages===undefined){config.showImages=!1}
if(config.linksInNewWindow===undefined){config.linksInNewWindow=!0}
if(config.showPermalinks===undefined){config.showPermalinks=!0}
if(config.dataOnly===undefined){config.dataOnly=!1}
if(inProgress){queue.push(config)}else{inProgress=!0;domNode=config.domId;maxTweets=config.maxTweets;parseLinks=config.enableLinks;printUser=config.showUser;printTime=config.showTime;showRts=config.showRetweet;formatterFunction=config.dateFunction;customCallbackFunction=config.customCallback;showInteractionLinks=config.showInteraction;showImages=config.showImages;targetBlank=config.linksInNewWindow;permalinks=config.showPermalinks;dataOnly=config.dataOnly;var head=document.getElementsByTagName('head')[0];if(script!==null){head.removeChild(script)}
script=document.createElement('script');script.type='text/javascript';if(config.list!==undefined){script.src='https://syndication.twitter.com/timeline/list?'+'callback=twitterFetcher.callback&dnt=false&list_slug='+config.list.listSlug+'&screen_name='+config.list.screenName+'&suppress_response_codes=true&lang='+(config.lang||lang)+'&rnd='+Math.random()}else if(config.profile!==undefined){script.src='https://syndication.twitter.com/timeline/profile?'+'callback=twitterFetcher.callback&dnt=false'+'&screen_name='+config.profile.screenName+'&suppress_response_codes=true&lang='+(config.lang||lang)+'&rnd='+Math.random()}else if(config.likes!==undefined){script.src='https://syndication.twitter.com/timeline/likes?'+'callback=twitterFetcher.callback&dnt=false'+'&screen_name='+config.likes.screenName+'&suppress_response_codes=true&lang='+(config.lang||lang)+'&rnd='+Math.random()}else{script.src='https://cdn.syndication.twimg.com/widgets/timelines/'+config.id+'?&lang='+(config.lang||lang)+'&callback=twitterFetcher.callback&'+'suppress_response_codes=true&rnd='+Math.random()}
head.appendChild(script)}},callback:function(data){if(data===undefined||data.body===undefined){inProgress=!1;if(queue.length>0){twitterFetcher.fetch(queue[0]);queue.splice(0,1)}
return}
data.body=data.body.replace(/(<img[^c]*class="Emoji[^>]*>)|(<img[^c]*class="u-block[^>]*>)/g,'');if(!showImages){data.body=data.body.replace(/(<img[^c]*class="NaturalImage-image[^>]*>|(<img[^c]*class="CroppedImage-image[^>]*>))/g,'')}
if(!printUser){data.body=data.body.replace(/(<img[^c]*class="Avatar"[^>]*>)/g,'')}
var div=document.createElement('div');div.innerHTML=data.body;if(typeof(div.getElementsByClassName)==='undefined'){supportsClassName=!1}
function swapDataSrc(element){var avatarImg=element.getElementsByTagName('img')[0];avatarImg.src=avatarImg.getAttribute('data-src-2x');return element}
var tweets=[];var authors=[];var times=[];var images=[];var rts=[];var tids=[];var permalinksURL=[];var x=0;if(supportsClassName){var tmp=div.getElementsByClassName('timeline-Tweet');while(x<tmp.length){if(tmp[x].getElementsByClassName('timeline-Tweet-retweetCredit').length>0){rts.push(!0)}else{rts.push(!1)}
if(!rts[x]||rts[x]&&showRts){tweets.push(tmp[x].getElementsByClassName('timeline-Tweet-text')[0]);tids.push(tmp[x].getAttribute('data-tweet-id'));if(printUser){authors.push(swapDataSrc(tmp[x].getElementsByClassName('timeline-Tweet-author')[0]))}
times.push(tmp[x].getElementsByClassName('dt-updated')[0]);permalinksURL.push(tmp[x].getElementsByClassName('timeline-Tweet-timestamp')[0]);if(tmp[x].getElementsByClassName('timeline-Tweet-media')[0]!==undefined){images.push(tmp[x].getElementsByClassName('timeline-Tweet-media')[0])}else{images.push(undefined)}}
x++}}else{var tmp=getElementsByClassName(div,'timeline-Tweet');while(x<tmp.length){if(getElementsByClassName(tmp[x],'timeline-Tweet-retweetCredit').length>0){rts.push(!0)}else{rts.push(!1)}
if(!rts[x]||rts[x]&&showRts){tweets.push(getElementsByClassName(tmp[x],'timeline-Tweet-text')[0]);tids.push(tmp[x].getAttribute('data-tweet-id'));if(printUser){authors.push(swapDataSrc(getElementsByClassName(tmp[x],'timeline-Tweet-author')[0]))}
times.push(getElementsByClassName(tmp[x],'dt-updated')[0]);permalinksURL.push(getElementsByClassName(tmp[x],'timeline-Tweet-timestamp')[0]);if(getElementsByClassName(tmp[x],'timeline-Tweet-media')[0]!==undefined){images.push(getElementsByClassName(tmp[x],'timeline-Tweet-media')[0])}else{images.push(undefined)}}
x++}}
if(tweets.length>maxTweets){tweets.splice(maxTweets,(tweets.length-maxTweets));authors.splice(maxTweets,(authors.length-maxTweets));times.splice(maxTweets,(times.length-maxTweets));rts.splice(maxTweets,(rts.length-maxTweets));images.splice(maxTweets,(images.length-maxTweets));permalinksURL.splice(maxTweets,(permalinksURL.length-maxTweets))}
var arrayTweets=[];var x=tweets.length;var n=0;if(dataOnly){while(n<x){arrayTweets.push({tweet:tweets[n].innerHTML,author:authors[n]?authors[n].innerHTML:'Unknown Author',time:times[n].textContent,timestamp:times[n].getAttribute('datetime').replace('+0000','Z').replace(/([\+\-])(\d\d)(\d\d)/,'$1$2:$3'),image:extractImageUrl(images[n]),rt:rts[n],tid:tids[n],permalinkURL:(permalinksURL[n]===undefined)?'':permalinksURL[n].href});n++}}else{while(n<x){if(typeof(formatterFunction)!=='string'){var datetimeText=times[n].getAttribute('datetime');var newDate=new Date(times[n].getAttribute('datetime').replace(/-/g,'/').replace('T',' ').split('+')[0]);var dateString=formatterFunction(newDate,datetimeText);times[n].setAttribute('aria-label',dateString);if(tweets[n].textContent){if(supportsClassName){times[n].textContent=dateString}else{var h=document.createElement('p');var t=document.createTextNode(dateString);h.appendChild(t);h.setAttribute('aria-label',dateString);times[n]=h}}else{times[n].textContent=dateString}}
var op='';if(parseLinks){if(targetBlank){targetLinksToNewWindow(tweets[n]);if(printUser){targetLinksToNewWindow(authors[n])}}
 
op+='<div class="feed-text"><a href="'+permalinksURL[n]+'" target="_blank"><h2 class="label-1">@GATESKEYWEST</h2> <div class="icon-t"><i class="fa fa-twitter" aria-hidden="true"></i></div><p class="label-2">'+strip(tweets[n].innerHTML)+'</p>';if(printTime){if(permalinks){op+='<div class="label-3"><span class="label-date">'+times[n].getAttribute('aria-label')+'</span></div>'}else{op+='<div class="label-3"><span class="label-date">'+times[n].getAttribute('aria-label')+'</span></div>'}}}else{if(tweets[n].textContent){if(printUser){op+='<span class="label-twitter">'+authors[n].textContent+'</span></div></div></a>'}
op+='<p class="tweet">'+tweets[n].textContent+'</p>';if(printTime){op+='<p class="timePosted">'+times[n].textContent+'</p>'}}else{if(printUser){op+='<p class="user">'+authors[n].textContent+'</p>'}
op+='<p class="tweet">'+tweets[n].textContent+'</p>';if(printTime){op+='<p class="timePosted">'+times[n].textContent+'</p>'}}}
//if(showInteractionLinks){op+='<p class="interact"><a href="https://twitter.com/intent/'+'tweet?in_reply_to='+tids[n]+'" class="twitter_reply_icon"'+(targetBlank?' target="_blank">':'>')+'Reply</a><a href="https://twitter.com/intent/retweet?'+'tweet_id='+tids[n]+'" class="twitter_retweet_icon"'+(targetBlank?' target="_blank">':'>')+'Retweet</a>'+'<a href="https://twitter.com/intent/favorite?tweet_id='+tids[n]+'" class="twitter_fav_icon"'+(targetBlank?' target="_blank">':'>')+'Favorite</a></p>'}
if(showImages&&images[n]!==undefined&&extractImageUrl(images[n])!==undefined){op+='<div class="media">'+'<img src="'+extractImageUrl(images[n])+'" alt="Image from tweet" />'+'</div>'}
if(showImages){arrayTweets.push(op)}else if(!showImages&&tweets[n].textContent.length){arrayTweets.push(op)}
n++}}
handleTweets(arrayTweets);inProgress=!1;if(queue.length>0){twitterFetcher.fetch(queue[0]);queue.splice(0,1)}}};window.twitterFetcher=twitterFetcher;return twitterFetcher}))

 

// ##### Simple example 1 #####
// A simple example to get my latest tweet and write to a HTML element with
// id "example1". Also automatically hyperlinks URLS and user mentions and
// hashtags.
var configProfile = {
  "profile": {"screenName": 'gateskeywest'},
  "domId": 'soicalfeed',
  "maxTweets": 4,
  "enableLinks": true, 
  "showUser": true,
  "showTime": true,
  "showImages": false,
  "lang": 'en'
};
twitterFetcher.fetch(configProfile);