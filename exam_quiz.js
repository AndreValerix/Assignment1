class Quiz {
    constructor(questions) {
      this.questions = questions;
      this.score = 0;
    }
  
    displayQuestion() {
      for (let i = 0; i < this.questions.length; i++) {
        const userAnswer = prompt(this.questions[i].prompt);
        this.checkAnswer(userAnswer, i);
      }
      this.displayScore();
    }
  
    checkAnswer(userAnswer, questionIndex) {
      if (userAnswer.toLowerCase() === this.questions[questionIndex].answer.toLowerCase()) {
        this.score++;
      }
    }
  
    displayScore() {
      console.log(`Your score: ${this.score}/${this.questions.length}`);
    }
  }
  
  class Question {
    constructor(prompt, answer) {
      this.prompt = prompt;
      this.answer = answer;
    }
  }
  
  const questions = [
    new Question("What is the capital of France?", "Paris"),
    new Question("Who painted the Mona Lisa?", "Leonardo da Vinci"),
    new Question("What is the tallest mountain in the world?", "Mount Everest")
  ];
  
  const quiz = new Quiz(questions);
  
  quiz.displayQuestion();