
        function applyStyles() {
            // Estilos generales del body
            document.body.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
            document.body.style.background = 'linear-gradient(135deg, #000000, #182715, #001C3C)';
            document.body.style.color = 'white';
            
            const hero = document.querySelector('.hero');
            hero.style.height = '100vh';
            hero.style.display = 'flex';
            hero.style.flexDirection = 'column';
            hero.style.justifyContent = 'center';
            hero.style.alignItems = 'center';
            hero.style.textAlign = 'center';
            hero.style.padding = '0 20px';
            hero.style.position = 'relative';
            hero.style.overflow = 'hidden';
            
            const particles = document.querySelector('.particles');
            particles.style.position = 'absolute';
            particles.style.top = '0';
            particles.style.left = '0';
            particles.style.width = '100%';
            particles.style.height = '100%';
            particles.style.zIndex = '1';
            
            const heroContent = document.querySelector('.hero-content');
            heroContent.style.position = 'relative';
            heroContent.style.zIndex = '2';
            heroContent.style.maxWidth = '800px';
            
            const heroTitle = document.querySelector('.hero h1');
            heroTitle.style.fontSize = '4rem';
            heroTitle.style.marginBottom = '20px';
            heroTitle.style.background = 'linear-gradient(45deg, #00dbde, #fc00ff)';
            heroTitle.style.webkitBackgroundClip = 'text';
            heroTitle.style.backgroundClip = 'text';
            heroTitle.style.color = 'transparent';
            heroTitle.style.animation = 'textGlow 2s ease-in-out infinite alternate';
            
            const heroParagraph = document.querySelector('.hero p');
            heroParagraph.style.fontSize = '1.2rem';
            heroParagraph.style.marginBottom = '30px';
            heroParagraph.style.lineHeight = '1.6';
            heroParagraph.style.opacity = '0.9';
            
            const ctaButtons = document.querySelector('.cta-buttons');
            ctaButtons.style.display = 'flex';
            ctaButtons.style.gap = '20px';
            ctaButtons.style.justifyContent = 'center';
            ctaButtons.style.flexWrap = 'wrap';
            
            const buttons = document.querySelectorAll('.btn');
            buttons.forEach(btn => {
                btn.style.padding = '15px 30px';
                btn.style.borderRadius = '50px';
                btn.style.fontSize = '1rem';
                btn.style.fontWeight = 'bold';
                btn.style.textDecoration = 'none';
                btn.style.transition = 'all 0.3s ease';
                btn.style.position = 'relative';
                btn.style.overflow = 'hidden';
                btn.style.border = 'none';
                btn.style.cursor = 'pointer';
                btn.style.zIndex = '1';
            });
            
            const primaryButtons = document.querySelectorAll('.btn-primary');
            primaryButtons.forEach(btn => {
                btn.style.background = 'linear-gradient(45deg, #00dbde, #fc00ff)';
                btn.style.color = 'white';
                btn.style.boxShadow = '0 4px 15px rgba(0, 219, 222, 0.4)';
            });
            const secondaryButtons = document.querySelectorAll('.btn-secondary');
            secondaryButtons.forEach(btn => {
                btn.style.background = 'transparent';
                btn.style.color = 'white';
                btn.style.border = '2px solid white';
            });
            const modal = document.getElementById('welcomeModal');
            modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
            modal.style.justifyContent = 'center';
            modal.style.alignItems = 'center';
            modal.style.opacity = '0';
            modal.style.transition = 'opacity 0.3s ease';
            const modalContent = document.querySelector('.modal-content');
            modalContent.style.background = 'linear-gradient(135deg, #1a1a2e, #16213e)';
            modalContent.style.padding = '30px';
            modalContent.style.borderRadius = '15px';
            modalContent.style.maxWidth = '500px';
            modalContent.style.width = '90%';
            modalContent.style.position = 'relative';
            modalContent.style.transform = 'scale(0.8)';
            modalContent.style.transition = 'transform 0.3s ease';
            modalContent.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.5)';
            modalContent.style.border = '1px solid rgba(255, 255, 255, 0.1)';
            
            // Botón de cerrar modal
            const closeModal = document.getElementById('closeModal');
            closeModal.style.position = 'absolute';
            closeModal.style.top = '15px';
            closeModal.style.right = '15px';
            closeModal.style.fontSize = '1.5rem';
            closeModal.style.color = 'white';
            closeModal.style.cursor = 'pointer';
            closeModal.style.transition = 'transform 0.3s ease';
            
            // Título del modal
            const modalTitle = document.querySelector('.modal h2');
            modalTitle.style.marginBottom = '20px';
            modalTitle.style.color = '#00dbde';
            
            // Párrafo del modal
            const modalParagraph = document.querySelector('.modal p');
            modalParagraph.style.marginBottom = '20px';
            modalParagraph.style.lineHeight = '1.6';
            
            // Efecto de cursor
            const cursor = document.querySelector('.cursor-effect');
            cursor.style.position = 'fixed';
            cursor.style.width = '20px';
            cursor.style.height = '20px';
            cursor.style.borderRadius = '50%';
            cursor.style.backgroundColor = 'rgba(0, 219, 222, 0.5)';
            cursor.style.pointerEvents = 'none';
            cursor.style.transform = 'translate(-50%, -50%)';
            cursor.style.mixBlendMode = 'screen';
            cursor.style.zIndex = '9999';
            cursor.style.transition = 'transform 0.1s ease';
            
            // Aplicar estilos responsive
            applyResponsiveStyles();
        }
        
        // Aplicar estilos responsive
        function applyResponsiveStyles() {
            if (window.matchMedia("(max-width: 768px)").matches) {
                const heroTitle = document.querySelector('.hero h1');
                heroTitle.style.fontSize = '2.5rem';
                
                const heroParagraph = document.querySelector('.hero p');
                heroParagraph.style.fontSize = '1rem';
                
                const buttons = document.querySelectorAll('.btn');
                buttons.forEach(btn => {
                    btn.style.padding = '12px 25px';
                    btn.style.fontSize = '0.9rem';
                });
                
                const ctaButtons = document.querySelector('.cta-buttons');
                ctaButtons.style.flexDirection = 'column';
                ctaButtons.style.gap = '15px';
            } else {
                const heroTitle = document.querySelector('.hero h1');
                heroTitle.style.fontSize = '4rem';
                
                const heroParagraph = document.querySelector('.hero p');
                heroParagraph.style.fontSize = '1.2rem';
                
                const buttons = document.querySelectorAll('.btn');
                buttons.forEach(btn => {
                    btn.style.padding = '15px 30px';
                    btn.style.fontSize = '1rem';
                });
                
                const ctaButtons = document.querySelector('.cta-buttons');
                ctaButtons.style.flexDirection = 'row';
                ctaButtons.style.gap = '20px';
            }
        }
        
        function createParticles() {
            const particlesContainer = document.getElementById('particles');
            const particleCount = 30;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.classList.add('particle');
                
                const size = Math.random() * 10 + 5;
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                particle.style.left = `${Math.random() * 100}%`;
                particle.style.top = `${Math.random() * 100}%`;
                particle.style.opacity = Math.random() * 0.5 + 0.1;
                particle.style.position = 'absolute';
                particle.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
                particle.style.borderRadius = '50%';
                
                const duration = Math.random() * 20 + 10;
                particle.style.animation = `float ${duration}s infinite linear`;
                particle.style.animationDelay = `${Math.random() * 5}s`;
                
                particlesContainer.appendChild(particle);
            }
        }

        function initCustomCursor() {
            const cursor = document.querySelector('.cursor-effect');
            
            document.addEventListener('mousemove', (e) => {
                cursor.style.left = `${e.clientX}px`;
                cursor.style.top = `${e.clientY}px`;
            });
            
            const interactiveElements = document.querySelectorAll('button, a, .btn');
            interactiveElements.forEach(el => {
                el.addEventListener('mouseenter', () => {
                    cursor.style.transform = 'translate(-50%, -50%) scale(2)';
                    cursor.style.backgroundColor = 'rgba(252, 0, 255, 0.5)';
                });
                el.addEventListener('mouseleave', () => {
                    cursor.style.transform = 'translate(-50%, -50%) scale(1)';
                    cursor.style.backgroundColor = 'rgba(0, 219, 222, 0.5)';
                });
            });
        }

        function initButtonEffects() {
            const buttons = document.querySelectorAll('.btn');
            
            buttons.forEach(button => {
                button.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-5px)';
                    this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.3)';
                    
                    if (this.classList.contains('btn-primary')) {
                        this.style.boxShadow = '0 10px 20px rgba(0, 219, 222, 0.6)';
                    } else if (this.classList.contains('btn-secondary')) {
                        this.style.background = 'rgba(255, 255, 255, 0.1)';
                    }
                });
                
                button.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0)';
                    this.style.boxShadow = '';
                    
                    if (this.classList.contains('btn-primary')) {
                        this.style.boxShadow = '0 4px 15px rgba(0, 219, 222, 0.4)';
                    } else if (this.classList.contains('btn-secondary')) {
                        this.style.background = 'transparent';
                    }
                });
                
                button.addEventListener('mousedown', function() {
                    this.style.transform = 'translateY(0)';
                });
                
                button.addEventListener('click', function(e) {
                    const ripple = document.createElement('span');
                    ripple.style.position = 'absolute';
                    ripple.style.top = '50%';
                    ripple.style.left = '50%';
                    ripple.style.width = '5px';
                    ripple.style.height = '5px';
                    ripple.style.borderRadius = '100%';
                    ripple.style.transform = 'translate(-50%, -50%)';
                    ripple.style.pointerEvents = 'none';
                    ripple.style.zIndex = '-1';
                    
                    if (this.classList.contains('btn-primary')) {
                        ripple.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
                    } else {
                        ripple.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
                    }
                    
                    this.appendChild(ripple);
                    
                    setTimeout(() => {
                        ripple.style.transform = 'translate(-50%, -50%) scale(25)';
                        ripple.style.opacity = '0';
                        ripple.style.transition = 'all 0.6s ease-out';
                    }, 10);
                    
                    setTimeout(() => {
                        ripple.remove();
                    }, 600);
                    
                    if (this.id === 'learnMoreBtn') {
                        e.preventDefault();
                        showModal();
                    }
                });
            });
        }
        function initModal() {
            const modal = document.getElementById('welcomeModal');
            const closeBtn = document.getElementById('closeModal');
            
            closeBtn.addEventListener('click', hideModal);
            
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    hideModal();
                }
            });
            
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && modal.classList.contains('active')) {
                    hideModal();
                }
            });
        }
        
        function showModal() {
            const modal = document.getElementById('welcomeModal');
            const modalContent = document.querySelector('.modal-content');
            
            modal.style.opacity = '1';
            modalContent.style.transform = 'scale(1)';
        }
        
        function hideModal() {
            const modal = document.getElementById('welcomeModal');
            const modalContent = document.querySelector('.modal-content');
            
            modal.style.opacity = '0';
            modalContent.style.transform = 'scale(0.8)';
            
            setTimeout(() => {
                modal.classList.remove('active');
            }, 300);
        }

        function initEntranceAnimations() {
            const heroContent = document.querySelector('.hero-content');
            const children = heroContent.children;
            
            for (let i = 0; i < children.length; i++) {
                const child = children[i];
                child.style.opacity = '0';
                child.style.transform = 'translateY(50px)';
                child.style.animation = `fadeInUp 0.8s ease-out ${0.2 + i * 0.2}s forwards`;
            }
        }

        document.addEventListener('DOMContentLoaded', () => {
            applyStyles();
            createParticles();
            initCustomCursor();
            initButtonEffects();
            initModal();
            initEntranceAnimations();
            
            window.addEventListener('resize', applyResponsiveStyles);
            
            setTimeout(() => {
                document.getElementById('welcomeModal').classList.add('active');
                showModal();
            }, 3000);
        });
