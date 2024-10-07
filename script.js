document.getElementById('postForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const postContent = document.getElementById('postContent').value;
    const postImage = document.getElementById('postImage').files[0];
    const postAudio = document.getElementById('postAudio').files[0];

    const postElement = document.createElement('div');
    postElement.classList.add('post');

    if (postContent) {
        const contentElement = document.createElement('p');
        contentElement.textContent = postContent;
        postElement.appendChild(contentElement);
    }

    if (postImage) {
        const imageElement = document.createElement('img');
        imageElement.src = URL.createObjectURL(postImage);
        postElement.appendChild(imageElement);
    }

    if (postAudio) {
        const audioElement = document.createElement('audio');
        audioElement.controls = true;
        audioElement.src = URL.createObjectURL(postAudio);
        postElement.appendChild(audioElement);
    }

    const likeButton = document.createElement('span');
    likeButton.classList.add('like-button');
    likeButton.textContent = 'Like';
    likeButton.addEventListener('click', function() {
        likeButton.textContent = 'Liked';
    });

    const commentButton = document.createElement('span');
    commentButton.classList.add('comment-button');
    commentButton.textContent = 'Comment';

    const commentsSection = document.createElement('div');
    commentsSection.classList.add('comments-section');

    const commentInput = document.createElement('textarea');
    commentInput.placeholder = 'Write a comment...';

    commentButton.addEventListener('click', function() {
        commentsSection.appendChild(commentInput);
        commentInput.focus();
    });

    postElement.appendChild(likeButton);
    postElement.appendChild(commentButton);
    postElement.appendChild(commentsSection);

    document.getElementById('feed').appendChild(postElement);

    // Reset the form
    document.getElementById('postForm').reset();
});