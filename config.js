// קובץ הגדרות ראשי - פרידמן & שטיינברג
// כאן עורכים את התוכן של האתר ללא צורך לגעת בקוד המורכב

const SITE_CONFIG = {
    // הגדרות כלליות
    general: {
        webhookUrl: "https://hook.us2.make.com/z09t6n76b8iefs6a3yhrpaf9sjndnkqd", // הקישור לאוטומציה שלך
        phone: "052-3670092",
        phoneDisplay: "052-3670092"
    },

    // תוכן בעברית
    he: {
        chatWelcome: "שלום, כאן הצוות הדיגיטלי של פרידמן & שטיינברג.<br>כדי שנוכל לסייע במהירות המירבית, אנא בחר את נושא הפנייה:",
        // רשימת הכפתורים בצ'אט - ניתן להוסיף/להסיר שורות
        options: [
            { text: '🛑 מכולה מעוכבת בנמל', val: 'מכולה מעוכבת' },
            { text: '📄 דרישת גירעון / קנס', val: 'גירעון מכס' },
            { text: '⚖️ חקירה / זימון למכס', val: 'חקירה פלילית' },
            { text: '🚢 ייעוץ שילוח / אחר', val: 'אחר' }
        ],
        askName: "מובן. אנחנו מטפלים במקרים כאלו בדיוק. <br>על מנת שנוכל לבדוק את התיק, <strong>איך קוראים לך?</strong>",
        askPhone: "נעים מאוד {name}.<br>כדי שעורך דין יחזור אליך עם הערכת מצב ראשונית, <strong>מה הנייד שלך?</strong>",
        success: "<strong>הפנייה התקבלה בהצלחה!</strong><br>פרטיך הועברו ישירות לעו\"ד צביקה שטיינברג ולעו\"ד ברק פרידמן. נחזור אליך בהקדם האפשרי.",
        error: "אירעה שגיאה בשליחה, אנא חייג אלינו ישירות.",
        loadingText: "מעבד נתונים...",
        callButtonText: "חייג דחוף עכשיו",
        callButtonTextRegular: "חייג: 052-3670092"
    },

    // תוכן בערבית
    ar: {
        chatWelcome: "أهلاً بك في مكتب فريدمان & شتينبرغ.<br>لكي نتمكن من المساعدة بأسرع وقت، يرجى اختيار نوع القضية:",
        options: [
            { text: '🛑 حاوية محجوزة في الميناء', val: 'حاوية محجوزة' },
            { text: '📄 مطالبة عجز / غرامة', val: 'عجز جمركي' },
            { text: '⚖️ تحقيق / استدعاء للجمارك', val: 'تحقيق جنائي' },
            { text: '🚢 استشارة شحن / آخر', val: 'آخر' }
        ],
        askName: "مفهوم. نحن نعالج مثل هذه الحالات بالضبط.<br>لكي نتمكن من فحص الملف، <strong>ما هو اسمك الكريم؟</strong>",
        askPhone: "تشرفنا يا {name}.<br>لكي يقوم المحامي بالاتصال بك لتقييم الوضع الأولي، <strong>ما هو رقم هاتفك؟</strong>",
        success: "<strong>تم استلام الطلب بنجاح!</strong><br>تم تحويل التفاصيل مباشرة إلى المحامين. سنعود إليك في أقرب وقت ممكن.",
        error: "حدث خطأ في الإرسال، يرجى الاتصال بنا مباشرة.",
        loadingText: "جاري المعالجة...",
        callButtonText: "اتصال عاجل الآن",
        callButtonTextRegular: "اتصل: 052-3670092"
    }
};