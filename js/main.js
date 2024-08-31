import {loadBibtexFile, parseBibTex, groupPapersByYear, generateHTML} from './bibtexParser.js';

// Function to load and render publications
async function loadAndRenderPublications() {
    const filePath = 'assets/publications.txt';
    const bibText = await loadBibtexFile(filePath); // Await the Promise
    const papers = parseBibTex(bibText);
    const papersByYear = groupPapersByYear(papers);
    return generateHTML(papersByYear);
}

// Function to load a page
async function loadPage(pageName) {
    try {
        const response = await fetch(`pages/${pageName}.html`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.text();
    } catch (error) {
        console.error('Error fetching the file:', error);
        return '<p>Error loading page content.</p>';
    }
}

// Function to navigate between pages
export async function navigate(page) {
    const contentDiv = document.getElementById('content');
    let content;
    switch (page) {
        case 'home':
            content = await loadPage('home');
            break;
        case 'project':
            content = await loadPage('project');
            break;
        case 'publication':
            content = await loadAndRenderPublications();
            break;
        case 'experience':
            content = await loadPage('experience');
            break;
        default:
            content = '<p>Page not found.</p>';
            break;
    }
    if (content) {
        contentDiv.innerHTML = content;
    }
}

// Initially load the home page
document.addEventListener('DOMContentLoaded', () => navigate('home'));

document.getElementById('home-page').addEventListener('click', () => navigate('home'));
document.getElementById('publication-page').addEventListener('click', () => navigate('publication'));
document.getElementById('project-page').addEventListener('click', () => navigate('project'));
document.getElementById('experience-page').addEventListener('click', () => navigate('experience'));

// Example event listener for a button (optional)
// document.getElementById('someButton').addEventListener('click', () => navigate('publications'));
