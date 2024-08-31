// bibtexParser.js

// Function to read the BibTeX data from a file
export async function loadBibtexFile(filePath) {
    try {
        const response = await fetch(filePath);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.text();
    } catch (error) {
        console.error("Error loading BibTeX file:", error);
        throw error; // Re-throw the error to be caught by the caller
    }
}


// Function to parse BibTeX entries
export function parseBibTex(bibText) {
    const entries = bibText.split('@').slice(1); // Split the BibTeX entries
    const papers = [];

    entries.forEach(entry => {
        const type = entry.split('{')[0].trim(); // Get entry type (e.g., "article", "inproceedings")
        const content = entry.slice(entry.indexOf('{') + 1, entry.lastIndexOf('}')).trim(); // Get the content inside { }

        // Create an object to store the BibTeX fields
        const paper = {};
        const lines = content.split(',\n');

        // Parse each field in the entry
        lines.forEach(line => {
            const fieldMatch = line.match(/(\w+)\s*=\s*[{"]([^"}]+)[}"]/);
            if (fieldMatch) {
                const key = fieldMatch[1].trim().toLowerCase();
                const value = fieldMatch[2].trim();
                paper[key] = value;
            }
        });

        papers.push(paper); // Add the parsed paper to the array
    });

    return papers;
}

// Function to group papers by year
export function groupPapersByYear(papers) {
    const grouped = {};
    papers.forEach(paper => {
        const year = paper.year || 'Unknown'; // Handle missing years
        if (!grouped[year]) {
            grouped[year] = [];
        }
        grouped[year].push(paper);
    });
    return grouped;
}

// Function to generate HTML from the grouped papers
export function generateHTML(papersByYear) {
    let html = '';

    // Sort years in descending order
    Object.keys(papersByYear).sort((a, b) => b - a).forEach(year => {
        html += `<h2>${year}</h2>`;
        papersByYear[year].forEach(paper => {
            const authors = paper.author ? paper.author.split('and').map(a => a.trim()).join(', ') : 'Unknown authors';
            const title = paper.title || 'Untitled';
            const booktitle = paper.booktitle || '';
            const journal = paper.journal || '';
            const pages = paper.pages ? `, ${paper.pages}` : '';
            const publisher = paper.publisher ? `, ${paper.publisher}` : '';
            const organization = paper.organization ? `, ${paper.organization}` : '';
            const doi = paper.doi ? `<a href="https://doi.org/${paper.doi}" target="_blank">Link to paper</a>` : '';

            html += `
                <div class="paper-entry">
                    <strong>${authors}</strong>. ${title}. 
                    <em>${booktitle || journal}</em>${pages}${publisher}${organization}, ${paper.year}.
                    <br />
                    ${doi}
                </div>`;
        });
    });

    return html;
}

// async function loadAndRenderPublications(filePath) {
//     const contentDiv = document.getElementById('content');
//     const bibText = await loadBibtexFile(filePath);
//     const papers = parseBibTex(bibText);
//     const papersByYear = groupPapersByYear(papers);
//     const htmlContent = generateHTML(papersByYear);
//     contentDiv.innerHTM = htmlContent;
// }



async function loadAndRenderPublications() {
    const contentDiv = document.getElementById('content');
    const filePath='assets/publications.txt'
    const bibText = await loadBibtexFile(filePath);
    const papers = parseBibTex(bibText);
    const papersByYear = groupPapersByYear(papers);
    const htmlContent = generateHTML(papersByYear);
    contentDiv.innerHTM = htmlContent;
}


// Initially load the home page
// loadAndRenderPublications('assets/publications.txt');

