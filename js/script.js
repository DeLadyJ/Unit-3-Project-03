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
$('#paypal').hide();
$('#bitcoin').hide();
function showCreditPayments(input) {
  if (input === 'Credit Card') {
    $('#credit-card').show();
    $('#paypal').hide();
    $('#bitcoin').hide();
  } else if (input === 'PayPal') {
    $('#paypal').show();
    $('#credit-card').hide();
    $('#bitcoin').hide();
  } else if (input === 'Bitcoin') {
    $('#bitcoin').show();
    $('#paypal').hide();
    $('#credit-card').hide();
  }
}
$('#payment').change(function() {
  let selectedPayment = $(this).val()
  showCreditPayments(selectedPayment)
  console.log(selectedPayment)
});
//  function validPayment(){
//
// $('#payment option[value="select_method"]').wrap('<span>').hide() // Hide the "Select Payment Method" `option`
// $('#payment').change(function (){
//     $('#payment option:selected').each(function() {
//       console.log('good code')
//         if($(this).text() === 'Credit Card') {
//             $('#credit-card').fadeIn().next().hide().next().hide();
//           } else if($(this).text() === 'PayPal'){
//             $('#credit-card').hide().next().slideDown().next().hide();
//             $('#credit-card input').val(""); // Remove text from Credit Card fields
//             ccNumError.hide();
//       $('#cc-num').css('border-color','none');
//       zipError.hide();
//       $('#zip').css('border-color','none');
//       cvvError.hide();
//     $('#cvv').css('border-color','none');
//         } else if($(this).text() === 'Bitcoin'){
//             $('#credit-card').hide().next().hide().next().slideDown();
//             $('#credit-card input').val(""); // Remove text from Credit Card fields
//             ccNumError.hide();
//       $('#cc-num').css('border-color','none');
//       zipError.hide();
//       $('#zip').css('border-color','none');
//       cvvError.hide();
//     $('#cvv').css('border-color','none');
//         }
//     });
// });
// }
// function validPayment(){
//   console.log('good code')
// $(document).ready(function(){
//   $(".payment").change(function(){
//     if ($('#payment option:selected').val() === "paypal") {
//       console.log('good code')
//       $('#credit-card, #bitcoin').hide();
//       $('#paypal').show();
//       ccNumError.hide();
//       $('#cc-num').css('border-color','none');
//       zipError.hide();
//       $('#zip').css('border-color','none');
//       cvvError.hide();
//     $('#cvv').css('border-color','none');
//   } else if ($('#payment option:selected').val() === "bitcoin") {
//       $('#credit-card, #paypal').hide();
//       ccNumError.hide();
//       $('#cc-num').css('border-color','none');
//       zipError.hide();
//       $('#zip').css('border-color','none');
//       cvvError.hide();
//     $('#cvv').css('border-color','none');
//       $('#bitcoin').show();
//   } else {
//       $('#credit-card').show();
//       $('#paypal, #bitcoin').hide();
//   }
//   });
// });
// }
////////////////////////////////////////////Validation////////////////////////////////////////////////////////////////////////
/*Added the error message in a span tag, checks for name validation, scrolls to top if error message is present*/
const nameError = $('<span id="nameError">Input name</span>');
$('#name').after(nameError);
nameError.hide();
function validName() {
  if ($('#name').val() === "" ) {
  //console.log("Error!");
$("html, body").animate({scrollTop: 0}, "slow");
    nameError.show();
  $('#name').css('border-color','red');
  console.log('Name validation failed!')
  return false
}
else
  {
    $('#name').css('border','none');
    nameError.hide();
  return true
}
}
// /*Added the error message in a span tag, checks for email validation, scrolls to top if error message is present*/
const mailError = $('<span id="mailError">Input valid email</span>');
$('#mail').after(mailError);
mailError.hide();
function validEmail() {
  let mailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z]+(\.[a-zA-Z]+)+$/;
  let mail = $('#mail').val();
 // console.log('code good')
  if (mailRegex.test(mail) === false)
  {
    $("html, body").animate({scrollTop: 0}, "slow");
mailError.show();
$('#mail').css('border-color','red');
    console.log('Email validation failed!')
    return false
  }
    else
    {
      $('#mail').css('border','none')
      mailError.hide();
    return true
}
}
// /* Checks that 1 activity is checked, scrolls to top if 1 activity is not checked */
 function validActivity(){
  //console.log('good code')
  if ($('.activities input[type=checkbox]:checked').length === 0)  {
   $('#total').html("Must choose 1 activity");
 $('.activities').addClass('error');
$("html, body").animate({scrollMiddle: 0}, "slow");
console.log('Activity validation failed!')
return false
}
else
{
$('.activities').removeClass('error');
return true
}
}
/* Checks for a valid credit card number, shows error message if there is no input or number is invalid */
const ccNumError = $('<span id="ccNumError">Enter valid credit card number</span>');
$('#cc-num').after(ccNumError);
//$("html, body").animate({scrollMiddle: 0}, "slow");
(ccNumError).hide();
function validNumber (){
      let ccNum = $('#cc-num').val();
    let ccNumRegex = /^[0-9]{13,16}$/;
if ($('#payment option[value = "Credit Card"]').prop('selected')) {
   if (ccNumRegex.test($('#cc-num').val()) === false )
{
    $('#cc-num').css('border-color','red');
  ccNumError.show();
  console.log('Credit card validation failed')
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
}
/* Checks for a valid zipcode number, shows error message if there is no input or number is invalid */
const zipError = $('<span id="zipError">Input valid zip code information</span>');
$('#zip').after(zipError);
(zipError).hide();
function validZip (){
  let zip = $('#zip').val();
     let zipRegex = /^\d{5}(?:[-\s]\d{4})?$/;
if ($('#payment option[value = "Credit Card"]').prop('selected')) {
  if (zipRegex.test($('#zip').val()) === false) {
    zipError.show();
    $('#zip').css('border-color','red');
    console.log('Regex zip validation failed')
    return false;
  }
  if (zip ==="") {
    zipError.show();
    $('#zip').css('border-color','red');
    console.log('Blank zip validation failed')
    return false;
  } else {
    zipError.hide();
    $('#zip').css('border-color','none');
      return true;
  }
}
}
/* Checks for a valid cvv number, shows error message if there is no input or number is invalid */
const cvvError = $('<span id="cvvError">Input valid cvv </span>');
$('#cvv').after(cvvError);
(cvvError).hide();
function validCvv(){
  // console.log('good code')
  let cvv = $('#cvv').val();
     let cvvRegex =  /^[0-9]{3}$/;
if ($('#payment option[value = "Credit Card"]').prop('selected')) {
  if (cvvRegex.test($('#cvv').val()) === false )
  {
    cvvError.show();
    $('#cvv').css('border-color','red');
    console.log('Regex cvv validation failed')
    return false
  }
if (cvv === "")
  {
    cvvError.show();
    $('#cvv').css('border-color','red');
    console.log('Blank cvv validation failed')
    return false
  }
else
  {
      cvvError.hide();
    $('#cvv').css('border-color','none');
    return true
}
}
}
/*Checks that each field has the correct information
Prevents the form from submitting if information is missing*/
$('form').prepend('<p id="error-message"></p>');
$('#error-message').hide();
$('form').on('submit', function (e){
  if (validName() === false || validEmail() === false || validActivity() === false || validNumber() === false || validCvv() === false || validZip() === false) {
  e.preventDefault();
  validName();
  validEmail();
  validActivity();
  validNumber();
  validCvv();
  validZip();
  alert('Registration not accepted'); 
} else {
  console.log("Registration accepted");//alert for user//
  alert("Registration accepted");
}
});







