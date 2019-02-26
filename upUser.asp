<!DOCTYPE html>
<html>
<%
Session.CodePage=65001 
Response.Charset="UTF-8"
%>
<body>
<%
	set conn=Server.CreateObject("ADODB.Connection")
	StrConn="Provider=SQLOLEDB;Data Source= bds121909660.my3w.com;User ID=bds121909660;Password=qimiamiGCKZ5079;Initial Catalog=bds121909660_db"
	Conn.open StrConn
	
	dim name,phone,email
	name = Request.Form("name")
	phone = Request.Form("phone")
	email = Request.Form("email")

	conn.execute "INSERT INTO userInfo (name, phone, email) VALUES ('"+name+"','"+phone+"','"+email+"')"
	
	conn.close
    set conn=nothing
	response.redirect "index.html"
%>
</body>
</html>