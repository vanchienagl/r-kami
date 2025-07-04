(function ($, window, undefined) {

	Main = function () {
		var s = this;

		this.$root = document.documentElement;
		this.$win = $(window);
		this.$body = $('body');
		this.$header = $('.header');
		this.headerH = this.$header.height();
		this.$col = $('.col');
		this.lsKey = 'rinku_easter_2025';
		this.curPage = 'question';
		this.expires = 59;
		this.baseDelay = 0;
		this.foundKwsAmount = 0;
		this.foundKwsArr = {
			'global': {
				'exchangedFlg': false,
				'gtmPushFlg': false
			},
			0: {
				'counter': 0,
				'foundFlg': false
			},
			1: {
				'counter': 0,
				'foundFlg': false
			},
			2: {
				'counter': 0,
				'foundFlg': false
			}
		};

		this.swiperArr = {};

		window.addEventListener('load', () => {
			s.init();
		});
	};

	Main.prototype = {

		init: function () {
			var s = this,
			lsData = Cookies.get(this.lsKey);

			if (lsData) {
				this.foundKwsArr = JSON.parse(lsData);
				for (var key in this.foundKwsArr) {
					if (key !== 'global') {
						if (this.foundKwsArr[key]['foundFlg']) {
							this.baseDelay = 1000;
							this.foundKwsAmount++;
							this.showChar(key);
						}
					}
				};
			};


			$('.swiper').each((i, el) => {
				s.swiperArr[`swiper-${i}`] = new Swiper($(el)[0], {
					init: false,
					loop: true,
					speed: 300,
					autoplay: false,
					slidesPerView: 1,
					slidesPerColumn: 1,
					spaceBetween: 10,
					centeredSlides: true,
					direction: 'horizontal',
					effect: 'slide',

					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
					}
				});

				s.swiperArr[`swiper-${i}`].init();
				s.swiperArr[`swiper-${i}`].on('slideChange', () => {
					$('.hint_txt').find('p').removeClass('is-on');
					$('.hint_txt').find(`.hint_txt-${s.swiperArr[`swiper-${i}`].realIndex + 1}`).addClass('is-on');
				})
			});


			$('html, body').animate({ scrollTop: 0 }, 0, 'swing');

			if (document.readyState === "loading") {
				document.addEventListener("DOMContentLoaded", () => {
					s.onLoad();
				});
			} else {
				s.onLoad();
			}

			s.$win.on('resize', $.proxy(s.onResize, s));
		},

		removeLocalStorage() {
			Cookies.remove(this.lsKey, { path: '' });
		},

		writeLocalStorage() {
			this.removeLocalStorage();
			Cookies.set(this.lsKey, JSON.stringify(this.foundKwsArr), { expires: this.expires, path: '' });
		},

		checkKw: function (kw) {
			var s = this
				, correctKws = ['hint1', 'hint2', 'hint3'],
				result = -1;

			for (var i = 0, len = correctKws.length; i < len; i++) {
				if (correctKws[i] === kw) {
					result = i;
				}
			}
			return result;
		},

		showChar: function (j) {
			const s = this,
			$target = $('.kw-' + j).add('.map_clear-' + j);

			if (s.foundKwsArr[j]['counter'] < 1) {
				s.swiperArr[`swiper-0`].slideTo(j + 1);
				setTimeout(function () {
					$('.kw-' + j).each((k, el3) => {
						$(el3).addClass('is-on');
						$('.map_clear-' + j).addClass('is-on');
					});
				}, s.baseDelay + 300);
				s.foundKwsArr[j]['counter']++;
				s.writeLocalStorage();
			} else {
				$target.addClass('is-already');
			};

		},

		onLoad: function () {
			const s = this;

			s.onResize();
			s.fallingEggs();
			setTimeout(() => {
				s.checkFoundKwsArr();
			}, 2400);
		},


		onResize: function () {
			this.headerH = this.$header.height();
			this.$root.style.setProperty('--headerH', this.headerH + 'px');
		},


		checkFoundKwsArr: function () {
			var s = this,
			checkKwResult = -1;

			if (location.search) {
				var search = location.search;
				search = search.replace('?', '').split('&');
				for (var i = 0, len = search.length; i < len; i++) {
					if (search[i].match(/^utm_source=/)) {
						var checkKw = this.checkKw(search[i].replace('utm_source=', ''));

						if (checkKw > -1 && !this.foundKwsArr[checkKw]['foundFlg']) {
							checkKwResult = checkKw;
							this.foundKwsAmount++;
							this.foundKwsArr[checkKw]['foundFlg'] = true;
							this.writeLocalStorage();
						};
					}
				}
			};

			if (s.foundKwsAmount === 2) {
				setTimeout(function () {
					s.curPage = 'question';
					s.question(checkKwResult);
				}, 300);
			} else if (s.foundKwsAmount === 3) {
				if (s.foundKwsArr['global']['exchangedFlg']) {
					s.$col.removeClass('is-on');
					$('.exchanged').addClass('is-on');
					setTimeout(function () {
						s.curPage = 'exchanged';
						s.exchanged();
					}, 300);
				} else {
					setTimeout(function () {
						s.answer(checkKwResult);
					}, 300);
				}
			} else if (s.foundKwsAmount === 1 || checkKwResult > -1) {
				setTimeout(function () {
					s.curPage = 'question';
					s.question(checkKwResult);
				}, 300);
			} else {
				$('.question').addClass('is-on');
				$('.question_inr').addClass('is-on');
			};

			setTimeout(() => {
				s.$body.addClass('is-on');
				$('.mv').addClass('is-on');
			}, 300);
		},

		question: function (checkKwResult) {
			var s = this, 
			$target = $('.' + s.curPage), 
			timeout = 800;

			$target.addClass('is-on');
			$('.question_inr').addClass('is-on');
			setTimeout(function () {
				$('html, body').animate({ scrollTop: $target.find('.hint-1').offset().top - ($('.header--center-under').outerHeight() * 2) }, 400, 'swing');
				s.baseDelay = timeout;
				if (checkKwResult > -1) {
					s.showChar(checkKwResult);
				};
			}, timeout);

		},

		answer: function (checkKwResult) {
			var s = this, 
			$target = $('.question'), 
			$btn = $('.answer').find('.exchange_btn').find('a'), 
			timeout = 800;

			if (checkKwResult > -1) {
				s.curPage = 'question';
				$target.addClass('is-on');
				$('.question_inr').addClass('is-on');
				setTimeout(function () {
					$('html, body').animate({ scrollTop: $target.find('.hint-1').offset().top - ($('.header--center-under').outerHeight() * 2) }, 400, 'swing');
					s.showChar(checkKwResult);
					setTimeout(function () {
						$target.removeClass('is-on');
						s.curPage = 'answer';
						$target = $('.' + s.curPage);
						$target.addClass('is-on');
						if (!s.foundKwsArr['global']['gtmPushFlg']) {
							s.foundKwsArr['global']['gtmPushFlg'] = true;
							s.writeLocalStorage();
							if (window.dataLayer) {
								dataLayer.push({
									event: 'qr_campaign',
									blocks_event_category: 'rpo_easter_2025',
									blocks_event_action: 'click',
									blocks_event_label: 'complete'
								});
								// console.log(dataLayer);
							}
						};
						setTimeout(function () {
							$('html, body').animate({ scrollTop: $target.find('.complete').offset().top - ($('.header--center-under').outerHeight() * 2) }, 400, 'swing', function () {
								$target.find('.complete').addClass('is-on');
								$target.find('.answer_inr').addClass('is-on');
							});
						}, 600);
					}, 3000);
				}, timeout);
			} else {
				s.curPage = 'answer';
				$target = $('.' + s.curPage);
				$target.addClass('is-on');
				setTimeout(function () {
					$('html, body').animate({ scrollTop: $target.find('.complete').offset().top - ($('.header--center-under').outerHeight() * 2) }, 400, 'swing', function () {
						$target.find('.complete').addClass('is-on');
						$target.find('.answer_inr').addClass('is-on');
					});
				}, timeout);
			};

			$btn.on('click', function (e) {
				e.preventDefault();
				s.foundKwsArr['global']['exchangedFlg'] = true;
				s.writeLocalStorage();
				if (window.dataLayer) {
					dataLayer.push({
						event: 'qr_campaign', 
						blocks_event_category: 'rpo_easter_2025', 
						blocks_event_action: 'click', 
						blocks_event_label: 'present'
					});
					// console.log(dataLayer);
				};
				s.curPage = 'exchanged';
				$target.removeClass('is-on');
				$('.exchanged').addClass('is-on');
				s.exchanged();
			});
		},

		fallingEggs: function () {
			const s = this, 
			density = 200, 
			$target = $('.fallingEggs'), 
			winH = s.$win.height();

			let html = '';

			for (let i = 0; i < density; i++) {
				const left = Math.random() * 101, 
				width = Math.random() * (40 - 10) + 10, 
				spd = (100 - width) / winH * 28, 
				zIndex = Math.floor(Math.random() * 101), 
				type = Math.ceil(Math.random() * 9), 
				delay = Math.random() * 0.6;

				html += `
					<div class="fallingEgg" style="left:${left}%;width:${width}%; z-index:${zIndex};transition:top ${spd}s ease-in-out ${delay}s, transform ${spd}s ease-in-out ${delay}s"><img src="/rinku/sp/easter/_assets/images/egg-${type}.png" alt=""></div>
				`;
			}
			
			$target.append(html);
			setTimeout(() => {
				$target.addClass('is-fall');
			}, 10);

		},

		exchanged: function () {
			var s = this, 
			$target = $('.' + s.curPage), 
			timeout = 800;

			setTimeout(function () {
				$('html, body').animate({ scrollTop: $target.find('.thanks').offset().top - ($('.header--center-under').outerHeight() * 2) }, 400, 'swing', function () {
					$target.find('.thanks').addClass('is-on');
				});
			}, timeout);
		}

	};

	window.Main = new Main();

	if (!window.console) { window.console = {}; window.console.log = function (str) { return str; }; }


})(jQuery, this);
try { document.execCommand('BackgroundImageCache', false, true); } catch (e) { };