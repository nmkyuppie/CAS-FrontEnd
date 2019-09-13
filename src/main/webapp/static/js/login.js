var baseURL = "http://localhost:8080";
$('#errorMessage').hide();


var validateUser = function(){
	$('#errorMessage').hide();
	var userName = $('#userName').val();
	var password = $('#password').val();
	let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Origin','http://localhost:8080');
	$.ajax({
		type : "GET",
		contentType : "application/json",
		url : baseURL+"/login?userName="+userName+"&password="+password,
		dataType : 'json',
		timeout : 100000,
		headers : headers,
		success : function(data) {
			$('#errorMessage').text(data.errorMessage);
			$('#errorMessage').show();
			if(data.result != null){
				window.location.href = "home";
			}
		},
		error : function(err) {
			
		}

	});
}