document.addEventListener("DOMContentLoaded", function () {
  // Helper function to scroll to top
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  const goTopBtn = document.getElementById("goTopBtn");
  const goTopContainer = document.querySelector(".go-top");

  if (goTopBtn && goTopContainer) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 300) {
        goTopContainer.classList.add("show");
      } else {
        goTopContainer.classList.remove("show");
      }
    });

    goTopBtn.addEventListener("click", function (e) {
      e.preventDefault();
      scrollToTop();

      this.classList.add("bounce");
      setTimeout(() => {
        this.classList.remove("bounce");
      }, 300);
    });

    // Hover effect with animation
    goTopBtn.addEventListener("mouseenter", function () {
      this.style.animation = "bounce 1s ease infinite";
    });

    goTopBtn.addEventListener("mouseleave", function () {
      this.style.animation = "none";
    });
  }

  // ========== SEARCH FUNCTIONALITY ==========
  const searchIcon = document.getElementById("search-icon");
  const searchBox2 = document.getElementById("search-box-2");

  if (searchIcon && searchBox2) {
    const overlay = document.createElement("div");
    overlay.className = "search-overlay";
    document.body.appendChild(overlay);

    searchIcon.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();

      searchBox2.classList.toggle("active");
      overlay.classList.toggle("active");

      if (searchBox2.classList.contains("active")) {
        setTimeout(() => {
          const input = searchBox2.querySelector("input");
          if (input) input.focus();
        }, 300);
      }
    });

    overlay.addEventListener("click", closeSearch);

    document.addEventListener("click", (e) => {
      if (!searchBox2.contains(e.target) && !searchIcon.contains(e.target)) {
        closeSearch();
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && searchBox2.classList.contains("active")) {
        closeSearch();
      }
    });

    window.addEventListener("scroll", () => {
      if (searchBox2.classList.contains("active")) {
        closeSearch();
      }
    });

    const closeBtn = document.querySelector(".search-box-2 .close-btn");
    if (closeBtn) {
      closeBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        closeSearch();
      });
    }

    searchBox2.addEventListener("click", (e) => {
      e.stopPropagation();
    });

    function closeSearch() {
      searchBox2.classList.remove("active");
      overlay.classList.remove("active");
    }

    const searchForm = searchBox2.querySelector("form");
    if (searchForm) {
      searchForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const input = searchBox2.querySelector("input");
        if (input.value.trim()) {
          console.log("Searching for:", input.value);
          closeSearch();
        }
      });
    }
  }

  // ========== SIDEBAR MENU FUNCTIONALITY ==========
  const menuToggle = document.querySelector(".mobile-menu-toggle");
  const sidebar = document.querySelector(".sidebar-menu");
  const sidebarClose = document.querySelector(".sidebar-close");
  const sidebarOverlay = document.querySelector(".sidebar-overlay");

  if (menuToggle && sidebar && sidebarOverlay) {
    function openSidebar() {
      sidebar.classList.add("active");
      sidebarOverlay.classList.add("active");
      document.body.style.overflow = "hidden";
    }

    function closeSidebar() {
      sidebar.classList.remove("active");
      sidebarOverlay.classList.remove("active");
      document.body.style.overflow = "";
    }

    menuToggle.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      openSidebar();
    });

    if (sidebarClose) {
      sidebarClose.addEventListener("click", (e) => {
        e.preventDefault();
        closeSidebar();
      });
    }

    sidebarOverlay.addEventListener("click", (e) => {
      e.preventDefault();
      closeSidebar();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && sidebar.classList.contains("active")) {
        closeSidebar();
      }
    });

    sidebar.addEventListener("click", (e) => {
      e.stopPropagation();
    });

    let resizeTimer;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (window.innerWidth > 768 && sidebar.classList.contains("active")) {
          closeSidebar();
        }
      }, 250);
    });
  }

  // ========== QUIZ FUNCTIONALITY ==========
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

  const startBtn = document.getElementById("start-btn");
  const startBtn2 = document.getElementById("start-btn-2");
  const restartQuiz = document.getElementById("restart-quiz");
  const btnA = document.getElementById("btn-a");
  const btnB = document.getElementById("btn-b");
  const prevArrow = document.getElementById("prev-arrow");
  const nextArrow = document.getElementById("next-arrow");
  const startQ = document.getElementById("start-q");
  const appContainer = document.getElementById("app-container");
  const quizUI = document.getElementById("quiz-ui");
  const resultUI = document.getElementById("result-ui");
  const validationMsg = document.getElementById("validation-message");
  const qCount = document.getElementById("q-count");
  const qNumber = document.getElementById("q-number");
  const progressFill = document.getElementById("progress-fill");
  const questionTitle = document.getElementById("question-title");
  const resultImage = document.getElementById("result-image");
  const typeBadge = document.querySelector(".type-badge");
  const pageLoader = document.getElementById("pageLoader");
  const answerProgress = document.getElementById("answer-progress");
  const currentQuestion = document.getElementById("current-question");

  if (pageLoader) {
    setTimeout(function () {
      pageLoader.classList.add("hidden");
    }, 500);
  }

  if (startBtn) {
    startBtn.addEventListener("click", (e) => {
      e.preventDefault();
      startQuiz();
    });
  }

  if (startBtn2) {
    startBtn2.addEventListener("click", (e) => {
      e.preventDefault();
      startQuiz();
    });
  }

  if (restartQuiz) {
    restartQuiz.addEventListener("click", (e) => {
      e.preventDefault();
      restartQuizFromResult();
    });
  }

  function startQuiz() {
    setTimeout(() => {
      scrollToTop();
    }, 100);

    if (startQ) startQ.style.display = "none";
    if (appContainer) appContainer.style.display = "block";
    if (resultUI) {
      resultUI.style.display = "none";
      resultUI.classList.remove("show");
    }

    if (quizUI) {
      quizUI.style.display = "block";
    }

    resetQuiz();
    renderQuestion();
  }

  function restartQuizFromResult() {
    // Scroll to top
    setTimeout(() => {
      scrollToTop();
    }, 100);

    // Hide result screen
    if (resultUI) {
      resultUI.style.display = "none";
      resultUI.classList.remove("show");
    }

    if (startQ) startQ.style.display = "none";

    // Show quiz container
    if (appContainer) {
      appContainer.style.display = "block";
    }

    if (quizUI) {
      quizUI.style.display = "block";
      quizUI.classList.remove("fade-out", "fade-in", "slide-out", "slide-in");
    }

    // Reset all quiz data
    resetQuiz();

    // Render the first question
    renderQuestion();

    console.log("Quiz restarted from result screen - starting from question 1");
  }

  function resetQuiz() {
    current = 0;
    scores = { energy: 0, temp: 0, moist: 0 };
    answers = new Array(15).fill(null);

    // Reset the display counts to show 1/15
    if (qNumber) qNumber.innerText = "1";
    if (currentQuestion) currentQuestion.innerText = "1";
    if (progressFill) progressFill.style.width = "0%";

    if (btnA) btnA.classList.remove("selected");
    if (btnB) btnB.classList.remove("selected");
  }

  function showValidationMessage(show = true) {
    if (validationMsg) {
      if (show) {
        validationMsg.classList.add("show");
      } else {
        validationMsg.classList.remove("show");
      }
    }
  }

  function updateNavigationButtons() {
    if (!prevArrow || !nextArrow) return;

    if (current === 0) {
      prevArrow.classList.add("disabled");
    } else {
      prevArrow.classList.remove("disabled");
    }

    const hasAnswer = answers[current] !== null;
    if (!hasAnswer) {
      nextArrow.classList.add("disabled");
    } else {
      nextArrow.classList.remove("disabled");
    }

    if (hasAnswer) {
      showValidationMessage(false);
    }
  }

  function updateProgress() {
    const answeredCount = answers.filter((a) => a !== null).length;

    // Show current question number (1-15)
    if (qNumber) {
      qNumber.innerText = current + 1;
      qNumber.classList.add("change");
      setTimeout(() => {
        qNumber.classList.remove("change");
      }, 200);
    }
    if (currentQuestion) currentQuestion.innerText = current + 1;

    if (progressFill) {
      const percent = Math.round((answeredCount / 15) * 100);
      progressFill.style.width = percent + "%";
    }
  }

  function renderQuestion() {
    if (!questions[current]) return;

    const q = questions[current];

    const btnASpan = btnA ? btnA.querySelector("span") : null;
    const btnBSpan = btnB ? btnB.querySelector("span") : null;

    if (btnASpan) btnASpan.textContent = q.a;
    if (btnBSpan) btnBSpan.textContent = q.b;

    if (questionTitle) {
      if (q.axis === "energy") {
        questionTitle.textContent = "エネルギーについて";
      } else if (q.axis === "temp") {
        questionTitle.textContent = "体温について";
      } else {
        questionTitle.textContent = "水分について";
      }
    }

    if (btnA) btnA.classList.remove("selected");
    if (btnB) btnB.classList.remove("selected");

    if (answers[current] === "a" && btnA) {
      btnA.classList.add("selected");
    } else if (answers[current] === "b" && btnB) {
      btnB.classList.add("selected");
    }

    updateNavigationButtons();
    updateProgress();

    setTimeout(() => {
      scrollToTop();
    }, 100);
  }

  function handleChoice(choice) {
    const previousAnswer = answers[current];
    const axis = questions[current].axis;

    if (previousAnswer === choice) {
      answers[current] = null;
      if (choice === "a") {
        scores[axis] -= 1;
      } else {
        scores[axis] += 1;
      }
    } else {
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

    if (btnA) btnA.classList.toggle("selected", answers[current] === "a");
    if (btnB) btnB.classList.toggle("selected", answers[current] === "b");

    updateNavigationButtons();
    updateProgress();

    const allAnswered = answers.every((answer) => answer !== null);

    if (answers[current] !== null) {
      if (current < 14) {
        current++;
        renderQuestion();
      } else if (current === 14 && allAnswered) {
        showResult();
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
    setTimeout(() => {
      scrollToTop();
    }, 100);

    if (quizUI) quizUI.style.display = "none";
    if (resultUI) {
      resultUI.style.display = "block";
      setTimeout(() => {
        resultUI.classList.add("show");
      }, 50);
    }

    // Calculate result
    const e = scores.energy > 0 ? "実" : scores.energy < 0 ? "虚" : "実";
    const t = scores.temp > 0 ? "寒" : scores.temp < 0 ? "熱" : "熱";
    const m = scores.moist > 0 ? "湿" : scores.moist < 0 ? "燥" : "湿";

    const combination = `${e}・${t}・${m}`;

    if (typeBadge) {
      typeBadge.innerHTML = `
          <span class="type-item">${e}</span>
          <span class="type-item">${t}</span>
          <span class="type-item">${m}</span>
          <span class="type-item">タイプ</span>
        `;
    }

    if (resultImage) {
      const imagePath = imageMap[combination] || "./img/type_1.webp";
      resultImage.src = imagePath;
      resultImage.alt = combination;
    }
  }

  if (btnA) {
    btnA.addEventListener("click", function () {
      handleChoice("a");
    });
  }

  if (btnB) {
    btnB.addEventListener("click", function () {
      handleChoice("b");
    });
  }

  if (prevArrow) {
    prevArrow.addEventListener("click", goToPrev);
  }

  if (nextArrow) {
    nextArrow.addEventListener("click", goToNext);
  }

  // ========== PRODUCT CARDS ==========
  const products = [
    {
      id: 1,
      title:
        "トライアルセット 初めてのマイメンテ養生スープセット（スープ全4種）",
      image1: "./img/p_tea_img_1.webp",
      image2: "./img/p_tea_img_2.webp",
    },
    {
      id: 2,
      title:
        "トライアルセット 初めてのマイメンテ養生スープセット（スープ全4種）",
      image1: "./img/p_tea_img_2.1.webp",
      image2: "./img/p_tea_img_2.2.webp",
    },
    {
      id: 3,
      title:
        "トライアルセット 初めてのマイメンテ養生スープセット（スープ全4種）",
      image1: "./img/p_tea_img_3.1.webp",
      image2: "./img/p_tea_img_3.2.webp",
    },
    {
      id: 4,
      title:
        "トライアルセット 初めてのマイメンテ養生スープセット（スープ全4種）",
      image1: "./img/p_tea_img_4.1.webp",
      image2: "./img/p_tea_img_4.2.webp",
    },
  ];

  const cardsContainer = document.getElementById("productCards");

  if (cardsContainer) {
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
  }
});
