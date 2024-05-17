#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.yellowBright('*********************************************************************************************************'));
console.log(chalk.cyanBright.italic(`<<<<<<<<<<<<<<<<<<<<<<<<<<💫💫💫🌟🌟 Welcome to Quiz 💫💫💫🌟🌟>>>>>>>>>>>>>>>>>>>>`));
console.log(chalk.yellowBright('*********************************************************************************************************'));
console.log('');

const startQuiz = async () => {
  console.log(chalk.blue.bold("====================================="));
  console.log(chalk.cyanBright.italic("============ Start Quiz Selection "));
  console.log(chalk.blue.bold("====================================="));
}

startQuiz();

const askQuestion = async (questions:any) => {
  for (const question of questions) {
    let answer = await inquirer.prompt([
      {
        name: "userAnswer",
        type: "list",
        message: question.question,
        choices: question.choices
      }
    ]);
    if (answer.userAnswer === question.answer) {
      console.log(chalk.green.bold("Correct!\n"));
    } else {
      console.log(chalk.red.bold("Incorrect!\n"));
    }
  }
};

const askQuizSelection = async () => {
  const selectedQuiz = await inquirer.prompt([
    {
      name: "quizType",
      message: "Please select the quiz you want to attempt first:",
      type: "list",
      choices: ["Islamic History", "English", "Web Development", "Exit"],
    }
  ]);
  return selectedQuiz.quizType;
};

 const islamicHistoryQuestions:any = [
        {
            question: "Q 1. Quran Pak ke kes (Juz) me 2 martaba BismiAllah ai hy?",
            choices: ["Surah Waqeya", "Surah Yousaf", "Surah Namal"],
            answer: "Surah Namal"
        },
        {
            question: "Q 2. Quran Pak ke kes (Juz) me Surah Juma hy?",
            choices: ["26 JUZ" ,"28 JUZ","20 JUZ"],
            answer: "28 JUZ"
        },
        {
            question: "Q 3. Quran Pak ke 30 (Juz) me kul ktni Surah hin?",
            choices: ["37 Surah" ,"40 Surah", "35 Surah"],
            answer: "37 Surah"
        },
        {
            question: "Q 4. Quran Pak ke wo kon se Surah hy, jo Nabi nahi hin?",
            choices: ["Hazrat Younus(A.S)", "Hazrat lout(A.S)", "Hazrat Luqman(A.S)"],
            answer: "Hazrat Luqman(A.S)"
        },
        {
            question: "Q 5. Quran Pak me kes Nabi ke Name par Surah nhi hy laken un ka name Quran Pak me bar bar aya hy?",
            choices: ["Hazrat Moosa(A.S)","Hazrat Yousaf(A.S)", "Hazrat Muhammad(PBUH)"],
            answer: "Hazrat Moosa(A.S)"
        }
    ];
    const englishQuestions = [
            {
                question: "What is the opposite of 'happy'?",
                choices: ["Sad", "Angry", "Excited", "Joyful"],
                answer: "Sad"
            },
            {
                question: "Which word is a synonym of 'big'?",
                choices: ["Small", "Huge", "Tiny", "Little"],
                answer: "Huge"
            },
            {
                question: "What is the past tense of 'eat'?",
                choices: ["Eaten", "Ate", "Eat", "Eating"],
                answer: "Ate"
            },
            {
                question: "Which of the following is a preposition?",
                choices: ["Run", "At", "Dog", "Jump"],
                answer: "At"
            },
            {
                question: "What is the plural form of 'child'?",
                choices: ["Childs", "Children", "Childes", "Child's"],
                answer: "Children"
            }
        ];
        
        const webDevQuestions = [
            {
                question: "What does HTML stand for?",
                choices: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyper Tool Markup Language"],
                answer: "Hyper Text Markup Language"
            },
            {
                question: "Which of the following is NOT a programming language?",
                choices: ["JavaScript", "Python", "HTML", "CSS"],
                answer: "HTML"
            },
            {
                question: "What is the correct syntax for referring to an external script called 'script.js'?",
                choices: ["<script href='script.js'>", "<script name='script.js'>", "<script src='script.js'>", "<script file='script.js'>"],
                answer: "<script src='script.js'>"
            },
            {
                question: "Which CSS property is used to change the text color of an element?",
                choices: ["color", "text-color", "font-color", "foreground-color"],
                answer: "color"
            },
            {
                question: "Which of the following is NOT a CSS display property?",
                choices: ["block", "inline", "inline-block", "stack"],
                answer: "stack"
            }
        ];  


let selectedQuizType;
let solveAgain = true;

do {
  if (!solveAgain) {
    console.log(chalk.blue.bold("====================================="));
    console.log(chalk.blue.bold("Let's solve another quiz!\n"));
  }
  selectedQuizType = await askQuizSelection();
  switch (selectedQuizType) {
    case "Islamic History":
      console.log(chalk.blue.bold("====================================="));
      console.log(chalk.greenBright.italic("============= History Quiz "));
      console.log(chalk.blue.bold("====================================="));
      await askQuestion(islamicHistoryQuestions);
      break;
    case "English":
      console.log(chalk.blue.bold("====================================="));
      console.log(chalk.yellowBright.italic("============= English Quiz "));
      console.log(chalk.blue.bold("====================================="));
      await askQuestion(englishQuestions);
      break;
    case "Web Development":
      console.log(chalk.blue.bold("====================================="));
      console.log(chalk.magentaBright.italic("============= Web Development Quiz "));
      console.log(chalk.blue.bold("====================================="));
      await askQuestion(webDevQuestions);
      break;
    case "Exit":
      console.log(chalk.blue.bold.italic("Exiting the program. Goodbye!"));
      break;
    default:
      console.log(chalk.red.bold("Invalid Quiz Type"));
      break;
  }
  if (selectedQuizType !== "Exit") {
    const continueQuiz = await inquirer.prompt([
      {
        name: "continue",
        message: "Do you want to attempt another quiz?",
        type: "confirm"
      }
    ]);
    solveAgain = continueQuiz.continue;
  }
} while (selectedQuizType !== "Exit" && solveAgain);
  
   
     
     