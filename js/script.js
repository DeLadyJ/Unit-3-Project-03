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

// const formSubmitButton = document.querySelector('button[type="submit"]');
// const nameInput = document.getElementById('name');
//
//
//   formGood = false
// }
// else {
//      formGood
// };


let formGood = true;
 let name = $('#name');
//  let mail = $('#mail')
// let activities = $('.activities');
// let emailInput = emailAddress;

// let zip = $('#zip')
let errorMessage ="";


// $('#name, #mail, #cc-num, #zip, #cvv, #other-field').val();
// console.log(this)
$('form').prepend('<p id="error-message"></p>');
$('#error-message').hide();
$('form').submit(function (e){
    validName();
    //validEmail();
   //validActivity();
  // validPayment();
  if(!(validName())) {
    e.preventDefault();
alert('Form not complete')
  }
  else
    {
      alert('Form complete')
    }
});


const nameError = $('<span id="nameError">Input name</span>');
$('#name').after(nameError);
nameError.hide();
function validName() {
  if ($('#name').val() === "" ) {
  console.log("Error!");
$("html, body").animate({scrollTop: 0}, "slow");
    nameError.show();
  $('#name').css('border-color','red');
  return false
}
else 
  {
  return true
}
}

const mailError = $('<span id="mailError">Input valid email</span>');
$('#mail').after(mailError);
mailError.hide();

function validEmail() {
  let mailRegex = /^[^@]+@[^@.]+\.[a-z]+$/i
  let mail = $('#mail').val()
  console.log('code good')
  if (mail ==="" || mailRegex.test(mail) === false)
  {
    $("html, body").animate({scrollTop: 0}, "slow");
nameError.show();
    $('#mail').css('border-color','red');
return false
  }
    else 
    {
    return true
}
}

// function validActivity(){
//   console.log('good code')
//   if ($('.activities input[type=checkbox]:checked').length === 0)  {
//    $('#total').html("Must choose 1 activity");
//  $('.activities').addClass('error');
// $("html, body").animate({scrollMiddle: 0}, "slow");
// $('.activities').focus
// }
// else
// {
// $('.activities').removeClass('error');
// return Tree
// }
// }



function validPayment() {
    console.log('payment good')
    let payment = $('.payment').val();
        let cc = $('#cc').val();
      let creditCardRegex = /\b\d{4}(| |-)\d{4}\1\d{4}\1\d{4}\b/g
      let zip = $('#zip').val;
      let zipRegex = /^\d{5}(?:[-\s]\d{4})?$/;
      //let cvv = $('#cvv').val;
      let cvvRegex =  /^[0-9]{3,4}$/;
    if ($('.payment').val() === "" ) {
      $('.payment').append('<p class="error">')
    $('.payment').after('Input valid information');
    }
    if ($('.payment').val() === "credit card" ||  $('#cc').val()   ==="" || creditCardRegex.test(mail) === false || zipRegex.test(zip) === false || $('#zip').val ==="" || cvvRegex.test === false || $('#cvv').val ==="") {
  //     {
      $('#cc').append('<p class="error">');
      $('#cc').css('border-color','red');
      $('#cc').after('Input valid card number')
      $('#zip').append('<p class="error">');
      $('#zip').css('border-color','red');
      $('#zip').after('Input valid zip ode')
      $('#cvv').append('<p class="error">');
      $('#cvv').css('border-color','red');
      $('#cvv').after('Input valid cvv number')
      return false
  }
    else {
  // else if  ($('#payment').val ==="paypal" || $('#payment').val ==="bitcoin" ){
      $("html, body").animate({scrollTop: 0}, "slow");
    $('#payment').removeClass("error")
    $('#cc').removeClass("error")
    $('#zip').removeClass("error")
    $('#cvv').removeClass("error")
    return true
    }
  }

// function validPayment(){
//   let payment = $('#payment').val()
//   console.log('good code')
// if ( $("#payment").val() === "select_method" )  {
//   let creditCard = $('#ccNum').val();
//   	let creditCardRegex = /\b\d{4}(| |-)\d{4}\1\d{4}\1\d{4}\b/g;
//   	let zip = $('#zip').val;
//   	let zipRegex = /^\d{5}(?:[-\s]\d{4})?$/;
//   	let cvv = $('#cvv').val;
//   	let cvvRegex =  /^[0-9]{3,4}$/;
//         $("html, body").animate({scrollTop: 0}, "slow");
//         $('#payment').addClass('<p class="error">')
//         //$('#payment').append('<p class="error">')
//         $('#payment').before("Choose payment method")
//         //errorMessage = "<h2>'Error!Please select a payment method.'</h2>";
//         $('#payment').focus();
//       }  //if ( $("#payment").val() === "credit card" || !creditCardRegex.test($('cc-num') === false)
//       if ( $("#payment").val() === "credit card" || creditCard ==="" || creditCardRegex.test(creditCard) === false || zipRegex.test(zip) === false || zip ==="" || cvvRegex.test(cvv) === false || cvv ==="")
//       //
//        {
//          $('#ccNum').addClass('<p class="error">')
//          $('#ccNum').css('border-color','red');
//          $('#ccNum').after('Input valid credit card number');
//          $('#cvv').addClass('<p class="error">')
//          $('#cvv').css('border-color','red');
//          $('#cvv').after('Input valid cvv');
//          $('#zip').addClass('<p class="error">')
//          $('#zip').css('border-color','red');
//          $('#zip').after('Input valid zip code');
        // $("html, body").animate({scrollTop: 0}, "slow");
        // errorMessage = '<h2>"Error!</h2>Please enter a valid credit card number.";
        // $('#cc-num').focus();
        // }  if ( $("#payment").val() === "credit card" && !zipCode.test($("#zip").val()) )  {
        // $("html, body").animate({scrollTop: 0}, "slow");
        // errorMessage = "<h2>Error!</h2>Please enter your zip code.";
        // $('#zip').focus();
        // }  if ( $("#payment").val() === "credit card" && $("#cvv").val().length < 3)  {
        // $("html, body").animate({scrollTop: 0}, "slow");
        // errorMessage = "<h2>Error!</h2>Please enter a 3 digit CVV";
        // $('#cvv').focus();
//         } else {
//           $('#payment').removeClass('error');
//           $('#ccNum').removeClass('error');
//           $('#cvv').removeClass('error');
//           $('#zip').removeClass('error');
//           return true
//         $("html, body").animate({scrollTop: 0}, "slow");
// 		 }
//    }

    // if ( $(document).val() === "")  {
    // $(this).removeClass('success');
    // $(this).addClass('error');
    // } else {
    // $(this).removeClass('error');
    // $(this).addClass('success');
    // };

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
