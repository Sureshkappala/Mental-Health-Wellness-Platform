/**
 * MindBloom - Vanilla JavaScript
 * Complete interactivity for navigation, storage, audio synthesis,
 * mood tracking, breathing timer, journal, goals, booking, and dashboards.
 */

(function () {
  'use strict';

  /* ==========================================================================
     1. Demo State & Seed Data Initialization
     ========================================================================== */
  const DEFAULT_RESOURCES = [
    {
      id: 'res-stress-grounding',
      title: '5-4-3-2-1 Sensory Grounding for Everyday Stress',
      category: 'Stress Management',
      readTime: '4 min read',
      desc: 'Learn how to gently reconnect with your immediate surroundings when feeling overwhelmed or rushed.',
      image: 'assets/images/stress-relief.svg',
      featured: true,
      content: `Grounding exercises are gentle, evidence-informed techniques that help quiet racing thoughts by turning your attention to your physical senses.\n\n### The 5-4-3-2-1 Technique\n1. **Acknowledge 5 things you can see**: Look for subtle details like the texture of a wooden desk or the movement of leaves outside.\n2. **Acknowledge 4 things you can touch**: Notice the fabric of your shirt, the cool surface of a table, or your feet grounded on the floor.\n3. **Acknowledge 3 things you can hear**: Listen for distant traffic, a gentle breeze, or the hum of a refrigerator.\n4. **Acknowledge 2 things you can smell**: Perhaps a trace of morning tea or fresh air.\n5. **Acknowledge 1 thing you can taste**: A sip of cool water or the lingering warmth of a meal.\n\nTake one slow breath after finishing. Remind yourself: *Right now, in this moment, I am safe and present.*`
    },
    {
      id: 'res-sleep-hygiene',
      title: 'Cultivating a Restful Evening Wind-Down Routine',
      category: 'Healthy Sleep Habits',
      readTime: '5 min read',
      desc: 'Simple transitions to signal your nervous system that the day is complete and it is safe to rest.',
      image: 'assets/images/sleep-relax.svg',
      featured: true,
      content: `Sleep is not merely the absence of wakefulness; it is an active restoration phase for mind and body.\n\n### Practical Evening Steps\n- **Lower ambient lighting** 60 minutes before bed to allow natural melatonin production.\n- **Dim screens or swap to paper reading** to reduce blue-spectrum stimulation.\n- **Jot down tomorrow\'s thoughts** on a notepad to clear mental workspace.\n- **Gentle neck and shoulder rolls** release daytime tension accumulated from desk work.`
    },
    {
      id: 'res-mindful-walking',
      title: 'The Art of Mindful Walking in Nature',
      category: 'Mindfulness',
      readTime: '3 min read',
      desc: 'How a 10-minute walk with open attention can soften mental fatigue and invite fresh clarity.',
      image: 'assets/images/mindfulness-nature.svg',
      featured: false,
      content: `You don\'t need a remote mountain trail to practice mindful walking. A local park, a quiet sidewalk, or even your garden can serve as a sanctuary.\n\n### How to Practice\n- Leave headphones behind for just 10 minutes.\n- Feel the heel-to-toe roll of each step.\n- Observe colors and shapes without labeling them as good or bad.\n- If your mind wanders to your to-do list, gently notice it and bring attention back to the rhythm of your feet.`
    },
    {
      id: 'res-work-boundaries',
      title: 'Setting Gentle Boundaries in a Connected World',
      category: 'Work-Life Balance',
      readTime: '6 min read',
      desc: 'Protecting your downtime without guilt: practical language and mindsets for sustainable living.',
      image: 'assets/images/welcome-calm.svg',
      featured: false,
      content: `Constant connectivity can blur the lines between productive energy and personal restoration. Boundaries are not walls; they are bridges to sustainable focus.\n\n### Mindful Boundary Strategies\n- **Create an end-of-work ritual**: Close open tabs, say goodbye to colleagues, and step outside for 2 minutes.\n- **Delay checking morning notifications** until you have enjoyed your first drink of water or breakfast.\n- Remember: resting today ensures you can show up with care tomorrow.`
    },
    {
      id: 'res-self-care-rituals',
      title: 'Micro-Moments of Self-Care That Take Under 5 Minutes',
      category: 'Self-Care Routines',
      readTime: '3 min read',
      desc: 'You don\'t need an entire day off to nourish yourself. Discover tiny pauses that restore balance.',
      image: 'assets/images/journal-cozy.svg',
      featured: true,
      content: `Self-care is often depicted as elaborate retreats, but the most impactful habits are micro-moments woven throughout normal days.\n\n### 5-Minute Ideas\n- Step outdoors and close your eyes for 3 deep breaths in natural daylight.\n- Gently stretch your arms overhead and un-clench your jaw.\n- Enjoy a cup of warm tea with zero distractions.\n- Write down one thing that made you smile today.`
    },
    {
      id: 'res-managing-worries',
      title: 'Managing Everyday Worries with the "Worry Time" Technique',
      category: 'Managing Everyday Worries',
      readTime: '5 min read',
      desc: 'A cognitive strategy to contain repetitive intrusive worries and regain present focus.',
      image: 'assets/images/stress-relief.svg',
      featured: false,
      content: `When worries strike during the day, dismissing them outright often makes them louder. Designating a dedicated 15-minute "worry time" helps contain them.\n\n### Steps to Containment\n1. When a worry pops up, write it down: "I will look at this at 4:30 PM."\n2. At 4:30 PM, sit with the list for 15 minutes. Categorize: can I act on this today?\n3. If actionable, write one small next step. If outside your control, practice letting it rest until tomorrow.`
    },
    {
      id: 'res-emotional-awareness',
      title: 'Naming What You Feel: Expanding Your Emotional Vocabulary',
      category: 'Emotional Awareness',
      readTime: '4 min read',
      desc: 'Why "fine" hides nuance, and how pinpointing exact emotions calms the amygdala.',
      image: 'assets/images/community-circle.svg',
      featured: false,
      content: `Neuroscience shows that labeling an emotion ("name it to tame it") decreases amygdala reactivity.\n\nInstead of saying "I\'m stressed," ask:\n- Am I **overwhelmed** by multiple demands?\n- Am I **disappointed** by an expectation that wasn\'t met?\n- Am I simply **physically exhausted**?\n\nPrecision brings compassion and points toward the right restorative action.`
    },
    {
      id: 'res-healthy-habits',
      title: 'Building Gentle Habits: The Power of Tiny Seeds',
      category: 'Building Healthy Habits',
      readTime: '5 min read',
      desc: 'Ditch perfectionist standards and build sustainable daily rituals that naturally bloom over time.',
      image: 'assets/images/mindfulness-nature.svg',
      featured: false,
      content: `Big goals often trigger friction and burnout. Tiny seeds—habits so small they require almost zero willpower—compound into lasting peace of mind.\n\n- Start with **1 minute** of conscious breathing each morning.\n- Pair it with an existing anchor: "Right after I start the coffee brewer, I take 3 slow breaths."\n- Celebrate consistency, not intensity.`
    },
    {
      id: 'res-personal-growth',
      title: 'Gentle Self-Discovery: Aligning Your Daily Choices with Inner Values',
      category: 'Personal Growth',
      readTime: '5 min read',
      desc: 'Explore compassionate self-reflection frameworks to discover what truly nourishes your authentic self.',
      image: 'assets/images/welcome-calm.svg',
      featured: true,
      content: `Personal growth is not about fixing what is broken; it is about gently nurturing what is already whole.\n\n### Living by Values Rather Than Pressure\n- Identify three core values that make you feel grounded (e.g., creativity, kindness, peace).\n- Notice when everyday obligations clash with these values and practice setting tiny boundaries.\n- Remember that honoring your pace is a form of self-respect.`
    },
    {
      id: 'res-relaxation-techniques',
      title: 'Progressive Muscle Relaxation for Bodily Calm and Ease',
      category: 'Stress Management',
      readTime: '4 min read',
      desc: 'Release physical tension stored in your neck, shoulders, and jaw with a structured somatic release method.',
      image: 'assets/images/stress-relief.svg',
      featured: false,
      content: `Our bodies often absorb stress before our conscious minds notice it. Progressive Muscle Relaxation (PMR) helps discharge accumulated physical stress.\n\n### The PMR Sequence\n1. **Feet & Calves**: Curl your toes tight for 5 seconds, then release completely. Notice the warmth.\n2. **Abdomen & Chest**: Inhale and gently tighten your core for 5 seconds, then breathe out softly.\n3. **Shoulders & Neck**: Shrug your shoulders toward your ears for 5 seconds, then let them drop heavily.\n4. **Facial Muscles**: Clench your jaw softly, scrunch your eyes for 3 seconds, then release.\n\nRest quietly for 2 minutes and savor the sensation of physical lightness.`
    },
    {
      id: 'res-mindful-breathing',
      title: 'Breath as an Anchor: Soothing Your Nervous System Anywhere',
      category: 'Mindfulness',
      readTime: '3 min read',
      desc: 'Quick somatic breathing cues you can practice at your desk, on public transit, or before difficult conversations.',
      image: 'assets/images/mindfulness-nature.svg',
      featured: false,
      content: `Your breath is the one physiological tool you always carry with you.\n\n### The Extended Exhale Anchor\nWhenever you feel rushed or anxious:\n- Breathe in quietly through your nose for a count of 3.\n- Release the breath through softly parted lips for a count of 6.\n- Prolonging the exhalation actively activates the vagus nerve, lowering heart rate and signaling inner safety.`
    },
    {
      id: 'res-digital-detox',
      title: 'Mindful Digital Wind-Down: Creating Calm in a Screen-Filled World',
      category: 'Work-Life Balance',
      readTime: '4 min read',
      desc: 'Gentle transitions to protect your evening peace from endless notification loops and doomscrolling.',
      image: 'assets/images/sleep-relax.svg',
      featured: false,
      content: `Modern screens keep our brains in high-alert vigilance. Creating an intentional evening digital threshold restores quiet peace.\n\n### Mindful Evening Thresholds\n- Establish a "device bedtime" 45 minutes before sleep.\n- Charge your phone outside arm\'s reach from your bed.\n- Swap late-night social feeds with a warm herbal tea or relaxing paper journal reflection.`
    }
  ];

  const DEFAULT_PROFESSIONALS = [
    {
      id: 'prof-elena',
      name: 'Dr. Elena Rostova',
      role: 'Clinical Psychologist, PsyD (Demo)',
      specialties: ['Anxiety & Stress', 'Mindfulness & Life Balance', 'Cognitive Grounding'],
      formats: ['Online Video', 'In-Person'],
      languages: ['English', 'Spanish'],
      experience: '12 years experience (Sample Data)',
      bio: 'Dr. Rostova specializes in compassionate cognitive practices, nervous system regulation, and mindfulness-based stress reduction. Her approach centers on creating a supportive, nonjudgmental space for personal growth.',
      availability: 'Mon, Wed, Fri (Morning & Afternoon)',
      image: 'assets/images/prof-elena.svg'
    },
    {
      id: 'prof-marcus',
      name: 'Marcus Vance',
      role: 'Licensed Marriage & Family Therapist, LMFT (Demo)',
      specialties: ['Relationship Counseling', 'Work-Life Balance', 'Burnout Prevention'],
      formats: ['Online Video'],
      languages: ['English'],
      experience: '9 years experience (Sample Data)',
      bio: 'Marcus works with individuals and couples facing communication challenges, modern career fatigue, and life transitions. He emphasizes relational empathy and sustainable self-care rhythms.',
      availability: 'Tue, Thu, Sat (Afternoon & Evening)',
      image: 'assets/images/prof-marcus.svg'
    },
    {
      id: 'prof-sophia',
      name: 'Sophia Lin',
      role: 'Mindfulness & Somatic Practitioner, MSW (Demo)',
      specialties: ['Somatic Relaxation', 'Sleep Restructuring', 'Emotional Awareness'],
      formats: ['Online Video', 'In-Person'],
      languages: ['English', 'Mandarin'],
      experience: '7 years experience (Sample Data)',
      bio: 'Sophia blends gentle somatic awareness with guided meditation and sleep restoration routines. She helps clients reconnect with bodily calm and gentle self-compassion.',
      availability: 'Mon, Tue, Thu (Morning & Evening)',
      image: 'assets/images/prof-sophia.svg'
    },
    {
      id: 'prof-arjun',
      name: 'Arjun Mehta',
      role: 'Counseling Psychologist, MSc (Demo)',
      specialties: ['Managing Everyday Worries', 'Personal Growth', 'Habit Change'],
      formats: ['Online Video', 'In-Person'],
      languages: ['English', 'Hindi'],
      experience: '10 years experience (Sample Data)',
      bio: 'Arjun provides supportive solution-focused counseling, helping clients navigate everyday anxiety, career transitions, and life alignment with practical, kind accountability.',
      availability: 'Wed, Fri, Sat (Morning & Afternoon)',
      image: 'assets/images/prof-arjun.svg'
    },
    {
      id: 'prof-maya',
      name: 'Dr. Maya Patel',
      role: 'Holistic Mind-Body Psychologist, PhD (Demo)',
      specialties: ['Somatic Stress Relief', 'Breathwork Therapy', 'Cognitive Grounding'],
      formats: ['Online Video', 'In-Person'],
      languages: ['English', 'Gujarati'],
      experience: '11 years experience (Sample Data)',
      bio: 'Dr. Patel bridges evidence-based cognitive therapy with somatic breath regulation to help clients release chronic nervous system tension.',
      availability: 'Tue, Wed, Fri (Afternoon & Evening)',
      image: 'assets/images/prof-maya.svg'
    },
    {
      id: 'prof-david',
      name: 'David Kim',
      role: 'Stress & Resilience Coach, LPC (Demo)',
      specialties: ['Executive Burnout', 'Mindful Productivity', 'Emotional Balance'],
      formats: ['Online Video'],
      languages: ['English', 'Korean'],
      experience: '8 years experience (Sample Data)',
      bio: 'David focuses on helping individuals navigate high-pressure careers, prevent emotional exhaustion, and cultivate sustainable daily peace.',
      availability: 'Mon, Thu, Sat (Morning & Afternoon)',
      image: 'assets/images/prof-david.svg'
    }
  ];

  const DEFAULT_GOALS = [
    { id: 'g-1', title: '5-minute morning mindful breathing', category: 'Mindfulness', frequency: 'Daily', completed: true, streak: 4 },
    { id: 'g-2', title: 'Gentle screen-free wind down before bed', category: 'Rest', frequency: 'Daily', completed: false, streak: 2 },
    { id: 'g-3', title: 'Write in evening gratitude journal', category: 'Emotional', frequency: 'Daily', completed: true, streak: 5 },
    { id: 'g-4', title: 'Take a 15-minute restorative walk', category: 'Physical', frequency: 'Daily', completed: false, streak: 1 }
  ];

  const DEFAULT_MOODS = [
    { id: 'm-1', date: '2026-10-25', mood: 'Good', score: 4, tags: ['Grateful', 'Peaceful'], note: 'Had a restorative morning walk.' },
    { id: 'm-2', date: '2026-10-26', mood: 'Okay', score: 3, tags: ['Tired'], note: 'Long hours at work, took short breaks.' },
    { id: 'm-3', date: '2026-10-27', mood: 'Stressed', score: 1, tags: ['Overwhelmed', 'Anxious'], note: 'Practiced 4-7-8 breathing in the afternoon.' },
    { id: 'm-4', date: '2026-10-28', mood: 'Good', score: 4, tags: ['Content', 'Relieved'], note: 'Boundary set on late emails.' },
    { id: 'm-5', date: '2026-10-29', mood: 'Very Good', score: 5, tags: ['Hopeful', 'Energized'], note: 'Feeling centered and ready for the day.' }
  ];

  const DEFAULT_JOURNALS = [
    {
      id: 'j-1',
      title: 'A gentle pause in the garden',
      date: '2026-10-28',
      mood: 'Good',
      body: 'Today I stepped outside for ten minutes between tasks. The cool air and the rustle of leaves reminded me that pace is a choice. I do not have to hurry through everything.'
    },
    {
      id: 'j-2',
      title: 'Releasing what I cannot control',
      date: '2026-10-26',
      mood: 'Okay',
      body: 'Noticed tension in my shoulders regarding a project timeline. Wrote down what is actually my responsibility and what belongs to others. Breathing a little easier now.'
    }
  ];

  const DEFAULT_APPOINTMENTS = [
    {
      id: 'apt-101',
      reference: 'MB-89241',
      name: 'Demo Seeker',
      email: 'seeker@mindbloom.demo',
      phone: '5551234567',
      profName: 'Dr. Elena Rostova',
      type: 'Online Video',
      date: '2026-11-04',
      timeSlot: '10:00 AM',
      reason: 'General stress management and grounding consultation',
      status: 'Confirmed (Demo)'
    }
  ];

  // Helper to safely fetch / init localStorage collections
  function getStorage(key, fallback) {
    try {
      const data = localStorage.getItem(key);
      if (!data) {
        localStorage.setItem(key, JSON.stringify(fallback));
        return fallback;
      }
      return JSON.parse(data);
    } catch (e) {
      console.warn('Storage read fallback for', key, e);
      return fallback;
    }
  }

  function setStorage(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.warn('Storage write failed for', key, e);
    }
  }

  // Initialize all collections if empty
  const state = {
    resources: (() => {
      const stored = getStorage('mb_resources', DEFAULT_RESOURCES);
      if (!stored || stored.length < DEFAULT_RESOURCES.length) {
        setStorage('mb_resources', DEFAULT_RESOURCES);
        return DEFAULT_RESOURCES;
      }
      return stored;
    })(),
    professionals: (() => {
      const stored = getStorage('mb_professionals', DEFAULT_PROFESSIONALS);
      if (!stored || stored.length < DEFAULT_PROFESSIONALS.length) {
        setStorage('mb_professionals', DEFAULT_PROFESSIONALS);
        return DEFAULT_PROFESSIONALS;
      }
      return stored;
    })(),
    goals: getStorage('mb_wellness_goals', DEFAULT_GOALS),
    moods: getStorage('mb_mood_entries', DEFAULT_MOODS),
    journals: getStorage('mb_journal_entries', DEFAULT_JOURNALS),
    appointments: getStorage('mb_appointments', DEFAULT_APPOINTMENTS),
    savedResources: getStorage('mb_saved_resources', ['res-stress-grounding', 'res-self-care-rituals']),
    currentUser: getStorage('mb_current_user', {
      name: 'Alex Rivera',
      email: 'alex@mindbloom.demo',
      role: 'User'
    })
  };

  /* ==========================================================================
     2. UI Toast Notification System
     ========================================================================== */
  function showToast(message, type = 'success') {
    let container = document.getElementById('toastContainer');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toastContainer';
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    container.appendChild(toast);

    // Animate in
    requestAnimationFrame(() => {
      toast.classList.add('show');
    });

    // Auto remove after 3.2s
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
      }, 300);
    }, 3200);
  }

  /* ==========================================================================
     3. Sticky Navigation & Mobile Drawer
     ========================================================================== */
  function initNavigation() {
    const header = document.querySelector('.navbar-header');
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const mobileDrawer = document.getElementById('mobileDrawer');
    const mobileOverlay = document.getElementById('mobileOverlay');
    const closeDrawerBtn = document.getElementById('closeDrawerBtn');

    // Sticky shadow on scroll
    window.addEventListener('scroll', () => {
      if (header) {
        if (window.scrollY > 15) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      }
    });

    // Highlight active link
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const allNavLinks = document.querySelectorAll('.nav-link');
    allNavLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href && (href === currentPath || (currentPath === '' && href === 'index.html'))) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    // Open/Close Drawer Functions
    function openDrawer() {
      if (!mobileDrawer || !mobileOverlay) return;
      mobileDrawer.classList.add('is-open');
      mobileOverlay.classList.add('is-visible');
      if (hamburgerBtn) hamburgerBtn.classList.add('is-active');
      document.body.classList.add('nav-locked');
    }

    function closeDrawer() {
      if (!mobileDrawer || !mobileOverlay) return;
      mobileDrawer.classList.remove('is-open');
      mobileOverlay.classList.remove('is-visible');
      if (hamburgerBtn) hamburgerBtn.classList.remove('is-active');
      document.body.classList.remove('nav-locked');
    }

    if (hamburgerBtn) {
      hamburgerBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (mobileDrawer && mobileDrawer.classList.contains('is-open')) {
          closeDrawer();
        } else {
          openDrawer();
        }
      });
    }

    const openAdminMobileDrawerBtn = document.getElementById('openAdminMobileDrawerBtn');
    if (openAdminMobileDrawerBtn) {
      openAdminMobileDrawerBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        openDrawer();
      });
    }

    const openUserMobileDrawerBtn = document.getElementById('openUserMobileDrawerBtn');
    if (openUserMobileDrawerBtn) {
      openUserMobileDrawerBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        openDrawer();
      });
    }

    const dashboardSidebarToggle = document.getElementById('dashboardSidebarToggle');
    if (dashboardSidebarToggle) {
      dashboardSidebarToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        openDrawer();
      });
    }

    if (closeDrawerBtn) {
      closeDrawerBtn.addEventListener('click', closeDrawer);
    }

    if (mobileOverlay) {
      mobileOverlay.addEventListener('click', closeDrawer);
    }

    // Close on link click inside drawer
    if (mobileDrawer) {
      const drawerLinks = mobileDrawer.querySelectorAll('a');
      drawerLinks.forEach(link => link.addEventListener('click', closeDrawer));
    }

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileDrawer && mobileDrawer.classList.contains('is-open')) {
        closeDrawer();
      }
    });
  }

  /* ==========================================================================
     4. Interactive Breathing Timer (`breathing-exercises.html`)
     ========================================================================== */
  function initBreathingTimer() {
    const animatedCircle = document.getElementById('breathingAnimatedCircle');
    const phaseLabel = document.getElementById('breathPhaseLabel');
    const timerNumber = document.getElementById('breathTimerNumber');
    const startBtn = document.getElementById('startBreathingBtn');
    const pauseBtn = document.getElementById('pauseBreathingBtn');
    const resetBtn = document.getElementById('resetBreathingBtn');
    const cycleCountEl = document.getElementById('breathCycleCount');
    const techniqueBtns = document.querySelectorAll('.technique-btn');

    if (!animatedCircle || !phaseLabel || !timerNumber) return;

    const TECHNIQUES = {
      '4-7-8': [
        { name: 'Inhale gently...', seconds: 4, action: 'inhale' },
        { name: 'Hold comfortably...', seconds: 7, action: 'hold' },
        { name: 'Exhale slowly...', seconds: 8, action: 'exhale' },
        { name: 'Rest and soften', seconds: 1, action: 'rest' }
      ],
      'box': [
        { name: 'Breathe In...', seconds: 4, action: 'inhale' },
        { name: 'Hold gently...', seconds: 4, action: 'hold' },
        { name: 'Breathe Out...', seconds: 4, action: 'exhale' },
        { name: 'Hold gently...', seconds: 4, action: 'rest' }
      ],
      '4-6': [
        { name: 'Breathe In...', seconds: 4, action: 'inhale' },
        { name: 'Breathe Out...', seconds: 6, action: 'exhale' }
      ]
    };

    let activeTechnique = '4-7-8';
    let isRunning = false;
    let currentStepIndex = 0;
    let secondsRemaining = TECHNIQUES[activeTechnique][0].seconds;
    let completedCycles = 0;
    let timerInterval = null;

    function updateDisplay() {
      const currentStep = TECHNIQUES[activeTechnique][currentStepIndex];
      phaseLabel.textContent = currentStep.name;
      timerNumber.textContent = secondsRemaining;
      animatedCircle.className = `breathing-circle-animated ${currentStep.action}`;
      if (cycleCountEl) cycleCountEl.textContent = completedCycles;
    }

    function tick() {
      secondsRemaining--;
      if (secondsRemaining <= 0) {
        currentStepIndex++;
        if (currentStepIndex >= TECHNIQUES[activeTechnique].length) {
          currentStepIndex = 0;
          completedCycles++;
        }
        secondsRemaining = TECHNIQUES[activeTechnique][currentStepIndex].seconds;
      }
      updateDisplay();
    }

    function start() {
      if (isRunning) return;
      isRunning = true;
      if (startBtn) startBtn.style.display = 'none';
      if (pauseBtn) pauseBtn.style.display = 'inline-flex';
      updateDisplay();
      timerInterval = setInterval(tick, 1000);
    }

    function pause() {
      if (!isRunning) return;
      isRunning = false;
      clearInterval(timerInterval);
      if (startBtn) startBtn.style.display = 'inline-flex';
      if (pauseBtn) pauseBtn.style.display = 'none';
    }

    function reset() {
      pause();
      currentStepIndex = 0;
      completedCycles = 0;
      secondsRemaining = TECHNIQUES[activeTechnique][0].seconds;
      updateDisplay();
      animatedCircle.className = 'breathing-circle-animated';
      phaseLabel.textContent = 'Ready when you are';
      timerNumber.textContent = TECHNIQUES[activeTechnique][0].seconds;
    }

    if (startBtn) startBtn.addEventListener('click', start);
    if (pauseBtn) pauseBtn.addEventListener('click', pause);
    if (resetBtn) resetBtn.addEventListener('click', reset);

    techniqueBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        techniqueBtns.forEach(b => b.classList.remove('is-active'));
        btn.classList.add('is-active');
        activeTechnique = btn.dataset.technique;
        reset();
      });
    });

    // Initial state
    phaseLabel.textContent = 'Ready when you are';
    timerNumber.textContent = TECHNIQUES[activeTechnique][0].seconds;
    if (pauseBtn) pauseBtn.style.display = 'none';
  }

  /* ==========================================================================
     5. Soothing Web Audio Synthesizer (`mindfulness.html`)
     ========================================================================== */
  function initAmbientAudio() {
    const playButtons = document.querySelectorAll('.ambient-sound-btn');
    if (!playButtons.length) return;

    let audioCtx = null;
    let activeNodes = null;
    let currentActiveBtn = null;

    function getAudioContext() {
      if (!audioCtx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        audioCtx = new AudioContext();
      }
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }
      return audioCtx;
    }

    function stopCurrentSound() {
      if (activeNodes) {
        try {
          activeNodes.forEach(n => {
            if (n.stop) n.stop();
            if (n.disconnect) n.disconnect();
          });
        } catch (e) {}
        activeNodes = null;
      }
      if (currentActiveBtn) {
        currentActiveBtn.classList.remove('is-playing');
        const textSpan = currentActiveBtn.querySelector('.sound-btn-text');
        if (textSpan) textSpan.textContent = 'Play';
        currentActiveBtn = null;
      }
    }

    function playSound(type, btn) {
      stopCurrentSound();
      const ctx = getAudioContext();
      const nodes = [];

      if (type === 'rain') {
        // Synthesize gentle pink noise with low pass
        const bufferSize = ctx.sampleRate * 2;
        const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        let b0 = 0, b1 = 0, b2 = 0;
        for (let i = 0; i < bufferSize; i++) {
          const white = Math.random() * 2 - 1;
          b0 = 0.99886 * b0 + white * 0.0555179;
          b1 = 0.99332 * b1 + white * 0.0750759;
          b2 = 0.96900 * b2 + white * 0.1538520;
          output[i] = (b0 + b1 + b2) * 0.08;
        }

        const whiteNoise = ctx.createBufferSource();
        whiteNoise.buffer = noiseBuffer;
        whiteNoise.loop = true;

        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.value = 800;

        const gainNode = ctx.createGain();
        gainNode.gain.setValueAtTime(0.3, ctx.currentTime);

        whiteNoise.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(ctx.destination);

        whiteNoise.start();
        nodes.push(whiteNoise, filter, gainNode);
      } else if (type === 'bell') {
        // Synthesized singing bowl tone with gentle harmonics
        const osc1 = ctx.createOscillator();
        const osc2 = ctx.createOscillator();
        const gain = ctx.createGain();

        osc1.type = 'sine';
        osc1.frequency.setValueAtTime(432, ctx.currentTime); // 432 Hz healing tone
        osc2.type = 'sine';
        osc2.frequency.setValueAtTime(864, ctx.currentTime);

        gain.gain.setValueAtTime(0.25, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 6);

        osc1.connect(gain);
        osc2.connect(gain);
        gain.connect(ctx.destination);

        osc1.start();
        osc2.start();
        osc1.stop(ctx.currentTime + 6.1);
        osc2.stop(ctx.currentTime + 6.1);
        nodes.push(osc1, osc2, gain);
      } else if (type === 'forest') {
        // Wind sweep
        const bufferSize = ctx.sampleRate * 2;
        const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          output[i] = (Math.random() * 2 - 1) * 0.05;
        }
        const noise = ctx.createBufferSource();
        noise.buffer = noiseBuffer;
        noise.loop = true;

        const filter = ctx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(400, ctx.currentTime);
        filter.Q.value = 3.0;

        const gain = ctx.createGain();
        gain.gain.setValueAtTime(0.2, ctx.currentTime);

        noise.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);
        noise.start();
        nodes.push(noise, filter, gain);
      }

      activeNodes = nodes;
      currentActiveBtn = btn;
      btn.classList.add('is-playing');
      const textSpan = btn.querySelector('.sound-btn-text');
      if (textSpan) textSpan.textContent = 'Pause';
      showToast(`Playing relaxing ${type} soundscape`, 'info');
    }

    playButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const soundType = btn.dataset.sound;
        if (btn === currentActiveBtn) {
          stopCurrentSound();
        } else {
          playSound(soundType, btn);
        }
      });
    });
  }

  /* ==========================================================================
     6. Mood Tracker Interactivity & Trends (`mood-tracker.html` & Homepage)
     ========================================================================== */
  function initMoodTracker() {
    const moodBtns = document.querySelectorAll('.mood-btn');
    const tagPills = document.querySelectorAll('.tag-pill');
    const noteInput = document.getElementById('moodNoteInput');
    const saveMoodBtn = document.getElementById('saveMoodEntryBtn');
    const moodHistoryList = document.getElementById('moodHistoryList');
    const trendChartSvg = document.getElementById('moodTrendChartSvg');
    const filterSelect = document.getElementById('moodHistoryFilter');

    if (!moodBtns.length && !saveMoodBtn) return;

    let selectedMood = 'Good';
    let selectedScore = 4;
    let selectedTags = [];

    moodBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        moodBtns.forEach(b => b.classList.remove('is-selected'));
        btn.classList.add('is-selected');
        selectedMood = btn.dataset.mood;
        selectedScore = parseInt(btn.dataset.score || '3', 10);
      });
    });

    tagPills.forEach(pill => {
      pill.addEventListener('click', () => {
        const tag = pill.dataset.tag;
        if (pill.classList.contains('is-active')) {
          pill.classList.remove('is-active');
          selectedTags = selectedTags.filter(t => t !== tag);
        } else {
          pill.classList.add('is-active');
          selectedTags.push(tag);
        }
      });
    });

    if (saveMoodBtn) {
      saveMoodBtn.addEventListener('click', () => {
        const note = noteInput ? noteInput.value.trim() : '';
        const todayStr = new Date().toISOString().split('T')[0];

        const newEntry = {
          id: 'm-' + Date.now(),
          date: todayStr,
          mood: selectedMood,
          score: selectedScore,
          tags: [...selectedTags],
          note: note
        };

        state.moods.unshift(newEntry);
        setStorage('mb_mood_entries', state.moods);

        showToast('Your mood check-in has been saved gently to your device.', 'success');

        if (noteInput) noteInput.value = '';
        tagPills.forEach(p => p.classList.remove('is-active'));
        selectedTags = [];

        renderMoodHistory();
        renderTrendChart();
      });
    }

    function renderMoodHistory(filterDays = 'all') {
      if (!moodHistoryList) return;
      moodHistoryList.innerHTML = '';

      let entries = [...state.moods];
      if (filterDays === '7') {
        const cutoff = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
        entries = entries.filter(e => e.date >= cutoff);
      } else if (filterDays === '30') {
        const cutoff = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
        entries = entries.filter(e => e.date >= cutoff);
      }

      if (!entries.length) {
        moodHistoryList.innerHTML = `<div class="card text-center" style="padding: 2rem; color: var(--text-muted);">
          No mood entries found for this time period. Take a gentle moment to record one above!
        </div>`;
        return;
      }

      entries.forEach(entry => {
        const item = document.createElement('div');
        item.className = 'card card-sm mb-3';
        item.style.marginBottom = '1rem';
        item.innerHTML = `
          <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 1rem;">
            <div>
              <div style="display: flex; align-items: center; gap: 0.65rem; margin-bottom: 0.4rem;">
                <span class="badge badge-sage" style="font-size: 0.85rem;">${entry.mood}</span>
                <span style="font-size: 0.825rem; color: var(--text-light);">${entry.date}</span>
              </div>
              ${entry.tags && entry.tags.length ? `
                <div style="display: flex; gap: 0.35rem; flex-wrap: wrap; margin-bottom: 0.4rem;">
                  ${entry.tags.map(t => `<span class="badge badge-lavender" style="font-size: 0.72rem;">${t}</span>`).join('')}
                </div>
              ` : ''}
              ${entry.note ? `<p style="font-size: 0.925rem; color: var(--text-main); margin: 0;">${escapeHtml(entry.note)}</p>` : ''}
            </div>
            <button class="btn btn-ghost btn-sm delete-mood-btn" data-id="${entry.id}" title="Remove entry" style="color: var(--text-light);">&times;</button>
          </div>
        `;
        moodHistoryList.appendChild(item);
      });

      // Hook up delete buttons
      moodHistoryList.querySelectorAll('.delete-mood-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const id = btn.dataset.id;
          state.moods = state.moods.filter(m => m.id !== id);
          setStorage('mb_mood_entries', state.moods);
          renderMoodHistory(filterSelect ? filterSelect.value : 'all');
          renderTrendChart();
          showToast('Mood entry removed', 'info');
        });
      });
    }

    function renderTrendChart() {
      if (!trendChartSvg) return;
      const recent = [...state.moods].slice(0, 7).reverse();
      if (!recent.length) {
        trendChartSvg.innerHTML = `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#888">Log moods to see your weekly trend</text>`;
        return;
      }

      const svgWidth = 600;
      const svgHeight = 220;
      const padding = 45;
      const plotWidth = svgWidth - padding * 2;
      const plotHeight = svgHeight - padding * 2;

      const stepX = recent.length > 1 ? plotWidth / (recent.length - 1) : plotWidth / 2;
      const points = recent.map((item, idx) => {
        const x = padding + (recent.length > 1 ? idx * stepX : plotWidth / 2);
        // Score 1..5 mapped to Y (5 is top, 1 is bottom)
        const y = padding + plotHeight - ((item.score - 1) / 4) * plotHeight;
        return { x, y, ...item };
      });

      const polylinePoints = points.map(p => `${p.x},${p.y}`).join(' ');

      let svgContent = `
        <defs>
          <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#7C9D8E" stop-opacity="0.3"/>
            <stop offset="100%" stop-color="#7C9D8E" stop-opacity="0.0"/>
          </linearGradient>
        </defs>
        <!-- Horizontal grid guidelines -->
        <line x1="${padding}" y1="${padding}" x2="${svgWidth - padding}" y2="${padding}" stroke="#E2DDD5" stroke-dasharray="4,4"/>
        <line x1="${padding}" y1="${padding + plotHeight / 2}" x2="${svgWidth - padding}" y2="${padding + plotHeight / 2}" stroke="#E2DDD5" stroke-dasharray="4,4"/>
        <line x1="${padding}" y1="${padding + plotHeight}" x2="${svgWidth - padding}" y2="${padding + plotHeight}" stroke="#E2DDD5"/>

        <!-- Trend Line -->
        <polyline fill="none" stroke="#557767" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" points="${polylinePoints}" />
      `;

      // Draw points and labels
      points.forEach(p => {
        svgContent += `
          <circle cx="${p.x}" cy="${p.y}" r="6" fill="#FAF8F5" stroke="#557767" stroke-width="3" />
          <text x="${p.x}" y="${svgHeight - 12}" font-size="11" font-weight="600" fill="#586962" text-anchor="middle">${p.date.slice(5)}</text>
          <text x="${p.x}" y="${p.y - 12}" font-size="11" font-weight="700" fill="#24332D" text-anchor="middle">${p.mood}</text>
        `;
      });

      trendChartSvg.innerHTML = svgContent;
    }

    if (filterSelect) {
      filterSelect.addEventListener('change', () => {
        renderMoodHistory(filterSelect.value);
      });
    }

    renderMoodHistory();
    renderTrendChart();
  }

  /* ==========================================================================
     7. Private Journal (`journal.html`)
     ========================================================================== */
  function initJournal() {
    const journalForm = document.getElementById('journalEntryForm');
    const titleInput = document.getElementById('journalTitleInput');
    const dateInput = document.getElementById('journalDateInput');
    const moodSelect = document.getElementById('journalMoodSelect');
    const bodyInput = document.getElementById('journalBodyInput');
    const wordCountEl = document.getElementById('journalWordCount');
    const promptSelect = document.getElementById('journalPromptSelect');
    const journalList = document.getElementById('journalEntriesList');
    const deleteModal = document.getElementById('deleteConfirmModal');
    const confirmDeleteBtn = document.getElementById('confirmDeleteJournalBtn');
    const cancelDeleteBtn = document.getElementById('cancelDeleteJournalBtn');

    if (!journalList && !journalForm) return;

    let pendingDeleteId = null;
    let editingId = null;

    // Set default date to today
    if (dateInput) {
      dateInput.value = new Date().toISOString().split('T')[0];
    }

    // Word count update
    if (bodyInput && wordCountEl) {
      bodyInput.addEventListener('input', () => {
        const text = bodyInput.value.trim();
        const count = text ? text.split(/\s+/).length : 0;
        wordCountEl.textContent = `${count} word${count === 1 ? '' : 's'}`;
      });
    }

    // Prompt selection helper
    if (promptSelect && bodyInput) {
      promptSelect.addEventListener('change', () => {
        if (promptSelect.value) {
          const current = bodyInput.value.trim();
          bodyInput.value = current ? `${current}\n\n${promptSelect.value}\n` : `${promptSelect.value}\n`;
          bodyInput.focus();
        }
      });
    }

    // Save or Edit Journal Entry
    if (journalForm) {
      journalForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = titleInput.value.trim();
        const date = dateInput.value;
        const mood = moodSelect ? moodSelect.value : 'Good';
        const body = bodyInput.value.trim();

        if (!title || !body) {
          showToast('Please enter both a title and journal reflection.', 'error');
          return;
        }

        if (editingId) {
          const idx = state.journals.findIndex(j => j.id === editingId);
          if (idx !== -1) {
            state.journals[idx] = { id: editingId, title, date, mood, body };
            showToast('Journal entry updated successfully.', 'success');
          }
          editingId = null;
          const submitBtn = journalForm.querySelector('button[type="submit"]');
          if (submitBtn) submitBtn.textContent = 'Save Reflection';
        } else {
          const newEntry = {
            id: 'j-' + Date.now(),
            title,
            date,
            mood,
            body
          };
          state.journals.unshift(newEntry);
          showToast('Reflection gently saved to your local journal.', 'success');
        }

        setStorage('mb_journal_entries', state.journals);
        journalForm.reset();
        if (dateInput) dateInput.value = new Date().toISOString().split('T')[0];
        if (wordCountEl) wordCountEl.textContent = '0 words';
        renderJournals();
      });
    }

    function renderJournals() {
      if (!journalList) return;
      journalList.innerHTML = '';

      if (!state.journals.length) {
        journalList.innerHTML = `
          <div class="card text-center" style="padding: 2.5rem; color: var(--text-muted);">
            <h3>Your Journal is Clear</h3>
            <p>Write your first entry above to create a gentle, personal record of your reflections.</p>
          </div>
        `;
        return;
      }

      state.journals.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card mb-3';
        card.style.marginBottom = '1.25rem';
        card.innerHTML = `
          <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 1rem; margin-bottom: 0.75rem;">
            <div>
              <div style="display: flex; align-items: center; gap: 0.65rem; margin-bottom: 0.35rem;">
                <span class="badge badge-sage">${item.mood || 'Reflective'}</span>
                <span style="font-size: 0.85rem; color: var(--text-light);">${item.date}</span>
              </div>
              <h4 style="margin: 0;">${escapeHtml(item.title)}</h4>
            </div>
            <div style="display: flex; gap: 0.5rem;">
              <button class="btn btn-outline btn-sm edit-journal-btn" data-id="${item.id}">Edit</button>
              <button class="btn btn-ghost btn-sm delete-journal-btn" data-id="${item.id}" style="color: #D34C4C;">Delete</button>
            </div>
          </div>
          <p style="white-space: pre-line; color: var(--text-main); font-size: 0.95rem;">${escapeHtml(item.body)}</p>
        `;
        journalList.appendChild(card);
      });

      // Hook up edit and delete buttons
      journalList.querySelectorAll('.edit-journal-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const id = btn.dataset.id;
          const entry = state.journals.find(j => j.id === id);
          if (entry && journalForm) {
            editingId = id;
            titleInput.value = entry.title;
            dateInput.value = entry.date;
            if (moodSelect) moodSelect.value = entry.mood;
            bodyInput.value = entry.body;
            bodyInput.dispatchEvent(new Event('input'));
            const submitBtn = journalForm.querySelector('button[type="submit"]');
            if (submitBtn) submitBtn.textContent = 'Update Reflection';
            window.scrollTo({ top: journalForm.offsetTop - 100, behavior: 'smooth' });
          }
        });
      });

      journalList.querySelectorAll('.delete-journal-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          pendingDeleteId = btn.dataset.id;
          if (deleteModal) deleteModal.classList.add('is-active');
        });
      });
    }

    if (confirmDeleteBtn) {
      confirmDeleteBtn.addEventListener('click', () => {
        if (pendingDeleteId) {
          state.journals = state.journals.filter(j => j.id !== pendingDeleteId);
          setStorage('mb_journal_entries', state.journals);
          pendingDeleteId = null;
          if (deleteModal) deleteModal.classList.remove('is-active');
          renderJournals();
          showToast('Journal entry deleted.', 'info');
        }
      });
    }

    if (cancelDeleteBtn) {
      cancelDeleteBtn.addEventListener('click', () => {
        pendingDeleteId = null;
        if (deleteModal) deleteModal.classList.remove('is-active');
      });
    }

    renderJournals();
  }

  /* ==========================================================================
     8. Wellness Goals Tracker (`wellness-goals.html`)
     ========================================================================== */
  function initWellnessGoals() {
    const goalsList = document.getElementById('wellnessGoalsList');
    const addGoalForm = document.getElementById('addGoalForm');
    const goalTitleInput = document.getElementById('goalTitleInput');
    const goalCategorySelect = document.getElementById('goalCategorySelect');
    const goalFrequencySelect = document.getElementById('goalFrequencySelect');
    const progressPercentEl = document.getElementById('goalProgressPercent');
    const progressBarEl = document.getElementById('goalProgressBar');

    if (!goalsList && !addGoalForm) return;

    function updateGoalStats() {
      if (!state.goals.length) {
        if (progressPercentEl) progressPercentEl.textContent = '0%';
        if (progressBarEl) progressBarEl.style.width = '0%';
        return;
      }
      const completedCount = state.goals.filter(g => g.completed).length;
      const pct = Math.round((completedCount / state.goals.length) * 100);
      if (progressPercentEl) progressPercentEl.textContent = `${pct}%`;
      if (progressBarEl) progressBarEl.style.width = `${pct}%`;
    }

    function renderGoals() {
      if (!goalsList) return;
      goalsList.innerHTML = '';

      if (!state.goals.length) {
        goalsList.innerHTML = `<div class="card text-center" style="padding: 2.5rem; color: var(--text-muted);">
          <h3>No Goals Set Yet</h3>
          <p>Add a simple daily intention above to foster positive, sustainable rhythms.</p>
        </div>`;
        updateGoalStats();
        return;
      }

      state.goals.forEach(goal => {
        const item = document.createElement('div');
        item.className = 'card card-sm mb-3';
        item.style.marginBottom = '1rem';
        item.style.display = 'flex';
        item.style.alignItems = 'center';
        item.style.justifyContent = 'space-between';
        item.style.gap = '1rem';
        item.innerHTML = `
          <div style="display: flex; align-items: center; gap: 1rem; flex-grow: 1;">
            <input type="checkbox" class="goal-checkbox" data-id="${goal.id}" ${goal.completed ? 'checked' : ''} style="width: 22px; height: 22px; accent-color: var(--sage-600); cursor: pointer;" />
            <div>
              <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.25rem;">
                <span class="badge badge-sage" style="font-size: 0.75rem;">${goal.category}</span>
                <span style="font-size: 0.8rem; color: var(--text-light);">${goal.frequency}</span>
              </div>
              <h4 style="margin: 0; font-size: 1.05rem; ${goal.completed ? 'text-decoration: line-through; opacity: 0.7;' : ''}">${escapeHtml(goal.title)}</h4>
            </div>
          </div>
          <div style="display: flex; align-items: center; gap: 0.85rem;">
            <span style="font-size: 0.85rem; font-weight: 600; color: var(--peach-600);">🔥 ${goal.streak || 1}d streak</span>
            <button class="btn btn-ghost btn-sm remove-goal-btn" data-id="${goal.id}" title="Remove Goal" style="color: var(--text-light);">&times;</button>
          </div>
        `;
        goalsList.appendChild(item);
      });

      // Hook up check / toggle
      goalsList.querySelectorAll('.goal-checkbox').forEach(cb => {
        cb.addEventListener('change', () => {
          const id = cb.dataset.id;
          const g = state.goals.find(x => x.id === id);
          if (g) {
            g.completed = cb.checked;
            if (g.completed) {
              g.streak = (g.streak || 0) + 1;
              showToast(`Bravo! Goal completed for today: ${g.title}`, 'success');
            } else {
              g.streak = Math.max(0, (g.streak || 1) - 1);
            }
            setStorage('mb_wellness_goals', state.goals);
            renderGoals();
          }
        });
      });

      goalsList.querySelectorAll('.remove-goal-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const id = btn.dataset.id;
          state.goals = state.goals.filter(x => x.id !== id);
          setStorage('mb_wellness_goals', state.goals);
          renderGoals();
          showToast('Goal removed', 'info');
        });
      });

      updateGoalStats();
    }

    if (addGoalForm) {
      addGoalForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = goalTitleInput.value.trim();
        const category = goalCategorySelect.value;
        const frequency = goalFrequencySelect.value;

        if (!title) {
          showToast('Please enter a goal name.', 'error');
          return;
        }

        const newGoal = {
          id: 'g-' + Date.now(),
          title,
          category,
          frequency,
          completed: false,
          streak: 0
        };

        state.goals.push(newGoal);
        setStorage('mb_wellness_goals', state.goals);
        goalTitleInput.value = '';
        renderGoals();
        showToast('New wellness intention added!', 'success');
      });
    }

    renderGoals();
  }

  /* ==========================================================================
     9. Educational Resources Library (`resources.html` & `resource-details.html`)
     ========================================================================== */
  function initResources() {
    const searchInput = document.getElementById('resourceSearchInput');
    const filterPills = document.querySelectorAll('.resource-filter-pill');
    const resourcesGrid = document.getElementById('resourcesGrid');
    const resultCountEl = document.getElementById('resourceResultCount');

    // Single Resource Detail Page Elements
    const detailTitle = document.getElementById('detailResourceTitle');
    const detailCategory = document.getElementById('detailResourceCategory');
    const detailTime = document.getElementById('detailResourceTime');
    const detailImage = document.getElementById('detailResourceImage');
    const detailContent = document.getElementById('detailResourceContent');
    const bookmarkBtn = document.getElementById('detailBookmarkBtn');

    // 1. If on resource-details.html
    if (detailTitle) {
      const urlParams = new URLSearchParams(window.location.search);
      const resId = urlParams.get('id') || 'res-stress-grounding';
      const resource = state.resources.find(r => r.id === resId) || state.resources[0];

      if (resource) {
        document.title = `${resource.title} — MindBloom`;
        detailTitle.textContent = resource.title;
        if (detailCategory) detailCategory.textContent = resource.category;
        if (detailTime) detailTime.textContent = resource.readTime;
        if (detailImage) {
          detailImage.src = resource.image;
          detailImage.alt = resource.title;
        }
        if (detailContent) {
          // Parse basic markdown headers & lists
          let formatted = resource.content
            .replace(/^### (.*$)/gim, '<h3 style="margin-top: 1.5rem; margin-bottom: 0.75rem;">$1</h3>')
            .replace(/^1\. (.*$)/gim, '<li style="margin-left: 1.5rem; margin-bottom: 0.5rem;">$1</li>')
            .replace(/^- (.*$)/gim, '<li style="margin-left: 1.5rem; margin-bottom: 0.5rem;">$1</li>')
            .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
            .replace(/\*(.*?)\*/gim, '<em>$1</em>')
            .replace(/\n\n/gim, '</p><p>');
          detailContent.innerHTML = `<p>${formatted}</p>`;
        }

        // Bookmark handler
        if (bookmarkBtn) {
          const isSaved = state.savedResources.includes(resource.id);
          bookmarkBtn.textContent = isSaved ? '★ Saved to Dashboard' : '☆ Save to Dashboard';
          bookmarkBtn.addEventListener('click', () => {
            if (state.savedResources.includes(resource.id)) {
              state.savedResources = state.savedResources.filter(id => id !== resource.id);
              bookmarkBtn.textContent = '☆ Save to Dashboard';
              showToast('Removed from your saved resources.', 'info');
            } else {
              state.savedResources.push(resource.id);
              bookmarkBtn.textContent = '★ Saved to Dashboard';
              showToast('Saved to your dashboard library!', 'success');
            }
            setStorage('mb_saved_resources', state.savedResources);
          });
        }
      }
      return;
    }

    // 2. If on resources.html (Catalog Search & Filtering)
    if (!resourcesGrid) return;

    let currentCategory = 'All';
    let searchQuery = '';

    function renderFilteredResources() {
      let items = state.resources.filter(res => {
        const matchesCategory = currentCategory === 'All' || res.category.toLowerCase() === currentCategory.toLowerCase();
        const matchesSearch = !searchQuery ||
          res.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          res.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
          res.category.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
      });

      if (resultCountEl) {
        resultCountEl.textContent = `Showing ${items.length} resource${items.length === 1 ? '' : 's'}`;
      }

      resourcesGrid.innerHTML = '';

      if (!items.length) {
        resourcesGrid.innerHTML = `
          <div class="card text-center" style="grid-column: 1 / -1; padding: 3rem; color: var(--text-muted);">
            <h3>No guides found</h3>
            <p>Try searching with another keyword or explore all wellness categories.</p>
            <button class="btn btn-outline btn-sm mt-3" id="resetResourceFilterBtn">Show All Resources</button>
          </div>
        `;
        const resetBtn = document.getElementById('resetResourceFilterBtn');
        if (resetBtn) {
          resetBtn.addEventListener('click', () => {
            currentCategory = 'All';
            searchQuery = '';
            if (searchInput) searchInput.value = '';
            filterPills.forEach(p => p.classList.toggle('is-active', p.dataset.category === 'All'));
            renderFilteredResources();
          });
        }
        return;
      }

      items.forEach(res => {
        const isSaved = state.savedResources.includes(res.id);
        const card = document.createElement('article');
        card.className = 'resource-card';
        card.innerHTML = `
          <div class="resource-thumb">
            <img src="${res.image}" alt="${escapeHtml(res.title)}" loading="lazy" />
          </div>
          <div class="resource-body">
            <div class="resource-meta">
              <span class="badge badge-sage">${res.category}</span>
              <span class="resource-time">⏱ ${res.readTime}</span>
            </div>
            <h3 class="resource-title">${escapeHtml(res.title)}</h3>
            <p class="resource-desc">${escapeHtml(res.desc)}</p>
            <div class="resource-footer">
              <a href="resource-details.html?id=${res.id}" class="btn btn-outline btn-sm">Read Guide</a>
              <button class="btn btn-ghost btn-sm toggle-bookmark-btn" data-id="${res.id}" title="${isSaved ? 'Remove bookmark' : 'Bookmark guide'}">
                ${isSaved ? '★ Saved' : '☆ Save'}
              </button>
            </div>
          </div>
        `;
        resourcesGrid.appendChild(card);
      });

      // Hook up card bookmark toggles
      resourcesGrid.querySelectorAll('.toggle-bookmark-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const id = btn.dataset.id;
          if (state.savedResources.includes(id)) {
            state.savedResources = state.savedResources.filter(x => x !== id);
            btn.textContent = '☆ Save';
            showToast('Guide removed from saved list.', 'info');
          } else {
            state.savedResources.push(id);
            btn.textContent = '★ Saved';
            showToast('Guide bookmarked to your dashboard!', 'success');
          }
          setStorage('mb_saved_resources', state.savedResources);
        });
      });
    }

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.trim();
        renderFilteredResources();
      });
    }

    filterPills.forEach(pill => {
      pill.addEventListener('click', () => {
        filterPills.forEach(p => p.classList.remove('is-active'));
        pill.classList.add('is-active');
        currentCategory = pill.dataset.category || 'All';
        renderFilteredResources();
      });
    });

    renderFilteredResources();
  }

  /* ==========================================================================
     10. Professional Directory & Appointment Booking (`booking.html` & `professionals.html`)
     ========================================================================== */
  function initBookingAndProfessionals() {
    const bookingForm = document.getElementById('appointmentBookingForm');
    const profSelect = document.getElementById('bookingProfessionalSelect');
    const dateInput = document.getElementById('bookingDateInput');
    const phoneInput = document.getElementById('bookingPhoneInput');
    const nameInput = document.getElementById('bookingNameInput');
    const emailInput = document.getElementById('bookingEmailInput');
    const reasonInput = document.getElementById('bookingReasonInput');
    const typeSelect = document.getElementById('bookingTypeSelect');
    const slotPills = document.querySelectorAll('.slot-pill');
    const bookingModal = document.getElementById('bookingSuccessModal');

    // Populate professional select if present
    if (profSelect) {
      profSelect.innerHTML = '<option value="">-- Choose a Qualified Professional (Demo) --</option>';
      state.professionals.forEach(p => {
        profSelect.innerHTML += `<option value="${p.name}">${p.name} — ${p.role.split(',')[0]}</option>`;
      });

      // Pre-select if passed via URL param ?prof=...
      const urlParams = new URLSearchParams(window.location.search);
      const paramProf = urlParams.get('prof');
      if (paramProf) {
        const found = state.professionals.find(p => p.id === paramProf || p.name.includes(paramProf));
        if (found) profSelect.value = found.name;
      }
    }

    // Populate professional-details.html if present
    const detailProfName = document.getElementById('detailProfName');
    if (detailProfName) {
      const urlParams = new URLSearchParams(window.location.search);
      const profId = urlParams.get('id');
      const prof = state.professionals.find(p => p.id === profId) || state.professionals[0];
      if (prof) {
        detailProfName.textContent = prof.name;
        const roleEl = document.getElementById('detailProfRole');
        if (roleEl) roleEl.textContent = prof.role;
        const bioEl = document.getElementById('detailProfBio');
        if (bioEl) bioEl.textContent = prof.bio;
        const imgEl = document.getElementById('detailProfImage');
        if (imgEl) {
          imgEl.src = prof.image;
          imgEl.alt = `${prof.name} portrait`;
        }
        const specsEl = document.getElementById('detailProfSpecialties');
        if (specsEl && prof.specialties) {
          specsEl.innerHTML = prof.specialties
            .map(s => `<span class="badge badge-sage">${escapeHtml(s)}</span>`)
            .join(' ');
        }
        const bookBtn = document.getElementById('detailBookBtn');
        if (bookBtn) {
          bookBtn.href = `booking.html?prof=${encodeURIComponent(prof.name)}`;
        }
      }
    }

    // Prevent past date selection
    if (dateInput) {
      const today = new Date().toISOString().split('T')[0];
      dateInput.min = today;
      dateInput.value = today;
    }

    let selectedSlot = '10:00 AM';
    slotPills.forEach(pill => {
      pill.addEventListener('click', () => {
        slotPills.forEach(p => p.classList.remove('is-selected'));
        pill.classList.add('is-selected');
        selectedSlot = pill.dataset.slot || pill.textContent.trim();
      });
    });

    if (bookingForm) {
      bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;

        // Name validation
        const nameVal = nameInput ? nameInput.value.trim() : '';
        if (nameVal.length < 2) {
          if (nameInput) nameInput.classList.add('is-invalid');
          isValid = false;
        } else if (nameInput) {
          nameInput.classList.remove('is-invalid');
        }

        // Email validation
        const emailVal = emailInput ? emailInput.value.trim() : '';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailVal)) {
          if (emailInput) emailInput.classList.add('is-invalid');
          isValid = false;
        } else if (emailInput) {
          emailInput.classList.remove('is-invalid');
        }

        // Mobile validation: exactly 10 digits
        const phoneVal = phoneInput ? phoneInput.value.replace(/\D/g, '') : '';
        if (phoneVal.length !== 10) {
          if (phoneInput) phoneInput.classList.add('is-invalid');
          isValid = false;
        } else if (phoneInput) {
          phoneInput.classList.remove('is-invalid');
        }

        // Date validation: no past dates
        const dateVal = dateInput ? dateInput.value : '';
        const todayStr = new Date().toISOString().split('T')[0];
        if (!dateVal || dateVal < todayStr) {
          if (dateInput) dateInput.classList.add('is-invalid');
          isValid = false;
        } else if (dateInput) {
          dateInput.classList.remove('is-invalid');
        }

        if (!isValid) {
          showToast('Please correct the highlighted fields before submitting.', 'error');
          return;
        }

        // Create Demo Appointment Record
        const refCode = 'MB-' + Math.floor(10000 + Math.random() * 90000);
        const newApt = {
          id: 'apt-' + Date.now(),
          reference: refCode,
          name: nameVal,
          email: emailVal,
          phone: phoneVal,
          profName: profSelect ? profSelect.value || 'General Wellness Advisor' : 'MindBloom Practitioner',
          type: typeSelect ? typeSelect.value : 'Online Video',
          date: dateVal,
          timeSlot: selectedSlot,
          reason: reasonInput ? reasonInput.value.trim() : 'Wellness Consultation',
          status: 'Confirmed (Demo)'
        };

        state.appointments.unshift(newApt);
        setStorage('mb_appointments', state.appointments);

        // Show confirmation modal
        if (bookingModal) {
          const refEl = document.getElementById('modalBookingRef');
          const detailsEl = document.getElementById('modalBookingDetails');
          if (refEl) refEl.textContent = refCode;
          if (detailsEl) {
            detailsEl.innerHTML = `
              <strong>Professional:</strong> ${newApt.profName}<br>
              <strong>Date & Time:</strong> ${newApt.date} at ${newApt.timeSlot}<br>
              <strong>Format:</strong> ${newApt.type}<br>
              <strong>Attendee:</strong> ${escapeHtml(newApt.name)} (${newApt.email})
            `;
          }
          bookingModal.classList.add('is-active');
        } else {
          showToast(`Demo appointment booked successfully! Ref: ${refCode}`, 'success');
        }

        bookingForm.reset();
      });
    }

    // Modal Close
    const closeBookingModalBtn = document.getElementById('closeBookingSuccessModal');
    if (closeBookingModalBtn && bookingModal) {
      closeBookingModalBtn.addEventListener('click', () => {
        bookingModal.classList.remove('is-active');
      });
    }
  }

  /* ==========================================================================
     11. Auth Simulation (Login & Register)
     ========================================================================== */
  function initAuth() {
    // Password visibility toggles
    document.querySelectorAll('.password-toggle-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const input = btn.closest('.input-password-wrap').querySelector('input');
        if (input.type === 'password') {
          input.type = 'text';
          btn.textContent = '🙈';
        } else {
          input.type = 'password';
          btn.textContent = '👁';
        }
      });
    });

    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const quickUserBtn = document.getElementById('quickFillUserBtn');
    const quickAdminBtn = document.getElementById('quickFillAdminBtn');

    if (quickUserBtn) {
      quickUserBtn.addEventListener('click', () => {
        const emailInput = document.getElementById('loginEmailInput');
        const passInput = document.getElementById('loginPasswordInput');
        const roleSelect = document.getElementById('loginRoleSelect');
        if (emailInput) emailInput.value = 'alex@mindbloom.demo';
        if (passInput) passInput.value = 'MindBloom2026!';
        if (roleSelect) roleSelect.value = 'User';
        showToast('Demo User credentials filled.', 'info');
      });
    }

    if (quickAdminBtn) {
      quickAdminBtn.addEventListener('click', () => {
        const emailInput = document.getElementById('loginEmailInput');
        const passInput = document.getElementById('loginPasswordInput');
        const roleSelect = document.getElementById('loginRoleSelect');
        if (emailInput) emailInput.value = 'admin@mindbloom.demo';
        if (passInput) passInput.value = 'AdminMindBloom2026!';
        if (roleSelect) roleSelect.value = 'Admin';
        showToast('Demo Admin credentials filled.', 'info');
      });
    }

    if (loginForm) {
      loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('loginEmailInput').value.trim();
        const role = document.getElementById('loginRoleSelect') ? document.getElementById('loginRoleSelect').value : 'User';

        let displayName = role === 'Admin' ? 'Admin Coordinator' : 'Alex Rivera';
        if (email) {
          const rawName = email.split('@')[0];
          displayName = rawName
            .replace(/[._-]/g, ' ')
            .split(' ')
            .filter(Boolean)
            .map(w => w.charAt(0).toUpperCase() + w.slice(1))
            .join(' ') || email;
        }

        state.currentUser = {
          name: displayName,
          email: email || 'demo@mindbloom.test',
          role: role
        };
        setStorage('mb_current_user', state.currentUser);

        showToast(`Welcome back, ${state.currentUser.name}! Redirecting...`, 'success');
        setTimeout(() => {
          if (role === 'Admin') {
            window.location.href = 'admin-dashboard.html';
          } else {
            window.location.href = 'user-dashboard.html';
          }
        }, 800);
      });
    }

    if (registerForm) {
      registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('regNameInput').value.trim();
        const email = document.getElementById('regEmailInput').value.trim();
        const phone = document.getElementById('regPhoneInput').value.replace(/\D/g, '');
        const role = document.getElementById('regRoleSelect') ? document.getElementById('regRoleSelect').value : 'User';

        if (phone.length !== 10) {
          showToast('Please enter a valid 10-digit mobile number.', 'error');
          return;
        }

        state.currentUser = { name, email, role };
        setStorage('mb_current_user', state.currentUser);

        showToast('Registration successful! Welcome to MindBloom.', 'success');
        setTimeout(() => {
          window.location.href = role === 'Admin' ? 'admin-dashboard.html' : 'user-dashboard.html';
        }, 800);
      });
    }

    // Logout button handler across dashboards
    document.querySelectorAll('.logout-trigger').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        state.currentUser = null;
        localStorage.removeItem('mb_current_user');
        showToast('You have logged out gently.', 'info');
        setTimeout(() => {
          window.location.href = 'login.html';
        }, 500);
      });
    });
  }

  /* ==========================================================================
     12. Dashboards (User & Admin) Dynamic Binding
     ========================================================================== */
  function initDashboards() {
    // Sync current logged-in user credentials to Dashboard UI
    const storedUser = getStorage('mb_current_user', state.currentUser);
    if (storedUser) {
      state.currentUser = storedUser;
    }
    const currentName = state.currentUser ? (state.currentUser.name || state.currentUser.email) : 'Alex Rivera';

    // Update welcome heading with login credentials
    const welcomeHeadings = document.querySelectorAll('#userWelcomeHeading, .dashboard-welcome-heading');
    welcomeHeadings.forEach(h => {
      h.textContent = `Welcome, ${currentName}`;
    });

    // Update user badge in dashboard headers
    const userBadges = document.querySelectorAll('.dashboard-user-badge span:last-child, .user-display-name');
    userBadges.forEach(badge => {
      badge.textContent = currentName;
    });

    // Update default booking name input if on booking page
    const bookingNameInput = document.getElementById('bookingNameInput');
    if (bookingNameInput && state.currentUser && state.currentUser.name) {
      bookingNameInput.value = state.currentUser.name;
    }

    // 1. User Dashboard
    const userAptList = document.getElementById('userAppointmentsList');
    const userSavedList = document.getElementById('userSavedResourcesList');
    const userMoodSummary = document.getElementById('userMoodSummaryText');

    if (userAptList) {
      userAptList.innerHTML = '';
      if (!state.appointments.length) {
        userAptList.innerHTML = '<tr><td colspan="5" class="text-center" style="padding: 2rem;">No appointments booked yet.</td></tr>';
      } else {
        state.appointments.forEach(apt => {
          const row = document.createElement('tr');
          row.innerHTML = `
            <td><strong>${apt.reference}</strong></td>
            <td>${apt.profName}</td>
            <td>${apt.date} at ${apt.timeSlot}</td>
            <td><span class="badge badge-sage">${apt.status}</span></td>
            <td><button class="btn btn-ghost btn-sm cancel-user-apt-btn" data-id="${apt.id}" style="color: #D34C4C;">Cancel</button></td>
          `;
          userAptList.appendChild(row);
        });

        userAptList.querySelectorAll('.cancel-user-apt-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            const id = btn.dataset.id;
            state.appointments = state.appointments.filter(a => a.id !== id);
            setStorage('mb_appointments', state.appointments);
            showToast('Appointment cancelled.', 'info');
            initDashboards();
          });
        });
      }
    }

    if (userSavedList) {
      userSavedList.innerHTML = '';
      const saved = state.resources.filter(r => state.savedResources.includes(r.id));
      if (!saved.length) {
        userSavedList.innerHTML = '<div class="card" style="padding: 2rem; color: var(--text-muted);">You have no saved resources yet. Explore the library to bookmark articles!</div>';
      } else {
        saved.forEach(item => {
          const c = document.createElement('div');
          c.className = 'card card-sm mb-3';
          c.style.marginBottom = '1rem';
          c.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; gap: 1rem;">
              <div>
                <span class="badge badge-sage" style="font-size: 0.75rem; margin-bottom: 0.25rem;">${item.category}</span>
                <h4 style="margin: 0; font-size: 1.05rem;">${escapeHtml(item.title)}</h4>
              </div>
              <div style="display: flex; gap: 0.5rem;">
                <a href="resource-details.html?id=${item.id}" class="btn btn-outline btn-sm">Read</a>
                <button class="btn btn-ghost btn-sm remove-saved-res-btn" data-id="${item.id}" style="color: #D34C4C;">Remove</button>
              </div>
            </div>
          `;
          userSavedList.appendChild(c);
        });

        userSavedList.querySelectorAll('.remove-saved-res-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            const id = btn.dataset.id;
            state.savedResources = state.savedResources.filter(x => x !== id);
            setStorage('mb_saved_resources', state.savedResources);
            showToast('Article removed from saved collection.', 'info');
            initDashboards();
          });
        });
      }
    }

    if (userMoodSummary && state.moods.length) {
      const latest = state.moods[0];
      userMoodSummary.textContent = `Latest check-in: ${latest.mood} on ${latest.date}`;
    }

    // 2. Admin Dashboard
    const adminResTable = document.getElementById('adminResourcesTableBody');
    const adminAptTable = document.getElementById('adminAppointmentsTableBody');
    const addResourceModal = document.getElementById('adminAddResourceModal');
    const openAddResModalBtn = document.getElementById('openAddResourceModalBtn');
    const openMobileAddResTopBtn = document.getElementById('openMobileAddResourceTopBtn');
    const mobileAddResBtn = document.getElementById('mobileAddResourceBtn');
    const closeAddResModalBtn = document.getElementById('closeAddResourceModalBtn');
    const addResForm = document.getElementById('adminAddResourceForm');

    if (openAddResModalBtn && addResourceModal) {
      openAddResModalBtn.addEventListener('click', () => addResourceModal.classList.add('is-active'));
    }
    if (openMobileAddResTopBtn && addResourceModal) {
      openMobileAddResTopBtn.addEventListener('click', () => addResourceModal.classList.add('is-active'));
    }
    if (mobileAddResBtn && addResourceModal) {
      mobileAddResBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const mobileDrawer = document.getElementById('mobileDrawer');
        const mobileOverlay = document.getElementById('mobileOverlay');
        const hamburgerBtn = document.getElementById('hamburgerBtn');
        if (mobileDrawer) mobileDrawer.classList.remove('is-open');
        if (mobileOverlay) mobileOverlay.classList.remove('is-visible');
        if (hamburgerBtn) hamburgerBtn.classList.remove('is-active');
        document.body.classList.remove('nav-locked');
        addResourceModal.classList.add('is-active');
      });
    }
    if (closeAddResModalBtn && addResourceModal) {
      closeAddResModalBtn.addEventListener('click', () => addResourceModal.classList.remove('is-active'));
    }

    if (addResForm) {
      addResForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('adminResTitleInput').value.trim();
        const category = document.getElementById('adminResCategorySelect').value;
        const readTime = document.getElementById('adminResTimeInput').value.trim();
        const desc = document.getElementById('adminResDescInput').value.trim();

        const newRes = {
          id: 'res-' + Date.now(),
          title,
          category,
          readTime: readTime || '4 min read',
          desc,
          image: 'assets/images/stress-relief.svg',
          featured: false,
          content: desc
        };

        state.resources.unshift(newRes);
        setStorage('mb_resources', state.resources);
        showToast('New educational resource published successfully!', 'success');
        addResourceModal.classList.remove('is-active');
        addResForm.reset();
        initDashboards();
      });
    }

    if (adminResTable) {
      adminResTable.innerHTML = '';
      state.resources.forEach(r => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td><strong>${escapeHtml(r.title)}</strong></td>
          <td><span class="badge badge-sage">${r.category}</span></td>
          <td>${r.readTime}</td>
          <td>
            <button class="btn btn-ghost btn-sm delete-admin-res-btn" data-id="${r.id}" style="color: #D34C4C;">Delete</button>
          </td>
        `;
        adminResTable.appendChild(row);
      });

      adminResTable.querySelectorAll('.delete-admin-res-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          if (confirm('Are you sure you want to delete this educational guide?')) {
            const id = btn.dataset.id;
            state.resources = state.resources.filter(x => x.id !== id);
            setStorage('mb_resources', state.resources);
            showToast('Resource deleted.', 'info');
            initDashboards();
          }
        });
      });
    }

    if (adminAptTable) {
      adminAptTable.innerHTML = '';
      if (!state.appointments.length) {
        adminAptTable.innerHTML = '<tr><td colspan="6" class="text-center" style="padding: 2rem;">No demo appointments found.</td></tr>';
      } else {
        state.appointments.forEach(apt => {
          const row = document.createElement('tr');
          row.innerHTML = `
            <td><strong>${apt.reference}</strong></td>
            <td>${escapeHtml(apt.name)}</td>
            <td>${apt.profName}</td>
            <td>${apt.date} (${apt.timeSlot})</td>
            <td>
              <select class="form-control admin-apt-status-select" data-id="${apt.id}" style="padding: 0.25rem 0.5rem; font-size: 0.85rem;">
                <option value="Confirmed (Demo)" ${apt.status === 'Confirmed (Demo)' ? 'selected' : ''}>Confirmed</option>
                <option value="Completed" ${apt.status === 'Completed' ? 'selected' : ''}>Completed</option>
                <option value="Cancelled" ${apt.status === 'Cancelled' ? 'selected' : ''}>Cancelled</option>
              </select>
            </td>
            <td><button class="btn btn-ghost btn-sm remove-admin-apt-btn" data-id="${apt.id}" style="color: #D34C4C;">&times;</button></td>
          `;
          adminAptTable.appendChild(row);
        });

        adminAptTable.querySelectorAll('.admin-apt-status-select').forEach(sel => {
          sel.addEventListener('change', () => {
            const id = sel.dataset.id;
            const apt = state.appointments.find(a => a.id === id);
            if (apt) {
              apt.status = sel.value;
              setStorage('mb_appointments', state.appointments);
              showToast(`Appointment status updated to ${sel.value}`, 'success');
            }
          });
        });

        adminAptTable.querySelectorAll('.remove-admin-apt-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            if (confirm('Remove this appointment record?')) {
              const id = btn.dataset.id;
              state.appointments = state.appointments.filter(a => a.id !== id);
              setStorage('mb_appointments', state.appointments);
              showToast('Appointment removed.', 'info');
              initDashboards();
            }
          });
        });
      }
    }
  }

  /* ==========================================================================
     13. Contact Page Form Validation (`contact.html`)
     ========================================================================== */
  function initContact() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contactName').value.trim();
      const email = document.getElementById('contactEmail').value.trim();
      const message = document.getElementById('contactMessage').value.trim();

      if (!name || !email || !message) {
        showToast('Please fill in all required fields.', 'error');
        return;
      }

      showToast('Thank you for reaching out. Your message has been received with care.', 'success');
      contactForm.reset();
    });
  }

  /* ==========================================================================
     14. Interactive Widgets (Accordions, Affirmations, Grounding)
     ========================================================================== */
  function initInteractiveWidgets() {
    // Universal Accordion Handler
    document.addEventListener('click', (e) => {
      const trigger = e.target.closest('.accordion-trigger');
      if (!trigger) return;
      const item = trigger.closest('.accordion-item');
      if (!item) return;
      const group = item.closest('.accordion-group');
      if (group && !group.hasAttribute('data-multi')) {
        group.querySelectorAll('.accordion-item').forEach(other => {
          if (other !== item) other.classList.remove('is-open');
        });
      }
      item.classList.toggle('is-open');
    });

    // Affirmation Generator
    const affirmations = [
      "I give myself permission to rest deeply without having to earn it.",
      "My worth is not measured by my productivity; inner peace is my natural state.",
      "Small, gentle breaths create spaciousness in crowded moments.",
      "I can pause and let the storm pass around me without getting pulled into it.",
      "Today, I honor my natural rhythm and listen to my body's quiet wisdom.",
      "I release the urge to fix everything immediately. Some things need gentle time.",
      "It is safe for me to slow down, soften my shoulders, and exhale completely."
    ];

    document.addEventListener('click', (e) => {
      const btn = e.target.closest('#drawAffirmationBtn');
      if (btn) {
        const display = document.getElementById('affirmationTextDisplay');
        if (display) {
          const randomAff = affirmations[Math.floor(Math.random() * affirmations.length)];
          display.style.opacity = '0';
          setTimeout(() => {
            display.textContent = `“${randomAff}”`;
            display.style.opacity = '1';
          }, 150);
        }
      }
    });

    // 5-4-3-2-1 Sensory Grounding Tool
    const groundingPrompts = {
      '5': { title: '5 Things You Can See', cue: 'Look around quietly. Notice small details: a pattern of sunlight, a specific texture on the floor, or the curve of a plant leaf.' },
      '4': { title: '4 Things You Can Physically Feel', cue: 'Bring awareness to physical contact: the pressure of your feet on the ground, clothes resting on your shoulders, or the temperature of the air on your hands.' },
      '3': { title: '3 Things You Can Hear', cue: 'Listen beyond your immediate space: faint distant traffic, the gentle hum of a fan, birds chirping outside, or the sound of your own quiet breathing.' },
      '2': { title: '2 Things You Can Smell', cue: 'Notice any scent in your environment: fresh coffee, fresh outdoor air, soap, or simply the neutral scent of clean paper.' },
      '1': { title: '1 Thing You Can Taste', cue: 'Notice the lingering taste of mint or water, or swallow gently and connect with physical presence right here in this room.' }
    };

    document.addEventListener('click', (e) => {
      const stepBtn = e.target.closest('.grounding-step-card');
      if (stepBtn) {
        const stepNum = stepBtn.dataset.step;
        const container = stepBtn.closest('.interactive-widget-box');
        if (container && groundingPrompts[stepNum]) {
          container.querySelectorAll('.grounding-step-card').forEach(c => c.classList.remove('is-active'));
          stepBtn.classList.add('is-active');
          const titleEl = container.querySelector('#groundingStepTitle');
          const cueEl = container.querySelector('#groundingStepCue');
          if (titleEl) titleEl.textContent = groundingPrompts[stepNum].title;
          if (cueEl) cueEl.textContent = groundingPrompts[stepNum].cue;
        }
      }
    });
  }

  /* ==========================================================================
     15. Utility Helpers
     ========================================================================== */
  function escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  /* ==========================================================================
     16. Global Initialization on DOMContentLoaded
     ========================================================================== */
  document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initBreathingTimer();
    initAmbientAudio();
    initMoodTracker();
    initJournal();
    initWellnessGoals();
    initResources();
    initBookingAndProfessionals();
    initAuth();
    initDashboards();
    initContact();
    initInteractiveWidgets();
  });
})();
