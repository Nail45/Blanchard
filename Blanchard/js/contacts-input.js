document.addEventListener("DOMContentLoaded", function () {
  const validation = new JustValidate('.contacts__form');
  const selector = document.querySelector("input[name='tel']");
  const im = new Inputmask("+7 (999)-999-99-99");
  im.mask(selector);


  validation
    .addField("input[name='name']", [{
      rule: 'minLength',
      value: 3,
      errorMessage: "Вы не ввели имя"
    },
    {
      rule: 'maxLength',
      value: 15,
      errorMessage: "Имя не может содержать более 15 символовов"
    },
    {
      rule: 'required',
      errorMessage: 'Как вас зовут?'
    },


    ])
    .addField("input[type='tel']", [{
      rule: "function",
      validator: function (name, value) {
        const phone = selector.inputmask.unmaskedvalue();
        return phone.length === 10
      },
      errorMessage: 'Вы не ввели телефон',
    }]);
})
