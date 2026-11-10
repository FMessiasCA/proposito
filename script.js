const wordsWithSpace = document.getElementById('wordsWithSpace');
const wordsNoSpace = document.getElementById('wordsNoSpace');

wordsWithSpace.addEventListener('input', () => {
    const regex = /\D/g;
    wordsNoSpace.innerText = wordsWithSpace.value.replace(regex, '');
})
