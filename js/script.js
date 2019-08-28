/**
 * Treehouse Telepath Unit 3 Project Three: Interactive Form
 * Jane Lewis
 */

const paragraphs = $("p");
const paypal = $(paragraphs[0]);
const bitcoin = $(paragraphs[1]);
const submitButton = $(':button')[0];

//Makes the name field focus state
$("#name").focus();
//Set credit card as default payment method
//$('#payment').val("credit card");
$("#payment option:nth-child(2)").attr('selected','selected');

/**
 * Targets "other" function, hides it so it displays even if javascript is disabled
 * but is hidden at first*/
  $('#other-title-wrapper').hide();

  $('#title').on('change', function() {
      if ($(this).val() ==="other") {
          $('#other-title-wrapper').show()
      }else {
          $('#other-title-wrapper').hide()
      }
  });

/**
 * In design menu -
 * hide option select theme
 * update color field to read "Please select a T-shirt theme"
 * hide color selection in drop down menu untile design theme is selected in
 *
 */

let chooseYourTheme = $("#color").append(new Option("Please select a t-shirt theme", "select"));  // create a new menu option and set the value equal to the string "select"
$("#color").val("select");

$('#design').change(function(){
    if($('#design').val() === 'js puns') {
        $('#color').find('option[value="cornflowerblue"]').show()
        $('#color').find('option[value="darkslategrey"]').show()
        $('#color').find('option[value="gold"]').show()
        $('#color').find('option[value="tomato"]').hide()
        $('#color').find('option[value="steelblue"]').hide()
        $('#color').find('option[value="dimgrey"]').hide()
        $('#color').val('cornflowerblue')
    } else if ($('#design').val() === 'heart js') {
        $('#color').find('option[value="cornflowerblue"]').hide()
        $('#color').find('option[value="darkslategrey"]').hide()
        $('#color').find('option[value="gold"]').hide()
        $('#color').find('option[value="tomato"]').show()
        $('#color').find('option[value="steelblue"]').show()
        $('#color').find('option[value="dimgrey"]').show()
        $('#color').val('tomato')
    }else {
      $("#color").val("select");
    }
});

$('#color').find('option').hide();

/*
Activity Info
Prevents same day and time
Adds activity cost
*/

var jsFrameworks = $("input[name='js-frameworks'");
var jsLibraries = $("input[name='js-libs']");
var express = $("input[name='express']");
var nodeJS = $("input[name='node']");

var totalCost = 0;
$('.activities').append('<div id="total"></div>');

var updateCost = function (cost) {
    totalCost += cost;
    document.getElementById("total").innerHTML = "Total: $" + totalCost;
};

$("input[name='all']").change(function () {
    if ($(this).prop("checked")) {
        updateCost(200);
    } else {
        updateCost(-200);
    }
});

jsFrameworks.change(function () {
    if ($(this).prop("checked")) {
        express.prop("disabled", true);
        express.parent().addClass("disabled");
        express.parent().append('<span class="unavailable">&nbsp;&nbsp;&nbsp;&nbsp;Unavailable</span>');
        updateCost(100);
    } else {
        express.prop("disabled", false);
        express.parent().removeClass("disabled");
        express.parent().find('.unavailable').remove();
        updateCost(-100);
    }
});

jsLibraries.change(function () {
    if ($(this).prop("checked")) {
        nodeJS.prop("disabled", true);
        nodeJS.parent().addClass("disabled");
        nodeJS.parent().append('<span class="unavailable">&nbsp;&nbsp;&nbsp;&nbsp;Unavailable</span>');
        updateCost(100);
    } else {
        nodeJS.prop("disabled", false);
        nodeJS.parent().removeClass("disabled");
        nodeJS.parent().find('.unavailable').remove();
        updateCost(-100);
    }
});

express.change(function () {
    if ($(this).prop("checked")) {
        jsFrameworks.prop("disabled", true);
        jsFrameworks.parent().addClass("disabled");
        jsFrameworks.parent().append('<span class="unavailable">&nbsp;&nbsp;&nbsp;&nbsp;Unavailable</span>');
        updateCost(100);
    } else {
        jsFrameworks.prop("disabled", false);
        jsFrameworks.parent().removeClass("disabled");
        jsFrameworks.parent().find('.unavailable').remove();
        updateCost(-100);
    }
});

nodeJS.change(function () {
    if ($(this).prop("checked")) {
        jsLibraries.prop("disabled", true);
        jsLibraries.parent().addClass("disabled");
        jsLibraries.parent().append('<span class="unavailable">&nbsp;&nbsp;&nbsp;&nbsp;Unavailable</span>');
        updateCost(100);
    } else {
        jsLibraries.prop("disabled", false);
        jsLibraries.parent().removeClass("disabled");
        jsLibraries.parent().find('.unavailable').remove();
        updateCost(-100);
    }
});

$("input[name='build-tools']").change(function () {
    if ($(this).prop("checked")) {
        updateCost(100);
    } else {
        updateCost(-100);
    }
});

$("input[name='npm']").change(function () {
    if ($(this).prop("checked")) {
        updateCost(100);
    } else {
        updateCost(-100);
    }
});



//Initially hides paypal and bitcoin, shows clicked payment and hides other two options
//$('#paypal, #bitcoin').hide();

$('#credit-card').next().hide().next().hide();
$('#payment option[value="select_method"]').wrap('<span>').hide() // Hide the “Select Payment Method” `option`
$('#payment').change(function (){
    $('#payment option:selected').each(function() {
        if($(this).text() === 'Credit Card') {
            $('#credit-card').fadeIn().next().hide().next().hide();
          } else if($(this).text() === 'PayPal'){
            $('#credit-card').hide().next().slideDown().next().hide();
            $('#credit-card input').val(''); // Remove text from Credit Card fields
        } else if($(this).text() === 'Bitcoin'){
            $('#credit-card').hide().next().hide().next().slideDown();
            $('#credit-card input').val(''); // Remove text from Credit Card fields
        }
    });
});


////////////////////////////////////////////Validation////////////////////////////////////////////////////////////////////////

//let name = $('#name');
// const formSubmitButton = document.querySelector('button[type="submit"]');
// const nameInput = document.getElementById('name');
//
// formSubmitButton.addEventListener('click', e =>
// {
// if (nameInput.value === "")
// {
//   name.css('border-color', 'red');
//   nameInputTitle.innerHTML = "Name:('Input name')";
//   e.preventDefault();
//   formGood = false
// }
// else /*if ($('#name') !== "")*/{
//      formGood
// }
// })

 // let formGood = true;
//let name = nameInput;
//let mail = $('#mail')
//let activities = $('.activities');
//let emailInput = emailAddress;
// let zip = $('#zip');
// let cvv = $('#cvv');
//var emailAddress = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
// var creditCard = /\b\d{4}(| |-)\d{4}\1\d{4}\1\d{4}\b/g;
// var zipCode = /^\d{5}(?:[-\s]\d{4})?$/;
//var errorMessage = "";
//$('#name, #mail, #cc-num, #zip, #cvv, #other-field').val();
//console.log(this)
// function validBasicInfo()

//     formGood = false
// 	}
	// if (!emailAddress.test($('#mail').val())) {
	// 	$('#mail').addClass('error');
	// 	$('#mail').css('border-color', 'red');
	// 	$('#mail').after('Input email');
	// 	formGood = false
// 	 }
//    else
//    {
//      nameInput
//    }
// }

// function validActivity() {
// 	console.log('yay')
// 	if ($('.activities').label > ('input:checked').length === 0) {
// 		$('.activities').addClass('error');
// 		//$('.activities').css('unCheckedBox','red');
// 		$('.activities').after('Must choose 1 activity');
// 		formGood = false
// 	}
// }
//
// function validaPaymentMethod() {
// 	//if ( $("#payment").val() === "select_method" )  {
// 	console.log('shout')
// 	if ($("#payment").val() === "credit card" || !creditCard.test($("#cc-num").val() || !zipCode.test($("#zip").val() || ($("#cvv").val().length < 3)))) {
// 		$('#cc-num').css('border-color', 'red');
// 		$('#cc-num').after('Input credit card number');
// 		$('#zip').css('border-color', 'red');
// 		$('#zip').after('Input zipcode');
// 		$('#cvv').css('border-color', 'red');
// 		$('#cvv').after('Input cvv number');
// 		formGood = false
// 	}
// }
// if ( $(document).val() === "")  {
// $(this).removeClass('success');
// $(this).addClass('error');
// } else {
// $(this).removeClass('error');
// $(this).addClass('success');
// };
// $('form').prepend('<p id="error-message"></p>');
// $('#error-message').hide();
// $('form').submit(function(e) {
// 	e.preventDefault();
// })
// validBasicInfo();
// validActivity();
// validaPaymentMethod();
//}
// if (formGood); {
// 	document.querySelectorAll('.error').length === 0;
// 	$("html, body").animate({
// 		scrollTop: 0
// 	}, "slow");
// 	alert('Form Complete').show();
// } else {
// 	(formGood) = false
// 	document.getElementById('error-message').innerHTML = errorMessage;
// 	$("html, body").animate({
// 		scrollTop: 0
// 	}, "slow");
// 	$('#eror-message').show();
// };


$('form').prepend('<p id="error-message"></p>');
$('#error-message').hide();
$('form').submit(function (e)
{
  e.preventDefault();

  if ($('#name').val() ==="")
  {
    console.log('yay');
    $("html, body").animate({scrollTop: 0}, "slow")
    errorMessage = "Error! Input name";
    $('#name').addClass('error');
    //$('#name').css.before('errorMessage')
  }
  else
  {
    $("html, body").animate({scrollTop: 0}, "slow");
    errorMessage = "";
    alert('Form complete');
  }
  document.getElementById('error-message').innerHTML = errorMessage;
  $('#error-message').show();
})
