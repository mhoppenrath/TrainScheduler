// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDlrH-mUlbdlNQr_9FmBLLXWfVF52e97RM",
    authDomain: "train-scheduler-7b819.firebaseapp.com",
    databaseURL: "https://train-scheduler-7b819.firebaseio.com",
    projectId: "train-scheduler-7b819",
    storageBucket: "train-scheduler-7b819.appspot.com",
    messagingSenderId: "448211646563"
  };
  firebase.initializeApp(config);
  var database=firebase.database();


  // gets the current time
  var t = new Date(new Date().getTime()).toLocaleTimeString();




  // creates a new train object
  $('#submit').on("click", function(){
      var newTrainName = $("#trainNames").val().trim();
      var newArrivalTime = $("#arrivalTimes").val().trim();
      var newFrequency = $("#frequencies").val().trim();
      console.log(newName);
      event.preventDefault();




       database.ref().push({
        trainName: newTrainName,
        arrivalTime: newArrivalTime,
        Frequency: newFrequency
    }, function(errorObject) {
          console.log("The read failed: " + errorObject.code);
        });


});
