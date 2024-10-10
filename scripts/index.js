    //for footer
    const currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;
    const lastModified = new Date(document.lastModified);
    const lastModifiedDate = `${lastModified.getFullYear()}-${(lastModified.getMonth() + 1).toString().padStart(2, '0')}-${lastModified.getDate().toString().padStart(2, '0')} ${lastModified.getHours().toString().padStart(2, '0')}:${lastModified.getMinutes().toString().padStart(2, '0')}:${lastModified.getSeconds().toString().padStart(2, '0')}`;
    document.getElementById('lastModified').textContent += lastModifiedDate;

    //for small view 
    const mainnav = document.querySelector('.navigation');
    const hambutton = document.querySelector('#menu');

    hambutton.addEventListener('click', ()=> {
        mainnav.classList.toggle("show");
        hambutton.classList.toggle('show');
    });

    //for courses
    const courses = [
        {
            subject: 'CSE',
            number: 110,
            title: 'Introduction to Programming',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
            technology: [
                'Python'
            ],
            completed: true
        },
        {
            subject: 'WDD',
            number: 130,
            title: 'Web Fundamentals',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
            technology: [
                'HTML',
                'CSS'
            ],
            completed: true
        },
        {
            subject: 'CSE',
            number: 111,
            title: 'Programming with Functions',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
            technology: [
                'Python'
            ],
            completed: true
        },
        {
            subject: 'CSE',
            number: 210,
            title: 'Programming with Classes',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
            technology: [
                'C#'
            ],
            completed: true
        },
        {
            subject: 'WDD',
            number: 131,
            title: 'Dynamic Web Fundamentals',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
            technology: [
                'HTML',
                'CSS',
                'JavaScript'
            ],
            completed: true
        },
        {
            subject: 'WDD',
            number: 231,
            title: 'Frontend Web Development I',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
            technology: [
                'HTML',
                'CSS',
                'JavaScript'
            ],
            completed: false
        }
    ]

    document.addEventListener('DOMContentLoaded', () => {
        // Select the modal dialog element
        const courseDetailsDialog = document.getElementById("course-details-dialog");
    
        // Function to dynamically create course cards based on the courses array
        function displayCourses(coursesToDisplay) {
            const container = document.getElementById('course-container');
            container.innerHTML = ''; // Clear previous content
    
            coursesToDisplay.forEach(course => {
                const card = document.createElement('div');
                card.className = `card ${course.completed ? 'completed' : 'not-completed'}`;
                card.innerHTML = `
                    <p>${course.subject} ${course.number}</p>
                `;
                // Add click event listener to display course details
                card.addEventListener("click", () => displayCourseDetails(course));
                container.appendChild(card);
            });
        }
    
        // Function to display the selected course details in the modal dialog
        function displayCourseDetails(course) {
            // Check if the dialog element exists
            if (!courseDetailsDialog) {
                console.error("Course details dialog element not found.");
                return;
            }
    
            // Populate the dialog content with course details
            courseDetailsDialog.innerHTML = `
                <button id="closeModal">❌</button>
                <h2>${course.subject} ${course.number}</h2>
                <h3>${course.title}</h3>
                <p><strong>Credits:</strong> ${course.credits}</p>
                <p><strong>Certificate:</strong> ${course.certificate}</p>
                <p><strong>Description:</strong> ${course.description}</p>
                <p><strong>Technologies:</strong> ${course.technology.join(', ')}</p>
            `;
    
            // Display the dialog
            courseDetailsDialog.showModal();
    
            // Add event listener for closing the modal
            const closeModalButton = document.getElementById("closeModal");
            closeModalButton.addEventListener("click", () => {
                courseDetailsDialog.close();
            });
        }
    
        // Function to filter courses based on the selected subject
        function filterCourses(subject) {
            let filteredCourses;
            if (subject === 'ALL') {
                filteredCourses = courses;
            } else {
                filteredCourses = courses.filter(course => course.subject === subject);
            }
            displayCourses(filteredCourses);
            updateTotalCredits(filteredCourses);
        }
    
        // Function to update the total credits displayed
        function updateTotalCredits(filteredCourses) {
            const totalCredits = filteredCourses.reduce((total, course) => total + course.credits, 0);
            document.getElementById('total-credits').textContent = totalCredits;
        }
    
        // Initial display of all courses
        filterCourses('ALL');
    });
    