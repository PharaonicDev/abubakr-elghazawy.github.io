<script setup>
const skillCategories = [
  {
    name: 'Sales & Marketing',
    skills: [
      { name: 'Sales Management', level: 95 },
      { name: 'Digital Marketing', level: 90 },
      { name: 'Facebook Ads', level: 85 },
      { name: 'Campaign Management', level: 85 }
    ]
  },
  {
    name: 'Technical Skills',
    skills: [
      { name: 'Web Design', level: 85 },
      { name: 'Web Development', level: 80 },
      { name: 'Microsoft Office Suite', level: 90 },
      { name: 'Google Classroom', level: 85 }
    ]
  },
  {
    name: 'Languages',
    skills: [
      { name: 'Arabic (Native)', level: 100 },
      { name: 'English (C2)', level: 95 },
      { name: 'German (A2)', level: 40 }
    ]
  },
  {
    name: 'Other Skills',
    skills: [
      { name: 'Customer Service', level: 90 },
      { name: 'E-learning Tools', level: 85 },
      { name: 'Team Leadership', level: 85 },
      { name: 'Inventory Management', level: 80 }
    ]
  }
]

const interests = [
  'Reading literature and English novels',
  'Traveling and photography',
  'Swimming and running'
]
</script>

<template>
  <section id="skills" class="section">
    <div class="container">
      <h2 class="section-heading">Skills</h2>
      <div class="skills-grid">
        <div v-for="category in skillCategories" :key="category.name" class="skill-category">
          <h3 class="category-title">{{ category.name }}</h3>
          <div class="skills-list">
            <div v-for="skill in category.skills" :key="skill.name" class="skill-item">
              <div class="skill-info">
                <span class="skill-name">{{ skill.name }}</span>
                <span class="skill-percentage">{{ skill.level }}%</span>
              </div>
              <div class="progress-bar">
                <div class="progress" :style="{ width: skill.level + '%' }"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="interests-section">
        <h3 class="section-heading">Interests & Hobbies</h3>
        <div class="row">
          <div v-for="interest in interests" :key="interest" class="interest-item">
            <div class="interest-wrap">
              <span>{{ interest }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.skill-category {
  background: var(--white);
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.category-title {
  color: var(--heading-color);
  margin-bottom: 1.5rem;
  font-size: 1.2rem;
  border-bottom: 2px solid var(--skills-color);
  padding-bottom: 0.5rem;
}

.skills-list {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.skill-item {
  width: 100%;
}

.skill-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.skill-name {
  color: var(--text-color);
  font-weight: 500;
}

.skill-percentage {
  color: var(--skills-color);
  font-weight: 600;
}

.progress-bar {
  width: 100%;
  height: 8px;
  background: var(--background-color);
  border-radius: 4px;
  overflow: hidden;
}

.progress {
  height: 100%;
  background: var(--skills-color);
  transition: width 1s ease-in-out;
}

.interests-section {
  margin-top: 4em;
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin: -15px;
}

.interest-item {
  width: 33.333%;
  padding: 15px;
}

.interest-wrap {
  background: var(--white);
  padding: 1.5em;
  border-radius: 4px;
  text-align: center;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.interest-wrap:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.interest-wrap span {
  color: var(--text-color);
  font-size: 14px;
}

@media (max-width: 768px) {
  .skills-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .skill-category {
    padding: 1rem;
  }

  .category-title {
    font-size: 1.1rem;
  }

  .interest-item {
    width: 100%;
  }
}

@media (max-width: 576px) {
  .skills-grid {
    gap: 1rem;
  }

  .skills-list {
    gap: 1rem;
  }

  .progress-bar {
    height: 6px;
  }
}
</style>