<script setup>
const experiences = [
  {
    title: 'Sales Manager',
    company: 'LED Misr',
    period: 'September 2024 - March 2025',
    achievements: [
      'Doubled the company\'s revenue',
      'Improved sales processes and increased transactions',
      'Established new supplier connections, acquiring the best quality at the lowest prices'
    ]
  },
  {
    title: 'Sales Representative',
    company: 'B.Tech',
    period: 'March 2024 - August 2024',
    achievements: [
      'Introduced customers to products, payment, and purchase methods',
      'Promoted products and finalized sales transactions',
      'Worked within the customer service team to ensure customer satisfaction'
    ]
  },
  {
    title: 'Academic Supervisor',
    company: 'Bingo Language Academy',
    period: 'January 2024 - March 2024',
    achievements: [
      'Designed and implemented interactive lesson plans for over 350 students',
      'Integrated technology into the classroom using educational software',
      'Led training workshops for parents and teachers on effective communication techniques'
    ]
  },
  {
    title: 'Sales Representative & Store Manager',
    company: 'Safi Production Projects (Armed Forces)',
    period: 'September 2023 - January 2024',
    achievements: [
      'Managed the sales of food products and store operations',
      'Engaged directly with customers and professionally displayed products',
      'Conducted inventory checks and ensured revenue was properly accounted for'
    ]
  },
  {
    title: 'Customer Service Representative',
    company: 'Xceed (WE Telecommunications Egypt)',
    period: 'Previous Experience',
    achievements: [
      'Renewed internet packages and sold landline services',
      'Resolved service speed issues and upgraded connections for customers'
    ]
  },
  {
    title: 'Marketing & Advertising Specialist',
    company: 'Al-Fouad Radiology & Analysis Center',
    period: 'Previous Experience',
    achievements: [
      'Promoted services and branches of the center',
      'Increased center profits to EGP 3 million',
      'Conducted marketing campaigns and physician outreach programs'
    ]
  },
  {
    title: 'Web Designer & Developer',
    company: 'Saudi Company',
    period: '2018 - 2021',
    achievements: [
      'Developed professional websites for the company',
      'Enhanced user experience and website performance'
    ]
  }
]

const education = {
  degree: 'Bachelor of Science in Computer Science and Physics',
  institution: 'Faculty of Science, Benha University',
  graduationDate: 'July 2021'
}

const certifications = [
  'Courses in Microsoft Office (Excel, PowerPoint)',
  'Courses in Web Design and Programming'
]

const militaryService = {
  status: 'Completed with honors',
  period: 'July 2021 - January 2022'
}
</script>

<template>
  <section id="experience" class="section">
    <div class="container">
      <h2 class="section-heading">Experience</h2>
      <div class="timeline-centered">
        <article v-for="exp in experiences" :key="exp.title + exp.company" class="timeline-entry animate-box">
          <div class="timeline-entry-inner">
            <div class="timeline-icon">
              <font-awesome-icon icon="briefcase" />
            </div>
            <div class="timeline-label">
              <h3>{{ exp.title }} <span>{{ exp.company }}</span></h3>
              <p class="period">{{ exp.period }}</p>
              <ul class="achievements">
                <li v-for="achievement in exp.achievements" :key="achievement">
                  {{ achievement }}
                </li>
              </ul>
            </div>
          </div>
        </article>
      </div>
      
      <!-- Education Section -->
      <h2 class="section-heading">Education</h2>
      <div class="timeline-centered">
        <article class="timeline-entry animate-box">
          <div class="timeline-entry-inner">
            <div class="timeline-icon">
              <font-awesome-icon icon="graduation-cap" />
            </div>
            <div class="timeline-label">
              <h3>{{ education.degree }}</h3>
              <p class="institution">{{ education.institution }}</p>
              <p class="period">{{ education.graduationDate }}</p>
            </div>
          </div>
        </article>

        <!-- Military Service -->
        <article class="timeline-entry animate-box">
          <div class="timeline-entry-inner">
            <div class="timeline-icon">
              <font-awesome-icon icon="medal" />
            </div>
            <div class="timeline-label">
              <h3>Military Service</h3>
              <p class="period">{{ militaryService.period }}</p>
              <p>{{ militaryService.status }}</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.timeline-centered {
  position: relative;
  margin-bottom: 30px;
  padding-left: 20px;
}

.timeline-centered:before {
  content: '';
  position: absolute;
  display: block;
  width: 2px;
  height: 100%;
  left: 30px;
  top: 0;
  background: var(--border-color);
}

.timeline-entry {
  position: relative;
  margin-top: 2em;
}

.timeline-entry:first-child {
  margin-top: 0;
}

.timeline-entry-inner {
  position: relative;
  margin-left: -20px;
}

.timeline-icon {
  background: var(--experience-color);
  width: 40px;
  height: 40px;
 
  text-align: center;
  line-height: 40px;
  font-size: 18px;
  color: var(--white);
  position: absolute;
  left: -20px;
  top: 0;
  z-index: 2;
}

.timeline-label {
  margin-left: 40px;
  background: var(--white);
  padding: 1.5em;
  margin-bottom: 20px;
  border-radius: 4px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  position: relative;
}

.timeline-label:before {
  content: '';
  position: absolute;
  display: block;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 9px 9px 9px 0;
  border-color: transparent var(--white) transparent transparent;
  left: -9px;
  top: 10px;
}

.timeline-label h3 {
  font-size: 1.2em;
  margin-top: 0;
  margin-bottom: 0.5em;
  color: var(--heading-color);
}

.timeline-label span {
  color: var(--experience-color);
  font-weight: 500;
}

.period {
  font-size: 0.9em;
  color: var(--text-color-light);
  margin-bottom: 1em;
}

.achievements {
  list-style: none;
  padding: 0;
  margin: 0;
}

.achievements li {
  position: relative;
  padding-left: 20px;
  margin-bottom: 0.5em;
  color: var(--text-color);
}

.achievements li:before {
  content: '•';
  color: var(--experience-color);
  position: absolute;
  left: 0;
}

.institution {
  color: var(--text-color);
  font-weight: 500;
  margin-bottom: 0.5em;
}

@media (max-width: 768px) {
  .timeline-centered:before {
    left: 20px;
  }

  .timeline-icon {
    left: 20px;
    margin-left: 0;
  }

  .timeline-label {
    margin-left: 50px;
    width: calc(100% - 70px);
  }
}

@media (max-width: 576px) {
  .container {
    padding: 0 1rem;
  }

  .timeline-centered:before {
    left: 15px;
  }

  .timeline-entry-inner {
    margin-left: -15px;
  }

  .timeline-icon {
    width: 30px;
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    left: 0;
  }

  .timeline-label {
    margin-left: 35px;
    padding: 1rem;
    font-size: 0.9rem;
  }

  .timeline-label h3 {
    font-size: 1rem;
    flex-direction: column;
    gap: 0.5rem;
  }

  .timeline-label h3 span {
    display: block;
  }

  .achievements li {
    padding-left: 15px;
    margin-bottom: 0.3em;
  }
}
</style>