//handles the mobile menu toggle and update HTML content based on screen size
function updateHTMLContent() {
    const header = document.querySelector('header');
    const footerText = document.querySelector('footer p a');

    if (window.innerWidth < 1600) {
        header.innerHTML = `
            <nav class="mobile-navbar">
                <a href="Findex.html" class="w3-round-xlarge navhead navbar">Thank You Fur Your Service</a>
                <button class="menu-toggle" onclick="toggleMenu()">☰</button>
                <div id="mobile-menu" class="mobile-menu">
                    <a href="about.html" class="mobile-navitem">About Us</a>
                    <a href="stories.html" class="mobile-navitem">Success Stories</a>
                    <a href="services.html" class="mobile-navitem">Meet The Animals</a>
                    <a href="application.html" class="mobile-navitem">Adoption Program</a>
                </div>
            </nav>
        `;
        footerText.textContent = "Contact Us";
    } else {
        header.innerHTML = `
            <nav class="navbar">
                <a href="Findex.html" class="w3-round-xlarge navhead navbar">Thank You Fur Your Service</a>
                <div class="w3-bar">
                    <a class="w3-bar-item w3-round-xlarge navitem" href="about.html">About Us</a>
                    <a class="w3-bar-item w3-round-xlarge navitem" href="stories.html">Success Stories</a>
                    <a class="w3-bar-item w3-round-xlarge navitem" href="services.html">Meet The Animals</a>
                    <a class="w3-bar-item w3-round-xlarge navitem" href="application.html">Adoption Program</a>
                </div>
            </nav>
        `;
        footerText.textContent = "Have any questions? Please feel free to contact us here.";
    }
}


function toggleMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('show');
}

//Watches for screen size changes and updates the HTML content accordingly
window.addEventListener('resize', updateHTMLContent);
window.addEventListener('load', updateHTMLContent);


// handles the modal functionality
function openModal() {
    document.getElementById('applyModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('applyModal').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('applyModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

function openDonationModal() {
    document.getElementById('donationModal').style.display = 'block';
}

function closeDonationModal() {
    document.getElementById('donationModal').style.display = 'none';
}

function openThankYouModal() {
    document.getElementById('thankYouModal').style.display = 'block';
}

function closeThankYouModal() {
    document.getElementById('thankYouModal').style.display = 'none';
}

function handleDonation(event) {
    event.preventDefault(); 
    closeDonationModal();
    openThankYouModal();
}


// Allows the user to click donate now on donation modal and then it opens the thank you modal
window.onclick = function(event) {
    const donationModal = document.getElementById('donationModal');
    const thankYouModal = document.getElementById('thankYouModal');
    if (event.target === donationModal) {
        closeDonationModal();
    } else if (event.target === thankYouModal) {
        closeThankYouModal();
    }
};


//makes the card information not show until the user enters a donation amount
function showCardInfo() {
    const donationAmount = document.getElementById('donationAmount').value;
    const cardInfo = document.getElementById('cardInfo');
    
    // Show card information if a valid amount is entered
    if (donationAmount && parseFloat(donationAmount) > 0) {
        cardInfo.style.display = 'block';
    } else {
        cardInfo.style.display = 'none';
    }
}

document.getElementById('contactModal').style.display = 'block';

function openContactModal() {
    document.getElementById('contactModal').style.display = 'block';
}

function closeContactModal() {
    document.getElementById('contactModal').style.display = 'none';
}
