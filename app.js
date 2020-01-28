function playWithTom(a){
  let daysOff = parseInt(a);
  let workDays = 365 - daysOff;
  let minutesPlay = (daysOff * 127) + (workDays * 63);
  let differnceTarget = Math.abs(30000 - minutesPlay);
  let hours = differnceTarget / 60;
  let minutes = differnceTarget % 60;

  if(minutesPlay < 30000){
    console.log("Tom sleeps well");
    console.log(Math.floor(hours) + " hours and " + minutes + " minutes less for play.");
  }
  else{
    console.log('Tom will run away!')
    console.log(Math.floor(hours) + " hours and " + minutes + " minutes for play!");
  }
}

playWithTom(20);
