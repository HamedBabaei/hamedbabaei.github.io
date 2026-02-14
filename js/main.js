// Mobile menu toggle
function initMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
        
        // Close mobile menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }
}

// Smooth scrolling for anchor links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Add scroll effect to header
function initHeaderScroll() {
    let lastScroll = 0;
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.style.background = 'rgba(13, 13, 26, 0.95)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
        } else {
            header.style.background = 'rgba(13, 13, 26, 0.85)';
            header.style.boxShadow = 'none';
        }
        
        lastScroll = currentScroll;
    });
}

// Load and render research highlights
function loadHighlights() {
    const container = document.getElementById('highlights-container');
    if (!container) return;
    
    const highlights = WEBSITE_DATA.highlights;
    
    if (!highlights || highlights.length === 0) {
        container.innerHTML = '<p class="loading">No research highlights available.</p>';
        return;
    }
    
    container.innerHTML = highlights.map(highlight => {
        const imageOrIcon = highlight.image 
            ? `<img src="${highlight.image}" alt="${highlight.title}" class="research-image" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">
               <div class="research-icon" style="display:none;"><i class="fas ${highlight.icon}"></i></div>`
            : `<div class="research-icon"><i class="fas ${highlight.icon}"></i></div>`;
        
        const linksHtml = highlight.links && highlight.links.length > 0
            ? `<div class="research-links">
                ${highlight.links.map(link => `
                    <a href="${link.url}" target="_blank" class="research-link">
                        <i class="${link.icon}"></i> ${link.text}
                    </a>
                `).join('')}
               </div>`
            : '';
        
        return `
            <div class="research-card">
                ${imageOrIcon}
                <h3>${highlight.title}</h3>
                <p>${highlight.description}</p>
                <div class="research-tags">
                    ${highlight.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                ${linksHtml}
            </div>
        `;
    }).join('');
}

// Load and render publications
function loadPublications() {
    const container = document.getElementById('publications-container');
    if (!container) return;
    
    const publications = WEBSITE_DATA.publications;
    
    if (!publications || publications.length === 0) {
        container.innerHTML = '<p class="loading">No publications available.</p>';
        return;
    }
    
    container.innerHTML = publications.map(pub => {
        const authorsHtml = pub.authors.map(author => 
            author.isMe ? `<strong>${author.name}</strong>` : author.name
        ).join(', ');
        
        const linksHtml = pub.links && pub.links.length > 0
            ? `<div class="pub-links">
                ${pub.links.map(link => `
                    <a href="${link.url}" target="_blank" class="pub-link">
                        <i class="${link.icon}"></i> ${link.text}
                    </a>
                `).join('')}
               </div>`
            : '';
        
        return `
            <div class="publication-item">
                <div class="pub-year">${pub.year}</div>
                <h3>${pub.title}</h3>
                <p class="pub-authors">${authorsHtml}</p>
                <p class="pub-venue">${pub.venue}</p>
                ${linksHtml}
            </div>
        `;
    }).join('');
}

// Load and render awards
function loadAwards() {
    const container = document.getElementById('awards-container');
    if (!container) return;
    
    const awards = WEBSITE_DATA.awards;
    
    if (!awards || awards.length === 0) {
        container.innerHTML = '<p class="loading">No awards available.</p>';
        return;
    }
    
    container.innerHTML = awards.map(award => {
        const linkHtml = award.link 
            ? `<a href="${award.link.url}" target="_blank" class="award-link">
                <i class="fas fa-external-link-alt"></i> ${award.link.text}
               </a>`
            : '';
        
        return `
            <div class="award-card">
                <div class="award-icon">
                    <i class="fas ${award.icon}"></i>
                </div>
                <div class="award-year">${award.year}</div>
                <h3>${award.title}</h3>
                <p class="award-org">${award.organization}</p>
                <p class="award-description">${award.description}</p>
                ${linkHtml}
            </div>
        `;
    }).join('');
}

// Initialize all functions when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initSmoothScroll();
    initHeaderScroll();
    loadHighlights();
    loadPublications();
    loadAwards();
});
