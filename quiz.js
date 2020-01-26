function myQuiz(){

var myQuestions = [
    {
        question: "Who is my favourite president?",
        answers: {
            a: 'Barack O. Llama',
            b: 'Willama McKinley',
            c: 'Abraham Llamacoln'
        },
        correctAnswer: 'a'
    },
    {
        question: "What is my favourite drink?",
        answers: {
            a: 'Long Island Ice Tea',
            b: 'Llamon Soda',
            c: 'Llamanade'
        },
        correctAnswer: 'c'
    },
    {
        question: "Which is my favourite car?",
        answers: {
            a: 'Llamcia',
            b: 'Llamousine',
            c: 'Llamabogini'
        },
        correctAnswer: 'c'
    },
   {
        question: "Favourite Celebrity?",
        answers: {
            a: 'Llamanardo DiCaprio',
            b: 'Kendrick Llama',
            c: 'Llama Nesson'
        },
        correctAnswer: 'a'
    },
    {
        question: "Favourite Sentence?",
        answers: {
            a: 'Llama Mia',
            b: 'No probllama',
            c: 'Shama Llama Ding Dong'
        },
        correctAnswer: 'b'
    }
    
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

    function showQuestions(questions, quizContainer){
        //output store
        var output = [];
        var answers;

        
        for(var i=0; i<questions.length; i++){
            
            //  reset the list of answers
            answers = [];

      
            for(letter in questions[i].answers){

               
                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + ': '
                        + questions[i].answers[letter]
                    + '</label>'
                );
            }

          
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }

        //  combine our output list into one string 
      quizContainer.innerHTML = output.join('');
    }


    function showResults(questions, quizContainer, resultsContainer){
        
        // gather answer containers from quiz
        var answerContainers = quizContainer.querySelectorAll('.answers');
        
       
        var userAnswer = '';
        var numCorrect = 0;
        
        
        for(var i=0; i<questions.length; i++){

            // find selected answer
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            
            
            if(userAnswer===questions[i].correctAnswer){
                // add to the number of correct answers
                numCorrect++;
                
                // green for correct answers
                answerContainers[i].style.color = 'lightgreen';
            }
            
            else{
                // red for wrong answers
                answerContainers[i].style.color = 'red';
            }
        }
        if(numCorrect=='0'){
            //resultsContainer.innerHTML = ;
            resultsContainer.innerHTML =  numCorrect + ' out of ' + questions.length + '.....OOPS! You can do better ';
        }
        if(numCorrect=='1' || numCorrect=='2'  || numCorrect=='3' || numCorrect=='4' ){
            //resultsContainer.innerHTML = ;
            resultsContainer.innerHTML =  numCorrect + ' out of ' + questions.length + '.....Cmon, You are getting there ';
        }

        if(numCorrect=='5'){
            
            resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length + '..... YOU ARE A LLAMA LORD';
            resultsContainer.style.c
        }
      
    }

    // show questions 
    showQuestions(questions, quizContainer);
    
    // on submit, show results
    submitButton.onclick = function(){
        showResults(questions, quizContainer, resultsContainer);
    }

}

}