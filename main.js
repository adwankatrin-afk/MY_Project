// بيانات وهمية للفعاليات (سيتم استبدالها بقاعدة بيانات حقيقية في التطبيق النهائي)
const Details_Events = [{
        id: 1,
        title: "تحدي الذكاء",
        date: "2025-11-25",
        time: "18:00",
        location: "ساحة المدينة",
        category: "ألغاز",
        image: "img/ألغاز.png",
        description: "انضم إلينا في  فعالية تحدي الذكاء(شطرنج,حساب ذهني,ألغاز...)",
        featured: true
    },
    {
        id: 2,
        title: "أمسيات شعرية",
        date: "2025-11-26",
        time: "18:00",
        location: "دار الأوبيرا",
        category: "شعر",
        image: "img/امسيات شعرية.png",
        description: "لا تفوّت فرصتك في المشاركة بالأمسية الشعرية و الاستماع إلى أرقى القصائد الشعرية.",
        featured: true
    },
    {
        id: 3,
        title: "حرف تراثية ",
        date: "2025-11-27",
        time: "18:00",
        location: "قلعة دمشق",
        category: "تراث",
        image: "img/تراث.jpg",
        description: "انضم إلى فعالية التراث التي ستقام في قلعة دمشق كي تتعرف على تراث الأجداد العريق",
        featured: true
    },
    {
        id: 4,
        title: "حرف يدوية",
        date: "2025-11-28",
        time: "18:00",
        location: "سوق المهن القديم",
        category: "أعمال",
        image: "img/حرف يدوية.jpg",
        description: "اسرع كي تنضم إلى فعالية الحرف اليدوية(صنع الصلصال,موزاييك,..) و سوف نشهد منافسة بين الفرق",
        featured: true
    },
     {
        id: 5,
        title: "حلويات ",
        date: "2025-11-29",
        time: "18:00",
        location: "شارع القيمرية",
        category: "طعام",
        image: "img/حلويات.jpg",
        description: "شارك في فعالية الأطعمة(صنع الحلويات) للتعرف على أنواع جديدة من الحلويات الشهية",
        featured: true
    },
     {
        id: 6,
        title: "دورات تدريبية علمية ",
        date: "2025-11-30",
        time: "18:00",
        location: " المركز الثقافي",
        category: "دورات",
        image: "img/دورات تدريبية.jpg",
        description: "استغل فرصتك في المشاركة بالدورات التدريبية التي ستقام في مدينتك و لا تفوّت فرصة التعرف على مجالات جديدة مختلفة في الحياة",
        featured: true
    },
    {
        id: 7,
        title: "معرض الفنون البصرية",
        date: "2025-11-31",
        time: "18:00",
        location: " معرض دمشق الدولي",
        category: "فن بصري",
        image: "img/معرض.jpg",
        description: "فعالية معرض الفنون البصرية تفتح المجال للمبدعين بالمشاركة في معرض دمشق الدولي و عرض لوحاتهم لجذب الانتباه",
        featured: false
    },
    {
        id: 8,
        title: "عرض مسرحي",
        date: "2025-12-1",
        time: "18:00",
        location: " مسرح التربية",
        category: "ترفيه",
        image: "img/yy.jpg",
        description: "عرض مسرحي كوميدي من تأليف وإخراج نخبة من الفنانين المحليين يضم مواضيع اجتماعية,ثقافية,سياسية...",
        featured: false
    },
    {
        id: 9,
        title: "أغاني عصرية",
        date: "2025-12-2",
        time: "18:00",
        location: "مهرجان دمشق",
        category: "موسيقى",
        image: "img/موسقى.png",
        description: "ورشة عملية لتعليم أساسيات الرسم والتلوين بتقنيات مختلفة للمبتدئين والمحترفين.",
        featured: false
    }
];

// دالة لعرض الفعاليات البارزة
function FUN_Display() {
    const featuredEventsContainer = document.getElementById('featuredEvents');
    const featuredEvents = Details_Events.filter(event => event.featured);

    featuredEventsContainer.innerHTML = '';

    featuredEvents.forEach(event => {
        const eventCard = `
            <div class="col-md-4 mb-4">
                <div class="card h-100 event-card" data-id="${event.id}">
                    <img src="${event.image}" class="card-img-top" alt="${event.title}">
                    <div class="card-body">
                        <span class="badge bg-primary navbar mb-2">${event.category}</span>
                        <h5 class="card-title">${event.title}</h5>
                        <p class="card-text">${event.description.substring(0, 100)}...</p>
                    </div>
                    <div class="card-footer bg-transparent">
                        <small class="text-muted"><i class="far fa-calendar-alt me-1"></i> ${event.date} | <i class="far fa-clock me-1"></i> ${event.time}</small>
                        <br>
                        <small class="text-muted"><i class="fas fa-map-marker-alt me-1"></i> ${event.location}</small>
                    </div>
                </div>
            </div>
        `;
        featuredEventsContainer.innerHTML += eventCard;
    });

    // إضافة حدث النقر لفتح صفحة التفاصيل
    document.querySelectorAll('.event-card').forEach(card => {
        card.addEventListener('click', () => {
            const eventId = card.getAttribute('data-id');
            window.location.href = `event.html?id=${eventId}`;
        });
    });
}

// دالة لعرض أحدث الفعاليات
function FUN_L() {
    const latestEventsContainer = document.getElementById('latestEvents');
    // نعرض فقط الفعاليات غير البارزة
    const latestEvents = Details_Events.filter(event => !event.featured);

    latestEventsContainer.innerHTML = '';

    latestEvents.forEach(event => {
        const eventCard = `
            <div class="col-md-4 mb-4">
                <div class="card h-100 event-card" data-id="${event.id}">
                    <img src="${event.image}" class="card-img-top" alt="${event.title}">
                    <div class="card-body">
                        <span class="badge bg-primary navbar mb-2">${event.category}</span>
                        <h5 class="card-title">${event.title}</h5>
                        <p class="card-text">${event.description.substring(0, 100)}...</p>
                    </div>
                    <div class="card-footer bg-transparent">
                        <small class="text-muted"><i class="far fa-calendar-alt me-1"></i> ${event.date} | <i class="far fa-clock me-1"></i> ${event.time}</small>
                        <br>
                        <small class="text-muted"><i class="fas fa-map-marker-alt me-1"></i> ${event.location}</small>
                    </div>
                </div>
            </div>
        `;
        latestEventsContainer.innerHTML += eventCard;
    });

    // إضافة حدث النقر لفتح صفحة التفاصيل
    document.querySelectorAll('.event-card').forEach(card => {
        card.addEventListener('click', () => {
            const eventId = card.getAttribute('data-id');
            window.location.href = `event.html?id=${eventId}`;
        });
    });
}

// دالة لتصفية الفعاليات حسب التصنيف
function FUN_O() {
    document.querySelectorAll('.category-filter').forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');
            FL(category);
        });
    });
}

function FL(category) {
    const events = document.querySelectorAll('.event-card');

    events.forEach(event => {
        const eventCategory = event.querySelector('.badge').textContent;

        if (category === 'all' || eventCategory === category) {
            event.parentElement.style.display = 'block';
        } else {
            event.parentElement.style.display = 'none';
        }
    });
}

// دالة للتحقق من صحة النموذج في صفحة اتصل بنا
function FUN_R() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        let isValid = true;
        let errorMessage = '';

        if (name === '') {
            isValid = false;
            errorMessage += 'الاسم مطلوب.<br>';
        }

        if (email === '' || !emailRegex.test(email)) {
            isValid = false;
            errorMessage += 'البريد الإلكتروني غير صحيح.<br>';
        }

        if (message === '') {
            isValid = false;
            errorMessage += 'الرسالة مطلوبة.<br>';
        }

        if (isValid) {
            // إظهار رسالة النجاح باستخدام Bootstrap Alert
            const successAlert = `
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>تم الإرسال بنجاح!</strong> شكراً لتواصلك معنا، سنرد عليك في أقرب وقت.
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            `;
            document.getElementById('formMessages').innerHTML = successAlert;
            form.reset();
        } else {
            // إظهار رسالة الخطأ
            const errorAlert = `
                <div class="alert alert-danger alert-dismissible fade show" role="alert">
                    <strong>خطأ في الإرسال:</strong><br> ${errorMessage}
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            `;
            document.getElementById('formMessages').innerHTML = errorAlert;
        }
    });
}

// تهيئة جميع المكونات عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    // تهيئة الصفحة الرئيسية
    if (document.getElementById('featuredEvents')) {
        FUN_Display();
        FUN_L();
        FUN_O();
    }

    // تهيئة نموذج الاتصال
    FUN_R();

    // تهيئة صفحة تفاصيل الفعالية
    if (document.getElementById('eventDetails')) {
        FUN_W();
    }

    // تهيئة صفحة جميع الفعاليات
    if (document.getElementById('allEvents')) {
        FUN_S();
        FUN_X();
    }
});

// دالة لعرض تفاصيل الفعالية (لصفحة event.html)
function FUN_W() {
    const urlParams = new URLSearchParams(window.location.search);
    const eventId = urlParams.get('id');

    if (!eventId) {
        document.getElementById('eventDetails').innerHTML = `
            <div class="alert alert-danger" role="alert">
                لم يتم العثور على الفعالية المطلوبة.
            </div>
        `;
        return;
    }

    const event = Details_Events.find(e => e.id == eventId);

    if (!event) {
        document.getElementById('eventDetails').innerHTML = `
            <div class="alert alert-danger" role="alert">
                لم يتم العثور على الفعالية المطلوبة.
            </div>
        `;
        return;
    }

    document.getElementById('eventDetails').innerHTML = `
        <div class="row">
            <div class="col-md-8">
                <img src="${event.image}" class="img-fluid rounded mb-4" alt="${event.title}">
                <h1>${event.title}</h1>
                <div class="d-flex align-items-center mb-3">
                    <span class="badge bg-primary me-2">${event.category}</span>
                    <span class="text-muted"><i class="far fa-calendar-alt me-1"></i> ${event.date}</span>
                    <span class="text-muted ms-3"><i class="far fa-clock me-1"></i> ${event.time}</span>
                    <span class="text-muted ms-3"><i class="fas fa-map-marker-alt me-1"></i> ${event.location}</span>
                </div>
                <p>${event.description}</p>
                
                <div class="d-flex mt-4">
                    <button class="btn btn-primary me-2" id="addToCalendar"><i class="far fa-calendar-plus me-1"></i> أضف إلى التقويم</button>
                    <button class="btn btn-outline-primary" id="shareEvent"><i class="fas fa-share-alt me-1"></i> مشاركة</button>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card">
                    <div class="card-header">
                        <h5 class="card-title mb-0">معلومات الفعالية</h5>
                    </div>
                    <div class="card-body">
                        <p><strong>التاريخ:</strong> ${event.date}</p>
                        <p><strong>الوقت:</strong> ${event.time}</p>
                        <p><strong>المكان:</strong> ${event.location}</p>
                        <p><strong>التصنيف:</strong> ${event.category}</p>
                    </div>
                </div>
                
                
                <div class="card mt-4">
                <div class="card-header">
                <h5 class="card-title mb-0">فعاليات ذات صلة</h5>
                <!-- رابط موقع التواصل الاجتماعي -->
               
          </div>
             <div class="card-body">
         <div class="list-group list-group-flush">
      ${FUN_T(event.id, event.category).map(relatedEvent => `
        <a href="event.html?id=${relatedEvent.id}" class="list-group-item list-group-item-action">
          <div class="d-flex w-100 justify-content-between">
            <h6 class="mb-1">${relatedEvent.title}</h6>
            <small>${relatedEvent.date}</small>
          </div>
          <small class="text-muted">${relatedEvent.location}</small>
        </a>`).join('')}
    </div>
    <a href="https://www.instagram.com/events.city_2025?utm_source=qr&igsh=MWhmcWh5cmQzdHZ5eg==" target="_blank" class="text-primary d-block mt-2" style="font-size: 0.9rem;">  فعاليات ذات صلة على Instagram </a>
         </div>
       </div>
  </div>
</div>
    `;
    
    // إضافة أحداث للأزرار
    document.getElementById('addToCalendar')?.addEventListener('click', function() {
        confirm(' تمت الإضافة بنجاح ');
    });
    
    document.getElementById('shareEvent')?.addEventListener('click', function() {
        if (navigator.share) {
            navigator.share({
                title: event.title,
                text: event.description,
                url: window.location.href
            })
            .catch(error => {
                console.log('Error sharing:', error);
            });
        } else {
            alert('مشاركة الرابط: ' + window.location.href);
        }
    });
}

// دالة للحصول على فعاليات ذات صلة
function FUN_T(currentEventId, category) {
    return Details_Events
        .filter(event => event.id != currentEventId && event.category === category)
        .slice(0, 3);
}

// دالة لعرض جميع الفعاليات (لصفحة events.html)
function FUN_S() {
    const eventsContainer = document.getElementById('allEvents');
    
    Details_Events.forEach(event => {
        const eventCard = `
            <div class="col-md-6 col-lg-4 mb-4" data-category="${event.category}">
                <div class="card h-100 event-card" data-id="${event.id}">
                    <img src="${event.image}" class="card-img-top" alt="${event.title}">
                    <div class="card-body">
                        <span class="badge bg-primary mb-2">${event.category}</span>
                        <h5 class="card-title">${event.title}</h5>
                        <p class="card-text">${event.description.substring(0, 100)}...</p>
                    </div>
                    <div class="card-footer bg-transparent">
                        <div class="d-flex justify-content-between align-items-center">
                            <small class="text-muted"><i class="far fa-calendar-alt me-1"></i> ${event.date}</small>
                            <a href="event.html?id=${event.id}" class="btn btn-sm btn-primary">التفاصيل</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
        eventsContainer.innerHTML += eventCard;
    });
}

// دالة لإعداد فلاتر الفعاليات في صفحة events.html
function FUN_X() {
    const categoryFilter = document.getElementById('categoryFilter');
    const dateFilter = document.getElementById('dateFilter');
    const searchInput = document.getElementById('searchInput');
    
    if (categoryFilter) {
        categoryFilter.addEventListener('change', FUN_P);
    }
    
    if (dateFilter) {
        dateFilter.addEventListener('change', FUN_P);
    }
    
    if (searchInput) {
        searchInput.addEventListener('keyup', FUN_P);
    }
}

function FUN_P() {
    const categoryValue = document.getElementById('categoryFilter')?.value || 'all';
    const dateValue = document.getElementById('dateFilter')?.value || '';
    const searchValue = document.getElementById('searchInput')?.value.toLowerCase() || '';
    
    const eventCards = document.querySelectorAll('#allEvents > div');
    
    eventCards.forEach(card => {
        const eventCategory = card.getAttribute('data-category');
        const eventDate = card.querySelector('.card-footer small')?.textContent.split(' ')[1] || '';
        const eventTitle = card.querySelector('.card-title')?.textContent.toLowerCase() || '';
        const eventDescription = card.querySelector('.card-text')?.textContent.toLowerCase() || '';
        
        const categoryMatch = categoryValue === 'all' || eventCategory === categoryValue;
        const dateMatch = !dateValue || eventDate === dateValue;
        const searchMatch = !searchValue || 
                           eventTitle.includes(searchValue) || 
                           eventDescription.includes(searchValue);
        
        if (categoryMatch && dateMatch && searchMatch) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}
function FUN_Q() {
  const fadeElements = document.querySelectorAll('.fade-in');
  
  fadeElements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;
    
    if (elementTop < window.innerHeight - elementVisible) {
      element.classList.add('visible');
    }
  });
}

// تحديث عند التمرير والتحميل
window.addEventListener('scroll', FUN_Q);
window.addEventListener('load', FUN_Q);

// تأثيرات للشريط العلوي عند التمرير
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('navbar-scrolled');
  } else {
    navbar.classList.remove('navbar-scrolled');
  }
});