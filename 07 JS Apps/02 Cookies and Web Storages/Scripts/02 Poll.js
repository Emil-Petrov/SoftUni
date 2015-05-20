function Question(content, answers) {
    this.content = content;
    this.answers = answers;
    this.selected = new Answer('Nothing', false);
}
function Answer(content, correct) {
    this.content = content;
    this.isCorrect = correct;
}
function startPoll(container, questions, duration) {
    if (localStorage['submitted']) {
        container.empty();
        showHTMLResults(container, JSON.parse(localStorage['questions']));
    } else {
        Timer.setContainer($('body'))
            .setDuration(duration)
            .setCallback(onTimeout, container)
            .start();
        var poll = createPoll(questions);
        container.append(poll);
    }
    addClearButton(container)
}
function createPoll(questions) {
    var pollBody = $('<ul class="poll"></ul>');
    addHTMLQuestions(pollBody, questions);
    pollBody.append(submitButton('submit'));
    return pollBody;
}
function addHTMLQuestions(target, questions) {
    $.each(questions, function (index, question) {
        var questionBody = $('<li class="question"></li>');
        var newQuestion = $('<div>' + Number(index + 1) + ') ' + question.content + '</div>');
        questionBody.append(newQuestion);
        addHTMLAnswers(questionBody, questions, index);
        target.append(questionBody);
    });
}
function addHTMLAnswers(body, questions, questionIndex) {
    var question = questions[questionIndex];
    var answers = question.answers;
    var answerBody = $('<ul class="answers"></ul>');
    $.each(answers, function (index, answer) {
        var newAnswer = $('<li class="answer">' + String.fromCharCode(97 + index) + ') ' + answer.content + '</li>')
            .click(function () {
                question.selected = answer;
                var dis = $(this); //Don't judge me
                dis.siblings().removeClass('selected');
                dis.addClass('selected');
                localStorage['questions'] = JSON.stringify(questions);
            });
        answerBody.append(newAnswer);
    });
    body.append(answerBody);
    //return answerBody;
}
function showHTMLResults(body, questions) {
    var resultsBody = $('<ul class="results"></ul>');
    resultsBody.append($('<div>You finished the test!</div>'));
    $.each(questions, function (index, question) {
        var resultBody = $('<li class="result"></li>');
        var questionBody = $('<li class="question">Question: ' + question.content + '</li>');
        var answersBody = $('<ul></ul>');
        var correctAnswersBody = $('<li class="correct-answers"><div>The correct answers were:</div></li>');
        var correctAnswers = question.answers.filter(function (answer) {
            return answer.isCorrect;
        });
        addHTMLCorrectAnswers(correctAnswersBody, correctAnswers);
        var userAnswerBody = (function () {
            var answerBody = $('<ul class="user-answer">You answered: </ul>')
            var answer = $('<li class="answer">' + question.selected.content + '</li>');
            if (question.selected.isCorrect) {
                answer.addClass('correct')
            } else {
                answer.addClass('incorrect')
            }
            return answerBody.append(answer);
        })();

        answersBody.append(correctAnswers)
            .append(userAnswerBody);

        resultBody
            .append(questionBody)
            .append(correctAnswersBody)
            .append(userAnswerBody);
        resultsBody.append(resultBody);
    });
    body.append(resultsBody);
}
function addHTMLCorrectAnswers(body, answers) {
    $.each(answers, function (index, answer) {
        var answerBody = $('<li class="answer correct"></li>')
            .text(answer.content);
        body.append(answerBody);
    });
}

var Timer = (function () {
    var container, duration, timeElapsed, callback, timerBody, remaining, timer, callbackParams;

    container = $('<div></div>');
    duration = 0;
    timeElapsed = 0;
    callback = function () {
    };
    timerBody = $('<div class="timer">--:--</div>')
    callbackParams = '';

    function setContainer(body) {
        container = body;
        return this;
    }

    function setDuration(durationInSeconds) {
        duration = durationInSeconds;
        return this;
    }

    function setCallback(func, params) {
        callback = func;
        callbackParams = params;
        return this;
    }

    function getMinutes(durationInSeconds) {
        timer = Math.floor(durationInSeconds / 60);
        if (timer < 10) {
            return 0 + "" + timer;
        }
        return timer
    }

    function getSeconds(durationInSeconds) {
        timer = Math.floor(durationInSeconds % 60);
        if (timer < 10) {
            return 0 + "" + timer;
        }
        return timer
    }

    function startTimer() {
        //container.append($('<div class="timer"></div>'));
        displayTimer();
        var interval = setInterval(
            function () {
                if (timeElapsed >= duration) {
                    clearInterval(interval);
                    callback(callbackParams);
                } else {
                    timeElapsed += 1;
                }
                remaining = duration - timeElapsed;
                $('.timer').text(getMinutes(remaining) + ":" + getSeconds(remaining));
            }, 1000);
    }

    function getTime(){
       return getMinutes(duration - timeElapsed) + ":" + getSeconds(duration - timeElapsed)
    }
    function displayTimer() {
        container.append(timerBody);
    }

    return {
        setContainer: setContainer,
        setDuration: setDuration,
        setCallback: setCallback,
        start: startTimer,
        getTime: getTime()
    }
})();
function onTimeout(container) {
    container.empty();
    container.append($('<div>Timer reached 0!</div>'));
    showHTMLResults(container, JSON.parse(localStorage['questions']));
    addClearButton(container);
}
function addClearButton(container){
    container.append($('<button class="reset">Clear Storage</button>').click(function () {
        localStorage.clear();
        window.location.reload()

    }));
}
function submitButton(title) {
    return $('<div class="submit"></div>')
        .text(title)
        .click(function () {
            if (!localStorage['submitted']) {
                localStorage['submitted'] = true;
            }
            window.location.reload()
        });
}