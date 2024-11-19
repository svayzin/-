// модальное окно
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.querySelector('.modal-overlay');
    const openModalBtns = document.querySelectorAll('.modal-open-btn');
    const closeModalBtns = document.querySelectorAll('.modal-close-btn');
    const form = document.querySelector('.modal-form');
    // Открытие модального окна при клике на кнопку с классом .modal-open-btn
    openModalBtns.forEach(function(btn) {
      btn.addEventListener('click', function() {
        modal.style.display = "flex";
      });
    });
    // Закрытие модального окна при клике на крестик
    closeModalBtns.forEach(function(btn) {
      btn.addEventListener('click', function() {
        modal.style.display = "none";
      });
    });
    // Закрытие модального окна при отправке формы
    form.addEventListener('submit', function(e) {
      e.preventDefault(); // Останавливает отправку формы
      modal.style.display = "none"; // Закрытие модального окна
    });
  });
  


// для формы модального окна
document.addEventListener('DOMContentLoaded', function () {
    const phoneInput = document.querySelector('.modal-input-number');
  
    // Добавляем "+7" при фокусе
    phoneInput.addEventListener('focus', function () {
      if (!phoneInput.value) {
        phoneInput.value = '+7';
      }
      phoneInput.setSelectionRange(2, 2); // Устанавливаем курсор после "+7"
    });
    // Очищаем поле, если оно пустое, при потере фокуса
    phoneInput.addEventListener('blur', function () {
      if (phoneInput.value === '+7') {
        phoneInput.value = '';
      }
    });
    // Обрабатываем ввод, разрешая только цифры после "+7"
    phoneInput.addEventListener('input', function () {
      const value = phoneInput.value;
      // Если пользователь пытается удалить "+7", возвращаем его
      if (!value.startsWith('+7')) {
        phoneInput.value = '+7';
      }
      // Оставляем только цифры после "+7"
      const numbersOnly = value.slice(2).replace(/\D/g, '');
      phoneInput.value = '+7' + numbersOnly;
    });
    // Блокируем удаление "+7"
    phoneInput.addEventListener('keydown', function (e) {
      if (phoneInput.selectionStart <= 2 && (e.key === 'Backspace' || e.key === 'Delete')) {
        e.preventDefault();
      }
    });
  });
  
  