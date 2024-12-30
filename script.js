<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', function() {
    const username = 'manojvn2612';
    const repoList = document.getElementById('repo-list');

    fetch(`https://api.github.com/users/${username}/repos`)
        .then(response => response.json())
        .then(repos => {
            repos.forEach(repo => {
                const repoDiv = document.createElement('div');
                repoDiv.classList.add('repo');

                const repoName = document.createElement('h3');
                repoName.textContent = repo.name;
                repoDiv.appendChild(repoName);

                const repoDescription = document.createElement('p');
                repoDescription.textContent = repo.description;
                repoDiv.appendChild(repoDescription);

                const repoLink = document.createElement('a');
                repoLink.href = repo.html_url;
                repoLink.textContent = 'View Repository';
                repoLink.target = '_blank';
                repoDiv.appendChild(repoLink);

                repoList.appendChild(repoDiv);
            });
        })
        .catch(error => console.error('Error fetching repos:', error));
=======
document.addEventListener('DOMContentLoaded', function() {
    const username = 'manojvn2612';
    const repoList = document.getElementById('repo-list');

    fetch(`https://api.github.com/users/${username}/repos`)
        .then(response => response.json())
        .then(repos => {
            repos.forEach(repo => {
                const repoDiv = document.createElement('div');
                repoDiv.classList.add('repo');

                const repoName = document.createElement('h3');
                repoName.textContent = repo.name;
                repoDiv.appendChild(repoName);

                const repoDescription = document.createElement('p');
                repoDescription.textContent = repo.description;
                repoDiv.appendChild(repoDescription);

                const repoLink = document.createElement('a');
                repoLink.href = repo.html_url;
                repoLink.textContent = 'View Repository';
                repoLink.target = '_blank';
                repoDiv.appendChild(repoLink);

                repoList.appendChild(repoDiv);
            });
        })
        .catch(error => console.error('Error fetching repos:', error));
>>>>>>> 47d2baa09361e19802ada084ac2e9022d0787894
});