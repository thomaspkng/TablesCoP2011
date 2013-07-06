function formatcheck() {
	xx= document.getElementById("nin");
	alert(xx.value);
	if (xx.value=="") {alert("empty");}
	}
function loadxml() {
//	alert("started");
	tablename = "./88a.xml";
	SteelGrade = "S275";
	yieldStress = "py275";
	lu = "110";
	xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET","88a.xml",false);
	xmlhttp.send();
/*
xmlhttp.onreadystatechange=function() {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {    alert("load OK");    }
  }	
*/	
	xmlDoc=xmlhttp.responseXML; 
// if (xmlDoc) { alert("DIE");}
	xStGr = xmlDoc.getElementsByTagName(SteelGrade);
//	alert(xStGr.length);
	xpy = xStGr[0].getElementsByTagName(yieldStress);
//	alert(xpy.length);
	xData = xpy[0].getElementsByTagName("data");
	xDataLEN = xData.length;
//	alert(xDataLEN); 
	for (i=0;i<xDataLEN;i++) {
			if (xData[i].getElementsByTagName("llt")[0].childNodes[0].nodeValue == lu) {
//			alert("match");
			ulText = "Upper Bound : " + xData[i].getElementsByTagName("pc")[0].childNodes[0].nodeValue;
			document.getElementById("ul").innerHTML = ulText;
			}
		}
	}
function divchg(divshow) {
	$("#tableselect").hide();
	$("#t83a").hide(120);
	$("#t83b").hide(120);
	$("#t88a").hide(120);
	$("#t88b").hide(120);
	$("#t88c").hide(120);
	$("#t88d").hide(120);
	$("#t87").hide(120);
	$("#"+divshow).show(350);
	}
function init() {
	$(document).ready(function(){
		divchg("tableselect");
		wW = document.innerWidth;
	  	$("#mainscreen").css('width', wW);
		});
	}
