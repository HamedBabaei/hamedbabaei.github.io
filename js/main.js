
function loadPage(pageName) {
    return fetch("../pages/"+pageName + '.html')
        .then(response => response.text())
        .catch(error => console.error('Error fetching the file:', error));
}

async function navigate(page) {
    const contentDiv = document.getElementById('content');
    let content;
    switch (page) {
        case 'home':
            content = await loadPage('home');
            break;
        case 'project':
            content = await loadPage('project');
            break;
        case 'experience':
            content = await loadPage('experience');
            break;
        default:
            break;
    }
    if (content) {
        contentDiv.innerHTML = content;
    }
}


// Initially load the home page
navigate('home');
