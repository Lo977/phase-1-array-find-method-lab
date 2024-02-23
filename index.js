// code your solution here
const record = [
  { year: "2015", result: "W" },
  { year: "2014", result: "N/A" },
  { year: "2013", result: "L" },
  //...
];
// //   ,,,,,
// function superbowlWin(record) {
//     const newResults = record.find(obj => obj.result === 'W');
//     return newResults? newResults.year : undefined;
//    }

const superbowlWin = (array) => {
  let newArray = array.find(subArray => subArray.result === "W");
  return newArray? newArray.year : undefined;
};
