<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
	int flag = (Integer)request.getAttribute("auth");
	System.out.println( flag );
	out.println( "<script type='text/javascript'>" );
	if( flag == 0 ) {
		out.println("alert('메일 전송에 실패하였습니다.');");
		out.println("history.back();");
	} else if( flag == 1 ) {
		out.println("alert('메일이 전송되었습니다.');");
		out.println("location.href='/main.do';");
	}
	out.println( "</script>" );
%>