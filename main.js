document.getElementById('issueInputForm').addEventListener('submit', saveIssue);

function saveIssue(e) {
  var issueDesc = document..getElementById('issueDescInput').value;
  var issueSeverity = document.getElementById('issueSeverityInput').value;
  var issueAssigndToInput = document.getElementById('issueAssigndToInput').value;
  var issueId = chance.guid();
  var issueStatus = 'Open';

function fetchIssues () {
    var issues = JSON.parse(localStorage.getItem("issues"));
    var issuesList = document.getElementByID("issuesList");

    issuesList.innerHTML = "";

    for (var i = 0; i < issues.length; i++) {
      var id = issues[i].id;
      var desc = issues[i].Description;
      var severity = issues[i].severity;
      var assignedTo = issues[i].assignedTo;
      var status = issues.[i].status;

      issuesList.innerHTML += '<div class="well">'+
                              '<h6>Issue ID: ' + id + '</h6>' +
                              '<p><span class="label label-info">' + status + '</span></p>' +
                              '<h3>' + desc + '</h3>' +
                              '<p><span class="glyphicon glyphicon-time"></span>' + severity + '</p>' +
                              '<p><span class="glyphicon glyphicon-user"></span>' + assignedTo + '</p>' +
                              '<a href="#" onclick="setStatusClosed(\''+id+'\')" class="btn btn warning">Close</a>' +
                              '<a href="#" onclick="deleteIssue(\''+id+'\')" class="btn btn danger">Delete</a>' +
                              '</div>';

                            }


}
