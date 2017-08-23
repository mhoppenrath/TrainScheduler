// Initialize Firebase
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

  // date holds "12/16/2011 08:14:30 PM"





  // creates a new train object
  $('#submit').on("click", function(){
    console.log("clicked")
      var newTrainName = $("#trainName").val().trim();
      var newArrivalTime = $("#arrivalTime").val().trim();
      var newFrequency = $("#frequency").val().trim();
      var newDesitination = $("#destination").val().trim();
      event.preventDefault();
      console.log(newTrainName);
      console.log(newArrivalTime);
      console.log(newFrequency);
      console.log(newDesitination);

      database.ref().push({
       train: newTrainName,
       arrival: newArrivalTime,
       frequent: newFrequency,
       destinat: newDesitination
   }, function(errorObject) {
         console.log("The read failed: " + errorObject.code);
       });
     });

// This function is for when a new child apears

       		database.ref().on("child_added", function(childSnapshot, prevChildKey) {
            t = new Date(new Date().getTime()).toLocaleTimeString();

// Store variable

		   	var newName = childSnapshot.val().train;
		   	var newArrival = childSnapshot.val().arrival;
		   	var newFrequency = childSnapshot.val().frequent;
		   	var newDesitination = childSnapshot.val().destinat;
        var timeAway = Math.abs(t - newArrival);

        if (t===newArrival) {
          timeAway = Math.abs(t + newFrequency);
        }



// Do math (monthsWorked*monthly) to find totalBilled
	$("#employee-table > tbody").append("<tr><td>" + newName + "</td><td>" + newDesitination + "</td><td>" + newFrequency + "</td><td>" + newArrival + "</td><td>" + timeAway + "</td><td>" );

  		   	});
