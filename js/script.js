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




/*Added the error message in a span tag, checks for name validation, scrolls to top if error message is present*/
// const nameError = $('<span id="nameError">Input name</span>');
// $('#name').after(nameError);
// nameError.hide();

// function validName() {
//   if ($('#name').val() === "" ) {
//   //console.log("Error!");
// $("html, body").animate({scrollTop: 0}, "slow");
//     nameError.show();
//   $('#name').css('border-color','red');
//   return false
// }
// else 
//   {
//     $('#name').css('border','none');
//     nameError.hide();
//   return true
// }
// }

// /*Added the error message in a span tag, checks for email validation, scrolls to top if error message is present*/
// const mailError = $('<span id="mailError">Input valid email</span>');
// $('#mail').after(mailError);
// mailError.hide();
// function validEmail() {
//   let mailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z]+(\.[a-zA-Z]+)+$/;
//   let mail = $('#mail').val();
//  // console.log('code good')
//   if (mailRegex.test(mail) === false)
//   {
//     $("html, body").animate({scrollTop: 0}, "slow");
// mailError.show();
// $('#mail').css('border-color','red');
//     return false
//   }
//     else 
//     {
//       $('#mail').css('border','none')
//       mailError.hide();
//     return true
// }
// }

// /* Checks that 1 activity is checked, scrolls to top if 1 activity is not checked */
// function validActivity(){
//   //console.log('good code')
//   if ($('.activities input[type=checkbox]:checked').length === 0)  {
//    $('#total').html("Must choose 1 activity");
//  $('.activities').addClass('error');
// $("html, body").animate({scrollMiddle: 0}, "slow");
// $('.activities').focus
// }
// else
// {
// $('.activities').removeClass('error');
// return true
// }
// }

/* Checks for a valid credit card number, shows error message if there is no input or number is invalid */
const ccNumError = $('<span id="ccNumError">Enter valid credit card number</span>');
$('#cc-Num').after(ccNumError);
$("html, body").animate({scrollMiddle: 0}, "slow");
(ccNumError).hide();

function validNumber (){
      let ccNum = $('#cc-num').val();
    let ccNumRegex = /^[0-9]{13,16}$/;

   if (ccNumRegex.test($('#cc-num').val()) === false )
{
    $('#cc-num').css('border-color','red'); 
  ccNumError.show();
  return false
}
if (ccNum === "") 
{
  $('#cc-num').css('border','red'); 
  ccNumError.show();
  return false
}
else
  {
    $('#cc-num').css('border','none');
    ccNumError.hide();
    return true
   }
}

/* Checks for a valid zipcode number, shows error message if there is no input or number is invalid */
const zipError = $('<span id="zipError">Input valid zip code information</span>');
$('#zip').after(zipError);
(zipError).hide();

function validZip (){
  let zip = $('#zip').val();
     let zipRegex = /^\d{5}(?:[-\s]\d{4})?$/;

  if (zipRegex.test($('#zip').val()) === false) {
    zipError.show();
    $('#zip').css('border-color','red');
    return false;
  }
  if (zip ==="") {
    zipError.show();
    $('#zip').css('border-color','red');
    return false;
  } else {
    zipError.hide();
    $('#zip').css('border-color','none');
      return true;
  }
}

/* Checks for a valid cvv number, shows error message if there is no input or number is invalid */
const cvvError = $('<span id="cvvError">Input valid cvv </span>');
$('#cvv').after(cvvError);
(cvvError).hide();

function validCvv(){
  console.log('good code')
  let cvv = $('#cvv').val();
     let cvvRegex =  /^[0-9]{3}$/;
  if (cvvRegex.test($('#cvv').val()) === false )
  {
    cvvError.show();
    $('#cvv').css('border-color','red');
    return false
  }
if (cvv === "")
  {
    cvvError.show();
    $('#cvv').css('border-color','red');
    return false
  }
else
  {
      cvvError.hide();
    $('#cvv').css('border-color','none');
    return true
}
}

/*Checks that each field has the correct information
Prevents the form from submitting if information is missing*/

$('form').prepend('<p id="error-message"></p>');
$('#error-message').hide();
$('form').submit(function (e){
  //  validName();
  //  validEmail();
  //  validActivity();
   validNumber ();
   validZip ();
   validCvv ();
   //validPayment();
  if (/*!validName() || !validEmail() || !validActivity() || */!validNumber () || !validZip () || !validCvv ()) //!validPayment()){
  {
  e.preventDefault();
//alert('Form not complete')
  }
  else
    {
      alert('Form complete')
    }
});

//  if (ccNumRegex.test(ccNum) === false || ccNum ==="" ) //&& zipRegex.test(zip) === false || zip ==="" && cvvRegex.test(cvv) === false || cvv === "")
// {
//     $('#cc-num').css('border-color','red'); 
//   ccNumError.show();
   
  
//   return false
// }
// else
// //   {
// //     //return true
// //     $('#ccNum').removeClass(ccNumError)
// //   }

/*Added payment error messages in span tags*/
// const paymentError = $('<span id="paymentError">Input valid email</span>');
// $('#payment').after(paymentError);
// paymentError.hide();







/*Checks payment is selected and valid, checks the zipcode and cvv number are entered and valid */
//  function validPayment() {
//      //console.log(value.toLowerCase === "credit card")

//     let value = $('#payment').val();
//     
//     
// if (value.toLowerCase === "credit card")
// //console.log('yay')
// {
//   paymentError.show();
//   return false
// }
// //    else
// //      {
// //        return true
// //      }
//  if (ccNumRegex.test(ccNum) === false || ccNum ==="" ) //&& zipRegex.test(zip) === false || zip ==="" && cvvRegex.test(cvv) === false || cvv === "")
// {
//     $('#cc-num').css('border-color','red'); 
//   ccNumError.show();
   
  
//   return false
// }
// else
// //   {
// //     //return true
// //     $('#ccNum').removeClass(ccNumError)
// //   }
    


//     (ccNumError).hide();
//     (cvvError).hide();
//     (zipError).hide();
//     $('#cc-num').css('border','none');
//     $('#cvv').css('border','none');
//     $('#zip').css('border','none');
//     return true
//   }
// }
