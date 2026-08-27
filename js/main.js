// Mobile menu toggle
function initMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }
}

// Add scroll effect to header
function initHeaderScroll() {
    const header = document.querySelector('header');
    if (!header) return;

    const applyState = () => {
        if (window.pageYOffset > 40) {
            header.style.background = 'rgba(7, 8, 12, 0.92)';
            header.style.boxShadow = '0 4px 24px rgba(0, 0, 0, 0.35)';
        } else {
            header.style.background = 'rgba(7, 8, 12, 0.72)';
            header.style.boxShadow = 'none';
        }
    };

    window.addEventListener('scroll', applyState);
    applyState();
}

// Reveal elements as they enter the viewport
function initScrollReveal() {
    const items = document.querySelectorAll('.reveal');
    if (!items.length) return;

    if (!('IntersectionObserver' in window)) {
        items.forEach(el => el.classList.add('in-view'));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    items.forEach(el => observer.observe(el));
}

// Render a set of research highlights into a given container
function renderHighlightsInto(containerId, limit) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let highlights = WEBSITE_DATA.highlights;
    if (!highlights || highlights.length === 0) {
        container.innerHTML = '<p class="loading">No research highlights available.</p>';
        return;
    }

    if (limit) {
        highlights = highlights.slice(0, limit);
    }

    container.innerHTML = highlights.map(highlight => {
        const imageOrIcon = highlight.image
            ? `<img src="${highlight.image}" alt="${highlight.title}" class="research-image" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">
               <div class="research-icon" style="display:none;"><i class="fas ${highlight.icon}"></i></div>`
            : `<div class="research-icon"><i class="fas ${highlight.icon}"></i></div>`;

        const linksHtml = highlight.links && highlight.links.length > 0
            ? `<div class="research-links">
                ${highlight.links.map(link => `
                    <a href="${link.url}" target="_blank" rel="noopener" class="research-link">
                        <i class="${link.icon}"></i> ${link.text}
                    </a>
                `).join('')}
               </div>`
            : '';

        return `
            <div class="research-card reveal">
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

function loadHighlights() {
    renderHighlightsInto('highlights-container');
    renderHighlightsInto('featured-highlights', 3);
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
                    <a href="${link.url}" target="_blank" rel="noopener" class="pub-link">
                        <i class="${link.icon}"></i> ${link.text}
                    </a>
                `).join('')}
               </div>`
            : '';

        return `
            <div class="publication-item reveal">
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
            ? `<a href="${award.link.url}" target="_blank" rel="noopener" class="award-link">
                <i class="fas fa-external-link-alt"></i> ${award.link.text}
               </a>`
            : '';

        return `
            <div class="award-card reveal">
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

// Render a proficiency bar (1-5 filled segments)
function levelBarHtml(level) {
    let segments = '';
    for (let i = 1; i <= 5; i++) {
        segments += `<span class="${i <= level ? 'filled' : ''}"></span>`;
    }
    return `<div class="level-bar">${segments}</div>`;
}

// Render a list of {name, level} entries into a levels grid
function renderLevelsInto(containerId, entries) {
    const container = document.getElementById(containerId);
    if (!container || !entries) return;

    container.innerHTML = entries.map(entry => `
        <div class="level-item reveal">
            <div class="level-name">${entry.name}</div>
            ${levelBarHtml(entry.level)}
        </div>
    `).join('');
}

// Load and render the skills page content
function loadSkills() {
    const skills = WEBSITE_DATA.skills;
    if (!skills) return;

    renderLevelsInto('prog-languages', skills.programmingLanguages);
    renderLevelsInto('spoken-languages', skills.spokenLanguages);

    const categoriesContainer = document.getElementById('skill-categories');
    if (categoriesContainer && skills.categories) {
        categoriesContainer.innerHTML = skills.categories.map(category => `
            <div class="skill-card reveal">
                <div class="skill-icon"><i class="fas ${category.icon}"></i></div>
                <h3>${category.title}</h3>
                <div class="research-tags">
                    ${category.items.map(item => `<span class="tag">${item}</span>`).join('')}
                </div>
            </div>
        `).join('');
    }
}

// Populate homepage stat counters from the data source
function loadStats() {
    const container = document.getElementById('statsContainer');
    if (!container) return;

    const stats = [
        { number: (WEBSITE_DATA.publicationsTotal || WEBSITE_DATA.publications.length) + '+', label: 'Publications' },
        { number: WEBSITE_DATA.highlights.length, label: 'Research Projects & Tools' },
        { number: WEBSITE_DATA.awards.length, label: 'Awards & Honors' },
        { number: new Date().getFullYear() - 2019 + '+', label: 'Years in AI Research' }
    ];

    container.innerHTML = stats.map(stat => `
        <div class="stat">
            <span class="stat-number">${stat.number}</span>
            <span class="stat-label">${stat.label}</span>
        </div>
    `).join('');
}

// Fill in the current year in the footer
function initFooterYear() {
    const el = document.getElementById('year');
    if (el) el.textContent = new Date().getFullYear();
}

document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initHeaderScroll();
    initFooterYear();
    loadStats();
    loadHighlights();
    loadPublications();
    loadAwards();
    loadSkills();
    initScrollReveal();
});
