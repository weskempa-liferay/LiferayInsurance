// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.getElementById('navMenu');

if (mobileMenuToggle && navMenu) {
  mobileMenuToggle.addEventListener('click', function() {
    navMenu.classList.toggle('active');
    
    const lines = mobileMenuToggle.querySelectorAll('.hamburger-line');
    if (navMenu.classList.contains('active')) {
      lines[0].style.transform = 'rotate(45deg) translateY(9px)';
      lines[1].style.opacity = '0';
      lines[2].style.transform = 'rotate(-45deg) translateY(-9px)';
    } else {
      lines[0].style.transform = '';
      lines[1].style.opacity = '';
      lines[2].style.transform = '';
    }
  });
  
  document.addEventListener('click', function(e) {
    const navFragment = document.getElementById('navigation-fragment');
    if (navFragment && !navFragment.contains(e.target)) {
      navMenu.classList.remove('active');
      const lines = mobileMenuToggle.querySelectorAll('.hamburger-line');
      lines[0].style.transform = '';
      lines[1].style.opacity = '';
      lines[2].style.transform = '';
    }
  });
}

// Agent Finder Form
const agentFinderForm = document.getElementById('agentFinderForm');
if (agentFinderForm) {
  agentFinderForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const zipCode = document.getElementById('zipCode').value;
    const productInterest = document.getElementById('productInterest').value;
    
    if (zipCode.length === 5) {
      alert(`Finding agents near ${zipCode}${productInterest ? ' for ' + productInterest : ''}`);
    }
  });
  
  const zipInput = document.getElementById('zipCode');
  if (zipInput) {
    zipInput.addEventListener('input', function(e) {
      this.value = this.value.replace(/\D/g, '').slice(0, 5);
    });
  }
}

// Product Cards Hover
const productCards = document.querySelectorAll('.product-card');
productCards.forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.borderColor = '#FFCF31';
  });
  
  card.addEventListener('mouseleave', function() {
    this.style.borderColor = 'transparent';
  });
});

// Claims Buttons
const claimsBtns = document.querySelectorAll('.claims-btn');
claimsBtns.forEach(btn => {
  btn.addEventListener('click', function(e) {
    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
      this.style.transform = '';
    }, 150);
  });
});

// Blog Cards Animation
const blogCards = document.querySelectorAll('.blog-card');
blogCards.forEach((card, index) => {
  card.style.animationDelay = `${index * 0.1}s`;
});

// Customer Reviews Stars
const starsContainer = document.querySelector('.stars');
if (starsContainer) {
  const rating = parseFloat(starsContainer.getAttribute('data-rating')) || 4.5;
  const stars = starsContainer.querySelectorAll('.star');
  
  stars.forEach((star, index) => {
    if (index < Math.floor(rating)) {
      star.style.color = '#FFCF31';
    } else if (index < rating) {
      star.style.background = 'linear-gradient(90deg, #FFCF31 50%, #ddd 50%)';
      star.style.webkitBackgroundClip = 'text';
      star.style.webkitTextFillColor = 'transparent';
      star.style.backgroundClip = 'text';
    } else {
      star.style.color = '#ddd';
    }
  });
}

// Footer Copyright Year
const copyrightText = document.getElementById('copyright');
if (copyrightText) {
  const currentYear = new Date().getFullYear();
  copyrightText.textContent = `© ${currentYear} Selective Insurance. All rights reserved.`;
}

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

console.log('Selective Insurance Fragment Collection Preview Loaded');
