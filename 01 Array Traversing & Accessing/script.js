
const arr = [6, 3, 9, 7, 2, 8, 4, 1, 5, 0];

document.getElementById('submitButton').addEventListener('click', (e) => {
    let index = parseInt(document.getElementById('element').value);
    alert(arr[index])
});
