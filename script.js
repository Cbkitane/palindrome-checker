// Get DOM Elements
const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

// Add click event listener to button
checkBtn.addEventListener("click", () => {
    // Return if input is empty
    if (textInput.value.trim() === "") {
        alert("Please input a value");
        return;
    }

    // Check if palindrome or not
    if (isPalindrome(textInput.value.trim())) {
        result.textContent = `${textInput.value} is a palindrome.`;
    } else {
        result.textContent = `${textInput.value} is not a palindrome.`;
    }
});

// Palindrome checker function
const isPalindrome = (word) => {
    // Convert the word to lowercase and replace all non-letter/not number characters with empty
    let cleanedWord = word.toLowerCase().replace(/[^a-z0-9]/g, "");

    // Compare the cleaned word to its reversed version
    return cleanedWord === cleanedWord.split("").reverse().join("");
};
