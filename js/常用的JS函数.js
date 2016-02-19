// Js获取页面地址参数 

function getUrlPara(paraName) 
{ 
	var sUrl = location.href; 
	var sReg = "(?://?|&){1}" + paraName + "=([^&]*)" 
	var re = new RegExp(sReg, "gi"); 
	re.exec(sUrl); 
	return RegExp.$1; 
} 

// 地址跳转 

var pn = $("#gotopagenum").val();//#gotopagenum是文本框的id属性 
location.href = "NewList.aspx?pagenum="+pn;//location.href实现客户端页面的跳转 

// 千分位 

function Convert(money) 
{ 
var s = money; //获取小数型数据 
s += ""; 
if (s.indexOf(".") == -1) s += ".00"; //如果没有小数点，在后面补个小数点和00 
if (/\.\d$/.test(s)) s += "0"; //正则判断 
while (/\d{4}(\.|,)/.test(s)) //符合条件则进行替换 
s = s.replace(/(\d)(\d{3}(\.|,))/, "$1,$2"); //每隔3位添加一个 
return s; 
} 

// 判断是否数字

function IsNumeric(txt) { 
	if (txt == "") { 
		return false; 
	} 

	if (txt.indexOf(",") > 0) { 
		txt = txt.replace(",", ""); 
	} 

	if (isNaN(txt)) { 
		return false; 
	} 
	else { 
		return true; 
	} 
} 

// 将数字进行两位小数的格式化 


function changeTwoDecimal_f(x) { 
	var f_x = parseFloat(x); 
	if (isNaN(f_x)) { 
		alert('function:changeTwoDecimal->parameter error'); 
		return false; 
	} 
	f_x = Math.round(f_x * 100) / 100; 
	var s_x = f_x.toString(); 
	var pos_decimal = s_x.indexOf('.'); 
	if (pos_decimal < 0) { 
		pos_decimal = s_x.length; 
		s_x += '.'; 
	} 
	while (s_x.length <= pos_decimal + 2) { 
		s_x += '0'; 
	} 
	return s_x; 
} 

// Js 进行数字运算的函数 parseFloat parseInt 

// js 当前日期 yyyy-mm-dd 预置查询条件 


var now = new Date(); 
var year = now.getYear(); 

if (now.getYear() < 1900) { 
	year = now.getYear() + 1900; 
} 

var month = now.getMonth() + 1; 
var day = now.getDate(); 

if (month < 10) month = "0" + month; 
if (day < 10) day = "0" + day; 

$("#txtDate1").val(year.toString() + "-" + month.toString() + "-01"); 
$("#txtDate2").val(year.toString() + "-" + month.toString() + "-" + day.toString()); 

// Js 获取时间戳，在某些情景下代替Guid 

function NowTimeCode() 
{ 
	var Result=""; 
	var now = new Date(); 
	var year = now.getFullYear(); 
	if (now.getYear() < 1900) { 
		year = now.getYear() + 1900; 
	} 

	var month = now.getMonth() + 1; 
	var day = now.getDate(); 
	var hour = now.getHours(); 
	var minutes = now.getMinutes(); 
	var second = now.getSeconds(); 
	var millisecond = now.getMilliseconds(); 

	if (month < 10) month = "0" + month; 
	if (day < 10) day = "0"+ day; 
	if (hour < 10) hour = "0"+ hour; 
	if (minutes < 10) minutes = "0"+ minutes; 
	if (second < 10) second = "0"+ second; 

	if (millisecond < 10) 
		millisecond = "00"+ millisecond; 
	else 
	{ 
		if (millisecond < 100) 
		{ 
		millisecond = "0"+ millisecond; 
		} 
	} 

	Result = year.toString() + month.toString() + day.toString() + hour.toString() + minutes.toString() + second.toString() + millisecond.toString(); 
	return Result; 

} 
