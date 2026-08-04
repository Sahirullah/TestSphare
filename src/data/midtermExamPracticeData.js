import { getQuestionSet } from './examPracticeData';

// Helper function to generate 100 questions for a course
const generateCourseQuestions = (courseName, courseCode) => {
  const questions = [];
  const baseQuestions = [
    { q: `What is the fundamental concept of ${courseName}?`, opts: ['Concept A', 'Concept B', 'Concept C', 'Concept D'], correct: 1 },
    { q: `Which principle applies to ${courseName}?`, opts: ['Principle 1', 'Principle 2', 'Principle 3', 'Principle 4'], correct: 2 },
    { q: `Define the key term in ${courseName}:`, opts: ['Definition A', 'Definition B', 'Definition C', 'Definition D'], correct: 1 },
    { q: `How is ${courseName} applied in practice?`, opts: ['Method A', 'Method B', 'Method C', 'Method D'], correct: 2 },
    { q: `What is important in ${courseName}?`, opts: ['Aspect 1', 'Aspect 2', 'Aspect 3', 'Aspect 4'], correct: 0 },
    { q: `Which of the following is related to ${courseName}?`, opts: ['Related 1', 'Related 2', 'Related 3', 'Related 4'], correct: 3 },
    { q: `How does ${courseName} differ from similar concepts?`, opts: ['Difference 1', 'Difference 2', 'Difference 3', 'Difference 4'], correct: 1 },
    { q: `What is the purpose of ${courseName}?`, opts: ['Purpose 1', 'Purpose 2', 'Purpose 3', 'Purpose 4'], correct: 2 },
    { q: `In the context of ${courseName}, what does this mean?`, opts: ['Meaning A', 'Meaning B', 'Meaning C', 'Meaning D'], correct: 0 },
    { q: `Which approach is best for ${courseName}?`, opts: ['Approach 1', 'Approach 2', 'Approach 3', 'Approach 4'], correct: 2 },
  ];

  for (let i = 0; i < 100; i++) {
    const base = baseQuestions[i % baseQuestions.length];
    questions.push({
      question: `${base.q} (${courseCode} Q${i + 1})`,
      options: base.opts,
      correct: base.correct,
    });
  }
  return questions;
};

// Midterm Exam Practice Data
export const midtermExamPracticeData = [
  // Computer Science Courses
  {
    id: 1,
    code: 'CS101',
    title: 'Introduction to Computing',
    category: 'cs',
    image: '💻',
    questions: generateCourseQuestions('Introduction to Computing', 'CS101'),
  },
  {
    id: 2,
    code: 'CS201',
    title: 'Introduction to Programming',
    category: 'cs',
    image: '💻',
    questions: generateCourseQuestions('Introduction to Programming', 'CS201'),
  },

  //cs202
  {
    id: 2,
    code: 'CS202',
    title: 'Introduction to Frontend Development',
    category: 'cs',
    image: '💻',
    questions: [ 
      { "question": "HTTP stands for __________.", "options": ["HTML Text Transfer Protocol", "Hyper Transfer Text Protocol", "Hyper Text Transfer Protocol"], "correct": 2 },
      { "question": "HTML stands for __________.", "options": ["Hyper Text Model Language", "Hyper Text Modern Language", "Hyper Text Markup Language"], "correct": 2 },
      { "question": "Who is responsible for making web standards?", "options": ["Microsoft", "Google", "World Wide Web Consortium (W3C)"], "correct": 2 },
      { "question": "Choose the correct HTML element for the largest heading.", "options": ["<h1>", "<h4>", "<h6>"], "correct": 0 },
      { "question": "Which is the correct HTML element for inserting a line break?", "options": ["<lb>", "<break>", "<br>"], "correct": 2 },
      { "question": "Which is the correct method to add a background color?", "options": ["<background>red</background>", "<body style=\"background-color:red;\">", "<body style=\"background_colour:red;\">", "<body bg_color:red;>"], "correct": 1 },
      { "question": "Choose the correct HTML element to define important text.", "options": ["<important>", "<strong>", "<lighted>"], "correct": 1 },
      { "question": "Choose the correct HTML element to define emphasized text.", "options": ["<i>", "<emphasized>", "<em>"], "correct": 2 },
      { "question": "Which character indicates the HTML end tag?", "options": ["<", ">", "End", "/"], "correct": 3 },
      { "question": "Choose the correct HTML element for creating a hyperlink.", "options": ["<a>http://www.google.com</a>", "<a href=\"http://www.google.com\">Google</a>", "<a style=\"http://www.google.com\">Google</a>"], "correct": 1 },
      { "question": "How can you set a link to open in a new tab/browser window?", "options": ["<a tab=\"new\">", "<a href=\"http://www.google.com\" target=\"_blank\">Google</a>", "<a style=\"http://www.google.com\" new>Google</a>"], "correct": 1 },
      { "question": "Which of the following are valid table elements?", "options": ["<table><row><col>", "<table><tr><td>", "<table><body><footer>"], "correct": 1 },
      { "question": "Which element is used for a numbered list?", "options": ["<ol>", "<li>", "<ul>"], "correct": 0 },
      { "question": "Which element is used for a bullet (unordered) list?", "options": ["<ol>", "<li>", "<ul>"], "correct": 2 },
      { "question": "Which is the correct HTML for a text input field?", "options": ["<input type=\"text\">", "<input type=\"textField\">", "<textfield>"], "correct": 0 },
      { "question": "Which element is used for making a drop-down list?", "options": ["<select>", "<list>", "<input type=\"drop-down\">"], "correct": 0 },
      { "question": "Which element is used for creating a text area?", "options": ["<input type=\"textarea\">", "<textarea>", "<input type=\"textbox\">"], "correct": 1 },
      { "question": "Which element is used for inserting an image in HTML?", "options": ["<image>", "<imag>", "<img>"], "correct": 2 },
      { "question": "What is the correct HTML for inserting an image?", "options": ["<img src=\"my-image.jpeg\" alt=\"Myimage\">", "<img type=\"my-image.jpeg\" alt=\"Myimage\">", "<img path=\"my-image.jpeg\" alt=\"Myimage\">"], "correct": 0 },
      { "question": "Which element defines the title of the page/document?", "options": ["<title>", "<name>", "<blockquote>"], "correct": 0 },
      { "question": "Which attribute specifies alternate text for an image if it cannot be displayed?", "options": ["title", "alt", "src"], "correct": 1 },
      { "question": "Which DOCTYPE is correct for HTML5?", "options": ["<!DOCTYPE HTML PUBLIC>", "<!DOCTYPE HTML5>", "<!DOCTYPE html>"], "correct": 2 },
      { "question": "Which element specifies the footer for a document or section?", "options": ["<body>", "<end>", "<footer>"], "correct": 2 },
      { "question": "Which element is used for inserting a video in HTML?", "options": ["<media>", "<movie>", "<video>"], "correct": 2 },
      { "question": "What is the correct HTML element for inserting audio?", "options": ["<mp3>", "<audio>", "<sound>"], "correct": 1 },
      { "question": "How many audio formats can HTML support?", "options": ["2", "3 (ogg, mp3, wav)", "4"], "correct": 1 },
      { "question": "onblur and onfocus are __________.", "options": ["Event attributes", "HTML elements", "Style attributes"], "correct": 0 },
      { "question": "To add spaces to your text, which character entity should you use?", "options": ["&space;", "&copy;", "&nbsp;"], "correct": 2 },
      { "question": "Which element is used to highlight text?", "options": ["<highlight>", "<colored>", "<mark>"], "correct": 2 }
]},
  {
    id: 3,
    code: 'CS301',
    title: 'Data Structures',
    category: 'cs',
    image: '💻',
    questions: generateCourseQuestions('Data Structures', 'CS301'),
  },

  // Mathematics Courses
  {
    id: 4,
    code: 'MTH101',
    title: 'Calculus and Analytical Geometry',
    category: 'mth',
    image: '📐',
    questions: generateCourseQuestions('Calculus and Analytical Geometry', 'MTH101'),
  },
  {
    id: 5,
    code: 'MTH201',
    title: 'Discrete Mathematics',
    category: 'mth',
    image: '📐',
    questions: generateCourseQuestions('Discrete Mathematics', 'MTH201'),
  },

  // English Courses
  {
    id: 6,
    code: 'ENG101',
    title: 'English Composition',
    category: 'eng',
    image: '📝',
    questions: generateCourseQuestions('English Composition', 'ENG101'),
  },

  // Physics Courses
  {
    id: 7,
    code: 'PHY101',
    title: 'Physics I',
    category: 'phy',
    image: '⚛️',
    questions: generateCourseQuestions('Physics I', 'PHY101'),
  },

  // Chemistry Courses
  {
    id: 8,
    code: 'CHE101',
    title: 'General Chemistry',
    category: 'che',
    image: '⚗️',
    questions: generateCourseQuestions('General Chemistry', 'CHE101'),
  },

  // Business Courses
  {
    id: 9,
    code: 'BUS101',
    title: 'Introduction to Business',
    category: 'mgt',
    image: '💼',
    questions: generateCourseQuestions('Introduction to Business', 'BUS101'),
  },

  // Statistics Courses
  {
    id: 10,
    code: 'STA301',
    title: 'Statistics and Probability',
    category: 'sta',
    image: '📊',
    questions: generateCourseQuestions('Statistics and Probability', 'STA301'),
  },
];

// Midterm Categories
export const midtermExamPracticeCategories = [
  { id: 'all', name: 'All Courses' },
  { id: 'cs', name: 'CS - Computer Science' },
  { id: 'mth', name: 'MTH - Mathematics' },
  { id: 'eng', name: 'ENG - English' },
  { id: 'phy', name: 'PHY - Physics' },
  { id: 'che', name: 'CHE - Chemistry' },
  { id: 'mgt', name: 'MGT - Management' },
  { id: 'sta', name: 'STA - Statistics' },
];
