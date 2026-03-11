document.addEventListener("DOMContentLoaded", function () {
  const typeData = {
    type000: {
      type: "実・寒・湿",
      image: "./img/type001.webp",

      imageTea: "./img/t_KANSIT_001.webp",
      imageSoup: "./img/s_JITKAN_001.webp",
      kekkaHeading:
        "自律神経の調整不良により体の機能が低下して、<br>余分な水分が溜まりやすくなったタイプ",
      kekkaBody:
        "甘いものを控え、血液の流れをよくし、余分な水分を除く働きのある食材をとりましょう。<br>自律神経を整えるGABA、トリプトファンやビタミンD、血行改善と女性ホルモン様作用があるといわれるフェンネルや八角、水を巡らせるハトムギもおすすめです。<br>ウォーキングのような持久性の高い運動で、自律神経を整え、代謝をよくしましょう。<br>また、入浴やハーブティなどでリラックスし、夜は早めに寝て睡眠時間を十分に確保しましょう。",
    },
    type001: {
      type: "実・寒・燥",
      image: "./img/type002.webp",
      imageTea: "./img/t_KANSOU_002.webp",
      imageSoup: "./img/s_JITKAN_002.webp",
      kekkaHeading:
        "自律神経の調整不良により末梢血流が良くなく、<br>冷えと乾燥を伴うタイプ",
      kekkaBody:
        "過食、冷やす性質の食材を控え、血液の流れをよくする働きのある食材をとりましょう。<br>自律神経を整えるGABA、トリプトファンやビタミンD、血行促進と女性ホルモン様作用があるといわれるフェンネルや八角、うるおす働きのあるクコの実や菊花もおすすめです。<br>スキップなど適度な運動で自律神経を刺激し、血液の巡りをよくしましょう。<br>また、入浴やアロマなどでリラックスし、夜は早めに寝て睡眠時間を十分に確保しましょう。<br>",
    },
    type010: {
      type: "実・熱・湿",
      image: "./img/type003.webp",

      imageTea: "./img/t_NETSIT_003.webp",
      imageSoup: "./img/s_JITNET_003.webp",
      kekkaHeading:
        "交感神経が高まり、<br>熱と余分な水分が体内に溜まりやすくなったタイプ",
      kekkaBody:
        "味の濃いもの、甘いもの、油っこいものを控え、熱を冷まし、余分な水分を除く働きのある食材をとりましょう。<br>交感神経が優位になりすぎるのを抑えるビタミンD、女性ホルモン様作用があるといわれるジャスミンやセージ、水を巡らせるハトムギもおすすめです。<br>ある程度ハードな運動を習慣化し、体内の余分な水分と熱を発散させましょう。<br>また、入浴やハーブティなどでリラックスし、夜は早めに寝て睡眠時間を十分に確保しましょう。",
    },
    type011: {
      type: "実・熱・燥",
      image: "./img/type004.webp",

      imageTea: "./img/t_NETSOU_004.webp",
      imageSoup: "./img/s_JITNET_004.webp",
      kekkaHeading: "交感神経が高まり、<br>熱がこもりやすくなったタイプ",
      kekkaBody:
        "アルコール、辛いもの、過食、温める性質の食材を控え、熱を冷まし、うるおす働きのある食材をとりましょう。<br>交感神経が優位になりすぎるのを抑えるビタミンD、女性ホルモン様作用があるといわれるジャスミンやセージ、うるおす働きのあるクコの実や菊花もおすすめです。<br>ある程度ハードな運動を習慣化し、こまめに水分を補給して、カラダにうるおいをプラスしましょう。<br>また、入浴やアロマなどでリラックスし、夜は早めに寝て睡眠時間を十分に確保しましょう。",
    },
    type100: {
      type: "虚・寒・湿",
      image: "./img/type005.webp",

      imageTea: "./img/t_KANSIT_005.webp",
      imageSoup: "./img/s_KYOKAN_005.webp",
      kekkaHeading:
        "エネルギー不足と自律神経の調整不良により<br>体の機能が低下し、余分な水分が留まりやすくなったタイプ",
      kekkaBody:
        "栄養バランスの良い食事を心がけ、冷やす性質の食材を控え、活動力を高め余分な水分を除く働きのある食材をとりましょう。<br>滋養とホルモンバランスを整えるレバー（ビタミンD・亜鉛）やなつめ、温めるシナモンやバジル、水を巡らせるハトムギもおすすめです。<br>軽い運動とリンパマッサージなどで水分の巡りをよくし、ゆっくりとした入浴で体を温め、良質な睡眠をとりましょう。",
    },
    type101: {
      type: "虚・寒・燥",
      image: "./img/type006.webp",

      imageTea: "./img/t_KANSOU_006.webp",
      imageSoup: "./img/s_KYOKAN_006.webp",
      kekkaHeading:
        "エネルギー不足と自律神経の調整不良により<br>末梢血流が良くなく、冷えと乾燥を伴うタイプ",
      kekkaBody:
        "栄養バランスの良い食事を心がけ、冷やす性質の食材を控え、活動力を高める働きのある食材をとりましょう。<br>滋養とホルモンバランスを整える牡蠣（ミネラル）や白キクラゲ（ビタミンD）、温めるシナモンやバジル、うるおす働きのあるクコの実や菊花もおすすめです。<br>軽い運動で血液の巡りをよくし、日中には日光浴で体を整え、良質な睡眠をとりましょう。<br>また、入浴で身体を温め、疲労回復、血行促進を。就寝1.5時間前の入浴は、睡眠の質を高めます。",
    },
    type110: {
      type: "虚・熱・湿",
      image: "./img/type007.webp",

      imageTea: "./img/t_NETSIT_007.webp",
      imageSoup: "./img/s_KYONET_007.webp",
      kekkaHeading:
        "エネルギー不足と交感神経が高まり、<br>熱と余分な水分が体に溜まりやすくなったタイプ",
      kekkaBody:
        "栄養バランスの良い食事を心がけ、温める性質の食材を控え、熱を冷まし、余分な水分を除く働きのある食材をとりましょう。<br>滋養とホルモンバランスを整えるレバー（ビタミンD・亜鉛）やなつめ、熱を冷ますペパーミントやオレンジ、水を巡らせるハトムギもおすすめです。<br>睡眠不足、運動不足に気をつけ、ヨーグルトや健康茶などで水の巡りをよくしましょう。<br>また、運動などで汗をかいて、体に溜まった余分な水分や老廃物を排出しましょう。",
    },
    type111: {
      type: "虚・熱・燥",
      image: "./img/type008.webp",

      imageTea: "./img/t_NETSOU_008.webp",
      imageSoup: "./img/s_KYONET_008.webp",
      kekkaHeading:
        "エネルギー不足と交感神経が高まり、<br>熱がこもりやすくなったタイプ",
      kekkaBody:
        "栄養バランスの良い食事を心がけ、温める性質の食材を控え、熱を冷まし、うるおす働きのある食材をとりましょう。<br>滋養とホルモンバランスを整える牡蠣（ミネラル）や白きくらげ（ビタミンD）、熱を冷ますペパーミントやオレンジ、うるおす働きのあるクコの実や菊花もおすすめです。<br>睡眠不足、運動不足に気をつけ、タンパク質などの栄養豊富な牛乳やヨーグルトなどをとるようにしましょう。<br>また、運動をして汗をかいた後には、水分補給を忘れずに。",
    },
  };

  const typeDataMap = {};
  Object.values(typeData).forEach((item) => {
    typeDataMap[item.type] = item;
  });

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

  const startBtn = document.getElementById("start-btn");
  const startBtn2 = document.getElementById("start-btn-2");
  const restartQuiz = document.getElementById("restart-quiz");
  const btnA = document.getElementById("btn-a");
  const btnB = document.getElementById("btn-b");
  const prevArrow = document.getElementById("prev-arrow");
  const backToStart = document.getElementById("back_to_start");
  const startQ = document.getElementById("start-q");
  const appContainer = document.getElementById("app-container");
  const quizUI = document.getElementById("quiz-ui");
  const resultUI = document.getElementById("result-ui");
  const validationMsg = document.getElementById("validation-message");
  const qNumber = document.getElementById("q-number");
  const progressFill = document.getElementById("progress-fill");
  const questionTitle = document.getElementById("question-title");
  const resultImage = document.getElementById("result-image");
  const typeBadge = document.getElementById("result-type-badge");
  const resultHeading = document.getElementById("result-heading");
  const resultBody = document.getElementById("result-body");
  const pageLoader = document.getElementById("pageLoader");
  const currentQuestion = document.getElementById("current-question");
  const productCards = document.getElementById("productCards");

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
    setTimeout(() => {
      scrollToTop();
    }, 100);

    if (resultUI) {
      resultUI.style.display = "none";
      resultUI.classList.remove("show");
    }

    if (startQ) startQ.style.display = "none";

    if (appContainer) {
      appContainer.style.display = "block";
    }

    if (quizUI) {
      quizUI.style.display = "block";
      quizUI.classList.remove("fade-out", "fade-in", "slide-out", "slide-in");
    }

    resetQuiz();
    renderQuestion();

    console.log("Quiz restarted from result screen - starting from question 1");
  }

  function resetQuiz() {
    current = 0;
    scores = { energy: 0, temp: 0, moist: 0 };
    answers = new Array(15).fill(null);

    if (qNumber) qNumber.innerText = "1";
    if (currentQuestion) currentQuestion.innerText = "1";
    if (progressFill) progressFill.style.width = "0%";

    if (btnA) btnA.classList.remove("selected");
    if (btnB) btnB.classList.remove("selected");

    updateNavigationButtons();
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
    // Handle prev button (1つもどる)
    if (prevArrow) {
      if (current === 0) {
        prevArrow.classList.add("disabled");
      } else {
        prevArrow.classList.remove("disabled");
      }
    }

    // Back to start button (はじめにもどる)
    if (backToStart) {
      backToStart.classList.remove("disabled");
      backToStart.disabled = false;
      backToStart.style.pointerEvents = "auto";
      backToStart.style.opacity = "1";
      backToStart.style.cursor = "pointer";
    }
  }

  function updateProgress() {
    const answeredCount = answers.filter((a) => a !== null).length;

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

    if (btnA) {
      if (answers[current] === "a") {
        btnA.classList.add("selected");
      } else {
        btnA.classList.remove("selected");
      }
    }

    if (btnB) {
      if (answers[current] === "b") {
        btnB.classList.add("selected");
      } else {
        btnB.classList.remove("selected");
      }
    }

    updateNavigationButtons();
    updateProgress();
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

    if (btnA) {
      btnA.classList.toggle("selected", answers[current] === "a");
    }
    if (btnB) {
      btnB.classList.toggle("selected", answers[current] === "b");
    }

    updateNavigationButtons();
    updateProgress();

    const allAnswered = answers.every((answer) => answer !== null);

    if (answers[current] !== null) {
      if (current < 14) {
        setTimeout(() => {
          current++;
          renderQuestion();
        }, 200);
      } else if (current === 14 && allAnswered) {
        setTimeout(() => {
          showResult();
        }, 200);
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

    const e = scores.energy > 0 ? "実" : scores.energy < 0 ? "虚" : "実";
    const t = scores.temp > 0 ? "寒" : scores.temp < 0 ? "熱" : "熱";
    const m = scores.moist > 0 ? "湿" : scores.moist < 0 ? "燥" : "湿";

    const combination = `${e}・${t}・${m}`;
    console.log("Diagnosed type:", combination);

    const typeInfo = typeDataMap[combination];

    if (typeInfo) {
      if (typeBadge) {
        typeBadge.innerHTML = `
                <span class="type-item">${e}</span>
                <span class="type-item">${t}</span>
                <span class="type-item">${m}</span>
                <span class="type-item">タイプ</span>
              `;
      }

      if (resultImage) {
        resultImage.src = typeInfo.image;
        resultImage.alt = combination;
      }

      if (resultHeading) {
        resultHeading.innerHTML = typeInfo.kekkaHeading;
      }

      if (resultBody) {
        resultBody.innerHTML = typeInfo.kekkaBody;
      }

      if (productCards) {
        productCards.innerHTML = `
                <div class="card">
                  <div class="images">
                    <img src="${typeInfo.imageTea}" alt="おすすめのお茶">
                  </div>
                </div>
                <div class="card">
                  <div class="images">
                    <img src="${typeInfo.imageSoup}" alt="おすすめのスープ">
                  </div>
                </div>
              `;
      }
    } else {
      console.error("Type data not found for:", combination);
      if (typeBadge) {
        typeBadge.innerHTML = `
                <span class="type-item">${e}</span>
                <span class="type-item">${t}</span>
                <span class="type-item">${m}</span>
                <span class="type-item">タイプ</span>
              `;
      }
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

  if (backToStart) {
    backToStart.addEventListener("click", function (e) {
      e.preventDefault();
      restartQuizFromResult();
    });
  }
});
