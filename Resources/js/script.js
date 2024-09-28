const quoteText = document.querySelector(".quote");
const authorName = document.querySelector(".author .name");
const quoteBtn = document.querySelector("button");
const soundBtn = document.querySelector(".sound");
const copyBtn = document.querySelector(".copy");

const quotes = [
  { content: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
  { content: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
  { content: "We cannot solve problems with the kind of thinking we employed when we came up with them.", author: "Albert Einstein" },
  { content: "Learn as if you will live forever, live like you will die tomorrow.", author: "Mahatma Gandhi" },
  { content: "Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.", author: "Mark Twain" },
  { content: "When you give joy to other people, you get more joy in return. You should give a good thought to the happiness that you can give out.", author: "Eleanor Roosevelt" },
  { content: "When you change your thoughts, remember to also change your world.", author: "Norman Vincent Peale" },
  { content: "It is only when we take chances that our lives improve. The initial and the most difficult risk we need to take is to become honest.", author: "Walter Anderson" },
  { content: "Nature has given us all the pieces required to achieve exceptional wellness and health, but has left it to us to put these pieces together.", author: "Diane McLaren" },
  { content: "Success is not final; failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
  { content: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
  { content: "Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.", author: "Dale Carnegie" },
  { content: "Don’t let yesterday take up too much of today.", author: "Will Rogers" },
  { content: "Experience is a hard teacher because she gives the test first, the lesson afterward.", author: "Vernon Sanders Law" },
  { content: "When we strive to become better than we are, everything around us becomes better too.", author: "Paulo Coelho" },
  { content: "Opportunity is missed by most people because it is dressed in overalls and looks like work.", author: "Thomas Edison" },
  { content: "You can have results or excuses. Not both.", author: "Arnold Schwarzenegger" },
  { content: "The journey of a thousand miles begins with one step.", author: "Lao Tzu" },
  { content: "Think of many things, do one.", author: "Portuguese proverb" },
  { content: "Remember, no one can make you feel inferior without your consent.", author: "Eleanor Roosevelt" },
  { content: "You will never change your life until you change something you do daily. The secret of your success is found in your daily routine.", author: "John C. Maxwell" },
  { content: "Define success on your own terms, achieve it by your own rules, and build a life you’re proud to live.", author: "Anne Sweeney" },
  { content: "", author: "" },
  { content: "Chains of habit are too light to be felt until they are too heavy to be broken.", author: "Warren Buffett" },
  { content: "Progress has little to do with speed, but much to do with direction.", author: "Timber Hawkeye" },
];

function generateRandomNumber(num) {
  return Math.floor(Math.random() * num);
}

function randomQuote() {
  quoteBtn.classList.add("Loading");
  quoteBtn.textContent = "Loading quote...";

  setTimeout(() => {
    try {
      let randomIndex;
      let randomQuote;
      let attempts = 0;
      const maxAttempts = 5;

      // Retry generating a new quote if the same quote is generated
      do {
        randomIndex = generateRandomNumber(quotes.length);
        randomQuote = quotes[randomIndex];
        attempts++;
      } while (quoteText.textContent === randomQuote.content && attempts < maxAttempts);

      if (quoteText.textContent === randomQuote.content) {
        throw new Error("Unable to generate a new quote. Please try again.");
      }

      quoteText.textContent = randomQuote.content;
      authorName.textContent = randomQuote.author;
    } catch (error) {
      console.error("Error generating random quote:", error);
      quoteText.textContent = "Error generating quote. Please try again.";
    } finally {
      quoteBtn.textContent = "New Quote";
      quoteBtn.classList.remove("Loading");
    }
  }, 1000); // Delay of 1000ms (1 second) to show the loading text
}

// Add event listener to the button
quoteBtn.addEventListener("click", randomQuote);

soundBtn.addEventListener("click", () => {
  let utterance = new SpeechSynthesisUtterance(`${quoteText.textContent} by ${authorName.textContent}`);
  speechSynthesis.speak(utterance);

  utterance.onerror = (Event) => {
    console.error("Speech error", Event);
    alert("An error occurred.");
  };
});

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(quoteText.textContent)
  .then(() => {
    console.log("Copied to clipboard");
    alert("Copied to clipboard");
  })
  .catch((error) => {
    console.error("Error copying to clipboard", error);
    alert("Error copying to clipboard");
  });
});
