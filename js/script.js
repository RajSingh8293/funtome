const questions = [
  {
    a: "イライラしやすい・緊張する場面が多い",
    b: "常に疲れやすく、気力が出ないことが多い",
    axis: "energy",
  },
  {
    a: "つい食べ過ぎてしまう・おやつや間食をしがち",
    b: "食欲不振になることが多い",
    axis: "energy",
  },
  {
    a: "お腹が張ったり、便秘になりやすい",
    b: "胃腸が弱い・お腹を壊しやすい ※下痢と便秘を繰り返す場合は、こちらをお選びください.",
    axis: "energy",
  },
  {
    a: "体を動かすのが好き",
    b: "運動すると、すぐ息切れしやすい",
    axis: "energy",
  },
  {
    a: "あざができやすい・出血しやすい",
    b: "爪が薄く、もろい",
    axis: "energy",
  },
  {
    a: "腰や手足が冷えやすい・寒がり",
    b: "暑がり・汗をかきやすい",
    axis: "temp",
  },
  {
    a: "のどがあまり乾かない・頻尿で、色は薄い",
    b: "のどが渇きやすい・尿量が少なく、色が濃い",
    axis: "temp",
  },
  {
    a: "顔色は⻘白い方だと思う",
    b: "顔色は赤い方だと思う",
    axis: "temp",
  },
  {
    a: "一年を通して、温かい飲み物を飲むことが多い",
    b: "冬でもアイスや冷たい飲み物を好む",
    axis: "temp",
  },
  {
    a: "こりや痛みを感じやすく、温めると改善される",
    b: "ほてりを感じやすい",
    axis: "temp",
  },
  {
    a: "めまいや耳鳴りを感じやすい",
    b: "かすみ目、疲れ目を感じやすい",
    axis: "moist",
  },
  {
    a: "雨や台風などの時に頭痛を感じやすい",
    b: "手のひらや足の裏が熱く、寝汗をかきやすい",
    axis: "moist",
  },
  {
    a: "オイリー肌・ニキビができやすい",
    b: "乾燥肌・カサカサしやすい",
    axis: "moist",
  },
  {
    a: "手足や顔などがむくみやすい",
    b: "のどがイガイガしたり、空咳が出やすい",
    axis: "moist",
  },
  {
    a: "舌の苔が厚く、ふちに歯形がつきやすい",
    b: "舌が薄く、ひび割れしている",
    axis: "moist",
  },
];

let current = 0;
let scores = { energy: 0, temp: 0, moist: 0 };
let answers = new Array(15).fill(null);

const imageMap = {
  "実・熱・燥": "./img/type_1.webp",
  "虚・熱・燥": "./img/type_2.webp",
  "虚・寒・燥": "./img/type_3.webp",
  "虚・寒・湿": "./img/type_4.webp",
  "実・寒・湿": "./img/type_5.webp",
  "実・熱・湿": "./img/type_6.webp",
  "実・寒・燥": "./img/type_7.webp",
  "虚・熱・湿": "./img/type_8.png",
};

// Start buttons
document.getElementById("start-btn").addEventListener("click", (e) => {
  e.preventDefault();
  startQuiz();
});

document.getElementById("start-btn-2").addEventListener("click", (e) => {
  e.preventDefault();
  startQuiz();
});

function startQuiz() {
  document.getElementById("start-q").style.display = "none";
  document.getElementById("app-container").style.display = "block";
  resetQuiz();
  renderQuestion();
}

function resetQuiz() {
  current = 0;
  scores = { energy: 0, temp: 0, moist: 0 };
  answers = new Array(15).fill(null);
}

function showValidationMessage(show = true) {
  const messageEl = document.getElementById("validation-message");
  if (show) {
    messageEl.classList.add("show");
  } else {
    messageEl.classList.remove("show");
  }
}

function updateNavigationButtons() {
  const prevBtn = document.getElementById("prev-arrow");
  const nextBtn = document.getElementById("next-arrow");

  if (current === 0) {
    prevBtn.classList.add("disabled");
  } else {
    prevBtn.classList.remove("disabled");
  }

  const hasAnswer = answers[current] !== null;
  if (!hasAnswer) {
    nextBtn.classList.add("disabled");
  } else {
    nextBtn.classList.remove("disabled");
  }

  if (hasAnswer) {
    showValidationMessage(false);
  }
}

function updateProgress() {
  const answeredCount = answers.filter((a) => a !== null).length;
  document.getElementById("q-count").innerText = answeredCount + 1;
  const percent = Math.round((answeredCount / 15) * 100);
  document.getElementById("progress-fill").style.width = percent + "%";
  document.getElementById("q-number").innerText = current + 1;
}

function renderQuestion() {
  const q = questions[current];
  document.querySelector("#btn-a span").textContent = q.a;
  document.querySelector("#btn-b span").textContent = q.b;

  // Set question title based on axis
  if (q.axis === "energy") {
    document.getElementById("question-title").textContent =
      "エネルギーについて";
  } else if (q.axis === "temp") {
    document.getElementById("question-title").textContent = "体温について";
  } else {
    document.getElementById("question-title").textContent = "水分について";
  }

  const btnA = document.getElementById("btn-a");
  const btnB = document.getElementById("btn-b");

  btnA.classList.remove("selected");
  btnB.classList.remove("selected");

  if (answers[current] === "a") {
    btnA.classList.add("selected");
  } else if (answers[current] === "b") {
    btnB.classList.add("selected");
  }

  updateNavigationButtons();
  updateProgress();
}

function handleChoice(choice) {
  const previousAnswer = answers[current];
  const axis = questions[current].axis;

  // Update answers and scores
  if (previousAnswer === choice) {
    // Deselecting
    answers[current] = null;
    if (choice === "a") {
      scores[axis] -= 1;
    } else {
      scores[axis] += 1;
    }
  } else {
    // Selecting new option
    if (previousAnswer === "a") {
      scores[axis] -= 1;
    } else if (previousAnswer === "b") {
      scores[axis] += 1;
    }

    answers[current] = choice;
    if (choice === "a") {
      scores[axis] += 1;
    } else {
      scores[axis] -= 1;
    }
  }

  // Update UI
  const btnA = document.getElementById("btn-a");
  const btnB = document.getElementById("btn-b");

  btnA.classList.toggle("selected", answers[current] === "a");
  btnB.classList.toggle("selected", answers[current] === "b");

  updateNavigationButtons();
  updateProgress();

  // Auto-advance to next question if an option is selected
  if (answers[current] !== null) {
    if (current < 14) {
      // Move to next question after delay
      setTimeout(() => {
        current++;
        renderQuestion();
      }, 500);
    } else if (current === 14) {
      // Last question - check if all answered
      const allAnswered = answers.every((answer) => answer !== null);
      if (allAnswered) {
        setTimeout(showResult, 500);
      }
    }
  }
}

function goToNext() {
  if (answers[current] === null) {
    showValidationMessage(true);
    return;
  }

  if (current < 14) {
    current++;
    renderQuestion();
    showValidationMessage(false);
  } else if (current === 14) {
    const allAnswered = answers.every((answer) => answer !== null);
    if (allAnswered) {
      showResult();
    } else {
      showValidationMessage(true);
    }
  }
}

function goToPrev() {
  if (current > 0) {
    current--;
    renderQuestion();
    showValidationMessage(false);
  }
}

function showResult() {
  document.getElementById("quiz-ui").style.display = "none";
  document.getElementById("result-ui").style.display = "block";

  const e = scores.energy >= 0 ? "実" : "虚";
  const t = scores.temp >= 0 ? "寒" : "熱";
  const m = scores.moist >= 0 ? "湿" : "燥";
  const combination = `${e}・${t}・${m}`;

  const imagePath = imageMap[combination] || "./img/type_1.webp";
  document.getElementById("result-image").src = imagePath;
}

// Initialize quiz event listeners
document.getElementById("btn-a").addEventListener("click", function () {
  handleChoice("a");
});

document.getElementById("btn-b").addEventListener("click", function () {
  handleChoice("b");
});

document.getElementById("prev-arrow").addEventListener("click", goToPrev);
document.getElementById("next-arrow").addEventListener("click", goToNext);

const products = [
  {
    id: 1,
    title: "トライアルセット 初めてのマイメンテ養生スープセット（スープ全4種）",
    image1: "./img/p_tea_img_1.webp",
    image2: "./img/p_tea_img_2.webp",
  },
  {
    id: 2,
    title: "トライアルセット 初めてのマイメンテ養生スープセット（スープ全4種）",
    image1: "./img/p_tea_img_2.1.webp",
    image2: "./img/p_tea_img_2.2.webp",
  },
  {
    id: 3,
    title: "トライアルセット 初めてのマイメンテ養生スープセット（スープ全4種）",
    image1: "./img/p_tea_img_3.1.webp",
    image2: "./img/p_tea_img_3.2.webp",
  },
  {
    id: 4,
    title: "トライアルセット 初めてのマイメンテ養生スープセット（スープ全4種）",
    image1: "./img/p_tea_img_4.1.webp",
    image2: "./img/p_tea_img_4.2.webp",
  },
];

const cardsContainer = document.getElementById("productCards");

cardsContainer.innerHTML = products
  .map(
    (product) => `
            <div class="card">
              <div class="images">
                <img src="${product.image1}" alt="${product.title}">
                <img src="${product.image2}" alt="${product.title}">
              </div>
              <p>${product.title}</p>
            </div>
          `,
  )
  .join("");
