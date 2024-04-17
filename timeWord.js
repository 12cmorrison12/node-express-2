/*

Turn a string
Turn a string of 24h time into words.

You can trust that you’ll be given a valid string 
    - (it will always have a two-digit hour 00-23, 
    - nd a two-digit minute 00-59). 
    - Hours 0-11 are am, 
    - and hours 12-23 are pm.

Examples of the
Examples of the output we’d like:

Input	Expected Output
00:00	midnight
00:12	twelve twelve am
01:00	one o’clock am
01:01   one oh one am
06:00	six o’clock am
06:01	six oh one am
06:10	six ten am
06:18	six eighteen am
06:30	six thirty am
10:34	ten thirty four am
12:00	noon
12:09	twelve oh nine pm
23:23	eleven twenty three pm



00:00 => midnight
01:

*/

const convert_time_to_words = (input) => {

  // military_hours will compute the hours
  const military_hours = {
    "01": "one",
    "02": "two",
    "03": "three",
    "04": "four",
    "05": "five",
    "06": "six",
    "07": "seven",
    "08": "eight",
    "09": "nine",
    "10": "ten",
    "11": "eleven",
    "12": "twelve",
    "13": "one",
    "14": "two",
    "15": "three",
    "16": "four",
    "17": "five",
    "18": "six",
    "19": "seven",
    "20": "eight",
    "21": "ninge",
    "22": "ten",
    "23": "11",
  };

  // Ones, tens, teens will be for our minues
  const ones = {
    "01": "one",
    "02": "two",
    "03": "three",
    "04": "four",
    "05": "five",
    "06": "six",
    "07": "seven",
    "08": "eight",
    "09": "nine",
  };

  const teens = {
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
  };

  const tens = {
    10: "ten",
    20: "twenty",
    30: "thirty",
    40: "fourty",
    50: "fifty",
  };


  // Corner cases
  if (input === "00:00") {
    return "midnight";
  }

  if (input === "12:00") {
    return "noon";
  }

  // Capture Oh as constant
  const OH = "oh";
  const O_CLOCK = "o'clock";


  const hourStr = input.split(":")[0];
  const minuteStr = input.split(":")[1];


  // Capture AM/or PM
  let day_or_night = "";
  if(parseInt(hourStr) <= 11) {
    day_or_night = "AM";
  } else { // assuming the hour is from 12-23
    day_or_night = "PM";
  }


  if (minuteStr === "00") {
    // Compute Hours

    // "o'clock"
    if (parseInt(hourStr) <= 11) {
      // ones

      return `${military_hours[hourStr]} +  ${O_CLOCK} ${day_or_night}`;
    } else if (parseInt(hourStr) >= 13 && parseInt(hourStr) <= 23) {
      // teens

      return military_hours[hourStr] + " o'clock " + day_or_night;
    }
  } else if (parseInt(minuteStr) < 10) {
    // continue to calculate minutes but that are less than 10
    return `${military_hours[hourStr]} ${OH} ${ones[minuteStr]} ${day_or_night}`;
  } else if (parseInt(minuteStr) % 10 === 0) {
    // continue to calculate minutes lets candle special occations where we have 10,20,30,40,50
    return `${military_hours[hourStr]} ${tens[minuteStr]} ${day_or_night}`;
  } else if (parseInt(minuteStr) >= 11 && parseInt(minuteStr) <= 19) {
    // continue to calculate minutes but that are less than 10
    return `${military_hours[hourStr]} ${teens[minuteStr]} ${day_or_night}`;
  } else {
    // continue to calculate minutes 21-59
    // We have a weird spot where we have 21-59 for our minute
    const leading_minute_num = tens[minuteStr[0] + "0"]; // 20,30,40,50
    const ending_minute_num = ones["0" + minuteStr[1]];
    return `${military_hours[hourStr]} ${leading_minute_num} ${ending_minute_num} ${day_or_night}`;
  }
};

// outlier => midnight
console.log(convert_time_to_words("01:00"));
