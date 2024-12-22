function showModal(element) {
    var imgSrc = element.querySelector('img').src;
    document.getElementById('modalImage').src = imgSrc;
    document.getElementById('imageModal').style.display = 'flex';
}

function hideModal() {
    document.getElementById('imageModal').style.display = 'none';
}

window.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        hideModal();
    }
});