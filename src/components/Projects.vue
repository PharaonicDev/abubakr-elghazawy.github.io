<script setup>
const projects = [
  {
    title: 'E-commerce Website',
    category: 'Web Development',
    description: 'A fully responsive e-commerce platform with integrated payment processing and inventory management.',
    technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Stripe'],
    demoUrl: 'https://your-ecommerce-demo.com',
    codeUrl: 'https://github.com/YourGitHub/ecommerce-project'
  },
  {
    title: 'Learning Management System',
    category: 'Educational Technology',
    description: 'Custom LMS platform developed for Bingo Language Academy with interactive course content.',
    technologies: ['React', 'Express', 'MySQL', 'WebRTC'],
    demoUrl: 'https://bingo-lms-demo.com',
    codeUrl: 'https://github.com/YourGitHub/bingo-lms'
  },
  {
    title: 'Sales Analytics Dashboard',
    category: 'Data Visualization',
    description: 'Real-time sales analytics dashboard with advanced filtering and reporting capabilities.',
    technologies: ['Vue.js', 'D3.js', 'Firebase', 'TailwindCSS'],
    demoUrl: 'https://sales-analytics-demo.com',
    codeUrl: 'https://github.com/YourGitHub/sales-analytics'
  }
]
</script>

<template>
  <section id="projects" class="section">
    <div class="container">
      <h2 class="section-heading">Projects</h2>
      <div class="projects-grid">
        <div v-for="project in projects" :key="project.title" class="project-card">
          <h3 class="project-title">{{ project.title }}</h3>
          <div class="project-category">{{ project.category }}</div>
          <p class="project-description">{{ project.description }}</p>
          <div class="project-tech">
            <span v-for="tech in project.technologies" :key="tech" class="tech-tag">
              {{ tech }}
            </span>
          </div>
          <div class="project-links">
            <a v-if="project.demoUrl" 
               :href="project.demoUrl" 
               target="_blank" 
               rel="noopener noreferrer"
               class="project-link demo">
              <font-awesome-icon icon="external-link-alt" />
              <span>Live Demo</span>
            </a>
            <a v-if="project.codeUrl" 
               :href="project.codeUrl" 
               target="_blank" 
               rel="noopener noreferrer"
               class="project-link code">
              <font-awesome-icon :icon="['fab', 'github']" />
              <span>View Code</span>
            </a>
          </div>
        </div>
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

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.project-card {
  background: var(--white);
  border-radius: 8px;
  padding: 1.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.project-title {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: var(--heading-color);
}

.project-category {
  font-size: 0.9em;
  color: var(--text-color-light);
  margin-bottom: 1em;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.project-description {
  color: var(--text-color);
  margin-bottom: 1rem;
  line-height: 1.6;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.tech-tag {
  background: var(--background-color);
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.85rem;
  color: var(--text-color);
}

.project-links {
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
}

.project-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1px ;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  width: 50%;
  text-decoration: none;
}

.project-link.demo {
  background: var(--projects-color);
  color: var(--white);
  border: 2px solid var(--projects-color);
  box-shadow: 0 4px 15px rgba(249, 191, 63, 0.3);
}

.project-link.code {
  background: transparent;
  color: var(--text-color);
  border: 2px solid var(--border-color);
  backdrop-filter: blur(5px);
}

.project-link.demo:hover {
  background: transparent;
  color: var(--projects-color);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(249, 191, 63, 0.4);
}

.project-link.code:hover {
  background: var(--projects-color);
  border-color: var(--projects-color);
  color: var(--white);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(249, 191, 63, 0.4);
}

.project-link svg {
  font-size: 1.1rem;
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
  }

  .project-card {
    padding: 1.25rem;
  }

  .project-link {
    padding: 0.7rem 1.2rem;
    font-size: 0.85rem;
  }
}

@media (max-width: 576px) {
  .projects-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .project-card {
    padding: 1rem;
  }

  .project-title {
    font-size: 1.1rem;
  }

  .tech-tag {
    font-size: 0.8rem;
  }

  .project-links {
    flex-direction: column;
    gap: 0.8rem;
  }

  .project-link {
    width: 100%;
    padding: 0.8rem 1rem;
  }
}
</style>