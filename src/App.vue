<script setup>
import { ref, onMounted } from 'vue'
import AboutMe from './components/AboutMe.vue'
import Skills from './components/Skills.vue'
import Experience from './components/Experience.vue'
import Projects from './components/Projects.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { 
  faBars, 
  faTimes, 
  faUser, 
  faBriefcase, 
  faCode, 
  faLightbulb,
  faGraduationCap,
  faMedal,
  faExternalLinkAlt
} from '@fortawesome/free-solid-svg-icons'
import { 
  faLinkedinIn, 
  faGithub, 
  faFacebookF, 
  faBehance,
  faWhatsapp 
} from '@fortawesome/free-brands-svg-icons'

library.add(
  faBars, 
  faTimes, 
  faUser, 
  faBriefcase, 
  faCode, 
  faLightbulb,
  faGraduationCap,
  faMedal,
  faExternalLinkAlt,
  faLinkedinIn, 
  faGithub, 
  faFacebookF, 
  faBehance,
  faWhatsapp
)

const isMenuOpen = ref(false)
const isDarkTheme = ref(true) // Set default to dark theme

const socialLinks = [
  { icon: ['fab', 'linkedin-in'], url: 'https://www.linkedin.com/in/abubakr-elghazawy', label: 'LinkedIn' },
  { icon: ['fab', 'github'], url: 'https://github.com/YourGitHub', label: 'GitHub' },
  { icon: ['fab', 'facebook-f'], url: 'https://facebook.com/YourFacebook', label: 'Facebook' },
  { icon: ['fab', 'behance'], url: 'https://behance.net/YourBehance', label: 'Behance' }
]

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const toggleTheme = () => {
  isDarkTheme.value = !isDarkTheme.value
  document.documentElement.setAttribute('data-theme', isDarkTheme.value ? 'dark' : 'light')
}

onMounted(() => {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    isDarkTheme.value = true
    document.documentElement.setAttribute('data-theme', 'dark')
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show')
      }
    })
  }, { threshold: 0.1 })

  document.querySelectorAll('.section').forEach(section => {
    section.classList.add('fade-in')
    observer.observe(section)
  })
})
</script>

<template>
  <div class="layout-wrapper">
    <!-- Sidebar -->
    <aside class="sidebar" :class="{ 'nav-open': isMenuOpen }">
      <div class="sidebar-content">
        <div class="author-info">
          <div class="author-img"></div>
          <h1>Abubakr Elghazawy</h1>
          <span class="position">Entrepreneur | Software Engineer | AI Generalist | Sales Manager</span>
        </div>

        <nav>
          <a href="#about" @click="isMenuOpen = false" class="nav-link">
            <font-awesome-icon icon="user" />
            <span>About</span>
          </a>
          <a href="#experience" @click="isMenuOpen = false" class="nav-link">
            <font-awesome-icon icon="briefcase" />
            <span>Experience</span>
          </a>
          <a href="#projects" @click="isMenuOpen = false" class="nav-link">
            <font-awesome-icon icon="code" />
            <span>Projects</span>
          </a>
          <a href="#skills" @click="isMenuOpen = false" class="nav-link">
            <font-awesome-icon icon="lightbulb" />
            <span>Skills</span>
          </a>
        </nav>

        <div class="social-links">
          <a v-for="link in socialLinks" 
             :key="link.label" 
             :href="link.url" 
             :aria-label="link.label"
             target="_blank"
             rel="noopener noreferrer"
             class="social-link">
            <font-awesome-icon :icon="link.icon" />
          </a>
        </div>

        <div class="copyright">
          <small>&copy; {{ new Date().getFullYear() }}. All Rights Reserved.</small>
        </div>
      </div>
    </aside>

    <!-- Mobile Menu Toggle -->
    <button class="menu-toggle" @click="toggleMenu" aria-label="Toggle navigation menu">
      <font-awesome-icon :icon="isMenuOpen ? 'times' : 'bars'" />
    </button>

    <!-- Main Content -->
    <main id="main-content">
      <AboutMe />
      <Experience />
      <Projects />
      <Skills />
    </main>

    <!-- Floating WhatsApp Button -->
    <a href="https://wa.me/2001014642351" 
       target="_blank" 
       rel="noopener noreferrer"
       class="whatsapp-float">
      <font-awesome-icon :icon="['fab', 'whatsapp']" />
    </a>
  </div>
</template>

<style scoped>
.layout-wrapper {
  display: flex;
  min-height: 100vh;
}

.sidebar {
  width: var(--sidebar-width);
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  background: var(--white);
  z-index: 100;
  transition: transform 0.3s ease;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
}

.sidebar-content {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem;
}

.author-info {
  text-align: center;
  margin-bottom: 2rem;
}

.author-img {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  margin: 0 auto 1.5rem;
  background: url('/Abubake Elghazawy-Enterpioneer.png') center/cover;
  border: 3px solid var(--primary-color);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

.author-info h1 {
  font-size: 24px;
  margin-bottom: 0.5rem;
}

.position {
  color: var(--text-color);
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

nav {
  flex: 1;
  margin: 2rem 0;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 10px 0;
  color: var(--text-color);
  font-weight: 500;
  transition: all 0.3s ease;
  text-decoration: none;
}

.nav-link:hover {
  color: var(--primary-color);
  padding-left: 10px;
}

.nav-link[href="#about"]:hover { color: var(--primary-color); }
.nav-link[href="#experience"]:hover { color: var(--experience-color); }
.nav-link[href="#projects"]:hover { color: var(--projects-color); }
.nav-link[href="#skills"]:hover { color: var(--skills-color); }

.social-links {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.social-link {
  color: var(--text-color);
  font-size: 1.2rem;
  transition: all 0.3s ease;
}

.social-link:hover {
  transform: translateY(-3px);
}

.copyright {
  text-align: center;
  color: var(--text-color);
  font-size: 12px;
}

.menu-toggle {
  display: none;
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 1001;
  background: var(--primary-color);
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.whatsapp-float {
  position: fixed;
  bottom: 30px;
  right: 30px;
  background: var(--whatsapp-color);
  color: var(--white);
  padding: 1em 1.5em;
  border-radius: 50px;
  display: flex;
  align-items: center;
  gap: 0.5em;
  text-decoration: none;
  font-weight: 500;
  box-shadow: 0 4px 12px rgba(37, 211, 102, 0.3);
  transition: all 0.3s ease;
  z-index: 1000;
}

.whatsapp-float:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 16px rgba(37, 211, 102, 0.4);
}

.whatsapp-float span {
  margin-left: 0.5em;
}

@media (max-width: 768px) {
  .sidebar {
    transform: translateX(-100%);
  }

  .sidebar.nav-open {
    transform: translateX(0);
  }

  .menu-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .whatsapp-float {
    bottom: 20px;
    right: 20px;
    padding: 0.8em;
  }
  
  .whatsapp-float span {
    display: none;
  }
}

.sidebar-toggle {
  display: none;
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 1000;
  background: var(--primary-color);
  color: var(--white);
  border: none;
  border-radius: 4px;
  padding: 0.5rem;
  cursor: pointer;
}

@media (max-width: 992px) {
  .sidebar-toggle {
    display: block;
  }

  .sidebar {
    transform: translateX(-100%);
  }

  .sidebar.active {
    transform: translateX(0);
  }

  .main-content {
    margin-left: 0 !important;
    width: 100% !important;
  }
}

@media (max-width: 576px) {
  .sidebar {
    width: 100%;
  }

  .sidebar-toggle {
    top: 0.5rem;
    right: 0.5rem;
  }

  .section {
    padding: 3em 0;
  }
}

.mobile-nav {
  display: none;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: var(--white);
  padding: 0.5rem;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
  z-index: 99;
}

.mobile-nav-links {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.mobile-nav-link {
  color: var(--text-color);
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.8rem;
}

.mobile-nav-link.active {
  color: var(--primary-color);
}

@media (max-width: 768px) {
  .mobile-nav {
    display: block;
  }

  #main-content {
    padding-bottom: 60px; /* Add space for mobile navigation */
  }
}
</style>
