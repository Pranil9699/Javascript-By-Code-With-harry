// const playmusic = (URL) => {
//   let song = new Audio(URL);
//   song.play();
// };
// playmusic(`BaadalBarse.mp3`);
// let song = document.createElement("audio");
// song.src = "o_30_Alarm.mp3";
// song.preload="mp3"
// song.innerHTML="<button>Play</button>"
// song.play();
// document.body.appendChild(song);
// // // class AudioClass{
// // //     constructor(songName){
// // //         this.songName = new Audio(songName)
// // //     }
// // //     play(){
// // //     this.songName.play();
// // //     }
// // //     stop(){
// // //         this.songName.pause()
// // //     }
// // //     duration(){
// // //         this.songName.volume=0.75;
// // //     }
// // // }
// // // let music = new AudioClass(`BaadalBarse.mp3`)

// // // switch (id) {
// // //     case 0:

// // //         break;

// // //     default:
// // //         break;
// // // }

// class AlarmClock {
//   constructor(audioURL_hour, audioURL_0_30) {
//     this.audioH = new Audio(audioURL_hour);
//     this.audioM = new Audio(audioURL_0_30);
//     console.log("Here first...");

//     console.log(this.audioH, this.audioM);
//   }

//   playH() {
//     this.audioH.play();
//   }
//   pauseH() {
//     console.log("started");
//     console.log(this.audioH.pause());
//     console.log("ended");
//   }
//   playM() {
//     this.audioM.play();
//   }
//   pauseM() {
//     this.audioH.pause();
//   }
//   async sleep(minute) {
//     setTimeout(() => {}, minute * 1000);
//   }
//   async checkTime() {
//     const now = new Date();
//     const hours = now.getHours();
//     const minutes = now.getMinutes();
//     const seconds = now.getSeconds();

//     if (
//       (hours === 0 && minutes === 0 && seconds === 0) ||
//       (hours === 12 && minutes === 0 && seconds === 0)
//     ) {
//       this.playH();
//       await sleep(1);
//       this.pauseH();
//     } else if (
//       (minutes === 5 && seconds === 0) ||
//       (Math.floor(minutes) === 14 && Math.floor(seconds) === 0)
//     ) {
//       this.playM();
//       console.log("Started " + new Date().getMinutes());
//       await sleep(0.1);
//       console.log("Ended " + new Date().getMinutes());
//       this.pauseM();

//       while (true) {}
//     } else {
//       // this.play();
//       console.log(minutes + " : " + seconds);
//       console.log("here");
//     }
//   }
// }

// const alarm = new AlarmClock(`Hour_Alarm.mp3`, `0_30_Alarm.mp3`);
// alarm.playH();
// // Check the time every second
// // setInterval(() => {
// //   alarm.checkTime();
// // }, 1000);

const playmusic = (URL) => {
  let song = new Audio(URL);
  song.play();
//   song.loop()
};
playmusic(`0_30_Alarm.mp3`);
