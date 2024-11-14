let currentQuestionIndex = 0;
let score = 0;
const userAnswers = Array(questions.length).fill(null);

const questionElement = document.getElementById('questionText');
const optionsElement = document.getElementById('options');

// 加载当前题目
function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
    optionsElement.innerHTML = '';

    currentQuestion.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.innerText = option;
        optionElement.dataset.index = index;
        optionElement.addEventListener('click', () => selectAnswer(option, optionElement));

        // 如果已选择答案，显示选择状态
        if (userAnswers[currentQuestionIndex] === option) {
            optionElement.classList.add('selected');
        }

        optionsElement.appendChild(optionElement);
    });
}

// 选择答案
function selectAnswer(selectedOption, optionElement) {
    // 清除所有选项的选中状态
    const optionElements = optionsElement.querySelectorAll('.option');
    optionElements.forEach(element => element.classList.remove('selected'));

    // 设置当前选中的选项
    optionElement.classList.add('selected');
    const correctAnswer = questions[currentQuestionIndex].answer;
    const correctOption = questions[currentQuestionIndex].options.find(option => option.startsWith(correctAnswer));

    if (selectedOption === correctOption) {
        if (userAnswers[currentQuestionIndex] !== selectedOption) {
            score++;
            userAnswers[currentQuestionIndex] = selectedOption;
        }
    } else {
        if (userAnswers[currentQuestionIndex] !== selectedOption) {
            score--;
            userAnswers[currentQuestionIndex] = selectedOption;
        }
    }
}

// 跳到下一题
function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        showResult();
    }
}

// 跳到上一题
function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
}

// 显示结果
function showResult() {
    document.querySelector('.container').style.display = 'none';
    document.getElementById('scoreText').innerText = `您的得分是：${score} / ${questions.length}`;
    document.getElementById('resultModal').style.display = 'block';
    loadPieChart();
}

// 加载饼图
function loadPieChart() {
    const ctx = document.getElementById('pieChart').getContext('2d');
    const data = {
        labels: ['正确', '错误'],
        datasets: [{
            data: [score, questions.length - score],
            backgroundColor: ['#2ecc71', '#e74c3c']
        }]
    };
    new Chart(ctx, {
        type: 'pie',
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        font: {
                            size: 15 // 设置标签的字体大小为 30px
                        },
                        color: 'white' // 设置文字颜色为白色
                    }
                },
            },
        },
    });
}

// 关闭结果弹窗并重置
function closeModal() {
    // 重置所有状态
    currentQuestionIndex = 0;
    score = 0;
    userAnswers.fill(null);

    // 隐藏结果弹窗，显示问题容器
    document.getElementById('resultModal').style.display = 'none';
    document.querySelector('.container').style.display = 'block';

    // 清空选项选中状态
    const optionElements = optionsElement.querySelectorAll('.option');
    optionElements.forEach(element => element.classList.remove('selected'));

    // 重新加载第一题
    loadQuestion();
}

// 初始化加载题目
loadQuestion();
