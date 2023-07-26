class Student {
    constructor(name, className, note) {
      this.name = name;
      this.className = className;
      this.note = note;
    }
  }
  
  function createStudentRow(student) {
    const table = document.getElementById("studentsTable");
    const row = table.insertRow();
    row.insertCell().textContent = student.name;
    row.insertCell().textContent = student.className;
    row.insertCell().textContent = student.note;
  }
  
  function populateStudentList(studentsData) {
    const table = document.getElementById("studentsTable");
    table.innerHTML = `<tr>
                          <th>Name</th>
                          <th>Class</th>
                          <th>Note</th>
                        </tr>`;
  
    studentsData.forEach(student => {
      createStudentRow(student);
    });
  }
  
  const bulletinContent = document.getElementById("classNotesList");
  
  function generateClassNotesList(classNotesData) {
    bulletinContent.innerHTML = "";
  
    classNotesData.forEach(note => {
      const listItem = document.createElement("li");
      listItem.textContent = note.class + ": " + note.note;
      bulletinContent.appendChild(listItem);
    });
  }
  
  function createClassPerformanceChart(classPerformanceData) {
    const ctx = document.getElementById('classChart').getContext('2d');

    const chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: classPerformanceData.labels,
        datasets: [
          {
            label: 'Average Scores',
            backgroundColor: '#007bff',
            data: classPerformanceData.averageScores,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,

          },
        },
      },
    });
  }
  // Function to create the class level notes list and move the student list card
function generateClassNotesList(classNotesData) {
  bulletinContent.innerHTML = "";

  classNotesData.forEach(note => {
    const listItem = document.createElement("li");
    listItem.textContent = note.class + ": " + note.note;
    bulletinContent.appendChild(listItem);
  });

  // Move the student list card to the bottom of the new cards
  const studentsCard = document.querySelector(".students-card");
  document.querySelector(".dashboard-grid").appendChild(studentsCard);
}

// Function to update the class performance chart every 2 seconds
function updateClassPerformanceChart(classPerformanceData) {
  const ctx = document.getElementById('classChart').getContext('2d');

  const chart = new Chart(ctx, {
    type: 'line', // Change the chart type to line for class performance
    data: {
      labels: classPerformanceData.labels,
      datasets: [
        {
          label: 'Average Scores',
          backgroundColor: '#007bff',
          borderColor: '#007bff', // Add a border color for the line
          fill: false, // Remove the fill for line chart
          data: classPerformanceData.averageScores,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}

// Call the chart update function every 2 seconds
setInterval(() => {
  updateClassPerformanceChart(classPerformanceData);
}, 2000);

  // Sample data for students, class notes, and class performance chart
  const studentsData = [
    { name: "Hisham Omar", className: "Math", note: 85 },
    { name: "Ibrahim FeyroozeBaad", className: "Math", note: 85 },
    { name: "Hisham Omar", className: "Math", note: 85 },
    { name: "Ibrahim FeyroozeBaad", className: "Math", note: 85 },
    { name: "Mohamed Sidibe", className: "English", note: 75 },
    { name: "Ibrahim FeyroozeBaad", className: "Arabe", note: 85 },
    { name: "Mouhsine Alhassane", className: "English", note: 75 },
    { name: "Doullah Talladje", className: "Info", note: 77 },
    
    // Add more student data here
  ];
  
  const classNotesData = [
    { class: "Math", note: "Today we learned about algebra." },
    { class: "English", note: "We discussed the plot of the novel." },
    { class: "Math", note: "Today we learned about algebra." },
    { class: "English", note: "We discussed the plot of the novel." },
  ];
  
  const classPerformanceData = {
    labels: ['Math', 'Arabe', 'Science', 'History', 'Geography'],
    averageScores: [35, 67, 76, 67, 95], // Sample data for average class scores
  };
  
  populateStudentList(studentsData);
  generateClassNotesList(classNotesData);
  createClassPerformanceChart(classPerformanceData);