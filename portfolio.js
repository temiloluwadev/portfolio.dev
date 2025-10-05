    const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');

        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.innerHTML = navMenu.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });

        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                hamburger.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });

        
        const dynamicText = document.querySelector('.dynamic-text');
        const phrases = ['modern websites', 'scalable APIs', 'intuitive UX', 'your next project'];
        let phraseIndex = 0;
        let letterIndex = 0;
        let currentPhrase = '';
        let isDeleting = false;
        let isEnd = false;

        function typeEffect() {
            isEnd = false;
            
            if (!isDeleting && letterIndex <= phrases[phraseIndex].length) {
                currentPhrase = phrases[phraseIndex].substring(0, letterIndex);
                dynamicText.textContent = currentPhrase;
                letterIndex += 1;
                setTimeout(typeEffect, 100);
            } else if (isDeleting && letterIndex >= 0) {
                currentPhrase = phrases[phraseIndex].substring(0, letterIndex);
                dynamicText.textContent = currentPhrase;
                letterIndex -= 1;
                setTimeout(typeEffect, 50);
            } else {
                isEnd = true;
                isDeleting = !isDeleting;
                
                if (!isDeleting) {
                    phraseIndex = (phraseIndex + 1) % phrases.length;
                }
                
                setTimeout(typeEffect, 1000);
            }
        }

        
        function animateProgressBars() {
            const progressBars = document.querySelectorAll('.progress');
            
            progressBars.forEach(bar => {
                const width = bar.getAttribute('data-width');
                bar.style.width = width;
            });
        }

        
        window.addEventListener('DOMContentLoaded', () => {
            typeEffect();
            
            
            setTimeout(animateProgressBars, 500);
        });

        
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 70,
                        behavior: 'smooth'
                    });
                }
            });
        });