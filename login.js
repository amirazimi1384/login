function showTab(tabId, tabElement) {
    // پنهان کردن همه فرم‌ها
    const forms = document.querySelectorAll('.form-container');
    forms.forEach(form => {
      form.classList.remove('active');
    });
  
    // غیر فعال کردن همه تب‌ها
    const tabs = document.querySelectorAll('.tabs .tab');
    tabs.forEach(tab => {
      tab.classList.remove('active');
    });
  
    // نمایش فرم انتخابی
    const selectedForm = document.getElementById(tabId);
    if (selectedForm) {
      selectedForm.classList.add('active');
    }
  
    // فعال کردن تب انتخابی
    tabElement.classList.add('active');
  }
  