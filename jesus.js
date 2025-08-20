// Function for sending email appointment
function SendAppointment() {
    // Name
    const apptName = document.querySelector('.js-apptName');
    const name = apptName.value;

    // Number
    const apptNumber = document.querySelector('.js-apptNumber');
    const number = apptNumber.value;
  
    // Date
    const apptDate = document.querySelector('.js-apptDate');
    const date = apptDate.value;

    // Message
    const apptMessage = document.querySelector('.js-apptMessage');
    let message = apptMessage.value;
    // A href- Email
    let a = document.querySelector('.js-email');
    // apptPElem object
    const pElemAppt = document.querySelector('.js-apptError');
    // Appt sendButtonElem
    const AppsendButton = document.querySelector('.js-apptSendButton');

    // Code to send Appointment inputs to email
    const AppointmentBody = `Hi Jesus, greetings. I have seen fare rate for flights and feedback from your previous customers on the website. I am impressed and I would like you to assist me and get a flight for my next trip. Thanks.%0AName: ${name}%0APhone number: ${number}%0AAppt. Date-time: ${date}%0AMessage: ${message}`;

    if (name !== '' || number !== '' || date !== '' || message !== '') {

        AppsendButton.innerText = 'Redirecting to Email...';
        setTimeout(() => {
             window.location.href =`mailto:jesus.n@asaptickets.com?subject=Referral via website: Assistance for Flight Booking&body=${AppointmentBody}`;     
        }, 1500);
        setTimeout(() => {
            AppsendButton.innerText = 'Edit and Send';
        }, 4000);  
        pElemAppt.innerText = '';
    } else {
        pElemAppt.innerText = 'Input atleast one detail. Thanks';
    } 
    // To clear previous input value
    apptName.value = '';
    apptNumber.value = '';
    apptDate.value = '';
    apptMessage.value = '';
}
function forNumberInputOnly() {
    if (number.value !== 1 || number.value !== 2 || number.value !== 3 || number.value !== 4 || number.value !== 5 || number.value !== 6 || number.value !== 7 || number.value !== 8 || number.value !== 9 || number.value !== 0 || number.value !== '+') {
        pElemAppt.innerText = 'Input valid Phone number!'
    } else { 
        SendAppointment();
    }
}

// Function for giving feedback and sending to email
function feedbackSave() {
    // feedbackSection Object body
    const feedbacksection = document.querySelector('.js-feedbackSection');
    // Feedbacksubmit button
    let SubmitButton = document.querySelector('.js-feedbackSubmit');
    // name-Input Object
    const inptElementName = document.querySelector('.js-nameInput');
    const name = inptElementName.value;
    // feedback-input Object
    const inptElementFeedback = document.querySelector('.js-feedbackInput');
    const feedback = inptElementFeedback.value;

    //  Send feedback to email.
    const errorPElem = document.querySelector('.js-errorNodetail');


    if (name !== '' && feedback !== '') {
        errorPElem.innerText = '';
        // First run
        SubmitButton.innerHTML = '<div class="LoadnSubmitFeedback"></div>';
        // Second run
        setTimeout(() => {
            errorPElem.innerHTML = '<p class="SubmitAlert">Feedback Uploaded, thanks</p>'
        }, 1500);
        // Third run
        setTimeout(() => {
        feedbacksection.innerHTML = `
            <div class="feedback">
                <p>I discovered Ajent jesus just two ays away to my trip..... Amazingly he got me a very Good deal for a considerabl and cheap price. Thanks to agent Jesus.
                </p>
                <p>- <strong>Ona</strong></p>
            </div>

            <div class="feedback">
                <p>I discovered Ajent jesus just two ays away to my trip..... Amazingly he got me a very Good deal for a considerabl and cheap price. Thanks to agent Jesus.
                </p>
                <p>- <strong>Ona</strong></p>
            </div>

            <div class="feedback">
                <p>I discovered Ajent jesus just two ays away to my trip..... Amazingly he got me a very Good deal for a considerabl and cheap price. Thanks to agent Jesus.
                </p>

                <p>- <strong>Ona</strong></p>    
            </div> 

            <div class="feedback">
                <p>I discovered Ajent jesus just two ays away to my trip..... Amazingly he got me a very Good deal for a considerabl and cheap price. Thanks to agent Jesus.
                </p>
                <p>- <strong>Okoronkwo zephniah racheal john</strong></p>
            </div>

            <div class="feedback">
                <p>${feedback}</p>
                <p>- <strong>${name}</strong></p>
            </div>
    `;
    }, 1800);
    // Fourth Code to run
    setTimeout(() => {
        errorPElem.innerText = '';
    }, 3000);
    // Fifth code run
        setTimeout (() => {
         window.location.href =`mailto:jesus.n@asaptickets.com?subject=Feedback Submit&body= Hi Customer! We appreciate your kind effort in giving a feedback....Positive or negative? Just be honest as it helps us grow and do better. Thanks.%0AName: ${name}%0AFeedback: ${feedback}`;
    },3500);
    // Last code to run
    setTimeout(() => {
        SubmitButton.innerHTML = `<button class="submit-feedback js-feedbackSubmit" onclick="
                feedbackSave();
                ">Submit</button>`;
    }, 4000);
    } else {
        errorPElem.innerText = 'No name or feedback! Please input then submit.';
    }
    // Clear value after button-Submit clicked
    inptElementName.value = '';
    inptElementFeedback.value = '';

    // For rendering new feedback

    const outputsavedFeedback = JSON.parse(localStorage.getItem('savedFeedback'));
    console.log(outputsavedFeedback);

    localStorage.setItem('savedFeedback', JSON.stringify({name: `${name}`, feedback: `${feedback}`}));

}

// Function for togglinig Offering nav
function offeringsToggle() {
    // offering-nav object
    const offeringNav = document.querySelector('.js-offeringsNav');
    // offrings object
    const offerings = document.querySelector('.js-offerings');

    if (offerings.classList.contains('offerings-on')) {
        offerings.classList.add('offerings');
        offerings.classList.remove('offerings-on');
    } else if (offerings.classList.contains('offerings')) {
        offerings.classList.add('offerings-on');
        offerings.classList.remove('offerings');
    }
}
// FUnction For Hang-Call and cancel
function HangingCall() {
    // hangCall Object
    const hangCall = document.querySelector('.js-hangingCall');
    // Cancel call Object
    const cancelhangCall = document.querySelector('.js-cancelCall');
    // email and call img object
    const callImg = document.querySelector('.js-callImg');

    if (hangCall.contains(callImg) && cancelhangCall.classList.contains('cancel-call-on')) {
        hangCall.innerHTML = `<div class="callHang" onclick="window.location.href='tel:+18886346250'">Call now</div>`;
        cancelhangCall.classList.add('cancel-call');
        cancelhangCall.classList.remove('cancel-call-on');
    }

    // Close hangEmail

    // hangEmail Object
    const hangEmail = document.querySelector('.email-now-Hanging');
    // Cancel email object
    const cancelhangEmail = document.querySelector('.js-cancelEmail');
    // emailIng object
    const emailImg = document.querySelector('.js-emailImg');

    if (hangEmail.innerHTML === `<div class="callHang" onclick="emailNowa();">Email Now</div>` && cancelhangEmail.classList.contains('cancel-email')) {
        hangEmail.innerHTML = '<img class="js-emailImg" src="imagesJesusN/email.png">';
        cancelhangEmail.classList.add('cancel-email-on');
        cancelhangEmail.classList.remove('cancel-email');
    }
  
}
function forcancelCallnow() {
     // hangCall Object
    const hangCall = document.querySelector('.js-hangingCall');
    // Cancel call Object
    const cancelhangCall = document.querySelector('.js-cancelCall');
    // call img object
    const callImg = document.querySelector('.js-callImg');

    if (hangCall.innerHTML === `<div class="callHang" onclick="window.location.href='tel:+18886346250'">Call now</div>` && cancelhangCall.classList.contains('cancel-call')) {
        hangCall.innerHTML =  '<img class="js-callImg" src="imagesJesusN/call.jpg">';

        cancelhangCall.classList.add('cancel-call-on');
        cancelhangCall.classList.remove('cancel-call');
    }
}
// Function for Hang Email and Cancel
function hangingEmail() {
    // hangEmail Object
    const hangEmail = document.querySelector('.email-now-Hanging');
    // Cancel email object
    const cancelhangEmail = document.querySelector('.js-cancelEmail');
    // emailIng object
    const emailImg = document.querySelector('.js-emailImg');

    if (hangEmail.contains(emailImg) && cancelhangEmail.classList.contains('cancel-email-on')) {
        hangEmail.innerHTML = `<div class="callHang" onclick="emailNowa();">Email Now</div>`;
        cancelhangEmail.classList.add('cancel-email');
        cancelhangEmail.classList.remove('cancel-email-on');
    } 

    // Code to Close hangCall
    // hangCall Object
    const hangCall = document.querySelector('.js-hangingCall');
    // Cancel call Object
    const cancelhangCall = document.querySelector('.js-cancelCall');
      // email and call img object
    const callImg = document.querySelector('.js-callImg');

    if (hangCall.innerHTML === `<div class="callHang" onclick="window.location.href='tel:+18886346250'">Call now</div>` && cancelhangCall.classList.contains('cancel-call')) {
        hangCall.innerHTML = '<img class="js-callImg" src="imagesJesusN/call.jpg">';
        cancelhangCall.classList.add('cancel-call-on');
        cancelhangCall.classList.remove('cancel-call')
    }
}
function forcancelEmailnow() {
    // hangEmail Object
    const hangEmail = document.querySelector('.email-now-Hanging');
    // Cancel email object
    const cancelhangEmail = document.querySelector('.js-cancelEmail');
    // emailIng object
    const emailImg = document.querySelector('.js-emailImg');

    if (hangEmail.innerHTML === `<div class="callHang" onclick="emailNowa();">Email Now</div>`  && cancelhangEmail.classList.contains('cancel-email')){
        hangEmail.innerHTML = '<img class="js-emailImg" src="imagesJesusN/email.png">';
        cancelhangEmail.classList.add('cancel-email-on');
        cancelhangEmail.classList.remove('cancel-email');
    } else {console.log(false)}
}
// function for email now
function emailNowa() {
    const ahrefElem = document.querySelector('.js-emailnowHang');

    const emailnow = document.querySelector('.js-hangingEmail');
    ahrefElem.click();
}

// Function for   Tried tip
function tipActionTried() {
   const TriedTip = document.querySelector('.js-tried'); 
   // $10 tip
   const GoodTip = document.querySelector('.js-good'); 
   // $10 tip
   const GreatTip = document.querySelector('.js-great'); 
   // $10 tip
   const ExcellentTip = document.querySelector('.js-excellent'); 
   // $10 tip
   const MoreLessTip = document.querySelector('.js-moreless'); 
   // $10 tip
   const AmountTip = document.querySelector('.js-amountToTip'); 
   // $10 tip

   if (AmountTip.value === '20' || AmountTip.value === '35' || AmountTip.value === '50' || AmountTip.value === MoreLessTip.value) {
    AmountTip.value = '10';
   }  
}
// function for Good Tip 
function tipActionGood() {
    const TriedTip = document.querySelector('.js-tried'); 
   // $10 tip
   const GoodTip = document.querySelector('.js-good'); 
   // $10 tip
   const GreatTip = document.querySelector('.js-great'); 
   // $10 tip
   const ExcellentTip = document.querySelector('.js-excellent'); 
   // $10 tip
   const MoreLessTip = document.querySelector('.js-moreless'); 
   // $10 tip
   const AmountTip = document.querySelector('.js-amountToTip'); 
   // $10 tip

   if (AmountTip.value === '10' || AmountTip.value === '35' || AmountTip.value === '50' || AmountTip.value === MoreLessTip.value) {
    AmountTip.value = '20';
   }

}
// function for Great Tip 
function tipActionGreat() {
    const TriedTip = document.querySelector('.js-tried'); 
   // $10 tip
   const GoodTip = document.querySelector('.js-good'); 
   // $10 tip
   const GreatTip = document.querySelector('.js-great'); 
   // $10 tip
   const ExcellentTip = document.querySelector('.js-excellent'); 
   // $10 tip
   const MoreLessTip = document.querySelector('.js-moreless'); 
   // $10 tip
   const AmountTip = document.querySelector('.js-amountToTip'); 
   // $10 tip

   if (AmountTip.value === '10' || AmountTip.value === '20' || AmountTip.value === '50' || AmountTip.value === MoreLessTip.value) {
    AmountTip.value = '35';
   }

}
// function for Excellent Tip 
function tipActionExcellent() {
    const TriedTip = document.querySelector('.js-tried'); 
   // $10 tip
   const GoodTip = document.querySelector('.js-good'); 
   // $10 tip
   const GreatTip = document.querySelector('.js-great'); 
   // $10 tip
   const ExcellentTip = document.querySelector('.js-excellent'); 
   // $10 tip
   const MoreLessTip = document.querySelector('.js-moreless'); 
   // $10 tip
   const AmountTip = document.querySelector('.js-amountToTip'); 
   // $10 tip

   if (AmountTip.value === '10' || AmountTip.value === '20' || AmountTip.value === '35' || AmountTip.value === MoreLessTip.value) {
    AmountTip.value = '50';
   }  

}
// function for More-Less Tip 
function tipActionMoreLess() {
    const TriedTip = document.querySelector('.js-tried'); 
   // $10 tip
   const GoodTip = document.querySelector('.js-good'); 
   // $10 tip
   const GreatTip = document.querySelector('.js-great'); 
   // $10 tip
   const ExcellentTip = document.querySelector('.js-excellent'); 
   // $10 tip
   const MoreLessTip = document.querySelector('.js-moreless'); 
   // $10 tip
   const AmountTip = document.querySelector('.js-amountToTip'); 
   // $10 tip

   AmountTip.value = MoreLessTip.value;
   MoreLessTip.value = '';

   if (AmountTip.value === '10' || AmountTip.value === '20' || AmountTip.value === '35' || AmountTip.value === '50') {
    AmountTip.value = MoreLessTip.value;
   }
}
// function for Reset Tip 
function ResetTip() {
    const TriedTip = document.querySelector('.js-tried'); 
   // $10 tip
   const GoodTip = document.querySelector('.js-good'); 
   // $10 tip
   const GreatTip = document.querySelector('.js-great'); 
   // $10 tip
   const ExcellentTip = document.querySelector('.js-excellent'); 
   // $10 tip
   const MoreLessTip = document.querySelector('.js-moreless'); 
   // $10 tip
   const AmountTip = document.querySelector('.js-amountToTip'); 
   // $10 tip

   AmountTip.value = '';
}
// Function for Tip-conform Pop
function tipConfirm() {
    const AmountTip = document.querySelector('.js-amountToTip'); 
   // $10 tip
   const tipconfirmElem = document.querySelector('.js-tipconfirm'); 
   // $10 tip
   const confrimStatement = document.querySelector('.js-confirmStatement'); 
   // $10 tip
   

   if (AmountTip.value !== '' && tipconfirmElem.classList.contains('confirm-check-None')) {
    tipconfirmElem.classList.add('confirm-check');
    tipconfirmElem.classList.remove('confirm-check-None');

    confrimStatement.innerText = `Dear Customer, you are about to pay $${AmountTip.value} to Jesus TnT for an Appreciaiton of service.
    Do you agree that this will be charged from your account? if so please check the box and click 'Continue' to proceed to payment options`;
   }
} 
            
