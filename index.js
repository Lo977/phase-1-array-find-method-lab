// code your solution here
const record = [
  { year: "2015", result: "W" },
  { year: "2014", result: "N/A" },
  { year: "2013", result: "L" },
  //...
];

const superbowlWin = (array) => {
  let newArray = array.find((subArray) => subArray.result === "W");
  return newArray ? newArray.year : undefined;
};
