var page = 1;
var win = Titanium.UI.currentWindow;
var tableView = Titanium.UI.createTableView();
var scrollView = Titanium.UI.createScrollView({ 

});

var scrollableView = Titanium.UI.createScrollableView({
	views:[scrollView],
	showPagingControl:true,
	pagingControlColor: "#fff",
	showVerticalScrollIndicator: true,
});
 
var scrollWindowHeight = scrollView.height

var scrollPosition = 0;

function scrollListener(evt) {
	scrollPosition = evt.y;
}

function scrollListener2(evt) {
	scrollPosition = evt.y;
}

function SayHello() {
    alert('Hello, world!');
}

function releaseListener(evt) {
	console.log(scrollPosition)
	if (scrollPosition >= ((tableView.size.height) - 490) ) {
		console.log(page);
		loadArticles(page + 1);
		page++;
		scrollPosition = 0;
		scroll2 = tableView.addEventListener('touchmove', scrollListener2);
	} else {
		scrollPosition = 0;
	}
}

var scroll1 = scrollableView.addEventListener('scroll', scrollListener);
var drag1 = scrollableView.addEventListener('dragEnd', releaseListener);

var sec1 = Titanium.UI.createTableViewSection();
var sec2 = Titanium.UI.createTableViewSection();
var windows = [];
var data = [];
var oldData = [];
var newData = [];

function loadArticles(page) {
  
  // Create new HTTP Client
  var loader = Titanium.Network.createHTTPClient();

  loader.open("GET", "http://otsikot.giggifer.fi/api/otsikot?page="+page);
  
  // Runs the function when the data is ready for us to process  
	loader.onload = function(page) {
		
		var articles = eval('('+this.responseText+')');	
		
		for (var i = 0; i < articles.length; i++) {   
		    var header  = articles[i].title; 
		    //var body   = articles[i].body; 
		    var guid = articles[i].guid;
		    var url = articles[i].url;
		    var site = articles[i].site;
		    
		    var row = Titanium.UI.createTableViewRow({height:60});
		    
		    var article_view = Titanium.UI.createView({
				height:40, 
				layout:'vertical',
				top:5,
				right:5,
				bottom:5,
				left:5
			});
			/*
			var av_image = Titanium.UI.createImageView({
				//url:site +".jpg", // the image for the image view
				top:0,
				left:0,
				height:48,
				width:48
			}); */
			
			//article_view.add(av_image);
			
			// Create the label to hold the Header
			var article_header = Titanium.UI.createLabel({
				text:header,
				left:5,
				width:260,
				top:10,
				bottom:2,
				height:16,
				textAlign:'left',
				color:'#111',
				font:{fontFamily:'Helvetica Neue',fontSize:12,fontWeight:'bold'}
			});
			article_view.add(article_header);
			
			// Create the label to hold the body
			var body_lbl = Titanium.UI.createLabel({
				text: site,
				left:5,
				color: "#ff3c00",
				top:0,
				bottom:2,
				height:'auto',
				width:236,
				textAlign:'left',
				font:{fontSize:10}
			}); 
			article_view.add(body_lbl)
			row.add(article_view);
			
			row.className = "item"+i;
			
			sec2.add(row);
			
		} // Loop ends
		
	
		// Create the table view and set its data source to "rowData" array
		data[0] = sec1;
		data[1] = sec2;

		tableView.data = data;
		
		//Add the table view to the window
		scrollView.add(tableView);
		win.add(scrollableView);
		
	};  
 
	// Send the HTTP request   
	loader.send();  
}

loadArticles();