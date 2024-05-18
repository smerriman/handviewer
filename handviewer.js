var fastVersion = false;
var fireFox = 0;
var linURL;
var mainDivShowing = false;
var availableHeight = 10;
var availableWidth = 10;
var totalWidth = 10;
var totalHeight = 10;
var scrollBarWidth;
var margin = 0;
var suitHeight = 10;
var handHeight = 50;
var handWidth = 50;
var nameHeight = 10;
var displayType = '';
var handShowing = new Array(4);
var numHandsShowing = 4;
var seatKibitzed = -1;
var wasKibitzed = -1;
var seatKibitzedSet = false;
var showPlayedCards = true;
var hideChat = false;
var chatFontSize = 1;
var suits = new Array('Club', 'Diamond', 'Heart', 'Spade');
var suitHTMLs = new Array(
  "<font color='000000'>&clubs;</font>",
  "<font color='CB0000'>&diams;</font>",
  "<font color='CB0000'>&hearts;</font>",
  "<font color='000000'>&spades;</font>",
  "<font color='000000'>NT</font>"
);
//var suitHTMLs=new Array("<font color='000000'><tt>&clubs;</tt></font>","<font color='CB0000'><tt>&diams;</tt></font>","<font color='CB0000'><tt>&hearts;</tt></font>","<font color='000000'><tt>&spades;</tt></font>","<font color='000000'>NT</font>");
//var suitHTMLs=new Array("<font color='000000'><tt>&#9827;</tt></font>","<font color='CB0000'><tt>&#9830;</tt></font>","<font color='CB0000'><tt>&#9829;</tt></font>","<font color='000000'><tt>&#9824;</tt></font>","<font color='000000'>NT</font>");
var suitForums = new Array('[CL]', '[DI]', '[HE]', '[SP]', 'NT');
var suitchars = 'CDHSN';
var callchars = 'PDR?';
var calls = ['P', 'X', 'XX', '?'];
var cardchars = '23456789TJQKA';
var seats = new Array('South', 'West', 'North', 'East');
var xpos = new Array(90, 10, 90, 170);
var ypos = new Array(170, 90, 10, 90);
var blockDiv;
var statusDiv;
var menuDiv;
var menuTable;
var navMenuDiv;
var navMenuTable;
var hasAnnotations = false;
var introAnnotation = null;
var annotDiv;

var auctionHeadingDiv;
var auctionHeading;
var auctionHeadingCells = new Array(5);
var auctionTableDiv;
var auctionTable;
var mouseOverName = -1;
var handDivs = new Array(4);
var nameBars = new Array(4);
var nameInitials = new Array(4);
var nameTexts = new Array(4);
var suitRows = new Array(4);
var suitSymbols = new Array(4);
var suitHoldings = new Array(4);
var cardDivs = new Array(4);
var cardDivsCreated = false;
var gibDivs = new Array(4);
var gibDivsShowing = false;
var gibThinking = false;
var vulDivs = new Array(4);
var vulInnerDiv;
var trickDivs = new Array(4);
var tricksDiv;
var tricksDivLeft;
var tricksDivRight;
var scoreDiv;
var otherTableDiv;
var nsTeamDiv;
var ewTeamDiv;
var nsScoreDiv;
var ewScoreDiv;
var announceDiv;
var announceDivCentered = false;
var announceTimer;
var alertDiv;
var alertedCall = -1;
var deck = new Array(4);
var howManyCards = new Array(4);
var howManyCardsDealt = new Array(4);
var howManySuit = new Array(4);
var howManySuitDealt = new Array(4);
var howManyXs = new Array(4);
var boardNum = 0;
var dealer = -1;
var nsVul;
var ewVul;
var whosTurn;
var levelBid = new Array();
var strainBid = new Array();
var seatBid = new Array();
var passes = -1;
var lastLevelBid;
var lastStrainBid;
var lastBidder;
var contractLevel;
var doubled;
var trump;
var declarer;
var dummy;
var playSequence = new Array(52);
var playSeqPoint;
var playSeqMax;
var wasPlaySequence = new Array(52);
var wasPlaySeqPoint;
var wasPlaySeqMax;
var wasTricksClaimed;
var trick;
var inTrick;
var bidSeqPoint;
var bidSeqMax;
var bidSequence = new Array();
var callExplanation = new Array();
var callAnnotation = new Array();
var callAnnotType = new Array();
var rankPlayed = new Array(13);
var suitPlayed = new Array(13);
var seatPlayed = new Array(13);
var trickWinner = new Array(13);
var cardAnnotation = new Array(13);
var cardAnnotType = new Array(13);
var nsTricks = 0;
var ewTricks = 0;
var tricksClaimed;
var claimShowing;
var trickTimer;
var settings;
var fontSize = 12;
var buttonFontSize = 12;
var buttonHeight = 20;
var connected = false;
var connectTimer;
var keepAliveTimer;
var heartBeatTimer;
var inBlast = false;
var queueID;
var tableID;
var myTableID;
var contextID = '';
var lessonID;
var lessonBoardNumber;
var mySeat = -1;
var playingClient = false;
var vugraphClient = false;
var vugraphSession;
var vugraphScoreReceived = false;
var scoreNS;
var scoreEW;
var teamNS;
var teamEW;
var scoreFormat;
var otherTableResult;
var highlightColor = '#FFCE00';
var team1Color = '#99CCCC';
var team2Color = '#CBCBCB';
var borderStyle = '1px solid black';
var isVugraphMatch;
var vugraphEvent;
var vugraphSegment;
var vugraphScoring;
var vugraphFirstBoard;
var vugraphLastBoard;
var vugraphFirstRealBoard;
var vugraphLastRealBoard;
var vugraphNumBoards;
var vugraphTeam1;
var vugraphTeam2;
var vugraphCarryover1;
var vugraphCarryover2;
var vugraphSegment1;
var vugraphSegment2;
var vugraphResults;
var vugraphDeclarer;
var vugraphRawScores;
var vugraphIMPs;
var vugraphMatchpoints;
var vugraphPlayers;
var vugraphPlayerNames;
var vugraphPairsSeatDivs = new Array(4);
var roomShowing = 0;
var boardShowing;
var scoreBoardDiv;
var scoreBoardTableDiv;
var scoreBoardTable;
var scoreBoardHeadingDiv;
var scoreBoardDivShowing = false;
var scoreBoardTitleDiv;
var scoreBoardTitleLine1Div;
var scoreBoardTitleLine2Div;
var scoreBoardTitleLine3Div;
var scoreBoardScoreTable;
var scoreBoardLogo;
var picturesOfCards = false;
var autoPlayNextCard = false;
var cardAnimationTimer;
var cardAnimationTime = 2000;
var cardAnimationStepTime = 20;
var cardAnimationStepsRemaining;


var cardAnimationPosX;
var cardAnimationPosY;
var cardAnimationStepDX;
var cardAnimationStepDY;
var cardImageDrifting = null;
var cardImageDiv = new Array(4);
var cardBackDiv = new Array(4);
var cardImageHeight = 0;
var cardImageWidth = 0;
var cardImageXOverlap = 0;
var trickCardImage = new Array(4);
var biddingBox;
var biddingBoxPassButton;
var biddingBoxDblButton;
var biddingBoxLevelButton;
var biddingBoxStrainButton;
var biddingBoxExplainEdit;
var biddingBoxInstructDiv;
var biddingBoxLevelSelected = -1;
var commentsEdit;
var commentsHeading;
var cardHighlighted = new Array(4);
var userDealt = new Array(4);
var editorWidthOffset = 0;
var editorType;
var isEditor = false;
var getSequence = false;
var getDeal = false;
var getDealer = false;
var keyboardSuit = -1;
var editorDiv;
var editorDivHeight = 0;
var editorHVLButton;
var editorNewButton;
var trickEndTimer = null;
var dealEndState = false;
var dealsInLesson = 4;
var firstBlast = false;
var getLessonContractPhase = 0;
var gameOverState = false;
var lessonStrain;
var leaderBoardDiv = null;
var leaderBoardTable;
var newGameButton = null;

var editorMenuDiv = document.getElementById('editorMenuDiv');
var biddingCheck = document.getElementById('bidding');
var dealerTD = document.getElementById('dealerTD');
var vulTD = document.getElementById('vulTD');
var hands = [
  document.getElementById('south'),
  document.getElementById('west'),
  document.getElementById('north'),
  document.getElementById('east'),
];
var dealers = [
  document.getElementById('sdeals'),
  document.getElementById('wdeals'),
  document.getElementById('ndeals'),
  document.getElementById('edeals'),
];
var vuls = [
  document.getElementById('none'),
  document.getElementById('both'),
  document.getElementById('ns'),
  document.getElementById('ew'),
];
var createButton = document.getElementById('createButton');
var editorMenuShowing = false;
var firstResize = true;

var cardByCard = true;
var exploreLine = false;



var myHandler = {
  rcvMessage: function (message) {
    processV2Message(message);
  },
};

if (typeof window.innerHeight == 'number') {
  fireFox = 1;
  window.onresize = function () {
    respondToBodyResize();
  };
} else {
  document.body.onresize = function () {
    setTimeout('respondToBodyResize()', 10);
  };
}
var wantsFast = gup('f').toLowerCase();
if (wantsFast == 'y') {
  fastVersion = true;
  removeButton('gibButton');
}





var tbt = gup('tbt').toLowerCase();

if (tbt == 'y') {
  cardByCard = false;
}


tableID = gup('tableID');
if (tableID != '') {
  vugraphClient = true;
} else {
  lessonID = gup('lessonID');
  if (lessonID != '') {
    playingClient = true;
    vugraphClient = true;
    firstBlast = true;
  }
}


loadCookieOptions();



if (gup('hc').toUpperCase() == 'Y') hideChat = true;

editorType = gup('editor').toUpperCase();
isEditor = editorType != '';
if (editorType != 'Y' && editorType != 'F') {
  displayType = editorType;
}
if (editorType) {
  editorMenuShowing = true;
}


setDisplayType(displayType);

createHandTables();



clearDeck(false);




if (vugraphClient) {
  createCardDivs();
  vugraphSession = 'vg' + Math.random() * 100000;
  initVugraphSession();
  removeButton('newButton');
  removeButton('nextButton');
  removeButton('rewindButton');
  removeButton('undoButton');
  removeButton('shuffleButton');
  if (playingClient) {
    removeButton('gibButton');
    mySeat = 0;
    showPlayedCards = false;
    resetLessonScores();
    setPlayerName('S', 'Declarer');
    setPlayerName('W', 'LHO');
    setPlayerName('N', 'Dummy');
    setPlayerName('E', 'RHO');
  } else {
    removeButton('helpButton');
  }
} else if (isEditor) {
  createCardDivs();
  removeButton('optionsButton');
  setupEditor(displayType == '');
  var vulParam = gup('v');
  if (vulParam) {
    setVul(vulParam);
  }
  if (picturesOfCards) {
    togglePictures();
  }
  showEditorMenu(true);
} else {
  removeButton('newButton');
  removeButton('helpButton');
  linURL = gup('linurl');

  if (linURL != '') {
    loadFromURL('vugproxy.php?linurl=' + linURL);
  } else {
    linURL = gup('myhand');
    if (linURL != '') {
      loadFromURL('https://www.bridgebase.com/tools/mh.php?id=' + linURL);
    } else {
      linURL = gup('linlocal');
      if (linURL != '') {
        loadFromURL(linURL);
      } else {
        linURL = safeDecode(gup('lin'));
        if (linURL != '') processLinFile(linURL);
        else loadParams();
        if (picturesOfCards && displayType != '') {
          togglePictures();
        }
      }
    }
  }
}

function showAll(visible) {
  var div = document.getElementById('theDiv');
  var buttonDiv = document.getElementById('buttonDiv');

  mainDivShowing = visible;
  scoreBoardDivShowing = !visible;

  if (visible) {
    if (scoreBoardDiv) {
      scoreBoardDiv.style.visibility = 'hidden';
      div.style.background = '#006600';
    }
    annotDiv.style.visibility = 'visible';
    statusDiv.style.visibility = 'hidden';
    blockDiv.style.visibility = 'hidden';
    buttonDiv.style.visibility = 'visible';

    if (editorDiv) {
      editorDiv.style.visibility = 'visible';
    }
  } else {
    statusDiv.style.visibility = 'visible';
    blockDiv.style.visibility = 'visible';
    buttonDiv.style.visibility = 'hidden';
    annotDiv.style.visibility = 'hidden';
    removeGIBDivs();
    clearTrickCards(0, 3);
    if (editorDiv && isEditor) {
      editorDiv.style.visibility = 'hidden';
    }
  }
  showCardImages(visible);
  respondToResize();
}

function showEditorMenu(visible) {
  editorMenuShowing = visible;
  if (editorMenuShowing) {
    showAll(false);
    editorMenuDiv.style.visibility = 'visible';
    statusDiv.innerHTML = 'Select the type of bridge diagram you want to create';
    manageStatusDiv();
  } else {
    if (editorMenuDiv) {
      editorMenuDiv.style.visibility = 'hidden';
    }
    showAll(true);
  }
  manageEditorAnnouncement();
  editorMenuBiddingChanged(false);
}

function respondToBodyResize(param) {
  //if (!fastVersion) {

  respondToResize();
  // }
}

function respondToResize() {
  var div = document.getElementById('theDiv');

  var wasTotalWidth = totalWidth;
  var wasTotalHeight = totalHeight;

  if (showAnnotations()) {
    atBottom = annotDiv.scrollTop + annotDiv.clientHeight + 10 >= annotDiv.scrollHeight;
  }

  hideContextMenu();
  hideContextMenu(null, true);

  var handRows = getHandRows();
  var handCols = getHandCols();

  if (isEditor) {
    handCols++;
  }

  if (typeof window.innerHeight == 'number') {
    availableHeight = window.innerHeight;
    availableWidth = window.innerWidth;
  } else {
    availableHeight = document.body.clientHeight;
    availableWidth = document.body.clientWidth;
  }

  // if (numHandsShowing==4 && !vugraphClient && !playingClient && !isVugraphMatch &&
  //  ((navigator.userAgent.indexOf('iPhone') != -1) || (navigator.userAgent.indexOf('iPod') != -1) || (navigator.userAgent.indexOf('iPad') != -1))) {

  // availableHeight-=7;
  // availableWidth-=7;
  // }

  if (firstResize) {
    firstResize = false;
    blockDiv.style.visibility = 'visible';
    blockDiv.style.width = availableWidth;
    blockDiv.style.height = availableHeight;
    return;
  }

  if (mainDivShowing) {
    blockDiv.style.visibility = 'hidden';
  }

  var maxWidthRatio;
  var maxHeightRatio;

  if (showAnnotations()) {
    maxWidthRatio = 6 / 5;
    maxHeightRatio = 5 / 4;
  } else {
    maxWidthRatio = 4 / 3;
    maxHeightRatio = 1;
  }

  if (picturesOfCards) {
    maxWidthRatio *= 4 / 3;
    maxHeightRatio *= 2 / 3;
  }

  if (editorMenuShowing) {
    totalHeight = availableHeight;
    totalWidth = availableWidth;
  } else if (availableWidth > maxWidthRatio * availableHeight * (handCols / handRows)) {
    totalHeight = availableHeight;
    totalWidth = maxWidthRatio * availableHeight * (handCols / handRows);
  } else if (availableHeight > maxHeightRatio * availableWidth * (handRows / handCols)) {
    totalHeight = maxHeightRatio * availableWidth * (handRows / handCols);
    totalWidth = availableWidth;
  } else {
    totalHeight = availableHeight;
    totalWidth = availableWidth;
  }

  if (totalWidth < 10) totalWidth = 10;
  if (totalHeight < 10) totalHeight = 10;

  blockDiv.style.width = totalWidth;
  blockDiv.style.height = availableHeight;
  var buttonDivHeight;
  var annotDivHeight;

  if (showButtonBar()) {
    buttonDivHeight = Math.max(30, 0.07 * totalHeight);
    totalHeight -= buttonDivHeight;
  } else {
    buttonDivHeight = 1 + 2 * fireFox;
  }

  margin = Math.max(2, totalHeight / 100);

  if (showAnnotations()) {
    annotDivHeight = 0.2 * totalHeight;
    totalHeight *= 0.8;
  } else {
    annotDivHeight = 0;
  }

  totalHeight = Math.max(1, totalHeight);

  if (auctionOnly() && !isEditor) {
    handHeight = Math.max(1, totalHeight - 2 * margin);
    handWidth = Math.max(1, totalWidth - 2 * margin);
    suitHeight = handHeight / 5;
  } else {
    var margins = handCols + 1;
    if (isEditor) {
      margins++;
      if (numHandsShowing == 4) {
        handCols += 0.5;
      }
    }
    handWidth = Math.max(1, (totalWidth - margins * margin - fireFox * handCols * 2) / handCols);
    handHeight = Math.max(
      1,
      (totalHeight - (handRows + 1) * margin - fireFox * handCols * 2) / handRows
    );
    suitHeight = handHeight / 5;
  }

  if (picturesOfCards && playingClient && !showAuction()) {
    handWidth *= 4 / 3;
    handHeight *= 4 / 3;
    suitHeight *= 4 / 3;
  }

  cardImageWidth = handWidth / 4;
  if (isEditor && numHandsShowing == 4) {
    cardImageWidth *= 3 / 2;
  }
  cardImageHeight = 1.3 * cardImageWidth;
  cardImageXOverlap = cardImageWidth / 4;

  if (picturesOfCards) {
    if (numHandsShowing == 1) {
      totalHeight = cardImageHeight + 2 * margin;
      if (showAuction()) {
        totalHeight += 5 * suitHeight + margin;
      }
    } else if (numHandsShowing == 2) {
      if (handShowing[1] && handShowing[3]) {
        totalHeight = cardImageHeight + 2 * margin;
        if (showAuction()) {
          totalHeight += 5 * suitHeight + margin;
        }
      } else {
        if (showAuction() && (!handShowing[0] || !handShowing[2])) {
          totalHeight = 5 * suitHeight + cardImageHeight + 3 * margin;
        } else {
          totalHeight = 2 * cardImageHeight + 3 * margin;
        }
      }
    }
  }

  if (isEditor) {
    if (editorMenuShowing) {
      editorMenuDiv.style.left = (availableWidth - editorMenuDiv.clientWidth) / 2;
      editorMenuDiv.style.top = (availableHeight - editorMenuDiv.clientHeight) / 2;
    }
    if (numHandsShowing == 4) {
      editorWidthOffset = (3 * handWidth) / 2 + 2 * margin;
    } else {
      editorWidthOffset = handWidth + 2 * margin;
    }
    if (editorDiv) {
      editorDiv.style.width = editorWidthOffset;
      editorDivHeight = Math.max(1, availableHeight - 1);
      editorDiv.style.height = editorDivHeight;
    }
  }

  nameHeight = Math.floor(handHeight / 5);

  if (!mainDivShowing) {
    div.style.width = totalWidth;
    div.style.height = availableHeight;
  } else {
    div.style.width = totalWidth;
    div.style.height = totalHeight;
  }

  fontSize = handHeight / 6.5;

  if (showAnnotations()) {
    annotDiv.style.top = div.clientHeight;
    setAnnotChatFontSize();
    var hgt = annotDivHeight - 6 * fireFox;
    if (showButtonBar()) hgt += 2;
    annotDiv.style.height = hgt;
    annotDiv.style.width = totalWidth - 10 * fireFox;
    annotDiv.style.visibility = 'visible';
    annotDiv.style.left = 0;
    if (atBottom && (totalWidth != wasTotalWidth || totalHeight != wasTotalHeight)) {
      annotDiv.scrollTop = annotDiv.scrollHeight;
    }
  } else {
    annotDiv.style.visibility = 'hidden';
  }

  var buttonDiv = document.getElementById('buttonDiv');

  if (isEditor) {
    buttonDiv.style.borderLeft = 'none';
  }

  buttonDiv.style.height = buttonDivHeight - 2 * fireFox;
  buttonDiv.style.width = totalWidth - (4 - isEditor) * fireFox - editorWidthOffset;

  if (showButtonBar()) {
    buttonDiv.style.top = totalHeight + annotDivHeight;
    buttonDiv.style.visibility = 'visible';
    if (editorWidthOffset) {
      buttonDiv.style.left = editorWidthOffset + 2 * fireFox;
    } else {
      buttonDiv.style.left = 0;
    }

    buttonHeight = Math.max(24, buttonDivHeight - 2 * margin);
    buttonFontSize = buttonHeight / 2;
    var pixels = margin;

    var newButton = document.getElementById('newButton');
    if (newButton) {
      newButton.style.fontSize = buttonFontSize;
      newButton.style.left = pixels;
      newButton.style.height = buttonHeight;
      newButton.style.top = margin;
      newButton.style.paddingLeft = margin;
      newButton.style.paddingRight = margin;
      pixels += newButton.clientWidth + 2 * margin;
    }

    var shuffleButton = document.getElementById('shuffleButton');
    if (shuffleButton) {
      shuffleButton.style.fontSize = buttonFontSize;
      shuffleButton.style.left = pixels;
      shuffleButton.style.height = buttonHeight;
      shuffleButton.style.top = margin;
      shuffleButton.style.paddingLeft = margin;
      shuffleButton.style.paddingRight = margin;
      pixels += shuffleButton.clientWidth + 2 * margin;
    }
    var rewindButton = document.getElementById('rewindButton');
    /*if (isEditor)
		   {
		     pixels=editorWidthOffset;
		   }*/
    if (rewindButton) {
      rewindButton.style.fontSize = buttonFontSize;
      rewindButton.style.left = pixels;
      rewindButton.style.height = buttonHeight;
      rewindButton.style.top = margin;
      rewindButton.style.paddingLeft = margin;
      rewindButton.style.paddingRight = margin;
      pixels += rewindButton.clientWidth + 2 * margin;
    }
    var undoButton = document.getElementById('undoButton');
    if (undoButton) {
      undoButton.style.fontSize = buttonFontSize;
      undoButton.style.left = pixels;
      undoButton.style.height = buttonHeight;
      undoButton.style.top = margin;
      undoButton.style.paddingLeft = margin;
      undoButton.style.paddingRight = margin;
      pixels += undoButton.clientWidth + 2 * margin;
    }
    var nextButton = document.getElementById('nextButton');
    if (nextButton) {
      nextButton.style.fontSize = buttonFontSize;
      nextButton.style.left = pixels;
      nextButton.style.height = buttonHeight;
      nextButton.style.top = margin;
      nextButton.style.paddingLeft = margin;
      nextButton.style.paddingRight = margin;
      pixels += nextButton.clientWidth + 2 * margin;
    }
    var optionsButton = document.getElementById('optionsButton');
    if (optionsButton) {
      optionsButton.style.fontSize = buttonFontSize;
      optionsButton.style.left = pixels;
      optionsButton.style.height = buttonHeight;
      optionsButton.style.top = margin;
      optionsButton.style.paddingLeft = margin;
      optionsButton.style.paddingRight = margin;
      pixels += optionsButton.clientWidth + 2 * margin;
    }
    var gibButton = document.getElementById('gibButton');
    if (gibButton) {
      gibButton.style.fontSize = buttonFontSize;
      gibButton.style.left = pixels;
      gibButton.style.height = buttonHeight;
      gibButton.style.top = margin;
      gibButton.style.paddingLeft = margin;
      gibButton.style.paddingRight = margin;
      pixels += gibButton.clientWidth + 2 * margin;
    }

    var playButton = document.getElementById('playButton');
    if (playButton) {
      playButton.style.fontSize = buttonFontSize;
      playButton.style.left = pixels;
      playButton.style.height = buttonHeight;
      playButton.style.top = margin;
      playButton.style.paddingLeft = margin;
      playButton.style.paddingRight = margin;
      pixels += playButton.clientWidth + 2 * margin;
    }
    var helpButton = document.getElementById('helpButton');
    if (helpButton) {
      helpButton.style.fontSize = buttonFontSize;
      helpButton.style.left = pixels;
      helpButton.style.height = buttonHeight;
      helpButton.style.top = margin;
      helpButton.style.paddingLeft = margin;
      helpButton.style.paddingRight = margin;
      pixels += helpButton.clientWidth + 2 * margin;
    }

    var logoImage = document.getElementById('logoImage');
    logoImage.style.height = buttonDivHeight - 4;
    logoImage.style.top = 0;
    logoImage.style.left = Math.max(
      pixels + 2 * margin,
      totalWidth - logoImage.clientWidth - margin - editorWidthOffset
    );
    menuTable.style.fontSize = buttonFontSize;
    if (navMenuTable) {
      navMenuTable.style.fontSize = buttonFontSize;
    }
  } else {
    buttonDiv.style.top = 0;
    buttonDiv.style.visibility = 'hidden';
    menuTable.style.fontSize = (3 * fontSize) / 4;
  }

  for (seat = 0; seat < 4; seat++) {
    var table = handDivs[seat];

    if (!handShowing[seat]) {
      if (table.parentNode == div) {
        table.style.visibility = 'hidden';
      }
      if (nameBars[seat].parentNode == div) {
        nameBars[seat].style.visibility = 'hidden';
      }
      continue;
    }

    if (!picturesOfCards) {
      table.style.visibility = 'visible';
    }
    nameBars[seat].style.visibility = 'visible';

    table.style.width = getHandWidth(seat);
    table.style.height = handHeight;
    table.style.fontSize = fontSize;

    nameTexts[seat].style.left = nameInitials[seat].clientWidth;
    nameTexts[seat].style.top = 0;
    nameTexts[seat].style.paddingLeft = margin;

    for (suit = 0; suit < 4; suit++) {
      suitRows[seat][suit].style.top = (4 - suit) * suitHeight;
      suitRows[seat][suit].style.height = suitHeight;
      suitSymbols[seat][suit].style.fontSize = 1.5 * fontSize;
      suitSymbols[seat][suit].style.lineHeight = 1.3 * fontSize + 'px';
      suitHoldings[seat][suit].style.fontSize = 1.2 * fontSize;
      suitHoldings[seat][suit].style.lineHeight = 1.4 * fontSize + 'px';
      suitHoldings[seat][suit].style.left = suitSymbols[seat][suit].clientWidth;
      suitHoldings[seat][suit].style.top = 0;
      resizeCards(seat, suit);
    }

    if (numHandsShowing == 1) {
      if (showAuction()) ypos[seat] = handHeight + 2 * margin;
      else ypos[seat] = margin;
    } else if (seat == 0) {
      ypos[seat] = totalHeight - margin - table.clientHeight + div.offsetTop - 2;
    } else if (seat == 1 || seat == 3) {
      if (numHandsShowing == 2 && handShowing[0]) ypos[seat] = margin;
      else if (numHandsShowing == 2 && handShowing[2])
        ypos[seat] = totalHeight - margin - table.clientHeight - 2;
      else if (numHandsShowing == 2 && showAuction())
        ypos[seat] = totalHeight - margin - table.clientHeight - 2;
      else if (numHandsShowing == 2) ypos[seat] = margin;
      else ypos[seat] = (totalHeight - table.clientHeight - 2) / 2;
    } else {
      ypos[seat] = margin;
    }

    ypos[seat] += div.offsetTop;
    table.style.top = ypos[seat];

    if (numHandsShowing == 1) {
      xpos[seat] = totalWidth - margin - table.clientWidth - 2;
    } else if (numHandsShowing == 2 && seat % 2 == 0) {
      if (handShowing[1]) xpos[seat] = totalWidth - margin - table.clientWidth - 2;
      else xpos[seat] = margin + editorWidthOffset;
    } else if (seat == 1) xpos[seat] = margin + editorWidthOffset;
    else if (seat == 3) xpos[seat] = totalWidth - table.clientWidth - margin - 2;
    else
      xpos[seat] = editorWidthOffset + (totalWidth - editorWidthOffset - table.clientWidth - 2) / 2;

    table.style.left = xpos[seat];

    nameBars[seat].style.fontSize = fontSize;
    nameBars[seat].style.left = xpos[seat];
    if (picturesOfCards) {
      nameBars[seat].style.top = getPicturesNameBarTop(seat);
    } else {
      nameBars[seat].style.top = ypos[seat];
    }

    nameBars[seat].style.height = nameHeight;
    nameBars[seat].style.width = getHandWidth(seat);
    nameTexts[seat].style.left = nameInitials[seat].clientWidth;
    nameTexts[seat].style.width = getHandWidth(seat) - nameInitials[seat].clientWidth;
  }

  if (numHandsShowing == 4) {
    var trickAreaLeft = xpos[1] + handDivs[1].clientWidth;
    var trickAreaTop = ypos[2] + handDivs[2].clientHeight;
    var trickAreaRight = xpos[3];
    var trickAreaBottom = ypos[0];
    var trickCardWidth = Math.max(1, (4 * (handWidth - 6 * margin)) / 10);
    var trickCardHeight = Math.max(1, (trickAreaBottom - trickAreaTop - 8 * margin) / 3);

    for (seat = 0; seat < 4; seat++) {
      var trickCard = trickDivs[seat];
      trickCard.style.fontSize = (5 * fontSize) / 4;
      trickCard.style.width = trickCardWidth;
      trickCard.style.height = trickCardHeight;
      trickCard.style.lineHeight = trickCardHeight + 'px';
      if (seat == 1 || seat == 3) {
        trickCard.style.top = (totalHeight - trickCard.clientHeight) / 2 + div.offsetTop;
        if (seat == 1) trickCard.style.left = trickAreaLeft + 2 * margin;
        else trickCard.style.left = trickAreaRight - 2 * margin - trickCardWidth;
      } else {
        trickCard.style.left =
          editorWidthOffset + (totalWidth - editorWidthOffset - trickCardWidth) / 2;
        if (seat == 0) trickCard.style.top = trickAreaBottom - 2 * margin - trickCard.clientHeight;
        else trickCard.style.top = trickAreaTop + 2 * margin;
      }
      div.appendChild(trickCard);
    }
  } else {
    for (seat = 0; seat < 4; seat++) {
      if (trickDivs[seat].parentNode == div) div.removeChild(trickDivs[seat]);
    }
  }

  if (showAuction()) {
    if (auctionHeadingDiv.parentNode != div) div.appendChild(auctionHeadingDiv);
    if (auctionTableDiv.parentNode != div) div.appendChild(auctionTableDiv);
    div.appendChild(alertDiv);
    auctionHeading.style.fontSize = fontSize;
    auctionHeadingDiv.style.width = handWidth;

    auctionHeading.style.height = suitHeight;
    auctionHeading.style.width = handWidth;

    auctionTableDiv.style.fontSize = fontSize;
    auctionTableDiv.style.width = handWidth;

    var auctionDivHeight = 4 * suitHeight;
    auctionTableDiv.style.height = auctionDivHeight + 'px';

    auctionTable.style.fontSize = fontSize;
    auctionTable.style.width = handWidth;

    var auctionLeft;
    if (
      numHandsShowing == 2 &&
      ((handShowing[0] && handShowing[3]) || (handShowing[1] && handShowing[2]))
    )
      auctionLeft = editorWidthOffset + margin;
    else if (numHandsShowing == 2 && handShowing[1] && handShowing[3])
      auctionLeft =
        editorWidthOffset + (totalWidth - editorWidthOffset - auctionHeadingDiv.clientWidth) / 2;
    else auctionLeft = totalWidth - margin - auctionHeadingDiv.clientWidth - 2;

    var auctionTop;
    if (numHandsShowing == 2 && handShowing[0] && handShowing[2])
      auctionTop = (totalHeight - 5 * suitHeight) / 2;
    else auctionTop = margin;
    auctionTop += div.offsetTop;

    auctionHeadingDiv.style.top = auctionTop;
    auctionHeadingDiv.style.left = auctionLeft;

    auctionTableDiv.style.top = auctionTop + auctionHeading.clientHeight;
    auctionTableDiv.style.left = auctionLeft;
    manageAuctionScrollBar();

    alertDiv.style.fontSize = (3 * fontSize) / 4;
    alertDiv.style.height = (3 * suitHeight) / 4;
    manageAlertDiv();
  } else {
    if (auctionHeadingDiv.parentNode == div) div.removeChild(auctionHeadingDiv);
    if (auctionTableDiv.parentNode == div) div.removeChild(auctionTableDiv);
  }

  manageEditorAnnounceDiv();

  if (cardDivsCreated && (picturesOfCards || getDeal)) {
    var suit;
    var card;
    var seat;

    for (suit = 0; suit < 4; suit++) {
      for (card = 0; card < 13; card++) {
        cardImageDiv[suit][card].style.height = cardImageHeight;
        cardImageDiv[suit][card].style.width = cardImageWidth;
        resizeCardDiv(cardImageDiv[suit][card]);
        cardBackDiv[suit][card].style.width = cardImageWidth;
        cardBackDiv[suit][card].style.height = cardImageHeight;
      }
    }

    moveCardImages(0, 3);

    for (seat = 0; seat < 4; seat++) {
      moveTrickCardImage(seat);
    }
  }

  tricksDiv.style.fontSize = (3 * fontSize) / 4;
  tricksDiv.style.paddingLeft = margin;
  tricksDiv.style.paddingRight = margin;
  announceDiv.style.paddingRight = margin;
  announceDiv.style.paddingLeft = margin;
  manageTricksDiv();

  scoreDiv.style.fontSize = (3 * fontSize) / 4;
  scoreDiv.style.paddingLeft = margin;
  scoreDiv.style.paddingRight = margin;
  manageScoreDiv();

  manageAnnounceDiv();
  manageInfoDiv();
  manageGIBDivs();
  manageStatusDiv();
  manageLeaderBoard();
  manageScoreBoardDiv();
  manageBiddingBox();
}

function manageStatusDiv() {
  if (editorMenuShowing) {
    statusDiv.style.fontSize = 24;
    statusDiv.style.top =
      (availableHeight - editorMenuDiv.clientHeight) / 2 - statusDiv.clientHeight - 20;
    statusDiv.style.left = (availableWidth - statusDiv.clientWidth + 22 * fireFox) / 2;
    return;
  }

  statusDiv.style.fontSize = (3 * fontSize) / 2;

  if (isLeaderBoardShowing() && leaderBoardTable) {
    statusDiv.style.top = 2 * margin;
  } else {
    statusDiv.style.top = (totalHeight - statusDiv.clientHeight + 22 * fireFox) / 2;
    statusDiv.style.left = (totalWidth - statusDiv.clientWidth + 22 * fireFox) / 2;
  }
}

function manageAuctionScrollBar() {
  var cellPercent;
  var rightPercent;

  if (auctionTable.clientHeight > auctionTableDiv.clientHeight && auctionTable.clientWidth != 0) {
    auctionTableDiv.style.overflowY = 'scroll';
    cellPercent =
      Math.max(
        1,
        (100.0 * ((auctionTable.clientWidth - scrollBarWidth) / 4)) / auctionTable.clientWidth
      ) + '%';
    rightPercent = 100.0 * (scrollBarWidth / auctionTable.clientWidth) + '%';
  } else {
    auctionTableDiv.style.overflowY = 'hidden';
    cellPercent = '25%';
    rightPercent = '0%';
  }

  var row;
  var col;

  for (row = 0; row < auctionTable.rows.length; row++) {
    for (col = 0; col < 4; col++) auctionTable.rows[row].cells[col].style.width = cellPercent;
    auctionTable.rows[row].cells[4].style.width = rightPercent;
  }
  for (col = 0; col < 4; col++) auctionHeading.rows[0].cells[col].style.width = cellPercent;
  auctionHeading.rows[0].cells[4].style.width = rightPercent;
}

function manageTricksDiv() {
  if (!showTricksDiv()) {
    var div = document.getElementById('theDiv');
    if (tricksDiv.parentNode == div) div.removeChild(tricksDiv);
    return;
  }

  if (!endPosition() && (passes < 3 || declarer < 0)) {
    tricksDiv.style.visibility = 'hidden';
    return;
  }

  var html;

  if (lessonID && lessonID > '1') {
    html = '<center>';
    if (trump >= 0 && trump <= 3) {
      html += 'Trump: ' + suitHTMLs[trump];
    } else {
      html = 'Notrump';
    }
    if (lessonID == '3') {
      html += '&nbsp;&nbsp;Goal: ' + lastLevelBid;
    }
    html += '</center>';
  } else if (endPosition() && declarer < 0) {
    if (trump >= 0 && trump <= 3) html = 'Trump: ' + suitHTMLs[trump] + '<br>';
    else html = 'Notrump<br>';
  } else {
    html =
      "<font color='000000'>" +
      contractLevel +
      '</font>' +
      suitHTMLs[trump] +
      "<font color='000000'>";
    if (doubled == 2) html += 'x';
    if (doubled == 4) html += 'xx';
    html += ' ' + seats[declarer].charAt(0) + ' ';
  }

  tricksDivLeft.innerHTML = html;
  html = 'NS: ' + nsTricks + ' EW: ' + ewTricks;

  if (!lessonID) {
    tricksDivRight.innerHTML = html;
  }
  tricksDivLeft.style.height = fontSize - margin / 2;
  tricksDiv.style.left = 0;

  if (picturesOfCards) {
    tricksDiv.style.width = Math.max(
      0,
      totalWidth - 2 * margin - 2 * margin * fireFox - (xpos[0] + getHandWidth(0))
    );
  } else {
    tricksDiv.style.width = Math.max(0, handWidth - 2 * margin * fireFox);
  }
  tricksDiv.style.height = tricksDivLeft.clientHeight + 2;
  tricksDiv.style.top = totalHeight - tricksDiv.clientHeight - margin - 2;

  tricksDivLeft.style.left = margin;
  tricksDivRight.style.right = 5;

  if (picturesOfCards) {
    tricksDiv.style.left = xpos[0] + getHandWidth(0) + margin;
  } else {
    tricksDiv.style.left = totalWidth - handWidth - margin - 2 * fireFox;
  }
  if (lessonID) {
    tricksDivLeft.style.width = tricksDiv.clientWidth - 2 * margin;
  }
  tricksDiv.style.visibility = 'visible';
}

function manageScoreDiv() {
  if (!showScoreDiv() || (!vugraphScoreReceived && !otherTableResult)) {
    scoreDiv.style.visibility = 'hidden';
    return;
  }

  var html = '';
  var lines = 0;
  var hgt = (3 * fontSize) / 4 + 4;
  var top = 2;

  ewTeamDiv.style.width = '';
  nsTeamDiv.style.width = '';
  ewScoreDiv.style.width = '';
  nsScoreDiv.style.width = '';
  otherTableDiv.style.width = '';
  scoreDiv.style.width = totalWidth;

  if (otherTableResult) {
    otherTableDiv.innerHTML = otherTableResult;
    lines++;
    top += hgt;
    otherTableDiv.style.height = hgt;
  } else {
    otherTableDiv.innerHTML = '';
    otherTableDiv.style.height = 0;
  }

  if (vugraphScoreReceived) {
    lines += 2;
    nsTeamDiv.innerHTML = teamNS;
    ewTeamDiv.innerHTML = teamEW;
    html = '&nbsp;' + scoreNS;
    if (scoreFormat == 'mp') {
      html += '%';
    } else if (scoreFormat == 'imps') {
      html += '&nbsp;IMPs';
    }
    nsScoreDiv.innerHTML = html;
    html = '&nbsp;' + scoreEW;
    if (scoreFormat == 'mp') {
      html += '%';
    } else if (scoreFormat == 'imps') {
      html += '&nbsp;IMPs';
    }
    ewScoreDiv.innerHTML = html;
  }

  scoreDiv.style.left = margin;
  scoreDiv.style.height = hgt * lines + 4;

  var scoreWidth;
  var teamWidth;
  if (vugraphScoreReceived) {
    scoreWidth = Math.max(ewScoreDiv.scrollWidth, nsScoreDiv.scrollWidth);
    teamWidth = Math.max(ewTeamDiv.scrollWidth, nsTeamDiv.scrollWidth);
    if (otherTableResult && otherTableDiv.scrollWidth > teamWidth) {
      teamWidth = otherTableDiv.scrollWidth;
    }
  } else {
    scoreWidth = 0;
    teamWidth = otherTableDiv.scrollWidth;
  }

  var theWidth = scoreWidth + teamWidth + 2 * margin + fireFox * (2 * margin + 2);

  if (2 * margin + 2 * margin * fireFox + theWidth > xpos[0]) {
    theWidth = Math.max(1, xpos[0] - 2 * margin - fireFox * (2 * margin + 1));
    teamWidth = Math.max(1, theWidth - !fireFox * 2 * margin - scoreWidth);
  }

  nsScoreDiv.style.height = hgt;
  nsScoreDiv.style.width = scoreWidth;
  nsScoreDiv.style.top = top;
  nsScoreDiv.style.left = theWidth - nsScoreDiv.clientWidth + fireFox * margin - !fireFox * margin;
  ewScoreDiv.style.height = hgt;
  ewScoreDiv.style.width = scoreWidth;
  ewScoreDiv.style.top = top + hgt;
  ewScoreDiv.style.left = theWidth - ewScoreDiv.clientWidth + fireFox * margin - !fireFox * margin;

  nsTeamDiv.style.top = top;
  nsTeamDiv.style.height = hgt;
  nsTeamDiv.style.width = teamWidth;

  ewTeamDiv.style.top = top + hgt;
  ewTeamDiv.style.height = hgt;
  ewTeamDiv.style.width = teamWidth;

  otherTableDiv.style.width = theWidth - !fireFox * 2 * margin;

  scoreDiv.style.top = totalHeight - scoreDiv.clientHeight - margin - 2;
  scoreDiv.style.visibility = 'visible';
  scoreDiv.style.width = theWidth;
}

function manageInfoDiv() {
  var div = document.getElementById('theDiv');
  if (!showInfoDiv()) {
    for (seat = 0; seat < 4; seat++) {
      if (vulDivs[seat].parentNode == div) div.removeChild(vulDivs[seat]);
    }
    if (vulInnerDiv.parentNode == div) {
      div.removeChild(vulInnerDiv);
    }

    return;
  }

  for (seat = 0; seat < 4; seat++) {
    if (showVul() && vulDivs[seat].parentNode != div) {
      div.appendChild(vulDivs[seat]);
    }
    if (!showVul() && vulDivs[seat].parentNode == div) {
      div.removeChild(vulDivs[seat]);
    }
    if (dealer >= 0) vulDivs[seat].style.visibility = 'visible';
    else vulDivs[seat].style.visibility = 'hidden';
    if (seat == dealer) vulDivs[seat].innerHTML = '<b>D</b>';
    else vulDivs[seat].innerHTML = '';
  }

  if (vulInnerDiv.parentNode != div) {
    div.appendChild(vulInnerDiv);
  }

  if (lessonID) {
    vulInnerDiv.innerHTML =
      '<div><center>&nbsp;Level&nbsp;' +
      lessonID +
      '&nbsp;<br>&nbsp;Deal&nbsp;' +
      Math.max(1, boardNum) +
      '&nbsp;</center></div>';
  } else if (boardNum > 0) vulInnerDiv.innerHTML = boardNum;
  /*else
       vulInnerDiv.innerHTML="";*/

  if (dealer < 0 && !playingClient) vulInnerDiv.style.visibility = 'hidden';
  else vulInnerDiv.style.visibility = 'visible';

  var suitHeight = handHeight / 5;
  var vulMargin = 2;
  var vulSize = Math.floor((2 * suitHeight) / 3);
  var vulBorder = 2;
  var minWidth = (5 * fontSize) / 2;
  if (lessonID) {
    vulInnerDiv.style.fontSize = fontSize;
  } else {
    vulInnerDiv.style.fontSize = (7 * fontSize) / 4;
  }
  vulInnerDiv.style.height = minWidth + 'px';

  if (lessonID) {
  } else if (fireFox) {
    vulInnerDiv.style.minWidth = minWidth;
  } else {
    vulInnerDiv.style.width = minWidth;
  }
  if (!lessonID) {
    vulInnerDiv.style.lineHeight = Math.max(1, minWidth - 2 * vulMargin) + 'px';
  }
  if (showVul()) {
    vulInnerDiv.style.top = margin + vulMargin + vulSize;
    vulInnerDiv.style.left = margin + vulMargin + vulSize + editorWidthOffset;
  } else {
    vulInnerDiv.style.top = margin;
    vulInnerDiv.style.left = margin + editorWidthOffset;
  }

  for (seat = 0; seat < 4; seat++) {
    vulDivs[seat].style.fontSize = (2 * fontSize) / 3;
    if (seat % 2) {
      vulDivs[seat].style.top = margin + vulMargin + vulSize;
      vulDivs[seat].style.height = vulInnerDiv.clientHeight + 2 * vulBorder - !fireFox;
      vulDivs[seat].style.width = vulSize;
      vulDivs[seat].style.lineHeight = vulInnerDiv.clientHeight + 2 * vulBorder + 'px';

      if (seat == 1) vulDivs[seat].style.left = margin + editorWidthOffset;
      else
        vulDivs[seat].style.left =
          margin +
          2 * vulMargin +
          vulSize +
          vulInnerDiv.clientWidth +
          2 * vulBorder +
          editorWidthOffset -
          !fireFox;
    } else {
      vulDivs[seat].style.left = margin + vulMargin + vulSize + editorWidthOffset;
      vulDivs[seat].style.width = vulInnerDiv.clientWidth + 2 * vulBorder - !fireFox;
      vulDivs[seat].style.height = vulSize;
      vulDivs[seat].style.lineHeight = vulSize + 'px';

      if (seat == 2) vulDivs[seat].style.top = margin;
      else
        vulDivs[seat].style.top =
          margin + 2 * vulMargin + vulSize + vulInnerDiv.clientHeight + 2 * vulBorder - !fireFox;
    }
  }
}

function manageHandBackground(seatMin, seatMax) {
  for (seat = seatMin; seat <= seatMax; seat++) {
    if (seat == dummy) handDivs[seat].style.background = '#989898';
    else handDivs[seat].style.background = '#CBCBCB';
  }
}

function manageVul() {
  for (seat = 0; seat < 4; seat++) {
    if ((seat % 2 == 1 && ewVul) || (seat % 2 == 0 && nsVul)) {
      auctionHeadingCells[seat].style.background = '#CB0000';
      auctionHeadingCells[seat].style.color = '#FFFFFF';
      vulDivs[seat].style.background = '#CB0000';
      vulDivs[seat].style.color = '#FFFFFF';
    } else {
      auctionHeadingCells[seat].style.background = '#FFFFFF';
      auctionHeadingCells[seat].style.color = '#000000';
      vulDivs[seat].style.background = '#FFFFFF';
      vulDivs[seat].style.color = '#000000';
    }
  }
  auctionHeading.rows[0].cells[4].style.background =
    auctionHeading.rows[0].cells[3].style.background;
  manageInfoDiv();
}

function manageWhosTurn() {
  for (seat = 0; seat < 4; seat++) {
    if (!handShowing[seat]) {
      continue;
    }
    if (mouseOverName == seat) {
      nameBars[seat].style.backgroundColor = '#99CCCC';
    } else if (
      seat == whosTurn &&
      (showMovie() || endPosition() || isEditor) &&
      (showAuction() || passes == 3 || getDeal)
    ) {
      nameBars[seat].style.backgroundColor = highlightColor;
    } else if (picturesOfCards) {
      nameBars[seat].style.backgroundColor = '#CBCBCB';
    } else {
      nameBars[seat].style.backgroundColor = '#FFFFFF';
    }
  }
  if (isEditor) {
    manageEditorAnnouncement();
  }
}

function getCardChar(card) {
  if (card == 8) return '10';
  else return cardchars.charAt(card);
}

function getSuitOrder(suitOrder) {
  var suits;
  if (picturesOfCards) {
    suits = [3, 2, 0, 1];
  } else {
    suits = [0, 1, 2, 3];
  }
  return suits[suitOrder];
}

function getSuitColor(suit) {
  if (suit == 1 || suit == 2) return '#CB0000';
  else return '#000000';
}

function createHandTables() {
  disableSelection(document.getElementById('buttonDiv'));
  scrollBarWidth = getScrollBarWidth();

  var theParent = document.getElementById('theDiv');

  theParent.onclick = function () {
    mainDivClicked();
  };

  for (seat = 0; seat < 4; seat++) {
    var hand = document.createElement('div');
    disableSelection(hand);

    hand.className = 'handDivStyle';
    handDivs[seat] = hand;
    theParent.appendChild(hand);

    nameBars[seat] = document.createElement('div');
    disableSelection(nameBars[seat]);
    nameBars[seat].className = 'nameRowDivStyle';
    nameBars[seat].style.position = 'absolute';
    nameBars[seat].style.border = '1px solid white';
    nameBars[seat].style.whiteSpace = 'nowrap';
    var nameInitial = document.createElement('div');
    nameInitial.className = 'nameInitialDivStyle';
    var nameText = document.createElement('div');
    nameText.className = 'nameTextDivStyle';

    nameBars[seat].seat = seat;
    nameBars[seat].onclick = function () {
      nameBarClicked(this);
    };
    nameBars[seat].onmouseover = function () {
      mouseOverNameBar(this);
    };
    nameBars[seat].onmouseout = function () {
      mouseOverName = -1;
      manageWhosTurn();
    };
    nameInitials[seat] = nameInitial;
    nameTexts[seat] = nameText;
    nameInitial.innerHTML = seats[seat].charAt(0);

    nameBars[seat].appendChild(nameInitial);
    nameBars[seat].appendChild(nameText);
    theParent.appendChild(nameBars[seat]);

    suitRows[seat] = new Array(4);
    suitSymbols[seat] = new Array(4);
    suitHoldings[seat] = new Array(4);
    cardDivs[seat] = new Array(4);

    for (suit = 0; suit < 4; suit++) {
      suitRows[seat][suit] = document.createElement('div');
      suitRows[seat][suit].className = 'suitRowDivStyle';
      suitSymbols[seat][suit] = document.createElement('div');
      suitSymbols[seat][suit].className = 'suitSymbolDivStyle';
      suitHoldings[seat][suit] = document.createElement('div');
      suitHoldings[seat][suit].className = 'suitHoldingDivStyle';
      suitSymbols[seat][suit].innerHTML = suitHTMLs[suit];

      suitRows[seat][suit].appendChild(suitSymbols[seat][suit]);
      suitRows[seat][suit].appendChild(suitHoldings[seat][suit]);
      hand.appendChild(suitRows[seat][suit]);

      cardDivs[seat][suit] = new Array(13);
    }

    trickDivs[seat] = document.createElement('div');
    disableSelection(trickDivs[seat]);
    trickDivs[seat].className = 'trickCardStyle';
    theParent.appendChild(trickDivs[seat]);

    vulDivs[seat] = document.createElement('div');
    disableSelection(vulDivs[seat]);
    vulDivs[seat].className = 'vulDivStyle';
    theParent.appendChild(vulDivs[seat]);
  }

  vulInnerDiv = document.createElement('div');
  disableSelection(vulInnerDiv);
  vulInnerDiv.className = 'vulInnerDivStyle';
  vulInnerDiv.onmouseover = function () {
    if (isEditor) {
      vulInnerDiv.style.backgroundColor = highlightColor;
    }
  };
  vulInnerDiv.onmouseout = function () {
    if (isEditor) {
      vulInnerDiv.style.backgroundColor = '#99CCCC';
    }
  };
  vulInnerDiv.onclick = function () {
    vulDivClicked();
  };
  theParent.appendChild(vulInnerDiv);

  auctionHeadingDiv = document.createElement('div');
  disableSelection(auctionHeadingDiv);
  auctionHeadingDiv.className = 'auctionTableDivStyle';

  auctionHeading = document.createElement('table');
  auctionHeading.cellSpacing = 0;
  auctionHeading.cellPadding = 0;
  var headingRow = auctionHeading.insertRow(0);
  seat = 1;
  for (i = 0; i < 4; i++) {
    auctionHeadingCells[seat] = headingRow.insertCell(i);
    auctionHeadingCells[seat].align = 'center';
    auctionHeadingCells[seat].style.width = '25%';
    auctionHeadingCells[seat].innerHTML = seats[seat].charAt(0);
    seat++;
    if (seat == 4) seat = 0;
  }
  var extraCell = headingRow.insertCell(4);
  extraCell.style.width = '0%';

  theParent.appendChild(auctionHeadingDiv);
  auctionHeadingDiv.appendChild(auctionHeading);

  auctionTableDiv = document.createElement('div');
  disableSelection(auctionTableDiv);
  auctionTableDiv.className = 'auctionTableDivStyle';
  auctionTableDiv.onscroll = function () {
    alertedCall = -1;
    manageAlertDiv();
  };
  theParent.appendChild(auctionTableDiv);

  auctionTable = document.createElement('table');
  auctionTable.cellSpacing = 0;
  auctionTable.cellPadding = 0;
  auctionTableDiv.appendChild(auctionTable);

  tricksDiv = document.createElement('div');
  disableSelection(tricksDiv);
  tricksDiv.className = 'auctionTableDivStyle';
  theParent.appendChild(tricksDiv);

  tricksDivLeft = document.createElement('div');
  disableSelection(tricksDivLeft);
  tricksDivLeft.className = 'vulDivStyle';
  tricksDiv.appendChild(tricksDivLeft);
  tricksDivRight = document.createElement('div');
  disableSelection(tricksDivRight);
  tricksDivRight.className = 'vulDivStyle';
  tricksDiv.appendChild(tricksDivRight);

  scoreDiv = document.createElement('div');
  disableSelection(scoreDiv);
  scoreDiv.className = 'auctionTableDivStyle';
  otherTableDiv = document.createElement('div');
  disableSelection(otherTableDiv);
  otherTableDiv.className = 'teamDivStyle';
  scoreDiv.appendChild(otherTableDiv);
  nsTeamDiv = document.createElement('div');
  disableSelection(nsTeamDiv);
  nsTeamDiv.className = 'teamDivStyle';
  scoreDiv.appendChild(nsTeamDiv);
  ewTeamDiv = document.createElement('div');
  disableSelection(ewTeamDiv);
  ewTeamDiv.className = 'teamDivStyle';
  scoreDiv.appendChild(ewTeamDiv);
  nsScoreDiv = document.createElement('div');
  disableSelection(nsScoreDiv);
  nsScoreDiv.className = 'scoreDivStyle';
  scoreDiv.appendChild(nsScoreDiv);
  ewScoreDiv = document.createElement('div');
  disableSelection(ewScoreDiv);
  ewScoreDiv.className = 'scoreDivStyle';
  scoreDiv.appendChild(ewScoreDiv);
  theParent.appendChild(scoreDiv);

  announceDiv = document.createElement('div');
  disableSelection(announceDiv);
  announceDiv.className = 'announceDivStyle';
  announceDiv.style.visibility = 'hidden';
  theParent.appendChild(announceDiv);

  annotDiv = document.getElementById('annotDiv');

  alertDiv = document.createElement('div');
  disableSelection(alertDiv);
  alertDiv.className = 'alertDivStyle';
  theParent.appendChild(alertDiv);

  menuDiv = document.createElement('div');
  disableSelection(menuDiv);
  menuDiv.className = 'menuDivStyle';
  menuTable = document.createElement('table');
  menuDiv.appendChild(menuTable);

  if (!fastVersion && !isEditor) {
    addMenuCommand('pictures');
  }

  if (!playingClient) {
    addMenuCommand('played');
    addMenuCommand('cardbycard');
  }

  if (vugraphClient && !playingClient) {
    addMenuCommand('hidechat');
    manageChatFontSizeMenuCommands();
  }
  hideContextMenu();
  setMenuText();
  document.body.appendChild(menuDiv);

  blockDiv = document.createElement('div');
  disableSelection(blockDiv);
  blockDiv.className = 'blockDivStyle';
  blockDiv.style.backgroundColor = '#FFFFFF';
  theParent.appendChild(blockDiv);
  statusDiv = document.createElement('div');
  disableSelection(statusDiv);
  statusDiv.className = 'statusDivStyle';
  blockDiv.appendChild(statusDiv);

  if (isEditor) {
    editorDiv = document.getElementById('editorDiv');
    disableSelection(editorDiv);
    editorAnnounceDiv = document.createElement('div');
    disableSelection(editorAnnounceDiv);
    editorAnnounceDiv.className = 'editorAnnounceDivStyle';
    editorAnnounceDiv.style.overflow = 'hidden';
    editorAnnounceDiv.style.visibility = 'hidden';
    editorDiv.appendChild(editorAnnounceDiv);
    editorHVLButton = document.createElement('input');
    editorHVLButton.type = 'button';
    editorHVLButton.className = 'editorButtonStyle';
    if (editorType == 'F') {
      editorHVLButton.value = 'Insert diagram';
    } else {
      editorHVLButton.value = 'Create link';
    }
    editorHVLButton.onclick = function () {
      editorHVLButtonClicked();
    };
    editorDiv.appendChild(editorHVLButton);
    editorNewButton = document.createElement('input');
    editorNewButton.type = 'button';
    editorNewButton.className = 'editorButtonStyle';
    editorNewButton.value = 'New diagram';
    editorNewButton.onclick = function () {
      editorNewButtonClicked();
    };
    editorDiv.appendChild(editorNewButton);

    commentsEdit = document.createElement('textArea');
    commentsEdit.className = 'commentsEditStyle';
    commentsEdit.onkeydown = function (event) {
      stopKeyboardEvent(event);
    };
    editorDiv.appendChild(commentsEdit);
    commentsHeading = document.createElement('div');
    commentsHeading.className = 'commentsHeadingDivStyle';
    commentsHeading.innerHTML = 'Comments:';
    disableSelection(commentsHeading);
    editorDiv.appendChild(commentsHeading);
    blockDiv.appendChild(editorMenuDiv);
  } else if (editorMenuDiv) {
    editorMenuDiv.style.visibility = 'hidden';
  }
  createLeaderBoard();
  createBiddingBox();
}

function createCardDivs() {
  if (cardDivsCreated) return;

  cardDivsCreated = true;

  if (fastVersion) return;

  for (seat = 0; seat < 4; seat++) {
    for (suit = 0; suit < 4; suit++) {
      for (card = 0; card < 13; card++) {
        cardDivs[seat][suit][card] = document.createElement('div');
        cardDivs[seat][suit][card].className = 'cardDivStyle';
        cardDivs[seat][suit][card].suit = suit;
        cardDivs[seat][suit][card].card = -1;
        cardDivs[seat][suit][card].onmouseover = function () {
          mouseOverCardImage(this);
        };
        cardDivs[seat][suit][card].onmouseout = function () {
          mouseOutCardImage(this);
        };
        cardDivs[seat][suit][card].onclick = function () {
          mouseClickCardImage(this);
        };
        suitHoldings[seat][suit].appendChild(cardDivs[seat][suit][card]);
      }
    }
  }

  for (suit = 0; suit < 4; suit++) {
    gibDivs[suit] = new Array(13);
    for (card = 0; card < 13; card++) {
      gibDivs[suit][card] = document.createElement('div');
      gibDivs[suit][card].className = 'gibDivStyle';
    }
  }

  createCardImageDivs();
  picturesModeChanged();
}

function createAuctionRow() {
  var rowIndex;
  if (!auctionTable.rows) rowIndex = 0;
  else rowIndex = auctionTable.rows.length;

  var newRow = auctionTable.insertRow(rowIndex);
  var newCell;
  for (i = 0; i < 5; i++) {
    newCell = newRow.insertCell(i);
    newCell.align = 'center';
    if (i < 4) newCell.style.width = '25%';
    else newCell.style.width = '0%';
  }
}

function clearAuction() {
  var i;
  for (i = auctionTable.rows.length - 1; i >= 0; i--) {
    auctionTable.deleteRow(i);
  }
  createAuctionRow();
  manageAuctionScrollBar();
}

function clearDeck() {
  for (w = 0; w < 4; w++) {
    howManyCards[w] = 0;
    howManyCardsDealt[w] = 0;
    howManySuit[w] = new Array(4);
    howManySuitDealt[w] = new Array(4);
    howManyXs[w] = new Array(4);
    for (s = 0; s < 4; s++) {
      howManySuit[w][s] = 0;
      howManySuitDealt[w][s] = 0;
      howManyXs[w][s] = 0;
    }
  }




  for (s = 0; s < 4; s++) {
    deck[s] = new Array(13);
    userDealt[s] = new Array(13);
    cardHighlighted[s] = new Array(13);
    for (c = 0; c < 13; c++) {
      userDealt[s][c] = false;
      cardHighlighted[s][c] = false;
      deck[s][c] = -10;
    }
  }

  
  for (t = 0; t < 13; t++) {

    suitPlayed[t] = new Array(4);
    rankPlayed[t] = new Array(4);
    seatPlayed[t] = new Array(4);
    cardAnnotation[t] = [null, null, null, null];
    cardAnnotType[t] = [null, null, null, null];

    trickWinner[t] = -1;

    for (it = 0; it < 4; it++) {
      suitPlayed[t][it] = -1;
      rankPlayed[t][it] = -1;
      seatPlayed[t][it] = -1;
    }
  }


  

  populateHands(0, 3, 0, 3);
  clearAuction();
  hilightSuitSymbol(false);
  boardNum = 0;
  dealer = -1;
  nsVul = false;
  ewVul = false;
  trick = -1;
  inTrick = 3;
  playSeqPoint = 0;
  playSeqMax = -1;
  bidSeqPoint = -1;
  bidSeqMax = -1;
  lastBidder = -1;
  contractLevel = -1;
  nsTricks = 0;
  ewTricks = 0;
  tricksClaimed = -1;
  alertedCall = -1;
  lastLevelBid = -1;
  lastStrainBid = -1;
  doubled = 0;
  passes = -1;
  trump = -1;
  dummy = -1;
  declarer = -1;
  whosTurn = -1;
  if (!isVugraphMatch) {
    otherTableResult = '';
  }
  claimShowing = false;
  clearTrickCards(0, 3);
  auctionTableDiv.style.visibility = 'hidden';
  auctionHeadingDiv.style.visibility = 'hidden';
  callExplanation[0] = '';

  manageWhosTurn();
  manageHandBackground(0, 3);
  manageVul();
  manageTricksDiv();
  manageAlertDiv();
  manageScoreDiv();
  manageGIBButton();
  managePlayButton();

  disableButton('next', true);
  disableButton('undo', true);
  disableButton('rewind', true);

  if (isVugraphMatch || vugraphClient) {
    introAnnotation = null;
  } else if (annotDiv) {
    annotDiv.innerHTML = '';
  }
  resetBiddingBox();
  if (commentsEdit) {
    commentsEdit.value = '';
  }
}

function dealCardToPlayer(suit, card, seat) {
  var who = deck[suit][card];

  if (who == -10) {
    deck[suit][card] = seat;
    howManyCards[seat]++;
    howManyCardsDealt[seat]++;
    howManySuit[seat][suit]++;
    howManySuitDealt[seat][suit]++;
  }
}

function removeButton(buttonID) {
  var buttonTD = document.getElementById('buttonDiv');
  var button = document.getElementById(buttonID);

  if (button && button.parentNode == buttonTD) {
    buttonTD.removeChild(button);
  }
}

function disableButton(which, disable) {
  var button;
  if (which == 'new') button = document.getElementById('newButton');
  else if (which == 'shuffle') button = document.getElementById('shuffleButton');
  else if (which == 'next') button = document.getElementById('nextButton');
  else if (which == 'undo') button = document.getElementById('undoButton');
  else if (which == 'rewind') button = document.getElementById('rewindButton');
  else if (which == 'gib') button = document.getElementById('gibButton');
  else if (which == 'options') button = document.getElementById('optionsButton');
  else if (which == 'play') button = document.getElementById('playButton');
  if (button) button.disabled = disable;
}

function isButtonEnabled(which) {
  var button;
  if (which == 'next') button = document.getElementById('nextButton');
  else if (which == 'undo') button = document.getElementById('undoButton');
  else if (which == 'rewind') button = document.getElementById('rewindButton');
  else if (which == 'gib') button = document.getElementById('gibButton');
  else if (which == 'options') button = document.getElementById('optionsButton');
  else if (which == 'play') button = document.getElementById('playButton');
  if (button) return !button.disabled;
  return false;
}

function nextCard(animate, fromCardClick) {
  if (playSeqPoint <= playSeqMax) {
    if (!playCard(playSequence[playSeqPoint], animate)) {
      playSeqMax = playSeqPoint - 1;
    } else {
      playSeqPoint++;
    }
    if (playSeqPoint > playSeqMax) {
      disableButton('next', true);
      if (tricksClaimed >= 0) {
        showTrickResult();
      }
    }
    disableButton('undo', false);

    if (!exploreLine) disableButton('rewind', false);

    autoPlayNextCard = false;

    if (
      !fromCardClick &&
      areEventsGrouped() &&
      !advanceCardByCard() &&
      animate &&
      (!cardAnnotation[trick][inTrick] || hideChat)
    ) {
      if (inTrick < 3) {
        autoPlayNextCard = true;
        if (!picturesOfCards) {
          trickTimer = setTimeout('nextCard(true)', 500);
        }
      } else if (!picturesOfCards) {
        killTimer();
      }
    } else if (trickTimer) {
      clearTimeout(trickTimer);
      trickTimer = null;
    }
  }
}

function shuffle() {
  if (isVugraphMatch) {
    if (navMenuDiv.style.visibility == 'visible') {
      hideContextMenu(null, true);
    } else {
      var but = document.getElementById('shuffleButton');
      var buttonDiv = document.getElementById('buttonDiv');
      if (but && buttonDiv) {
        showContextMenu(getX(but) + 2, getY(but) - navMenuDiv.clientHeight + 1, true);
      }
    }
    return;
  }

  if (!playingClient) {
    clearPlayerNames();
  }

  var seat;
  var suit;
  var card;

  hilightSuitSymbol(false);

  if (!getDeal && !getDealer) {
    clearDeck();
  } else {
    clearAllCardHighlights();
    for (suit = 0; suit < 4; suit++) {
      for (card = 0; card < 13; card++) {
        if (userDealt[suit][card]) {
          cardHighlighted[suit][card] = true;
        } else {
          cardHighlighted[suit][card] = false;
          seat = deck[suit][card];
          if (seat >= 0) {
            howManyCards[seat]--;
            howManyCardsDealt[seat]--;
            howManySuit[seat][suit]--;
            howManySuitDealt[seat][suit]--;
            deck[suit][card] = -10;
          }
        }
      }
    }
  }

  var acceptableDeal = true;
  do {
    if (!acceptableDeal) {
      clearDeck();
    }
    acceptableDeal = true;
    var hcp = new Array(4);
    for (seat = 0; seat < 3; seat++) {
      hcp[seat] = 0;
      var iMax = 13 - howManyCards[seat];
      for (i = 0; i < iMax; i++) {
        var ok = false;
        while (!ok) {
          var rand = Math.floor(Math.random() * 52);
          suit = Math.floor(rand / 13);
          card = rand % 13;
          if (deck[suit][card] == -10) {
            if (card >= 9) {
              hcp[seat] += card - 8;
            }
            dealCardToPlayer(suit, card, seat);
            ok = true;
          }
        }
      }
    }

    fillInFourthHand();

    if (playingClient) {
      if (lessonID <= '3') {
        if (hcp[0] + hcp[2] < 26) {
          acceptableDeal = false;
        }
      }
    }
  } while (!acceptableDeal);

  if (playingClient) {
    sendUploadDealMessage();
    return;
  }

  populateHands(0, 3, 0, 3);
  setAllCardHighlights();
  getTheDealer();
  manageBiddingBox();
  enableNewButton();
}

function resizeCards(seat, suit) {
  if (fastVersion || !cardDivsCreated) {
    return;
  }

  var pixels = 0;
  var fs = 1.2 * fontSize;
  var maxWidth = 0.82 * handWidth;
  for (i = 0; i < 13; i++) {
    if (cardDivs[seat][suit][i].innerHTML == '') {
      cardDivs[seat][suit][i].style.left = 0;
    } else {
      cardDivs[seat][suit][i].style.left = pixels;
      cardDivs[seat][suit][i].style.fontSize = fs;
      pixels += cardDivs[seat][suit][i].clientWidth + 1;

      if (pixels > maxWidth && fs > 8) {
        fs--;
        i = -1;
        pixels = 0;
      }
    }
  }
}

function populateHands(seatMin, seatMax, suitMin, suitMax) {
  if (!cardDivsCreated) {
    return;
  }

  var div = document.getElementById('theDiv');
  var seat;
  var suit;
  var card;
  var suitOrder;

  if (picturesOfCards) {
    suitMin = 0;
    suitMax = 3;
  }

  for (seat = seatMin; seat <= seatMax; seat++) {
    var totalCards = 0;
    for (suitOrder = suitMin; suitOrder <= suitMax; suitOrder++) {
      var which = 0;
      var holding = '';
      suit = getSuitOrder(suitOrder);

      if (fastVersion) {
        suitHoldings[seat][suit].innerHTML = '';
      }

      for (card = 12; card >= 0; card--) {
        var played = false;
        if (deck[suit][card] == seat - 4) played = true;
        if (picturesOfCards) {
          if (played) {
            if (cardImageDiv[suit][card].parentNode == div) {
              div.removeChild(cardImageDiv[suit][card]);
              cardImageDiv[suit][card].needsResizing = true;
            }
          } else if (deck[suit][card] == seat) {
            if (isHandShowing(seat)) {
              div.insertBefore(cardImageDiv[suit][card], nameBars[seat]);
              maybeResizeCardImage(cardImageDiv[suit][card]);
            } else {
              if (cardImageDiv[suit][card].parentNode == div) {
                div.removeChild(cardImageDiv[suit][card]);
                cardImageDiv[suit][card].needsResizing = true;
              }
              div.insertBefore(cardBackDiv[seat][totalCards], nameBars[seat]);
              totalCards++;
            }
          }
        } else if (deck[suit][card] == seat || (showPlayedCards && played)) {
          holding = '';
          if (played) holding += "<font color='808080'>";
          else holding += "<font color='000000'>";
          holding += getCardChar(card);
          holding += '</font>';

          if (fastVersion) {
            suitHoldings[seat][suit].innerHTML += holding;
          } else {
            cardDivs[seat][suit][which].innerHTML = holding;
            cardDivs[seat][suit][which].card = card;
          }

          which++;
        }
      }

      if (!picturesOfCards) {
        for (x = 0; x < howManyXs[seat][suit]; x++) {
          if (fastVersion) {
            suitHoldings[seat][suit].innerHTML += 'x';
          } else {
            cardDivs[seat][suit][which].innerHTML = 'x';
            cardDivs[seat][suit][which].card = -1;
            which++;
          }
        }

        if (!fastVersion) {
          for (i = which; i < 13; i++) {
            cardDivs[seat][suit][i].innerHTML = ' ';
            cardDivs[seat][suit][i].card = -10;
          }

          resizeCards(seat, suit);
        }
      }

      for (card = totalCards; card < 13; card++) {
        if (cardBackDiv[seat] && cardBackDiv[seat][card].parentNode == div) {
          div.removeChild(cardBackDiv[seat][card]);
        }
      }
    }
    if (picturesOfCards || getDeal) {
      moveCardImages(seat, seat);
    }
  }
}

function getHandWidth(seat) {
  if (picturesOfCards && playingClient && seat % 2 && !isHandShowing(seat)) {
    return (2 * handWidth) / 3;
  }
  return handWidth;
}

function getCardXOverlap(seat) {
  if (picturesOfCards && playingClient && seat % 2) {
    return (getHandWidth(seat) - cardImageWidth) / 12;
  }
  return cardImageXOverlap;
}

function moveCardImages(seatMin, seatMax) {
  if (getDeal) {
    moveEditorCardImages();

    if (!picturesOfCards) {
      return;
    }
  }

  var seat;
  var suit;
  var card;
  var suitOrder;

  for (seat = seatMin; seat <= seatMax; seat++) {
    var overlap = getCardXOverlap(seat);
    var theHandWidth = getHandWidth(seat);

    var cardImageX =
      xpos[seat] + (theHandWidth - ((howManyCards[seat] - 1) * overlap + cardImageWidth)) / 2;
    var cardTop = getPicturesNameBarTop(seat) + nameHeight - cardImageHeight;

    var totalCards = 0;
    for (suitOrder = 0; suitOrder <= 3; suitOrder++) {
      suit = getSuitOrder(suitOrder);
      for (card = 13; card >= 0; card--) {
        if (deck[suit][card] == seat) {
          if (isHandShowing(seat)) {
            cardImageDiv[suit][card].style.top = cardTop;
            cardImageDiv[suit][card].style.left = cardImageX;
          } else {
            cardBackDiv[seat][totalCards].style.top = cardTop;
            cardBackDiv[seat][totalCards].style.left = cardImageX;
          }
          totalCards++;
          cardImageX += overlap;
        }
      }
    }
  }
}

function moveEditorCardImages() {
  var workingHeight = 2.3 * cardImageHeight;
  var yOverlap = (workingHeight - cardImageHeight) / 3;
  var cardTop = 2 * margin + editorAnnounceDiv.clientHeight;
  var suit;
  var card;

  var theDiv = document.getElementById('theDiv');

  for (suit = 3; suit >= 0; suit--) {
    var cardLeft = margin;

    for (card = 12; card >= 0; card--) {
      if (deck[suit][card] == -10) {
        if (whosTurn == -1) {
          if (cardImageDiv[suit][card].parentNode == editorDiv) {
            editorDiv.removeChild(cardImageDiv[suit][card]);
            cardImageDiv[suit][card].needsResizing = true;
          }
        } else {
          editorDiv.insertBefore(cardImageDiv[suit][card], null);
          cardImageDiv[suit][card].style.top = cardTop;
          cardImageDiv[suit][card].style.left = cardLeft;
          cardLeft += cardImageXOverlap;
          maybeResizeCardImage(cardImageDiv[suit][card]);
        }
      } else if (cardImageDiv[suit][card].parentNode == editorDiv) {
        editorDiv.removeChild(cardImageDiv[suit][card]);
        cardImageDiv[suit][card].needsResizing = true;
      } else if (!picturesOfCards && cardImageDiv[suit][card].parentNode == theDiv) {
        theDiv.removeChild(cardImageDiv[suit][card]);
        cardImageDiv[suit][card].needsResizing = true;
      }
    }
    cardTop += yOverlap;
  }
}

function showContextMenu(x, y, nav) {
  if (!scoreBoardDivShowing && !auctionOnly()) {
    hideContextMenu(null, !nav);
    var menu = getMenuDiv(nav);
    menu.style.visibility = 'visible';
    menu.style.left = Math.min(x, document.body.clientWidth - menu.clientWidth - margin);
    menu.style.top = Math.min(y, document.body.clientHeight - menu.clientHeight - margin);
  }
}

function contextMenuRequest(event) {
  if (showMovie() || isEditor) {
    showContextMenu(event.clientX, event.clientY, false);
  }
}

function removeMenuCommand(command, nav) {
  var table = getMenuTable(nav);

  for (var row = 0; row < table.rows.length; row++) {
    var item = table.rows[row].cells[0];
    if (!command || item.id == command) {
      table.deleteRow(row);
      row--;
      if (command) {
        return;
      }
    }
  }
}

function addMenuCommand(command, nav) {
  var table = getMenuTable(nav);

  for (var row = 0; row < table.rows.length; row++) {
    var item = table.rows[row].cells[0];
    if (item.id == command) {
      return;
    }
  }

  var items = table.rows.length;
  var menuTableRow = table.insertRow(items);
  var menuTableCell = menuTableRow.insertCell(0);
  menuTableCell.id = command;
  menuTableCell.onmouseover = function () {
    this.style.backgroundColor = '#99CCCC';
  };
  menuTableCell.onmouseout = function () {
    this.style.backgroundColor = '#E2E1B5';
  };
  menuTableCell.onclick = function () {
    issueMenuCommand(this, nav);
  };
  menuTableCell.style.whiteSpace = 'nowrap';
  menuTableCell.style.paddingLeft = 2;
  menuTableCell.style.paddingRight = 2;
}

function hideContextMenu(event, nav) {
  var target;

  if (event) {
    if (event.target) {
      target = event.target;
    } else if (event.srcElement) {
      target = event.srcElement;
    }
  }

  if (!target || (target && target.id != 'optionsButton' && target.id != 'shuffleButton')) {
    var menu = getMenuDiv(nav);
    var table = getMenuTable(nav);

    if (menu && table) {
      menu.style.left = 0;
      menu.style.visibility = 'hidden';
      for (var row = 0; row < table.rows.length; row++) {
        var item = table.rows[row].cells[0];
        item.style.backgroundColor = '#E2E1B5';
      }
    }
  }
}

function manageChatFontSizeMenuCommands() {
  removeMenuCommand('smallerchat');
  removeMenuCommand('biggerchat');

  if ((vugraphClient || isVugraphMatch) && !hideChat && !playingClient) {
    if (chatFontSize < 4) {
      addMenuCommand('biggerchat');
    }
    if (chatFontSize > 0) {
      addMenuCommand('smallerchat');
    }
  }
  setMenuText();
}

function setAnnotChatFontSize() {
  var sizes = [0.6, 0.7, 0.8, 1, 1.2];
  annotDiv.style.fontSize = sizes[chatFontSize] * fontSize;
}

function togglePictures() {
  picturesOfCards = !picturesOfCards;

  picturesModeChanged();
  setMenuText();

  if (vugraphClient) {
    setCookie('picturesOfCards_bbo', picturesOfCards, 365);
  } else if (!isEditor && (isVugraphMatch || displayType != '')) {
    setCookie('picturesOfCards', picturesOfCards, 365);
  }
  setKibitzed(seatKibitzed);
  manageGIBDivs();
  populateHands(0, 3, 0, 3);
  clearTrickCards(0, 3);
  var t = trick;
  if (inTrick == 0) {
    t--;
  }
  if (t >= 0) {
    showAllTrickCards();
  }
  setAllCardHighlights();
  respondToResize();
}

function toggleShowPlayed() {
  showPlayedCards = !showPlayedCards;
  populateHands(0, 3, 0, 3);
  manageGIBDivs();
  setMenuText();
  setCookie('showPlayedCards', showPlayedCards, 365);
}

function toggleHideChat() {
  hideChat = !hideChat;
  manageChatFontSizeMenuCommands();
  respondToResize();
  setCookie('hideChat', hideChat, 365);
}

function toggleCardByCard() {
  cardByCard = !cardByCard;
  setCookie('cardByCard', cardByCard, 365);
  setMenuText();
}

function changeChatFontSize(bigger) {
  if (bigger) {
    chatFontSize++;
  } else {
    chatFontSize--;
  }
  manageChatFontSizeMenuCommands();
  setAnnotChatFontSize();
  setCookie('chatFontSize', chatFontSize, 365);
}

function issueMenuCommand(command) {
  hideContextMenu();
  hideContextMenu(null, true);
  if (command.id == 'pictures') {
    togglePictures();
  } else if (command.id == 'played') {
    toggleShowPlayed();
  } else if (command.id == 'hidechat') {
    toggleHideChat();
  } else if (command.id == 'cardbycard') {
    toggleCardByCard();
  } else if (command.id == 'biggerchat') {
    changeChatFontSize(true);
  } else if (command.id == 'smallerchat') {
    changeChatFontSize(false);
  } else if (command.id == 'scoreboard') {
    showScoreBoard();
  } else if (command.id == 'nextboard') {
    showVugraphBoard(roomShowing, boardShowing + 1);
  } else if (command.id == 'prevboard') {
    showVugraphBoard(roomShowing, boardShowing - 1);
  } else if (command.id == 'otherroom') {
    showVugraphBoard(1 - roomShowing, boardShowing);
  }
}

function getMenuTable(nav) {
  if (nav) {
    if (navMenuTable) {
      return navMenuTable;
    }
  }
  if (menuTable) {
    return menuTable;
  }
  return null;
}

function getMenuDiv(nav) {
  if (nav) {
    if (navMenuDiv) {
      return navMenuDiv;
    }
  }
  if (menuDiv) {
    return menuDiv;
  }
  return null;
}

function setMenuText(nav) {
  var table = getMenuTable(nav);

  for (var row = 0; row < table.rows.length; row++) {
    var item = table.rows[row].cells[0];
    if (item.id == 'pictures') {
      if (picturesOfCards) item.innerHTML = 'Hand diagram';
      else item.innerHTML = 'Pictures of cards';
    } else if (item.id == 'played') {
      if (showPlayedCards) item.innerHTML = 'Hide played cards';
      else item.innerHTML = 'Show played cards';
    } else if (item.id == 'hidechat') {
      if (hideChat) item.innerHTML = 'Show chat';
      else item.innerHTML = 'Hide chat';
    } else if (item.id == 'cardbycard') {
      if (cardByCard) item.innerHTML = 'Advance trick by trick';
      else item.innerHTML = 'Advance card by card';
    } else if (item.id == 'biggerchat') {
      item.innerHTML = 'Bigger chat font';
    } else if (item.id == 'smallerchat') {
      item.innerHTML = 'Smaller chat font';
    } else if (item.id == 'scoreboard') {
      item.innerHTML = 'Scoreboard';
    } else if (item.id == 'nextboard') {
      item.innerHTML = 'Next board';
    } else if (item.id == 'prevboard') {
      item.innerHTML = 'Previous board';
    } else if (item.id == 'otherroom') {
      item.innerHTML = 'Other table';
    }
  }
}

function fillInFourthHand() {
  var num13 = 0;
  var not13 = -1;

  for (seat = 0; seat < 4; seat++) {
    if (howManyCardsDealt[seat] == 13) num13++;
    else not13 = seat;
  }

  if (num13 == 3 && not13 >= 0) {
    for (suit = 0; suit < 4; suit++) {
      for (card = 0; card < 13; card++) {
        if (deck[suit][card] == -10) dealCardToPlayer(suit, card, not13);
      }
    }
    return true;
  }
  return false;
}

function getTrickCardImageTop(seat) {
  var midY = (totalHeight - cardImageHeight) / 2;
  if (seat == 0) {
    return midY + 0.35 * cardImageHeight;
  } else if (seat == 2) {
    return midY - 0.35 * cardImageHeight;
  } else if (seat == 1) {
    return midY + 0.1 * cardImageHeight;
  } else {
    return midY - 0.1 * cardImageHeight;
  }
}

function getTrickCardImageLeft(seat) {
  var midX = editorWidthOffset + (totalWidth - editorWidthOffset - cardImageWidth) / 2;

  if (seat == 1) {
    return midX - 0.45 * cardImageWidth;
  } else if (seat == 3) {
    return midX + 0.45 * cardImageWidth;
  } else {
    return midX;
  }
}

function moveTrickCardImage(seat) {
  if (trickCardImage[seat]) {
    trickCardImage[seat].style.top = getTrickCardImageTop(seat);
    trickCardImage[seat].style.left = getTrickCardImageLeft(seat);
  }
}

function clearTrickCards(seatMin, seatMax) {
  var div = document.getElementById('theDiv');

  for (seat = seatMin; seat <= seatMax; seat++) {
    trickDivs[seat].style.visibility = 'hidden';
    if (trickCardImage[seat] && trickCardImage[seat].parentNode == div) {
      div.removeChild(trickCardImage[seat]);
      trickCardImage[seat].needsResizing = true;
    }
    trickCardImage[seat] = null;
  }
}

function showAllTrickCards() {
  if (trick < 0) {
    return;
  }
  var it;
  for (it = 0; it <= inTrick; it++) {
    showTrickCard(seatPlayed[trick][it], suitPlayed[trick][it], rankPlayed[trick][it]);
  }
}

function showTrickCard(seat, suit, rank) {
  if (suit < 0 || rank < 0) {
    return;
  }

  if (picturesOfCards) {
    var div = document.getElementById('theDiv');
    if (cardImageDiv[suit][rank].parentNode != div) {
      div.appendChild(cardImageDiv[suit][rank]);
      maybeResizeCardImage(cardImageDiv[suit][rank]);
    }

    trickCardImage[seat] = cardImageDiv[suit][rank];
    moveTrickCardImage(seat);
  } else {
    var rankShow = getCardChar(rank);

    trickDivs[seat].innerHTML = suitHTMLs[suit] + "<font color='000000'>" + rankShow + '</font>';
    trickDivs[seat].style.visibility = 'visible';
  }
}

function getPartner(seat) {
  if (seat >= 0 && seat <= 4) {
    var pardSeat = seat + 2;
    if (pardSeat > 3) {
      pardSeat -= 4;
    }
    return pardSeat;
  }
  return -1;
}

function getBidSeqPoint(r, ir) {
  var where = 4 * (r - 1) + (ir - 1);
  var fromWest = dealer - 1;
  if (fromWest < 0) fromWest = 3;
  where -= fromWest;
  return where;
}

function isVul(seat, board) {
  var i = board % 16;

  if (
    (seat == 0 || seat == 2) &&
    (i == 2 || i == 4 || i == 5 || i == 7 || i == 10 || i == 12 || i == 13 || i == 15)
  )
    return true;
  if (
    (seat == 1 || seat == 3) &&
    (i == 3 || i == 4 || i == 6 || i == 7 || i == 10 || i == 9 || i == 13 || i == 0)
  )
    return true;

  return false;
}

function interpretSuitChar(suit) {
  var s;

  for (s = 0; s < 5; s++) {
    if (suit.toUpperCase() == suitchars.charAt(s)) return s;
  }
  return -1;
}

function interpretSeatString(direction) {
  if (!direction || !direction.length) return -1;

  for (seat = 0; seat < 4; seat++) {
    if (direction.charAt(0).toUpperCase() == seats[seat].charAt(0).toUpperCase()) {
      return seat;
    }
  }
  return -1;
}

function bspToAuctionRow(bsp) {
  var fromWest = dealer - 1;
  if (fromWest < 0) fromWest = 3;
  return Math.floor((bsp + fromWest) / 4);
}

function bspToAuctionCol(bsp) {
  var fromWest = dealer - 1;
  if (fromWest < 0) fromWest = 3;
  return (bsp + fromWest) % 4;
}

function setDeclarer() {
  var bsp = 0;
  while (bsp <= bidSeqPoint) {
    if (levelBid[bsp] > 0 && strainBid[bsp] == trump && seatBid[bsp] % 2 == lastBidder % 2) {
      declarer = seatBid[bsp];
      break;
    }

    bsp++;
  }
}

function explainCall(explain, bsp) {
  callExplanation[bsp] = explain;

  var row = bspToAuctionRow(bsp);
  var col = bspToAuctionCol(bsp);

  if (explain && explain != '') {
    auctionTable.rows[row].cells[col].style.background = highlightColor;
    auctionTable.rows[row].cells[col].onclick = function () {
      auctionCellClicked(bsp);
    };
  } else {
    auctionTable.rows[row].cells[col].style.background = '#99CCCC';
  }
}

function manageAlertDiv() {
  if (alertedCall >= 0) {
    var row = bspToAuctionRow(alertedCall);
    var col = bspToAuctionCol(alertedCall);
    var cell = auctionTable.rows[row].cells[col];
    alertDiv.innerHTML = insertSuitHTML(callExplanation[alertedCall]);
    alertDiv.style.left = Math.max(
      margin + (1 - fireFox),
      getX(cell) + cell.clientWidth - alertDiv.clientWidth + 2 * fireFox
    );
    alertDiv.style.top = Math.max(
      getY(auctionHeadingDiv) + auctionHeadingDiv.clientHeight - alertDiv.clientHeight + 1,
      getY(cell) - alertDiv.clientHeight + 1
    );
    alertDiv.style.visibility = 'visible';
  } else {
    alertDiv.style.visibility = 'hidden';
  }
}

function auctionCellClicked(bsp) {
  if (callExplanation[bsp] && alertedCall != bsp) {
    alertedCall = bsp;
  } else {
    alertedCall = -1;
  }

  manageAlertDiv();
}

function allowDouble() {
  if (doubled || lastBidder < 0) return false;
  if (whosTurn % 2 == lastBidder % 2) return false;

  return true;
}

function allowRedouble() {
  if (doubled != 2 || lastBidder < 0) return false;
  if (whosTurn % 2 != lastBidder % 2) return false;
  return true;
}

function makeCall(call) {
  if (call.length < 1 || passes == 3 || dealer == -1) return false;

  if (call.toUpperCase() == 'X') call = 'D';
  if (call.toUpperCase() == 'XX') call = 'R';

  var level = -1;
  var strain = -1;

  if (call.length == 1) {
    strain = callchars.indexOf(call.charAt(0).toUpperCase());
    if (strain >= 0) {
      level = 0;
    }
  }

  if (call.length == 2) {
    level = parseInt(call.charAt(0));
    strain = suitchars.indexOf(call.charAt(1).toUpperCase());
  }

  if (level < 0 || strain < 0) return false;
  if (level == 0 && strain == 1 && !allowDouble()) {
    return false;
  }
  if (level == 0 && strain == 2 && !allowRedouble()) {
    return false;
  }
  if (level > 0) {
    if (10 * level + strain <= 10 * lastLevelBid + lastStrainBid) return false;
  }

  bidSeqPoint++;
  if (bidSeqPoint > bidSeqMax) bidSeqMax = bidSeqPoint;
  if (callAnnotation[bidSeqPoint] != null) {
    if (callAnnotType[bidSeqPoint]) {
      annotDiv.innerHTML += callAnnotation[bidSeqPoint];
    } else {
      annotDiv.innerHTML = callAnnotation[bidSeqPoint];
    }
  }
  bidSequence[bidSeqPoint] = call;
  levelBid[bidSeqPoint] = level;
  strainBid[bidSeqPoint] = strain;
  seatBid[bidSeqPoint] = whosTurn;
  whosTurn++;
  if (whosTurn == 4) whosTurn = 0;

  var row = bspToAuctionRow(bidSeqPoint);
  var col = bspToAuctionCol(bidSeqPoint);

  if (auctionTable.rows.length < row + 1) createAuctionRow();

  if (level == 0) auctionTable.rows[row].cells[col].innerHTML = calls[strain];
  else
    auctionTable.rows[row].cells[col].innerHTML =
      "<font color='000000'>" + level + '</font>' + suitHTMLs[strain];

  explainCall('', bidSeqPoint);

  if (level == 0 && strain == 0) {
    passes++;

    if (passes == 3) {
      trump = lastStrainBid;
      contractLevel = lastLevelBid;
      setDeclarer();
      whosTurn = declarer + 1;
      if (whosTurn == 4) {
        whosTurn = 0;
      }
      setKeyboardSuit();
      if (contractLevel > 0) {
        manageGIBButton();
      } else {
        showTrickResult();
      }
    }
    manageTricksDiv();
    manageAnnounceDiv();
  } else if (level == 0) {
    doubled = strain * 2;
    passes = 0;
  } else {
    lastLevelBid = levelBid[bidSeqPoint];
    lastStrainBid = strainBid[bidSeqPoint];
    lastBidder = seatBid[bidSeqPoint];
    doubled = 0;
    passes = 0;
  }

  manageBiddingQuestionMark();
  manageWhosTurn();
  manageAuctionScrollBar();
  auctionTableDiv.scrollTop = auctionTableDiv.scrollHeight;
  disableButton('undo', false);
  disableButton('rewind', false);
  disableButton(
    'next',
    (passes == 3 && playSeqMax == -1) || (passes < 3 && bidSeqPoint == bidSeqMax)
  );
  resetBiddingBox();
  manageBiddingBox();
  return true;
}

function manageBiddingQuestionMark() {
  if (passes < 3 && (vugraphClient || getSequence || isVugraphMatch)) {
    var row = bspToAuctionRow(bidSeqPoint + 1);
    var col = bspToAuctionCol(bidSeqPoint + 1);

    if (auctionTable.rows.length < row + 1) createAuctionRow();

    auctionTable.rows[row].cells[col].innerHTML = '?';
  }
}

function undoCall() {
  if (trick >= 0 || bidSeqPoint < 0) return false;

  removeGIBDivs();
  manageGIBButton();

  var seat = seatBid[bidSeqPoint];
  var level = levelBid[bidSeqPoint];
  var strain = strainBid[bidSeqPoint];
  var row;
  var col;

  if (passes < 3) {
    row = bspToAuctionRow(bidSeqPoint + 1);
    col = bspToAuctionCol(bidSeqPoint + 1);

    auctionTable.rows[row].cells[col].innerHTML = '';
    auctionTable.rows[row].cells[col].style.background = '#99CCCC';
  }

  if (level == 0 && strain == 0) {
    passes--;
    if (passes == 2) manageTricksDiv();
  }

  row = bspToAuctionRow(bidSeqPoint);
  col = bspToAuctionCol(bidSeqPoint);

  auctionTable.rows[row].cells[col].innerHTML = '';
  auctionTable.rows[row].cells[col].style.background = '#99CCCC';

  if (col == 0 && row > 0) auctionTable.deleteRow(row);

  declarer = -1;
  bidSeqPoint--;
  if (bidSeqPoint < 0) {
    disableButton('undo', true);
    disableButton('rewind', true);
  }
  disableButton('next', false);

  whosTurn = seat;
  manageWhosTurn();

  if (level != 0 || strain != 0) {
    var bsp = bidSeqPoint;
    passes = 0;
    doubled = 0;
    lastBidder = -1;
    while (bsp >= 0) {
      seat = seatBid[bsp];
      level = levelBid[bsp];
      strain = strainBid[bsp];

      if (level > 0) {
        lastLevelBid = level;
        lastStrainBid = strain;
        lastBidder = seat;
        break;
      } else if (strain > 0 && doubled == 0) doubled = strain * 2;
      else if (strain == 0 && doubled == 0) passes++;
      bsp--;
    }
    if (lastBidder == -1) {
      lastStrainBid = -1;
      lastLevelBid = -1;
      passes--;
    }
  }

  alertedCall = -1;
  manageBiddingQuestionMark();
  manageAlertDiv();
  manageAuctionScrollBar();
  resetBiddingBox();
  manageBiddingBox();
}

function killTimer() {
  endCardAnimation();

  if (autoPlayNextCard) {
    autoPlayNextCard = false;
    if (trickTimer) {
      clearTimeout(trickTimer);
      trickTimer = null;
    }

    while (inTrick < 3 && playSeqPoint <= playSeqMax) {
      nextCard(false);
      if (cardAnnotation[trick][inTrick] && !hideChat) break;
    }
  }
}

function play() {
  exploreLine = !exploreLine;

  var playButton = document.getElementById('playButton');

  if (exploreLine) {
    showTransientAnnouncement('Select cards to play\nfor all 4 players', -1);
    playButton.value = 'Exit';

    for (i = 0; i < 52; i++) {
      wasPlaySequence[i] = playSequence[i];
    }

    wasPlaySeqPoint = playSeqPoint;
    wasPlaySeqMax = playSeqMax;
    wasTricksClaimed = tricksClaimed;
    disableButton('undo', true);
    disableButton('rewind', true);
  } else {
    removeTransientAnnouncement();
    playButton.value = 'Play';

    for (i = 0; i < 52; i++) {
      playSequence[i] = wasPlaySequence[i];
    }

    playSeqMax = wasPlaySeqMax;
    tricksClaimed = wasTricksClaimed;
    rewind();
    while (playSeqPoint < wasPlaySeqPoint) {
      next(false);
    }

    disableButton('undo', playSeqPoint == 0);
    disableButton('rewind', playSeqPoint == 0);
  }
}

function options() {
  if (menuDiv.style.visibility == 'visible') {
    hideContextMenu();
  } else {
    var but = document.getElementById('optionsButton');
    var buttonDiv = document.getElementById('buttonDiv');
    if (but && buttonDiv) {
      showContextMenu(getX(but) + 2, getY(but) - menuDiv.clientHeight + 1, false);
    }
  }
}

function killGIB() {
  gibThinking = false;
  removeGIBDivs();
  manageGIBButton();
}

function gib() {
  if (gibDivsShowing) {
    removeGIBDivs();
    return;
  }

  gibThinking = true;
  manageGIBButton();

  var suit;
  var card;

  var leader = declarer + 1;
  if (leader == 4) {
    leader = 0;
  }

  var pbn = '';
  pbn += seats[leader].charAt(0)+':';

  for (var offset = 0; offset < 4; offset++) {
    var nextseat = (offset+leader)%4;
    for (suit = 3; suit >= 0; suit--) {
      for (card = 12; card >= 0; card--) {
        if (deck[suit][card] == nextseat || deck[suit][card] == nextseat - 4) {
          pbn += cardchars.charAt(card);
        }
      }
      if (suit>0) pbn += '.';
    }
    if (offset<3) pbn += ' ';
  }

  var pbnplays = [];

  var t = 0;
  var it = 0;
  while (100 * t + it <= 100 * trick + inTrick) {
    pbnplays.push(cardchars.charAt(rankPlayed[t][it])+suitchars.charAt(suitPlayed[t][it]));
    it++;
    if (it == 4) {
      it = 0;
      t++;
    }
  }  

  var result = nextPlays(pbn,suitchars.charAt(trump),pbnplays);
  gibThinking = false;
  manageGIBButton();
  gibDataReceived(result);
}

function advanceCardByCard() {
  return cardByCard;
}

function areEventsGrouped() {
  return !vugraphClient && !getSequence;
}

function next() {
  killTimer();
  var retVal;

  if (passes == 3 || endPosition()) {
    retVal = nextCard(true);
  } else if (bidSeqPoint < bidSeqMax) {
    while (bidSeqPoint < bidSeqMax && passes < 3) {
      var explain = callExplanation[bidSeqPoint + 1];
      retVal = makeCall(bidSequence[bidSeqPoint + 1]);
      if (retVal) {
        explainCall(explain, bidSeqPoint);
        if (callAnnotation[bidSeqPoint] && showMovie() && !hideChat) {
          retVal = false;
          break;
        }
      } else {
        disableButton('next', true);
        break;
      }

      if (!areEventsGrouped()) break;
    }
  }
  return retVal;
}

function undo() {
  killTimer();
  if (trick >= 0) {
    do {
      undoCard();

      if (
        !areEventsGrouped() ||
        advanceCardByCard() ||
        (trick >= 0 && cardAnnotation[trick][inTrick] && !hideChat)
      ) {
        break;
      }
    } while (inTrick != 3);
  } else {
    do {
      undoCall();
      if (!areEventsGrouped() || (bidSeqPoint >= 0 && callAnnotation[bidSeqPoint] && !hideChat)) {
        break;
      }
    } while (bidSeqPoint >= 0);
  }

  computeAnnotation();
}

function rewind() {
  killTimer();

  while (trick >= 0 || (undoIntoAuction() && bidSeqPoint >= 0)) {
    undo();
  }
  computeAnnotation();
}

function undoIntoAuction() {
  if (!areEventsGrouped()) {
    return true;
  }

  if (!showMovie() || bidSeqPoint == -1) {
    return false;
  }

  for (var bsp = 0; bsp < bidSeqPoint; bsp++) {
    if (callAnnotation[bsp] && !hideChat) {
      return true;
    }
  }

  return introAnnotation != null;
}

function undoCard() {
  if (trick < 0) return false;

  let regib = gibDivsShowing;

  removeGIBDivs();

  if (claimShowing) {
    claimShowing = false;
    removeTransientAnnouncement();
    setKibitzed();
  }

  var seat = seatPlayed[trick][inTrick];
  var suit = suitPlayed[trick][inTrick];
  var rank = rankPlayed[trick][inTrick];

  deck[suit][rank] += 4;
  howManyCards[seat]++;
  howManySuit[seat][suit]++;

  clearTrickCards(seat, seat);
  populateHands(seat, seat, suit, suit);

  whosTurn = seat;
  manageWhosTurn();

  inTrick--;
  if (inTrick == -1) {
    inTrick = 3;
    trick--;

    if (trick == -1) {
      if (!endPosition() || declarer >= 0) {
        var wasDummy = dummy;
        dummy = -1;
        setKibitzed();
        manageHandBackground(wasDummy, wasDummy);
      }

      if (!undoIntoAuction()) {
        disableButton('undo', true);
        disableButton('rewind', true);
      }
    } else {
      showAllTrickCards();
    }
  }
  if (inTrick == 2) {
    if (trickWinner[trick] % 2) ewTricks--;
    else nsTricks--;
    manageTricksDiv();
  }
  if (trick <= 11) {
    gibThinking = false;
    manageGIBButton();
  }
  disableButton('next', false);
  playSeqPoint--;
  setKeyboardSuit();

  if (exploreLine && playSeqPoint == wasPlaySeqPoint) {
    disableButton('undo', true);
  }

  if (regib) gib();

  return true;
}

function manageAnnounceDiv() {
  if (announceDivCentered) {
    announceDiv.style.fontSize = (3 * fontSize) / 2;
  } else {
    announceDiv.style.fontSize = fontSize;
  }

  if (announceDivCentered) {
    announceDiv.style.left = (totalWidth - announceDiv.clientWidth) / 2;
    announceDiv.style.top = (totalHeight - announceDiv.clientHeight) / 2;
  } else {
    if (picturesOfCards) {
      announceDiv.style.width = Math.max(
        0,
        totalWidth - 2 * margin - 2 * margin * fireFox - (xpos[0] + getHandWidth(0))
      );
      announceDiv.style.left = xpos[0] + getHandWidth(0) + margin;
    } else {
      announceDiv.style.width = handWidth - 2 * margin * fireFox;
      announceDiv.style.left = totalWidth - handWidth - margin - 2 * fireFox;
    }

    var top = totalHeight - margin - 2 - announceDiv.clientHeight;
    if (showTricksDiv()) {
      top -= tricksDiv.clientHeight + margin;
    }
    announceDiv.style.top = top;
  }
}

function manageEditorAnnounceDiv() {
  if (!isEditor) {
    return;
  }
  var thisFontSize = editorDiv.clientWidth / 10;

  editorDiv.style.fontSize = thisFontSize;
  editorAnnounceDiv.style.width = Math.max(0, editorWidthOffset - 14 * fireFox - 1);
  editorAnnounceDiv.style.left = 0;
  editorNewButton.style.height = buttonHeight;
  editorNewButton.style.fontSize = buttonFontSize;
  editorNewButton.style.paddingLeft = margin;
  editorNewButton.style.paddingRight = margin;
  editorNewButton.style.top = editorDiv.clientHeight - margin - 4 - editorNewButton.clientHeight;
  editorHVLButton.style.height = buttonHeight;
  editorHVLButton.style.fontSize = buttonFontSize;
  editorHVLButton.style.paddingLeft = margin;
  editorHVLButton.style.paddingRight = margin;
  editorHVLButton.style.top = editorDiv.clientHeight - 4 - margin - editorHVLButton.clientHeight;
  var left =
    (editorDiv.clientWidth -
      2 * margin -
      editorNewButton.clientWidth -
      editorHVLButton.clientWidth) /
    2;
  editorNewButton.style.left = left;
  editorHVLButton.style.left = left + 2 * margin + editorNewButton.clientWidth;
  editorAnnounceDiv.style.top = 0;
  editorAnnounceDiv.style.fontSize = fontSize;
  commentsEdit.style.width = editorWidthOffset - 2 * margin;
  commentsEdit.style.fontSize = buttonFontSize;
  commentsEdit.style.height = 2 * buttonHeight;
  commentsEdit.style.left = margin;
  commentsEdit.style.top =
    editorDiv.clientHeight - 2 * margin - 4 - editorNewButton.clientHeight - 2 * buttonHeight;
  commentsHeading.style.width = editorWidthOffset - 2 * margin - 2 * fireFox;
  commentsHeading.style.left = margin;
  commentsHeading.style.fontSize = buttonFontSize;
  commentsHeading.style.top =
    editorDiv.clientHeight -
    2 * margin -
    4 -
    editorNewButton.clientHeight -
    2 * buttonHeight -
    commentsHeading.clientHeight;
}

function removeTransientAnnouncement(editor) {
  if (editor) {
    editorAnnounceDiv.style.visibility = 'hidden';
  } else {
    if (announceTimer) {
      clearTimeout(announceTimer);
      announceTimer = null;
    }
    announceDiv.style.visibility = 'hidden';
  }
}

function showTransientAnnouncement(message, seconds, editor, centered) {
  if (editorMenuShowing && editor) {
    removeTransientAnnouncement(true);
    return;
  }

  if (centered) {
    announceDivCentered = true;
  } else {
    announceDivCentered = false;
  }

  if (announceTimer && !editor) {
    clearTimeout(announceTimer);
  }
  if (seconds > 0 && !editor) {
    announceTimer = setTimeout('removeTransientAnnouncement()', 1000 * seconds);
  }
  if (editor) {
    editorAnnounceDiv.innerHTML = message;
    editorAnnounceDiv.style.visibility = 'visible';
    manageEditorAnnounceDiv();
  } else {
    announceDiv.innerHTML = message;
    announceDiv.style.visibility = 'visible';
    manageAnnounceDiv();
  }
}

function manageEditorAnnouncement() {
  if (getDeal) {
    if (whosTurn >= 0) {
      showTransientAnnouncement('Select cards for ' + seats[whosTurn], 0, true);
    } else {
      showTransientAnnouncement('Diagram complete', 0, true);
    }
  }
  if (getDealer) {
    showTransientAnnouncement("Click the dealer's seat", 0, true);
  }
  if (getSequence) {
    if (passes < 3 && showAuction()) {
      showTransientAnnouncement('Select call for ' + seats[whosTurn], 0, true);
    } else if (!claimShowing && declarer >= 0 && trick < 13 && allowCardSelection()) {
      showTransientAnnouncement('Select card for ' + seats[whosTurn], 0, true);
    } else {
      showTransientAnnouncement('Diagram complete', 0, true);
    }
  }
}

function showTrickResult() {
  if (displayType == '' && (trick == 12 || tricksClaimed >= 0 || contractLevel == -1)) {
    var result;
    if (contractLevel == -1) {
      result = 'Passed out';
    } else if (tricksClaimed >= 0) {
      result = '' + tricksClaimed + ' Tricks Claimed';
    } else if (declarer % 2) {
      if (ewTricks == 1) {
        result = '' + ewTricks + ' Trick Taken';
      } else {
        result = '' + ewTricks + ' Tricks Taken';
      }
    } else {
      if (nsTricks == 1) {
        result = '' + nsTricks + ' Trick Taken';
      } else {
        result = '' + nsTricks + ' Tricks Taken';
      }
    }

    if (playingClient) {
      showTransientAnnouncement(result, -1);
    } else {
      showTransientAnnouncement(result, 5);
    }
    claimShowing = true;
    if (!picturesOfCards) {
      wasKibitzed = seatKibitzed;
      setKibitzed('');
    }
  }
}

function playCard(card, animate) {
  let regib = gibDivsShowing;

  if (playingClient) {
    soundPlay(3);
  }

  if (gibThinking) {
    gibThinking = false;
    manageGIBButton();
  }

  removeGIBDivs();

  if (card.length != 2 || (!endPosition() && (declarer < 0 || passes < 3))) return false;

  var suit = suitchars.indexOf(card.charAt(0).toUpperCase());
  var rank = cardchars.indexOf(card.charAt(1).toUpperCase());

  if (suit < 0 || suit > 3 || rank < 0 || rank > 12) return false;

  var seat = deck[suit][rank];

  if (seat == -10) {
    deck[suit][card] = whosTurn;
    seat = whosTurn;
  }

  if (seat < 0 || seat != whosTurn) return false;

  if (dummy == -1 && (!endPosition() || declarer >= 0)) {
    dummy = declarer + 2;
    if (dummy > 3) dummy -= 4;
    setKibitzed();
    manageHandBackground(dummy, dummy);
  }

  if (inTrick == 3) {
    if (trick == 12) return false;

    clearTrickCards(0, 3);
    trick++;
    inTrick = 0;
  } else inTrick++;

  suitPlayed[trick][inTrick] = suit;
  rankPlayed[trick][inTrick] = rank;
  seatPlayed[trick][inTrick] = whosTurn;

  if (inTrick == 3) {
    var suitHigh = suitPlayed[trick][0];
    var rankHigh = rankPlayed[trick][0];
    var seatHigh = seatPlayed[trick][0];

    for (it = 1; it < 4; it++) {
      if (
        (suitPlayed[trick][it] == suitHigh && rankPlayed[trick][it] > rankHigh) ||
        (suitPlayed[trick][it] == trump && suitHigh != trump)
      ) {
        suitHigh = suitPlayed[trick][it];
        rankHigh = rankPlayed[trick][it];
        seatHigh = seatPlayed[trick][it];
      }
    }
    trickWinner[trick] = seatHigh;

    if (trickWinner[trick] % 2) ewTricks++;
    else nsTricks++;

    manageTricksDiv();
    whosTurn = seatHigh;

    if (trick == 12 && !playingClient) {
      showTrickResult();
    }
    if (trick == 11) {
      manageGIBButton();
    }
    if (playingClient) {
      var weWonTrick =
        trickWinner[trick] == mySeat || (trickWinner[trick] == dummy && mySeat == declarer);
      if (weWonTrick) {
        scoreNS++;
        if (lessonID) {
          scoreEW += 30;
        }
        manageScoreDiv();
      }
      if (trick == 12 || !weWonTrick) {
        trickEndTimer = setTimeout('trickEndTimerTick()', 2000);
      }
      if (weWonTrick && lessonID) {
        if (
          (nsTricks == 9 && trump == 4) ||
          (nsTricks == 10 && (trump == 2 || trump == 3)) ||
          (nsTricks == 11 && (trump == 0 || trump == 1))
        ) {
          if (lessonID < '3' || lastLevelBid + 6 >= nsTricks) {
            showBonus('Game&nbsp;Bonus!', 300);
          }
        } else if (nsTricks == 12 && (lessonID < '3' || lastLevelBid == 6)) {
          showBonus('Small&nbsp;Slam!', 500);
        } else if (nsTricks == 13 && (lessonID < '3' || lastLevelBid == 7)) {
          showBonus('Grand&nbsp;Slam!', 1000);
        }
      }
    }
  } else {
    whosTurn++;
    if (whosTurn == 4) whosTurn = 0;
  }

  manageWhosTurn();

  deck[suit][rank] -= 4;
  howManyCards[seat]--;
  howManySuit[seat][suit]--;

  setKeyboardSuit();

  if (picturesOfCards && animate) {
    startCardAnimation(seat, suit, rank);
  } else {
    populateHands(seat, seat, suit, suit);
    showTrickCard(seat, suit, rank);
  }

  if (cardAnnotation[trick][inTrick] != null) {
    if (cardAnnotType[trick][inTrick]) {
      annotDiv.innerHTML += cardAnnotation[trick][inTrick];
    } else {
      annotDiv.innerHTML = cardAnnotation[trick][inTrick];
    }
  }

  if (regib) gib();

  return true;
}

function deal(dealString) {
  if (!dealString || dealString.length == 0) return false;

  clearDeck();

  var seat = 0;
  var suit = -1;
  var card = -1;
  var p = 1;

  while (p < dealString.length) {
    var ch = dealString.charAt(p).toUpperCase();

    if (ch == ',') {
      seat++;
      if (seat > 3) return false;
      suit = -1;
      card = -1;
    }

    var st = suitchars.indexOf(ch);

    if (st >= 0) suit = st;

    if (ch == 'X') {
      if (suit < 0) return false;
      if (howManyCardsDealt[seat] < 13) {
        howManyXs[seat][suit]++;
        howManyCards[seat]++;
        howManyCardsDealt[seat]++;
        howManySuit[seat][suit]++;
        howManySuitDealt[seat][suit]++;
      }
    } else {
      if (ch == '1') {
        card = 8;
      } else {
        card = cardchars.indexOf(ch);
      }

      if (card >= 0) {
        if (suit < 0) return false;

        dealCardToPlayer(suit, card, seat);
      }
    }
    p++;
  }
  fillInFourthHand();
  populateHands(0, 3, 0, 3);
  return true;
}

function setVul(vul) {
  if (!vul || !vul.length) return false;

  var vChar = vul.charAt(0).toUpperCase();

  if (vChar == 'N' || vChar == 'B') nsVul = true;
  else nsVul = false;
  if (vChar == 'E' || vChar == 'B') ewVul = true;
  else ewVul = false;

  manageVul();
  return true;
}

function setDealer(direction) {
  var seat = interpretSeatString(direction);

  if (seat >= 0) {
    dealer = seat;
    whosTurn = seat;
    manageWhosTurn();
    manageInfoDiv();
    auctionTableDiv.style.visibility = 'visible';
    auctionHeadingDiv.style.visibility = 'visible';
    manageBiddingQuestionMark();
    return true;
  }

  return false;
}

function setPlayerName(direction, name) {
  var seat = interpretSeatString(direction);
  if (seat >= 0) {
    if (!name || !name.length) {
      name = seats[seat];
    }
    if (name.charAt(0) == '~') {
      name = 'Robot';
    }
    nameTexts[seat].innerHTML = name;
  }
  return false;
}

function clearPlayerNames() {
  for (seat = 0; seat < 4; seat++) {
    setPlayerName(seats[seat], seats[seats]);
  }
}

function setBoardNumber(num) {
  boardNum = parseInt(num);
  manageInfoDiv();
}

function isHandShowing(seat) {
  return (
    seatKibitzed == -1 ||
    seatKibitzed == seat ||
    dummy == seat ||
    (lessonID && lessonID > '1' && seat == 2)
  );
}

function setKibitzed(direction, fromLin) {
  var seat;
  var suit;

  if (direction) {
    seatKibitzed = interpretSeatString(direction);
    if (!seatKibitzedSet && fromLin) {
      seatKibitzedSet = true;
    }
  }

  for (seat = 0; seat < 4; seat++) {
    if (seatKibitzed != -1 && seat != dummy && seatKibitzed != seat && !claimShowing) {
      removeGIBDivs(seats[seat]);
    }
    for (suit = 0; suit < 4; suit++) {
      if (
        !picturesOfCards &&
        (seatKibitzed == seat ||
          seatKibitzed == -1 ||
          seat == dummy ||
          claimShowing ||
          (seat == 2 && lessonID && lessonID > '1'))
      )
        suitHoldings[seat][suit].style.visibility = 'visible';
      else suitHoldings[seat][suit].style.visibility = 'hidden';
    }
  }

  populateHands(0, 3, 0, 3);
  showAllTrickCards();
  manageGIBButton();
  manageBiddingBox();
}

function mouseOverNameBar(nameBar) {
  var seat = nameBar.seat;
  if (
    (showMovie() ||
      getDealer ||
      (getDeal && numHandsShowing > 1 && howManyCards[seat] < 13 && whosTurn != seat)) &&
    !seatKibitzedSet &&
    !claimShowing &&
    !getSequence &&
    !playingClient
  ) {
    mouseOverName = seat;
    manageWhosTurn();
  }
}

function nameBarClicked(nameBar) {
  var seat = nameBar.seat;
  if (getSequence || playingClient) {
    return;
  } else if (
    getDeal &&
    howManyCards[nameBar.seat] < 13 &&
    numHandsShowing > 1 &&
    whosTurn != seat
  ) {
    hilightSuitSymbol(false);
    whosTurn = seat;
    manageWhosTurn();
    nextEmptySuit(true);
    hilightSuitSymbol(true);
  } else if (getDealer) {
    getDealer = false;
    getSequence = true;
    clearAuction();
    setDealer(seats[seat]);
    manageBiddingBox();
    boardNumberFromDealerAndVul();
    clearAllCardHighlights();
    disableButton('shuffle', true);
    respondToResize();
  } else if (showMovie() && !seatKibitzedSet) {
    if (seatKibitzed == seat) {
      setKibitzed(' ');
    } else {
      setKibitzed(seats[seat]);
    }
  }
}

function processPlayerNames(param, vugraph) {
  var startPoint = -1;
  var endPoint;
  var seat;
  var room;

  for (room = 0; room < 2; room++) {
    for (seat = 0; seat < 4; seat++) {
      endPoint = param.indexOf(',', startPoint + 1);

      if (endPoint < 0) {
        endPoint = param.length;
      }

      if (endPoint < 0) {
        break;
      }

      if (vugraph) {
        vugraphPlayerNames[room][seat] = decodePlayerName(
          param.substring(startPoint + 1, endPoint)
        );
      } else if (room == roomShowing) {
        setPlayerName(seats[seat], decodePlayerName(param.substring(startPoint + 1, endPoint)));
      }

      startPoint = endPoint;
    }
  }
}

function encodePlayerName(str) {
  return str.replace(/,/g, '%COMMA%').replace(/\|/g, '%PIPE%');
}

function decodePlayerName(str) {
  return str.replace(/%COMMA%/g, ',').replace(/%PIPE%/g, '|');
}

function computeAnnotation() {
  if (vugraphClient) {
    return;
  }

  var annot;
  if (introAnnotation != null) {
    annot = introAnnotation;
  } else {
    annot = '';
  }

  var bsp = 0;

  while (bsp <= bidSeqPoint) {
    if (callAnnotation[bsp] != null) {
      if (callAnnotType[bsp]) {
        annot += callAnnotation[bsp];
      } else {
        annot = callAnnotation[bsp];
      }
    }

    bsp++;
  }

  if (trick >= 0) {
    var t = 0;
    var it = 0;

    while (4 * t + it <= 4 * trick + inTrick) {
      if (cardAnnotation[t][it] != null) {
        if (cardAnnotType[t][it]) {
          annot += cardAnnotation[t][it];
        } else {
          annot = cardAnnotation[t][it];
        }
      }
      it++;
      if (it == 4) {
        it = 0;
        t++;
      }
    }
  }

  annotDiv.innerHTML = annot;
}

function insertLinkHTML(orig) {
  var copy = '';
  var link;
  var linkURL;
  var found = false;
  var start = 0;
  var end = 0;
  var space = false;

  if (
    (orig.length > 4 && orig.substr(0, 4) == 'www.') ||
    (orig.length > 7 && orig.substr(0, 7) == 'http://') ||
    (orig.length > 8 && orig.substr(0, 8) == 'https://')
  ) {
    found = true;
  }

  do {
    if (found) {
      copy += orig.substring(end, start);
      end = orig.indexOf(' ', start + 1);

      if (end == -1) {
        if (space) {
          copy += ' ';
          link = orig.substr(start + 1);
        } else {
          link = orig.substr(start);
        }
      } else {
        if (space) {
          copy += ' ';
          link = orig.substring(start + 1, end);
        } else {
          link = orig.substring(start, end);
        }
      }
      if (link.charAt(0) == 'w') {
        linkURL = 'http://' + link;
      } else {
        linkURL = link;
      }
      copy += '<a href="' + linkURL + '" target="_blank">' + link + '</a>';
      if (end == -1) {
        break;
      }
    }
    found = false;
    start = orig.indexOf(' www.', end);
    if (start > 0) {
      found = true;
    } else {
      start = orig.indexOf(' http://', end);
      if (start > 0) {
        found = true;
      } else {
        start = orig.indexOf(' https://', end);
        if (start > 0) {
          found = true;
        }
      }
    }
    space = true;
  } while (found);

  if (end != -1) {
    copy += orig.substring(end);
  }

  return copy;
}

function insertSuitHTML(msg, forums) {
  for (var suit = 0; suit < 4; suit++) {
    var pattern = new RegExp('!' + suits[suit].charAt(0), 'gi');
    if (forums) {
      msg = msg.replace(pattern, suitForums[suit]);
    } else {
      msg = msg.replace(pattern, suitHTMLs[suit]);
    }
    if (isVugraphMatch) {
      pattern = new RegExp('@' + suits[suit].charAt(0), 'gi');
      msg = msg.replace(pattern, suitHTMLs[suit]);
    }
  }

  return msg;
}

function addAnnotation(msg, append) {
  msg = insertSuitHTML(msg);
  msg = insertLinkHTML(msg);

  if (isVugraphMatch) {
    var colon = msg.indexOf(':');
    if (colon > 0 && colon <= 10) {
      msg =
        "<b><font color='#000080'>" +
        msg.substring(0, colon) +
        '</font></b>' +
        msg.substring(colon);
    }
  }

  if (playSeqPoint > 0) {
    var t = Math.floor((playSeqPoint - 1) / 4);
    var it = (playSeqPoint - 1) % 4;

    if (!cardAnnotation[t][it]) {
      cardAnnotation[t][it] = msg;
      cardAnnotType[t][it] = append;
    } else {
      cardAnnotation[t][it] += '<br>' + msg;
    }
  } else if (bidSeqPoint >= 0) {
    if (!callAnnotation[bidSeqPoint]) {
      callAnnotation[bidSeqPoint] = msg;
      callAnnotType[bidSeqPoint] = append;
    } else {
      callAnnotation[bidSeqPoint] += '<br>' + msg;
    }
  } else {
    if (!introAnnotation) {
      introAnnotation = msg;
    } else {
      introAnnotation += '<br>' + msg;
    }
  }
  hasAnnotations = true;
}

function getPicturesNameBarTop(seat) {
  if (numHandsShowing == 2) {
    if (seat == 2) {
      return margin + cardImageHeight - nameHeight;
    } else if (seat == 0) {
      return 2 * margin + 2 * cardImageHeight - nameHeight;
    } else if (seat == 1) {
      if (handShowing[3] || handShowing[0]) {
        // ew or sw
        if (showAuction() && handShowing[3]) {
          return 2 * margin + 5 * suitHeight + cardImageHeight - nameHeight;
        } else {
          return margin + cardImageHeight - nameHeight;
        }
      } // nw
      else {
        if (showAuction()) {
          return 2 * margin + 5 * suitHeight + cardImageHeight - nameHeight;
        } else {
          return 2 * margin + 2 * cardImageHeight - nameHeight;
        }
      }
    } else {
      if (handShowing[1] || handShowing[0]) {
        // ew or se
        if (showAuction() && handShowing[1]) {
          return 2 * margin + 5 * suitHeight + cardImageHeight - nameHeight;
        } else {
          return margin + cardImageHeight - nameHeight;
        }
      } // ne
      else {
        if (showAuction()) {
          return 2 * margin + 5 * suitHeight + cardImageHeight - nameHeight;
        } else {
          return 2 * margin + 2 * cardImageHeight - nameHeight;
        }
      }
    }
  } else if (numHandsShowing == 1) {
    if (showAuction()) {
      return 2 * margin + 5 * suitHeight + cardImageHeight - nameHeight;
    } else {
      return margin + cardImageHeight - nameHeight;
    }
  } else if (seat == 2) {
    return margin + cardImageHeight - nameHeight;
  } else if (seat == 0) {
    return totalHeight - margin - nameHeight - 2 * fireFox;
  } else {
    return (totalHeight - cardImageHeight) / 2 + cardImageHeight - nameHeight;
  }
}

function getHandRows() {
  if (numHandsShowing == 1 && showAuction()) return 2;

  if (numHandsShowing < 2) return 1;

  if (numHandsShowing == 2) {
    if (handShowing[1] && handShowing[3] && !showAuction()) return 1;
    return 2;
  }

  return 3;
}

function getHandCols() {
  if (numHandsShowing < 2) return 1;

  if (numHandsShowing == 2) {
    if (handShowing[0] && handShowing[2] && !showAuction()) return 1;
    return 2;
  }

  return 3;
}

function showHand(seat) {
  if (showMovie() || endPosition()) {
    return true;
  }

  for (i = 0; i < displayType.length; i++) {
    if (displayType.charAt(i) == seats[seat].charAt(0).toUpperCase()) {
      return true;
    }
  }

  return false;
}

function showMovie() {
  return displayType == '';
}

function auctionOnly() {
  return displayType == 'A';
}

function endPosition() {
  return displayType.charAt(0).toUpperCase() == 'P';
}

function showAuction() {
  if (editorMenuShowing) {
    return false;
  }
  if (playingClient) {
    if (lessonID <= '3') {
      return false;
    }
  }

  return (displayType == '' && !getDeal) || auctionOnly() || displayType.indexOf('A') != -1;
}

function showInfoDiv() {
  return showMovie() && !getDeal && !getDealer && !editorMenuShowing;
}

function showTricksDiv() {
  if (playingClient) {
    if (lessonID == '1') {
      return false;
    }
  }

  return showMovie() || endPosition();
}

function showScoreDiv() {
  return vugraphClient || (isVugraphMatch && vugraphScoring == 'I');
}

function showButtonBar() {
  return (
    !inBlast &&
    mainDivShowing &&
    ((isEditor && showAuction()) || showMovie() || (endPosition() && playSeqMax >= 0))
  );
}

function showAnnotations() {
  return (
    !inBlast && mainDivShowing && !hideChat && (hasAnnotations || (vugraphClient && !playingClient))
  );
}

function setDisplayType(param) {
  displayType = param.toUpperCase();

  numHandsShowing = 0;
  for (seat = 0; seat < 4; seat++) {
    handShowing[seat] = showHand(seat);
    if (handShowing[seat]) numHandsShowing++;
  }
  if (numHandsShowing == 3) {
    setDisplayType('NSEW');
  }
}

function processBidding(bidding) {
  var i = 0;

  while (i < bidding.length) {
    var c = bidding.charAt(i).toUpperCase();
    var len = 0;

    if (c == '-') {
      i++;
      continue;
    }
    if (c == 'P' || c == 'D' || c == 'R' || c == '?') {
      len = 1;
    } else if (c == 'X') {
      len = 1;

      if (i < bidding.length - 1 && bidding.charAt(i + 1).toUpperCase() == 'X') {
        len++;
      }
    } else if (c >= '1' && c <= '7') {
      len = 2;
    }
    if (len == 0) {
      break;
    }
    callAnnotation[bidSeqPoint + 1] = null;
    callExplanation[bidSeqPoint + 1] = '';
    bidSequence[bidSeqPoint + 1] = bidding.substring(i, i + len);
    bidSeqMax = bidSeqPoint + 1;
    bidSeqPoint++;
    if (i + 1 < bidding.length - 1 && bidding.charAt(i + len) == '!') {
      len++;
    }
    i += len;
  }
}

function processLinCommand(command, param) {
  switch (command) {
    case 'DT':
      setDisplayType(param);
      break;
    case 'SV':
      setVul(param);
      break;
    case 'MD':
      deal(param);
      setDealer(seats[parseInt(param.charAt(0)) - 1]);
      break;
    case 'SK':
      setKibitzed(param, true);
      break;
    case 'MB':
      processBidding(param);
      break;
    case 'PC':
      playSequence[playSeqPoint] = param;
      playSeqMax = playSeqPoint;
      playSeqPoint++;
      break;
    case 'AN':
      callExplanation[bidSeqPoint] = param;
      break;
    case 'AH':
      setBoardNumber(parseInt(param.substring(5)));
      break;
    case 'PN':
      processPlayerNames(param, false);
      break;
    case 'MC':
      tricksClaimed = parseInt(param);
      break;
    case 'NT':
      addAnnotation(param, false);
      break;
    case 'AT':
      addAnnotation(param, true);
      break;
  }
}

function processVugraphHeader(param) {
  isVugraphMatch = true;
  var startIndex = 0;
  var commaIndex = param.indexOf(',', startIndex);
  if (commaIndex < 0) {
    return false;
  }
  vugraphEvent = param.substring(startIndex, commaIndex);

  startIndex = commaIndex + 1;
  commaIndex = param.indexOf(',', startIndex);
  if (commaIndex < 0) {
    return false;
  }
  vugraphSegment = param.substring(startIndex, commaIndex);
  startIndex = commaIndex + 1;

  commaIndex = param.indexOf(',', startIndex);
  if (commaIndex < 0) {
    return false;
  }
  vugraphScoring = param.substring(startIndex, commaIndex).toUpperCase();
  startIndex = commaIndex + 1;

  commaIndex = param.indexOf(',', startIndex);
  if (commaIndex < 0) {
    return false;
  }
  vugraphFirstBoard = parseInt(param.substring(startIndex, commaIndex));
  startIndex = commaIndex + 1;

  commaIndex = param.indexOf(',', startIndex);
  if (commaIndex < 0) {
    return false;
  }
  vugraphLastBoard = parseInt(param.substring(startIndex, commaIndex));
  startIndex = commaIndex + 1;

  commaIndex = param.indexOf(',', startIndex);
  if (commaIndex < 0) {
    return false;
  }
  vugraphTeam1 = param.substring(startIndex, commaIndex);
  startIndex = commaIndex + 1;

  commaIndex = param.indexOf(',', startIndex);
  if (commaIndex < 0) {
    return false;
  }
  vugraphCarryover1 = parseInt(param.substring(startIndex, commaIndex));
  startIndex = commaIndex + 1;

  commaIndex = param.indexOf(',', startIndex);
  if (commaIndex < 0) {
    return false;
  }
  vugraphTeam2 = param.substring(startIndex, commaIndex);
  startIndex = commaIndex + 1;

  commaIndex = param.indexOf(',', startIndex);
  if (commaIndex < 0) {
    vugraphCarryover2 = parseInt(param.substring(startIndex));
  } else {
    vugraphCarryover2 = parseInt(param.substring(startIndex, commaIndex));
  }

  vugraphNumBoards = vugraphLastBoard - vugraphFirstBoard + 1;
  if (vugraphNumBoards < 0) {
    return false;
  }

  vugraphResults = new Array(new Array(vugraphNumBoards), new Array(vugraphNumBoards));
  vugraphRawScores = new Array(new Array(vugraphNumBoards), new Array(vugraphNumBoards));
  vugraphDeclarer = new Array(new Array(vugraphNumBoards), new Array(vugraphNumBoards));
  vugraphIMPs = new Array(vugraphNumBoards);
  vugraphMatchpoints = new Array(new Array(vugraphNumBoards), new Array(vugraphNumBoards));
  vugraphPlayers = new Array(
    new Array(vugraphNumBoards),
    new Array(vugraphNumBoards),
    new Array(vugraphNumBoards),
    new Array(vugraphNumBoards)
  );
  vugraphBoardLin = new Array(new Array(vugraphNumBoards), new Array(vugraphNumBoards));
  vugraphPlayerNames = new Array(new Array(4), new Array(4));

  var room;
  var board;
  var seat;

  for (board = 0; board < vugraphNumBoards; board++) {
    for (room = 0; room < 2; room++) {
      vugraphResults[room][board] = '&nbsp;';
      vugraphRawScores[room][board] = -1;
      vugraphDeclarer[room][board] = -1;
      vugraphBoardLin[room][board] = '';
      vugraphMatchpoints[room][board] = '&nbsp;';
    }
    for (seat = 0; seat < 4; seat++) {
      vugraphPlayers[seat][board] = '&nbsp;';
    }
    vugraphIMPs[board] = -25;
  }

  return true;
}

function isPairsVugraph() {
  return vugraphScoring == 'P';
}

function showScoreBoard() {
  showAll(false);
  statusDiv.style.visibility = 'hidden';
  blockDiv.style.visibility = 'hidden';
  scoreBoardDiv.style.visibility = 'visible';
  var div = document.getElementById('theDiv');
  div.style.background = '#FFFFFF';
  scoreBoardDivShowing = true;
}

function manageScoreBoardDiv() {
  if (!scoreBoardDiv || !totalWidth) {
    return;
  }

  scoreBoardDiv.style.width = totalWidth;
  scoreBoardDiv.style.height = totalHeight;
  scoreBoardTableDiv.style.width = totalWidth;

  scoreBoardTableDiv.style.left = 0;
  scoreBoardTable.style.left = 0;

  var theTop = 0;
  var scoreBoardWidth = Math.floor(totalWidth - getScrollBarWidth());

  var theFontSize = Math.max(8, fontSize - 10);
  scoreBoardDiv.style.fontSize = theFontSize;
  scoreBoardTable.style.fontSize = theFontSize;

  if (!isPairsVugraph()) {
    scoreBoardScoreTable.style.fontSize = theFontSize;
  }

  scoreBoardHeadingDiv.style.width = scoreBoardWidth;

  var line;
  var child;
  var divWidth;
  var headerLineHeight = 0;
  var largeCellWidth = Math.floor(0.21 * scoreBoardWidth);
  var ffAdjust = 0;
  var numHeaderLines = 2;

  if (!isPairsVugraph()) {
    numHeaderLines++;
  }

  for (line = 0; line < numHeaderLines; line++) {
    var divLeft = 0;
    scoreBoardHeadingDiv.childNodes[line].style.width = scoreBoardWidth;
    for (child = 0; child < scoreBoardHeadingDiv.childNodes[line].childNodes.length; child++) {
      if (!headerLineHeight) {
        headerLineHeight = scoreBoardHeadingDiv.childNodes[line].childNodes[child].clientHeight;
      }

      if (child == 0) {
        divWidth = Math.floor(0.06 * scoreBoardWidth);
        ffAdjust = 1;
      } else if (child == scoreBoardHeadingDiv.childNodes[line].childNodes.length - 1) {
        if (isPairsVugraph()) {
          divWidth = Math.floor(0.1 * scoreBoardWidth) + Math.floor(0.1 * scoreBoardWidth);
        } else {
          divWidth = Math.floor(0.05 * scoreBoardWidth) + Math.floor(0.05 * scoreBoardWidth);
        }
        ffAdjust = 1;
      } else if (!isPairsVugraph() && line == 0) {
        divWidth = 2 * largeCellWidth;
        ffAdjust = 1;
      } else {
        divWidth = largeCellWidth;
        ffAdjust = 4;
      }
      scoreBoardHeadingDiv.childNodes[line].childNodes[child].style.width =
        divWidth - fireFox * ffAdjust;
      scoreBoardHeadingDiv.childNodes[line].childNodes[child].style.left = divLeft;
      scoreBoardHeadingDiv.childNodes[line].childNodes[child].style.top = line * headerLineHeight;
      divLeft += divWidth;
    }
  }

  var tableWidth = 0;

  for (line = 0; line < scoreBoardTable.childNodes.length; line++) {
    tableWidth = 0;
    scoreBoardTable.childNodes[line].style.width = scoreBoardWidth;
    scoreBoardTable.childNodes[line].style.left = 0;
    scoreBoardTable.childNodes[line].style.top = line * (headerLineHeight + fireFox);

    for (child = 0; child < scoreBoardTable.childNodes[line].childNodes.length; child++) {
      if (child == 0) {
        divWidth = Math.floor(0.06 * scoreBoardWidth);
        ffAdjust = 1;
      } else if (isPairsVugraph() && (child == 5 || child == 6)) {
        divWidth = Math.floor(0.1 * scoreBoardWidth);
        ffAdjust = 1;
      } else if (child == 2 || child == 4 || (child == 6 && !isPairsVugraph()) || child == 8) {
        divWidth = Math.floor(largeCellWidth / 3);
        ffAdjust = 1;
      } else if (child == 1 || child == 3 || (child == 5 && !isPairsVugraph()) || child == 7) {
        divWidth = largeCellWidth - Math.floor(largeCellWidth / 3);
        ffAdjust = 4;
      } else if (child == 9 || child == 10) {
        divWidth = Math.floor(0.05 * scoreBoardWidth);
        ffAdjust = 1;
      }

      scoreBoardTable.childNodes[line].childNodes[child].style.width =
        divWidth - fireFox * ffAdjust;
      scoreBoardTable.childNodes[line].childNodes[child].style.left = tableWidth;
      scoreBoardTable.childNodes[line].childNodes[child].style.height = headerLineHeight;
      tableWidth += divWidth;
    }
  }

  scoreBoardTitleDiv.style.left = 0;
  scoreBoardTitleDiv.style.top = theTop;
  scoreBoardTitleDiv.style.width = tableWidth;

  if (!isPairsVugraph()) {
    scoreBoardTitleDiv.style.height = scoreBoardScoreTable.clientHeight;
    scoreBoardScoreTable.style.left = tableWidth - scoreBoardScoreTable.clientWidth - 2;
    scoreBoardScoreTable.style.top = 0;
  } else {
    scoreBoardTitleDiv.style.height = 3 * headerLineHeight;
  }

  scoreBoardTitleLine1Div.style.left = 0;
  scoreBoardTitleLine2Div.style.left = 0;
  scoreBoardTitleLine1Div.style.top = 0;
  scoreBoardTitleLine2Div.style.top = scoreBoardTitleLine1Div.clientHeight;
  scoreBoardTitleLine3Div.style.top =
    scoreBoardTitleLine1Div.clientHeight + scoreBoardTitleLine2Div.clientHeight;
  theTop += scoreBoardTitleDiv.clientHeight;
  scoreBoardHeadingDiv.style.top = theTop;
  scoreBoardTableDiv.style.width = tableWidth + getScrollBarWidth();
  scoreBoardTable.style.width = tableWidth;
  scoreBoardTableDiv.style.top = theTop + numHeaderLines * headerLineHeight;
  scoreBoardTableDiv.style.height = totalHeight - numHeaderLines * headerLineHeight - theTop;

  var logoHeight =
    scoreBoardTitleDiv.clientHeight -
    scoreBoardTitleLine1Div.clientHeight -
    scoreBoardTitleLine2Div.clientHeight;
  var logoWidth = (74 / 30) * logoHeight;

  scoreBoardLogo.style.height = logoHeight;
  scoreBoardLogo.style.width = logoWidth;

  scoreBoardLogo.style.left = 5;
  scoreBoardLogo.style.top = scoreBoardTitleDiv.clientHeight - logoHeight;
  scoreBoardTitleLine3Div.style.left = logoWidth + 10;
}

function clearVugraphPairsDivs() {
  if (isPairsVugraph()) {
    for (seat = 0; seat < 4; seat++) {
      vugraphPairsSeatDivs[seat].innerHTML = '&nbsp;';
    }
  }
}

function mouseOverResultCell(cell) {
  var cellIndex = parseInt(cell.id.substring(0, 1));
  var board = parseInt(cell.id.substring(1));

  var cellMin = 1;
  var cellMax = 4;
  var room;
  var seat;

  if (isPairsVugraph()) {
    cellMin = 0;
    cellMax = 6;
    room = 0;
  } else if (cellIndex > cellMax) {
    cellMin += 4;
    cellMax += 4;
    room = 1;
  } else {
    room = 0;
  }

  if (!vugraphBoardLin[room][board]) {
    return;
  }

  for (cellIndex = cellMin; cellIndex <= cellMax; cellIndex++) {
    scoreBoardTable.childNodes[board - vugraphFirstRealBoard].childNodes[cellIndex].wasBackground =
      scoreBoardTable.childNodes[board - vugraphFirstRealBoard].childNodes[
        cellIndex
      ].style.background;
    scoreBoardTable.childNodes[board - vugraphFirstRealBoard].childNodes[
      cellIndex
    ].style.background = highlightColor;
  }

  if (isPairsVugraph()) {
    for (seat = 0; seat < 4; seat++) {
      vugraphPairsSeatDivs[seat].innerHTML =
        seats[seat].charAt(0) + ': ' + vugraphPlayers[seat][board];
    }
  }
}

function mouseOutResultCell(cell) {
  var cellIndex = parseInt(cell.id.substring(0, 1));
  var board = parseInt(cell.id.substring(1));

  var cellMin = 1;
  var cellMax = 4;
  var room;

  if (isPairsVugraph()) {
    cellMin = 0;
    cellMax = 6;
    room = 0;
  } else if (cellIndex > cellMax) {
    cellMin += 4;
    cellMax += 4;
    room = 1;
  } else {
    room = 0;
  }

  if (!vugraphBoardLin[room][board]) {
    return;
  }

  for (cellIndex = cellMin; cellIndex <= cellMax; cellIndex++) {
    scoreBoardTable.childNodes[board - vugraphFirstRealBoard].childNodes[
      cellIndex
    ].style.background =
      scoreBoardTable.childNodes[board - vugraphFirstRealBoard].childNodes[cellIndex].wasBackground;
  }
  clearVugraphPairsDivs();
}

function mouseClickResultCell(cell) {
  var cellIndex = parseInt(cell.id.substring(0, 1));
  var board = parseInt(cell.id.substring(1));
  var room;

  if (cellIndex > 4) {
    room = 1;
  } else {
    room = 0;
  }

  if (!vugraphBoardLin[room][board]) {
    return;
  }

  showVugraphBoard(room, board);
  mouseOutResultCell(cell);
}

function showVugraphBoard(room, board) {
  killGIB();
  boardShowing = board;
  roomShowing = room;
  if (vugraphResults[1 - roomShowing][boardShowing] != '&nbsp;') {
    otherTableResult = 'Other&nbsp;table:&nbsp;' + vugraphResults[1 - roomShowing][boardShowing];
  } else {
    otherTableResult = '';
  }

  if (!isPairsVugraph()) {
    var team1Score = vugraphCarryover1;
    var team2Score = vugraphCarryover2;

    for (board = 0; board < boardShowing; board++) {
      if (vugraphRawScores[0][board] != -1 && vugraphRawScores[1][board] != -1) {
        if (vugraphIMPs[board] < 0) {
          team2Score += -vugraphIMPs[board];
        } else {
          team1Score += vugraphIMPs[board];
        }
      }
    }

    if (roomShowing) {
      teamNS = 'NS:&nbsp;' + vugraphTeam2;
      teamEW = 'EW:&nbsp;' + vugraphTeam1;
      scoreNS = team2Score;
      scoreEW = team1Score;
    } else {
      teamNS = 'NS:&nbsp;' + vugraphTeam1;
      teamEW = 'EW:&nbsp;' + vugraphTeam2;
      scoreNS = team1Score;
      scoreEW = team2Score;
    }
  }
  processLinFile(vugraphBoardLin[roomShowing][boardShowing]);
  removeMenuCommand('', true);
  addMenuCommand('scoreboard', true);
  if (board < vugraphLastRealBoard && vugraphBoardLin[room][board + 1]) {
    addMenuCommand('nextboard', true);
  }
  if (board > vugraphFirstRealBoard && vugraphBoardLin[room][board - 1]) {
    addMenuCommand('prevboard', true);
  }
  if (!isPairsVugraph() && vugraphBoardLin[1 - room][board]) {
    addMenuCommand('otherroom', true);
  }
  setMenuText(true);
}

function createLeaderBoard() {
  if (lessonID) {
    leaderBoardDiv = document.createElement('div');
    leaderBoardDiv.className = 'leaderBoardDivStyle';
    leaderBoardTable = document.createElement('table');
    leaderBoardTable.className = 'leaderBoardTableStyle';
    leaderBoardTable.cellSpacing = 0;
    leaderBoardTable.cellPadding = 0;
    disableSelection(leaderBoardTable);
    var i;
    var row;
    var cell;
    var bstyle = '1px solid black';
    row = leaderBoardTable.insertRow(0);
    cell = row.insertCell(0);
    cell.style.borderBottom = bstyle;
    cell.innerHTML = 'Rank';
    cell = row.insertCell(1);
    cell.style.borderBottom = bstyle;
    cell.innerHTML = 'Name';
    cell = row.insertCell(2);
    cell.style.borderBottom = bstyle;
    cell.innerHTML = 'Score';
    row.style.background = '#CBCBCB';

    for (i = 1; i <= 20; i++) {
      row = leaderBoardTable.insertRow(i);
      cell = leaderBoardTable.rows[i].insertCell(0);
      cell.innerHTML = '' + i;
      cell = leaderBoardTable.rows[i].insertCell(1);
      cell.innerHTML = 'Fred';
      cell = leaderBoardTable.rows[i].insertCell(2);
      cell.innerHTML = '' + (10000 + 100 * (10 - i));
    }
    row = leaderBoardTable.insertRow(0);
    cell = row.insertCell(0);
    cell.colSpan = 3;
    cell.whiteSpace = 'nowrap';
    cell.innerHTML = 'Level&nbsp;' + lessonID + '&nbsp;Top&nbsp;Scores';
    cell.style.borderBottom = bstyle;
    cell.style.background = '#336799';
    cell.style.color = 'FFFFFF';
    cell.style.fontWeight = 'bold';
    leaderBoardDiv.appendChild(leaderBoardTable);
    blockDiv.appendChild(leaderBoardDiv);
    newGameButton = document.createElement('input');
    newGameButton.type = 'button';
    newGameButton.style.position = 'absolute';
    newGameButton.style.background = highlightColor;
    newGameButton.value = 'New Game';
    newGameButton.onclick = function () {
      newGameButtonClicked();
    };
    blockDiv.appendChild(newGameButton);
  }
}

function isLeaderBoardShowing() {
  return leaderBoardDiv && gameOverState;
}

function manageLeaderBoard() {
  if (leaderBoardDiv) {
    leaderBoardTable.style.fontSize = (3 * fontSize) / 4;
    leaderBoardTable.rows[0].cells[0].style.paddingBottom = margin;
    leaderBoardTable.rows[0].cells[0].style.paddingTop = margin;
    leaderBoardTable.rows[0].cells[0].style.paddingLeft = margin;
    leaderBoardTable.rows[0].cells[0].style.paddingRight = margin;
    leaderBoardTable.rows[0].cells[0].style.fontSize = fontSize;
    var cell;
    for (cell = 0; cell < 3; cell++) {
      leaderBoardTable.rows[1].cells[cell].style.paddingLeft = margin;
      leaderBoardTable.rows[1].cells[cell].style.paddingRight = margin;
    }
    leaderBoardDiv.style.width = leaderBoardTable.clientWidth + getScrollBarWidth();
    leaderBoardDiv.style.left = (totalWidth - leaderBoardDiv.clientWidth) / 2;
    var leaderBoardTop = statusDiv.clientHeight + 4 * margin;
    leaderBoardDiv.style.top = leaderBoardTop;
    newGameButton.style.fontSize = fontSize;
    newGameButton.style.left = (totalWidth - newGameButton.clientWidth) / 2;
    var newGameButtonTop = totalHeight - 2 * margin - newGameButton.clientHeight;
    newGameButton.style.top = newGameButtonTop;
    var maxLeaderBoardHeight = newGameButtonTop - margin - leaderBoardTop;
    leaderBoardDiv.style.height = Math.min(leaderBoardTable.clientHeight, maxLeaderBoardHeight);

    if (isLeaderBoardShowing()) {
      leaderBoardDiv.style.visibility = 'visible';
      newGameButton.style.visibility = 'visible';
    } else {
      leaderBoardDiv.style.visibility = 'hidden';
      newGameButton.style.visibility = 'hidden';
    }
  }
}

function createScoreBoard() {
  var mainDiv = document.getElementById('theDiv');
  var board;
  var row;
  var cell;
  var cellIndex;

  scoreBoardDiv = document.createElement('div');
  disableSelection(scoreBoardDiv);
  scoreBoardDiv.style.position = 'absolute';
  scoreBoardDiv.style.backgroundColor = '#FFFFFF';
  mainDiv.appendChild(scoreBoardDiv);

  scoreBoardTitleDiv = document.createElement('div');
  scoreBoardTitleDiv.className = 'scoreBoardTitleDivStyle';
  scoreBoardDiv.appendChild(scoreBoardTitleDiv);
  scoreBoardTitleLine1Div = document.createElement('div');
  scoreBoardTitleLine1Div.className = 'scoreBoardTitleLineDivStyle';
  scoreBoardTitleLine1Div.innerHTML = vugraphEvent;
  scoreBoardTitleDiv.appendChild(scoreBoardTitleLine1Div);
  scoreBoardTitleLine2Div = document.createElement('div');
  scoreBoardTitleLine2Div.className = 'scoreBoardTitleLineDivStyle';
  scoreBoardTitleLine2Div.innerHTML = vugraphSegment;
  scoreBoardTitleDiv.appendChild(scoreBoardTitleLine2Div);
  scoreBoardTitleLine3Div = document.createElement('div');
  scoreBoardTitleLine3Div.className = 'scoreBoardTitleLineDivStyle';
  scoreBoardTitleLine3Div.innerHTML =
    "<a href='https://www.bridgebase.com' target='_blank'>www.bridgebase.com</a>";
  scoreBoardTitleDiv.appendChild(scoreBoardTitleLine3Div);

  if (!isPairsVugraph()) {
    scoreBoardScoreTable = document.createElement('table');
    scoreBoardScoreTable.cellSpacing = 0;
    scoreBoardScoreTable.style.borderLeft = borderStyle;
    scoreBoardScoreTable.style.borderRight = borderStyle;
    scoreBoardScoreTable.style.position = 'absolute';
    row = scoreBoardScoreTable.insertRow(0);
    row.style.background = '#FFFFFF';
    cell = row.insertCell(0);
    cell.className = 'scoreBoardScoreTableTDStyle1';
    cell.innerHTML = 'Team';
    cell = row.insertCell(1);
    cell.className = 'scoreBoardScoreTableTDStyle1';
    cell.innerHTML = 'Carryover';
    cell = row.insertCell(2);
    cell.className = 'scoreBoardScoreTableTDStyle1';
    cell.innerHTML = 'Segment';
    cell = row.insertCell(3);
    cell.className = 'scoreBoardScoreTableTDStyle5';
    cell.style.borderRight = '';
    cell.innerHTML = 'Total';
    row = scoreBoardScoreTable.insertRow(1);
    row.style.background = team1Color;
    cell = row.insertCell(0);
    cell.className = 'scoreBoardScoreTableTDStyle1';
    cell.innerHTML = vugraphTeam1;
    cell = row.insertCell(1);
    cell.className = 'scoreBoardScoreTableTDStyle2';
    cell.innerHTML = vugraphCarryover1;
    cell = row.insertCell(2);
    cell.className = 'scoreBoardScoreTableTDStyle2';
    cell.innerHTML = vugraphSegment1;
    cell = row.insertCell(3);
    cell.style.textAlign = 'center';
    cell.style.borderBottom = borderStyle;
    cell.innerHTML = vugraphCarryover1 + vugraphSegment1;
    row = scoreBoardScoreTable.insertRow(2);
    row.style.background = team2Color;
    cell = row.insertCell(0);
    cell.className = 'scoreBoardScoreTableTDStyle4';
    cell.innerHTML = vugraphTeam2;
    cell = row.insertCell(1);
    cell.className = 'scoreBoardScoreTableTDStyle3';
    cell.innerHTML = vugraphCarryover2;
    cell = row.insertCell(2);
    cell.className = 'scoreBoardScoreTableTDStyle3';
    cell.innerHTML = vugraphSegment2;
    cell = row.insertCell(3);
    cell.style.textAlign = 'center';
    cell.innerHTML = vugraphCarryover2 + vugraphSegment2;
    scoreBoardTitleDiv.appendChild(scoreBoardScoreTable);
  } else {
    scoreBoardTitleDiv.style.borderRight = borderStyle;
  }

  scoreBoardLogo = document.createElement('img');
  scoreBoardLogo.src = 'https://www.bridgebase.com/tools/bbobug.png';
  scoreBoardLogo.style.position = 'absolute';
  scoreBoardTitleDiv.appendChild(scoreBoardLogo);

  scoreBoardTableDiv = document.createElement('div');
  scoreBoardTableDiv.className = 'scoreBoardTableDivStyle';
  disableSelection(scoreBoardTableDiv);
  scoreBoardDiv.appendChild(scoreBoardTableDiv);
  scoreBoardTable = document.createElement('div');
  scoreBoardTable.className = 'scoreBoardTableStyle';
  scoreBoardTable.cellSpacing = 0;
  disableSelection(scoreBoardTable);
  scoreBoardTableDiv.appendChild(scoreBoardTable);

  for (board = 0; board < vugraphNumBoards; board++) {
    if (board < vugraphFirstRealBoard || board > vugraphLastRealBoard) {
      continue;
    }

    cellIndex = 0;

    row = document.createElement('div');
    row.style.position = 'absolute';
    scoreBoardTable.appendChild(row);

    cell = document.createElement('div');

    if (isPairsVugraph()) {
      cell.id = '1' + board;
      cell.onmouseover = function () {
        mouseOverResultCell(this);
      };
      cell.onmouseout = function () {
        mouseOutResultCell(this);
      };
      cell.onclick = function () {
        mouseClickResultCell(this);
      };
    }

    row.appendChild(cell);
    cell.className = 'scoreBoardTDStyle';
    cell.style.width = '6%';
    cell.innerHTML = board + vugraphFirstBoard;
    cellIndex++;

    cell = document.createElement('div');
    row.appendChild(cell);
    cell.className = 'scoreBoardResultTDStyle';
    cell.id = '1' + board;
    cell.onmouseover = function () {
      mouseOverResultCell(this);
    };
    cell.onmouseout = function () {
      mouseOutResultCell(this);
    };
    cell.onclick = function () {
      mouseClickResultCell(this);
    };
    cell.style.borderRight = borderStyle;
    cell.style.width = '15%';
    if (vugraphDeclarer[0][board] != 1 && vugraphDeclarer[0][board] != 3) {
      cell.innerHTML = vugraphResults[0][board];
    } else {
      cell.innerHTML = '&nbsp;';
    }
    cell.style.background = team1Color;
    cellIndex++;

    cell = document.createElement('div');
    row.appendChild(cell);
    cell.className = 'scoreBoardTDStyle';
    cell.id = '2' + board;
    cell.onmouseover = function () {
      mouseOverResultCell(this);
    };
    cell.onmouseout = function () {
      mouseOutResultCell(this);
    };
    cell.onclick = function () {
      mouseClickResultCell(this);
    };
    cell.style.background = team1Color;
    cell.style.width = '6%';
    if (vugraphRawScores[0][board] > 0) {
      cell.innerHTML = vugraphRawScores[0][board];
    } else {
      cell.innerHTML = '&nbsp;';
    }
    cellIndex++;

    cell = document.createElement('div');
    row.appendChild(cell);
    cell.className = 'scoreBoardResultTDStyle';
    cell.id = '3' + board;
    cell.onmouseover = function () {
      mouseOverResultCell(this);
    };
    cell.onmouseout = function () {
      mouseOutResultCell(this);
    };
    cell.onclick = function () {
      mouseClickResultCell(this);
    };
    cell.style.borderRight = borderStyle;
    cell.style.width = '15%';
    if (vugraphDeclarer[0][board] != 0 && vugraphDeclarer[0][board] != 2) {
      cell.innerHTML = vugraphResults[0][board];
    } else {
      cell.innerHTML = '&nbsp;';
    }
    cell.style.background = team2Color;
    cellIndex++;

    cell = document.createElement('div');
    row.appendChild(cell);
    cell.className = 'scoreBoardTDStyle';
    cell.id = '4' + board;
    cell.onmouseover = function () {
      mouseOverResultCell(this);
    };
    cell.onmouseout = function () {
      mouseOutResultCell(this);
    };
    cell.onclick = function () {
      mouseClickResultCell(this);
    };
    cell.style.background = team2Color;
    cell.style.width = '6%';
    if (vugraphRawScores[0][board] < 0 && vugraphRawScores[0][board] != -1) {
      cell.innerHTML = -vugraphRawScores[0][board];
    } else {
      cell.innerHTML = '&nbsp;';
    }

    if (!isPairsVugraph()) {
      cellIndex++;
      cell = document.createElement('div');
      row.appendChild(cell);
      cell.className = 'scoreBoardResultTDStyle';
      cell.id = '5' + board;
      cell.onmouseover = function () {
        mouseOverResultCell(this);
      };
      cell.onmouseout = function () {
        mouseOutResultCell(this);
      };
      cell.onclick = function () {
        mouseClickResultCell(this);
      };
      cell.style.borderRight = borderStyle;
      cell.style.width = '15%';
      cell.style.background = team1Color;
      if (vugraphDeclarer[1][board] != 0 && vugraphDeclarer[1][board] != 2) {
        cell.innerHTML = vugraphResults[1][board];
      } else {
        cell.innerHTML = '&nbsp;';
      }
      cellIndex++;

      cell = document.createElement('div');
      row.appendChild(cell);
      cell.className = 'scoreBoardTDStyle';
      cell.id = '6' + board;
      cell.onmouseover = function () {
        mouseOverResultCell(this);
      };
      cell.onmouseout = function () {
        mouseOutResultCell(this);
      };
      cell.onclick = function () {
        mouseClickResultCell(this);
      };
      cell.style.background = team1Color;
      cell.style.width = '6%';
      if (vugraphRawScores[1][board] < 0 && vugraphRawScores[1][board] != -1) {
        cell.innerHTML = -vugraphRawScores[1][board];
      } else {
        cell.innerHTML = '&nbsp;';
      }

      cellIndex++;
      cell = document.createElement('div');
      row.appendChild(cell);
      cell.className = 'scoreBoardResultTDStyle';
      cell.id = '7' + board;
      cell.onmouseover = function () {
        mouseOverResultCell(this);
      };
      cell.onmouseout = function () {
        mouseOutResultCell(this);
      };
      cell.onclick = function () {
        mouseClickResultCell(this);
      };
      cell.style.borderRight = borderStyle;
      cell.style.width = '15%';
      cell.style.background = team2Color;
      if (vugraphDeclarer[1][board] != 1 && vugraphDeclarer[1][board] != 3) {
        cell.innerHTML = vugraphResults[1][board];
      } else {
        cell.innerHTML = '&nbsp;';
      }
      cellIndex++;

      cell = document.createElement('div');
      row.appendChild(cell);
      cell.className = 'scoreBoardTDStyle';
      cell.id = '8' + board;
      cell.onmouseover = function () {
        mouseOverResultCell(this);
      };
      cell.onmouseout = function () {
        mouseOutResultCell(this);
      };
      cell.onclick = function () {
        mouseClickResultCell(this);
      };
      cell.style.background = team2Color;
      cell.style.width = '6%';
      if (vugraphRawScores[1][board] > 0) {
        cell.innerHTML = vugraphRawScores[1][board];
      } else {
        cell.innerHTML = '&nbsp;';
      }
    }
    cellIndex++;
    cell = document.createElement('div');
    row.appendChild(cell);
    cell.className = 'scoreBoardTDStyle';
    cell.style.background = team1Color;
    cell.style.width = '5%';

    if (isPairsVugraph()) {
      cell.innerHTML = vugraphMatchpoints[0][board];
      cell.id = '5' + board;
      cell.onmouseover = function () {
        mouseOverResultCell(this);
      };
      cell.onmouseout = function () {
        mouseOutResultCell(this);
      };
      cell.onclick = function () {
        mouseClickResultCell(this);
      };
    } else if (vugraphIMPs[board] == 0) {
      cell.innerHTML = '--';
    } else if (vugraphIMPs[board] > 0) {
      cell.innerHTML = vugraphIMPs[board];
    } else {
      cell.innerHTML = '&nbsp;';
    }
    cellIndex++;

    cell = document.createElement('div');
    row.appendChild(cell);
    cell.className = 'scoreBoardTDStyle';
    cell.style.background = team2Color;
    cell.style.textAlign = 'center';
    cell.style.width = '5%';
    cell.style.borderRight = borderStyle;

    if (isPairsVugraph()) {
      cell.innerHTML = vugraphMatchpoints[1][board];
      cell.id = '6' + board;
      cell.onmouseover = function () {
        mouseOverResultCell(this);
      };
      cell.onmouseout = function () {
        mouseOutResultCell(this);
      };
      cell.onclick = function () {
        mouseClickResultCell(this);
      };
    } else if (vugraphIMPs[board] == 0) {
      cell.innerHTML = '--';
    } else if (vugraphIMPs[board] < 0 && vugraphIMPs[board] != -25) {
      cell.innerHTML = -vugraphIMPs[board];
    } else {
      cell.innerHTML = '&nbsp;';
    }
  }

  var div;
  var span;

  scoreBoardHeadingDiv = document.createElement('div');
  scoreBoardHeadingDiv.style.position = 'absolute';
  scoreBoardHeadingDiv.style.left = 0;
  scoreBoardDiv.appendChild(scoreBoardHeadingDiv);

  if (!isPairsVugraph()) {
    div = document.createElement('div');
    div.style.width = '100%';
    div.style.whiteSpace = 'nowrap';
    scoreBoardHeadingDiv.appendChild(div);
    span = document.createElement('div');
    span.style.position = 'absolute';
    span.style.width = '10%';
    span.innerHTML = '&nbsp;';
    span.style.borderTop = borderStyle;
    span.style.borderRight = borderStyle;
    div.appendChild(span);
    span = document.createElement('div');
    span.style.position = 'absolute';
    span.style.width = '40%';
    span.style.borderRight = borderStyle;
    span.style.borderTop = borderStyle;
    span.style.textAlign = 'center';
    span.innerHTML = 'Open Room';
    div.appendChild(span);
    span = document.createElement('div');
    span.style.position = 'absolute';
    span.style.width = '40%';
    span.style.borderRight = borderStyle;
    span.style.borderTop = borderStyle;
    span.style.textAlign = 'center';
    span.innerHTML = 'Closed Room';
    div.appendChild(span);
    span = document.createElement('div');
    span.style.position = 'absolute';
    span.innerHTML = '&nbsp;';
    span.style.width = '10%';
    span.style.borderRight = borderStyle;
    span.style.borderTop = borderStyle;
    div.appendChild(span);
  }

  div = document.createElement('div');
  div.style.width = '100%';
  div.style.whiteSpace = 'nowrap';
  scoreBoardHeadingDiv.appendChild(div);
  span = document.createElement('div');
  span.style.position = 'absolute';
  span.style.width = '10%';
  span.style.borderRight = borderStyle;
  span.style.textAlign = 'center';
  if (isPairsVugraph()) {
    span.style.borderTop = borderStyle;
    span.innerHTML = '&nbsp';
  } else {
    span.innerHTML = '#';
  }
  div.appendChild(span);
  span = document.createElement('div');
  span.className = 'playerNameDivStyle';
  span.style.background = team1Color;
  span.style.borderTop = borderStyle;
  span.innerHTML = 'N: ' + vugraphPlayerNames[0][2];
  vugraphPairsSeatDivs[2] = span;
  div.appendChild(span);
  span = document.createElement('div');
  span.className = 'playerNameDivStyle';
  span.style.background = team2Color;
  span.style.borderRight = borderStyle;
  span.style.borderTop = borderStyle;
  span.innerHTML = 'E: ' + vugraphPlayerNames[0][3];
  vugraphPairsSeatDivs[3] = span;
  div.appendChild(span);

  if (!isPairsVugraph()) {
    span = document.createElement('div');
    span.className = 'playerNameDivStyle';
    span.style.background = team1Color;
    span.style.borderRight = borderStyle;
    span.style.borderTop = borderStyle;
    span.innerHTML = 'E: ' + vugraphPlayerNames[1][3];
    div.appendChild(span);
    span = document.createElement('div');
    span.className = 'playerNameDivStyle';
    span.style.background = team2Color;
    span.style.borderTop = borderStyle;
    span.innerHTML = 'N: ' + vugraphPlayerNames[1][2];
    div.appendChild(span);
  }
  span = document.createElement('div');
  span.style.position = 'absolute';
  span.style.width = '10%';
  span.style.textAlign = 'center';
  span.style.borderRight = borderStyle;
  if (isPairsVugraph()) {
    span.style.borderTop = borderStyle;
    span.innerHTML = '&nbsp';
  } else {
    span.innerHTML = 'IMPs';
  }
  div.appendChild(span);

  div = document.createElement('div');
  div.style.width = '100%';
  div.style.whiteSpace = 'nowrap';
  scoreBoardHeadingDiv.appendChild(div);
  span = document.createElement('div');
  span.style.position = 'absolute';
  span.style.width = '10%';
  span.style.borderRight = borderStyle;
  span.style.borderBottom = borderStyle;
  span.style.textAlign = 'center';
  if (isPairsVugraph()) {
    span.innerHTML = '#';
  } else {
    span.innerHTML = '&nbsp;';
  }
  div.appendChild(span);
  span = document.createElement('div');
  span.className = 'playerNameDivStyle';
  span.style.background = team1Color;
  span.style.borderBottom = borderStyle;
  span.innerHTML = 'S: ' + vugraphPlayerNames[0][0];
  vugraphPairsSeatDivs[0] = span;
  div.appendChild(span);
  span = document.createElement('div');
  span.className = 'playerNameDivStyle';
  span.style.background = team2Color;
  span.style.borderRight = borderStyle;
  span.style.borderBottom = borderStyle;
  span.innerHTML = 'W: ' + vugraphPlayerNames[0][1];
  vugraphPairsSeatDivs[1] = span;
  div.appendChild(span);
  if (!isPairsVugraph()) {
    span = document.createElement('div');
    span.className = 'playerNameDivStyle';
    span.style.background = team1Color;
    span.style.borderRight = borderStyle;
    span.style.borderBottom = borderStyle;
    span.innerHTML = 'W: ' + vugraphPlayerNames[1][1];
    div.appendChild(span);
    span = document.createElement('div');
    span.className = 'playerNameDivStyle';
    span.style.background = team2Color;
    span.style.borderBottom = borderStyle;
    span.innerHTML = 'S: ' + vugraphPlayerNames[1][0];
    div.appendChild(span);
  }
  span = document.createElement('div');
  span.style.position = 'absolute';
  span.style.width = '10%';
  span.style.textAlign = 'center';
  if (isPairsVugraph()) {
    span.innerHTML = 'MPs';
  } else {
    span.innerHTML = '&nbsp;';
  }
  span.style.borderRight = borderStyle;
  span.style.borderBottom = borderStyle;
  div.appendChild(span);

  navMenuDiv = document.createElement('div');
  disableSelection(navMenuDiv);
  navMenuDiv.className = 'menuDivStyle';
  navMenuTable = document.createElement('table');
  navMenuDiv.appendChild(navMenuTable);
  hideContextMenu(null, true);
  document.body.appendChild(navMenuDiv);
}

function createDisplayResult(room, board, rawResult) {
  if (rawResult.length) {
    if (rawResult.charAt(0) == 'P') {
      return 'Passout';
    } else if (rawResult.length > 3) {
      var displayResult;
      var doubled = 0;
      var resultIndex = 3;

      vugraphDeclarer[room][board] = interpretSeatString(rawResult.charAt(2));
      if (rawResult.charAt(3) == 'X') {
        doubled = 2;
        resultIndex++;
        if (rawResult.charAt(4) == 'X') {
          doubled = 4;
          resultIndex++;
        }
      }
      if (rawResult.charAt(1) == 'N') {
        displayResult = rawResult.substring(0, 2) + 'T';
      } else {
        displayResult = rawResult.charAt(0) + '!' + rawResult.charAt(1);
      }
      if (doubled >= 2) {
        displayResult += 'x';
        if (doubled == 4) {
          displayResult += 'x';
        }
      }

      displayResult += rawResult.charAt(2) + rawResult.substring(resultIndex);

      return insertSuitHTML(displayResult);
    }
  }
  return '&nbsp;';
}

function processVugraphMatchpoints(param) {
  var direction;
  var board;
  var startIndex = 0;
  var commaIndex;

  for (board = 0; board < vugraphNumBoards; board++) {
    for (direction = 0; direction < 2; direction++) {
      if (startIndex >= 0) {
        commaIndex = param.indexOf(',', startIndex);
        if (commaIndex >= 0) {
          vugraphMatchpoints[direction][board] = param
            .substring(startIndex, commaIndex)
            .toUpperCase();
          startIndex = commaIndex + 1;
        } else {
          vugraphMatchpoints[direction][board] = param.substring(startIndex).toUpperCase();
          startIndex = -1;
        }
      } else {
        vugraphMatchpoints[direction][board] = '&nbsp;';
      }
    }
  }
}

function processVugraphPlayers(param) {
  var seat;
  var board;
  var startIndex = 0;
  var commaIndex;

  for (board = 0; board < vugraphNumBoards; board++) {
    for (seat = 0; seat < 4; seat++) {
      if (startIndex >= 0) {
        commaIndex = param.indexOf(',', startIndex);
        if (commaIndex >= 0) {
          vugraphPlayers[seat][board] = param.substring(startIndex, commaIndex);
          startIndex = commaIndex + 1;
        } else {
          vugraphPlayers[seat][board] = param.substring(startIndex);
          startIndex = -1;
        }
      } else {
        vugraphPlayers[seat][board] = '&nbsp;';
      }
    }
  }
}

function processVugraphResults(param) {
  var room;
  var board;
  var startIndex = 0;
  var commaIndex;
  var rawResult;

  vugraphSegment1 = 0;
  vugraphSegment2 = 0;

  vugraphFirstRealBoard = -1;
  vugraphLastRealBoard = -1;

  for (board = 0; board < vugraphNumBoards; board++) {
    for (room = 0; room < 2; room++) {
      if (startIndex >= 0) {
        commaIndex = param.indexOf(',', startIndex);
        if (commaIndex >= 0) {
          rawResult = param.substring(startIndex, commaIndex).toUpperCase();
          startIndex = commaIndex + 1;
        } else {
          rawResult = param.substring(startIndex).toUpperCase();
          startIndex = -1;
        }
        vugraphRawScores[room][board] = calculateRawScore(
          rawResult,
          board + vugraphFirstBoard,
          true,
          false
        );
        vugraphResults[room][board] = createDisplayResult(room, board, rawResult);

        if (vugraphResults[room][board] != '&nbsp;') {
          if (vugraphFirstRealBoard == -1) {
            vugraphFirstRealBoard = board;
          }
          if (board > vugraphLastRealBoard) {
            vugraphLastRealBoard = board;
          }
        }
      } else {
        vugraphResults[room][board] = '&nbsp;';
      }
    }

    if (!isPairsVugraph() && vugraphRawScores[0][board] != -1 && vugraphRawScores[1][board] != -1) {
      var team1Score = vugraphRawScores[0][board] - vugraphRawScores[1][board];
      vugraphIMPs[board] = calculateIMPs(Math.abs(team1Score));
      if (team1Score < 0) {
        vugraphSegment2 += vugraphIMPs[board];
        vugraphIMPs[board] *= -1;
      } else {
        vugraphSegment1 += vugraphIMPs[board];
      }
    }
  }
}

function processVugraphLinFile(lin, param, startIndex) {
  if (!processVugraphHeader(param)) {
    return;
  }

  var theBoard = -1;
  var theRoom = -1;
  var playerNames = '';
  var boardStartPoint = 0;

  while (startIndex < lin.length) {
    var openPipeIndex = lin.indexOf('|', startIndex);
    if (openPipeIndex < 2) break;
    var closePipeIndex = lin.indexOf('|', openPipeIndex + 1);
    if (closePipeIndex < 0) break;

    var command = lin.substring(openPipeIndex - 2, openPipeIndex).toUpperCase();
    param = lin.substring(openPipeIndex + 1, closePipeIndex, 1);

    if (command == 'PN') {
      playerNames = 'pn|' + param + '|';
      processPlayerNames(param, true);
    }

    if (command == 'RS') {
      processVugraphResults(param);
    }

    if (command == 'MP') {
      processVugraphMatchpoints(param);
    }

    if (command == 'PW') {
      processVugraphPlayers(param);
    }

    if (command == 'AT' || command == 'NT') {
      hasAnnotations = true;
    }

    if (command == 'QX') {
      if (theBoard >= 0) {
        vugraphBoardLin[theRoom][theBoard] =
          'dt||' +
          'ah|Board ' +
          (theBoard + vugraphFirstBoard) +
          '|' +
          playerNames +
          lin.substring(boardStartPoint, openPipeIndex - 2);
      }
      if (param.charAt(0).toUpperCase() == 'O') {
        theRoom = 0;
      } else {
        theRoom = 1;
      }
      theBoard = parseInt(param.substring(1)) - vugraphFirstBoard;
      boardStartPoint = openPipeIndex - 2;
    }

    startIndex = closePipeIndex + 1;
  }

  if (theBoard >= 0) {
    vugraphBoardLin[theRoom][theBoard] =
      'dt||' +
      'ah|Board ' +
      (theBoard + vugraphFirstBoard) +
      '|' +
      playerNames +
      lin.substring(boardStartPoint);
  }

  var shuffleButton = document.getElementById('shuffleButton');
  shuffleButton.value = 'Navigate';
  createScoreBoard();

  if (hasAnnotations) {
    addMenuCommand('hidechat');
    manageChatFontSizeMenuCommands();
    setMenuText();
  }

  if (isPairsVugraph()) {
    clearVugraphPairsDivs();
  } else {
    vugraphScoreReceived = true;
    scoreFormat = 'imps';
  }
  if (vugraphFirstBoard == vugraphLastBoard) {
    removeButton('shuffleButton');
    processLinFile(vugraphBoardLin[0][0]);
  } else {
    showScoreBoard();
  }

  if (vugraphEvent) {
    document.title = vugraphEvent + ' - ' + vugraphSegment;
  }
}

function processLinFile(lin) {
  clearDeck();
  clearPlayerNames();
  var startIndex = 0;

  while (startIndex < lin.length) {
    var openPipeIndex = lin.indexOf('|', startIndex);
    if (openPipeIndex < 2) break;
    var closePipeIndex = lin.indexOf('|', openPipeIndex + 1);
    if (closePipeIndex < 0) break;

    var command = lin.substring(openPipeIndex - 2, openPipeIndex).toUpperCase();
    var param = lin.substring(openPipeIndex + 1, closePipeIndex, 1);

    if (command == 'VG') {
      processVugraphLinFile(lin, param, closePipeIndex + 1);
      return;
    }

    processLinCommand(command, param);
    startIndex = closePipeIndex + 1;
  }

  if (!isVugraphMatch) {
    removeButton('shuffleButton');
  }

  playSeqPoint = 0;
  bidSeqPoint = -1;

  if (getSequence) {
    if (bidSeqMax > 0) {
      disableButton('next', false);
    }
  } else if (introAnnotation != null) {
    annotDiv.innerHTML = introAnnotation;
    if (bidSeqMax >= 0) {
      disableButton('next', false);
    }
    if (!showMovie()) {
      next();
    }
  } else if (!endPosition()) {
    next();
  }
  if (endPosition()) {
    if (displayType.length > 1) {
      var level = parseInt(displayType.charAt(1));
      if (level > 0 && level < 8 && displayType.length == 4) {
        contractLevel = level;
        trump = suitchars.indexOf(displayType.charAt(2).toUpperCase());
        declarer = interpretSeatString(displayType.charAt(3));
        whosTurn = declarer + 1;
        if (whosTurn > 3) {
          whosTurn = 0;
        }
      } else {
        whosTurn = interpretSeatString(displayType.charAt(1));

        if (displayType.length > 2) {
          trump = suitchars.indexOf(displayType.charAt(2).toUpperCase());
        } else {
          trump = 4;
        }
      }
    } else {
      whosTurn = 0;
    }

    manageWhosTurn();

    if (playSeqMax >= 0) {
      disableButton('next', false);
    }
  }
  disableButton('undo', true);
  disableButton('rewind', true);

  if (isVugraphMatch) {
    loadCookieOptions();
  } else if (numHandsShowing < 4) {
    fastVersion = true;
    picturesOfCards = false;
    picturesModeChanged();
    removeMenuCommand('pictures');
    removeButton('gibButton');
  }

  createCardDivs();
  populateHands(0, 3, 0, 3);
  showAll(true);
}

function loadParams(source) {
  var pVul = gup('v', source);
  var pDealer = gup('d', source);
  var pBoard = gup('b', source);
  var pSouth = gup('s', source);
  var pWest = gup('w', source);
  var pNorth = gup('n', source);
  var pEast = gup('e', source);
  var pIntro = safeDecode(gup('i', source));
  var pSouthName = safeDecode(gup('sn', source));
  var pWestName = safeDecode(gup('wn', source));
  var pNorthName = safeDecode(gup('nn', source));
  var pEastName = safeDecode(gup('en', source));
  var pAuction = safeDecode(gup('a', source));
  var pClaim = gup('c', source);
  var pPlay = safeDecode(gup('p', source));
  var pKibitz = gup('k', source);

  var hands = new Array(pSouth, pWest, pNorth, pEast);
  var dealer = interpretSeatString(pDealer) + 1;
  if (dealer <= 0) dealer = 3;
  var nt = '';
  if (pIntro.length) nt = 'nt|' + pIntro + '|';
  var sk = 'sk|' + pKibitz + '|';
  var md = 'md|' + dealer + pSouth + ',' + pWest + ',' + pNorth + ',' + pEast + '|';
  var pn =
    'pn|' +
    encodePlayerName(pSouthName) +
    ',' +
    encodePlayerName(pWestName) +
    ',' +
    encodePlayerName(pNorthName) +
    ',' +
    encodePlayerName(pEastName) +
    '|';

  var wantsPictures = gup('pc', source).toLowerCase();

  if (!fastVersion && wantsPictures == 'y') {
    picturesOfCards = true;
  } else if (fastVersion || wantsPictures == 'n') {
    picturesOfCards = false;
  }
  picturesModeChanged();

  var dt = 'dt|';

  for (seat = 0; seat < 4; seat++) {
    if (hands[seat].length) dt += seats[seat].charAt(0);
  }
  if (pAuction.length && pAuction.charAt(0) == '-') {
    dt = 'dt|P' + pAuction.substring(1);
    pAuction = '';
  } else if ((dt.length >= 6 && pAuction.length) || pPlay.length > 0) {
    dt = 'dt|';
  } else if (pAuction.length) {
    dt += 'A';
  }
  dt += '|';

  var sv = 'sv|' + pVul + '|';
  var ah = '';
  var board = parseInt(pBoard);
  if (board > 0) ah = 'ah|Board ' + board + '|';

  var bidding = '';
  var startPoint = 0;
  var endPoint;

  while (startPoint < pAuction.length) {
    var ch = pAuction.charAt(startPoint);
    if (ch == '(') {
      endPoint = pAuction.indexOf(')', startPoint + 1);
      if (endPoint >= 0) {
        bidding += 'an|' + pAuction.substring(startPoint + 1, endPoint) + '|';
        startPoint = endPoint + 1;
        continue;
      }
      break;
    }
    if (ch == '{') {
      endPoint = pAuction.indexOf('}', startPoint + 1);
      if (endPoint >= 0) {
        if (pAuction.charAt(startPoint + 1) == '+')
          bidding += 'at|' + pAuction.substring(startPoint + 2, endPoint) + '|';
        else bidding += 'nt|' + pAuction.substring(startPoint + 1, endPoint) + '|';
        startPoint = endPoint + 1;
        continue;
      }
      break;
    }
    var level = parseInt(ch);
    if (level > 0) endPoint = startPoint + 2;
    else endPoint = startPoint + 1;
    if (endPoint < pAuction.length && pAuction.charAt(endPoint) == '!') endPoint++;

    bidding += 'mb|' + pAuction.substring(startPoint, endPoint) + '|';
    startPoint = endPoint;
  }

  var play = '';
  var mc = '';

  if (pPlay.length) {
    startPoint = 0;
    while (startPoint < pPlay.length) {
      ch = pPlay.charAt(startPoint);
      if (ch == '{') {
        endPoint = pPlay.indexOf('}', startPoint + 1);
        if (endPoint >= 0) {
          if (pPlay.charAt(startPoint + 1) == '+')
            play += 'at|' + pPlay.substring(startPoint + 2, endPoint) + '|';
          else play += 'nt|' + pPlay.substring(startPoint + 1, endPoint) + '|';
          startPoint = endPoint + 1;
          continue;
        }
        break;
      }
      play += 'pc|' + pPlay.substring(startPoint, startPoint + 2) + '|';
      startPoint += 2;
    }
    if (pClaim.length) mc = 'mc|' + pClaim + '|';
  }

  var lin = dt + nt + md + sk + pn + sv + ah + bidding + play + mc;
  processLinFile(lin, true);
}

function removeGIBDivs(direction) {
  if (fastVersion || !cardDivsCreated) {
    return;
  }

  var seat = interpretSeatString(direction);
  if (seat == -1) gibDivsShowing = false;

  var div = document.getElementById('theDiv');
  for (suit = 0; suit < 4; suit++) {
    for (card = 0; card < 13; card++) {
      if (gibDivs[suit][card].parentNode == div && (seat == -1 || deck[suit][card] == seat)) {
        div.removeChild(gibDivs[suit][card]);
      }
    }
  }
}

function manageGIBDivs() {
  if (fastVersion || !cardDivsCreated) {
    return;
  }

  var div = document.getElementById('theDiv');
  for (suit = 0; suit < 4; suit++) {
    for (card = 0; card < 13; card++) {
      if (gibDivs[suit][card].parentNode == div) {
        var seat = deck[suit][card];
        if (seat >= 0) {
          if (picturesOfCards) {
            if (isHandShowing(seat)) {
              div.insertBefore(gibDivs[suit][card], null);
              gibDivs[suit][card].style.fontSize = Math.max(8, fontSize);
              gibDivs[suit][card].style.width = cardImageXOverlap;
              gibDivs[suit][card].style.left = getX(cardImageDiv[suit][card]);
              gibDivs[suit][card].style.top =
                getY(nameBars[seat]) - gibDivs[suit][card].clientHeight;
            }
            continue;
          }
          for (i = 0; i < 13; i++) {
            if (cardDivs[seat][suit][i].card == card) {
              gibDivs[suit][card].style.width = '';
              gibDivs[suit][card].style.fontSize = Math.max(8, (2 * fontSize) / 3);
              gibDivs[suit][card].style.left =
                getX(cardDivs[seat][suit][i]) +
                cardDivs[seat][suit][i].clientWidth -
                gibDivs[suit][card].clientWidth +
                4 * fireFox;
              gibDivs[suit][card].style.top =
                getY(cardDivs[seat][suit][i]) +
                cardDivs[seat][suit][i].clientHeight -
                gibDivs[suit][card].clientHeight +
                4 * fireFox;
            }
          }
        }
      }
    }
  }
}

function gibDataReceived(results) {
  var div = document.getElementById('theDiv');

  removeGIBDivs();
  var goal = contractLevel + 6;
  gibDivsShowing = true;

  // is current player same parity as declarer?
  let curplayer = "SWNE".indexOf(results.player);
  
  if (isHandShowing(curplayer)) {
    let isdeclaring = (curplayer + declarer)%2 == 0;
    let isns = curplayer%2==0;

    for (let i=0; i<results.plays.length; i++) {
      let suit = suitchars.indexOf(results.plays[i].suit);
      let card = cardchars.indexOf(results.plays[i].rank);
      let tricks = results.plays[i].score + (isns ? results.tricks.ns : results.tricks.ew);

      if (!isdeclaring) tricks = 13 - tricks;

      addGibDiv(div,suit,card,tricks,goal);

      for (let j=0; j<results.plays[i].equals.length; j++) {
        let card2 = cardchars.indexOf(results.plays[i].equals[j]);

        addGibDiv(div,suit,card2,tricks,goal);
      }

      
    }
  }
  manageGIBDivs();
}

function addGibDiv(div,suit,card,tricks,goal) {
  if (gibDivs[suit][card].parentNode != div) {
    div.appendChild(gibDivs[suit][card]);
    if (tricks >= goal) {
      gibDivs[suit][card].style.background = '#B0D57E';
      gibDivs[suit][card].style.color = '#000000';    
      if (tricks == goal) {
        div.lastChild.innerHTML = '=';
      } else {
        div.lastChild.innerHTML = tricks - goal;
      }            
    } else {
      div.lastChild.style.background = '#CB0000';
      div.lastChild.style.color = '#FFFFFF';
      div.lastChild.innerHTML = goal - tricks;        
    }
  }  
}

function fatalError(message) {
  statusDiv.innerHTML = message;
  showAll(false);
}

var xmlDoc;

function manageGIBButton() {
  var disable = false;
  if (
    fastVersion ||
    gibThinking ||
    contractLevel == -1 ||
    passes < 3 ||
    trick > 11 ||
    (seatKibitzed >= 0 && whosTurn != seatKibitzed && whosTurn != dummy)
  ) {
    disable = true;
  }
  disableButton('gib', disable);
}

function managePlayButton() {
  var disable = false;

  if (seatKibitzed != -1) disable = true;

  disableButton('play', disable);
}

function processXMLData(data) {
  x = data.getElementsByTagName('vhv');
  if (!connected && x.length > 0) {
    connectToAMQ(x[0].getAttribute('q'));
  } else {
    x = data.getElementsByTagName('sc_bm');
    if (x.length > 0) {
    } else {
      x = data.getElementsByTagName('lin');

      if (x.length) {
        var chunks = x[0].getElementsByTagName('chunk');
        if (!chunks.length) {
          if (x[0].normalize) {
            x[0].normalize();
          }
          processLinFile(x[0].childNodes[0].nodeValue);
          return;
        } else {
          var linText = '';
          var node;

          for (node = 0; node < chunks.length; node++) {
            if (chunks[node].normalize) {
              chunks[node].normalize();
            }
            linText += chunks[node].childNodes[0].nodeValue;
          }
          processLinFile(linText);
          return;
        }
      }

      fatalError('Error parsing file');
    }
  }
}

function processReqChange() {
  if (xmlDoc.readyState == 4) {
    if (xmlDoc.status == 200) {
      processXMLData(xmlDoc.responseXML);
    } else {
      if (mainDivShowing) {
        showTransientAnnouncement('Service not available', 5);
      } else {
        fatalError('File not found');
      }
    }
  }
}

function loadXMLDoc(dname) {
  try {
    xmlDoc = new XMLHttpRequest();
    xmlDoc.onreadystatechange = processReqChange;
    xmlDoc.open('GET', dname, true);
    xmlDoc.send('');
    return;
  } catch (e) {
    try {
      //Internet Explorer
      xmlDoc = new ActiveXObject('Microsoft.XMLDOM');
    } catch (e) {
      try {
        //Firefox, Mozilla, Opera, etc.
        xmlDoc = document.implementation.createDocument('', '', null);
      } catch (e) {
        alert('ERROR ' + e.message);
      }
    }
  }

  try {
    xmlDoc.async = false;
    xmlDoc.load(dname);
    processXMLData(xmlDoc);
    return;
  } catch (e) {
    alert('ERROR ' + e.message);
  }
  return null;
}

function loadCookieOptions() {
  var cookieVal = getCookie('showPlayedCards');

  if (cookieVal) {
    showPlayedCards = cookieVal == 'true';
  }

  cookieVal = getCookie('hideChat');

  if (cookieVal) {
    hideChat = cookieVal == 'true';
  }

  cookieVal = getCookie('chatFontSize');

  if (cookieVal) {
    chatFontSize = parseInt(cookieVal);
  }

  if (vugraphClient) {
    cookieVal = getCookie('picturesOfCards_bbo');
  } else if (isVugraphMatch) {
    cookieVal = getCookie('picturesOfCards');
  }

  if (cookieVal) {
    picturesOfCards = cookieVal == 'true';
  }

  cookieVal = getCookie('cardByCard');
  if (cookieVal) cardByCard = cookieVal == 'true';
}

function getCookie(c_name) {
  if (document.cookie.length > 0) {
    c_start = document.cookie.indexOf(c_name + '=');
    if (c_start != -1) {
      c_start = c_start + c_name.length + 1;
      c_end = document.cookie.indexOf(';', c_start);
      if (c_end == -1) {
        c_end = document.cookie.length;
      }
      return safeDecode(document.cookie.substring(c_start, c_end));
    }
  }
  return '';
}

function setCookie(c_name, value, expiredays) {
  var exdate = new Date();
  exdate.setDate(exdate.getDate() + expiredays);
  document.cookie =
    c_name +
    '=' +
    encodeURIComponent(value) +
    (expiredays == null ? '' : ';expires=' + exdate.toGMTString());
}

function gup(name, source) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');

  var regexS = '[\\?&]' + name + '=([^&#]*)';
  var regex = new RegExp(regexS);
  var results;

  if (source) {
    results = regex.exec(source);
  } else {
    results = regex.exec(window.location.href);
  }
  if (results == null) return '';
  else return results[1];
}

function getScrollBarWidth() {
  var inner = document.createElement('p');
  inner.style.width = '100%';
  inner.style.height = '200px';

  var outer = document.createElement('div');
  outer.style.position = 'absolute';
  outer.style.top = '0px';
  outer.style.left = '0px';
  outer.style.visibility = 'hidden';
  outer.style.width = '200px';
  outer.style.height = '150px';
  outer.style.overflow = 'hidden';
  outer.appendChild(inner);

  document.body.appendChild(outer);
  var w1 = inner.offsetWidth;
  outer.style.overflow = 'scroll';
  var w2 = inner.offsetWidth;
  if (w1 == w2) w2 = outer.clientWidth;

  document.body.removeChild(outer);

  return w1 - w2;
}

function getX(obj) {
  var curleft = 0;

  if (obj.offsetParent) {
    while (1) {
      curleft += obj.offsetLeft;
      if (!obj.offsetParent) {
        break;
      }

      obj = obj.offsetParent;
    }
  } else if (obj.x) {
    curleft += obj.x;
  }

  return curleft;
}

function getY(obj) {
  var curtop = 0;

  if (obj.offsetParent) {
    while (1) {
      curtop += obj.offsetTop - obj.scrollTop;
      if (!obj.offsetParent) {
        break;
      }
      obj = obj.offsetParent;
    }
  } else if (obj.y) {
    curtop += obj.y;
  }

  return curtop;
}

function disableSelection(target) {
  if (typeof target.onselectstart != 'undefined') {
    //IE route
    target.onselectstart = function () {
      return false;
    };
  } else if (typeof target.style.MozUserSelect != 'undefined') {
    //Firefox route
    target.style.MozUserSelect = 'none';
  } //All other route (ie: Opera)
  else {
    target.onmousedown = function () {
      return false;
    };
  }

  target.style.cursor = 'default';
}

function processV2LoginMessage(message) {
  if (!connected) {
    connected = true;
    killConnectTimer();
    startHeartBeatTimer();
    joiningTable();
  }
}

function processV2JoinMessage(message) {
  var table = message.childNodes[0].getAttribute('table_id');
  var title = message.childNodes[0].getAttribute('title');
  document.title = title;
  if (myTableID != null && table != myTableID) {
    joiningTable();
  }
  myTableID = table;
}

function processV2DealMessage(message) {
  if (firstBlast) {
    return;
  }
  var dealer = interpretSeatString(message.getAttribute('dealer')) + 1;
  var deal =
    message.getAttribute('south') +
    ',' +
    message.getAttribute('west') +
    ',' +
    message.getAttribute('north') +
    ',' +
    message.getAttribute('east');
  var vul = message.getAttribute('vul');
  var board = 'Board ' + message.getAttribute('board');
  removeGIBDivs();
  processLinCommand('MD', '' + dealer + deal);
  processLinCommand('SV', vul);
  processLinCommand('AH', board);
  if (playingClient) {
    if (lessonID > '1') {
      getLessonContractPhase = 1;
    }
    setKibitzed('S');
    respondToResize();
  } else if (wasKibitzed >= 0) {
    setKibitzed(seats[wasKibitzed]);
  }
  if (playingClient) {
    lessonBoardNumber++;
    scoreNS = 0;
    manageScoreDiv();
    setBoardNumber(lessonBoardNumber);
  }
}

function processV2BidMessage(message) {
  var call = message.getAttribute('call');
  var explain = message.getAttribute('explain');
  processLinCommand('MB', call);
  if (explain) {
    processLinCommand('AN', explain);
  }
  if (bidSeqPoint >= -1) {
    bidSeqPoint--;
    next();
  }

  maybeMakeLessonBid(3, 4);
}

function processV2CardMessage(message) {
  var card = message.getAttribute('card');
  processLinCommand('PC', card);
  maybePlayCard();
}

function processV2SitMessage(message) {
  if (playingClient) {
    return;
  }
  var seat = message.getAttribute('seat');
  var name = message.getAttribute('label');
  setPlayerName(seat, name);
}

function processV2StandMessage(message) {
  var seat = message.getAttribute('seat');
  setPlayerName(seat, '');
}

function processV2ClaimMessage(message) {
  removeGIBDivs();
  var tricks = message.getAttribute('tricks');
  processLinCommand('MC', tricks);
  showTrickResult();
}

function processV2ChatMessage(message) {
  var from = message.getAttribute('from');
  var chat = message.getAttribute('message');
  var atBottom = annotDiv.scrollTop + annotDiv.clientHeight + 10 >= annotDiv.scrollHeight;

  annotDiv.innerHTML +=
    "<font color='000080'><b>" +
    from +
    ': </b></font>' +
    insertLinkHTML(insertSuitHTML(chat)) +
    '<br>';
  if (atBottom) {
    annotDiv.scrollTop = annotDiv.scrollHeight;
  }
}

function processV2UndoMessage(message) {
  var seat = interpretSeatString(message.getAttribute('position'));

  do {
    undo();
  } while (seat >= 0 && whosTurn != seat);

  showTransientAnnouncement('Undo accepted', 3);
}

function processV2ExplainMessage(message) {
  var r = parseInt(message.getAttribute('round'));
  var ir = parseInt(message.getAttribute('inround'));
  var explain = insertSuitHTML(message.getAttribute('explanation'));
  var bsp = getBidSeqPoint(r, ir);
  explainCall(explain, bsp);
}

function processV2ScoreMessage(message) {
  vugraphScoreReceived = true;

  scoreNS = message.getAttribute('scorens');
  scoreEW = message.getAttribute('scoreew');
  teamNS = message.getAttribute('label_ns');
  teamEW = message.getAttribute('label_ew');
  scoreFormat = message.getAttribute('format');

  if (teamNS) {
    teamNS = teamNS.replace(/ /g, '&nbsp;');
  }
  if (teamEW) {
    teamEW = teamEW.replace(/ /g, '&nbsp;');
  }

  manageScoreDiv();
}

function processV2OtherTableMessage(message) {
  var result = message.getAttribute('result');
  if (!result) {
    otherTableResult = '';
    return;
  }
  otherTableResult = 'Other table: ';
  if (result.charAt(0).toUpperCase() == 'P') {
    otherTableResult += 'Passed out';
  } else if (result.charAt(1).toUpperCase() == 'N') {
    otherTableResult += result;
  } else {
    otherTableResult += insertSuitHTML(result.charAt(0) + '!' + result.substring(1));
  }
  manageScoreDiv();
}

function processV2BlastCompleteMessage(message) {
  if (firstBlast) {
    return;
  }

  if (inBlast) {
    inBlast = false;
    showAll(true);
  }
}

function processV2ErrorMessage(message) {
  if (message.nodeName == 'sc_error') {
    var rc = message.getAttribute('rc');
    if (rc == '0') {
      return;
    }
  }

  var text = message.getAttribute('message');
  closeConnection(text);
}

function processV2CloseMessage(message) {
  closeConnection('Table closed');
}

function processV2BootMessage(message) {
  closeConnection('Connection closed');
}

var expectedMessageID = 1;

function processV2Message(message) {
  var i;

  var messageID = message.getAttribute('msg_id');

  if (messageID != expectedMessageID) {
    closeConnection('Connection lost (1)');
    return;
  }
  expectedMessageID++;

  if (!connected) {
    processV2LoginMessage(subMessage);
  }

  if (keepAliveTimer) {
    clearTimeout(keepAliveTimer);
  }
  keepAliveTimer = setTimeout('closeConnection("Connection lost (0)")', 35000);

  for (i = 0; i < message.childNodes.length; i++) {
    var subMessage = message.childNodes[i];
    var context = subMessage.getAttribute('context_id');
    if (context) {
      contextID = context;
    }
    //annotDiv.innerHTML+=subMessage.nodeName+"<br>";

    switch (subMessage.nodeName) {
      case 'sc_loginok':
        processV2LoginMessage(subMessage);
        break;
      case 'sc_table_node':
        processV2JoinMessage(subMessage);
        break;
      case 'sc_deal':
        processV2DealMessage(subMessage);
        break;
      case 'sc_call_made':
        processV2BidMessage(subMessage);
        break;
      case 'sc_card_played':
        processV2CardMessage(subMessage);
        break;
      case 'sc_player_sit':
      case 'sc_player_label':
        processV2SitMessage(subMessage);
        break;
      case 'sc_player_stand':
        processV2SitMessage(subMessage);
        break;
      case 'sc_claim_accepted':
        processV2ClaimMessage(subMessage);
        break;
      case 'sc_chat':
        processV2ChatMessage(subMessage);
        break;
      case 'sc_undo':
        processV2UndoMessage(subMessage);
        break;
      case 'sc_bid_explanation':
        processV2ExplainMessage(subMessage);
        break;
      case 'sc_running_score':
        processV2ScoreMessage(subMessage);
        break;
      case 'sc_other_table_result':
        processV2OtherTableMessage(subMessage);
        break;
      case 'sc_deal_blast_complete':
      case 'sc_table_open_complete':
        processV2BlastCompleteMessage(subMessage);
        break;
      case 'mc_error':
      case 'sc_error':
        processV2ErrorMessage(subMessage);
        break;
      case 'sc_table_close':
        processV2CloseMessage(subMessage);
        break;
      case 'sc_boot':
        processV2BootMessage(subMessage);
        break;
    }

    if (firstBlast) {
      if (subMessage.nodeName == 'sc_deal_blast_complete') {
        shuffle();
        firstBlast = false;
      }
    }
  }
}

function loadFromURL(url) {
  statusDiv.innerHTML = 'Loading. Please wait...';
  showAll(false);
  loadXMLDoc(url);
}

function sendMessageToServer(message) {
  amq.sendMessage(queueID + '.1', message);
}

function sendUploadDealMessage() {
  var dealstring = 'vg|,,I,1,1,,,,,|pg||qx|o1|st||md|3';
  var seat;
  var suit;
  var card;

  for (seat = 0; seat < 4; seat++) {
    for (suit = 3; suit >= 0; suit--) {
      dealstring += suitchars.charAt(suit);
      for (card = 12; card >= 0; card--) {
        if (deck[suit][card] == seat) {
          dealstring += cardchars.charAt(card);
        }
      }
    }
    if (seat != 3) {
      dealstring += ',';
    }
  }

  dealstring += '|sv|0|rh||ah|Board 1|';
  sendMessageToServer(
    '<cs_upload_deal table_id="' + myTableID + '" dealstring="' + dealstring + '"/>'
  );
}

function sendHeartBeatMessage() {
  if (connected) {
    sendMessageToServer('<cs_keepalive/>');
  }
  startHeartBeatTimer();
}

function startHeartBeatTimer() {
  if (heartBeatTimer) {
    clearTimeout(heartBeatTimer);
  }
  heartBeatTimer = setTimeout('sendHeartBeatMessage()', 30000);
}

function connectionError() {
  closeConnection('Service not available');
}

function killConnectTimer() {
  if (connectTimer) {
    clearTimeout(connectTimer);
    connectTimer = null;
  }
}

function connectTimerTick() {
  if (!connected) {
    closeConnection('Could not connect');
  }
}

function connecting() {
  document.title = 'Connecting to BBO';
  connectTimer = setTimeout('connectTimerTick()', 30000);
  connected = false;
  inBlast = true;
  statusDiv.innerHTML = 'Connecting. Please wait...';
  showAll(false);
}

function joiningTable() {
  inBlast = true;
  statusDiv.innerHTML = 'Joining table. Please wait...';
  showAll(false);
}

function closeConnection(message) {
  killConnectTimer();
  amq.removeListener(vugraphSession, queueID + '.1');
  amq.removeListener(vugraphSession, queueID + '.2');
  if (message) {
    statusDiv.innerHTML = message;
    showAll(false);
    setTimeout('navigateAway()', 5000);
  } else {
    navigateAway();
  }
}

function navigateAway() {
  var url = safeDecode(gup('h'));
  if (url == '') {
    url = 'https://www.bridgebase.com';
  }
  window.open(url, '_self');
}

function connectToAMQ(queue) {
  if (!queue || queueID) {
    connectionError();
    return;
  }
  queueID = queue;
  if (queueID != '') {
    amq.addListener(vugraphSession, queueID + '.2', myHandler.rcvMessage);
    if (playingClient) {
      sendMessageToServer('<cm_connection type="ab"/>');
    } else {
      sendMessageToServer('<cm_connection type="hv" tableid="' + tableID + '"/>');
    }
  }
}

function initVugraphSession() {
  connecting();
  loadXMLDoc('getq.php?request_id=q' + Math.random());
}

function calculateRawScore(result, board, forNS, forEW) {
  if (!result) {
    return -1;
  }

  if (result.charAt(0).toUpperCase() == 'P') {
    return 0;
  }

  var level = parseInt(result.charAt(0));
  var goal = level + 6;
  var strain = interpretSuitChar(result.charAt(1));
  var declarer = interpretSeatString(result.charAt(2));
  var vul = isVul(declarer, board);
  var doubled = 0;
  var index = 3;
  if (result.charAt(index).toUpperCase() == 'X') {
    doubled = 2;
    index++;
    if (result.charAt(index).toUpperCase() == 'X') {
      doubled = 4;
      index++;
    }
  }
  var tricks = goal;
  if (result.charAt(index) == '+') {
    tricks += parseInt(result.substr(index + 1));
  } else if (result.charAt(index) == '-') {
    tricks -= parseInt(result.substr(index + 1));
  }

  var score = 0;

  if (tricks < goal) {
    var i = goal - tricks;
    if (vul) {
      if (!doubled) {
        score = i * 100;
      } else {
        score = 200 + 300 * (i - 1);
        if (doubled == 4) {
          score *= 2;
        }
      }
    } else {
      if (!doubled) {
        score = i * 50;
      } else {
        for (j = 1; j <= i; j++) {
          if (j == 1) {
            score += 100;
          } else if (j < 4) {
            score += 200;
          } else {
            score += 300;
          }
        }
        if (doubled == 4) {
          score *= 2;
        }
      }
    }
    score *= -1;
  } else {
    if (strain == 0 || strain == 1) {
      score = (goal - 6) * 20;
    } else {
      score = (goal - 6) * 30;
    }
    if (strain == 4) {
      score += 10;
    }

    score *= Math.max(1, doubled);

    if (score >= 100) {
      if (vul) {
        score += 500;
      } else {
        score += 300;
      }
    } else {
      score += 50;
    }

    if (doubled == 2) {
      score += 50;
    }
    if (doubled == 4) {
      score += 100;
    }

    if (goal > 11) {
      if (vul) {
        score += (goal - 11) * 750;
      } else {
        score += (goal - 11) * 500;
      }
    }

    i = tricks - goal;

    if (i > 0) {
      if (!doubled) {
        if (strain == 0 || strain == 1) {
          score += i * 20;
        } else {
          score += i * 30;
        }
      } else {
        j = i * 100;
        if (vul) {
          j *= 2;
        }
        if (doubled == 4) {
          j *= 2;
        }
        score += j;
      }
    }
  }

  if (forNS && (declarer == 1 || declarer == 3)) {
    return -score;
  }
  if (forEW && (declarer == 0 || declarer == 2)) {
    return -score;
  }
  return score;
}

function calculateIMPs(j) {
  var l = 0;

  if (j >= 20 && j <= 40) l = 1;
  if (j >= 50 && j <= 80) l = 2;
  if (j >= 90 && j <= 120) l = 3;
  if (j >= 130 && j <= 160) l = 4;
  if (j >= 170 && j <= 210) l = 5;
  if (j >= 220 && j <= 260) l = 6;
  if (j >= 270 && j <= 310) l = 7;
  if (j >= 320 && j <= 360) l = 8;
  if (j >= 370 && j <= 420) l = 9;
  if (j >= 430 && j <= 490) l = 10;
  if (j >= 500 && j <= 590) l = 11;
  if (j >= 600 && j <= 740) l = 12;
  if (j >= 750 && j <= 890) l = 13;
  if (j >= 900 && j <= 1090) l = 14;
  if (j >= 1100 && j <= 1290) l = 15;
  if (j >= 1300 && j <= 1490) l = 16;
  if (j >= 1500 && j <= 1740) l = 17;
  if (j >= 1750 && j <= 1990) l = 18;
  if (j >= 2000 && j <= 2240) l = 19;
  if (j >= 2250 && j <= 2490) l = 20;
  if (j >= 2500 && j <= 2990) l = 21;
  if (j >= 3000 && j <= 3490) l = 22;
  if (j >= 3500 && j <= 3990) l = 23;
  if (j >= 4000) l = 24;

  return l;
}

function nextEmptySeat() {
  var wt = whosTurn;
  var i;
  whosTurn = -1;
  for (i = 0; i < 3; i++) {
    wt++;
    if (wt == 4) {
      wt = 0;
    }
    if (handShowing[wt] && howManyCards[wt] < 13) {
      whosTurn = wt;
      nextEmptySuit(true);
      hilightSuitSymbol(true);
      break;
    }
  }
}

function nextEmptySuit(top) {
  if (top || keyboardSuit == -1) {
    keyboardSuit = 4;
  }

  while (keyboardSuit >= 0) {
    keyboardSuit--;

    if (
      keyboardSuit < 0 ||
      howManySuitDealt[0][keyboardSuit] +
        howManySuitDealt[1][keyboardSuit] +
        howManySuitDealt[2][keyboardSuit] +
        howManySuitDealt[3][keyboardSuit] <
        13
    )
      break;
  }
}

function handleKeyDown(event) {
  if (!vugraphClient && mainDivShowing) {
    if (event.keyCode == 39 && isButtonEnabled('next')) {
      next();
    } else if (event.keyCode == 37 && isButtonEnabled('undo')) {
      undo();
    } else if (showBiddingBox()) {
      charToBiddingBox(String.fromCharCode(event.keyCode).toUpperCase());
    } else if (allowCardSelection()) {
      if (getDeal && event.keyCode == 13) {
        hilightSuitSymbol(false);
        nextEmptySuit();
        if (keyboardSuit == -1 && numHandsShowing > 1) {
          nextEmptySeat();
          manageWhosTurn();
        } else {
          if (keyboardSuit == -1) {
            keyboardSuit = 3;
          }
          hilightSuitSymbol(true);
        }
      } else if (getDeal && event.keyCode == 46) {
        var rank;
        for (rank = 0; rank < 13; rank++) {
          if (deck[keyboardSuit][rank] == whosTurn) {
            var cardDiv = new Object();
            cardDiv.suit = keyboardSuit;
            cardDiv.card = rank;
            mouseClickCardImage(cardDiv);
            break;
          }
        }
      } else {
        charForCardSelection(String.fromCharCode(event.keyCode).toUpperCase());
      }
    }
  }
}

function stopKeyboardEvent(event) {
  if (!event) {
    event = window.event;
    if (event) {
      event.cancelBubble = true;
    }
  }
  if (event && event.stopPropagation) {
    event.stopPropagation();
  }
}

function resizeCardDiv(cardDiv) {
  if (cardDiv) {
    cardDiv.image.style.width = cardDiv.clientWidth;
    cardDiv.image.style.height = cardDiv.clientHeight;
    var fontSize = cardDiv.clientHeight / 4;
    cardDiv.topLeftTopDiv.style.fontSize = fontSize;
    cardDiv.botLeftBotDiv.style.fontSize = fontSize + 2;
    cardDiv.topLeftBotDiv.style.fontSize = fontSize + 2;
    cardDiv.botLeftTopDiv.style.fontSize = fontSize;
    cardDiv.middleDiv.style.fontSize = 2 * fontSize;
    var margin = fontSize / 8;
    if (cardDiv.card == 8) {
      cardDiv.topLeftTopDiv.style.left = 0;
    } else {
      cardDiv.topLeftTopDiv.style.left = margin;
    }
    cardDiv.topLeftTopDiv.style.top = margin;
    cardDiv.topLeftBotDiv.style.left = margin;
    cardDiv.topLeftBotDiv.style.top = fontSize;
    cardDiv.botLeftBotDiv.style.left =
      cardDiv.clientWidth - margin - cardDiv.botLeftBotDiv.clientWidth;
    cardDiv.botLeftTopDiv.style.left =
      cardDiv.clientWidth - margin - cardDiv.botLeftTopDiv.clientWidth;
    cardDiv.botLeftBotDiv.style.top =
      cardDiv.clientHeight - margin - cardDiv.botLeftBotDiv.clientHeight;
    cardDiv.botLeftTopDiv.style.top =
      cardDiv.clientHeight - fontSize - cardDiv.botLeftTopDiv.clientHeight;
    cardDiv.middleDiv.style.left = (cardDiv.clientWidth - cardDiv.middleDiv.clientWidth) / 2;
    cardDiv.middleDiv.style.top = (cardDiv.clientHeight - cardDiv.middleDiv.clientHeight) / 2;
  }
}

function maybeResizeCardImage(cardDiv) {
  if (cardDiv && cardDiv.needsResizing) {
    resizeCardDiv(cardDiv);
    cardDiv.needsResizing = false;
  }
}

function setCardImageDivCard(cardDiv, suit, card) {
  if (cardDiv) {
    cardDiv.suit = suit;
    cardDiv.card = card;
    cardDiv.topLeftTopDiv.innerHTML = getCardChar(card);
    cardDiv.botLeftBotDiv.innerHTML = getCardChar(card);
    cardDiv.topLeftBotDiv.innerHTML = suitHTMLs[suit];
    cardDiv.botLeftTopDiv.innerHTML = suitHTMLs[suit];
    cardDiv.middleDiv.innerHTML = suitHTMLs[suit];
    cardDiv.topLeftTopDiv.style.color = getSuitColor(suit);
    cardDiv.botLeftBotDiv.style.color = getSuitColor(suit);
  }
}

function canCardBeSelected(suit, card) {
  if (!allowCardSelection() || card < 0) {
    return false;
  }
  if (getDeal) {
    return true;
  }

  var seat = deck[suit][card];
  if (seat >= 0 && seat == whosTurn) {
    if (
      inTrick == 3 ||
      suitPlayed[trick][0] == suit ||
      howManySuit[seat][suitPlayed[trick][0]] == 0
    )
      return true;
  }
  return false;
}

function allowCardSelection() {
  if (
    getDeal ||
    (exploreLine && declarer >= 0 && seatKibitzed == -1) ||
    (playingClient && declarer >= 0)
  ) {
    return true;
  }

  if (getSequence && contractLevel != -1 && isHandShowing(whosTurn) && displayType == '') {
    return true;
  }

  return false;
}

function highlightCard(suit, card, highlight) {
  cardHighlighted[suit][card] = highlight;

  if (picturesOfCards || (getDeal && deck[suit][card] == -10)) {
    if (highlight) {
      cardImageDiv[suit][card].image.src = 'https://www.bridgebase.com/tools/cardbghi.gif';
    } else {
      cardImageDiv[suit][card].image.src = 'https://www.bridgebase.com/tools/cardbg.gif';
    }
  } else {
    var seat = deck[suit][card];
    if (seat < 0) {
      return;
    }
    var i;
    for (i = 0; i < 13; i++) {
      if (cardDivs[seat][suit][i].card == card) {
        if (highlight) {
          cardDivs[seat][suit][i].style.background = highlightColor;
        } else {
          cardDivs[seat][suit][i].style.background = '';
        }

        break;
      }
    }
  }
}

function setAllCardHighlights() {
  var suit;
  var card;
  for (suit = 0; suit < 4; suit++) {
    for (card = 0; card < 13; card++) {
      highlightCard(suit, card, cardHighlighted[suit][card]);
    }
  }
}

function clearAllCardHighlights() {
  var suit;
  var card;

  for (suit = 0; suit < 4; suit++) {
    for (card = 0; card < 13; card++) {
      if (cardHighlighted[suit][card]) {
        highlightCard(suit, card, false);
      }
    }
  }
}

function mouseDownCardImage(event) {
  if (event) {
    if (event.preventDefault) event.preventDefault();
  }
}

function mouseClickCardImage(cardDiv) {
  var suit = cardDiv.suit;
  var card = cardDiv.card;

  if (canCardBeSelected(suit, card)) {
    var seat = deck[suit][card];
    if (getDeal) {
      if (seat == -10) {
        if (howManyCards[whosTurn] < 13) {
          highlightCard(suit, card, false);

          dealCardToPlayer(suit, card, whosTurn);
          userDealt[suit][card] = true;

          if (fillInFourthHand()) {
            hilightSuitSymbol(false);
            populateHands(0, 3, 0, 3);
            getDeal = false;
            if (showAuction()) {
              whosTurn = dealer;
              getSequence = true;
              moveEditorCardImages();
              setDealer(seats[dealer]);
              manageBiddingBox();
              clearAllCardHighlights();
              manageBiddingQuestionMark();
              respondToResize();
            } else {
              whosTurn = -1;
              manageWhosTurn();
            }
          } else {
            populateHands(whosTurn, whosTurn, 0, 3);
            if (howManyCards[whosTurn] == 13) {
              hilightSuitSymbol(false);
              nextEmptySeat();

              if (whosTurn == -1 && showAuction()) {
                getDeal = false;
                getSequence = true;
                moveEditorCardImages();
                setDealer(seats[dealer]);
                manageBiddingBox();
                manageBiddingQuestionMark();
                clearAllCardHighlights();
              } else {
                moveEditorCardImages();
              }
              manageWhosTurn();
            } else {
              hilightSuitSymbol(false);
              keyboardSuit = suit;
              hilightSuitSymbol(true);
            }
          }
        }
      } else {
        hilightSuitSymbol(false);
        var wasWhosTurn = whosTurn;
        highlightCard(suit, card, false);
        deck[suit][card] = -10;
        howManyCards[seat]--;
        howManyCardsDealt[seat]--;
        howManySuit[seat][suit]--;
        howManySuitDealt[seat][suit]--;
        userDealt[suit][card] = false;
        populateHands(seat, seat, 0, 3);
        whosTurn = seat;
        keyboardSuit = suit;
        hilightSuitSymbol(true);
        manageWhosTurn();
        if (wasWhosTurn == -1) {
          moveEditorCardImages();
        }
      }
      enableNewButton();
      return;
    }

    var theCard = suitchars.charAt(suit) + cardchars.charAt(card);
    if (
      !playSequence[playSeqPoint] ||
      theCard.toUpperCase() != playSequence[playSeqPoint].toUpperCase()
    ) {
      playSeqMax = playSeqPoint;
      tricksClaimed = -1;

      for (i = playSeqMax + 1; i < 52; i++) {
        playSequence[i] = '';
      }
    }
    if (playingClient) {
      sendMessageToServer(
        '<cs_play_card card="' +
          theCard +
          '" context_ID="' +
          contextID +
          '" table_ID="' +
          myTableID +
          '"/>'
      );
    }

    playSequence[playSeqPoint] = theCard;
    endCardAnimation();
    highlightCard(suit, card, false);
    nextCard(true, true);
  }
}

function mouseOverCardImage(cardDiv) {
  var suit = cardDiv.suit;
  var card = cardDiv.card;

  if (canCardBeSelected(suit, card)) {
    clearAllCardHighlights();
    highlightCard(suit, card, true);
  }
}

function mouseOutCardImage(cardDiv) {
  var suit = cardDiv.suit;
  var card = cardDiv.card;

  if (canCardBeSelected(suit, card)) {
    highlightCard(suit, card, false);
  }
}

function hilightSuitSymbol(hilight) {
  if (whosTurn >= 0 && keyboardSuit >= 0) {
    if (hilight && getDeal) {
      suitSymbols[whosTurn][keyboardSuit].style.background = highlightColor;
    } else {
      suitSymbols[whosTurn][keyboardSuit].style.background = '';
    }
  }
}

function setKeyboardSuit() {
  hilightSuitSymbol(false);
  keyboardSuit = -1;
  if (contractLevel != -1 && whosTurn != -1) {
    var onlySuit = -1;
    var suit;
    for (suit = 0; suit < 4; suit++) {
      if (howManySuit[whosTurn][suit]) {
        if (onlySuit == -1) {
          onlySuit = suit;
        } else {
          onlySuit = -2;
        }
      }
    }

    if (onlySuit >= 0) {
      keyboardSuit = onlySuit;
    } else if (inTrick != 3 && howManySuit[whosTurn][suitPlayed[trick][0]]) {
      keyboardSuit = suitPlayed[trick][0];
    }
  }
  hilightSuitSymbol(true);
}

function charForCardSelection(theChar) {
  var suit;
  for (suit = 0; suit < 4; suit++) {
    if (theChar == suitchars.charAt(suit)) {
      var legal = false;
      if (getDeal) {
        legal = true;
      } else if (whosTurn >= 0 && trick < 13) {
        if (trick < 0) {
          legal = true;
        } else if (howManySuit[whosTurn][suit]) {
          var leadSuit = suitPlayed[trick][0];
          if (inTrick == 3 || howManySuit[whosTurn][leadSuit] == 0 || suit == leadSuit) {
            legal = true;
          }
        }
      }

      if (legal) {
        hilightSuitSymbol(false);
        keyboardSuit = suit;
        hilightSuitSymbol(true);
      }
      return;
    }
  }
  var card;
  if (keyboardSuit >= 0) {
    for (card = 0; card < 13; card++) {
      if (theChar == cardchars.charAt(card)) {
        var cardDiv = new Object();
        cardDiv.suit = keyboardSuit;
        cardDiv.card = card;
        mouseClickCardImage(cardDiv);
        break;
      }
    }
  }
}

function createCardBackDiv() {
  var div = document.createElement('div');
  disableSelection(div);
  div.style.position = 'absolute';
  div.image = document.createElement('img');
  div.image.src = 'https://www.bridgebase.com/tools/cardback.gif';
  div.image.style.width = '100%';
  div.image.style.height = '100%';
  div.appendChild(div.image);
  return div;
}

function createCardImageDiv(suit, card) {
  var div = document.createElement('div');
  disableSelection(div);
  div.style.position = 'absolute';
  div.style.width = '100';
  div.style.height = '100';
  div.needsResizing = true;
  div.image = new Image();
  div.image.style.position = 'absolute';
  div.image.style.top = 0;
  div.image.style.left = 0;
  div.image.src = 'https://www.bridgebase.com/tools/cardbg.gif';
  div.appendChild(div.image);
  div.onmouseover = function () {
    mouseOverCardImage(this);
  };
  div.onmouseout = function () {
    mouseOutCardImage(this);
  };
  div.onclick = function () {
    mouseClickCardImage(this);
  };
  div.onmousedown = function (event) {
    mouseDownCardImage(event);
  };
  div.topLeftTopDiv = document.createElement('div');
  div.topLeftTopDiv.style.position = 'absolute';
  div.appendChild(div.topLeftTopDiv);
  div.topLeftBotDiv = document.createElement('div');
  div.topLeftBotDiv.style.position = 'absolute';
  div.appendChild(div.topLeftBotDiv);
  div.botLeftTopDiv = document.createElement('div');
  div.botLeftTopDiv.style.position = 'absolute';
  div.appendChild(div.botLeftTopDiv);
  div.botLeftBotDiv = document.createElement('div');
  div.botLeftBotDiv.style.position = 'absolute';
  div.appendChild(div.botLeftBotDiv);
  div.middleDiv = document.createElement('div');
  div.middleDiv.style.position = 'absolute';
  div.appendChild(div.middleDiv);
  setCardImageDivCard(div, suit, card);
  return div;
}

function startCardAnimation(seat, suit, rank) {
  if (cardImageDiv[suit][rank]) {
    if (!isHandShowing(seat)) {
      var whichCard = Math.floor(howManyCards[seat] / 2);
      var theDiv = document.getElementById('theDiv');
      theDiv.insertBefore(cardImageDiv[suit][rank], nameBars[seat]);
      cardImageDiv[suit][rank].needsResizing = true;
      maybeResizeCardImage(cardImageDiv[suit][rank]);
      cardImageDiv[suit][rank].style.left = cardBackDiv[seat][whichCard].style.left;
      cardImageDiv[suit][rank].style.top = cardBackDiv[seat][whichCard].style.top;
      theDiv.removeChild(cardBackDiv[seat][whichCard]);
    }
    highlightCard(suit, rank, false);
    cardImageDrifting = cardImageDiv[suit][rank];
    cardImageDrifting.parentNode.insertBefore(cardImageDrifting, null);
    var destinationX = getTrickCardImageLeft(seat);
    var destinationY = getTrickCardImageTop(seat);
    cardAnimationPosX = parseInt(cardImageDrifting.style.left);
    cardAnimationPosY = parseInt(cardImageDrifting.style.top);
    var distanceX = destinationX - cardAnimationPosX;
    var distanceY = destinationY - cardAnimationPosY;
    var totalDistance = Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2));
    var animationDuration = cardAnimationTime * (totalDistance / totalWidth);
    cardAnimationStepsRemaining = Math.floor(animationDuration / cardAnimationStepTime) - 1;
    cardAnimationStepDX = distanceX / cardAnimationStepsRemaining;
    cardAnimationStepDY = distanceY / cardAnimationStepsRemaining;
    moveCard();
  }
}

function endCardAnimation() {
  if (cardImageDrifting) {
    if (cardAnimationTimer) {
      clearTimeout(cardAnimationTimer);
      cardAnimationTimer = null;
    }

    cardAnimationStepsRemaining = 0;
    cardImageDrifting = null;

    if (claimShowing) {
      wasKibitzed = seatKibitzed;
      setKibitzed('');
    } else {
      populateHands(0, 3, 0, 3);
      showAllTrickCards();
    }
    respondToResize();
  }
}

function moveCard() {
  if (cardImageDrifting) {
    if (cardAnimationStepsRemaining) {
      cardAnimationPosX += cardAnimationStepDX;
      cardAnimationPosY += cardAnimationStepDY;
      cardImageDrifting.style.left = parseInt(cardAnimationPosX);
      cardImageDrifting.style.top = parseInt(cardAnimationPosY);
      cardAnimationStepsRemaining--;
      cardAnimationTimer = setTimeout(moveCard, cardAnimationStepTime);
    } else {
      endCardAnimation();
      if (autoPlayNextCard) {
        autoPlayNextCard = false;
        nextCard(true);
      } else {
        maybePlayCard();
      }
    }
  }
}

function readyForNextDeal() {
  if (dealEndState) {
    dealEndState = false;
    removeTransientAnnouncement();
    if (lessonBoardNumber == dealsInLesson) {
      showAll(false);
      statusDiv.innerHTML = 'Game&nbsp;Over&nbsp;-&nbsp;Score:&nbsp;' + scoreEW;
      gameOverState = true;
      manageStatusDiv();
      manageLeaderBoard();
    } else {
      shuffle();
    }
  }
}

function trickEndTimerTick() {
  if (trickEndTimer) {
    clearTimeout(trickEndTimer);
    trickEndTimer = null;

    if (trick == 12) {
      dealEndState = true;
      showTransientAnnouncement('Click&nbsp;to<br>&nbsp;Continue', -1);
      while (bidSeqPoint >= 0) {
        undo();
      }
      setKibitzed(' ');
      whosTurn = -1;
      manageWhosTurn();
      showTrickResult();
      respondToResize();
    } else {
      maybePlayCard();
    }
  }
}

function maybePlayCard() {
  if (vugraphClient) {
    var target = 4 * trick + inTrick + 1;

    if (playSeqMax >= target && (!playingClient || (!cardImageDrifting && !trickEndTimer))) {
      playSeqPoint = target;
      next();
    }
  }
}

function createCardImageDivs() {
  var suit;
  var card;

  for (suit = 0; suit < 4; suit++) {
    cardImageDiv[suit] = new Array(13);
    cardBackDiv[suit] = new Array(13);

    for (card = 12; card >= 0; card--) {
      cardImageDiv[suit][card] = createCardImageDiv(suit, card);
      cardBackDiv[suit][card] = createCardBackDiv();
    }
  }
}

function showCardImages(visible) {
  var suit;
  var card;

  for (suit = 0; suit < 4; suit++) {
    for (card = 12; card >= 0; card--) {
      if ((!getDeal && !picturesOfCards) || !visible) {
        if (cardImageDiv[suit] && cardImageDiv[suit][card] && cardImageDiv[suit][card].parentNode) {
          cardImageDiv[suit][card].parentNode.removeChild(cardImageDiv[suit][card]);
          cardImageDiv[suit][card].needsResizing = true;
        }
      }
    }
  }
  var seat;
  for (seat = 0; seat < 4; seat++) {
    if (visible) {
      nameBars[seat].style.visibility = 'visible';
    } else {
      nameBars[seat].style.visibility = 'hidden';
    }
  }
}

function picturesModeChanged() {
  showCardImages(true);
  var seat;

  for (seat = 0; seat < 4; seat++) {
    if (picturesOfCards) {
      handDivs[seat].style.visibility = 'hidden';
    } else {
      handDivs[seat].style.visibility = 'visible';
    }
  }

  manageWhosTurn();
}

function charToBiddingBox(theChar) {
  if (theChar == 'P') {
    biddingBoxPassButtonClicked();
  } else if (theChar == 'X') {
    if (allowDouble()) {
      biddingBoxDblButtonClicked();
    }
  } else if (theChar == 'R') {
    if (allowRedouble()) {
      biddingBoxDblButtonClicked();
    }
  } else if (theChar >= '1' && theChar <= '7') {
    var level = parseInt(theChar);
    if (level > lastLevelBid || (level == lastLevelBid && lastStrainBid < 4)) {
      var button = new Object();
      button.level = level - 1;
      biddingBoxLevelButtonClicked(button);
    }
  } else if (biddingBoxLevelSelected != -1) {
    var strain;
    var startStrain = 0;
    if (biddingBoxLevelSelected + 1 == lastLevelBid) {
      startStrain = lastStrainBid + 1;
    }
    for (strain = startStrain; strain <= 4; strain++) {
      if (suitchars.charAt(strain) == theChar) {
        button = new Object();
        button.strain = strain;
        biddingBoxStrainButtonClicked(button);
        break;
      }
    }
  }
}

function showBiddingBox() {
  return (
    (getSequence && passes < 3 && mainDivShowing && whosTurn >= 0 && isHandShowing(whosTurn)) ||
    (lessonID && lessonID > '1' && getLessonContractPhase > 0)
  );
}

function manageBiddingBox() {
  if (biddingBox) {
    if (showBiddingBox()) {
      biddingBox.style.visibility = 'visible';

      if (lessonID) {
        if (!picturesOfCards) {
          biddingBox.style.width = handWidth;
        } else {
          biddingBox.style.width = xpos[3] - (xpos[1] + getHandWidth(1)) - 2 * margin;
        }
        biddingBox.style.height = cardImageHeight;
        biddingBox.style.left = (totalWidth - biddingBox.clientWidth) / 2;
        biddingBox.style.top = (totalHeight - biddingBox.clientHeight) / 2;

        if (getLessonContractPhase == 1) {
          biddingBoxInstructDiv.innerHTML = 'Select your trump suit:';
        }
        if (getLessonContractPhase == 2) {
          biddingBoxInstructDiv.innerHTML = 'Select your trick goal:';
        }
      } else {
        if (isEditor) {
          biddingBox.style.width = editorWidthOffset - 2 * margin;
        } else {
          biddingBox.style.width = handWidth;
        }
        if (isEditor) {
          biddingBox.style.height = Math.max(
            0,
            Math.min(
              handHeight,
              editorDiv.clientHeight -
                editorHVLButton.clientHeight -
                editorAnnounceDiv.clientHeight -
                6 * margin -
                commentsEdit.clientHeight -
                commentsHeading.clientHeight
            )
          );
        } else {
          biddingBox.style.height = handHeight;
        }
        biddingBox.style.left = margin;

        if (isEditor) {
          biddingBox.style.top = 2 * margin + editorAnnounceDiv.clientHeight;
        } else {
          biddinBox.style.top = margin;
        }
      }
      biddingBoxResized();
    } else if (biddingBox.style.visibility != 'hidden') {
      biddingBox.style.visibility = 'hidden';
      biddingBoxResized();
    }
  }
}

function biddingBoxResized() {
  if (biddingBox) {
    var buttonHeight;

    if (lessonID) {
      buttonHeight = Math.max(0, (2 * (biddingBox.clientHeight - 3 * margin)) / 3);
    } else {
      buttonHeight = Math.max((biddingBox.clientHeight - 4 * margin) / 4, 0);
    }

    var buttonWidth;

    if (getLessonContractPhase == 1) {
      buttonWidth = Math.max((biddingBox.clientWidth - 2 * margin) / 6, 0);
    } else {
      buttonWidth = Math.max((biddingBox.clientWidth - 2 * margin) / 7, 0);
    }

    var fontSize = (3 * buttonHeight) / 4;

    if (!showBiddingBox() || !lessonID) {
      biddingBoxInstructDiv.style.visibility = 'hidden';
    } else {
      biddingBoxInstructDiv.style.visibility = 'visible';
      biddingBoxInstructDiv.style.left = margin;
      biddingBoxInstructDiv.style.top = margin;
      biddingBoxInstructDiv.style.height = buttonHeight / 2;
      biddingBoxInstructDiv.style.width = Math.max(0, biddingBox.clientWidth - 2 * margin);
      biddingBoxInstructDiv.style.fontSize = (6 * fontSize) / 10;
    }

    if (!showBiddingBox() || lessonID) {
      biddingBoxPassButton.style.visibility = 'hidden';
    } else {
      biddingBoxPassButton.style.visibility = 'visible';
      biddingBoxPassButton.style.left = margin;
      biddingBoxPassButton.style.top = margin;
      biddingBoxPassButton.style.height = buttonHeight;
      biddingBoxPassButton.style.width = 2 * buttonWidth;
      biddingBoxPassButton.style.fontSize = fontSize;
    }

    if (!showBiddingBox() || lessonID || (!allowDouble() && !allowRedouble())) {
      biddingBoxDblButton.style.visibility = 'hidden';
    } else {
      biddingBoxDblButton.style.visibility = 'visible';
      if (allowDouble()) {
        biddingBoxDblButton.value = 'Dbl';
        biddingBoxDblButton.style.background = '#CB0000';
      } else {
        biddingBoxDblButton.value = 'Rdbl';
        biddingBoxDblButton.style.background = '#033769';
      }

      biddingBoxDblButton.style.left =
        margin + Math.max(2 * buttonWidth, biddingBoxPassButton.clientWidth + 10);
      biddingBoxDblButton.style.top = margin;
      biddingBoxDblButton.style.height = buttonHeight;
      biddingBoxDblButton.style.width = 2 * buttonWidth;
      biddingBoxDblButton.style.fontSize = fontSize;
    }

    var left = margin;
    var level;
    for (level = 0; level < 7; level++) {
      if (
        !showBiddingBox() ||
        level + 1 < lastLevelBid ||
        getLessonContractPhase == 1 ||
        (level + 1 == lastLevelBid && lastStrainBid == 4)
      ) {
        biddingBoxLevelButton[level].style.visibility = 'hidden';
        continue;
      }

      if (level == biddingBoxLevelSelected) {
        biddingBoxLevelButton[level].style.background = highlightColor;
      } else {
        biddingBoxLevelButton[level].style.background = '#99CCCC';
      }

      biddingBoxLevelButton[level].style.visibility = 'visible';
      biddingBoxLevelButton[level].style.left = left;

      if (getLessonContractPhase == 2) {
        biddingBoxLevelButton[level].style.top = biddingBox.clientHeight - margin - buttonHeight;
      } else {
        biddingBoxLevelButton[level].style.top = 2 * margin + buttonHeight;
      }

      biddingBoxLevelButton[level].style.height = buttonHeight;
      biddingBoxLevelButton[level].style.width = buttonWidth;
      biddingBoxLevelButton[level].style.fontSize = fontSize;
      left += buttonWidth;
    }

    left = margin;
    var strain;
    for (strain = 0; strain < 5; strain++) {
      if (
        (!lessonID || getLessonContractPhase != 1) &&
        (!showBiddingBox() ||
          biddingBoxLevelSelected == -1 ||
          (biddingBoxLevelSelected + 1 == lastLevelBid && strain <= lastStrainBid))
      ) {
        biddingBoxStrainButton[strain].style.visibility = 'hidden';
        continue;
      }

      biddingBoxStrainButton[strain].style.visibility = 'visible';
      biddingBoxStrainButton[strain].style.left = left;

      if (getLessonContractPhase == 1) {
        biddingBoxStrainButton[strain].style.top = biddingBox.clientHeight - margin - buttonHeight;
      } else {
        biddingBoxStrainButton[strain].style.top = 2 * margin + 2 * buttonHeight;
      }
      biddingBoxStrainButton[strain].style.height = buttonHeight;
      if (strain == 4) {
        biddingBoxStrainButton[strain].style.width = 2 * buttonWidth;
      } else {
        biddingBoxStrainButton[strain].style.width = buttonWidth;
      }
      biddingBoxStrainButton[strain].style.fontSize = fontSize;
      left += buttonWidth;
    }

    if (!showBiddingBox() || lessonID) {
      biddingBoxExplainEdit.style.visibility = 'hidden';
    } else {
      biddingBoxExplainEdit.style.visibility = 'visible';
      biddingBoxExplainEdit.style.left = margin;
      biddingBoxExplainEdit.style.top = 3 * buttonHeight + 3 * margin;
      biddingBoxExplainEdit.style.width = Math.max(biddingBox.clientWidth - 2 * margin, 0);
      biddingBoxExplainEdit.style.fontSize = fontSize;
      biddingBoxExplainEdit.style.height = buttonHeight;
    }
  }
}

function biddingBoxLevelButtonClicked(button) {
  var level = button.level;

  if (lessonID == '3') {
    getLessonContractPhase = 0;
    maybeMakeLessonBid(level + 1, lessonStrain);
    manageBiddingBox();
  } else {
    biddingBoxLevelSelected = level;
    biddingBoxResized();
  }
}

function callFromBiddingBox(call) {
  if (
    bidSeqMax < bidSeqPoint + 1 ||
    (bidSequence.length >= bidSeqPoint + 2 &&
      bidSequence[bidSeqPoint + 1].toUpperCase() != call.toUpperCase())
  ) {
    playSeqMax = -1;
    bidSeqMax = bidSeqPoint + 1;
    var bsp;
    for (bsp = bidSeqPoint + 1; bsp < callExplanation.length; bsp++) {
      callExplanation[bsp] = '';
    }
  }

  if (biddingBoxExplainEdit.value) {
    callExplanation[bidSeqPoint + 1] = biddingBoxExplainEdit.value;
  }
  bidSequence[bidSeqPoint + 1] = call;
  next();
}

function resetBiddingBox() {
  biddingBoxLevelSelected = -1;
  biddingBoxExplainEdit.value = '';
}

function biddingBoxStrainButtonClicked(button) {
  var strain = button.strain;

  if (lessonID) {
    lessonStrain = strain;
    if (lessonID == '2') {
      getLessonContractPhase = 0;
      var level = 3;
      if (lessonStrain < 2) {
        level = 5;
      } else if (lessonStrain < 4) {
        level = 4;
      }
      maybeMakeLessonBid(level, lessonStrain);
    }
    if (lessonID == '3') {
      getLessonContractPhase = 2;
    }

    manageBiddingBox();
  } else {
    callFromBiddingBox('' + (biddingBoxLevelSelected + 1) + suitchars.charAt(strain));
  }
}

function biddingBoxPassButtonClicked() {
  callFromBiddingBox('P');
}

function biddingBoxDblButtonClicked() {
  if (allowDouble()) {
    callFromBiddingBox('D');
  } else if (allowRedouble()) {
    callFromBiddingBox('R');
  }
}

function createBiddingBox() {
  biddingBox = document.createElement('div');
  biddingBox.className = 'biddingBoxDivStyle';
  biddingBoxPassButton = document.createElement('input');
  biddingBoxPassButton.type = 'button';
  biddingBoxPassButton.value = 'Pass';
  biddingBoxPassButton.className = 'passButtonStyle';
  biddingBoxPassButton.onclick = function () {
    biddingBoxPassButtonClicked();
  };

  biddingBox.appendChild(biddingBoxPassButton);
  biddingBoxDblButton = document.createElement('input');
  biddingBoxDblButton.type = 'button';
  biddingBoxDblButton.value = 'Dbl';
  biddingBoxDblButton.className = 'dblButtonStyle';
  biddingBoxDblButton.onclick = function () {
    biddingBoxDblButtonClicked();
  };
  biddingBox.appendChild(biddingBoxDblButton);
  biddingBoxLevelButton = new Array(7);
  var level;
  var strain;

  for (level = 0; level < 7; level++) {
    biddingBoxLevelButton[level] = document.createElement('input');
    biddingBoxLevelButton[level].type = 'button';
    biddingBoxLevelButton[level].value = '' + (level + 1);
    biddingBoxLevelButton[level].className = 'levelButtonStyle';
    biddingBoxLevelButton[level].level = level;
    biddingBoxLevelButton[level].onclick = function () {
      biddingBoxLevelButtonClicked(this);
    };
    biddingBox.appendChild(biddingBoxLevelButton[level]);
  }
  biddingBoxStrainButton = new Array(5);

  var strainLabels = ['♣', '♦', '♥', '♠', 'NT'];
  for (strain = 0; strain < 5; strain++) {
    biddingBoxStrainButton[strain] = document.createElement('input');
    biddingBoxStrainButton[strain].type = 'button';
    biddingBoxStrainButton[strain].value = strainLabels[strain];
    biddingBoxStrainButton[strain].className = 'strainButtonStyle';
    if (strain == 1 || strain == 2) {
      biddingBoxStrainButton[strain].style.color = '#CB0000';
    }
    biddingBoxStrainButton[strain].strain = strain;
    biddingBoxStrainButton[strain].onclick = function () {
      biddingBoxStrainButtonClicked(this);
    };
    biddingBox.appendChild(biddingBoxStrainButton[strain]);
  }

  biddingBoxExplainEdit = document.createElement('input');
  biddingBoxExplainEdit.className = 'explainEditStyle';
  biddingBox.appendChild(biddingBoxExplainEdit);
  biddingBoxExplainEdit.onkeydown = function (event) {
    stopKeyboardEvent(event);
  };

  biddingBoxInstructDiv = document.createElement('div');
  biddingBoxInstructDiv.style.position = 'absolute';
  biddingBox.appendChild(biddingBoxInstructDiv);

  if (editorDiv) {
    editorDiv.appendChild(biddingBox);
  }
  if (lessonID && lessonID > '1') {
    var theDiv = document.getElementById('theDiv');
    theDiv.appendChild(biddingBox);
  }
}

function setupEditor(clear) {
  clearAllCardHighlights();
  whosTurn = -1;
  getDeal = false;
  moveEditorCardImages();
  if (clear) {
    clearDeck();
  }
  var dealerParam = gup('d');
  if (dealerParam) {
    setDealer(dealerParam);
  }
  clearPlayerNames();
  getDealer = false;

  if (auctionOnly()) {
    getSequence = true;
    getDeal = false;
    disableButton('new', true);
    disableButton('options', true);
    disableButton('gib', true);
    whosTurn = dealer;
  } else {
    getSequence = false;
    getDeal = true;
    clearAuction();
    var seat;
    for (seat = 0; seat < 4; seat++) {
      if (handShowing[seat]) {
        hilightSuitSymbol(false);
        whosTurn = seat;
        nextEmptySuit(true);
        hilightSuitSymbol(true);
        break;
      }
    }
  }

  manageWhosTurn();
  showAll(true);
  enableNewButton();

  if (displayType == '') {
    disableButton('shuffle', false);
  } else {
    disableButton('shuffle', true);
  }
}

function getTheDealer() {
  getSequence = false;
  getDeal = false;
  getDealer = true;
  whosTurn = -1;
  manageWhosTurn();
}

function boardNumberFromDealerAndVul() {
  var d = [2, 3, 0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3, 0, 1];
  var ns = [
    false,
    true,
    false,
    true,
    true,
    false,
    true,
    false,
    false,
    true,
    false,
    true,
    true,
    false,
    true,
    false,
  ];
  var ew = [
    false,
    false,
    true,
    true,
    false,
    true,
    true,
    false,
    true,
    true,
    false,
    false,
    true,
    false,
    false,
    true,
  ];
  var b;
  for (b = 0; b < 16; b++) {
    if (dealer == d[b] && nsVul == ns[b] && ewVul == ew[b]) {
      setBoardNumber(b + 1);
      break;
    }
  }
}

function vulDivClicked() {
  if (!isEditor) {
    return;
  }
  if (nsVul && ewVul) {
    setVul('0');
  } else if (nsVul) {
    setVul('E');
  } else if (ewVul) {
    setVul('B');
  } else {
    setVul('N');
  }
  boardNumberFromDealerAndVul();
}

function newDeal() {
  setupEditor(true);
  moveEditorCardImages();
}

function enableNewButton() {
  disableButton(
    'new',
    !howManyCards[0] && !howManyCards[1] && !howManyCards[2] && !howManyCards[3]
  );
}

function resetLessonScores() {
  vugraphScoreReceived = true;
  teamNS = 'Tricks:';
  teamEW = 'Score:';
  scoreNS = 0;
  scoreEW = 0;
  lessonBoardNumber = 0;
  dealsInLesson = 2;
  gameOverState = false;
  setKibitzed('S');
}

function showVul() {
  if (playingClient) {
    return false;
  }
  return true;
}

function showBonus(title, bonus) {
  showTransientAnnouncement('<center>' + title + '<br>' + bonus + '&nbsp;Points!<center>', 5);
  scoreEW += bonus;
  manageScoreDiv();
}

function maybeMakeLessonBid(level, strain) {
  if (playingClient && whosTurn == 0 && getLessonContractPhase == 0) {
    processLinCommand('MB', '' + level + suitchars.charAt(strain));
    if (bidSeqPoint >= -1) {
      bidSeqPoint--;
      next();
    }
    sendMessageToServer(
      '<cs_make_bid bid="1N" explanation="" alert="N" context_ID="' +
        contextID +
        '" table_ID="' +
        myTableID +
        '"/>'
    );
  }
}

function mainDivClicked() {
  if (dealEndState) {
    readyForNextDeal();
  }
}

function editorNewButtonClicked() {
  showEditorMenu(true);
}

function editorHVLButtonClicked() {
  var url;
  if (editorType == 'F') url = '';
  else url = 'https://www.bridgebase.com/tools/handviewer.html?';
  var seat, suit, card;
  var firstParam = true;
  var param;
  var i;

  var rows = 1;
  var columns = 1;
  var includeAuction = showAuction() && bidSeqMax >= 0;

  if (numHandsShowing == 1) {
    if (includeAuction) {
      rows++;
    }
  } else if (numHandsShowing == 2) {
    if (handShowing[0] && handShowing[2]) {
      rows++;
      if (includeAuction) {
        columns++;
      }
    } else if (handShowing[1] && handShowing[3]) {
      columns++;
      if (includeAuction) {
        rows++;
      }
    } else {
      rows++;
      columns++;
    }
  } else if (numHandsShowing > 0) {
    rows = 3;
    columns = 3;
  }

  for (seat = 0; seat < 4; seat++) {
    if (handShowing[seat]) {
      param = seats[seat].charAt(0).toLowerCase() + '=';
      for (suit = 3; suit >= 0; suit--) {
        param += suitchars.charAt(suit).toLowerCase();
        for (card = 12; card >= 0; card--) {
          if (deck[suit][card] == seat || deck[suit][card] == seat - 4) {
            param += cardchars.charAt(card).toLowerCase();
          }
        }
      }
      if (firstParam) {
        if (picturesOfCards) {
          url += 'pc=y';
        } else {
          url += 'pc=n';
        }
        url += '&' + param;
        firstParam = false;
      } else {
        url += '&' + param;
      }
    }
  }
  if (includeAuction) {
    param = 'd=' + seats[dealer].charAt(0).toLowerCase();
    if (firstParam) {
      url += param;
      firstParam = false;
    } else {
      url += '&' + param;
    }

    param = 'v=';
    if (nsVul && ewVul) {
      param += 'b';
    } else if (nsVul) {
      param += 'n';
    } else if (ewVul) {
      param += 'e';
    } else {
      param += '0';
    }
    url += '&' + param;
    url += '&b=' + boardNum;

    param = 'a=';
    var bsp;
    for (bsp = 0; bsp <= bidSeqMax; bsp++) {
      if (levelBid[bsp] == 0) {
        param += callchars.charAt(strainBid[bsp]).toLowerCase();
      } else {
        param += '' + levelBid[bsp] + suitchars.charAt(strainBid[bsp]).toLowerCase();
      }
      if (callExplanation[bsp]) {
        var alertText = callExplanation[bsp];
        for (i = 0; i < alertText.length; i++) {
          if (alertText.charAt(i) == '(') {
            alertText = alertText.replace('(', '[');
          } else if (alertText.charAt(i) == ')') {
            alertText = alertText.replace(')', ']');
          }
        }
        param += '(' + encodeURIComponent(alertText) + ')';
      }
    }
    url += '&' + param;
  }
  if (playSeqMax > 0) {
    param = 'p=';
    var psp = 0;
    var t, it;
    for (t = 0; t < 13; t++) {
      if (playSeqMax < psp) {
        break;
      }
      for (it = 0; it < 4; it++) {
        psp++;
        if (playSeqMax < psp) {
          break;
        }
        param +=
          suitchars.charAt(suitPlayed[t][it]).toLowerCase() +
          cardchars.charAt(rankPlayed[t][it]).toLowerCase();
      }
    }
    url += '&' + param;
    if (tricksClaimed >= 0) {
      url += '&c=' + tricksClaimed;
    }
  }

  var comments = commentsEdit.value;
  if (comments) {
    var pattern = new RegExp('\n', 'gi');
    comments = comments.replace(pattern, '<br>');

    if (editorType == 'F') {
      comments = insertSuitHTML(comments, true);
    } else {
      comments = insertSuitHTML(comments);
      comments = encodeURIComponent(comments);
      url += '&i=' + comments;
    }
  }

  if (editorType == 'F') {
    parent.generation_complete(url, columns, rows, comments);
  } else {
    window.open(
      url,
      '',
      'location=yes, directories=no, status=no, menubar=no, scrollbars=no, resizable=yes'
    );
  }
}

function initEditorMenu() {
  biddingCheck.checked = true;
  dealers[2].checked = true;
  vuls[0].checked = true;
  var seat;
  for (seat = 0; seat < 4; seat++) {
    hands[seat].checked = true;
    if (seat != 2) {
      dealers[seat].checked = false;
    }
    if (seat != 0) {
      vuls[seat].checked = false;
    }
  }
  editorMenuBiddingChanged(false);
}

function editorMenuCreateClicked() {
  var param = '';
  var seat;
  var seats = 'SWNE';
  var vulchars = '0BNE';
  for (seat = 0; seat < 4; seat++) {
    if (hands[seat].checked) {
      param += seats.charAt(seat);
    }
  }
  if (param.length == 3) param += ' ';
  if (biddingCheck.checked) param += 'A';
  if (param.length == 5) param = '';

  var displayType = param;
  setDisplayType(displayType);
  clearDeck();
  showEditorMenu(false);
  if (biddingCheck.checked) {
    var vul;
    for (vul = 0; vul < 4; vul++) {
      if (vuls[vul].checked) {
        setVul(vulchars.charAt(vul));
        break;
      }
    }
    for (seat = 0; seat < 4; seat++) {
      if (dealers[seat].checked) {
        setDealer(seats.charAt(seat));
        break;
      }
    }
    boardNumberFromDealerAndVul();
  }

  setupEditor(false);
  respondToResize();
}

function editorMenuBiddingChanged(editMade) {
  if (biddingCheck.checked && editorMenuShowing) {
    dealerTD.style.visibility = 'visible';
    vulTD.style.visibility = 'visible';
  } else {
    dealerTD.style.visibility = 'hidden';
    vulTD.style.visibility = 'hidden';
  }

  if (editMade) {
    editorMenuHandChanged();
  }
}

function editorMenuHandChanged() {
  var seat;
  for (seat = 0; seat < 4; seat++) {
    if (hands[seat].checked) {
      createButton.disabled = false;
      return;
    }
  }
  createButton.disabled = !biddingCheck.checked;
}

function help() {
  var display_setting = 'toolbar=no,location=no,directories=no,menubar=no,';
  display_setting += 'scrollbars=yes,width=auto, height=auto, left=100, top=25';
}

function newGameButtonClicked() {
  clearDeck();
  resetLessonScores();
  shuffle();
  showAll(true);
}

var soundEmbed = null;
function soundPlay(which) {
  if (soundEmbed) {
    document.body.removeChild(soundEmbed);
  }
  soundEmbed = document.createElement('embed');
  soundEmbed.setAttribute('src', 'CARDPLAY.mp3');
  soundEmbed.setAttribute('hidden', true);
  soundEmbed.setAttribute('autostart', true);
  soundEmbed.removed = false;
  document.body.appendChild(soundEmbed);
}

function documentLoaded() {
  if (isEditor) {
    initEditorMenu();
    manageStatusDiv();
  }
  setTimeout('respondToResize()', 10);
}

function safeDecode(param) {
  try {
    return decodeURIComponent(param);
  } catch (e) {
    if (e instanceof URIError) {
      return unescape(param);
    } else {
      return param;
    }
  }
}
