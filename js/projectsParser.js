export async function loadProjects() {
    try {
        // Fetch projects data
        const response = await fetch('assets/projects.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();

        // Create a container to hold all projects
        const projectContainer = document.createElement('div');
        projectContainer.classList.add('project-container');

        // Sort projects by year in descending order
        data.sort((a, b) => b.year - a.year);

        // Function to fetch GitHub repository data
        async function fetchGitHubData(repoUrl) {
            const repoName = repoUrl.split('/').slice(-2).join('/'); // Extracts owner/repo from URL
            const apiUrl = `https://api.github.com/repos/${repoName}`;
            try {
                const response = await fetch(apiUrl);
                if (!response.ok) {
                    throw new Error('Failed to fetch GitHub repository data');
                }
                const repoData = await response.json();

                const languagesResponse = await fetch(`${apiUrl}/languages`);
                if (!languagesResponse.ok) {
                    throw new Error('Failed to fetch GitHub repository languages');
                }
                const languagesData = await languagesResponse.json();
                const totalSize = Object.values(languagesData).reduce((a, b) => a + b, 0);
                const languages = Object.entries(languagesData).map(([lang, size]) => ({
                    language: lang,
                    percentage: ((size / totalSize) * 100).toFixed(2)
                }));

                return {
                    stars: repoData.stargazers_count,
                    forks: repoData.forks_count,
                    watchers: repoData.watchers_count,
                    languages: languages
                };
            } catch (error) {
                console.error('Error fetching GitHub data:', error);
                return {
                    stars: 'N/A',
                    forks: 'N/A',
                    watchers: 'N/A',
                    languages: []
                };
            }
        }

        // Iterate over the sorted data and create HTML for each project
        for (const project of data) {
            // Create a container for each project
            const projectDiv = document.createElement('div');
            projectDiv.classList.add('project');

            // Create elements for project information
            const logo = document.createElement('img');
            logo.src = project.logo;
            logo.alt = `${project.title} logo`;
            logo.classList.add('project-logo');

            const detailsDiv = document.createElement('div');
            detailsDiv.classList.add('project-details');

            // Title link that also includes the paper link
            const titleLink = document.createElement('a');
            titleLink.href = project.paper;
            titleLink.target = '_blank'; // Open in a new tab
            titleLink.textContent = `${project.title} (${project.year})`;
            titleLink.classList.add('project-title');

            const description = document.createElement('p');
            description.textContent = project.description;
            description.classList.add('project-description');

            // Create a container for the GitHub stats and languages
            const statsLanguagesDiv = document.createElement('div');
            statsLanguagesDiv.classList.add('stats-languages');

            // Fetch and display GitHub data
            const githubData = await fetchGitHubData(project.github);
            // const statsText = `GitHub (Stars: ${githubData.stars}, Forks: ${githubData.forks}, Watchers: ${githubData.watchers})`;
            // const statsText = `Stars: ${githubData.stars}, Forks: ${githubData.forks}`;
            const statsDiv = document.createElement('span');
            statsDiv.classList.add('github-stats');
            // statsDiv.textContent = statsText;

            // GitHub icon link
            const githubIconLink = document.createElement('a');
            githubIconLink.href = project.github;
            githubIconLink.target = '_blank'; // Open in a new tab

            const githubIcon = document.createElement('i');
            githubIcon.classList.add('fab', 'fa-github'); // Font Awesome GitHub icon
            githubIcon.classList.add('project-icon');
            githubIcon.textContent = " GitHub Repository"
            // Append GitHub icon to the link
            githubIconLink.appendChild(githubIcon);

            // Append GitHub icon link and stats
            statsLanguagesDiv.appendChild(githubIconLink);
            statsLanguagesDiv.appendChild(statsDiv);

            // Add programming languages and their percentages
            const languages = document.createElement('span');
            // languages.classList.add('project-languages');
            // const languageText = githubData.languages.map(lang => `${lang.language} (${lang.percentage}%)`).join(', ');
            // languages.textContent = `Languages: ${languageText}`;

            // Append languages to statsLanguagesDiv
            statsLanguagesDiv.appendChild(languages);

            // Add the conference or publication information
            const conferenceDiv = document.createElement('div');
            conferenceDiv.classList.add('project-conference');
            conferenceDiv.textContent = `Published in: ${project.conference || 'Not available'}`;

            // Add home page icon link if ID is present
            if (project.ID) {
                const homePageIconLink = document.createElement('a');
                homePageIconLink.href = `/${project.ID}`;
                homePageIconLink.target = '_blank'; // Open in a new tab

                homePageIconLink.classList.add('home-page-icon');


                const homePageIcon = document.createElement('i');
                homePageIcon.classList.add('fas', 'fa-home'); // Font Awesome home icon
                homePageIcon.textContent = ` Project Page`;

                homePageIconLink.appendChild(homePageIcon);
                statsLanguagesDiv.appendChild(homePageIconLink);
            }

            // Append all elements to detailsDiv
            detailsDiv.appendChild(titleLink);
            detailsDiv.appendChild(description);
            detailsDiv.appendChild(statsLanguagesDiv);
            detailsDiv.appendChild(conferenceDiv);

            // Append logo and details to projectDiv
            projectDiv.appendChild(logo);
            projectDiv.appendChild(detailsDiv);

            // Append the projectDiv to the container
            projectContainer.appendChild(projectDiv);
        }

        // Return the HTML structure (projectContainer)
        return projectContainer.outerHTML; // Return as a string
    } catch (error) {
        console.error('Error loading projects:', error);
        return '<p>Error loading projects.</p>';
    }
}
