
// ====== SOCIAL MEDIA - BUTTON
const p_btns = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");

p_btns.addEventListener("click", (e) => { 
	const p_btn_clicked = e.target;
	console.log(p_btn_clicked);

	p_btn.forEach((curElem) => curElem.classList.remove("p-btn-active"));
	p_btn_clicked.classList.add("p-btn-active"); 
});

// ======COUNTING NUMBERS OF DATA ========
function startCounting() {
	const counters = document.querySelectorAll('.counter-numbers');
	const speed = 500; // Change this to control the speed of the animation
	counters.forEach(counter => {
		const target = parseInt(counter.textContent, 10);
		let count = 0;
		const updateCount = () => {
			const inc = target / speed;
			if (count < target) {
				count += inc;
				const roundedCount = Math.min(Math.ceil(count), target);
				counter.textContent = `${roundedCount}+`;
				if (count < target) {
					setTimeout(updateCount, 10);
				}
			}
		};
		updateCount();
	});
}

function isElementInViewport(el) {
	const rect = el.getBoundingClientRect();
	return (rect.top <= window.innerHeight && rect.bottom >= 0);
}

let countingStarted = false;
let countingSection = document.querySelector('.section-work-data');

function checkCounting() {
	if (isElementInViewport(countingSection) && !countingStarted) {
		countingStarted = true;
		setTimeout(startCounting, 1000); // Delay for 1 second (1000 milliseconds)
	}
}
window.addEventListener('scroll', checkCounting);
// Initial check in case the section is already in the viewport on page load
checkCounting();


// ======ANIMATION OF MAIN DATA - AUTO TYPING =========
let TxtType = function(el, toRotate, period) {
	this.toRotate = toRotate;
	this.el = el;
	this.loopNum = 0;
	this.period = parseInt(period, 10) || 2000;
	this.txt = '';
	this.tick();
	this.isDeleting = false;
};

TxtType.prototype.tick = function() {
	let i = this.loopNum % this.toRotate.length;
	let fullTxt = this.toRotate[i];

	if (this.isDeleting) {
	this.txt = fullTxt.substring(0, this.txt.length - 1);
	} else {
	this.txt = fullTxt.substring(0, this.txt.length + 1);
	}

	this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

	let that = this;
	let delta = 200 - Math.random() * 100;

	if (this.isDeleting) { delta /= 2; }

	if (!this.isDeleting && this.txt === fullTxt) {
	delta = this.period;
	this.isDeleting = true;
	} else if (this.isDeleting && this.txt === '') {
	this.isDeleting = false;
	this.loopNum++;
	delta = 500;
	}

	setTimeout(function() {
	that.tick();
	}, delta);
};

window.onload = function() {
	let elements = document.getElementsByClassName('typewrite');
	for (let i=0; i<elements.length; i++) {
		let toRotate = elements[i].getAttribute('data-type');
		let period = elements[i].getAttribute('data-period');
		if (toRotate) {
		  new TxtType(elements[i], JSON.parse(toRotate), period);
		}
	}
	let css = document.createElement("style");
	css.type = "text/css";
	css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
	document.body.appendChild(css);
};

// ===== HERE LIGHT TO DARK AND DARK TO LIGHT MODE SWITCHER CODE =========
let body = document.body;
let switcher = document.getElementsByClassName('js-toggle')[0];
switcher.addEventListener("click", function () {
    this.classList.toggle('js-toggle--checked');
    this.classList.add('js-toggle--focus');
    if (this.classList.contains('js-toggle--checked')) {
        body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'true')
    } else {
        body.classList.remove('dark-mode');
        setTimeout(function () {
            localStorage.removeItem('darkMode')
        }, 100)
    }
});

// ======SWIPER======
var swiper = new Swiper(".mySwiper", {
	slidesPerView: 1,
	spaceBetween: 30,
	autoplay: {
		delay: 2500,
		disableOnIeraction: false ,
	},
	keyboard: {
	  enabled: true,
	},
	pagination: {
	  el: ".swiper-pagination",
	  clickable: true,
	},
	// navigation: {
	//   nextEl: ".swiper-button-next",
	//   prevEl: ".swiper-button-prev",
	// },
  });



//   ======= CONTACT US SECTION - START========

//   ======= CONTACT US SECTION - END========


let header = document.querySelector(".header");
let scrolled = false;

window.onscroll = function () {
	if (window.scrollY > 100) { 
		if (!scrolled) {
			header.classList.add("scrolled");
			scrolled = true;
		}
	} else {
		if (scrolled) {
			header.classList.remove("scrolled");
			scrolled = false;
		}
	}
};




// responsive nav
const mobile_nav = document .querySelector(".mobile-navbar-btn")
const headerElem = document.querySelector(".header")
mobile_nav.addEventListener("click", () => {
	headerElem.classList.toggle("active")
})



// sticky navbar
window.onscroll = function() {
    makeHeaderSticky();
};

function makeHeaderSticky() {
    var header = document.querySelector('.header');
    if (window.pageYOffset > 0) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
}
