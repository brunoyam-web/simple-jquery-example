$(function() {
	$.ajax({
		url: 'https://jsonplaceholder.typicode.com/users', /* Куда отправить запрос */
		method: 'get',             /* Метод запроса (post, get...) */
		dataType: 'json',          /* Тип данных в ответе (xml, json, script, html). */
		success: function (data){   /* функция которая будет выполнена после успешного запроса.  */
			 console.log(data); 
			 data.forEach((user, ind) => {
				console.log(ind)
				$('body > section.feedback > div > div').append(`
					<div class="col-4">
						<div class="feedback-card">
							<div class="feedback_person">
								<div class="card-image">
									<div class="image-mock"></div>
								</div>
								<p class="feedback_name">
									${user.name}
								</p>
							</div>
							<div class="feedback_info">
								<p class="feedback_text">
									Компания: ${user.company.name}
								</p>
							</div>
						</div>
					</div>
				`)
			 });
		}
	});
	$('.hamburger').click(function() {
		$('.hamburger__btn').toggleClass('hamburger__btn_active');
		$('.menu').toggleClass('d-none').toggleClass('menu_openned');
		$('.menu-overlay').toggleClass('menu-overlay_active');
	})
	
});