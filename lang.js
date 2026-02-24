const translations = {
    en: {
        // Nav & Global
        lang_name: "English",
        nav_home: "Home",
        nav_policy: "Leave Policy",
        nav_manual: "Employee Manual",
        nav_calc: "Leave Calculator",
        footer_text: "© Wuerth Thailand. Internal Use Only.",
        
        // Home Section
        home_title: "Employee Service",
        home_subtitle: "Welcome to the employee information and benefits system",
        contact_title: "Contact Channels",
        btn_change_pass: "Change Admin Password",
        btn_edit_contact: "Edit Contact",
        contact_desc: "If you have any questions or encounter any problems, you can contact us directly.",
        btn_save: "Save",
        announcement_title: "HR Announcements",
        announcement_topic_label: "Topic:",
        announcement_body_label: "Content:",
        
        // Policy Section
        policy_sub: "Company Leave Policies and Regulations",
        vac_title: "Annual Vacation Leave",
        vac_cond: "General Conditions",
        vac_cond_1: "<span class='font-semibold text-gray-900'>New Employee:</span> Pro-rated after passing probation",
        vac_cond_2: "<span class='font-semibold text-gray-900'>Probation Period:</span> Can only be used in <span class='underline text-red-800'>Emergency</span> cases",
        vac_cond_3: "<span class='font-semibold text-gray-900'>Leave Carry Forward:</span> Max 5 days (must be used within the first 4 months of the next year)",
        vac_table_title: "Leave Entitlement Table",
        vac_yr_1: "Service < 2 years",
        vac_yr_2: "Service 2 - < 5 years",
        vac_yr_3: "Service \u2265 5 years / Mgmt",
        vac_day_14: "14 Days",
        vac_day_17: "17 Days",
        vac_day_19: "19 Days",
        vac_rule_title: "Leave Request Rules",
        vac_rule_1: "<span class='font-semibold text-gray-900'>Leave < 5 days:</span> Submit at least 5 days in advance",
        vac_rule_2: "<span class='font-semibold text-gray-900'>Leave \u2265 5 days:</span> Submit 2 weeks in advance",
        vac_rule_3: "<span class='font-semibold text-gray-900'>Emergency Leave:</span> 3 days/year (Notify before 10:00 AM)",
        
        sick_title: "Sick & Medical Leave",
        sick_day_text: "Days / Year<br/>Paid",
        sick_rule_1: "Sick leave for <span class='font-bold text-gray-900'>\u2265 3 consecutive days</span> requires a medical certificate",
        sick_rule_2: "In case of Hospital Admission, notify your manager and submit a medical certificate",
        sick_rule_3: "Notify your manager or HR before <span class='font-bold text-gray-900'>10:00 AM</span> on the day of leave",
        sick_warn_title: "Caution",
        sick_warn_text: "Improper use of leave rights or exceeding entitlements may result in deduction of leave days or being considered as Leave without pay for those days.",
        
        spec_title: "Special & Family Leave",
        spec_mat: "Maternity Leave",
        spec_mat_1: "• Max <strong>98 days</strong>",
        spec_mat_2: "• Paid for 45 days",
        spec_mat_3: "• Request 4 weeks prior",
        spec_mar: "Marriage Leave",
        spec_mar_1: "• <strong>3 days</strong> entitlement",
        spec_mar_2: "• Service \u2265 1 year",
        spec_mar_3: "• Attach marriage cert.",
        spec_pat: "Paternity Leave",
        spec_pat_1: "• <strong>5 days/child</strong>",
        spec_pat_2: "• Max 3 children",
        spec_pat_3: "• Attach birth cert.",
        spec_fun: "Funeral Leave",
        spec_fun_1: "• <strong>3 days</strong> entitlement",
        spec_fun_2: "• 10,000 THB assistance",
        spec_fun_3: "• Parents, Spouse, Child",
        
        oth_title: "Other Leaves",
        oth_edu_title: "Self-Development & Exams",
        oth_edu_1: "Must provide exam registration evidence",
        oth_edu_2: "6 days/year",
        oth_ster_title: "Sterilization Leave",
        oth_ster_1: "As specified in medical certificate",
        oth_ster_2: "Max 5 days",
        oth_mil_title: "Military Service Leave",
        oth_mil_1: "Call-up for military training",
        oth_mil_2: "60 days",
        oth_monk_title: "Monkhood Leave",
        oth_monk_1: "Subject to service years and company rules",
        oth_monk_2: "By Law",
        oth_warn_1: "Exceeding or improperly using leave rights will result in deduction of annual vacation or Leave without Pay.",
        oth_warn_2: "All types of leave must be <span class='font-bold underline'>approved by the supervisor and senior management</span>.",

        // Manual Section (Main Titles)
        manual_sub: "Wuerth (Thailand) Co., Ltd. (Version 3.3 Brief)",
        ch1_title: "Employment Contract",
        ch2_title: "Working Hours",
        ch3_title: "Termination of Employment",
        ch4_title: "Medical Benefits",
        ch5_title: "Special Allowances",
        ch6_title: "Salary Administration",
        ch7_title: "Business Ethics",
        ch8_title: "Rules and Regulations",
        ch9_title: "Grievance Procedure",
        
        // Calculator Section
        calc_sub: "Check your entitlement based on tenure and policy",
        calc_date_label: "Start Date",
        calc_today: "Today:",
        calc_tenure: "Tenure:",
        btn_calc: "Calculate Leave",
        calc_ph_title: "Please specify start date",
        calc_ph_desc: "The system will automatically calculate your leave entitlement.",
        calc_unit: "Days",
        calc_desc: "Your Annual Vacation Leave Entitlement",
        calc_detail_title: "Details",
        
        // Modals & Placeholders
        login_title: "Admin Console",
        placeholder_user: "Username",
        placeholder_pass: "Password",
        btn_login: "Login",
        new_post_title: "Add New Announcement",
        post_topic_label: "Topic",
        placeholder_topic: "Enter topic...",
        post_content_label: "Content",
        btn_post: "Post Announcement",
        change_pass_title: "Change Admin Password",
        new_user_label: "New Username:",
        new_pass_label: "New Password:",
        btn_save_pass: "Save New Password",
        
        // Dynamic JS Strings
        pin_badge: "Pinned",
        hidden_admin: "Hidden (Admin only)",
        pin: "Pin",
        unpin: "Unpin",
        edit: "Edit",
        show: "Show",
        hide: "Hide",
        delete: "Delete",
        btn_saving: "Saving...",
        btn_save_edit: "Save Changes",
        alert_no_topic: "Please enter a topic",
        confirm_delete: "Are you sure you want to delete this announcement?",
        alert_error: "Error: ",
        alert_fill_all: "Please fill in all fields",
        btn_checking: "Checking...",
        alert_login_fail: "Invalid Username or Password",
        confirm_pass: "Are you sure you want to change the admin password?",
        alert_pass_success: "Password changed successfully!",
        calc_invalid_date_badge: "Invalid Date",
        calc_invalid_date_msg: "<span class='text-red-600 font-bold'>Cannot select a future date</span><br>Please select your start date again",
        calc_probation_badge: "Probation Period",
        calc_probation_msg: "Your tenure is {days} days <br> According to company policy, employees are entitled to annual leave only after passing probation (119 days).",
        calc_prorate_badge: "Less than 1 year (Pro-rate)",
        calc_prorate_msg: "Probation passed ({days} days) <br> Entitled to pro-rated leave based on 14 days <br><br> Formula: ({days} / 365) × 14 = {raw} days",
        calc_1_2_badge: "1 - < 2 Years",
        calc_1_2_msg: "You are entitled to 14 days of annual leave as you have reached 1 year of service.",
        calc_2_5_badge: "2 - < 5 Years",
        calc_2_5_msg: "You are entitled to 17 days of annual leave based on your service years.",
        calc_5_up_badge: "5 Years and above",
        calc_5_up_msg: "You are entitled to the maximum of 19 days of annual leave based on your service years."
    },
    th: {
        // Nav & Global
        lang_name: "ไทย",
        nav_home: "หน้าหลัก",
        nav_policy: "สิทธิการลา",
        nav_manual: "คู่มือพนักงาน",
        nav_calc: "คำนวณสิทธิวันลา",
        footer_text: "© Wuerth Thailand. Internal Use Only.",
        
        // Home Section
        home_title: "Employee Service",
        home_subtitle: "ยินดีต้อนรับสู่ระบบบริการข้อมูลพนักงานและสวัสดิการ",
        contact_title: "ช่องทางการติดต่อ",
        btn_change_pass: "เปลี่ยนรหัสแอดมิน",
        btn_edit_contact: "แก้ไขการติดต่อ",
        contact_desc: "หากมีข้อสงสัย คำถามเพิ่มเติม หรือพบปัญหาใด ๆ สามารถติดต่อสอบถามได้โดยตรง",
        btn_save: "บันทึก",
        announcement_title: "ประกาศจากฝ่ายบุคคล",
        announcement_topic_label: "หัวข้อประกาศ:",
        announcement_body_label: "เนื้อหา:",
        
        // Policy Section
        policy_sub: "ระเบียบการลาประเภทต่างๆ ของบริษัท",
        vac_title: "สิทธิวันหยุดพักผ่อนประจำปี",
        vac_cond: "เงื่อนไขทั่วไป",
        vac_cond_1: "<span class='font-semibold text-gray-900'>พนักงานใหม่:</span> ได้สิทธิแบบเฉลี่ย (Pro-rate) หลังผ่านทดลองงาน",
        vac_cond_2: "<span class='font-semibold text-gray-900'>ช่วงทดลองงาน:</span> ใช้สิทธิได้เฉพาะกรณี <span class='underline text-red-800'>ฉุกเฉิน</span> เท่านั้น",
        vac_cond_3: "<span class='font-semibold text-gray-900'>โอนวันลา:</span> ได้สูงสุด 5 วัน (ใช้ภายใน 4 เดือนแรกของปีถัดไป)",
        vac_table_title: "ตารางสิทธิวันลา",
        vac_yr_1: "อายุงาน < 2 ปี",
        vac_yr_2: "อายุงาน 2 - < 5 ปี",
        vac_yr_3: "อายุงาน \u2265 5 ปี / บริหาร",
        vac_day_14: "14 วัน",
        vac_day_17: "17 วัน",
        vac_day_19: "19 วัน",
        vac_rule_title: "ระเบียบการยื่นใบลา",
        vac_rule_1: "<span class='font-semibold text-gray-900'>ลา < 5 วัน:</span> ยื่นล่วงหน้าอย่างน้อย 5 วัน",
        vac_rule_2: "<span class='font-semibold text-gray-900'>ลา \u2265 5 วัน:</span> ยื่นล่วงหน้า 2 สัปดาห์",
        vac_rule_3: "<span class='font-semibold text-gray-900'>ลากิจฉุกเฉิน:</span> 3 วัน/ปี (แจ้งก่อน 10.00 น.)",
        
        sick_title: "วันลาป่วย & รักษาพยาบาล",
        sick_day_text: "วัน / ปี<br/>ที่ได้รับ<br/>ค่าจ้างปกติ",
        sick_rule_1: "ลาป่วยติดต่อกัน <span class='font-bold text-gray-900'>\u2265 3 วัน</span> ต้องแนบใบรับรองแพทย์",
        sick_rule_2: "กรณี Admit รพ. ต้องแจ้งหัวหน้าและส่งใบรับรองแพทย์",
        sick_rule_3: "แจ้งหัวหน้า หรือ HR ก่อนเวลา <span class='font-bold text-gray-900'>10.00 น.</span> ของวันที่ลา",
        sick_warn_title: "ข้อควรระวัง",
        sick_warn_text: "การใช้สิทธิผิดวิธีหรือเกินสิทธิ วันลาอาจถูกหัก หรือพิจารณาเป็นการลาโดยไม่ได้รับค่าจ้าง (Leave without pay) ในวันที่ลานั้นๆ",
        
        spec_title: "วันลาพิเศษ & ครอบครัว",
        spec_mat: "ลาคลอด (หญิง)",
        spec_mat_1: "• สูงสุด <strong>98 วัน</strong>",
        spec_mat_2: "• รับค่าจ้าง 45 วัน",
        spec_mat_3: "• ยื่นขอ 4 สัปดาห์ก่อนลา",
        spec_mar: "ลาแต่งงาน",
        spec_mar_1: "• ได้ <strong>3 วัน</strong>",
        spec_mar_2: "• อายุงาน \u2265 1 ปี",
        spec_mar_3: "• แนบใบสำคัญการสมรส",
        spec_pat: "ลาดูแลบุตร (ชาย)",
        spec_pat_1: "• ได้ <strong>5 วัน/บุตร</strong>",
        spec_pat_2: "• สูงสุด 3 คน",
        spec_pat_3: "• ต้องแนบสูติบัตร",
        spec_fun: "งานศพ",
        spec_fun_1: "• ได้ <strong>3 วัน</strong>",
        spec_fun_2: "• เงินช่วย 10,000 บาท",
        spec_fun_3: "• พ่อ, แม่, คู่สมรส, บุตร",
        
        oth_title: "การลาอื่นๆ",
        oth_edu_title: "การพัฒนาตนเอง & สุขภาพ",
        oth_edu_1: "ต้องมีหลักฐานการสมัครสอบ",
        oth_edu_2: "6 วัน/ปี",
        oth_ster_title: "ลาทำหมัน",
        oth_ster_1: "ตามระยะเวลาในใบรับรองแพทย์",
        oth_ster_2: "สูงสุด 5 วัน",
        oth_mil_title: "หน้าที่พลเมือง & ศาสนา",
        oth_mil_1: "เรียกพลเพื่อฝึกวิชาทหาร",
        oth_mil_2: "60 วัน",
        oth_monk_title: "ลาบวช",
        oth_monk_1: "ตามอายุงานและระเบียบบริษัท",
        oth_monk_2: "ตามกฎหมาย",
        oth_warn_1: "การใช้สิทธิเกิน หรือไม่ถูกต้อง จะถูกหักวันหยุดพักผ่อนหรือเป็นการลาไม่รับค่าจ้าง (Leave without Pay)",
        oth_warn_2: "การลาทุกประเภทต้องได้รับ <span class='font-bold underline'>อนุมัติจากหัวหน้างานและฝ่ายบริหารอาวุโส</span>",

        // Manual Section
        manual_sub: "บริษัท เวือร์ท (ประเทศไทย) จำกัด (เวอร์ชั่น 3.3 ฉบับย่อ)",
        ch1_title: "สัญญาจ้างแรงงาน",
        ch2_title: "ชั่วโมงทำงาน",
        ch3_title: "การออกจากการเป็นพนักงานบริษัท",
        ch4_title: "สวัสดิการรักษาพยาบาล",
        ch5_title: "ผลตอบแทนพิเศษ",
        ch6_title: "การบริหารจัดการเงินเดือน",
        ch7_title: "จริยธรรมทางธุรกิจ",
        ch8_title: "กฎระเบียบและข้อบังคับ",
        ch9_title: "กระบวนการร้องทุกข์",
        
        // Calculator Section
        calc_sub: "ตรวจสอบสิทธิตามอายุงานและนโยบายบริษัท",
        calc_date_label: "วันที่เริ่มงาน",
        calc_today: "วันนี้:",
        calc_tenure: "อายุงาน:",
        btn_calc: "คำนวณสิทธิ",
        calc_ph_title: "กรุณาระบุวันที่เริ่มงาน",
        calc_ph_desc: "ระบบจะคำนวณสิทธิวันลาตามระเบียบให้คุณอัตโนมัติ",
        calc_unit: "วัน",
        calc_desc: "สิทธิวันหยุดพักผ่อนประจำปีของคุณ",
        calc_detail_title: "รายละเอียด",
        
        // Modals & Placeholders
        login_title: "Admin Console",
        placeholder_user: "Username",
        placeholder_pass: "Password",
        btn_login: "เข้าสู่ระบบ",
        new_post_title: "เพิ่มประกาศใหม่",
        post_topic_label: "หัวข้อประกาศ",
        placeholder_topic: "ใส่หัวข้อเรื่อง...",
        post_content_label: "เนื้อหา",
        btn_post: "โพสต์ประกาศ",
        change_pass_title: "เปลี่ยนรหัสผ่าน Admin",
        new_user_label: "Username ใหม่:",
        new_pass_label: "Password ใหม่:",
        btn_save_pass: "บันทึกรหัสผ่านใหม่",
        
        // Dynamic JS Strings
        pin_badge: "ปักหมุด",
        hidden_admin: "ซ่อนอยู่ (Admin เห็นเท่านั้น)",
        pin: "ปักหมุด",
        unpin: "เลิกปักหมุด",
        edit: "แก้ไข",
        show: "แสดง",
        hide: "ซ่อน",
        delete: "ลบ",
        btn_saving: "กำลังบันทึก...",
        btn_save_edit: "บันทึกการแก้ไข",
        alert_no_topic: "กรุณาใส่หัวข้อ",
        confirm_delete: "ต้องการลบประกาศนี้ใช่หรือไม่?",
        alert_error: "เกิดข้อผิดพลาด: ",
        alert_fill_all: "กรุณากรอกข้อมูลให้ครบถ้วน",
        btn_checking: "กำลังตรวจสอบ...",
        alert_login_fail: "Username หรือ Password ไม่ถูกต้อง",
        confirm_pass: "คุณแน่ใจหรือไม่ว่าจะเปลี่ยนรหัสผ่านแอดมิน?",
        alert_pass_success: "เปลี่ยนรหัสผ่านสำเร็จ!",
        calc_invalid_date_badge: "วันที่ไม่ถูกต้อง",
        calc_invalid_date_msg: "<span class='text-red-600 font-bold'>ไม่สามารถเลือกวันที่ในอนาคตได้</span><br>กรุณาเลือกวันที่เริ่มงานใหม่อีกครั้ง",
        calc_probation_badge: "ช่วงทดลองงาน (Probation)",
        calc_probation_msg: "อายุงานของคุณคือ {days} วัน <br> ตามระเบียบบริษัท พนักงานจะได้รับสิทธิวันหยุดพักผ่อนประจำปีหลังจากผ่านช่วงทดลองงาน (119 วัน) แล้วเท่านั้น",
        calc_prorate_badge: "อายุงานไม่ถึง 1 ปี (Pro-rate)",
        calc_prorate_msg: "ผ่านช่วงทดลองงานแล้ว (อายุงาน {days} วัน) <br> ได้รับสิทธิตามสัดส่วนจากฐาน 14 วัน <br><br> สูตร: ({days} / 365) × 14 = {raw} วัน",
        calc_1_2_badge: "อายุงาน 1 - < 2 ปี",
        calc_1_2_msg: "คุณได้รับสิทธิวันหยุดพักผ่อนประจำปีตามปกติ 14 วัน เนื่องจากมีอายุงานครบ 1 ปีขึ้นไป",
        calc_2_5_badge: "อายุงาน 2 - < 5 ปี",
        calc_2_5_msg: "คุณได้รับสิทธิวันหยุดพักผ่อนประจำปีเพิ่มขึ้นเป็น 17 วัน ตามอายุงาน",
        calc_5_up_badge: "อายุงาน 5 ปีขึ้นไป",
        calc_5_up_msg: "คุณได้รับสิทธิวันหยุดพักผ่อนประจำปีสูงสุด 19 วัน ตามอายุงาน"
    }
};

// ฟังก์ชันดึงคำแปลไปใช้ใน Javascript (รองรับการส่งตัวแปร {param})
function t(key, params = {}) {
    let lang = localStorage.getItem('wurth_lang') || 'th';
    let str = (translations[lang] && translations[lang][key]) ? translations[lang][key] : key;
    for (let k in params) {
        str = str.replace(`{${k}}`, params[k]);
    }
    return str;
}

// ฟังก์ชันสำหรับตั้งค่าภาษาใหม่
function setLanguage(lang) {
    localStorage.setItem('wurth_lang', lang);
    
    // อัปเดตข้อความบนปุ่มเลือกภาษา
    const btnText = document.getElementById('current-lang-text');
    if (btnText) {
        btnText.innerText = lang === 'en' ? 'English' : 'ไทย';
    }

    // ทำการเปลี่ยน Text ตาม attribute 'data-i18n' (รองรับ Tag HTML ด้านใน)
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    // ทำการเปลี่ยน Placeholder ใน Input
    const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
    placeholders.forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });

    // สั่งให้เครื่องคิดเลขคำนวณและดึงข้อความใหม่มาแสดง (ถ้ากรอกวันไปแล้ว)
    if(typeof calculateLeave === 'function' && document.getElementById('start-date').value) {
        calculateLeave();
    }
    
    // โหลดโพสต์ใหม่เพื่อให้ปุ่มเครื่องมือแอดมินและป้ายกำกับเปลี่ยนภาษา
    if(typeof renderPosts === 'function' && window.currentPostsData) {
        renderPosts(window.currentPostsData);
    }

    // ปิดเมนูภาษาหลังจากเลือกเสร็จ
    const langMenu = document.getElementById('lang-menu');
    if(langMenu) langMenu.classList.add('hidden');
    
    // Render icon ใหม่เผื่อโดน innerHTML ทับ
    if (typeof lucide !== 'undefined') lucide.createIcons();
}

// ตรวจสอบภาษาตอนโหลดหน้าเว็บ
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('wurth_lang') || 'th';
    setLanguage(savedLang);
});
