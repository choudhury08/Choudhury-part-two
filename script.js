var vacationType = prompt(
  "What kind of trip would you like to go on, musical,tropical, or adventurous?"
);
var groupSize = prompt("How many are in your group?");
var result;

var destination;
var travelSuggestion;

if (vacationType === "musical") {
  destination = "new orleans";
}

if (vacationType === "tropical") {
  destination = "Beach Vacation in Mexico";
}

if (vacationType === "adventurous") {
  destination = "Whitewater Rafting the Grand Canyon";
}

if (groupSize >= 6) {
  travelSuggestion = "charter Flight";
}
if (groupSize < 6 && groupSize > 3) {
  travelSuggestion = "Helicopter";
}

if (groupSize === "1" || groupSize === "2") {
  travelSuggestion = "First Class";
}

var message =
  "Since you're a group of " +
  groupSize +
  " going on a " +
  vacationType +
  " vacation, you should take a " +
  travelSuggestion +
  " to " +
  destination +
  ".";
alert(message);
