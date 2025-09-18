const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const contactForm = document.getElementById('contactForm');
const projectsGrid = document.getElementById('projects-grid');
const projectsLoading = document.querySelector('.projects-loading');
const langBtn = document.getElementById('langBtn');
const themeBtn = document.getElementById('themeBtn');
const themeIcon = document.getElementById('themeIcon');

let currentLanguage = localStorage.getItem('language') || 'tr';
let currentTheme = localStorage.getItem('theme') || 'light';

const translations = {
    tr: {
        'Ana Sayfa': 'Ana Sayfa',
        'Hakkımda': 'Hakkımda',
        'Projeler': 'Projeler',
        'Yetenekler': 'Yetenekler',
        'İletişim': 'İletişim',
        'Merhaba, Ben': 'Merhaba, Ben',
        'Bashiku': 'Bashiku',
        'Full Stack Developer | React Expert | Mobile Developer | UI/UX Designer': 'Full Stack Developer | React Expert | Mobile Developer | UI/UX Designer',
        'Modern web teknolojileri ile yaratıcı çözümler üretiyorum. React, Node.js, Laravel ve Flutter ile projeler geliştiriyorum. GitHub\'da projelerimi keşfedin ve birlikte çalışalım.': 'Modern web teknolojileri ile yaratıcı çözümler üretiyorum. React, Node.js, Laravel ve Flutter ile projeler geliştiriyorum. GitHub\'da projelerimi keşfedin ve birlikte çalışalım.',
        'Projelerimi Gör': 'Projelerimi Gör',
        'İletişime Geç': 'İletişime Geç',
        'Yazılım dünyasındaki yolculuğum': 'Yazılım dünyasındaki yolculuğum',
        'Meraklı Bir Geliştirici': 'Meraklı Bir Geliştirici',
        'Web geliştirme, mobil uygulama geliştirme ve tasarım konularında uzmanlaştım. JavaScript, PHP, Dart ve TypeScript ile projeler geliştiriyorum. React, Laravel, Flutter ve Node.js teknolojilerini kullanarak modern çözümler üretiyorum.': 'Web geliştirme, mobil uygulama geliştirme ve tasarım konularında uzmanlaştım. JavaScript, PHP, Dart ve TypeScript ile projeler geliştiriyorum. React, Laravel, Flutter ve Node.js teknolojilerini kullanarak modern çözümler üretiyorum.',
        'Mevcut Proje': 'Mevcut Proje',
        'AniTurk sitesi ve mobil uygulaması geliştiriyorum. Bu proje anime ve manga severler için kapsamlı bir platform sunuyor.': 'AniTurk sitesi ve mobil uygulaması geliştiriyorum. Bu proje anime ve manga severler için kapsamlı bir platform sunuyor.',
        'Tamamlanan Proje': 'Tamamlanan Proje',
        'GitHub Commit': 'GitHub Commit',
        'Mutlu Müşteri': 'Mutlu Müşteri',
        'Kullandığım teknolojiler ve araçlar': 'Kullandığım teknolojiler ve araçlar',
        'Frontend': 'Frontend',
        'Backend': 'Backend',
        'Mobil & Diğer': 'Mobil & Diğer',
        'GitHub\'daki en popüler projelerim': 'GitHub\'daki en popüler projelerim',
        'Projeler yükleniyor...': 'Projeler yükleniyor...',
        'Birlikte çalışmak için benimle iletişime geçin': 'Birlikte çalışmak için benimle iletişime geçin',
        'E-posta': 'E-posta',
        'Adınız': 'Adınız',
        'E-posta Adresiniz': 'E-posta Adresiniz',
        'Konu': 'Konu',
        'Mesajınız': 'Mesajınız',
        'Mesaj Gönder': 'Mesaj Gönder',
        '&copy; 2024 Bashiku. Tüm hakları saklıdır.': '&copy; 2024 Bashiku. Tüm hakları saklıdır.',
        'Welcome to Bashiku\'s Portfolio Terminal!': 'Bashiku\'nun Portfolio Terminaline Hoş Geldiniz!',
        'Type \'help\' to see available commands': 'Kullanılabilir komutları görmek için \'help\' yazın',
        'Starting Snake game...': 'Snake oyunu başlatılıyor...',
        'Use WASD or Arrow keys to control the snake': 'Yılanı kontrol etmek için WASD veya Ok tuşlarını kullanın',
        'Terminal cleared.': 'Terminal temizlendi.',
        'Command not found:': 'Komut bulunamadı:',
        'Type \'help\' for available commands.': 'Kullanılabilir komutlar için \'help\' yazın.',
        'Available commands:': 'Kullanılabilir komutlar:',
        'Show this help message': 'Bu yardım mesajını göster',
        'Start Snake game': 'Snake oyununu başlat',
        'Clear terminal': 'Terminali temizle',
        'Show about information': 'Hakkında bilgilerini göster',
        'Show technical skills': 'Teknik yetenekleri göster',
        'Show recent projects': 'Son projeleri göster',
        'Show contact information': 'İletişim bilgilerini göster',
        'Show current user': 'Mevcut kullanıcıyı göster',
        'List files': 'Dosyaları listele',
        'Print working directory': 'Çalışma dizinini yazdır',
        'Show current date': 'Mevcut tarihi göster',
        'Print text': 'Metin yazdır',
        'Bashiku - Full Stack Developer': 'Bashiku - Full Stack Developer',
        'Passionate developer with expertise in:': 'Uzman olduğum konularda tutkulu bir geliştirici:',
        '• Frontend: React, Vue.js, HTML5, CSS3, JavaScript': '• Frontend: React, Vue.js, HTML5, CSS3, JavaScript',
        '• Backend: Node.js, Python, PHP, Express.js': '• Backend: Node.js, Python, PHP, Express.js',
        '• Database: MongoDB, MySQL, PostgreSQL': '• Veritabanı: MongoDB, MySQL, PostgreSQL',
        '• Tools: Git, Docker, AWS, Linux': '• Araçlar: Git, Docker, AWS, Linux',
        'Always learning and building amazing things!': 'Her zaman öğreniyor ve harika şeyler inşa ediyorum!',
        'Technical Skills:': 'Teknik Yetenekler:',
        'Frontend Development:': 'Frontend Geliştirme:',
        '  • React.js, Vue.js, Angular': '  • React.js, Vue.js, Angular',
        '  • HTML5, CSS3, JavaScript (ES6+)': '  • HTML5, CSS3, JavaScript (ES6+)',
        '  • TypeScript, Sass, Less': '  • TypeScript, Sass, Less',
        '  • Bootstrap, Tailwind CSS': '  • Bootstrap, Tailwind CSS',
        'Backend Development:': 'Backend Geliştirme:',
        '  • Node.js, Express.js': '  • Node.js, Express.js',
        '  • Python, Django, Flask': '  • Python, Django, Flask',
        '  • PHP, Laravel, CodeIgniter': '  • PHP, Laravel, CodeIgniter',
        '  • RESTful APIs, GraphQL': '  • RESTful API\'ler, GraphQL',
        'Database & Cloud:': 'Veritabanı ve Bulut:',
        '  • MongoDB, MySQL, PostgreSQL': '  • MongoDB, MySQL, PostgreSQL',
        '  • AWS, Google Cloud, Azure': '  • AWS, Google Cloud, Azure',
        '  • Docker, Kubernetes': '  • Docker, Kubernetes',
        '  • Redis, Elasticsearch': '  • Redis, Elasticsearch',
        'Recent Projects:': 'Son Projeler:',
        '1. E-commerce Platform': '1. E-ticaret Platformu',
        '   • React + Node.js + MongoDB': '   • React + Node.js + MongoDB',
        '   • Payment integration, Admin panel': '   • Ödeme entegrasyonu, Admin paneli',
        '   • Live: https://example.com': '   • Canlı: https://example.com',
        '2. Task Management App': '2. Görev Yönetim Uygulaması',
        '   • Vue.js + Express.js + PostgreSQL': '   • Vue.js + Express.js + PostgreSQL',
        '   • Real-time collaboration': '   • Gerçek zamanlı işbirliği',
        '   • GitHub: https://github.com/bashiku/taskapp': '   • GitHub: https://github.com/bashiku/taskapp',
        '3. Portfolio Website': '3. Portfolyo Web Sitesi',
        '   • HTML5 + CSS3 + JavaScript': '   • HTML5 + CSS3 + JavaScript',
        '   • Responsive design, Interactive terminal': '   • Responsive tasarım, Etkileşimli terminal',
        '   • Current project!': '   • Mevcut proje!',
        'Contact Information:': 'İletişim Bilgileri:',
        'Email: ermanhasretarslan@gmail.com': 'E-posta: ermanhasretarslan@gmail.com',
        'Location: Antalya, Turkey': 'Konum: Antalya, Türkiye',
        'Social Media:': 'Sosyal Medya:',
        '  • GitHub: github.com/bashiku': '  • GitHub: github.com/bashiku',
        '  • LinkedIn: linkedin.com/in/erman-hasret-arslann': '  • LinkedIn: linkedin.com/in/erman-hasret-arslann',
        '  • Twitter: @erman_hasret_': '  • Twitter: @erman_hasret_',
        'Available for freelance projects!': 'Freelance projeler için müsaitim!',
        'bashiku': 'bashiku',
        'about.txt': 'hakkimda.txt',
        'skills.md': 'yetenekler.md',
        'projects/': 'projeler/',
        'contact.json': 'iletisim.json',
        'resume.pdf': 'ozgecmis.pdf',
        'snake_game.js': 'yilan_oyunu.js',
        '/home/bashiku/portfolio': '/home/bashiku/portfolio',
        'Press WASD or Arrow Keys': 'WASD veya Ok Tuşlarını Kullanın',
        'to start moving!': 'harekete başlamak için!'
    },
    en: {
        'Ana Sayfa': 'Home',
        'Hakkımda': 'About Me',
        'Projeler': 'Projects',
        'Yetenekler': 'Skills',
        'İletişim': 'Contact',
        'Merhaba, Ben': 'Hello, I\'m',
        'Bashiku': 'Bashiku',
        'Full Stack Developer | React Expert | Mobile Developer | UI/UX Designer': 'Full Stack Developer | React Expert | Mobile Developer | UI/UX Designer',
        'Modern web teknolojileri ile yaratıcı çözümler üretiyorum. React, Node.js, Laravel ve Flutter ile projeler geliştiriyorum. GitHub\'da projelerimi keşfedin ve birlikte çalışalım.': 'I create creative solutions with modern web technologies. I develop projects with React, Node.js, Laravel and Flutter. Discover my projects on GitHub and let\'s work together.',
        'Projelerimi Gör': 'View My Projects',
        'İletişime Geç': 'Get In Touch',
        'Yazılım dünyasındaki yolculuğum': 'My journey in the software world',
        'Meraklı Bir Geliştirici': 'A Curious Developer',
        'Web geliştirme, mobil uygulama geliştirme ve tasarım konularında uzmanlaştım. JavaScript, PHP, Dart ve TypeScript ile projeler geliştiriyorum. React, Laravel, Flutter ve Node.js teknolojilerini kullanarak modern çözümler üretiyorum.': 'I specialize in web development, mobile app development and design. I develop projects with JavaScript, PHP, Dart and TypeScript. I create modern solutions using React, Laravel, Flutter and Node.js technologies.',
        'Mevcut Proje': 'Current Project',
        'AniTurk sitesi ve mobil uygulaması geliştiriyorum. Bu proje anime ve manga severler için kapsamlı bir platform sunuyor.': 'I\'m developing AniTurk website and mobile application. This project provides a comprehensive platform for anime and manga enthusiasts.',
        'Tamamlanan Proje': 'Completed Projects',
        'GitHub Commit': 'GitHub Commits',
        'Mutlu Müşteri': 'Happy Clients',
        'Kullandığım teknolojiler ve araçlar': 'Technologies and tools I use',
        'Frontend': 'Frontend',
        'Backend': 'Backend',
        'Mobil & Diğer': 'Mobile & Others',
        'GitHub\'daki en popüler projelerim': 'My most popular projects on GitHub',
        'Projeler yükleniyor...': 'Loading projects...',
        'Birlikte çalışmak için benimle iletişime geçin': 'Get in touch with me to work together',
        'E-posta': 'Email',
        'Adınız': 'Your Name',
        'E-posta Adresiniz': 'Your Email',
        'Konu': 'Subject',
        'Mesajınız': 'Your Message',
        'Mesaj Gönder': 'Send Message',
        '&copy; 2024 Bashiku. Tüm hakları saklıdır.': '&copy; 2024 Bashiku. All rights reserved.',
        'Welcome to Bashiku\'s Portfolio Terminal!': 'Welcome to Bashiku\'s Portfolio Terminal!',
        'Type \'help\' to see available commands': 'Type \'help\' to see available commands',
        'Starting Snake game...': 'Starting Snake game...',
        'Use WASD or Arrow keys to control the snake': 'Use WASD or Arrow keys to control the snake',
        'Terminal cleared.': 'Terminal cleared.',
        'Command not found:': 'Command not found:',
        'Type \'help\' for available commands.': 'Type \'help\' for available commands.',
        'Available commands:': 'Available commands:',
        'Show this help message': 'Show this help message',
        'Start Snake game': 'Start Snake game',
        'Clear terminal': 'Clear terminal',
        'Show about information': 'Show about information',
        'Show technical skills': 'Show technical skills',
        'Show recent projects': 'Show recent projects',
        'Show contact information': 'Show contact information',
        'Show current user': 'Show current user',
        'List files': 'List files',
        'Print working directory': 'Print working directory',
        'Show current date': 'Show current date',
        'Print text': 'Print text',
        'Bashiku - Full Stack Developer': 'Bashiku - Full Stack Developer',
        'Passionate developer with expertise in:': 'Passionate developer with expertise in:',
        '• Frontend: React, Vue.js, HTML5, CSS3, JavaScript': '• Frontend: React, Vue.js, HTML5, CSS3, JavaScript',
        '• Backend: Node.js, Python, PHP, Express.js': '• Backend: Node.js, Python, PHP, Express.js',
        '• Database: MongoDB, MySQL, PostgreSQL': '• Database: MongoDB, MySQL, PostgreSQL',
        '• Tools: Git, Docker, AWS, Linux': '• Tools: Git, Docker, AWS, Linux',
        'Always learning and building amazing things!': 'Always learning and building amazing things!',
        'Technical Skills:': 'Technical Skills:',
        'Frontend Development:': 'Frontend Development:',
        '  • React.js, Vue.js, Angular': '  • React.js, Vue.js, Angular',
        '  • HTML5, CSS3, JavaScript (ES6+)': '  • HTML5, CSS3, JavaScript (ES6+)',
        '  • TypeScript, Sass, Less': '  • TypeScript, Sass, Less',
        '  • Bootstrap, Tailwind CSS': '  • Bootstrap, Tailwind CSS',
        'Backend Development:': 'Backend Development:',
        '  • Node.js, Express.js': '  • Node.js, Express.js',
        '  • Python, Django, Flask': '  • Python, Django, Flask',
        '  • PHP, Laravel, CodeIgniter': '  • PHP, Laravel, CodeIgniter',
        '  • RESTful APIs, GraphQL': '  • RESTful APIs, GraphQL',
        'Database & Cloud:': 'Database & Cloud:',
        '  • MongoDB, MySQL, PostgreSQL': '  • MongoDB, MySQL, PostgreSQL',
        '  • AWS, Google Cloud, Azure': '  • AWS, Google Cloud, Azure',
        '  • Docker, Kubernetes': '  • Docker, Kubernetes',
        '  • Redis, Elasticsearch': '  • Redis, Elasticsearch',
        'Recent Projects:': 'Recent Projects:',
        '1. E-commerce Platform': '1. E-commerce Platform',
        '   • React + Node.js + MongoDB': '   • React + Node.js + MongoDB',
        '   • Payment integration, Admin panel': '   • Payment integration, Admin panel',
        '   • Live: https://example.com': '   • Live: https://example.com',
        '2. Task Management App': '2. Task Management App',
        '   • Vue.js + Express.js + PostgreSQL': '   • Vue.js + Express.js + PostgreSQL',
        '   • Real-time collaboration': '   • Real-time collaboration',
        '   • GitHub: https://github.com/bashiku/taskapp': '   • GitHub: https://github.com/bashiku/taskapp',
        '3. Portfolio Website': '3. Portfolio Website',
        '   • HTML5 + CSS3 + JavaScript': '   • HTML5 + CSS3 + JavaScript',
        '   • Responsive design, Interactive terminal': '   • Responsive design, Interactive terminal',
        '   • Current project!': '   • Current project!',
        'Contact Information:': 'Contact Information:',
        'Email: ermanhasretarslan@gmail.com': 'Email: ermanhasretarslan@gmail.com',
        'Location: Antalya, Turkey': 'Location: Antalya, Turkey',
        'Social Media:': 'Social Media:',
        '  • GitHub: github.com/bashiku': '  • GitHub: github.com/bashiku',
        '  • LinkedIn: linkedin.com/in/erman-hasret-arslann': '  • LinkedIn: linkedin.com/in/erman-hasret-arslann',
        '  • Twitter: @erman_hasret_': '  • Twitter: @erman_hasret_',
        'Available for freelance projects!': 'Available for freelance projects!',
        'bashiku': 'bashiku',
        'about.txt': 'about.txt',
        'skills.md': 'skills.md',
        'projects/': 'projects/',
        'contact.json': 'contact.json',
        'resume.pdf': 'resume.pdf',
        'snake_game.js': 'snake_game.js',
        '/home/bashiku/portfolio': '/home/bashiku/portfolio',
        'Press WASD or Arrow Keys': 'Press WASD or Arrow Keys',
        'to start moving!': 'to start moving!'
    }
};

function updateLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    
    document.documentElement.lang = lang === 'tr' ? 'tr' : 'en';
    
    const elements = document.querySelectorAll('[data-tr], [data-en]');
    elements.forEach(element => {
        const trText = element.getAttribute('data-tr');
        const enText = element.getAttribute('data-en');
        
        if (trText && enText) {
            element.textContent = lang === 'tr' ? trText : enText;
        }
    });
    
        
    const inputs = document.querySelectorAll('[data-tr-placeholder], [data-en-placeholder]');
    inputs.forEach(input => {
        const trPlaceholder = input.getAttribute('data-tr-placeholder');
        const enPlaceholder = input.getAttribute('data-en-placeholder');
        
        if (trPlaceholder && enPlaceholder) {
            input.placeholder = lang === 'tr' ? trPlaceholder : enPlaceholder;
        }
    });
    
    const langSpan = langBtn.querySelector('span');
    langSpan.textContent = lang === 'tr' ? 'EN' : 'TR';
        
        if (window.terminalInstance) {
            window.terminalInstance.updateTerminalLanguage();
            
            if (window.terminalInstance.snakeGame && window.terminalInstance.snakeGame.gameRunning && 
                window.terminalInstance.snakeGame.dx === 0 && window.terminalInstance.snakeGame.dy === 0) {
                window.terminalInstance.snakeGame.showStartMessage();
            }
        }
    }

langBtn.addEventListener('click', () => {
    const newLang = currentLanguage === 'tr' ? 'en' : 'tr';
    updateLanguage(newLang);
});

function updateTheme(theme) {
    currentTheme = theme;
    localStorage.setItem('theme', theme);
    
    document.documentElement.setAttribute('data-theme', theme);
    
    if (theme === 'dark') {
        themeIcon.className = 'fas fa-sun';
    } else {
        themeIcon.className = 'fas fa-moon';
    }
    
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (theme === 'dark') {
            navbar.style.background = 'rgba(17, 24, 39, 0.95)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        }
    }
}

themeBtn.addEventListener('click', () => {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    updateTheme(newTheme);
});

document.addEventListener('DOMContentLoaded', () => {
    updateLanguage(currentLanguage);
    updateTheme(currentTheme);
    
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });
    
    setTimeout(() => {
        github.loadProjects();
    }, 1000);
});

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 70;
            
            smoothScrollTo(offsetTop, 600);
        }
    });
});

function smoothScrollTo(targetPosition, duration) {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    requestAnimationFrame(animation);
}

function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
}


const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            const children = entry.target.querySelectorAll('.skill-item, .project-card, .contact-item');
            children.forEach((child, index) => {
                setTimeout(() => {
                    child.style.opacity = '1';
                    child.style.transform = 'translateY(0)';
                }, index * 150);
            });
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.about, .skills, .projects, .contact');
    sections.forEach(section => {
        sectionObserver.observe(section);
        
        const children = section.querySelectorAll('.skill-item, .project-card, .contact-item');
        children.forEach(child => {
            child.style.opacity = '0';
            child.style.transform = 'translateY(30px)';
            child.style.transition = 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        });
    });
});

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    if (!name || !email || !subject || !message) {
        showNotification('Lütfen tüm alanları doldurun!', 'error');
        return;
    }
    
    if (!isValidEmail(email)) {
        showNotification('Geçerli bir e-posta adresi girin!', 'error');
        return;
    }
    
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Gönderiliyor...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        showNotification('Mesajınız başarıyla gönderildi!', 'success');
        contactForm.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }, 2000);
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#28a745' : type === 'error' ? '#dc3545' : '#17a2b8'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 5000);
}

class GitHubAPI {
    constructor(username) {
        this.username = username;
        this.baseURL = 'https://api.github.com';
    }
    
    async getRepositories() {
        try {
            const response = await fetch(`${this.baseURL}/users/${this.username}/repos?sort=updated&per_page=6`);
            if (!response.ok) {
                throw new Error('GitHub API isteği başarısız');
            }
            return await response.json();
        } catch (error) {
            console.error('GitHub API Hatası:', error);
            return this.getMockRepositories();
        }
    }
    
    getMockRepositories() {
        return [
            {
                name: 'AniTurk Website',
                description: currentLanguage === 'tr' 
                    ? 'Anime ve manga severler için kapsamlı platform. React, Laravel ve Firebase ile geliştirilmiş modern web uygulaması.'
                    : 'Comprehensive platform for anime and manga enthusiasts. Modern web application built with React, Laravel and Firebase.',
                html_url: '#',
                language: 'JavaScript',
                stargazers_count: 45,
                topics: ['react', 'laravel', 'firebase', 'anime']
            },
            {
                name: 'AniTurk Mobile App',
                description: currentLanguage === 'tr'
                    ? 'Flutter ile geliştirilmiş mobil uygulama. Cross-platform destekli, modern UI/UX tasarımı ile kullanıcı dostu arayüz.'
                    : 'Mobile application built with Flutter. Cross-platform support with modern UI/UX design and user-friendly interface.',
                html_url: '#',
                language: 'Dart',
                stargazers_count: 32,
                topics: ['flutter', 'dart', 'mobile', 'cross-platform']
            },
            {
                name: 'E-Commerce Platform',
                description: currentLanguage === 'tr'
                    ? 'Modern React ve Node.js ile geliştirilmiş tam özellikli e-ticaret platformu. Ödeme entegrasyonu ve admin paneli içerir.'
                    : 'Full-featured e-commerce platform built with modern React and Node.js. Includes payment integration and admin panel.',
                html_url: '#',
                language: 'JavaScript',
                stargazers_count: 28,
                topics: ['react', 'nodejs', 'mongodb', 'stripe']
            },
            {
                name: 'Task Management App',
                description: currentLanguage === 'tr'
                    ? 'Laravel ve Vue.js ile geliştirilmiş görev yönetim uygulaması. Gerçek zamanlı güncellemeler ve kullanıcı yönetimi.'
                    : 'Task management application built with Laravel and Vue.js. Real-time updates and user management.',
                html_url: '#',
                language: 'PHP',
                stargazers_count: 19,
                topics: ['laravel', 'vue', 'php', 'realtime']
            },
            {
                name: 'Portfolio Website',
                description: currentLanguage === 'tr'
                    ? 'Responsive ve modern tasarımlı kişisel portföy websitesi. Vanilla JavaScript ve CSS3 ile geliştirilmiş.'
                    : 'Responsive and modern designed personal portfolio website. Built with Vanilla JavaScript and CSS3.',
                html_url: '#',
                language: 'HTML',
                stargazers_count: 15,
                topics: ['html', 'css', 'javascript', 'responsive']
            },
            {
                name: 'API Service',
                description: currentLanguage === 'tr'
                    ? 'RESTful API servisi. Express.js ve MongoDB kullanılarak geliştirilmiş, JWT authentication ve rate limiting özellikleri içerir.'
                    : 'RESTful API service. Built with Express.js and MongoDB, includes JWT authentication and rate limiting features.',
                html_url: '#',
                language: 'JavaScript',
                stargazers_count: 12,
                topics: ['express', 'mongodb', 'jwt', 'api']
            }
        ];
    }
    
    async loadProjects() {
        try {
            if (projectsLoading) {
                projectsLoading.style.display = 'block';
            }
            if (projectsGrid) {
                projectsGrid.innerHTML = '';
            }
            
            const repositories = await this.getRepositories();
            
            if (projectsGrid) {
                repositories.forEach(repo => {
                    const projectCard = this.createProjectCard(repo);
                    projectsGrid.appendChild(projectCard);
                });
            }
            
            if (projectsLoading) {
                projectsLoading.style.display = 'none';
            }
        } catch (error) {
            console.error('Projeler yüklenirken hata:', error);
            if (projectsLoading) {
                projectsLoading.innerHTML = '<p>Projeler yüklenirken bir hata oluştu.</p>';
            }
        }
    }
    
    createProjectCard(repo) {
        const card = document.createElement('div');
        card.className = 'project-card fade-in';
        
        const topics = repo.topics || [repo.language].filter(Boolean);
        const topicsHTML = topics.slice(0, 3).map(topic => 
            `<span class="tech-tag">${topic}</span>`
        ).join('');
        
        card.innerHTML = `
            <div class="project-image">
                <i class="fab fa-github"></i>
            </div>
            <div class="project-content">
                <h3 class="project-title">${repo.name}</h3>
                <p class="project-description">${repo.description || 'Açıklama bulunmuyor.'}</p>
                <div class="project-tech">
                    ${topicsHTML}
                </div>
                <div class="project-links">
                    <a href="${repo.html_url}" class="project-link" target="_blank" rel="noopener">
                        <i class="fab fa-github"></i>
                        GitHub
                    </a>
                    <a href="${repo.html_url}" class="project-link" target="_blank" rel="noopener">
                        <i class="fas fa-external-link-alt"></i>
                        Demo
                    </a>
                </div>
            </div>
        `;
        
        return card;
    }
}

const github = new GitHubAPI('bashiku');


document.addEventListener('DOMContentLoaded', () => {
    const terminalCommands = document.querySelectorAll('.command');
    const terminalOutputs = document.querySelectorAll('.output');
    
    setTimeout(() => {
        terminalCommands.forEach((cmd, index) => {
            setTimeout(() => {
                cmd.style.opacity = '1';
            }, index * 1000);
        });
    }, 1000);
    
    setTimeout(() => {
        terminalOutputs.forEach((output, index) => {
            setTimeout(() => {
                output.style.opacity = '1';
            }, (index + 1) * 1000 + 500);
        });
    }, 1500);
    
});

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    
    const shapes = document.querySelectorAll('.shape');
    shapes.forEach((shape, index) => {
        const speed = 0.5 + (index * 0.1);
        const yPos = -(scrolled * speed);
        shape.style.transform = `translateY(${yPos}px) rotate(${scrolled * 0.1}deg)`;
    });
    
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (scrolled > 50) {
            if (currentTheme === 'dark') {
                navbar.style.background = 'rgba(17, 24, 39, 0.98)';
                navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
            } else {
                navbar.style.background = 'rgba(255, 255, 255, 0.98)';
                navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
            }
        } else {
            if (currentTheme === 'dark') {
                navbar.style.background = 'rgba(17, 24, 39, 0.95)';
                navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
            } else {
                navbar.style.background = 'rgba(255, 255, 255, 0.95)';
                navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
            }
        }
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const skillItems = document.querySelectorAll('.skill-item');
    
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'scale(1.05) rotate(2deg)';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'scale(1) rotate(0deg)';
        });
    });
});

function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.textContent.replace(/\D/g, ''));
        const increment = target / 100;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current) + '+';
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target + '+';
            }
        };
        
        updateCounter();
    });
}

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const statsSection = document.querySelector('.stats');
if (statsSection) {
    statsObserver.observe(statsSection);
}

window.addEventListener('load', () => {
    const loader = document.querySelector('.page-loader');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }
});

if ('serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost')) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-navigation');
});

const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
        }
    });
});

document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
});

class Terminal {
    constructor() {
        this.output = document.getElementById('terminalOutput');
        this.input = document.getElementById('terminalInput');
        this.gameContainer = document.getElementById('gameContainer');
        this.snakeGame = null;
        
        this.commands = {
            help: () => this.showHelp(),
            snake: () => this.startSnakeGame(),
            clear: () => this.clearTerminal(),
            about: () => this.showAbout(),
            skills: () => this.showSkills(),
            projects: () => this.showProjects(),
            contact: () => this.showContact(),
            whoami: () => this.showWhoami(),
            ls: () => this.showFiles(),
            pwd: () => this.showPwd(),
            date: () => this.showDate(),
            echo: (args) => this.echo(args)
        };
        
        this.init();
    }
    
    init() {
        this.input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.executeCommand();
            }
        });
        
        this.input.focus();
    }
    
    executeCommand() {
        const command = this.input.value.trim().toLowerCase();
        this.addLine(`$ ${this.input.value}`);
        
        if (command === '') {
            this.input.value = '';
            return;
        }
        
        const [cmd, ...args] = command.split(' ');
        
        if (this.commands[cmd]) {
            this.commands[cmd](args);
        } else {
            this.addLine(`Command not found: ${cmd}. Type 'help' for available commands.`, 'error');
        }
        
        this.input.value = '';
    }
    
    addLine(text, type = 'output') {
        const line = document.createElement('div');
        line.className = 'code-line';
        
        const translatedText = this.translate(text);
        
        if (type === 'error') {
            line.innerHTML = `<span class="output" style="color: #ff6b6b;">${translatedText}</span>`;
        } else if (type === 'success') {
            line.innerHTML = `<span class="output" style="color: #4ecdc4;">${translatedText}</span>`;
        } else {
            line.innerHTML = `<span class="output">${translatedText}</span>`;
        }
        
        this.output.appendChild(line);
        
        setTimeout(() => {
            this.output.scrollTop = this.output.scrollHeight;
        }, 10);
    }
    
    translate(text) {
        return translations[currentLanguage][text] || text;
    }
    
    updateTerminalLanguage() {
        const lines = this.output.querySelectorAll('.code-line');
        lines.forEach(line => {
            const outputSpan = line.querySelector('.output');
            const commandSpan = line.querySelector('.command');
            
            if (outputSpan) {
                const originalText = outputSpan.textContent;
                const translatedText = this.translate(originalText);
                if (translatedText !== originalText) {
                    outputSpan.textContent = translatedText;
                }
            }
            
            if (commandSpan) {
                const originalText = commandSpan.textContent;
                const translatedText = this.translate(originalText);
                if (translatedText !== originalText) {
                    commandSpan.textContent = translatedText;
                }
            }
        });
        
        if (this.input) {
            const trPlaceholder = this.input.getAttribute('data-tr-placeholder');
            const enPlaceholder = this.input.getAttribute('data-en-placeholder');
            
            if (trPlaceholder && enPlaceholder) {
                this.input.placeholder = currentLanguage === 'tr' ? trPlaceholder : enPlaceholder;
            }
        }
    }
    
    showHelp() {
        const helpText = [
            'Available commands:',
            '  help     - Show this help message',
            '  snake    - Start Snake game',
            '  clear    - Clear terminal',
            '  about    - Show about information',
            '  skills   - Show technical skills',
            '  projects - Show recent projects',
            '  contact  - Show contact information',
            '  whoami   - Show current user',
            '  ls       - List files',
            '  pwd      - Print working directory',
            '  date     - Show current date',
            '  echo     - Print text'
        ];
        
        helpText.forEach(line => this.addLine(line));
    }
    
    startSnakeGame() {
        this.addLine('Starting Snake game...', 'success');
        this.addLine('Use WASD or Arrow keys to control the snake');
        
        this.output.style.display = 'none';
        this.input.style.display = 'none';
        this.gameContainer.style.display = 'flex';
        
        if (!this.snakeGame) {
            this.snakeGame = new SnakeGame();
        } else {
            this.snakeGame.setCanvasSize();
            this.snakeGame.draw();
        }
    }
    
    clearTerminal() {
        this.output.innerHTML = '';
        this.addLine('Terminal cleared.');
    }
    
    showAbout() {
        const aboutText = [
            'Bashiku - Full Stack Developer',
            '',
            'Passionate developer with expertise in:',
            '• Frontend: React, Vue.js, HTML5, CSS3, JavaScript',
            '• Backend: Node.js, Python, PHP, Express.js',
            '• Database: MongoDB, MySQL, PostgreSQL',
            '• Tools: Git, Docker, AWS, Linux',
            '',
            'Always learning and building amazing things!'
        ];
        
        aboutText.forEach(line => this.addLine(line));
    }
    
    showSkills() {
        const skillsText = [
            'Technical Skills:',
            '',
            'Frontend Development:',
            '  • React.js, Vue.js, Angular',
            '  • HTML5, CSS3, JavaScript (ES6+)',
            '  • TypeScript, Sass, Less',
            '  • Bootstrap, Tailwind CSS',
            '',
            'Backend Development:',
            '  • Node.js, Express.js',
            '  • Python, Django, Flask',
            '  • PHP, Laravel, CodeIgniter',
            '  • RESTful APIs, GraphQL',
            '',
            'Database & Cloud:',
            '  • MongoDB, MySQL, PostgreSQL',
            '  • AWS, Google Cloud, Azure',
            '  • Docker, Kubernetes',
            '  • Redis, Elasticsearch'
        ];
        
        skillsText.forEach(line => this.addLine(line));
    }
    
    showProjects() {
        const projectsText = [
            'Recent Projects:',
            '',
            '1. E-commerce Platform',
            '   • React + Node.js + MongoDB',
            '   • Payment integration, Admin panel',
            '   • Live: https://example.com',
            '',
            '2. Task Management App',
            '   • Vue.js + Express.js + PostgreSQL',
            '   • Real-time collaboration',
            '   • GitHub: https://github.com/bashiku/taskapp',
            '',
            '3. Portfolio Website',
            '   • HTML5 + CSS3 + JavaScript',
            '   • Responsive design, Interactive terminal',
            '   • Current project!'
        ];
        
        projectsText.forEach(line => this.addLine(line));
    }
    
    showContact() {
        const contactText = [
            'Contact Information:',
            '',
            'Email: ermanhasretarslan@gmail.com',
            'Location: Antalya, Turkey',
            '',
            'Social Media:',
            '  • GitHub: github.com/bashiku',
            '  • LinkedIn: linkedin.com/in/erman-hasret-arslann',
            '  • Twitter: @erman_hasret_',
            '',
            'Available for freelance projects!'
        ];
        
        contactText.forEach(line => this.addLine(line));
    }
    
    showWhoami() {
        this.addLine('bashiku');
    }
    
    showFiles() {
        const filesText = [
            'about.txt',
            'skills.md',
            'projects/',
            'contact.json',
            'resume.pdf',
            'snake_game.js'
        ];
        
        filesText.forEach(file => this.addLine(file));
    }
    
    showPwd() {
        this.addLine('/home/bashiku/portfolio');
    }
    
    showDate() {
        const now = new Date();
        this.addLine(now.toString());
    }
    
    echo(args) {
        if (args.length > 0) {
            this.addLine(args.join(' '));
        } else {
            this.addLine('');
        }
    }
}

class SnakeGame {
    constructor() {
        this.canvas = document.getElementById('snakeGame');
        this.ctx = this.canvas.getContext('2d');
        this.startBtn = document.getElementById('startBtn');
        this.pauseBtn = document.getElementById('pauseBtn');
        this.closeBtn = document.getElementById('closeGame');
        this.scoreElement = document.getElementById('score');
        
        this.gridSize = 20;
        this.setCanvasSize();
        
        const defaultX = this.tileCountX ? Math.floor(this.tileCountX / 2) : 7;
        const defaultY = this.tileCountY ? Math.floor(this.tileCountY / 2) : 5;
        
        this.snake = [{ x: defaultX, y: defaultY }];
        this.food = { x: defaultX + 3, y: defaultY };
        this.dx = 0;
        this.dy = 0;
        this.score = 0;
        this.gameRunning = false;
        this.gamePaused = false;
        
        this.init();
    }
    
    setCanvasSize() {
        const canvasWidth = 300;
        const canvasHeight = 200;
        
        this.canvas.width = canvasWidth;
        this.canvas.height = canvasHeight;
        this.tileCountX = Math.floor(canvasWidth / this.gridSize);
        this.tileCountY = Math.floor(canvasHeight / this.gridSize);
    }
    
    init() {
        this.startBtn.addEventListener('click', () => this.startGame());
        this.pauseBtn.addEventListener('click', () => this.togglePause());
        this.closeBtn.addEventListener('click', () => this.closeGame());
        
        window.addEventListener('resize', () => {
            this.setCanvasSize();
            this.draw();
        });
        
        this.draw();
    }
    
    closeGame() {
        this.gameRunning = false;
        this.gamePaused = false;
        
        if (this.keyboardHandler) {
            document.removeEventListener('keydown', this.keyboardHandler);
        }
        
        document.getElementById('gameContainer').style.display = 'none';
        document.getElementById('terminalOutput').style.display = 'block';
        document.getElementById('terminalInput').style.display = 'flex';
        this.startBtn.disabled = false;
        this.pauseBtn.disabled = true;
        this.pauseBtn.textContent = 'Pause';
    }
    
    startGame() {
        this.setCanvasSize();
        
        if (!this.tileCountX || !this.tileCountY) {
            this.tileCountX = Math.floor(this.canvas.width / this.gridSize);
            this.tileCountY = Math.floor(this.canvas.height / this.gridSize);
        }
        
        const centerX = Math.floor(this.tileCountX / 2) || 7;
        const centerY = Math.floor(this.tileCountY / 2) || 5;
        
        this.snake = [{ x: centerX, y: centerY }];
        this.food = this.generateFood();
        this.dx = 0;
        this.dy = 0;
        this.score = 0;
        this.gameRunning = true;
        this.gamePaused = false;
        
        this.startBtn.disabled = true;
        this.pauseBtn.disabled = false;
        this.pauseBtn.textContent = 'Pause';
        
        this.keyboardHandler = (e) => this.handleKeyPress(e);
        document.addEventListener('keydown', this.keyboardHandler);
        
        this.updateScore();
        this.showStartMessage();
        this.gameLoop();
    }
    
    showStartMessage() {
        this.draw();
        
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.ctx.fillStyle = '#4ecdc4';
        this.ctx.font = '16px Arial';
        this.ctx.textAlign = 'center';
        
        const line1 = translations[currentLanguage]['Press WASD or Arrow Keys'] || 'Press WASD or Arrow Keys';
        const line2 = translations[currentLanguage]['to start moving!'] || 'to start moving!';
        
        this.ctx.fillText(line1, this.canvas.width / 2, this.canvas.height / 2 - 10);
        this.ctx.fillText(line2, this.canvas.width / 2, this.canvas.height / 2 + 10);
    }
    
    togglePause() {
        if (this.gamePaused) {
            this.gamePaused = false;
            this.pauseBtn.textContent = 'Pause';
            this.gameLoop();
        } else {
            this.gamePaused = true;
            this.pauseBtn.textContent = 'Resume';
        }
    }
    
    handleKeyPress(e) {
        if (!this.gameRunning || this.gamePaused) return;
        
        e.preventDefault();
        const key = e.key.toLowerCase();
        
        const wasStationary = (this.dx === 0 && this.dy === 0);
        
        switch(key) {
            case 'arrowup':
            case 'w':
                if (this.dy !== 1) {
                    this.dx = 0;
                    this.dy = -1;
                }
                break;
            case 'arrowdown':
            case 's':
                if (this.dy !== -1) {
                    this.dx = 0;
                    this.dy = 1;
                }
                break;
            case 'arrowleft':
            case 'a':
                if (this.dx !== 1) {
                    this.dx = -1;
                    this.dy = 0;
                }
                break;
            case 'arrowright':
            case 'd':
                if (this.dx !== -1) {
                    this.dx = 1;
                    this.dy = 0;
                }
                break;
        }
        
        if (wasStationary && (this.dx !== 0 || this.dy !== 0)) {
            this.draw();
        }
    }
    
    generateFood() {
        let newFood;
        const maxX = this.tileCountX || 15;
        const maxY = this.tileCountY || 10;
        
        do {
            newFood = {
                x: Math.floor(Math.random() * maxX),
                y: Math.floor(Math.random() * maxY)
            };
        } while (this.snake.some(segment => segment.x === newFood.x && segment.y === newFood.y));
        
        return newFood;
    }
    
    update() {
        if (!this.gameRunning || this.gamePaused) return;
        
        if (this.dx === 0 && this.dy === 0) return;
        
        const head = { x: this.snake[0].x + this.dx, y: this.snake[0].y + this.dy };
        const maxX = this.tileCountX || 15;
        const maxY = this.tileCountY || 10;
        
        if (head.x < 0 || head.x >= maxX || head.y < 0 || head.y >= maxY) {
            this.gameOver();
            return;
        }
        
        if (this.snake.some(segment => segment.x === head.x && segment.y === head.y)) {
            this.gameOver();
            return;
        }
        
        this.snake.unshift(head);
        
        if (head.x === this.food.x && head.y === this.food.y) {
            this.score += 10;
            this.updateScore();
            this.food = this.generateFood();
        } else {
            this.snake.pop();
        }
    }
    
    draw() {
        this.ctx.fillStyle = '#1a1a1a';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.ctx.fillStyle = '#4ecdc4';
        this.snake.forEach((segment, index) => {
            if (index === 0) {
                this.ctx.fillStyle = '#45b7b8';
            } else {
                this.ctx.fillStyle = '#4ecdc4';
            }
            this.ctx.fillRect(segment.x * this.gridSize, segment.y * this.gridSize, this.gridSize - 2, this.gridSize - 2);
        });
        
        this.ctx.fillStyle = '#ff6b6b';
        this.ctx.fillRect(this.food.x * this.gridSize, this.food.y * this.gridSize, this.gridSize - 2, this.gridSize - 2);
        
        this.ctx.strokeStyle = '#333';
        this.ctx.lineWidth = 1;
        const maxX = this.tileCountX || 15;
        const maxY = this.tileCountY || 10;
        
        for (let i = 0; i <= maxX; i++) {
            this.ctx.beginPath();
            this.ctx.moveTo(i * this.gridSize, 0);
            this.ctx.lineTo(i * this.gridSize, this.canvas.height);
            this.ctx.stroke();
        }
        
        for (let i = 0; i <= maxY; i++) {
            this.ctx.beginPath();
            this.ctx.moveTo(0, i * this.gridSize);
            this.ctx.lineTo(this.canvas.width, i * this.gridSize);
            this.ctx.stroke();
        }
    }
    
    updateScore() {
        this.scoreElement.textContent = this.score;
    }
    
    gameOver() {
        this.gameRunning = false;
        this.startBtn.disabled = false;
        this.pauseBtn.disabled = true;
        this.pauseBtn.textContent = 'Pause';
        
        if (this.keyboardHandler) {
            document.removeEventListener('keydown', this.keyboardHandler);
        }
        
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.ctx.fillStyle = '#ff6b6b';
        this.ctx.font = '20px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Game Over!', this.canvas.width / 2, this.canvas.height / 2 - 10);
        
        this.ctx.fillStyle = '#fff';
        this.ctx.font = '14px Arial';
        this.ctx.fillText(`Final Score: ${this.score}`, this.canvas.width / 2, this.canvas.height / 2 + 20);
    }
    
    gameLoop() {
        if (!this.gameRunning || this.gamePaused) return;
        
        this.update();
        this.draw();
        
        setTimeout(() => this.gameLoop(), 150);
    }
}

// Settings functionality
function initializeSettings() {
    const settingsBtn = document.getElementById('settingsBtn');
    const settingsPanel = document.getElementById('settingsPanel');
    const closeSettings = document.getElementById('closeSettings');
    const settingsOverlay = document.getElementById('settingsOverlay');
    
    // Load saved settings
    loadSettings();
    
    // Settings panel toggle
    settingsBtn.addEventListener('click', () => {
        settingsPanel.classList.add('active');
        settingsOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    
    closeSettings.addEventListener('click', closeSettingsPanel);
    settingsOverlay.addEventListener('click', closeSettingsPanel);
    
    // Color theme buttons
    const colorBtns = document.querySelectorAll('.color-btn');
    colorBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            colorBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const color = btn.getAttribute('data-color');
            applyColorTheme(color);
            saveSettings('colorTheme', color);
        });
    });
    
    // Animation toggle
    const animationsToggle = document.getElementById('animationsToggle');
    animationsToggle.addEventListener('change', (e) => {
        toggleAnimations(e.target.checked);
        saveSettings('animations', e.target.checked);
    });
    
        // Font size buttons
        const fontBtns = document.querySelectorAll('.font-btn');
        fontBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                fontBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const size = btn.getAttribute('data-size');
                applyFontSize(size);
                saveSettings('fontSize', size);
            });
        });
        
    
}

function closeSettingsPanel() {
    const settingsPanel = document.getElementById('settingsPanel');
    const settingsOverlay = document.getElementById('settingsOverlay');
    
    settingsPanel.classList.remove('active');
    settingsOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

function applyColorTheme(color) {
    const root = document.documentElement;
    
    const themes = {
        default: {
            '--primary-color': '#667eea',
            '--secondary-color': '#764ba2',
            '--accent-color': '#4ecdc4',
            '--text-color': '#333',
            '--bg-color': '#ffffff',
            '--light-color': '#f8f9fa'
        },
        ocean: {
            '--primary-color': '#4facfe',
            '--secondary-color': '#02888f',
            '--accent-color': '#43e97b',
            '--text-color': '#333',
            '--bg-color': '#ffffff',
            '--light-color': '#f0f9ff'
        },
        sunset: {
            '--primary-color': '#fa709a',
            '--secondary-color': '#d88b17',
            '--accent-color': '#ff9a9e',
            '--text-color': '#333',
            '--bg-color': '#ffffff',
            '--light-color': '#fff5f5'
        },
        forest: {
            '--primary-color': '#56ab2f',
            '--secondary-color': '#057149',
            '--accent-color': '#84fab0',
            '--text-color': '#333',
            '--bg-color': '#ffffff',
            '--light-color': '#f0fff4'
        },
        purple: {
            '--primary-color': '#667eea',
            '--secondary-color': '#764ba2',
            '--accent-color': '#f093fb',
            '--text-color': '#333',
            '--bg-color': '#ffffff',
            '--light-color': '#faf5ff'
        },
        fire: {
            '--primary-color': '#ff6b6b',
            '--secondary-color': '#ee5a24',
            '--accent-color': '#ffa726',
            '--text-color': '#333',
            '--bg-color': '#ffffff',
            '--light-color': '#fff3e0'
        }
    };
    
    const theme = themes[color] || themes.default;
    
    Object.keys(theme).forEach(key => {
        root.style.setProperty(key, theme[key]);
    });
    
    // Set color theme attribute for hero styling
    document.body.setAttribute('data-color-theme', color);
    
    // Update settings button color
    const settingsBtn = document.getElementById('settingsBtn');
    settingsBtn.style.background = `linear-gradient(135deg, ${theme['--primary-color']} 0%, ${theme['--secondary-color']} 100%)`;
}

function toggleAnimations(enabled) {
    const root = document.documentElement;
    const body = document.body;
    
    if (enabled) {
        root.style.setProperty('--animation-duration', '0.3s');
        root.style.setProperty('--transition-duration', '0.3s');
        body.setAttribute('data-animations', 'true');
        
        // Re-enable all animations
        const allElements = document.querySelectorAll('*');
        allElements.forEach(el => {
            el.style.animationPlayState = 'running';
            el.style.transition = '';
        });
        
        // Re-enable AOS animations
        const animatedElements = document.querySelectorAll('[data-aos]');
        animatedElements.forEach(el => {
            el.style.animationPlayState = 'running';
        });
    } else {
        root.style.setProperty('--animation-duration', '0s');
        root.style.setProperty('--transition-duration', '0s');
        body.setAttribute('data-animations', 'false');
        
        // Disable all animations and transitions
        const allElements = document.querySelectorAll('*');
        allElements.forEach(el => {
            el.style.animationPlayState = 'paused';
            el.style.transition = 'none';
        });
        
        // Disable AOS animations
        const animatedElements = document.querySelectorAll('[data-aos]');
        animatedElements.forEach(el => {
            el.style.animationPlayState = 'paused';
        });
    }
}

function applyFontSize(size) {
    const root = document.documentElement;
    
    const sizes = {
        small: {
            '--font-size-base': '14px',
            '--font-size-lg': '16px',
            '--font-size-xl': '18px',
            '--font-size-2xl': '24px',
            '--font-size-3xl': '32px'
        },
        medium: {
            '--font-size-base': '16px',
            '--font-size-lg': '18px',
            '--font-size-xl': '20px',
            '--font-size-2xl': '28px',
            '--font-size-3xl': '36px'
        },
        large: {
            '--font-size-base': '18px',
            '--font-size-lg': '20px',
            '--font-size-xl': '22px',
            '--font-size-2xl': '32px',
            '--font-size-3xl': '40px'
        }
    };
    
    const fontSizes = sizes[size] || sizes.medium;
    
    Object.keys(fontSizes).forEach(key => {
        root.style.setProperty(key, fontSizes[key]);
    });
}


function saveSettings(key, value) {
    const settings = JSON.parse(localStorage.getItem('portfolioSettings') || '{}');
    settings[key] = value;
    localStorage.setItem('portfolioSettings', JSON.stringify(settings));
}

function loadSettings() {
    const settings = JSON.parse(localStorage.getItem('portfolioSettings') || '{}');
    
        // Load color theme
        if (settings.colorTheme) {
            const colorBtn = document.querySelector(`[data-color="${settings.colorTheme}"]`);
            if (colorBtn) {
                document.querySelectorAll('.color-btn').forEach(btn => btn.classList.remove('active'));
                colorBtn.classList.add('active');
                applyColorTheme(settings.colorTheme);
            }
        } else {
            // Apply default color theme if no setting is saved
            applyColorTheme('default');
        }
    
    // Load animations setting
    if (settings.animations !== undefined) {
        const animationsToggle = document.getElementById('animationsToggle');
        animationsToggle.checked = settings.animations;
        toggleAnimations(settings.animations);
    } else {
        // Default to animations enabled
        const animationsToggle = document.getElementById('animationsToggle');
        animationsToggle.checked = true;
        toggleAnimations(true);
    }
    
        // Load font size
        if (settings.fontSize) {
            const fontBtn = document.querySelector(`[data-size="${settings.fontSize}"]`);
            if (fontBtn) {
                document.querySelectorAll('.font-btn').forEach(btn => btn.classList.remove('active'));
                fontBtn.classList.add('active');
                applyFontSize(settings.fontSize);
            }
        }
        
    
}

document.addEventListener('DOMContentLoaded', () => {
    window.terminalInstance = new Terminal();
    initializeSettings();
});
