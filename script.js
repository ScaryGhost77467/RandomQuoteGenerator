// Sample Quotes
const quotes = [
	"The only way to do great work is to love what you do. - Steve Jobs",
	"Believe you can and you're halfway there. - Theodore Roosevelt",
	"Your time is limited, don't waste it living someone else's life. - Steve Jobs",
	"Strive not to be a success, but rather to be of value. - Albert Einstein",
	"The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
	"That's one small step for man, one giant leap for mankind. - Neil Armstrong",
	"The only thing we have to fear is fear itself. - Franklin D. Roosevelt",
	"In the beginning, God created the heavens and the earth. - The Bible, Genesis 1:1",
	"The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
	];

function generateQuote() {
	const randomIndex = Math.floor(Math.random() * quotes.length);
	const quoteElement = document.getElementById('quote');
	quoteElement.textContent = quotes[randomIndex];
}