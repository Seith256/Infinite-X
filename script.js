// Mock Data
let posts = [];

// Create Post
function createPost() {
    const content = document.getElementById('postContent').value;
    const file = document.getElementById('fileUpload').files[0];
    
    const post = {
        content,
        fileUrl: URL.createObjectURL(file),
        likes: 0,
        comments: []
    };

    posts.unshift(post);
    displayPosts();
}

// Display Posts
function displayPosts() {
    const feed = document.getElementById('feed');
    feed.innerHTML = '';
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
            <p>${post.content}</p>
            ${post.fileUrl ? `<img src="${post.fileUrl}" />` : ''}
            <button onclick="likePost()">Like</button>
            <button onclick="commentPost()">Comment</button>
        `;
        feed.appendChild(postElement);
    });
}

// Mock Registration
function register() {
    alert('User registered successfully');
    window.location.href = 'login.html';
}

// Mock Login
function login() {
    alert('Login successful');
    window.location.href = 'index.html';
}

// Logout
function logout() {
    alert('Logged out');
    window.location.href = 'login.html';
}

// Like Post
function likePost() {
    alert('You liked the post');
}

// Comment on Post
function commentPost() {
    const comment = prompt('Write a comment:');
    if (comment) {
        alert('Comment added');
    }
}
// Mock Users Data
const users = [
    { username: 'john_doe', profileUrl: 'profile.html' },
    { username: 'jane_smith', profileUrl: 'profile.html' },
    { username: 'mike_rock', profileUrl: 'profile.html' }
];

// User Search Function
function searchUsers() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = '';

    const filteredUsers = users.filter(user => user.username.toLowerCase().includes(query));

    if (filteredUsers.length > 0) {
        filteredUsers.forEach(user => {
            const userElement = document.createElement('div');
            userElement.classList.add('post');
            userElement.innerHTML = `
                <p>${user.username}</p>
                <a href="${user.profileUrl}">View Profile</a>
            `;
            searchResults.appendChild(userElement);
        });
        searchResults.style.display = 'block';
    } else {
        searchResults.innerHTML = '<p>No users found.</p>';
        searchResults.style.display = 'block';
    }
}
// Mock User Posts
const userPosts = [
    {
        content: 'Enjoying the sunset!',
        fileUrl: 'https://via.placeholder.com/600x400',
        likes: 15,
        comments: ['Beautiful!', 'Amazing shot!']
    },
    {
        content: 'Loving the new vibes in the city.',
        fileUrl: 'https://via.placeholder.com/400x400',
        likes: 23,
        comments: ['Where is this?', 'Cool!']
    }
];

// Display User Posts on Profile
function loadUserPosts() {
    const postContainer = document.getElementById('userPosts');
    postContainer.innerHTML = '';

    if (userPosts.length > 0) {
        userPosts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.classList.add('post');
            postElement.innerHTML = `
                <p>${post.content}</p>
                <img src="${post.fileUrl}" alt="User Post">
                <div>
                    <button onclick="likePost()">❤️ ${post.likes}</button>
                    <button onclick="commentPost()">💬 ${post.comments.length}</button>
                </div>
            `;
            postContainer.appendChild(postElement);
        });
    } else {
        postContainer.innerHTML = '<p>No posts yet.</p>';
    }
}

// Load posts on page load
window.onload = loadUserPosts;
// Mock Posts from Other Users
const communityPosts = [
    {
        username: 'alice_wonder',
        content: 'Exploring the great outdoors! 🌲',
        fileUrl: 'https://via.placeholder.com/500x300',
        likes: 34,
        comments: 10
    },
    {
        username: 'mark_traveler',
        content: 'Sunset at the beach. Life is beautiful.',
        fileUrl: 'https://via.placeholder.com/500x400',
        likes: 50,
        comments: 18
    }
];

// Display Other Users' Posts
function displayCommunityPosts() {
    const feed = document.getElementById('feed');
    communityPosts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
            <h4>${post.username}</h4>
            <p>${post.content}</p>
            <img src="${post.fileUrl}" alt="User Post">
            <div>
                <button onclick="likePost()">❤️ ${post.likes}</button>
                <button onclick="commentPost()">💬 ${post.comments}</button>
            </div>
        `;
        feed.appendChild(postElement);
    });
}

// Load Posts When Page Loads
window.onload = () => {
    loadUserPosts();  // Load user posts if on profile
    displayCommunityPosts();  // Display feed on index.html
};
