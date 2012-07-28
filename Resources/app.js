// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#EFEFEF');

// create tab group
//var tabGroup = Titanium.UI.createTabGroup();

//
// create base UI tab and root window
//
var mainWin = Titanium.UI.createWindow({  
    title:'Otsikot',
    backgroundColor:'#EFEFEF',
    url: "otsikot.js",
    backgroundColor: "#EFEFEF",
    barColor: "#ddd"
});

var feedTab = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Otsikot',
    window:mainWin
});

//
//  add tabs
//
//tabGroup.addTab(feedTab);  


// open tab group
//tabGroup.open();
mainWin.open();
