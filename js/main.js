$(document).ready(function(){
	whichway = "left";
	moveKarelLeft();
	setInterval(shouldPlaceBall, 3000);
	$(".mainbtn").each(function(){
		$(this).fadeIn(1000);
	});
});

function moveKarelLeft(){
	firstdocwidth = $(document).width();
	docwidth = firstdocwidth + 100;
	whichway = "right";
	$("#karel").animate({left:firstdocwidth}, 8000, function(){detKarelPos();});
}

function moveKarelRight(){
	firstdocwidth = $(document).width();
	docwidth = firstdocwidth - 100;
	whichway = "left";
	$("#karel").animate({left:-100}, 8000, function(){detKarelPos();});



}

function shouldPlaceBall(){
	randnumb = Math.floor((Math.random() * 5) + 1);
	console.log(randnumb);
	if(randnumb === 2 || randnumb === 4){
		placeBall();
		console.log("placed numb " +randnumb);
	}

}
function placeBall(){
	karelbot = $("#karel").css("bottom");
	karelleft = $("#karel").css("left");
	$("body").append("<div class='karelball' style='left:"+karelleft+";bottom:"+karelbot+";'></div>");

}

function detKarelPos(){
	docheight = $(document).height();
	karelbot = $("#karel").css("bottom");
	karelleft = $("#karel").css("left");
	kareltruebot = karelbot.replace("px","");

	newkarelbot = eval(kareltruebot) + 100;
	//$("#karel").css("bottom", newkarelbot+"px");
	if (whichway == "left"){
	
		if (eval(kareltruebot) > docheight){
		console.log("yo!");
		$("#karel").attr('style', '');
		moveKarelLeft();
		}
		else{
		$("#karel").attr('style', 'left:'+karelleft+';bottom:'+newkarelbot+'px');
		moveKarelLeft();
		}
	}
	else{
	
		if (eval(kareltruebot) > docheight){
		console.log("yo!");
		$("#karel").attr('style', 'left:-100px;bottom:0px');
		moveKarelLeft();
		}
		else{
		$("#karel").attr('style','-moz-transform: scaleX(-1); -o-transform: scaleX(-1); -webkit-transform: scaleX(-1); transform: scaleX(-1); filter: FlipH; -ms-filter: "FlipH";left:'+karelleft+';bottom:'+newkarelbot+'px');
		moveKarelRight();
		}
	}
}

