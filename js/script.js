(function($){
	$(function(){
		$('#winerProig').css({
			display: 'none'
		});
		var sec60 = 60;
		
		//setTimeout(function(){
			$('.info_users').click(function(e){
				e.preventDefault();
				var name_user = $("[name='name_user']").val();
				setCookie('name_user', name_user, 1);
			})

			if(getCookie('name_user')!=''){
				
				//name_user = $('#info_users input[name="name_user"]').val();
				//$('.nameUser').text(document.cookie = name_user);
				$('#info_users input[name="name_user"]').hide();
				//$('#info_users input[name="name_user"]').val(document.cookie = name_user);
				//alert( document.cookie = name_user);
			}
		//});

			

		$('#info_users a').click(function(e){
			e.preventDefault();
			name_user = $('#info_users input[name="name_user"]').val();

			var secyr = /^[А-Яа-я]{2}/
			if(secyr.test(name_user)) {
				$('.nameUser').text(name_user);
				var h = '0'+0;
				var m = '0'+0;
				var s = '0'+0;
				setInterval(function(){
					s++;
					s<10?s='0'+s:s;
					if(s>=60){
						m++;
						s='0'+0;
						m<10?m='0'+m:m;
					} if (m>=60){
						h++;
						m='0'+0;
					}
					$('.time').text(h+':'+m+':'+s);
				},1000);
				$('#info_users').animate({
					top : '500px',
					opacity : 0,
					display : 'none',
				},500, function(){
					$('#info_users').remove();
				});
				$('#game').animate({
					top : 0,
					opacity : 1
				},800,function(){
					var no_umor = Math.round(Math.random()*5);
					var umor = [
					'А сколько вы хотите выиграть-то?',
					'Становится только хуже (((',
					'Четвертого раза обычно не бывает',
					'Просто продолжайте.',
					'А некоторые, бывает, выигрывают ;)',
					'Мне повезет!',
					'Еще раз — и до послезавтра.'
					];
					alert(umor[no_umor]);
				});
				
		inter = setInterval(function times (){

			if(sec60<0){
				alert('Вы проиграли!');
				$('#game').animate({
					top: '-500px',
					opacity: 0
				},800,function(){
					$(this).remove();
					clearInterval(inter);
				});
			} else {
				$('#time_vop').text(sec60);
				
			};sec60--;
		},1000);
			} else {
				alert('Проверьте ввод!');
			}
		});
		

		var quest_all = [
		'Что из этого не является косметическим средством?',
		'Кто, в конце концов, скушал Колобка?',
		'Какой шахматной фигуры не существует?',
		'Что означает буква «О» в аббревиатуре ОРТ?',
		'Главный герой в романе Ф. И. Достоевского «Преступление и наказание»',
		'В состав любого органического вещества входит…',
		'Какое слово здесь лишнее?',
		'Как назывался самый младший гражданский чин, присваивавшийся согласно Табели о рангах?',
		'Кто изобрел громоотвод?',
		'Как в России в 15-17вв. назывались феодально-зависимые люди, не имевшие своего хозяйства, жившие и работавшие во дворах крестьян или посадских людей?',
		'В каком городе находится штаб-квартира Microsoft?',
		'При каком правителе к России была присоединена территория Финляндии?',
		'Ричард Львиное Сердце был пленен во время',
		'Известно, что в кириллице многие буквы имели и цифровое значение. Чему равна буква К (како)?',
		'Кто такой «молотоглав»?'
		];
		var quest_otv = [
		'Дед', 'Баба', 'Заяц', 'Лиса',
		'Пешка', 'Конь', 'Король', 'Дама',
		'Олигархическое', 'Объективное', 'Общественное', 'Однообразное',
		'Расторгуев', 'Чикатило', 'Тумбочкин', 'Раскольников',
		'кислород', 'углерод', 'водород', 'азот',
		'Автор', 'Товар', 'Отвар', 'Ворот',
		'Синодский регистратор', 'Провинциальный секретарь', 'Коллежский регистратор', 'Кабинетский регистратор',
		'Франклин', 'Рузвельт', 'Вашингтон', 'Линкольн',
		'Дворовые', 'Захребетники', 'Нахлебники', 'Бестягольные',
		'Нью-Йорк', 'Ричмонд', 'Новый Орлеан', 'Сиэтл',
		'Петр I', 'Екатерина II', 'Павел I', 'Александр I',
		'крестового похода', 'столетней войны', 'войны алой и белой розы', 'войны за независимость',
		'10', '20', '70', '90',
		'Рыба', 'Птица', 'Змея', 'Насекомое'
		];
		var keys = [1,3,3,2,3,1,3,2,0,1,1,3,0,1,1];
		var coint = 0;
		var counter_quest = -1;
		var counter = 1;
		$('#game_quest .quest .otv').click(function(e){
			e.preventDefault();
			var attr = $(this).attr('alt');
			if(attr==keys[coint]){
				if(counter==5 || counter==10){
					var test = parseInt($('.elevation_'+counter+' td:eq(1)').text());
					$('#winerProig .prize').text(test);
				} if(counter==15){
				var test = parseInt($('.elevation_'+counter+' td:eq(1)').text());
				$('#winerProig .prize').text(test);
				$('#winerProig .misce').text('Поздравляем, Вы победили');
				$('#winerProig').show(500);
				$('#game').animate({
					top: '-500px',
					opacity: 0
				},800,function(){
					$(this).remove();
				});
			}
				coint++;
				$('#gain table .elevation_'+counter+'').removeClass('level');
				counter++;
				$('#gain table .elevation_'+counter+'').addClass('level');
				$('#game_quest .quest p').text(quest_all[coint]);
				sec60 = 59;
				
				for(var i=0;i<$('.quest a').length; i++){
					counter_quest++;
					$('.quest a:eq('+i+')').text(quest_otv[counter_quest]);
					$('.quest a:eq('+i+')').css({
						background: 'none'
					});
					$('.quest a:eq('+i+')').hover(function(){
						$(this).css({
							background: '#3a79e0'
						});
					}, function(){
						$(this).css({
							background: 'none'
						});
					})
				};
			} else {
				alert('Вы проиграли!');

				$('#game').animate({
					top: '-500px',
					opacity: 0
				},800,function(){
					$(this).remove();
				});
				$('#winerProig').show(500);
				$('#winerProig .misce').text('Вы проиграли');
			};
		});
		$('.50_50').click(function(e){
			e.preventDefault();
			if($(this).attr('disabled')){
				alert('Можно было использовать только один раз за игру!');
			} else {
				$(this).css({
				background: '#ddd',
				color: '#3a79e0'
			});
			do{
				var randomize = Math.round(Math.random()*3);
			}while(randomize==keys[coint])
			$('.quest a:eq('+keys[coint]+')').css({
				background: '#3a79e0'
			});
			$('.quest a:eq('+randomize+')').css({
				background: '#3a79e0'
			});
			$(this).attr('disabled', true);
			}
		});

		$('.zale').click(function(e){
			e.preventDefault();
			if($(this).attr('disabled')){
				alert('Можно было использовать только один раз за игру!');
			} else {
				$(this).css({
					background: '#ddd',
					color: '#3a79e0'
				});
				$('.quest a:eq('+Math.round(Math.random()*3)+')').css({
					background: '#3a79e0'
				});
				$(this).attr('disabled', true);
			}
		});

		$('.drug').click(function(e){
			e.preventDefault();
			if($(this).attr('disabled')) {
				alert('Можно было использовать только один раз за игру!');
			} else {
				$(this).css({
					background: '#ddd',
					color: '#3a79e0'
				});
				var drug_otv = $('.quest a:eq('+Math.round(Math.random()*3)+')').text();
				alert('Друг думает, что это - ' + drug_otv);
				$(this).attr('disabled', true);
			}
		});

		$('.exit').click(function(e){
			e.preventDefault();
			$('#winerProig').show(500);
			$('#winerProig .misce').text('Вы проиграли');
			if(counter==5 || counter==10){
					var test = parseInt($('.elevation_'+counter+' td:eq(1)').text());
					$('#winerProig .prize').text(test);
				}
			$('#game').animate({
				top: '-500px',
				opacity: 0
			},800,function(){
				$(this).remove();

			});
		})


		function setCookie(name,value,days=0){
			var cook = name + '=' + value;
			if(days!=0){
				var now = new Date();
				now.setDate(now.getDate()+days);
				cook += ';expires=' + now.toUTCString();
			}
			document.cookie = cook;
		}


		function deleteCookie(name){
			setCookie(name, '', -1);
		}

		function getCookie(name){
			var cookies = document.cookie;
			var result = '';
			if(cookies!='') {
				cookies = cookies.split('; ');
				for(var i=0;i<cookies.length;i++){
					var cook = cookies[i].split('=');
					if(cook[0]==name) {
						result = cook[1]
					}
				}
			}
			return result;
		}






	});
})(jQuery);