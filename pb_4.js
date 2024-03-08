function password(obj) {
  if (obj.name === undefined || obj.birthYear === undefined || obj.siteName === undefined) {
    return "invalid";
  }
  else if (isNaN(obj.birthYear) || obj.birthYear.toString().length !== 4) {
    return "invalid";
  }
  
    const websiteName = obj.siteName.charAt(0).toUpperCase() + obj.siteName.slice(1);
  
    const strongPass = websiteName + '#' + obj.name + '@' + obj.birthYear;

  
  return strongPass;
}

// submit it for assignment;




//  -------------------------------------
// function password(obj) {

//   if (obj.name === undefined || obj.birthYear === undefined || obj.siteName === undefined) {
//     return "invalid";
//   }


//   // Check if birthYear is a 4-digit number
//   if (isNaN(obj.birthYear) || obj.birthYear.toString().length !== 4) {
//     return "invalid";
//   }

//   // Construct the password
//   const websiteName = obj.siteName.charAt(0).toUpperCase() + obj.siteName.slice(1); // First letter capitalized
//   const passwordString = `${websiteName}#${obj.name}@${obj.birthYear}`;

//   return passwordString;
// }

// Sample input
const input1 = { name: "kolimuddin", birthYear: 1999, siteName: "google" };
const input2 = { name: "rahat", birthYear: 2002, siteName: "Facebook" };
const input3 = { name: "toky", birthYear: 200, siteName: "Facebook" };

// Output
console.log(password(input1)); // Output: Google#kolimuddin@1999
console.log(password(input2)); // Output: Facebook#rahat@2002
console.log(password(input3)); // Output: invalid

