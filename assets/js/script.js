var textHour = 9;
var textSuffix = ":00 AM";
var plannerEl = document.querySelector(".container");

var storedBlocks = [];
var storedBlocks_NAME = "Stored Blocks";

var displayDate = function() {
    var date = moment().format('dddd, MMMM Do, YYYY')
    $('#counter').html(date);
};

var setColor = function() {
    
};

var generateTimeBlock = function(iterations) {
    if(!iterations)
    {
        iterations = 1;
    }

    var currentTime = getCurrentHour("LT");

    for(var i = 0; i < iterations; i++)
    {
        var textTime = textHour + textSuffix;

        var iBlockEl = document.createElement("div");
        iBlockEl.classList = "time-block row";
        
        var iTimeTextEl = document.createElement("h5");
        iTimeTextEl.textContent = textTime;

        var iTimeDivEl = document.createElement("div");
        iTimeDivEl.classList = "hour col-2";
        iTimeDivEl.appendChild(iTimeTextEl);

        var iTextEl = document.createElement("textarea");
        iTextEl.classList = "description col-9";
        iTextEl.setAttribute("id", textTime);

        setColor(iTextEl, currentTime, textTime);

        var iSaveBtnEl = document.createElement("button");
        iSaveBtnEl.textContent = "Save";

        var iSaveDivEl = document.createElement("div");
        iSaveDivEl.classList = "col-1 saveBtn";
        iSaveDivEl.appendChild(iSaveBtnEl);

        iBlockEl.appendChild(iTimeDivEl);
        iBlockEl.appendChild(iTextEl);
        iBlockEl.appendChild(iSaveDivEl);

        plannerEl.appendChild(iBlockEl);
    
        incrementTextHour();
    }
};

var incrementTextHour = function() {
    if(textHour === 12) {
        textHour = 1;
    } 
    else if(textHour === 11) {
        textSuffix = ":00 PM";
        textHour++;
    }
    else {
        textHour++;
    }
};

var getCurrentHour = function(pFormat) {
    var time = moment().format(pFormat).toLowerCase();
    time = time.split("");
    var suffix = "";
    var hour = parseHour(time);

    console.log(hour);

    if(time[time.length - 2] === "p")
    {
        console.log("afternoon");
        suffix = ":00pm";
    }
    else
    {
        console.log("morning");
        suffix = ":00am";
    }

    console.log(hour + suffix);
    return hour + suffix;
};

var parseHour = function(pTime) {
    var i = 0;
    var iHour = "";

    while(pTime[i] !== ":" || i > 100) {
        iHour += pTime[i];
        i++;
    }

    return iHour;
};

displayDate();
generateTimeBlock(9);