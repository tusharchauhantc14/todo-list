// module.exports.getDate=getDate;

// module.exports.getDay=getDay;

exports.getDate= function getDate() {
  let today = new Date();

  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  // var currentDay = today.getDay();
  return today.toLocaleDateString("en-US", options);
}
exports.getDay=function getDay() {

    let today = new Date();
  
    let options = {
      weekday: "long",
    //   day: "numeric",
    //   month: "long",
    };
  
    // var currentDay = today.getDay();
    return today.toLocaleDateString("en-US", options);
  }
// console.log(module.exports);