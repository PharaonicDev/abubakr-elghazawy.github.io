<script setup>
const personalInfo = {
  name: "Abubakr Mahmoud Mohamed Ali",
  dob: "September 11, 1994",
  residence: "Cairo, Egypt",
  email: "abubakrelghazawy@gmail.com",
}

const careerObjective = "A professional in sales management and marketing, with expertise in optimizing sales processes and increasing revenue, along with experience in web design and programming. Seeking to leverage my skills in digital advertising and campaign management to maximize the use of modern tools."
</script>

<template>
  <section id="about" class="section">
    <div class="container">
      <h2 class="section-heading">About Me</h2>
      <div class="about-content">
        <div class="row">
          <div class="about-desc">
            <div class="about-info">
              <div class="about-info-item">
                <span class="first-block">Full Name:</span>
                <span class="second-block">{{ personalInfo.name }}</span>
              </div>
              <div class="about-info-item">
                <span class="first-block">Date of Birth:</span>
                <span class="second-block">{{ personalInfo.dob }}</span>
              </div>
              <div class="about-info-item">
                <span class="first-block">Location:</span>
                <span class="second-block">{{ personalInfo.residence }}</span>
              </div>
              <div class="about-info-item">
                <span class="first-block">Email:</span>
                <span class="second-block">{{ personalInfo.email }}</span>
              </div>
              <div class="about-info-item">
                <span class="first-block">Career Objective:</span>
                <span class="second-block">{{ careerObjective }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section {
  padding: 7em 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-heading {
  font-size: 18px;
  margin-bottom: 4em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 5px;
  line-height: 1.8;
  position: relative;
  text-align: left;
}

.section-heading:after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 40px;
  height: 2px;
  background: var(--primary-color);
}

.about-content {
  background: var(--white);
  padding: 3em;
  border-radius: 4px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.about-info {
  display: flex;
  flex-direction: column;
  gap: 2em;
}

.about-info-item {
  display: flex;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  padding-bottom: 1.5em;
}

.about-info-item:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.first-block {
  min-width: 200px;
  font-weight: 600;
  color: var(--heading-color);
}

.second-block {
  flex: 1;
  color: var(--text-color);
  line-height: 1.8;
}

@media (max-width: 768px) {
  .about-info-item {
    flex-direction: column;
    gap: 0.5em;
  }

  .first-block {
    min-width: auto;
  }

  .about-content {
    padding: 2em;
  }
}

@media (max-width: 576px) {
  .about-content {
    padding: 1.5em;
  }

  .about-info-item {
    flex-direction: column;
    gap: 0.5em;
    padding-bottom: 1em;
  }

  .first-block {
    min-width: unset;
    font-weight: 600;
  }

  .second-block {
    padding-left: 0;
  }
}
</style>