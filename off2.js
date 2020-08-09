var oddsArr = [[14, 28, 42, 54.5, 65, 74, 81.5, 87.5, 92, 95, 97, 98.5, 99.5, 100],
              [13.4, 26.8, 40.2, 52.4, 62.9, 72.1, 79.9, 86.2, 91, 94.3, 96.5, 98.2, 99.3, 100],
              [12.7, 25.4, 38.1, 50, 60.6, 70, 78.1, 84.8, 90, 93.6, 96, 97.9, 99.1, 100],
              [12, 24, 36, 47.5, 58, 67.6, 76.1, 83.3, 89, 93, 95.8, 97.9, 99.3, 100]];


var gsw = {
  loc: "Golden State",
  name: "Warriors",
  ballPic: "lottoBallWarriors.gif",
  hasPick: false,
  pick: 0,
  color: "#1D428A",
  logo: "warriorsLogo.png"
}

var cle = {
  loc: "Cleveland",
  name: "Cavaliers",
  ballPic: "lottoBallCavs.gif",
  hasPick: false,
  pick: 0,
  color: "#860038",
  logo: "cavsLogo.png"
}

var atl = {
  loc: "Atlanta",
  name: "Hawks",
  ballPic: "lottoBallHawks.gif",
  hasPick: false,
  pick: 0,
  color: "#E03A3E",
  logo: "hawksLogo.png"
}

var cha = {
  loc: "Charlotte",
  name: "Hornets",
  ballPic: "lottoBallHornets.gif",
  hasPick: false,
  pick: 0,
  color: "#00788C",
  logo: "hornetsLogo.png"
}

var min = {
  loc: "Minnesota",
  name: "Timberwolves",
  ballPic: "lottoBallTimberwolves.gif",
  hasPick: false,
  pick: 0,
  color: "#0C2340",
  logo: "timberwolvesLogo.png"
}

var nyk = {
  loc: "New York",
  name: "Knicks",
  ballPic: "lottoBallKnicks.gif",
  hasPick: false,
  pick: 0,
  color: "#006BB6",
  logo: "knicksLogo.png"
}

var det = {
  loc: "Detroit",
  name: "Pistons",
  ballPic: "lottoBallPistons.gif",
  hasPick: false,
  pick: 0,
  color: "#C8102E",
  logo: "pistonsLogo.png"
}

var chi = {
  loc: "Chicago",
  name: "Bulls",
  ballPic: "lottoBallBulls.gif",
  hasPick: false,
  pick: 0,
  color: "#CE1141",
  logo: "bullsLogo.png"
}

var was = {
  loc: "Washington",
  name: "Wizards",
  ballPic: "lottoBallWizards.gif",
  hasPick: false,
  pick: 0,
  color: "#002B5C",
  logo: "wizardsLogo.png"
}

var phx = {
  loc: "Phoenix",
  name: "Suns",
  ballPic: "lottoBallSuns.gif",
  hasPick: false,
  pick: 0,
  color: "#E56020",
  logo: "sunsLogo.png"
}

var sac = {
  loc: "Sacramento",
  name: "Kings",
  ballPic: "lottoBallKings.gif",
  hasPick: false,
  pick: 0,
  color: "#5A2D81",
  logo: "kingsLogo.png"
}

var no = {
  loc: "New Orleans",
  name: "Pelicans",
  ballPic: "lottoBallPelicans.gif",
  hasPick: false,
  pick: 0,
  color: "#0C2340",
  logo: "pelicansLogo.png"
}

var sa = {
  loc: "San Antonio",
  name: "Spurs",
  ballPic: "lottoBallSpurs.gif",
  hasPick: false,
  pick: 0,
  color: "#000000",
  logo: "spursLogo.png"
}

var por = {
  loc: "Portland",
  name: "Trail Blazers",
  ballPic: "lottoBallBlazers.gif",
  hasPick: false,
  pick: 0,
  color: "#E03A3E",
  logo: "blazersLogo.png"
}


var lottoTeamsArr = [gsw, cle, min, atl, det, nyk, chi, cha, was, phx, sa, sac, no, por];
var draftTeamsArr = ["Orlando", "Brooklyn", "Memphis", "Dallas", "Indiana", "Philadelphia", "Houston", "Oklahoma City", "Miami", "Utah", "Oklahoma City", "Boston", "New York", "Toronto", "Lakers", "Boston", "Dallas", "Charlotte", "Minnesota", "Philadelphia", "Sacramento", "Philadelphia", "Washington", "New York"];
var takenPlayers = [];

var roster = [randle, barrett, robinson, payton, ntilikina, knox, gibson, bullock, ellington, dsmith, brazdeikis];
var capHolds = [rabb, harper, ddotson];
var deadMoney = 6431667;
var totalSalary = 0;
var salaryCap = 115000000;

var offered = [];

var knicksSpot = 0;

var sumDrafted = [];
var sumSigned = [];
var sumTradedFor = [];
var sumPicksReceived = [];

var sumCut = [];
var sumDeclined = [];
var sumTradedAway = [];
var sumPicksGiven = [];

var signed = [];
var rejected = [];

var tradesSeen = [];

var pickNum = 0;

var tradePicks = ["2021 Round 1", "2021 Round 1 (DAL)", "2021 Round 2 (CHA)", "2021 Round 2 (DET)", "2021 Round 2", "2022 Round 2", "2023 Round 1", "2023 Round 1 (DAL)", "2023 Round 2"]

var draftSalaries = [[8567800, 7665900, 6884000, 6206600, 5620500, 5104900, 4660200, 4269200, 3924300, 3728100, 3541800, 3364600, 3196400, 3036700], 1735900, 1485440];

function calculateSalary() {
  totalSalary = 0;
  for (let i = 0; i < roster.length; i++) {
    totalSalary += roster[i].cSalary;
  }
  for (let j = 0; j < capHolds.length; j++) {
    totalSalary += capHolds[j].cSalary;
  }
  totalSalary += deadMoney;
}


var knicksPicks = [];

var draftLoop = 0;

function startButtonPressed() {
  document.getElementById("startPage").style.display = "none";
  document.getElementById("notePage").style.display = "block";
  calculateSalary();

}

function noteButtonPressed() {
  document.getElementById("notePage").style.display = "none";
  document.getElementById("lotteryPage").style.display = "block";
  document.body.style.backgroundColor = "#fadfc9";
  document.documentElement.style.background = "#fadfc9";
  /////////
  var tempLotto = document.getElementById("lottoDiv");
  tempLotto.style.display = "block";

  doLottery();

  sortDraftOrderAsc();



  var i = lottoTeamsArr.length - 1;
  var j = 0;

  while (i > -1) {
    (function (i, j) {
      setTimeout(function() {
        var teamRow = document.createElement("div");
        teamRow.classList.add("row", "text-center", "teamRow");
        var numDiv = document.createElement("div");
        numDiv.classList.add("col-xs-1");
        numDiv.style.borderRight = "2px solid #F58426";
        var num = document.createElement("p");
        num.classList.add("lottoNum");
        num.innerHTML = i + 1;
        var logoDiv = document.createElement("div");
        logoDiv.classList.add("col-xs-3");
        var logo = document.createElement("img");
        logo.src = lottoTeamsArr[i].logo;
        logo.style.height = "4vh";
        logo.style.margin = "3px";
        var nameDiv = document.createElement("div");
        nameDiv.classList.add("col-xs-5");
        var name = document.createElement("p");
        name.classList.add("lottoName");
        name.innerHTML = lottoTeamsArr[i].name;
        nameDiv.appendChild(name);
        numDiv.appendChild(num);
        logoDiv.appendChild(logo);
        teamRow.appendChild(numDiv);
        teamRow.appendChild(logoDiv);
        teamRow.appendChild(nameDiv);
        document.getElementById("lottoDiv").appendChild(teamRow);
      }, 250 * j)
    }) (i--, j++)
  }

  document.getElementById("startLotteryButton").style.display = "none";
  document.getElementById("finishLotteryButton").style.display = "block";
}

function startLotteryPressed() {
  var tempLotto = document.getElementById("tempLotteryDisplay");
  tempLotto.style.display = "block";

  doLottery();

  sortDraftOrderAsc();


  for (let i = 0; i < lottoTeamsArr.length; i++) {
    tempLotto.innerHTML += lottoTeamsArr[i].name + ", ";
  }

  document.getElementById("startLotteryButton").style.display = "none";
  document.getElementById("finishLotteryButton").style.display = "block";
}

function finishLotteryPressed() {
  document.getElementById("lotteryPage").style.display = "none";
  document.getElementById("draftPage").style.display = "block";
  document.getElementById("startDraftButton").style.display = "none";
  var i = 0;
  var knicksPick = lottoTeamsArr.indexOf(nyk);
  knicksSpot = lottoTeamsArr.indexOf(nyk);
  while (i <= knicksPick) {
    (function (i) {
      setTimeout(function() {
        document.getElementById("overall").innerHTML = "#" + (i+1);
        if (knicksPick === i) {
          knicksSelect();
          knicksNums.push(i+1);
        } else {
          var x = Math.floor(Math.random() * 3);
          document.getElementById("simmedTeams").innerHTML = lottoTeamsArr[i].name;
          document.getElementById("simmedPicks").innerHTML = draftPlayers[x].firstName + " " + draftPlayers[x].lastName;
          takenPlayers.push(draftPlayers[x]);
          var index = draftPlayers.indexOf(draftPlayers[x]);
          draftPlayers.splice(index, 1);
        }
      }, 1000 * i)
    }) (i++)
  }
}


function sortDraftOrderAsc() {
  lottoTeamsArr.sort(function(a, b){return a.pick - b.pick});
}

function sortDraftOrderDesc() {
  lottoTeamsArr.sort(function(a, b){return b.pick - a.pick});
}

function doLottery() {
  for (var i = 0; i < oddsArr.length; i++) {
    var rand = (Math.random() * 100) + 1;
    var foundTeam = false;
    // console.log(rand);
    for (var j = 0; j < oddsArr[i].length; j++) {
      // console.log("j = " + j);
      if (j === 0 && rand <= oddsArr[i][j]) {
        if (lottoTeamsArr[j].hasPick == true) {
          rand = (Math.random() * 100) + 1;
          // console.log("new rand " + rand);
          j = -1;
          // break;
        } else {
          // console.log(lottoTeamsArr[j].name);
          lottoTeamsArr[j].pick = i + 1;
          lottoTeamsArr[j].hasPick = true;
          foundTeam = true;
          break;
        }
      } else if (rand > oddsArr[i][j - 1] && rand <= oddsArr[i][j]) {
          if (lottoTeamsArr[j].hasPick == true) {
            rand = (Math.random() * 100) + 1;
            //  console.log("new rand " + rand);
            j = -1;
            // break;
          } else {
            // console.log(lottoTeamsArr[j].name);
            lottoTeamsArr[j].pick = i + 1;
            lottoTeamsArr[j].hasPick = true;
            foundTeam = true;
            break;
          }
      }
    }

  }
  for (var k = 0, newPick = 5; k < lottoTeamsArr.length; k++) {
    if (!lottoTeamsArr[k].hasPick) {
      lottoTeamsArr[k].pick = newPick;
      newPick++;
    }
  }
}

var knicksNums = [];

function knicksSelect() {
  document.getElementById("simmedPicks").innerHTML = "KNICKS ARE ON THE CLOCK";
  document.getElementById("simmedTeams").innerHTML = "";
  for (let i = 0; i < draftPlayers.length; i++) {
    // if (!(takenPlayers.indexOf(draftPlayers[i]) > -1)) {
      var dplayerRow = document.createElement("div");
      dplayerRow.classList.add("row", "dplayerRow");

      // dplayerRow.addEventListener('mouseover', function() {
      //   generateDraftButton(draftPlayers[i]);
      // });
      //
      // dplayerRow.addEventListener('mouseout', function() {
      //   rebuildDraftRow(draftPlayers[i]);
      // });

      var headshotDiv = document.createElement("div");
      headshotDiv.classList.add("col-xs-5", "col-md-3", "col-lg-2", "headshotDiv");

      var headshot = document.createElement("img");
      headshot.classList.add("draftHeadshot", "center-block");
      headshot.src = draftPlayers[i].headshot;

      headshotDiv.appendChild(headshot);
      dplayerRow.appendChild(headshotDiv);

      var nameDiv = document.createElement("div");
      nameDiv.classList.add("col-xs-7", "col-md-9", "dnameDiv");

      var name = document.createElement("p");
      name.classList.add("draftName");
      name.innerHTML = draftPlayers[i].firstName + " " + draftPlayers[i].lastName;

      var posRow = document.createElement("div");
      posRow.classList.add("row", "text-center", "posRow");
      posRow.setAttribute("id", draftPlayers[i].firstName + "and" + draftPlayers[i].lastName);

      var posDiv = document.createElement("div");
      posDiv.classList.add("col-xs-2", "posDiv");

      var pos = document.createElement("p");
      pos.innerHTML = draftPlayers[i].position;

      posDiv.appendChild(pos);
      posRow.appendChild(posDiv);

      var schoolDiv = document.createElement("div");
      schoolDiv.classList.add("col-xs-10");

      var school = document.createElement("p");
      school.innerHTML = draftPlayers[i].school;

      schoolDiv.appendChild(school);
      posRow.appendChild(schoolDiv);

      var buttonRow = document.createElement("div");
      buttonRow.classList.add("col-xs-12");


      var button = document.createElement("button");
      button.innerHTML = "Draft";
      button.classList.add("draftButton");
      button.addEventListener('click', function() {
        draftPlayer(draftPlayers[i])
      });

      buttonRow.appendChild(button);
      posRow.appendChild(buttonRow);


      nameDiv.appendChild(name);
      nameDiv.appendChild(posRow);

      dplayerRow.appendChild(nameDiv);
      // var name = document.createElement("p");
      // name.innerHTML = draftPlayers[i].firstName + " " + draftPlayers[i].lastName;

      document.getElementById("availablePlayers").appendChild(dplayerRow);
      // document.getElementById("availablePlayers").appendChild(button);
    // }
  }
}

function draftPlayer(guy) {
  draftLoop += 1;

  if (draftLoop === 1) {
    guy.cSalary = draftSalaries[0][knicksSpot];
  } else if (draftLoop === 2) {
    guy.cSalary = draftSalaries[1];
  } else {
    guy.cSalary = draftSalaries[2];
  }

  roster.push(guy);
  takenPlayers.push(guy);
  knicksPicks.push(guy);
  sumDrafted.push(guy);

  var index = draftPlayers.indexOf(guy);
  draftPlayers.splice(index, 1);




  if (draftLoop < 3) {
    postLotteryDraft(draftLoop);
  } else {
    var myNode = document.getElementById("availablePlayers");
    while (myNode.lastElementChild) {
      myNode.removeChild(myNode.lastElementChild);
    }
    document.getElementById("overall").innerHTML = "Draft Summary";
    console.log(knicksNums);
    document.getElementById("simmedPicks").innerHTML = "";
    document.getElementById("simmedPicks").innerHTML = "";

    for (let i = 0; i < knicksPicks.length; i++) {
      var row = document.createElement("div");
      row.classList.add("row", "text-center");



      var d1 = document.createElement("div");
      d1.classList.add("col-xs-0", "col-md-3");

      var num = document.createElement("div");
      num.classList.add("col-xs-2", "col-md-2", "dSumNum");
      num.innerHTML = knicksNums[i];
      num.style.borderRight = "3px solid #F58426";
            num.style.borderBottom = "3px solid #F58426";

      var name = document.createElement("div");
      name.classList.add("col-xs-10", "col-md-4", "dSumName");
      name.innerHTML = knicksPicks[i].firstName.substring(0, 1) + ". " + knicksPicks[i].lastName;
            name.style.borderBottom = "3px solid #F58426";

      var d2 = document.createElement("div");
      d2.classList.add("col-xs-0", "col-md-3");

      row.appendChild(d1);
      row.appendChild(num);
      row.appendChild(name);
      row.appendChild(d2);

      document.getElementById("availablePlayers").appendChild(row);
    }

    document.getElementById("finishDraftButton").style.display = "block";
  }
}

// function postLotteryDraft(num) {
//   var myNode = document.getElementById("availablePlayers");
//   while (myNode.lastElementChild) {
//     myNode.removeChild(myNode.lastElementChild);
//   }
//   if (num === 1) {
//     var i = 0;
//     var afterKnicks = lottoTeamsArr.indexOf(nyk) + 1;
//     var stop = draftTeamsArr.indexOf("New York");
//     console.log("afterKnicks: " + afterKnicks);
//     console.log("stop: " + stop);
//     var j = 0;
//   } else {
//     var i = 13;
//     var stop = draftTeamsArr.length - 1;
//     var afterKnicks = 100;
//     var j = 0;
//   }
//   var inLottery = false;
//   while (i <= stop) {
//     (function (i, j, afterKnicks) {
//       setTimeout(function() {
//         if (afterKnicks < 14) {
//           i = 0;
//           document.getElementById("simmedPicks").innerHTML = lottoTeamsArr[afterKnicks].name + ": " + draftPlayers[0].lastName;
//           takenPlayers.push(draftPlayers[0]);
//           var index = draftPlayers.indexOf(draftPlayers[0]);
//           draftPlayers.splice(index, 1);
//           console.log(i);
//         } else if (afterKnicks === 14) {
//           i = 0;
//           document.getElementById("simmedPicks").innerHTML = draftTeamsArr[i] + ": " + draftPlayers[0].lastName;
//           takenPlayers.push(draftPlayers[0]);
//           var index = draftPlayers.indexOf(draftPlayers[0]);
//           draftPlayers.splice(index, 1);
//         } else {
//           if (draftTeamsArr[i] === "New York") {
//             knicksSelect();
//           } else {
//             document.getElementById("simmedPicks").innerHTML = draftTeamsArr[i] + ": " + draftPlayers[0].lastName;
//             takenPlayers.push(draftPlayers[0]);
//             var index = draftPlayers.indexOf(draftPlayers[0]);
//             draftPlayers.splice(index, 1);
//           }
//         }
//       }, 250 * j)
//     }) (i++, j++, afterKnicks++)
//   }
// }

function postLotteryDraft(num) {
  var combine = lottoTeamsArr.concat(draftTeamsArr);
  var myNode = document.getElementById("availablePlayers");
  while (myNode.lastElementChild) {
    myNode.removeChild(myNode.lastElementChild);
  }
  if (num === 1) {
    var i = lottoTeamsArr.indexOf(nyk) + 1;
    var stop = combine.indexOf("New York");
    var j = 0;
  } else {
    var i = combine.indexOf("New York") + 1;
    var stop = combine.length - 1;
    var j = 0;
  }
  while (i <= stop) {
    (function (i, j) {
      setTimeout(function() {
        document.getElementById("overall").innerHTML = "#" + (i+1);
        if (i < 14) {
          var x = Math.floor(Math.random() * 3);
          document.getElementById("simmedTeams").innerHTML = lottoTeamsArr[i].name;
          document.getElementById("simmedPicks").innerHTML = draftPlayers[x].firstName + " " + draftPlayers[x].lastName;
          takenPlayers.push(draftPlayers[x]);
          var index = draftPlayers.indexOf(draftPlayers[x]);
          draftPlayers.splice(index, 1);
          console.log(i);
        } else if (i >= 14) {
          if (combine[i] === "New York") {
            knicksSelect();
            knicksNums.push(i+1);
          } else {
            var x = Math.floor(Math.random() * 4);
            if (draftPlayers[x] === null) {
              x = 0;
            }
            // document.getElementById("simmedPicks").innerHTML = combine[i] + ": " + draftPlayers[x].lastName;
            document.getElementById("simmedTeams").innerHTML = combine[i];
            document.getElementById("simmedPicks").innerHTML = draftPlayers[x].firstName + " " + draftPlayers[x].lastName;
            takenPlayers.push(draftPlayers[x]);
            var index = draftPlayers.indexOf(draftPlayers[x]);
            draftPlayers.splice(index, 1);
          }
        }
      }, 250 * j)
    }) (i++, j++)
  }
}

function startDraftPressed() {
    document.getElementById("startDraftButton").style.display = "none";
    var i = 0;

    var knicksPick = lottoTeamsArr.indexOf(nyk);
    knicksSpot = lottoTeamsArr.indexOf(nyk);
    while (i <= knicksPick) {
      (function (i) {
        setTimeout(function() {
          if (knicksPick === i) {
            knicksSelect();

          } else {


            var x = Math.floor(Math.random() * 3);
            document.getElementById("simmedPicks").innerHTML = lottoTeamsArr[i].name + ": " + draftPlayers[x].lastName;
            takenPlayers.push(draftPlayers[x]);
            var index = draftPlayers.indexOf(draftPlayers[x]);
            draftPlayers.splice(index, 1);
          }
        }, 1000 * i)
      }) (i++)
    }
}

function finishDraftPressed() {
  document.getElementById("draftPage").style.display = "none";
  document.getElementById("teamDecisionsPage").style.display = "block";
  createOptions();
  calculateSalary();
  document.getElementsByClassName("salary")[0].innerHTML = "Cap Room: $" + addCommas(salaryCap - totalSalary);
  document.getElementsByClassName("salary")[1].innerHTML = "Cap Room: $" + addCommas(salaryCap - totalSalary);
}

var cuts = [gibson, ellington, payton, bullock];
var options = [portis, pinson];

function createOptions() {
  for (let i = 0; i < cuts.length; i++) {
    var d = document.createElement("div");
    d.classList.add("tdDiv");

    var row0 = document.createElement("div");
    row0.classList.add("row", "text-center");
    var img = document.createElement("img");
    img.src = cuts[i].headshot;
    img.classList.add("tdImg");
    row0.appendChild(img);


    var row1 = document.createElement("div");
    row1.classList.add("row", "text-center");
    var p = document.createElement("p");
    p.classList.add("tdName");
    p.innerHTML = cuts[i].firstName + " " + cuts[i].lastName;
    row1.appendChild(p);

    var row2 = document.createElement("div");
    row2.classList.add("row", "text-center");
    var p2 = document.createElement("p");
    p2.innerHTML = "$" + addCommas(cuts[i].cSalary) + " ($" + addCommas(cuts[i].deadMoney) + " Guaranteed)";
    p2.classList.add("tdSalary");
    row2.appendChild(p2);

    var row3 = document.createElement("div");
    row3.classList.add("row", "text-center");
    row3.setAttribute("id", cuts[i].lastName + "row");

    var dcol1 = document.createElement("div");
    dcol1.classList.add("col-xs-0", "col-md-3");

    var col1 = document.createElement("div");
    col1.classList.add("col-xs-6", "col-md-3");
    var cutBut = document.createElement("button");
    cutBut.innerHTML = "Cut";
    cutBut.setAttribute("id", "cut" + cuts[i].lastName);
    cutBut.classList.add("tdCut");
    cutBut.addEventListener('click', function() {
      cutPlayer(cuts[i]);
    });
    col1.appendChild(cutBut);

    var col2 = document.createElement("div");
    col2.classList.add("col-xs-6", "col-md-3");
    var keepBut = document.createElement("button");
    keepBut.innerHTML = "Keep";
    keepBut.setAttribute("id", "keep" + cuts[i].lastName);
    keepBut.classList.add("tdKeep");
    keepBut.addEventListener('click', function() {
      keepCutPlayer(cuts[i]);
    });
    col2.appendChild(keepBut);

    var dcol2 = document.createElement("div");
    dcol2.classList.add("col-xs-0", "col-md-3");

    row3.appendChild(dcol1);
        row3.appendChild(col1);
            row3.appendChild(col2);
                row3.appendChild(dcol2);
    /////
    d.appendChild(row0);
    d.appendChild(row1);
    d.appendChild(row2);
    d.appendChild(row3);
    document.getElementById("tdPlayers").appendChild(d);
  }

  for (let i = 0; i < options.length; i++) {
    var d = document.createElement("div");
    d.classList.add("tdDiv");

    var row0 = document.createElement("div");
    row0.classList.add("row", "text-center");
    var img = document.createElement("img");
    img.src = options[i].headshot;
    img.classList.add("tdImg");
    row0.appendChild(img);

    var row1 = document.createElement("div");
    row1.classList.add("row", "text-center");
    var p = document.createElement("p");
    p.classList.add("tdName");
    p.innerHTML = options[i].firstName + " " + options[i].lastName;
    row1.appendChild(p);

    var row2 = document.createElement("div");
    row2.classList.add("row", "text-center");
    var p2 = document.createElement("p");
    p2.innerHTML = "$" + addCommas(options[i].cSalary) +  " (Team Option)";
    p2.classList.add("tdSalary");
    row2.appendChild(p2);

    var row3 = document.createElement("div");
    row3.classList.add("row", "text-center");
    row3.setAttribute("id", options[i].lastName + "row");


    var dcol1 = document.createElement("div");
    dcol1.classList.add("col-xs-0", "col-md-3");

    var col1 = document.createElement("div");
    col1.classList.add("col-xs-6", "col-md-3");
    var cutBut = document.createElement("button");
    cutBut.innerHTML = "Let Go";
    cutBut.setAttribute("id", "letGo" + options[i].lastName);
    cutBut.classList.add("tdCut");
    cutBut.addEventListener('click', function() {
      letGoPlayer(options[i]);
    });
    col1.appendChild(cutBut);

    var col2 = document.createElement("div");
    col2.classList.add("col-xs-6", "col-md-3");
    var keepBut = document.createElement("button");
    keepBut.innerHTML = "Keep";
    keepBut.setAttribute("id", "keep" + options[i].lastName);
      keepBut.classList.add("tdKeep");
    keepBut.addEventListener('click', function() {
      keepOptionPlayer(options[i]);
    });
    col2.appendChild(keepBut);

    var dcol2 = document.createElement("div");
    dcol2.classList.add("col-xs-0", "col-md-3");

    row3.appendChild(dcol1);
        row3.appendChild(col1);
            row3.appendChild(col2);
                row3.appendChild(dcol2);
    /////

    d.appendChild(row0);
    d.appendChild(row1);
    d.appendChild(row2);
    d.appendChild(row3);
    document.getElementById("tdPlayers").appendChild(d);
  }
}

function refreshSalary() {
  calculateSalary();
  document.getElementsByClassName("salary")[0].innerHTML = "Cap Room: $" + addCommas(salaryCap - totalSalary);
  document.getElementsByClassName("salary")[1].innerHTML = "Cap Room: $" + addCommas(salaryCap - totalSalary);
  document.getElementsByClassName("salary")[2].innerHTML = "Cap Room: $" + addCommas(salaryCap - totalSalary);
  document.getElementsByClassName("salary")[3].innerHTML = "Cap Room: $" + addCommas(salaryCap - totalSalary);
}

var decCount = 0;

function cutPlayer(guy) {
  deadMoney += guy.deadMoney;
  var index = roster.indexOf(guy);
  roster.splice(index, 1);
  refreshSalary();
  sumCut.push(guy);
  document.getElementById("cut" + guy.lastName).style.display = "none";
  document.getElementById("keep" + guy.lastName).style.display = "none";
  document.getElementById(guy.lastName + "row").style.fontSize = "3.5vh";
  document.getElementById(guy.lastName + "row").style.fontFamily = "Montserrat";
  document.getElementById(guy.lastName + "row").style.color = "rgb(245 132 39)";
  document.getElementById(guy.lastName + "row").innerHTML = "CUT";
  decCount++;
  if (decCount >= 6) {
    // document.getElementById("teamDecisionsContinue").style.display = "block";
    teamDecisionsContinuePressed();
  }
}

function keepCutPlayer(guy) {
  document.getElementById("cut" + guy.lastName).style.display = "none";
  document.getElementById("keep" + guy.lastName).style.display = "none";
  document.getElementById(guy.lastName + "row").style.fontSize = "3.5vh";
  document.getElementById(guy.lastName + "row").style.fontFamily = "Montserrat";
  document.getElementById(guy.lastName + "row").style.color = "rgb(245 132 39)";
  document.getElementById(guy.lastName + "row").innerHTML = "KEPT";
  decCount++;
  if (decCount >= 6) {
    // document.getElementById("teamDecisionsContinue").style.display = "block";
    teamDecisionsContinuePressed();
  }
}

function letGoPlayer(guy) {
  sumDeclined.push(guy);
  document.getElementById("letGo" + guy.lastName).style.display = "none";
  document.getElementById("keep" + guy.lastName).style.display = "none";
  document.getElementById(guy.lastName + "row").style.fontSize = "3.5vh";
  document.getElementById(guy.lastName + "row").style.fontFamily = "Montserrat";
  document.getElementById(guy.lastName + "row").style.color = "rgb(245 132 39)";
    document.getElementById(guy.lastName + "row").innerHTML = "LET GO";
  decCount++;
  if (decCount >= 6) {
    // document.getElementById("teamDecisionsContinue").style.display = "block";
    teamDecisionsContinuePressed();
  }
}

function keepOptionPlayer(guy) {
  roster.push(guy);
  refreshSalary();
  document.getElementById("letGo" + guy.lastName).style.display = "none";
  document.getElementById("keep" + guy.lastName).style.display = "none";
  document.getElementById(guy.lastName + "row").style.fontSize = "3.5vh";
  document.getElementById(guy.lastName + "row").style.fontFamily = "Montserrat";
  document.getElementById(guy.lastName + "row").style.color = "rgb(245 132 39)";
    document.getElementById(guy.lastName + "row").innerHTML = "KEPT";
  decCount++;
  if (decCount >= 6) {
    // document.getElementById("teamDecisionsContinue").style.display = "block";
    teamDecisionsContinuePressed();
  }
}

function teamDecisionsContinuePressed() {

  document.getElementById("teamDecisionsPage").style.display = "none";
  document.getElementById("fa-tradePage").style.display = "block";
  document.getElementById("freeAgencyPage").style.display = "block";
  refreshSalary();
  generateFA();
  generateTradingBlock();
    window.scrollTo(0, 0);
}


// var d = document.createElement("div");
// d.classList.add("tdDiv");
//
// var row0 = document.createElement("div");
// row0.classList.add("row", "text-center");
// var img = document.createElement("img");
// img.src = options[i].headshot;
// img.classList.add("tdImg");
// row0.appendChild(img);
//
// var row1 = document.createElement("div");
// row1.classList.add("row", "text-center");
// var p = document.createElement("p");
// p.classList.add("tdName");
// p.innerHTML = options[i].firstName + " " + options[i].lastName;
// row1.appendChild(p);
//
// var row2 = document.createElement("div");
// row2.classList.add("row", "text-center");
// var p2 = document.createElement("p");
// p2.innerHTML = "$" + addCommas(options[i].cSalary) +  " (Team Option)";
// p2.classList.add("tdSalary");
// row2.appendChild(p2);
//
// var row3 = document.createElement("div");
// row3.classList.add("row", "text-center");
// row3.setAttribute("id", options[i].lastName + "row");
//
//
// var dcol1 = document.createElement("div");
// dcol1.classList.add("col-xs-0", "col-md-3");
//
// var col1 = document.createElement("div");
// col1.classList.add("col-xs-6", "col-md-3");
// var cutBut = document.createElement("button");
// cutBut.innerHTML = "Let Go";
// cutBut.setAttribute("id", "letGo" + options[i].lastName);
// cutBut.classList.add("tdCut");
// cutBut.addEventListener('click', function() {
//   letGoPlayer(options[i]);
// });
// col1.appendChild(cutBut);
//
// var col2 = document.createElement("div");
// col2.classList.add("col-xs-6", "col-md-3");
// var keepBut = document.createElement("button");
// keepBut.innerHTML = "Keep";
// keepBut.setAttribute("id", "keep" + options[i].lastName);
//   keepBut.classList.add("tdKeep");
// keepBut.addEventListener('click', function() {
//   keepOptionPlayer(options[i]);
// });
// col2.appendChild(keepBut);
//
// var dcol2 = document.createElement("div");
// dcol2.classList.add("col-xs-0", "col-md-3");
//
// row3.appendChild(dcol1);
//     row3.appendChild(col1);
//         row3.appendChild(col2);
//             row3.appendChild(dcol2);
// /////
//
// d.appendChild(row0);
// d.appendChild(row1);
// d.appendChild(row2);
// d.appendChild(row3);
// document.getElementById("tdPlayers").appendChild(d);

function generateFA() {
  var myNode = document.getElementById("freeAgentsDiv");
  while (myNode.lastElementChild) {
    myNode.removeChild(myNode.lastElementChild);
  }
  for (let i = 0; i < freeAgents.length; i++) {
    var d = document.createElement("div");
    d.classList.add("tdDiv");

    var row0 = document.createElement("div");
    row0.classList.add("row", "text-center");
    var img = document.createElement("img");
    img.src = freeAgents[i].headshot;
    img.classList.add("tdImg");
    row0.appendChild(img);

    var row1 = document.createElement("div");
    row1.classList.add("row", "text-center");
    var p = document.createElement("p");
    p.classList.add("tdName");
    p.innerHTML = freeAgents[i].firstName + " " + freeAgents[i].lastName;
    row1.appendChild(p);

    var row2 = document.createElement("div");
    row2.classList.add("row", "text-center");
    var p2 = document.createElement("p");
    p2.innerHTML = freeAgents[i].cYears + " yrs./$" + addCommas(freeAgents[i].cSalary) + " per";
    p2.classList.add("tdSalary");
    row2.appendChild(p2);

    var row3 = document.createElement("div");
    row3.classList.add("row", "text-center");
    row3.setAttribute("id", freeAgents[i].lastName + "row");

    if (offered.indexOf(freeAgents[i]) < 0) {
      if (freeAgents[i].cSalary > (salaryCap - totalSalary)) {
        d.style.opacity = ".5"
      } else {

        var dcol1 = document.createElement("div");
        dcol1.classList.add("col-xs-0", "col-md-3");

        var col1 = document.createElement("div");
        col1.classList.add("col-xs-12", "col-md-6");
        var cutBut = document.createElement("button");
        cutBut.innerHTML = "Make Offer";
        cutBut.setAttribute("id", "offer" + freeAgents[i].lastName);
        cutBut.classList.add("tdCut");
        cutBut.addEventListener('click', function() {
          offerPlayer(freeAgents[i]);
        });
        col1.appendChild(cutBut);


        var dcol2 = document.createElement("div");
        dcol2.classList.add("col-xs-0", "col-md-3");

        row3.appendChild(dcol1);
            row3.appendChild(col1);
                    row3.appendChild(dcol2);
        /////

        // var offerBut = document.createElement("button");
        // offerBut.innerHTML = "Make Offer";
        // offerBut.setAttribute("id", "offer" + freeAgents[i].lastName);
        // offerBut.addEventListener('click', function() {
        //   offerPlayer(freeAgents[i]);
        // });
      }
    } else if (rejected.indexOf(freeAgents[i]) >= 0) {
      row3.innerHTML = "REJECTED";
      row3.style.fontSize = "3.5vh";
      row3.style.fontFamily = "Montserrat";
      row3.style.color = "rgb(245 132 39)";
      d.style.backgroundColor = "#fbb2a1";
    } else if (signed.indexOf(freeAgents[i]) >= 0) {
      row3.innerHTML = "SIGNED";
      row3.style.fontSize = "3.5vh";
      row3.style.fontFamily = "Montserrat";
      row3.style.color = "rgb(245 132 39)";
      d.style.backgroundColor = "#cbd1a1";
    }

    /////
    d.appendChild(row0);
    d.appendChild(row1);
    d.appendChild(row2);
    d.appendChild(row3);
    // if (offered.indexOf(freeAgents[i]) < 0) {
    //   if (!(freeAgents[i].cSalary > (salaryCap - totalSalary))) {
    //       d.appendChild(row3);
    //   }
    // }
    document.getElementById("freeAgentsDiv").appendChild(d);
  }
}

function generateTradingBlock() {
  var tradeablePlayers = [randle, payton, ntilikina, knox, gibson, bullock, ellington, dsmith, brazdeikis, portis]

  var myNode = document.getElementById("tradingBlock");
  while (myNode.lastElementChild) {
    myNode.removeChild(myNode.lastElementChild);
  }

  for (let i = 0; i < tradeablePlayers.length; i++) {
    if (roster.indexOf(tradeablePlayers[i]) >= 0) {
      var d = document.createElement("div");
      d.classList.add("blockDiv", "row");

      var dcol1 = document.createElement("div");
      dcol1.classList.add("col-xs-0", "col-md-2");

      var col1 = document.createElement("div");
      col1.classList.add("col-xs-3", "col-md-2");

      var img = document.createElement("img");
      img.src = tradeablePlayers[i].headshot;
      img.classList.add("blockImg");

      col1.appendChild(img);

      var col2 = document.createElement("div");
      col2.classList.add("col-xs-9", "col-md-6");

      var p = document.createElement("p");
      p.classList.add("blockName");
      p.innerHTML = tradeablePlayers[i].firstName + " " + tradeablePlayers[i].lastName;

      col2.appendChild(p);

      var dcol2 = document.createElement("div");
      dcol2.classList.add("col-xs-0", "col-md-2");

      d.appendChild(dcol1);
            d.appendChild(col1);
                  d.appendChild(col2);
                        d.appendChild(dcol2);

      d.addEventListener('click', function() {
        generateOffers(tradeablePlayers[i]);
        document.getElementById("tradingBlock").style.display = "none";
        document.getElementById("tradeDiv").style.display = "block";
      });


      document.getElementById("tradingBlock").appendChild(d);

      // var name = document.createElement("a");
      // name.innerHTML = tradeablePlayers[i].firstName + " " + tradeablePlayers[i].lastName;
      // name.addEventListener('click', function() {
      //   generateOffers(tradeablePlayers[i]);
      //   document.getElementById("tradingBlock").style.display = "none";
      //   document.getElementById("tradeDiv").style.display = "block";
      // });
      // document.getElementById("tradingBlock").appendChild(name);
    }
  }
}

function offerPlayer(guy) {
  var rand = Math.floor(Math.random() * 101);
  if (guy.interest >= rand) {
    // accept
    if ((salaryCap - totalSalary >= guy.cSalary)) {
      roster.push(guy);
      sumSigned.push(guy);
      signed.push(guy);
      refreshSalary();
      offered.push(guy);
      console.log(roster);
      generateFA();
      // document.getElementById(guy.lastName + "row").innerHTML = "SIGNED";
      // document.getElementById(guy.lastName + "row").style.fontSize = "3.5vh";
      // document.getElementById(guy.lastName + "row").style.fontFamily = "Montserrat";
      // document.getElementById(guy.lastName + "row").style.color = "rgb(245 132 39)";
    }
  } else {
    // decline
    offered.push(guy);
    rejected.push(guy);
    console.log(roster);
    generateFA();
    // document.getElementById(guy.lastName + "row").innerHTML = "REJECTED";
    // document.getElementById(guy.lastName + "row").style.fontSize = "3.5vh";
    // document.getElementById(guy.lastName + "row").style.fontFamily = "Montserrat";
    // document.getElementById(guy.lastName + "row").style.color = "rgb(245 132 39)";
  }
}

function generateRoster() {
  roster.sort(function(a, b){
    if(a.lastName < b.lastName) { return -1; }
    if(a.lastName > b.lastName) { return 1; }
    return 0;
});

  var myNode = document.getElementById("roster");
  while (myNode.lastElementChild) {
    myNode.removeChild(myNode.lastElementChild);
  }
  for (let i = 0; i < roster.length; i++) {
    var d = document.createElement("div");
    d.classList.add("rosterDiv", "row");

    var dcol1 = document.createElement("div");
    dcol1.classList.add("col-xs-1", "col-md-2");

    var col1 = document.createElement("div");
    col1.classList.add("col-xs-2", "col-md-2");

    // var img = document.createElement("img");
    // img.src = roster[i].headshot;
    // img.classList.add("blockImg");

    var pos = document.createElement("p");
    pos.classList.add("blockName");
    pos.innerHTML = roster[i].position;

    col1.appendChild(pos);

    var col2 = document.createElement("div");
    col2.classList.add("col-xs-9", "col-md-6");

    var p = document.createElement("p");
    p.classList.add("blockName");
    p.innerHTML = roster[i].firstName + " " + roster[i].lastName;

    col2.appendChild(p);

    var dcol2 = document.createElement("div");
    dcol2.classList.add("col-xs-1", "col-md-2");

    d.appendChild(dcol1);
          d.appendChild(col1);
                d.appendChild(col2);
                      d.appendChild(dcol2);


    document.getElementById("roster").appendChild(d);
  }
}

function faNavClick() {
  document.getElementById("freeAgencyPage").style.display = "block";
  document.getElementById("tradePage").style.display = "none";
      document.getElementById("rosterPage").style.display = "none";
  document.getElementById("faNav").style.color = "#F58426";
  document.getElementById("tradeNav").style.color = "#f9c59a";
  document.getElementById("rosterNav").style.color = "#f9c59a";
}

function rosterNavClick() {
  document.getElementById("freeAgencyPage").style.display = "none";
  document.getElementById("tradePage").style.display = "none";
  document.getElementById("rosterPage").style.display = "block";
  document.getElementById("faNav").style.color = "#f9c59a";
  document.getElementById("tradeNav").style.color = "#f9c59a";
    document.getElementById("rosterNav").style.color = "#F58426";
    generateRoster();
}

function tradeNavClick() {
  document.getElementById("freeAgencyPage").style.display = "none";
  document.getElementById("tradePage").style.display = "block";
    document.getElementById("rosterPage").style.display = "none";
  document.getElementById("tradeDiv").style.display = "none";
  document.getElementById("tradingBlock").style.display = "block";
  generateTradingBlock();
  document.getElementById("faNav").style.color = "#f9c59a";
  document.getElementById("tradeNav").style.color = "#F58426";
    document.getElementById("rosterNav").style.color = "#f9c59a";
}

function generateOffers(guy) {
  console.log(guy);
  var myNode = document.getElementById("tradeDiv");
  while (myNode.lastElementChild) {
    myNode.removeChild(myNode.lastElementChild);
  }
  var poss = [];
  var prePoss = [];
  for (let i = 0; i < tradesArr.length; i++) {
    var good = false;
    if (tradesArr[i].send.indexOf(guy) >= 0) {
      console.log(tradesArr[i].send.indexOf(guy) + " "  + guy);
      good = true;
      for (let j = 0; j < tradesArr[i].send.length; j++) {
        if (roster.indexOf(tradesArr[i].send[j]) < 0) {
          good = false;
        }
      }
      for (let k = 0; k < tradesArr[i].sendPicks.length; k++) {
        if (tradePicks.indexOf(tradesArr[i].sendPicks[k]) < 0) {
          good = false;
        }
      }
      if (good) {
        prePoss.push(tradesArr[i]);
      }
    }
  }
  console.log(prePoss);
  if (prePoss.length > 0) {
    var rand = Math.floor(Math.random() * prePoss.length);
    poss.push(prePoss[rand]);


    for (let k = 0; k < poss.length; k++) {
        var trade = document.createElement("div");

        var row1 = document.createElement("div");
        row1.classList.add("row", "tradeTeamRow");

        var knicks = document.createElement("p");
        knicks.innerHTML = "Knicks";
        knicks.classList.add("tradeTeam");

        row1.appendChild(knicks);
        trade.appendChild(row1);


        var sendDiv = document.createElement("div");
        for (let h = 0; h < poss[k].send.length; h++) {
          var sendNameRow = document.createElement("div");
          sendNameRow.classList.add("row", "assetsRow");

          var dCol1 = document.createElement("div");
          dCol1.classList.add("col-xs-0", "col-md-2");

          var hCol = document.createElement("div");
          hCol.classList.add("col-xs-3", "col-md-2", "tradehead");
          var headshot = document.createElement("img");
          headshot.classList.add("tradePlayerImg");
          headshot.src = poss[k].send[h].headshot;
          hCol.appendChild(headshot);

          var nCol = document.createElement("div");
          nCol.classList.add("col-xs-9", "col-md-6");
          var player = document.createElement("p");
          player.classList.add("tradePlayerName");
          player.innerHTML = poss[k].send[h].firstName + " " + poss[k].send[h].lastName;
          var salary = document.createElement("p");
          salary.classList.add("tradePlayerSalary");
          salary.innerHTML = "$" + addCommas(poss[k].send[h].cSalary);

          nCol.appendChild(player);
          nCol.appendChild(salary);

          var dCol2 = document.createElement("div");
          dCol2.classList.add("col-xs-0", "col-md-2");

          sendNameRow.appendChild(dCol1);
          sendNameRow.appendChild(hCol);
          sendNameRow.appendChild(nCol);
          sendNameRow.appendChild(dCol2);



          sendDiv.appendChild(sendNameRow);
        }
        for (let a = 0; a < poss[k].sendPicks.length; a++) {
          var sendPickRow = document.createElement("div");
          sendPickRow.classList.add("row", "assetsRow");

          var dCol = document.createElement("div");
          dCol.classList.add("col-xs-3", "col-md-2");


          var pCol = document.createElement("div");
          pCol.classList.add("col-xs-9", "col-md-6");
          var pick = document.createElement("p");
          pick.innerHTML = poss[k].sendPicks[a];
          pick.classList.add("tradePlayerName");

          pCol.appendChild(pick);


          var dCol1 = document.createElement("div");
          dCol1.classList.add("col-xs-0", "col-md-2");
          var dCol2 = document.createElement("div");
          dCol2.classList.add("col-xs-0", "col-md-2");

    sendPickRow.appendChild(dCol1);
          sendPickRow.appendChild(dCol);
          sendPickRow.appendChild(pCol);
            sendPickRow.appendChild(dCol2);
          sendDiv.appendChild(sendPickRow);
        }

        var row2 = document.createElement("div");
        row2.classList.add("row", "tradeTeamRow");

        var other = document.createElement("p");
        other.innerHTML = poss[k].otherTeam;
        other.classList.add("tradeTeam");
        row2.appendChild(other);

        var receiveDiv = document.createElement("div");
        for (let h = 0; h < poss[k].receive.length; h++) {
          var receiveNameRow = document.createElement("div");
          receiveNameRow.classList.add("row", "assetsRow");

          var dCol1 = document.createElement("div");
          dCol1.classList.add("col-xs-0", "col-md-2");

          var hCol = document.createElement("div");
          hCol.classList.add("col-xs-3", "col-md-2", "tradehead");
          var headshot = document.createElement("img");
          headshot.classList.add("tradePlayerImg");
          headshot.src = poss[k].receive[h].headshot;
          hCol.appendChild(headshot);

          var nCol = document.createElement("div");
          nCol.classList.add("col-xs-9", "col-md-6");
          var player = document.createElement("p");
          player.classList.add("tradePlayerName");
          player.innerHTML = poss[k].receive[h].firstName + " " + poss[k].receive[h].lastName;
          var salary = document.createElement("p");
          salary.classList.add("tradePlayerSalary");
          salary.innerHTML = "$" + addCommas(poss[k].receive[h].cSalary);


          nCol.appendChild(player);
          nCol.appendChild(salary);

          var dCol2 = document.createElement("div");
          dCol2.classList.add("col-xs-0", "col-md-2");

        receiveNameRow.appendChild(dCol1);
          receiveNameRow.appendChild(hCol);
          receiveNameRow.appendChild(nCol);
          receiveNameRow.appendChild(dCol2);

          receiveDiv.appendChild(receiveNameRow);


          // var player = document.createElement("p");
          // player.innerHTML = poss[k].receive[h].lastName;
          // receiveDiv.appendChild(player);
        }
        for (let a = 0; a < poss[k].receivePicks.length; a++) {
          var receivePickRow = document.createElement("div");
          receivePickRow.classList.add("row", "assetsRow");

          var dCol = document.createElement("div");
          dCol.classList.add("col-xs-3", "col-md-2");


          var pCol = document.createElement("div");
          pCol.classList.add("col-xs-9", "col-md-6");
          var pick = document.createElement("p");
          pick.innerHTML = poss[k].receivePicks[a];
          pick.classList.add("tradePlayerName");

          pCol.appendChild(pick);

          var dCol1 = document.createElement("div");
          dCol1.classList.add("col-xs-0", "col-md-2");
          var dCol2 = document.createElement("div");
          dCol2.classList.add("col-xs-0", "col-md-2");

  receivePickRow.appendChild(dCol1);
          receivePickRow.appendChild(dCol);
          receivePickRow.appendChild(pCol);
          receivePickRow.appendChild(dCol2);
          receiveDiv.appendChild(receivePickRow);


          // var pick = document.createElement("p");
          // pick.innerHTML = poss[k].receivePicks[a];
          // receiveDiv.appendChild(pick);
        }

        var acceptRow = document.createElement("div");
        acceptRow.classList.add("row", "text-center");

        var acceptButton = document.createElement("button");
        acceptButton.innerHTML = "Accept";
        acceptButton.classList.add("accTradeButt");
        acceptButton.addEventListener('click', function() {
          acceptOffer(poss[k]);
        });

        var rejectButton = document.createElement("button");
        rejectButton.innerHTML = "Reject";
        rejectButton.style.display = "inline";
        rejectButton.style.marginLeft = "15px";
        rejectButton.classList.add("accTradeButt");
        rejectButton.addEventListener('click', function() {
          rejectOffer(poss[k]);
        });

        acceptRow.appendChild(acceptButton);
        acceptRow.appendChild(rejectButton);

        var tradeDiv = document.getElementById("tradeDiv");

        trade.appendChild(sendDiv);
        trade.appendChild(row2);
        trade.appendChild(receiveDiv);
        trade.appendChild(acceptRow);
        tradeDiv.appendChild(trade);
    }
  } else {
    var row = document.createElement("div");
    row.classList.add("row", "text-center");

    var p = document.createElement("p");
    p.classList.add("noOffers");
    p.innerHTML = "No Offers Found";

    row.appendChild(p);


    var row2 = document.createElement("div");
    row2.classList.add("row", "text-center");

    var rejectButton = document.createElement("button");
    rejectButton.innerHTML = "Back";
    rejectButton.style.display = "inline";
    rejectButton.style.marginLeft = "15px";
    rejectButton.classList.add("accTradeButt");
    rejectButton.style.margin = "0px !important";
    rejectButton.addEventListener('click', function() {
      back();
    });

    row2.appendChild(rejectButton);

      var tradeDiv = document.getElementById("tradeDiv");
      tradeDiv.appendChild(row);
      tradeDiv.appendChild(row2);
  }
}

function back() {
  document.getElementById("tradingBlock").style.display = "block";
  document.getElementById("tradeDiv").style.display = "none";
  generateTradingBlock();
  generateFA();
}


function acceptOffer(offer) {
  for (let i = 0; i < offer.send.length; i++) {
    var index = roster.indexOf(offer.send[i]);
    roster.splice(index, 1);
    sumTradedAway.push(offer.send[i]);
  }
  for (let i = 0; i < offer.sendPicks.length; i++) {
    var index = tradePicks.indexOf(offer.sendPicks[i]);
    tradePicks.splice(index, 1);
    sumPicksGiven.push(offer.sendPicks[i]);
  }
  for (let j = 0; j < offer.receive.length; j++) {
    roster.push(offer.receive[j]);
    sumTradedFor.push(offer.receive[j]);
  }
  for (let j = 0; j < offer.receivePicks.length; j++) {
    sumPicksReceived.push(offer.receivePicks[j]);
  }
  console.log(roster);

  document.getElementById("tradingBlock").style.display = "block";
  document.getElementById("tradeDiv").style.display = "none";
  var index = tradesArr.indexOf(offer);
  tradesArr.splice(index, 1);
  refreshSalary();
  generateTradingBlock();
  generateFA();
  console.log(tradePicks);
}

function rejectOffer(offer) {
  document.getElementById("tradingBlock").style.display = "block";
  document.getElementById("tradeDiv").style.display = "none";
  var index = tradesArr.indexOf(offer);
  tradesArr.splice(index, 1);
  generateTradingBlock();
  generateFA();
}

/// negatives
function addCommas(num) {
  var neg = false;
  if (num < 0) {
    neg = true;
  }
  var str = num.toString();
  if (neg) {
    str = str.substr(1);
  }
  var count = 0;
  var newStr = "";
  for (var i = str.length - 1; i > -1; i--) {
    if (count == 2) {
      var additive = "," + str[i];
      newStr = additive.concat(newStr);
      count = 0;
      continue;
    } else {
      newStr = str[i].concat(newStr);
    }
    count++;
  }
  if (newStr[0] == ",") {
    newStr = newStr.substring(1);
  }
  if (neg) {
    newStr = "-" + newStr;
  }
  return newStr;
}

function faTradeDone() {
  document.getElementById("recordPage").style.display = "block";
  document.getElementById("fa-tradePage").style.display = "none";
}

var finalRecord = "";

function sim() {
  var wins = 0;
  for (let i = 0; i < roster.length; i++) {
    wins += roster[i].wa;
  }
  wins *= 1.24;
  wins = Math.round(wins);
  var losses = 82 - wins;
  console.log(wins);
  console.log(losses);
  document.getElementById("record").innerHTML = wins + " - " + losses;

  finalRecord = wins + " - " + losses;

  console.log("traded for: " + sumTradedFor);
  console.log("drafted: " + sumDrafted);
  console.log("signed: " + sumSigned);
  document.getElementById("sim").style.display = "none";
    document.getElementById("summaryButton").style.display = "block";
}

// var sumDrafted = [];
// var sumSigned = [];
// var sumTradedFor = [];

function summaryButton() {
  document.getElementById("recordPage").style.display = "none";
  document.getElementById("summaryPage").style.display = "block";
  document.body.style.backgroundColor = "#F58426";
  document.documentElement.style.background = "#F58426";

  document.getElementById("sumRecord").innerHTML = finalRecord;

  for (let i = 0; i < sumDrafted.length; i++) {
    var d = document.createElement("div");
    d.classList.add("sumDiv", "row");

    var dcol1 = document.createElement("div");
    dcol1.classList.add("col-xs-1", "col-md-2");

    // var col1 = document.createElement("div");
    // col1.classList.add("col-xs-3", "col-md-2");
    //
    // var img = document.createElement("img");
    // img.src = sumDrafted[i].headshot;
    // img.classList.add("blockImg");
    //
    // col1.appendChild(img);

    var col2 = document.createElement("div");
    col2.classList.add("col-xs-7", "col-md-5");

    var p = document.createElement("p");
    p.classList.add("sumName");
    p.innerHTML = sumDrafted[i].firstName + " " + sumDrafted[i].lastName;

    col2.appendChild(p);

    var col3 = document.createElement("div");
    col3.classList.add("col-xs-4", "col-md-3");

    var p2 = document.createElement("p");
    p2.classList.add("sumName");
    p2.innerHTML = "Drafted";
    col3.appendChild(p2);

    var dcol2 = document.createElement("div");
    dcol2.classList.add("col-xs-0", "col-md-2");

    d.appendChild(dcol1);
          d.appendChild(col2);
                d.appendChild(col3);
                      d.appendChild(dcol2);

    document.getElementById("inDiv").appendChild(d);
  }

  for (let i = 0; i < sumSigned.length; i++) {
    var d = document.createElement("div");
    d.classList.add("sumDiv", "row");

    var dcol1 = document.createElement("div");
    dcol1.classList.add("col-xs-1", "col-md-2");

    var col2 = document.createElement("div");
    col2.classList.add("col-xs-7", "col-md-5");

    var p = document.createElement("p");
    p.classList.add("sumName");
    p.innerHTML = sumSigned[i].firstName + " " + sumSigned[i].lastName;

    col2.appendChild(p);

    var col3 = document.createElement("div");
    col3.classList.add("col-xs-4", "col-md-3");

    var p2 = document.createElement("p");
    p2.classList.add("sumName");
    p2.innerHTML = "Signed";
    col3.appendChild(p2);

    var dcol2 = document.createElement("div");
    dcol2.classList.add("col-xs-0", "col-md-2");

    d.appendChild(dcol1);
          d.appendChild(col2);
                d.appendChild(col3);
                      d.appendChild(dcol2);

    document.getElementById("inDiv").appendChild(d);
  }

  for (let i = 0; i < sumTradedFor.length; i++) {
    var d = document.createElement("div");
    d.classList.add("sumDiv", "row");

    var dcol1 = document.createElement("div");
    dcol1.classList.add("col-xs-1", "col-md-2");

    var col2 = document.createElement("div");
    col2.classList.add("col-xs-7", "col-md-5");

    var p = document.createElement("p");
    p.classList.add("sumName");
    p.innerHTML = sumTradedFor[i].firstName + " " + sumTradedFor[i].lastName;

    col2.appendChild(p);

    var col3 = document.createElement("div");
    col3.classList.add("col-xs-4", "col-md-3");

    var p2 = document.createElement("p");
    p2.classList.add("sumName");
    p2.innerHTML = "Traded For";
    col3.appendChild(p2);

    var dcol2 = document.createElement("div");
    dcol2.classList.add("col-xs-0", "col-md-2");

    d.appendChild(dcol1);
          d.appendChild(col2);
                d.appendChild(col3);
                      d.appendChild(dcol2);

    document.getElementById("inDiv").appendChild(d);
  }
  for (let i = 0; i < sumPicksReceived.length; i++) {
    var d = document.createElement("div");
    d.classList.add("sumDiv", "row");

    var dcol1 = document.createElement("div");
    dcol1.classList.add("col-xs-1", "col-md-2");

    var col2 = document.createElement("div");
    col2.classList.add("col-xs-7", "col-md-5");

    var p = document.createElement("p");
    p.classList.add("sumName");
    p.innerHTML = sumPicksReceived[i];

    col2.appendChild(p);

    var col3 = document.createElement("div");
    col3.classList.add("col-xs-4", "col-md-3");

    var p2 = document.createElement("p");
    p2.classList.add("sumName");
    p2.innerHTML = "Traded For";
    col3.appendChild(p2);

    var dcol2 = document.createElement("div");
    dcol2.classList.add("col-xs-0", "col-md-2");

    d.appendChild(dcol1);
          d.appendChild(col2);
                d.appendChild(col3);
                      d.appendChild(dcol2);

    document.getElementById("inDiv").appendChild(d);
  }

  for (let i = 0; i < sumCut.length; i++) {
    var d = document.createElement("div");
    d.classList.add("sumDiv", "row");

    var dcol1 = document.createElement("div");
    dcol1.classList.add("col-xs-1", "col-md-2");

    var col2 = document.createElement("div");
    col2.classList.add("col-xs-7", "col-md-5");

    var p = document.createElement("p");
    p.classList.add("sumName");
    p.innerHTML = sumCut[i].firstName + " " + sumCut[i].lastName;

    col2.appendChild(p);

    var col3 = document.createElement("div");
    col3.classList.add("col-xs-4", "col-md-3");

    var p2 = document.createElement("p");
    p2.classList.add("sumName");
    p2.innerHTML = "Cut";
    col3.appendChild(p2);

    var dcol2 = document.createElement("div");
    dcol2.classList.add("col-xs-0", "col-md-2");

    d.appendChild(dcol1);
          d.appendChild(col2);
                d.appendChild(col3);
                      d.appendChild(dcol2);

    document.getElementById("outDiv").appendChild(d);
  }

  for (let i = 0; i < sumDeclined.length; i++) {
    var d = document.createElement("div");
    d.classList.add("sumDiv", "row");

    var dcol1 = document.createElement("div");
    dcol1.classList.add("col-xs-1", "col-md-2");

    var col2 = document.createElement("div");
    col2.classList.add("col-xs-7", "col-md-5");

    var p = document.createElement("p");
    p.classList.add("sumName");
    p.innerHTML = sumDeclined[i].firstName + " " + sumDeclined[i].lastName;

    col2.appendChild(p);

    var col3 = document.createElement("div");
    col3.classList.add("col-xs-4", "col-md-3");

    var p2 = document.createElement("p");
    p2.classList.add("sumName");
    p2.innerHTML = "Signed";
    col3.appendChild(p2);

    var dcol2 = document.createElement("div");
    dcol2.classList.add("col-xs-0", "col-md-2");

    d.appendChild(dcol1);
          d.appendChild(col2);
                d.appendChild(col3);
                      d.appendChild(dcol2);

    document.getElementById("outDiv").appendChild(d);
  }
  for (let i = 0; i < sumTradedAway.length; i++) {
    var d = document.createElement("div");
    d.classList.add("sumDiv", "row");

    var dcol1 = document.createElement("div");
    dcol1.classList.add("col-xs-1", "col-md-2");

    var col2 = document.createElement("div");
    col2.classList.add("col-xs-7", "col-md-5");

    var p = document.createElement("p");
    p.classList.add("sumName");
    p.innerHTML = sumTradedAway[i].firstName + " " + sumTradedAway[i].lastName;

    col2.appendChild(p);

    var col3 = document.createElement("div");
    col3.classList.add("col-xs-4", "col-md-3");

    var p2 = document.createElement("p");
    p2.classList.add("sumName");
    p2.innerHTML = "Traded Away";
    col3.appendChild(p2);

    var dcol2 = document.createElement("div");
    dcol2.classList.add("col-xs-0", "col-md-2");

    d.appendChild(dcol1);
          d.appendChild(col2);
                d.appendChild(col3);
                      d.appendChild(dcol2);

    document.getElementById("outDiv").appendChild(d);
  }
  for (let i = 0; i < sumPicksGiven.length; i++) {
    var d = document.createElement("div");
    d.classList.add("sumDiv", "row");

    var dcol1 = document.createElement("div");
    dcol1.classList.add("col-xs-1", "col-md-2");

    var col2 = document.createElement("div");
    col2.classList.add("col-xs-7", "col-md-5");

    var p = document.createElement("p");
    p.classList.add("sumName");
    p.innerHTML = sumPicksGiven[i];

    col2.appendChild(p);

    var col3 = document.createElement("div");
    col3.classList.add("col-xs-4", "col-md-3");

    var p2 = document.createElement("p");
    p2.classList.add("sumName");
    p2.innerHTML = "Traded Away";
    col3.appendChild(p2);

    var dcol2 = document.createElement("div");
    dcol2.classList.add("col-xs-0", "col-md-2");

    d.appendChild(dcol1);
          d.appendChild(col2);
                d.appendChild(col3);
                      d.appendChild(dcol2);

    document.getElementById("outDiv").appendChild(d);
  }

}
