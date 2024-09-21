console.log("============bom=========");
// properties
// console.log(window);
// console.log(window.document);
// console.log(window.screen);//it will show the basic information of the screen
// console.log(window.history);//to keep a track of next and previous page
// console.log(window.navigator);
// console.log(window.location);
// console.log(window.innerHeight);//document height
// console.log(window.outerHeight);//complete window height
// onsole.log(window.innerWidth);
// console.log(window.outerwidth);

// ==========methods=========
// console.log(windows.prompt());
// window.alert("once you submitted you can not modify the data")
// window.confirm("once you submitted you can not modify the data")
// window.open("https://www.meesho.com")
// window.close();
//  setTimeOut():- It will hold the callstack to execute the callback function untill he completion of time
// syntax:setTimeOut(callbackFn,time);
 console.log("i will not from settimeOut");
let first=setTimeout(()=>{
    console.log("i am from setTimeout");
},10000);

setTimeout(()=> {
    console.log("i am ffrom settimeout 2");
},5000);
console.log(" i am not from settimeout-2");

// ? clearTimeOut():it will clear the working or setTimeOut() method
// syntax:clearTimeOut(variable)
// clearTimeout(first);


// ? SetInterval();it will repeatedly invoke rhe callback function after certain
// syntax:setInterval();
let second=setInterval(()=>{
console.log("hey! i will execute after")
},2000);
// ?clearInterval();
// syntax:clearInterval(variable)
clearInterval(second);




// ===============history==========
console.log(window.history);
// 1.length
// 1.forward 2.back() 3.go()

// ===============navigator===========
console.log(navigator);
console.log(navigator.appCodeName);
console.log(navigator.appName);
console.log(navigator.appVersion);
console.log(navigator.onLine);
console.log(navigator.language);
console.log(navigator.pdfViewerEnabled);
console.log(navigator.userAgent);

// ============location=================

console.log(location);
console.log(location.host);
console.log(location.hostname);
console.log(location.href);
console.log(location.origin);
console.log(location.port);
console.log(location.protocol);
console.log(location.pathname);

// =====methods of location===========

console.log(location.reload());
console.log(location.replace("https://www.instagram.com/"));
console.log(location.assign("https://www.meesho.com/"));





