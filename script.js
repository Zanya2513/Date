document.getElementById('yesBtn').addEventListener('click', function() {
    document.getElementById('response').innerHTML = "Yay! I can't wait!\nNo tumhare liye option h hi nhi";
});

document.getElementById('noBtn').addEventListener('mouseover', moveButton);
document.getElementById('noBtn').addEventListener('click', showNoMessage);

function moveButton() {
    const button = document.getElementById('noBtn');
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();

    const newTop = Math.random() * (containerRect.height - button.offsetHeight);
    const newLeft = Math.random() * (containerRect.width - button.offsetWidth);

    button.style.top = `${newTop}px`;
    button.style.left = `${newLeft}px`;
}

function showNoMessage() {
    document.getElementById('response').innerHTML = "No tumhare liye option h hi nhi";
}
