// Sample Quotes
const quotes = [
	"The only way to do great work is to love what you do. - Steve Jobs",
	"Believe you can and you're halfway there. - Theodore Roosevelt",
	"Your time is limited, don't waste it living someone else's life. - Steve Jobs",
	"Strive not to be a success, but rather to be of value. - Albert Einstein",
	"The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
	];

function generateQuote() {
	const randomIndex = Math.floor(Math.random() * quotes.length);
	const quoteElement = document.getElementById('quote');
	quoteElement.textContent = quotes[randomIndex];
}