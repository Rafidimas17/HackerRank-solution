function timeConversion(s) {
   // Split the input string into two parts: the time (without "AM" or "PM") and the time period.
   let [time, part] = [s.substring(0, s.length - 2), s.substring(s.length - 2)]

   // Split the time part into an array of hours, minutes, and seconds, converting them to numbers.
   time = time.split(":").map(Number)

   // If it's PM and the hour is 12, keep it as 12.
   if (part == "PM" && time[0] === 12)
      time[0] = 12 

   // If it's PM and the hour is not 12, add 12 to the hour to convert it to 24-hour format.
   if (part == "PM" && time[0] !== 12)
      time[0] = (time[0] + 12)

   // If it's AM and the hour is 12, set the hour to 0 (midnight in 24-hour format).
   if (part == "AM" && time[0] === 12)
      time[0] = 0

   // Convert the individual components of time back to strings, and pad them with leading zeros if necessary.
   return time.map(String).map(s => s.padStart(2, "0")).join(":") 
}
