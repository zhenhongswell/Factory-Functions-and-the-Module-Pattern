const formatter = (function (doc){
    console.log('start');
    let timesRun = 0;

    let testArray = [];
    const log = (message) => console.log(`${message}`);
    const increaseTimesRun = () =>{
        log('Setting times run');
        timesRun++;
    }
    const GetTimesRun = () =>{
        return timesRun;
    }
    const makeUppercase = (text) =>{
        log("Making uppercase");
        testArray.push ('A');
        // timesRun = 6;
        return text.toUpperCase();
    }

    // const writeToDOM = (selector,message)=>{
    //     if (document.querySelector(selector) != null || 
    //         document.querySelector(selector) != undefined){

    //         console.log('DOM is Selected!');

    //     }
    //     document.querySelector(selector).innerHTML = message;
    // }

    const writeToDOM = (selector,message)=>{
        if (!!doc && "querySelector" in doc){
            document.querySelector(selector).innerHTML = message;
        }
        
    }

    return {
        makeUppercase,
        increaseTimesRun,
        GetTimesRun,
        testArray,
        timesRun,
        writeToDOM,
    }
})(document)


// formatter.writeToDOM("#TestingWriteDOM","Testing if write Dom works");

// const Copy = (function(doc) {
//     const log = (message) => console.log(`[${Date.now()}] Logger: ${message}`);
  
//     const makeUppercase = (text) => {
//       log("Making uppercase");
//       return text.toUpperCase();
//     };
  
//     const writeToDOM = (selector, message) => {
//         console.log(doc);
//       if (!!doc && "querySelector" in doc) {
//         console.log("querySelector!");
//         doc.querySelector(selector).innerHTML = message;
//       }
//     }
  
//     return {
//       makeUppercase,
//       writeToDOM,
//     }
//   })(document);

// Copy.writeToDOM("#TestingWriteDOM","Testing if write Dom works");


const documentMock = (() => ({
    querySelector: (selector) => ({
      innerHTML: null,
    }),
  }))();
  
  const Formatter = (function(doc) {
    const log = (message) => console.log(`[${Date.now()}] Logger: ${message}`);
  
    const makeUppercase = (text) => {
      log("Making uppercase");
      return text.toUpperCase();
    };
  
    const writeToDOM = (selector, message) => {
      doc.querySelector(selector).innerHTML = message;
    }
  
    return {
      makeUppercase,
      writeToDOM,
    }
  })(document || documentMock);

  Formatter.writeToDOM("#TestingWriteDOM","Testing if write Dom works");
// const myDocument = document.querySelector("#myDoc");
// const myCopy = Copy(document);

// const Formatter = formatter;

// console.log(Formatter);


// console.log(Formatter.makeUppercase('test'));
// console.log(Formatter.makeUppercase('test'));
// console.log(Formatter.makeUppercase('test'));
// console.log(Formatter.makeUppercase('test'));
// Formatter.increaseTimesRun();
// Formatter.increaseTimesRun();
// Formatter.increaseTimesRun();
// console.log(Formatter.GetTimesRun());
// console.log(Formatter.timesRun);
// console.log(Formatter.testArray.length);

// Formatter().writeToDOM("#TestingWriteDOM","Testing if write Dom works");
