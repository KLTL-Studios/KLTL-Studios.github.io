function ShowDiv(divName)
{
	if	(document.layers) {
		document.layers[divName].visibility="visible"; 
	} else if (document.getElementById) {
		document.getElementById(divName).style.display="block";
		document.getElementById(divName).style.visibility="visible";
	} else if (document.all) {
		document.all(divName).style.display="block";
		document.all(divName).style.visibility="visible";	
	}
}
function HideDiv(divName) 
{
	if	(document.layers) {
		document.layers[divName].visibility="hidden"; 
	} else if (document.getElementById) {
		document.getElementById(divName).style.display="none";
		document.getElementById(divName).style.visibility="hidden";
	} else if (document.all) {
		document.all(divName).style.display="none";
		document.all(divName).style.visibility="hidden";	
	}
}
// show/hide IE6 when div-over'd. bug in IE6, select as system control.
function ShowSelect()
{
   if (navigator.appVersion.indexOf("MSIE 6.0")!=-1) {
      for (var i = 0; i < document.all.length; i++) {
      o = document.all(i);
      if (o.type == 'select-one') {
      if (o.style) o.style.visibility = 'visible';
      }
      if (o.type == 'select-multiple') {
      if (o.style) o.style.visibility = 'visible';
      }
      }
      RestoreLISSelect();
   }
}
function HideSelect()
{
   if (navigator.appVersion.indexOf("MSIE 6.0")!=-1) {
      for (var i = 0; i < document.all.length; i++) {
      o = document.all(i);
      if (o.type == 'select-multiple') {
      if (o.style) o.style.visibility = 'hidden';
      }
      if (o.type == 'select-one') {
      if (o.style) o.style.visibility = 'hidden';
      }
      }
      RestoreLISSelect();
   }
}
function RestoreLISSelect() 
{
   if (document.getElementById("dlSenators") == null) {
   }
   else {
   document.getElementById("dlSenators").style.visibility='';
   }
   if (document.getElementById("dlCommittees") == null) {
   }
   else {
   document.getElementById("dlCommittees").style.visibility='';
   }   
   if (document.getElementById("dlStatus") == null) {
   }
   else {      
   document.getElementById("dlStatus").style.visibility='';
   }
}

