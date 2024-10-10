// script.js

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const bookingForm = document.getElementById('bookingForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            if (!validateContactForm()) {
                event.preventDefault();
            }
        });
    }

    if (bookingForm) {
        bookingForm.addEventListener('submit', function(event) {
            if (!validateBookingForm()) {
                event.preventDefault();
            }
        });
    }

    function validateContactForm() {
        const fname = document.getElementById('fname').value.trim();
        const sname = document.getElementById('sname').value.trim();
        const pnum = document.getElementById('pnum').value.trim();
        const gmail = document.getElementById('gmail').value.trim();
        const info = document.getElementById('info').value.trim();
        const errors = [];

        if (!fname) errors.push('First Name is required.');
        if (!sname) errors.push('Last Name is required.');
        if (!pnum) errors.push('Phone Number is required.');
        if (!gmail) errors.push('Email is required.');
        if (!info) errors.push('Description is required.');

        if (errors.length > 0) {
            alert(errors.join('\n'));
            return false;
        }
        return true;
    }

    function validateBookingForm() {
        const fname = document.getElementById('fname').value.trim();
        const sname = document.getElementById('sname').value.trim();
        const pnum = document.getElementById('pnum').value.trim();
        const gmail = document.getElementById('gmail').value.trim();
        const sday = document.getElementById('sday').value.trim();
        const lday = document.getElementById('lday').value.trim();
        const daysl = document.getElementById('daysl').value.trim();
        const errors = [];

        if (!fname) errors.push('First Name is required.');
        if (!sname) errors.push('Last Name is required.');
        if (!pnum) errors.push('Phone Number is required.');
        if (!gmail) errors.push('Email is required.');
        if (!sday) errors.push('Start Date is required.');
        if (!lday) errors.push('Last Date is required.');
        if (!daysl) errors.push('Days staying is required.');

        if (errors.length > 0) {
            alert(errors.join('\n'));
            return false;
        }
        return true;
    }  
});
