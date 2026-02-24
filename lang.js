// พจนานุกรมคำแปล (สามารถเพิ่มเติมคำแปลส่วนอื่นๆ ของหน้าเว็บได้ที่นี่)
const translations = {
    en: {
        lang_name: "English",
        nav_home: "Home",
        nav_policy: "Leave Policy",
        nav_manual: "Employee Manual",
        nav_calc: "Leave Calculator",
        home_title: "Employee Service",
        home_subtitle: "Welcome to employee information and benefits system",
        contact_title: "Contact Channels",
        contact_desc: "If you have any questions or encounter any problems, you can contact us directly.",
        announcement_title: "HR Announcements"
    },
    th: {
        lang_name: "English", // แสดงคำว่า English เพื่อให้กดสลับกลับได้ง่าย ตาม UX ทั่วไป (หรือแก้เป็น "ไทย" ได้)
        nav_home: "หน้าหลัก",
        nav_policy: "สิทธิการลา",
        nav_manual: "คู่มือพนักงาน",
        nav_calc: "คำนวณสิทธิ",
        home_title: "Employee Service", // คงชื่อภาษาอังกฤษไว้ตามต้นฉบับ
        home_subtitle: "ยินดีต้อนรับสู่ระบบบริการข้อมูลพนักงานและสวัสดิการ",
        contact_title: "ช่องทางการติดต่อ",
        contact_desc: "หากมีข้อสงสัย คำถามเพิ่มเติม หรือพบปัญหาใด ๆ สามารถติดต่อสอบถามได้โดยตรง",
        announcement_title: "ประกาศจากฝ่ายบุคคล"
    }
};

// ฟังก์ชันสำหรับตั้งค่าภาษาใหม่
function setLanguage(lang) {
    // บันทึกภาษาลง LocalStorage
    localStorage.setItem('wurth_lang', lang);
    
    // อัปเดตข้อความบนปุ่ม
    const btnText = document.getElementById('current-lang-text');
    if (btnText) {
        // ให้ปุ่มแสดงผลเป็นชื่อภาษาที่กำลังใช้งานอยู่
        btnText.innerText = lang === 'en' ? 'English' : 'ไทย';
    }

    // ทำการเปลี่ยน Text ตาม attribute 'data-i18n'
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerText = translations[lang][key];
        }
    });

    // ปิดเมนูภาษาหลังจากเลือกเสร็จ
    const langMenu = document.getElementById('lang-menu');
    if(langMenu) langMenu.classList.add('hidden');
}

// ตรวจสอบภาษาตอนโหลดหน้าเว็บ
document.addEventListener('DOMContentLoaded', () => {
    // เช็คว่าเคยเลือกภาษาไว้ไหม ถ้าไม่ให้ใช้ 'th' เป็นค่าเริ่มต้น
    const savedLang = localStorage.getItem('wurth_lang') || 'th';
    setLanguage(savedLang);
});
