function eventListner() {
  const ui = new UI();
  window.addEventListener('load', function() {
    ui.hidePreloader();
  });

  document.querySelector('.navBtn').addEventListener('click', function() {
    ui.showNav();
  });
  document.querySelector('.drink-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.querySelector('.input-name').value;
    const lastName = document.querySelector('.input-lastname').value;
    const email = document.querySelector('.input-email').value;

    let value = ui.checkEmpty(name, lastName, email);

    if (value) {
      let customer = new Customer(name, lastName, email);
      console.log(customer);
      ui.addCustomer(customer);
      ui.showFeedback('customer added to the list', 'success');
      ui.clearFields();
    } else {
      ui.showFeedback('some form values empty', 'error');
    }
  });
  //diplay zoomin
  const links = document.querySelectorAll('.work-item__icon');
  links.forEach(function(item) {
    item.addEventListener('click', function(event) {
      ui.showModal(event)
    });
  });

  //hide modal
  document.querySelector('.work-modal__close').addEventListener('click', function() {
    ui.closeModal();
  });
}

function UI() {

}
//hide preloader
UI.prototype.hidePreloader = function() {
  document.querySelector('.preloder').style.display = "none";
};
//show nav
UI.prototype.showNav = function() {
  document.querySelector('.nav').classList.toggle('nav__show');
};
//check for empty values
UI.prototype.checkEmpty = function(name, lastname, email) {
  let result;
  if (name === '' || lastname === '' || email === '') {
    result = false;
  } else {
    result = true;
  }
  return result;
};
UI.prototype.showFeedback = function(text, type) {
  if (type === 'success') {
    let feedback = document.querySelector('.drink-form__feedback');
    feedback.classList.add('success');
    feedback.innerText = text;
    this.removeAlert('success');
  } else if (type === 'error') {
    let feedback = document.querySelector('.drink-form__feedback');
    feedback.classList.add('error');
    feedback.innerText = text;
    this.removeAlert('error');
  }
};
//remove alert
UI.prototype.removeAlert = function(type) {
  setTimeout(function() {
    document.querySelector('.drink-form__feedback').classList.remove(type);
  }, 3000);
};

//add Customer
UI.prototype.addCustomer = function(customer) {
  const images = [1, 2, 3, 4, 5];
  let random = Math.floor(Math.random() * images.length);
  const div = document.createElement('div');
  div.classList.add('person');
  div.innerHTML = `<img src="img/team-${random}.jpg" alt="" class="person__thumbnail">
              <h4 class="person__name">${customer.name}</h4>
              <h4 class="person__last-name">${customer.lastname}</h4>`;
  document.querySelector('.drink-card__list').appendChild(div);
};

//clear fields
UI.prototype.clearFields = function() {

  document.querySelector('.input-name').value = '';
  document.querySelector('.input-lastname').value = '';
  document.querySelector('.input-email').value = '';

};

//show modal__item
UI.prototype.showModal = function(event) {
  event.preventDefault();
  if (event.target.parentElement.classList.contains('work-item__icon'));
  let id = event.target.parentElement.dataset.id;
  const modal = document.querySelector('.work-modal');
  const modalItem = document.querySelector('.work-modal__item');

  modal.classList.add('work-modal--show');
  modalItem.style.backgroundImage = `url(img/work-${id}.jpg)`;
};

//closing modal

UI.prototype.closeModal = function() {
  document.querySelector('.work-modal').classList.remove('work-modal--show');
};



//
function Customer(name, lastname, email) {
  this.name = name,
    this.lastname = lastname,
    this.email = email;
}









//play video

document.querySelector('.video__switch').addEventListener('click', function() {
  var btn = document.querySelector('.video__switch-navBtn');
  if (!btn.classList.contains('btnSlide')) {
    btn.classList.add('btnSlide');
    document.querySelector('.video__item').pause();
  } else {
    btn.classList.remove('btnSlide');
    document.querySelector('.video__item').play();
  }
});

eventListner();



//wines
$(document).ready(function() {
  var docWidth = $('body').width(),
    $wrap = $('#wrap'),
    $images = $('#wrap .block'),
    slidesWidth = $wrap.width();

  $(window).on('resize', function() {
    docWidth = $('body').width();
    slidesWidth = $wrap.width();
  });

  $(document).mousemove(function(e) {
    var mouseX = e.pageX,
      offset = mouseX / docWidth * slidesWidth - mouseX / 2;

    $images.css({
      '-wrbkit-transform': 'translate3d(' + -offset + 'px,0,0)',
      'transform': 'translate3d(' + -offset + 'px,0,0)'
    });
  });
});

var t1 = new TimelineMax({
  paused: true
});

TweenMax.from(".logo", 0.5, {
  opacity: 0,
  y: 10,
  delay: 1
});

TweenMax.from(".menu", 0.5, {
  opacity: 0,
  y: 10,
  delay: 1.2
});

TweenMax.from(".title", 3, {
  opacity: 0,
  delay: 1.4
});

TweenMax.from(".tagline", 3, {
  opacity: 0,
  delay: 1.6
});

TweenMax.from(".morewine", 0.5, {
  opacity: 0,
  y: 4,
  delay: 1.8
});

t1.to(".wines", 1, {
  autoAlpha: 1
});

t1.from(".one", 0.5, {
  opacity: 0,
  y: 20,
  delay: 0.1
}, "-=1");

t1.from(".two", 0.5, {
  opacity: 0,
  y: 20,
  delay: 0.3
}, "-=1");

t1.from(".three", 0.5, {
  opacity: 0,
  y: 20,
  delay: 0.5
}, "-=1");

t1.from(".four", 0.5, {
  opacity: 0,
  y: 20,
  delay: 0.7
}, "-=1");

t1.reverse();
$(document).on("click", ".wineBtn", function() {
  t1.reversed(!t1.reversed());
});

$(document).on("click", "a", function() {
  t1.reversed(!t1.reversed());
});

$(document).on("click", ".close-btnn a", function() {
  t1.reversed(!t1.reversed());
});


//***************parallex









//**************swiper History
$(function(){
var timelineSwiper = new Swiper('.timeline .swiper-container', {
direction: 'vertical',
loop: false,
speed: 1600,
pagination: '.swiper-pagination',
paginationBulletRender: function(swiper, index, className) {
  var year = document.querySelectorAll('.swiper-slide')[index].getAttribute('data-year');
  return '<span class="' + className + '">' + year + '</span>';
},
paginationClickable: true,
nextButton: '.swiper-button-next',
prevButton: '.swiper-button-prev',
breakpoints: {
  768: {
    direction: 'horizontal',
  }
}
});


});


//**************************************Menu
$(document).ready(function() {
  //Variables
  var selectedStarter = {
    dish: "(None)",
    price: 0
  };
  var selectedMain = {
    dish: "(None)",
    price: 0
  };
  var selectedDessert = {
    dish: "(None)",
    price: 0
  };
  var starter = {
    firstDish: "Salad",
    firstDishPrice: 15,
    secondDish: "Soup",
    secondDishPrice: 7,
    thirdDish: "Fish rolls",
    thirdDishPrice: 12,
    fourthDish: "Salad 2",
    fourthDishPrice: 22,
    fifthDish: "Fish rolls 2",
    fifthDishPrice: 10
  };

  var main = {
    firstDish: "Steak",
    firstDishPrice: 17,
    secondDish: "Salmon",
    secondDishPrice: 12,
    thirdDish: "Rissotto",
    thirdDishPrice: 9,
    fourthDish: "Salmon 2",
    fourthDishPrice: 12,
    fifthDish: "Steak 2",
    fifthDishPrice: 12
  };
  var dessert = {
    firstDish: "Sorbet",
    firstDishPrice: 4,
    secondDish: "Fruit salad",
    secondDishPrice: 6,
    thirdDish: "Apple pie",
    thirdDishPrice: 5,
    fourthDish: "Fruit",
    fourthDishPrice: 12,
    fifthDish: "Apple",
    fifthDishPrice: 12
  };

  function total() {
    return selectedStarter.price + selectedMain.price + selectedDessert.price;
  }

  function selectedStarterFnc(dish, price) {
    selectedStarter.price = price;
    selectedStarter.dish = dish;
    $("#total").html(total());
    return dish + "(" + price + ")";
  }

  function selectedMainFnc(dish, price) {
    selectedMain.price = price;
    selectedMain.dish = dish;
    $("#total").html(total());
    return dish + "(" + price + ")";
  }

  function selectedDessertFnc(dish, price) {
    selectedDessert.price = price;
    selectedDessert.dish = dish;
    $("#total").html(total());
    return dish + "(" + price + ")";
  }

  // Instantiating HTML Button Elements
  // Starter Elements
  document.getElementById("btStarter1").value =
    starter.firstDish + ": $" + starter.firstDishPrice;

  document.getElementById("btStarter2").value =
    starter.secondDish + ": $" + starter.secondDishPrice;

  document.getElementById("btStarter3").value =
    starter.thirdDish + ": $" + starter.thirdDishPrice;

  document.getElementById("btStarter4").value =
    starter.fourthDish + ": $" + starter.fourthDishPrice;

  document.getElementById("btStarter5").value =
    starter.fifthDish + ": $" + starter.fifthDishPrice;

  // Main Elements
  document.getElementById("btMain1").value =
    main.firstDish + ": $" + main.firstDishPrice;

  document.getElementById("btMain2").value =
    main.secondDish + ": $" + main.secondDishPrice;

  document.getElementById("btMain3").value =
    main.thirdDish + ": $" + main.thirdDishPrice;

  document.getElementById("btMain4").value =
    main.fourthDish + ": $" + main.fourthDishPrice;

  document.getElementById("btMain5").value =
    main.fifthDish + ": $" + main.fifthDishPrice;


  // Dessert Elements
  document.getElementById("btDessert1").value =
    dessert.firstDish + ": $" + dessert.firstDishPrice;

  document.getElementById("btDessert2").value =
    dessert.secondDish + ": $" + dessert.secondDishPrice;

  document.getElementById("btDessert3").value =
    dessert.thirdDish + ": $" + dessert.thirdDishPrice;


  document.getElementById("btDessert4").value =
    dessert.fourthDish + ": $" + dessert.fourthDishPrice;


  document.getElementById("btDessert5").value =
    dessert.fifthDish + ": $" + dessert.fifthDishPrice;


  // Your Order: Elements
  document.getElementById("selectedStarter").innerHTML =
    selectedStarter.dish + " (" + selectedStarter.price + ")";

  document.getElementById("selectedMain").innerHTML =
    selectedMain.dish + " (" + selectedMain.price + ")";

  document.getElementById("selectedDessert").innerHTML =
    selectedDessert.dish + " (" + selectedDessert.price + ")";

  // Functions (JQuery)
  // Main menu onClicks handler
  $("#btMenu").click(function() {
    $("#liMainMenu").toggle("slow");
  });

  $("#btStarter").click(function() {
    $("#liStarter").toggle("slow", function() {
      if ($(this).css("display") == "none") {
        $("#btStarter").css("background-color", "black");
      } else {
        $("#btStarter").css("background-color", "blue");
      }
    });
  });
  $("#btMain").click(function() {
    $("#liMain").toggle("slow", function() {
      if ($(this).css("display") == "none") {
        $("#btMain").css("background-color", "black");
      } else {
        $("#btMain").css("background-color", "blue");
      }
    });
  });

  $("#btDessert").click(function() {
    $("#liDessert").toggle("slow", function() {
      if ($(this).css("display") == "none") {
        $("#btDessert").css("background-color", "black");
      } else {
        $("#btDessert").css("background-color", "blue");
      }
    });
  });
  // Starter onClicks
  $("#btStarter1").click(function() {
    $("#liStarter").children("li").children("input").css("background-color", "red");
    $(this).css("background-color", "green");
    $("#selectedStarter").html(selectedStarterFnc(starter.firstDish, starter.firstDishPrice));
  });

  $("#btStarter2").click(function() {
    $("#liStarter").children("li").children("input").css("background-color", "red");
    $(this).css("background-color", "green");
    $("#selectedStarter").html(selectedStarterFnc(starter.secondDish, starter.secondDishPrice));
  });

  $("#btStarter3").click(function() {
    $("#liStarter").children("li").children("input").css("background-color", "red");
    $(this).css("background-color", "green");
    $("#selectedStarter").html(selectedStarterFnc(starter.thirdDish, starter.thirdDishPrice));
  });

  $("#btStarter4").click(function() {
    $("#liStarter").children("li").children("input").css("background-color", "red");
    $(this).css("background-color", "green");
    $("#selectedStarter").html(selectedStarterFnc(starter.fourthDish, starter.fourthDishPrice));
  });

  $("#btStarter5").click(function() {
    $("#liStarter").children("li").children("input").css("background-color", "red");
    $(this).css("background-color", "green");
    $("#selectedStarter").html(selectedStarterFnc(starter.fifthDish, starter.fifthDishPrice));
  });

  // Main onClicks
  $("#btMain1").click(function() {
    $("#liMain").children("li").children("input").css("background-color", "red");
    $(this).css("background-color", "green");
    $("#selectedMain").html(selectedMainFnc(main.firstDish, main.firstDishPrice));
  });
  $("#btMain2").click(function() {
    $("#liMain").children("li").children("input").css("background-color", "red");
    $(this).css("background-color", "green");
    $("#selectedMain").html(selectedMainFnc(main.secondDish, main.secondDishPrice));
  });

  $("#btMain3").click(function() {
    $("#liMain").children("li").children("input").css("background-color", "red");
    $(this).css("background-color", "green");
    $("#selectedMain").html(selectedMainFnc(main.thirdDish, main.thirdDishPrice));
  });

  $("#btMain4").click(function() {
    $("#liMain").children("li").children("input").css("background-color", "red");
    $(this).css("background-color", "green");
    $("#selectedMain").html(selectedMainFnc(main.fourthDish, main.fourthDishPrice));
  });

  $("#btMain5").click(function() {
    $("#liMain").children("li").children("input").css("background-color", "red");
    $(this).css("background-color", "green");
    $("#selectedMain").html(selectedMainFnc(main.fifthDish, main.fifthDishPrice));
  });



  // Dessert onClicks
  $("#btDessert1").click(function() {
    $("#liDessert").children("li").children("input").css("background-color", "red");
    $(this).css("background-color", "green");
    $("#selectedDessert").html(selectedDessertFnc(dessert.firstDish, dessert.firstDishPrice));
  });

  $("#btDessert2").click(function() {
    $("#liDessert").children("li").children("input").css("background-color", "red");
    $(this).css("background-color", "green");
    $("#selectedDessert").html(selectedDessertFnc(dessert.secondDish, dessert.secondDishPrice));
  });
  $("#btDessert3").click(function() {
    $("#liDessert").children("li").children("input").css("background-color", "red");
    $(this).css("background-color", "green");
    $("#selectedDessert").html(selectedDessertFnc(dessert.thirdDish, dessert.thirdDishPrice));
  });

  $("#btDessert4").click(function() {
    $("#liDessert").children("li").children("input").css("background-color", "red");
    $(this).css("background-color", "green");
    $("#selectedDessert").html(selectedDessertFnc(dessert.fourthDish, dessert.fourthDishPrice));
  });

  $("#btDessert5").click(function() {
    $("#liDessert").children("li").children("input").css("background-color", "red");
    $(this).css("background-color", "green");
    $("#selectedDessert").html(selectedDessertFnc(dessert.fifthDish, dessert.fifthDishPrice));
  });
});
