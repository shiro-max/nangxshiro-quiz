// Grammar quiz questions for 50 levels
const quizData = {
    // Levels 1-10: Beginner
    1: [
        { id: 1, question: "I ___ a student.", answer: ["am", "is", "are"], correct: "am" },
        { id: 2, question: "She ___ to school.", answer: ["go", "goes", "going"], correct: "goes" }
    ],
    2: [
        { id: 1, question: "They ___ happy.", answer: ["is", "am", "are"], correct: "are" },
        { id: 2, question: "He ___ playing football.", answer: ["is", "are", "am"], correct: "is" }
    ],
    3: [
        { id: 1, question: "We ___ in London.", answer: ["live", "lives", "living"], correct: "live" },
        { id: 2, question: "I ___ to music.", answer: ["listen", "listens", "listening"], correct: "listen" }
    ],
    4: [
        { id: 1, question: "The cat ___ on the chair.", answer: ["sit", "sits", "sitting"], correct: "sits" },
        { id: 2, question: "She ___ her homework.", answer: ["do", "does", "doing"], correct: "does" }
    ],
    5: [
        { id: 1, question: "I ___ breakfast at 8 AM.", answer: ["eat", "eats", "eating"], correct: "eat" },
        { id: 2, question: "They ___ to the park.", answer: ["go", "goes", "going"], correct: "go" }
    ],
    6: [
        { id: 1, question: "He ___ a book.", answer: ["read", "reads", "reading"], correct: "reads" },
        { id: 2, question: "We ___ TV in the evening.", answer: ["watch", "watches", "watching"], correct: "watch" }
    ],
    7: [
        { id: 1, question: "She ___ English.", answer: ["study", "studies", "studying"], correct: "studies" },
        { id: 2, question: "I ___ to school.", answer: ["walk", "walks", "walking"], correct: "walk" }
    ],
    8: [
        { id: 1, question: "The dog ___ loud.", answer: ["bark", "barks", "barking"], correct: "barks" },
        { id: 2, question: "They ___ in the garden.", answer: ["play", "plays", "playing"], correct: "play" }
    ],
    9: [
        { id: 1, question: "You ___ very kind.", answer: ["is", "am", "are"], correct: "are" },
        { id: 2, question: "I ___ my teeth.", answer: ["brush", "brushes", "brushing"], correct: "brush" }
    ],
    10: [
        { id: 1, question: "She ___ a nice dress.", answer: ["wear", "wears", "wearing"], correct: "wears" },
        { id: 2, question: "We ___ to music.", answer: ["listen", "listens", "listening"], correct: "listen" }
    ],
    // Levels 11-20: Elementary
    11: [
        { id: 1, question: "I ___ visited Paris.", answer: ["have", "has", "had"], correct: "have" },
        { id: 2, question: "She ___ finished her work.", answer: ["have", "has", "had"], correct: "has" }
    ],
    12: [
        { id: 1, question: "They ___ played football.", answer: ["have", "has", "had"], correct: "have" },
        { id: 2, question: "He ___ eaten breakfast.", answer: ["have", "has", "had"], correct: "has" }
    ],
    13: [
        { id: 1, question: "We ___ seen that movie.", answer: ["have", "has", "had"], correct: "have" },
        { id: 2, question: "I ___ read this book.", answer: ["have", "has", "had"], correct: "have" }
    ],
    14: [
        { id: 1, question: "You ___ done well.", answer: ["have", "has", "had"], correct: "have" },
        { id: 2, question: "It ___ rained all day.", answer: ["have", "has", "had"], correct: "has" }
    ],
    15: [
        { id: 1, question: "The children ___ played outside.", answer: ["have", "has", "had"], correct: "have" },
        { id: 2, question: "She ___ written a letter.", answer: ["have", "has", "had"], correct: "has" }
    ],
    16: [
        { id: 1, question: "I ___ lost my keys.", answer: ["have", "has", "had"], correct: "have" },
        { id: 2, question: "They ___ arrived late.", answer: ["have", "has", "had"], correct: "have" }
    ],
    17: [
        { id: 1, question: "He ___ forgotten his homework.", answer: ["have", "has", "had"], correct: "has" },
        { id: 2, question: "We ___ bought a new car.", answer: ["have", "has", "had"], correct: "have" }
    ],
    18: [
        { id: 1, question: "You ___ made a mistake.", answer: ["have", "has", "had"], correct: "have" },
        { id: 2, question: "The teacher ___ explained the lesson.", answer: ["have", "has", "had"], correct: "has" }
    ],
    19: [
        { id: 1, question: "I ___ met your brother.", answer: ["have", "has", "had"], correct: "have" },
        { id: 2, question: "She ___ cooked dinner.", answer: ["have", "has", "had"], correct: "has" }
    ],
    20: [
        { id: 1, question: "They ___ traveled to Japan.", answer: ["have", "has", "had"], correct: "have" },
        { id: 2, question: "We ___ watched the news.", answer: ["have", "has", "had"], correct: "have" }
    ],
    // Levels 21-30: Pre-Intermediate
    21: [
        { id: 1, question: "If I ___ you, I would go.", answer: ["was", "were", "am"], correct: "were" },
        { id: 2, question: "I wish I ___ taller.", answer: ["was", "were", "am"], correct: "were" }
    ],
    22: [
        { id: 1, question: "She acts as if she ___ rich.", answer: ["was", "were", "is"], correct: "were" },
        { id: 2, question: "I'd rather you ___ now.", answer: ["leave", "left", "leaves"], correct: "left" }
    ],
    23: [
        { id: 1, question: "He talks as though he ___ everything.", answer: ["knows", "knew", "known"], correct: "knew" },
        { id: 2, question: "If she ___ time, she would help.", answer: ["had", "has", "have"], correct: "had" }
    ],
    24: [
        { id: 1, question: "I wish I ___ studied harder.", answer: ["had", "have", "has"], correct: "had" },
        { id: 2, question: "If they ___ earlier, they would have caught the bus.", answer: ["left", "leave", "leaves"], correct: "left" }
    ],
    25: [
        { id: 1, question: "She behaves as if she ___ the boss.", answer: ["is", "was", "were"], correct: "were" },
        { id: 2, question: "I'd rather he ___ here.", answer: ["is", "was", "were"], correct: "were" }
    ],
    26: [
        { id: 1, question: "If I ___ known, I would have told you.", answer: ["had", "have", "has"], correct: "had" },
        { id: 2, question: "He acts as though he ___ surprised.", answer: ["is", "was", "were"], correct: "were" }
    ],
    27: [
        { id: 1, question: "I wish I ___ more money.", answer: ["had", "have", "has"], correct: "had" },
        { id: 2, question: "If she ___ come, we would be happy.", answer: ["were", "was", "is"], correct: "were" }
    ],
    28: [
        { id: 1, question: "They talk as if they ___ experts.", answer: ["are", "were", "was"], correct: "were" },
        { id: 2, question: "I'd rather you ___ that.", answer: ["do", "did", "does"], correct: "did" }
    ],
    29: [
        { id: 1, question: "If I ___ taller, I would play basketball.", answer: ["was", "were", "am"], correct: "were" },
        { id: 2, question: "She wishes she ___ more time.", answer: ["had", "has", "have"], correct: "had" }
    ],
    30: [
        { id: 1, question: "He speaks as though he ___ been there.", answer: ["has", "had", "have"], correct: "had" },
        { id: 2, question: "If they ___ listened, they would understand.", answer: ["had", "have", "has"], correct: "had" }
    ],
    // Levels 31-40: Intermediate
    31: [
        { id: 1, question: "Hardly ___ entered the room when the phone rang.", answer: ["had I", "I had", "did I"], correct: "had I" },
        { id: 2, question: "Not only ___ intelligent, but she's also beautiful.", answer: ["is she", "she is", "does she"], correct: "is she" }
    ],
    32: [
        { id: 1, question: "No sooner ___ arrived than it started raining.", answer: ["had I", "I had", "did I"], correct: "had I" },
        { id: 2, question: "Only after ___ the truth did he realize his mistake.", answer: ["hearing", "heard", "hears"], correct: "hearing" }
    ],
    33: [
        { id: 1, question: "Under no circumstances ___ reveal the secret.", answer: ["you should", "should you", "do you"], correct: "should you" },
        { id: 2, question: "Never ___ such a beautiful sunset.", answer: ["I have seen", "have I seen", "did I see"], correct: "have I seen" }
    ],
    34: [
        { id: 1, question: "Little ___ that the decision would change my life.", answer: ["I knew", "did I know", "I did know"], correct: "did I know" },
        { id: 2, question: "Seldom ___ late for work.", answer: ["is he", "he is", "does he"], correct: "does he" }
    ],
    35: [
        { id: 1, question: "Not until ___ stopped raining did we go out.", answer: ["it", "did it", "it did"], correct: "it" },
        { id: 2, question: "Only when ___ the whole truth did she feel better.", answer: ["she told", "did she tell", "she did tell"], correct: "she told" }
    ],
    36: [
        { id: 1, question: "Rarely ___ such an exciting match.", answer: ["I have watched", "have I watched", "did I watch"], correct: "have I watched" },
        { id: 2, question: "Not since ___ I felt so happy.", answer: ["childhood", "did childhood", "I childhood"], correct: "childhood" }
    ],
    37: [
        { id: 1, question: "Only after ___ the exam did he feel relaxed.", answer: ["finishing", "finished", "finishes"], correct: "finishing" },
        { id: 2, question: "Never again ___ accept such treatment.", answer: ["will I", "I will", "do I"], correct: "will I" }
    ],
    38: [
        { id: 1, question: "So tired ___ that he fell asleep immediately.", answer: ["was he", "he was", "did he"], correct: "was he" },
        { id: 2, question: "Not only ___ the course, but she also passed with honors.", answer: ["did she complete", "she completed", "she did complete"], correct: "did she complete" }
    ],
    39: [
        { id: 1, question: "Only in this way ___ solve the problem.", answer: ["can we", "we can", "do we"], correct: "can we" },
        { id: 2, question: "Scarcely ___ recovered when he had another accident.", answer: ["had he", "he had", "did he"], correct: "had he" }
    ],
    40: [
        { id: 1, question: "Not until ___ stopped did we realize the danger.", answer: ["it", "did it", "it did"], correct: "it" },
        { id: 2, question: "Only after ___ all the evidence did they make a decision.", answer: ["reviewing", "reviewed", "reviews"], correct: "reviewing" }
    ],
    // Levels 41-50: Upper-Intermediate
    41: [
        { id: 1, question: "Were she to win the lottery, she ___ travel the world.", answer: ["would", "will", "is"], correct: "would" },
        { id: 2, question: "Had he studied harder, he ___ passed the exam.", answer: ["would have", "will have", "had"], correct: "would have" }
    ],
    42: [
        { id: 1, question: "Should you need any help, please ___ me.", answer: ["call", "called", "calling"], correct: "call" },
        { id: 2, question: "Were it not for your help, I ___ lost.", answer: ["would be", "will be", "am"], correct: "would be" }
    ],
    43: [
        { id: 1, question: "Had she known about the meeting, she ___ attended.", answer: ["would have", "will have", "had"], correct: "would have" },
        { id: 2, question: "Were they to arrive now, we ___ ready.", answer: ["would be", "will be", "are"], correct: "would be" }
    ],
    44: [
        { id: 1, question: "Should he decide to come, please ___ him in.", answer: ["let", "lets", "letting"], correct: "let" },
        { id: 2, question: "Were it possible, I ___ live on the moon.", answer: ["would", "will", "am"], correct: "would" }
    ],
    45: [
        { id: 1, question: "Had they not rushed, they ___ caught the train.", answer: ["would have", "will have", "had"], correct: "would have" },
        { id: 2, question: "Were you to ask me, I ___ say yes.", answer: ["would", "will", "am"], correct: "would" }
    ],
    46: [
        { id: 1, question: "Should it rain tomorrow, the picnic ___ cancelled.", answer: ["is", "will be", "would be"], correct: "will be" },
        { id: 2, question: "Were he here, he ___ know what to do.", answer: ["would", "will", "is"], correct: "would" }
    ],
    47: [
        { id: 1, question: "Had I realized the consequences, I ___ differently.", answer: ["would have acted", "will have acted", "had acted"], correct: "would have acted" },
        { id: 2, question: "Were she to apologize, he ___ forgive her.", answer: ["would", "will", "is"], correct: "would" }
    ],
    48: [
        { id: 1, question: "Should they win the championship, the team ___ celebrate.", answer: ["will", "would", "is"], correct: "will" },
        { id: 2, question: "Were it not for technology, we ___ progressed so quickly.", answer: ["would not have", "will not have", "had not"], correct: "would not have" }
    ],
    49: [
        { id: 1, question: "Had the weather been better, we ___ hiking.", answer: ["would have gone", "will have gone", "had gone"], correct: "would have gone" },
        { id: 2, question: "Were I in your position, I ___ the job.", answer: ["would accept", "will accept", "accept"], correct: "would accept" }
    ],
    50: [
        { id: 1, question: "Should you change your mind, please ___ us know.", answer: ["let", "lets", "letting"], correct: "let" },
        { id: 2, question: "Were it not for education, many ___ illiterate.", answer: ["would be", "will be", "are"], correct: "would be" }
    ]
};

// Activity data
const activityData = {
    drawing: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    scramble: [
        { word: "CAT", scrambled: "TAC" },
        { word: "DOG", scrambled: "GOD" },
        { word: "SUN", scrambled: "NSU" },
        { word: "BOOK", scrambled: "KOBO" },
        { word: "FISH", scrambled: "HSIF" },
        { word: "BIRD", scrambled: "DRIB" },
        { word: "TREE", scrambled: "REET" },
        { word: "MOON", scrambled: "NOMO" },
        { word: "STAR", scrambled: "RATS" },
        { word: "FROG", scrambled: "GORF" }
    ],
    puzzle: [
        { word: "CAT", letters: ["C", "A", "T"] },
        { word: "DOG", letters: ["D", "O", "G"] },
        { word: "SUN", letters: ["S", "U", "N"] },
        { word: "BOOK", letters: ["B", "O", "O", "K"] },
        { word: "FISH", letters: ["F", "I", "S", "H"] }
    ]
};

// Quiz state variables
let currentLevel = 1;
let questions = [];
let currentQIndex = 0;
let score = 0;
let userAnswers = [];
let totalQuestions = 0;
let wrongQuestions = []; // Questions answered incorrectly
let levelScores = {}; // Store scores for each level

// DOM elements
const questionText = document.getElementById("question-text");
const answersDiv = document.getElementById("answers");
const resultContainer = document.getElementById("result-container");
const resultsList = document.getElementById("results-list");
const scoreElement = document.getElementById("score");
const finalScoreElement = document.getElementById("final-score");
const levelElement = document.getElementById("level");
const progressBar = document.getElementById("progress-bar");
const nextLevelBtn = document.getElementById("next-level-btn");

// Activity elements
const drawingActivity = document.getElementById("drawing-activity");
const alphabetLetter = document.getElementById("alphabet-letter");
const drawingCanvas = document.getElementById("drawing-canvas");
const scrambleActivity = document.getElementById("scramble-activity");
const scrambledWord = document.getElementById("scrambled-word");
const scrambleInput = document.getElementById("scramble-input");
const puzzleActivity = document.getElementById("puzzle-activity");
const puzzleWord = document.getElementById("puzzle-word");
const puzzleGrid = document.getElementById("puzzle-grid");

// Canvas context for drawing
let canvasContext;

// Initialize quiz
function initQuiz() {
    // Get level from URL parameter or default to 1
    const urlParams = new URLSearchParams(window.location.search);
    currentLevel = parseInt(urlParams.get('level')) || 1;
    
    // Set questions for current level
    questions = [...quizData[currentLevel]];
    totalQuestions = questions.length;
    
    // Update UI
    levelElement.textContent = currentLevel;
    updateScore();
    updateProgress();
    
    // Initialize canvas for drawing activity
    if (drawingCanvas) {
        canvasContext = drawingCanvas.getContext('2d');
        canvasContext.fillStyle = 'white';
        canvasContext.fillRect(0, 0, drawingCanvas.width, drawingCanvas.height);
        canvasContext.lineWidth = 3;
        canvasContext.strokeStyle = '#6e8efb';
        
        // Add mouse events for drawing
        let isDrawing = false;
        
        drawingCanvas.addEventListener('mousedown', (e) => {
            isDrawing = true;
            const rect = drawingCanvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            canvasContext.beginPath();
            canvasContext.moveTo(x, y);
        });
        
        drawingCanvas.addEventListener('mousemove', (e) => {
            if (!isDrawing) return;
            const rect = drawingCanvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            canvasContext.lineTo(x, y);
            canvasContext.stroke();
        });
        
        drawingCanvas.addEventListener('mouseup', () => {
            isDrawing = false;
        });
        
        drawingCanvas.addEventListener('mouseout', () => {
            isDrawing = false;
        });
    }
    
    // Start quiz
    renderQuestion();
}

// Render current question
function renderQuestion() {
    if (currentQIndex >= questions.length) {
        showResults();
        return;
    }
    
    // Hide all activities
    drawingActivity.style.display = "none";
    scrambleActivity.style.display = "none";
    puzzleActivity.style.display = "none";
    
    // Show quiz
    questionText.style.display = "flex";
    answersDiv.style.display = "grid";
    
    const q = questions[currentQIndex];
    questionText.textContent = q.question;
    answersDiv.innerHTML = "";
    
    q.answer.forEach((answer, index) => {
        const btn = document.createElement("button");
        btn.className = "answer-btn";
        btn.textContent = answer;
        btn.onclick = () => selectAnswer(answer);
        answersDiv.appendChild(btn);
    });
}

// Handle answer selection
function selectAnswer(selectedAnswer) {
    const currentQuestion = questions[currentQIndex];
    const correctAnswer = currentQuestion.correct;
    
    // Check answer and update score
    const isCorrect = selectedAnswer === correctAnswer;
    if (isCorrect) {
        score++;
        animateCorrectAnswer();
    } else {
        // Add to wrong questions if not already there
        if (!wrongQuestions.some(q => q.id === currentQuestion.id)) {
            wrongQuestions.push(currentQuestion);
        }
        animateIncorrectAnswer();
    }
    
    // Store user answer
    userAnswers.push({
        question: currentQuestion.question,
        correct: correctAnswer,
        user: selectedAnswer,
        isCorrect: isCorrect
    });
    
    // Update UI
    updateScore();
    updateProgress();
    
    // Move to next question or show results
    setTimeout(() => {
        currentQIndex++;
        if (currentQIndex < questions.length) {
            renderQuestion();
        } else {
            showResults();
        }
    }, 1000);
}

// Show quiz results
function showResults() {
    // Hide quiz elements
    questionText.style.display = "none";
    answersDiv.style.display = "none";
    
    // Calculate percentage score
    const percentage = totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0;
    levelScores[currentLevel] = percentage;
    
    // Show results
    resultContainer.style.display = "block";
    finalScoreElement.textContent = percentage;
    
    // Populate results list
    resultsList.innerHTML = "";
    userAnswers.forEach((answer, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <strong>Q${index + 1}:</strong> ${answer.question}<br>
            Your answer: <span style="color: ${answer.isCorrect ? 'green' : 'red'}">${answer.user}</span><br>
            Correct answer: ${answer.correct}
        `;
        resultsList.appendChild(li);
    });
    
    // Determine next action based on score
    if (percentage < 40) {
        // Show activity and retest on same level
        nextLevelBtn.textContent = "Retest Level";
        nextLevelBtn.onclick = () => {
            // Reset for retest
            currentQIndex = 0;
            score = 0;
            userAnswers = [];
            // Use wrong questions if any, otherwise use all questions
            questions = wrongQuestions.length > 0 ? [...wrongQuestions] : [...quizData[currentLevel]];
            totalQuestions = questions.length;
            resultContainer.style.display = "none";
            updateScore();
            updateProgress();
            renderQuestion();
        };
        
        // Show a fun activity before retesting
        showRandomActivity();
    } else {
        // Proceed to next level
        nextLevelBtn.textContent = "Next Level";
        nextLevelBtn.onclick = () => {
            if (currentLevel < 50) {
                window.location.href = `quiz.html?level=${currentLevel + 1}`;
            } else {
                alert("Congratulations! You've completed all levels!");
                window.location.href = "index.html";
            }
        };
    }
}

// Show a random activity
function showRandomActivity() {
    // Hide quiz results
    resultContainer.style.display = "none";
    
    // Select a random activity
    const activities = ['drawing', 'scramble', 'puzzle'];
    const randomActivity = activities[Math.floor(Math.random() * activities.length)];
    
    // Show the selected activity
    switch (randomActivity) {
        case 'drawing':
            showDrawingActivity();
            break;
        case 'scramble':
            showScrambleActivity();
            break;
        case 'puzzle':
            showPuzzleActivity();
            break;
    }
}

// Show drawing activity
function showDrawingActivity() {
    drawingActivity.style.display = "block";
    const randomLetter = activityData.drawing[Math.floor(Math.random() * activityData.drawing.length)];
    alphabetLetter.textContent = randomLetter;
    
    // Clear canvas
    if (canvasContext) {
        canvasContext.fillStyle = 'white';
        canvasContext.fillRect(0, 0, drawingCanvas.width, drawingCanvas.height);
    }
}

// Show scramble activity
function showScrambleActivity() {
    scrambleActivity.style.display = "block";
    const randomWord = activityData.scramble[Math.floor(Math.random() * activityData.scramble.length)];
    scrambledWord.textContent = randomWord.scrambled;
    scrambleInput.value = "";
    scrambleInput.dataset.correct = randomWord.word;
}

// Show puzzle activity
function showPuzzleActivity() {
    puzzleActivity.style.display = "block";
    const randomPuzzle = activityData.puzzle[Math.floor(Math.random() * activityData.puzzle.length)];
    puzzleWord.textContent = randomPuzzle.word;
    
    // Create puzzle grid
    puzzleGrid.innerHTML = "";
    const letters = [...randomPuzzle.letters];
    
    // Shuffle letters
    for (let i = letters.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [letters[i], letters[j]] = [letters[j], letters[i]];
    }
    
    // Add empty cell
    letters.push("");
    
    // Shuffle again to position empty cell randomly
    for (let i = letters.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [letters[i], letters[j]] = [letters[j], letters[i]];
    }
    
    letters.forEach(letter => {
        const cell = document.createElement("div");
        cell.className = "puzzle-cell";
        cell.textContent = letter;
        if (letter === "") {
            cell.classList.add("empty");
        }
        cell.addEventListener("click", () => {
            if (letter !== "") {
                cell.style.backgroundColor = "#4CAF50";
                cell.style.color = "white";
                setTimeout(() => {
                    cell.style.backgroundColor = "";
                    cell.style.color = "";
                }, 500);
            }
        });
        puzzleGrid.appendChild(cell);
    });
}

// Check scramble answer
function checkScramble() {
    const userAnswer = scrambleInput.value.toUpperCase();
    const correctAnswer = scrambleInput.dataset.correct;
    
    if (userAnswer === correctAnswer) {
        alert("Correct! Well done!");
        completeActivity();
    } else {
        alert(`Try again! The correct answer is ${correctAnswer}`);
    }
}

// Complete activity and continue
function completeActivity() {
    // Hide all activities
    drawingActivity.style.display = "none";
    scrambleActivity.style.display = "none";
    puzzleActivity.style.display = "none";
    
    // Show results again
    resultContainer.style.display = "block";
}

// Update score display
function updateScore() {
    scoreElement.textContent = score;
}

// Update progress bar
function updateProgress() {
    const progress = totalQuestions > 0 ? ((currentQIndex) / totalQuestions) * 100 : 0;
    progressBar.style.width = `${progress}%`;
}

// Animation functions
function animateCorrectAnswer() {
    answersDiv.childNodes.forEach(btn => {
        if (btn.textContent === questions[currentQIndex].correct) {
            btn.classList.add('correct');
        }
    });
}

function animateIncorrectAnswer() {
    answersDiv.childNodes.forEach(btn => {
        if (btn.textContent === questions[currentQIndex].correct) {
            btn.classList.add('correct');
        } else {
            btn.classList.add('incorrect');
        }
    });
}

// Initialize quiz when page loads
window.onload = initQuiz;