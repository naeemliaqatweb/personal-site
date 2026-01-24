// Project data
const projectData = {
    // PHP Projects
    creditFixers: {
        title: "Credits Fixers - Role Management System",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
        category: "php",
        client: "AreSync IT Consultant",
        duration: "Ongoing",
        description: "Comprehensive role management system with Admin, Company, and Agent roles for credit repair services.",
        technologies: [
            { name: "PHP", color: "purple" },
            { name: "MySQL", color: "orange" },
            { name: "JavaScript", color: "yellow" },
            { name: "Bootstrap", color: "purple" }
        ],
        features: [
            "Three-tier role system: Admin, Company, Agent",
            "Customer request management",
            "Admin control panel for user management",
            "Company and agent performance tracking",
            "Secure authentication system"
        ],
        liveUrl: "https://www.creditsfixer.com/",
        sourceUrl: "https://github.com/naeemliaqatweb/created_fixer"
    },
    onlineClothStore: {
        title: "Online Cloth Store - E-commerce",
        image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800",
        category: "php",
        client: "Self Project",
        duration: "1 month",
        description: "E-commerce clothing store built with core PHP featuring comprehensive shopping functionality.",
        technologies: [
            { name: "PHP", color: "purple" },
            { name: "MySQL", color: "orange" },
            { name: "JavaScript", color: "yellow" },
            { name: "Bootstrap", color: "purple" }
        ],
        features: [
            "Product categories and catalog",
            "Shopping cart and checkout",
            "Payment gateway integration",
            "Coupon code system",
            "Order history and tracking",
            "Product reviews and ratings"
        ],
        liveUrl: "http://www.ecommercelaravel.000webhostapp.com/",
        sourceUrl: "https://github.com/naeemliaqatweb/eCom-en-laravel"
    },
    onlineDoctor: {
        title: "Online Doctor Appointment System",
        image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=800",
        category: "php",
        client: "Local Client",
        duration: "1 month",
        description: "Platform for booking doctor appointments online with approval workflow and notifications.",
        technologies: [
            { name: "PHP", color: "purple" },
            { name: "MySQL", color: "orange" },
            { name: "JavaScript", color: "yellow" },
            { name: "Bootstrap", color: "purple" }
        ],
        features: [
            "User and doctor registration",
            "Appointment booking system",
            "Admin approval workflow",
            "Email notifications",
            "Doctor management panel"
        ],
        liveUrl: "#",
        sourceUrl: "https://github.com/naeemliaqatweb/doctor_search"
    },
    onlineGrocery: {
        title: "Online Grocery Store - E-commerce",
        image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800",
        category: "php",
        client: "University Project",
        duration: "3 months",
        description: "E-commerce platform for grocery delivery with recommendation system and membership benefits.",
        technologies: [
            { name: "PHP", color: "purple" },
            { name: "MySQL", color: "orange" },
            { name: "JavaScript", color: "yellow" },
            { name: "Bootstrap", color: "purple" }
        ],
        features: [
            "Product recommendation system",
            "Membership discounts",
            "Order tracking",
            "User reviews and suggestions",
            "Advanced search and filtering"
        ],
        liveUrl: "http://www.ecomgrocerystore.com/",
        sourceUrl: "https://github.com/naeemliaqatweb/ecomphp"
    },
    onlineLaptop: {
        title: "Online Laptop Installment Store",
        image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800",
        category: "php",
        client: "Local Client",
        duration: "2 weeks",
        description: "E-commerce platform for laptop installment purchases with payment plan calculations.",
        technologies: [
            { name: "PHP", color: "purple" },
            { name: "MySQL", color: "orange" },
            { name: "JavaScript", color: "yellow" },
            { name: "Bootstrap", color: "purple" }
        ],
        features: [
            "Installment calculation panel",
            "Product catalog",
            "Checkout with COD & credit card",
            "Order history",
            "Payment plan management"
        ],
        liveUrl: "#",
        sourceUrl: "#"
    },

    // Laravel Projects
    arcadeGame: {
        title: "Arcade Game with Tatum API",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800",
        category: "laravel",
        client: "Brown Tech Company",
        duration: "2 months",
        description: "Arcade game platform using Tatum API for BNB transactions. Players can purchase game sessions, play games, and top winners receive rewards in BNB.",
        technologies: [
            { name: "Laravel", color: "red" },
            { name: "Tatum API", color: "blue" },
            { name: "MySQL", color: "orange" },
            { name: "JavaScript", color: "yellow" },
            { name: "BNB Blockchain", color: "yellow" }
        ],
        features: [
            "User registration with Tatum BNB account creation",
            "Game session purchase system",
            "BNB balance display for users",
            "Real-time leaderboard showing top 10 players",
            "Admin panel for game management",
            "Automated reward distribution to top 3 winners",
            "Secure BNB transactions between user and admin accounts"
        ],
        liveUrl: "https://reading.brownetech.com/",
        sourceUrl: "#"
    },
    bookPublish: {
        title: "Book Publishing Platform",
        image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800",
        category: "laravel",
        client: "Brown Tech Company",
        duration: "2 days",
        description: "Comprehensive book publishing platform with role-based access for admins, authors, and designers.",
        technologies: [
            { name: "Laravel", color: "red" },
            { name: "MySQL", color: "orange" },
            { name: "Bootstrap", color: "purple" }
        ],
        features: [
            "Admin role: Add authors/designers, approve books, update profiles",
            "Author role: Add books, track pending/publish status",
            "Designer role: Add designs, track approval status",
            "Notification system for admins",
            "Book status management (pending, approved, published)"
        ],
        liveUrl: "#",
        sourceUrl: "#"
    },
    bookingSystem: {
        title: "Room Booking System",
        image: "assets/images/Booking-page.png",
        category: "laravel",
        client: "Self Project",
        duration: "1 month",
        description: "A comprehensive room booking system built with Laravel. Users can search and book small, medium, or large rooms and corridors. Includes user authentication and an admin panel for room management and order history.",
        technologies: [
            { name: "Laravel", color: "red" },
            { name: "MySQL", color: "orange" },
            { name: "JavaScript", color: "yellow" },
            { name: "Bootstrap", color: "purple" }
        ],
        features: [
            "User Authentication (Login/Register)",
            "Room Search & Filtering (Small, Medium, Large, Corridors)",
            "Room Booking Flow",
            "Admin Panel: Add Rooms & Manage Inventory",
            "Order History & Management"
        ],
        liveUrl: "#",
        sourceUrl: "#"
    },

    // Yii2 Projects
    asboEstates: {
        title: "Asbo Estates - Real Estate Platform",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800",
        category: "yii2",
        client: "Real Estate Client",
        duration: "3 months",
        description: "Yii2-based real estate platform specializing in property sales and rentals with advanced search and management features.",
        technologies: [
            { name: "Yii2", color: "blue" },
            { name: "MySQL", color: "orange" },
            { name: "jQuery", color: "blue" },
            { name: "Bootstrap", color: "purple" }
        ],
        features: [
            "Property listing management",
            "Advanced search and filtering",
            "User registration and favorites",
            "Admin dashboard for property management",
            "Responsive design for all devices"
        ],
        liveUrl: "https://asboestates.com/",
        sourceUrl: "#"
    },

    // WordPress Projects
    tarriconeInvestigazioni: {
        title: "Tarricone Investigazioni - Security Intervention",
        image: "assets/images/Home-Tarricone-Investigazioni-01-23-2026_09_48_PM.png",
        category: "wordpress",
        client: "Tarricone Investigazioni",
        duration: "Project Based",
        description: "Comprehensive security intervention to restore site access, free up disk space, and identify root causes of storage issues. Included malware removal and safe plugin updates.",
        technologies: [
            { name: "WordPress", color: "blue" },
            { name: "PHP", color: "purple" },
            { name: "MySQL", color: "orange" },
            { name: "Security Tools", color: "red" }
        ],
        features: [
            "Restore site access & disk space cleanup",
            "Root cause analysis of storage issues",
            "Prevention guidance & security hardening",
            "Safe plugin updates",
            "Malware removal"
        ],
        liveUrl: "https://tarriconeinvestigazioni.com/",
        sourceUrl: "#"
    },
    pldLiteracy: {
        title: "PLD Literacy - WooCommerce PDF Store",
        image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800",
        category: "wordpress",
        client: "Company Project",
        duration: "Ongoing",
        description: "WooCommerce-based platform specializing in selling PDF products with advanced customization and optimization.",
        technologies: [
            { name: "WordPress", color: "blue" },
            { name: "WooCommerce", color: "purple" },
            { name: "PHP", color: "purple" },
            { name: "JavaScript", color: "yellow" }
        ],
        features: [
            "Custom PDF product delivery system",
            "License key management",
            "Custom Gutenberg blocks",
            "Email validation before registration",
            "Performance optimization with caching",
            "Custom checkout process"
        ],
        liveUrl: "https://pld-literacy.org/",
        sourceUrl: "#"
    },
    advancedTool: {
        title: "Advanced Tool - Drill E-commerce",
        image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800",
        category: "wordpress",
        client: "Company Project",
        duration: "2 months",
        description: "WooCommerce-powered eCommerce website specializing in drill sales with multiple payment options.",
        technologies: [
            { name: "WordPress", color: "blue" },
            { name: "WooCommerce", color: "purple" },
            { name: "Elementor Pro", color: "blue" },
            { name: "Authorize.Net", color: "green" }
        ],
        features: [
            "Product catalog with multiple drill categories",
            "Authorize.Net and COD payment integration",
            "Elementor Pro designed pages",
            "Responsive design",
            "Advanced product filtering"
        ],
        liveUrl: "https://advancedtool.com/",
        sourceUrl: "#"
    },
    bellasephina: {
        title: "Bellasephina - Beauty E-commerce",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800",
        category: "wordpress",
        client: "Company Project",
        duration: "1.5 months",
        description: "WordPress WooCommerce-based eCommerce website for beauty products with enhanced checkout and shipping.",
        technologies: [
            { name: "WordPress", color: "blue" },
            { name: "WooCommerce", color: "purple" },
            { name: "FunnelKit", color: "purple" },
            { name: "Astra Theme", color: "blue" }
        ],
        features: [
            "FunnelKit checkout optimization",
            "Custom shipping rules by category",
            "Astra theme customization",
            "Staging to live migration",
            "Image watermarking and download protection"
        ],
        liveUrl: "https://bellasephina.com/",
        sourceUrl: "#"
    },
    getgaea: {
        title: "GetGaea - WooCommerce Customization",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800",
        category: "wordpress",
        client: "Company Project",
        duration: "1 month",
        description: "Customized WooCommerce plugin for enhanced functionality and user experience on the product shop page.",
        technologies: [
            { name: "WordPress", color: "blue" },
            { name: "WooCommerce", color: "purple" },
            { name: "PHP", color: "purple" },
            { name: "JavaScript", color: "yellow" }
        ],
        features: [
            "Dynamic product pricing",
            "Optimized Add to Cart functionality",
            "Subscription discount integration",
            "Redesigned shop page layout",
            "Enhanced pricing display logic"
        ],
        liveUrl: "https://getgaea.com/",
        sourceUrl: "#"
    },

    // WordPress Plugins
    ttcChatBot: {
        title: "TTC Chat Bot Plugin",
        image: "assets/images/AI-ChatBot.png",
        category: "wordpress-plugins",
        client: "Trade Travel Chill",
        duration: "Ongoing",
        description: "The TTC Chat Bot Plugin integrates a customizable AI-powered chatbot into your website, allowing users to interact with an intelligent assistant for text-based responses. Built using PHP and Bootstrap 5, the plugin provides a seamless experience for both site admins and users.",
        technologies: [
            { name: "PHP", color: "purple" },
            { name: "Bootstrap 5", color: "purple" },
            { name: "WordPress", color: "blue" },
            { name: "OpenAI API", color: "green" },
            { name: "Node.js", color: "green" },
            { name: "Stripe", color: "blue" }
        ],
        features: [
            "Admin Panel: Configure API endpoints, membership permissions, and customization",
            "Customizable Appearance: Chatbot color, text, position, and dark/light mode",
            "Frontend Chatbot: Interactive chat window with AI responses",
            "User History: Saves message history and offers ongoing conversations",
            "Token-Based System: Stripe integration for token purchases to continue chatting"
        ],
        liveUrl: "assets/videos/ttc-bot-plugin.mp4",
        sourceUrl: "#"
    },
    invitedUsersPlugin: {
        title: "Invited Users Plugin",
        image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800",
        category: "wordpress-plugins",
        client: "PLD Literacy",
        duration: "Ongoing",
        description: "The User Invitation Plugin is designed to allow existing users to invite others to access subscription-based content, specifically purchased PDF books. This feature fosters collaboration by enabling shared access to subscribed resources.",
        technologies: [
            { name: "PHP", color: "purple" },
            { name: "Bootstrap 5", color: "purple" },
            { name: "WordPress", color: "blue" }
        ],
        features: [
            "Invitation System: Invite multiple individuals via email",
            "Access Sharing: Invited users gain access to the inviter's subscription content",
            "Invite Limits: Admin-controlled limits on invitations per user",
            "Dynamic Email Templates: Customizable invitation emails with dynamic content",
            "Registration Flow: Seamless registration for new users via invitation links"
        ],
        liveUrl: "assets/videos/invited-users-plugin.mp4",
        sourceUrl: "#"
    },
    printingLogsPlugin: {
        title: "Printing Logs Plugin",
        image: "https://images.unsplash.com/photo-1562564055-71e051d33c19?w=800",
        category: "wordpress-plugins",
        client: "PLD Literacy",
        duration: "Ongoing",
        description: "The Printing Log Plugin enhances user experience by tracking and reporting printed product activity. It logs details such as email, IP address, product, and time when a user prints a PDF book.",
        technologies: [
            { name: "PHP", color: "purple" },
            { name: "Bootstrap 5", color: "purple" },
            { name: "jQuery DataTables", color: "blue" },
            { name: "WordPress", color: "blue" },
            { name: "Select2", color: "yellow" }
        ],
        features: [
            "Activity Logging: Tracks print actions with user and product details",
            "Reporting Interface: Admin dashboard with date range filters",
            "Insights: View total printed counts and popular products",
            "Data Analysis: Analyze user behavior and product trends",
            "Responsive Design: Built with Bootstrap 5 for all devices"
        ],
        liveUrl: "assets/videos/printing-logs.mp4",
        sourceUrl: "#"
    },
    webinar: {
        title: "Webinar LMS Platform",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800",
        category: "wordpress",
        client: "Company Project",
        duration: "2 months",
        description: "WordPress-based LMS platform with structured online learning, payment integration, and membership controls.",
        technologies: [
            { name: "WordPress", color: "blue" },
            { name: "LMS Plugin", color: "purple" },
            { name: "Stripe", color: "green" },
            { name: "Elementor", color: "blue" }
        ],
        features: [
            "MS LMS Plugin & Stripe integration",
            "Dual login system (UID & paid registration)",
            "Course progression with sequential unlocking",
            "Custom video delivery upon completion",
            "Membership & content restriction"
        ],
        liveUrl: "https://webinar.tradetravelchill.club/",
        sourceUrl: "#"
    },

    // MERN Stack Projects
    imagify: {
        title: "Imagify – AI Image Generator",
        image: "https://images.unsplash.com/photo-1643330683233-ff2ac89b002c?w=800",
        category: "mern",
        client: "Personal Project",
        duration: "3 months",
        description: "AI-powered web application that generates images from text prompts using the ClipDrop API. Built with the MERN stack.",
        technologies: [
            { name: "MongoDB", color: "green" },
            { name: "Express.js", color: "yellow" },
            { name: "React", color: "cyan" },
            { name: "Node.js", color: "green" },
            { name: "ClipDrop API", color: "blue" }
        ],
        features: [
            "Text-to-image generation using AI",
            "User authentication and profile management",
            "Image gallery for generated images",
            "Download and share functionality",
            "Responsive design for all devices"
        ],
        liveUrl: "#",
        sourceUrl: "https://github.com/naeemliaqatweb/imagify_mern"
    },
    meshop: {
        title: "MEshop – MERN E-commerce",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800",
        category: "mern",
        client: "Personal Project",
        duration: "4 months",
        description: "Full-featured E-commerce web application built using the MERN stack with product management and payment integration.",
        technologies: [
            { name: "MongoDB", color: "green" },
            { name: "Express.js", color: "yellow" },
            { name: "React", color: "cyan" },
            { name: "Node.js", color: "green" },
            { name: "Stripe", color: "purple" }
        ],
        features: [
            "Product catalog with categories and filters",
            "Shopping cart and checkout process",
            "User authentication and profile management",
            "Payment integration with Stripe",
            "Order history and tracking",
            "Admin dashboard for product management"
        ],
        liveUrl: "#",
        sourceUrl: "https://github.com/naeemliaqatweb/mern-ecommerce"
    },
    edumaster: {
        title: "EduMaster – Online Course Platform",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800",
        category: "mern",
        client: "Personal Project",
        duration: "5 months",
        description: "Dynamic online course web application built using the MERN stack with video streaming and progress tracking.",
        technologies: [
            { name: "MongoDB", color: "green" },
            { name: "Express.js", color: "yellow" },
            { name: "React", color: "cyan" },
            { name: "Node.js", color: "green" },
            { name: "Video.js", color: "blue" }
        ],
        features: [
            "Course catalog with categories",
            "Video streaming and progress tracking",
            "User enrollment and certificate generation",
            "Instructor dashboard for course management",
            "Payment integration for course purchases",
            "Review and rating system for courses"
        ],
        liveUrl: "#",
        sourceUrl: "https://github.com/naeemliaqatweb/mern-online-course-e-learning-educational"
    }
};

// Function to render projects based on category
function renderProjects(category = 'all') {
    const projectsGrid = document.getElementById('projects-grid');
    projectsGrid.innerHTML = '';

    const filteredProjects = Object.entries(projectData).filter(([key, project]) =>
        category === 'all' || project.category === category
    );

    filteredProjects.forEach(([key, project], index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card rounded-2xl p-6 cursor-pointer floating-card opacity-0 transform translate-y-4';
        projectCard.style.animationDelay = `${index * 0.1}s`;

        projectCard.innerHTML = `
                    <div class="h-48 bg-gradient-to-br from-${getCategoryColor(project.category)}-500 to-${getCategoryColor(project.category)}-600 rounded-xl mb-6 flex items-center justify-center relative overflow-hidden">
                        <div class="absolute inset-0 bg-[url('${project.image}')] bg-cover bg-center opacity-70"></div>
                        <div class="text-4xl z-10 animate-float" style="animation-delay: -${index}s;">${getCategoryIcon(project.category)}</div>
                        <div class="absolute top-2 right-2 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-full text-xs text-white">
                            ${getCategoryLabel(project.category)}
                        </div>
                    </div>
                    <h3 class="text-xl font-semibold mb-3">${project.title}</h3>
                    <p class="text-gray-400 mb-4 line-clamp-3">${project.description.substring(0, 120)}...</p>
                    <div class="flex flex-wrap gap-2 mb-4">
                        ${project.technologies.slice(0, 3).map(tech =>
            `<span class="bg-${tech.color}-600/20 text-${tech.color}-300 px-2 py-1 rounded text-xs">${tech.name}</span>`
        ).join('')}
                        ${project.technologies.length > 3 ? `<span class="text-gray-400 text-xs">+${project.technologies.length - 3} more</span>` : ''}
                    </div>
                    <button class="text-blue-400 hover:text-blue-300 font-medium hover:scale-105 transition-transform">View Details →</button>
                `;

        projectCard.addEventListener('click', () => openProjectModal(key));
        projectsGrid.appendChild(projectCard);

        // Animate in
        setTimeout(() => {
            projectCard.style.opacity = '1';
            projectCard.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Helper functions
function getCategoryColor(category) {
    const colors = {
        'laravel': 'red',
        'yii2': 'blue',
        'wordpress': 'blue',
        'mern': 'green',
        'php': 'purple'
    };
    return colors[category] || 'blue';
}

function getCategoryIcon(category) {
    const icons = {
        'laravel': '🅻',
        'yii2': '🌊',
        'wordpress': '🌐',
        'mern': '📚',
        'php': '🐘'
    };
    return icons[category] || '💻';
}

function getCategoryLabel(category) {
    const labels = {
        'laravel': 'Laravel',
        'yii2': 'Yii2',
        'wordpress': 'WordPress',
        'mern': 'MERN Stack',
        'php': 'PHP'
    };
    return labels[category] || 'Web Dev';
}

// Thunder light effect function
function showThunderLight() {
    const thunderLight = document.getElementById('thunderLight');
    thunderLight.classList.add('animate-thunder');

    setTimeout(() => {
        thunderLight.classList.remove('animate-thunder');
    }, 3000);
}

// Create lightning effect between blocks
function createLightning() {
    // Randomly decide if we should show a big flash or small lightning
    if (Math.random() > 0.7) {
        showThunderLight();
    }

    const cubes = document.querySelectorAll('.cube');
    if (cubes.length < 2) return;

    // Remove existing lightning
    document.querySelectorAll('.lightning').forEach(el => el.remove());

    // Create multiple lightning bolts for storm effect
    const boltCount = Math.floor(Math.random() * 3) + 1;

    for (let i = 0; i < boltCount; i++) {
        // Create lightning between random cubes
        const cube1 = cubes[Math.floor(Math.random() * cubes.length)];
        const cube2 = cubes[Math.floor(Math.random() * cubes.length)];

        if (cube1 && cube2 && cube1 !== cube2) {
            const rect1 = cube1.getBoundingClientRect();
            const rect2 = cube2.getBoundingClientRect();

            const x1 = rect1.left + rect1.width / 2;
            const y1 = rect1.top + rect1.height / 2;
            const x2 = rect2.left + rect2.width / 2;
            const y2 = rect2.top + rect2.height / 2;

            const length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
            const angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;

            const lightning = document.createElement('div');
            lightning.className = 'lightning animate-thunder';
            lightning.style.width = `${Math.random() * 2 + 1}px`;
            lightning.style.height = `${length}px`;
            lightning.style.left = `${x1}px`;
            lightning.style.top = `${y1}px`;
            lightning.style.transform = `rotate(${angle}deg)`;
            lightning.style.opacity = '0';
            lightning.style.filter = `blur(${Math.random() * 2}px)`;

            document.body.appendChild(lightning);

            // Animate the lightning
            setTimeout(() => {
                lightning.style.opacity = `${Math.random() * 0.5 + 0.5}`;
                setTimeout(() => {
                    lightning.style.opacity = '0';
                    setTimeout(() => lightning.remove(), 1000);
                }, 100 + Math.random() * 200);
            }, i * 100);
        }
    }
}

// Create rain drops for a section
function createRainDrops(containerId, count = 30) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // Clear existing rain drops
    container.innerHTML = '';

    // Create new rain drops
    for (let i = 0; i < count; i++) {
        const drop = document.createElement('div');
        drop.className = 'rain-drop animate-rain';
        drop.style.left = `${Math.random() * 100}%`;
        drop.style.animationDelay = `${Math.random() * 2}s`;
        drop.style.animationDuration = `${0.5 + Math.random() * 1}s`;
        container.appendChild(drop);
    }
}

// Project filtering function
function showProjects(category) {
    // Update active tab
    document.querySelectorAll('.project-tab').forEach(tab => {
        tab.classList.remove('active');
        tab.classList.remove('bg-gradient-to-r', 'from-blue-600', 'to-purple-600');
        tab.classList.add('bg-white/10', 'backdrop-blur-sm', 'border', 'border-white/20');
    });

    const activeTab = document.querySelector(`.project-tab[data-category="${category}"]`);
    if (activeTab) {
        activeTab.classList.add('active');
        activeTab.classList.remove('bg-white/10', 'backdrop-blur-sm', 'border', 'border-white/20');
        activeTab.classList.add('bg-gradient-to-r', 'from-blue-600', 'to-purple-600');
    }

    // Show thunder light effect
    showThunderLight();

    // Create lightning between blocks
    createLightning();

    // Render projects
    renderProjects(category);
}

// Mobile menu toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('-translate-x-full');
});

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('-translate-x-full');
    });
});

// Smooth scrolling
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}

// Smooth scroll for navigation links
document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            // Show thunder light effect
            showThunderLight();

            // Create lightning between blocks
            createLightning();

            setTimeout(() => {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }, 300);
        }
    });
});

// Project modal functions
function openProjectModal(projectId) {
    const modal = document.getElementById('projectModal');
    const project = projectData[projectId];

    if (!project) return;

    // Populate modal content
    document.getElementById('modalTitle').textContent = project.title;

    const imageContainer = document.getElementById('modalImageContainer');

    // Check if liveUrl is a video
    if (project.liveUrl && project.liveUrl.endsWith('.mp4')) {
        // Create video element if it doesn't exist or replace image
        let videoElement = document.getElementById('modalVideo');
        if (!videoElement) {
            videoElement = document.createElement('video');
            videoElement.id = 'modalVideo';
            videoElement.className = 'w-full h-64 object-cover rounded-xl';
            videoElement.controls = true;
            imageContainer.appendChild(videoElement);
        }

        // Hide image, show video
        const imgElement = document.getElementById('modalImage');
        if (imgElement) imgElement.style.display = 'none';

        videoElement.src = project.liveUrl;
        videoElement.style.display = 'block';

        // Hide the overlay div for video
        const overlay = imageContainer.querySelector('div.absolute');
        if (overlay) overlay.style.display = 'none';
    } else {
        // Show image, hide video
        const imgElement = document.getElementById('modalImage');
        if (imgElement) {
            imgElement.src = project.image;
            imgElement.style.display = 'block';
        }

        const videoElement = document.getElementById('modalVideo');
        if (videoElement) {
            videoElement.pause();
            videoElement.style.display = 'none';
        }

        // Show the overlay div for image
        const overlay = imageContainer.querySelector('div.absolute');
        if (overlay) overlay.style.display = 'block';
    }

    document.getElementById('modalDescription').textContent = project.description;
    document.getElementById('modalCategory').textContent = getCategoryLabel(project.category);
    document.getElementById('modalClient').textContent = project.client;
    document.getElementById('modalDuration').textContent = project.duration;

    // Populate technologies
    const techContainer = document.getElementById('modalTechnologies');
    techContainer.innerHTML = '';
    project.technologies.forEach(tech => {
        const span = document.createElement('span');
        span.className = `bg-${tech.color}-600/20 text-${tech.color}-300 px-3 py-1 rounded-full text-sm`;
        span.textContent = tech.name;
        techContainer.appendChild(span);
    });

    // Populate features
    const featuresContainer = document.getElementById('modalFeatures');
    featuresContainer.innerHTML = '';
    project.features.forEach(feature => {
        const li = document.createElement('li');
        li.className = 'flex items-start';
        li.innerHTML = `<span class="text-green-400 mr-2">✓</span>${feature}`;
        featuresContainer.appendChild(li);
    });

    // Set up button URLs
    const liveDemoBtn = document.getElementById('liveDemoBtn');
    const sourceCodeBtn = document.getElementById('sourceCodeBtn');

    // Update Live Demo button text and behavior based on content type
    if (project.liveUrl && project.liveUrl.endsWith('.mp4')) {
        liveDemoBtn.innerHTML = '▶ Play Video';
        liveDemoBtn.onclick = function () {
            const videoElement = document.getElementById('modalVideo');
            if (videoElement) {
                videoElement.play();
            }
        };
    } else {
        liveDemoBtn.innerHTML = '🔗 View Live Demo';
        liveDemoBtn.onclick = function () {
            if (project.liveUrl && project.liveUrl !== '#') {
                window.open(project.liveUrl, '_blank');
            }
        };
    }

    sourceCodeBtn.onclick = function () {
        if (project.sourceUrl && project.sourceUrl !== '#') {
            window.open(project.sourceUrl, '_blank');
        }
    };

    // Show modal
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = 'auto';

    // Pause video if playing
    const videoElement = document.getElementById('modalVideo');
    if (videoElement) {
        videoElement.pause();
    }
}

// Close modal on backdrop click
document.getElementById('projectModal').addEventListener('click', (e) => {
    if (e.target.id === 'projectModal') {
        closeProjectModal();
    }
});

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeProjectModal();
    }
});

function downloadResume(event) {
    // Path to your PDF file
    const resumePath = "./assets/NaeemLiaqat-1-25.pdf";

    // Create a temporary <a> element for download
    const a = document.createElement('a');
    a.href = resumePath;
    a.download = 'Naeem_Liaqat_Resume.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    // Show download confirmation
    const originalText = event.target.innerHTML;
    event.target.innerHTML = '✅ Downloaded!';
    event.target.style.background = 'linear-gradient(45deg, #10b981, #059669)';

    setTimeout(() => {
        event.target.innerHTML = originalText;
        event.target.style.background = '';
        event.target.className = event.target.className;
    }, 2000);
}

// Typing animation
function setupTypingAnimation() {
    const textElement = document.getElementById('typing-text');
    const texts = [
        "Software Engineer",
        "PHP Developer",
        "Laravel Developer",
        "Yii Developer",
        "Wordpress Developer",
        "React Developer",
        "Bootstrap Developer",
        "MUI Developer",
        "Tailwind Developer",
        "JavaScript Developer",
        "Full Stack Developer"
    ];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingDelay = 100;
    let deletingDelay = 50;
    let pauseDelay = 1500;

    function type() {
        const currentText = texts[textIndex];

        if (isDeleting) {
            textElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typingDelay = deletingDelay;
        } else {
            textElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typingDelay = 100;
        }

        if (!isDeleting && charIndex === currentText.length) {
            typingDelay = pauseDelay;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typingDelay = 500;
        }

        setTimeout(type, typingDelay);
    }

    // Start the typing animation
    setTimeout(type, 1000);
}

// Initialize projects on page load
document.addEventListener('DOMContentLoaded', function () {
    renderProjects('all');
    setupTypingAnimation();

    // Create rain drops for all sections
    createRainDrops('home-rain-container', 40);
    createRainDrops('about-rain-container', 30);
    createRainDrops('projects-rain-container', 40);
    createRainDrops('contact-rain-container', 30);

    // Show thunder light effect on page load
    setTimeout(showThunderLight, 1000);

    // Create random lightning effects periodically
    setInterval(createLightning, 5000);

    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
});
