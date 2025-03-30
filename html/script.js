// script.js
let progressBar = document.getElementById('progress-bar');
let nextButton = document.getElementById('next-btn');
let electron = document.getElementById('electron');
let dnaSequence = document.getElementById('dna-sequence');
let currentStep = 0;

const sequence = ['A', 'T', 'G', 'C', 'A', 'T', 'G', 'C'];

nextButton.addEventListener('click', function() {
    if (currentStep < sequence.length) {
        // Update the DNA sequence
        dnaSequence.innerHTML = sequence.slice(0, currentStep + 1).join(' ');

        // Move the progress bar
        currentStep++;
        let progress = (currentStep / sequence.length) * 100;
        progressBar.style.width = progress + '%';

        // Simulate electron movement
        electron.style.animation = 'moveElectron 1s infinite alternate';
    } else {
        // End the game when sequence is completed
        nextButton.innerText = 'Game Over';
        nextButton.disabled = true;
        electron.style.animation = 'none';
    }
});
