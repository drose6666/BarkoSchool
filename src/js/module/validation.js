/**
 * Валидация формы
 */

export default class Validation {
   constructor (form, name, phone, email, message) {
      this.$form = document.querySelector(form)
      this.$name = document.querySelector(name)
      this.$phone = document.querySelector(phone)
      this.$email = document.querySelector(email)
      this.$message = document.querySelector(message)
      this.error = false
      

      this.nameRegex = /^[A-zА-я\s_ ][^0-9]+$/; //'[\\w\s]+';
      this.phoneRegex = /^(\s*)?(\+)?([- _():+]?\d[- _():+]?){11,14}(\s*)?$/;
      // this.phoneRegex = /^\+7[\d()\s-]+$/
      this.emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/     

      if (this.$form) this.$fields = this.$form.querySelectorAll(`${form} .field`)
      
      this.sendForm()
   }

   sendForm() {
      if (this.$form) 
         this.$form.addEventListener('submit', (event) => {
            let innerEvent = event
            this.valid(innerEvent)
         })
   }

   valid(innerEvent) {
      // TODO: Name
      if (this.$name) 
         if (this.$name.value.trim() == '')
            this.error(true, this.$name, 'Это обязательное поле', innerEvent)
               else if (!this.nameRegex.test(this.$name.value))
               this.error(true, this.$name, 'Введите корректное имя', innerEvent)
                  else this.error(false, this.$name, '', innerEvent)

      // TODO: Phone
      if (this.$phone)
         if (this.$phone.value.trim() == '')
            this.error(true, this.$phone, 'Это обязательное поле', innerEvent)
            else if (!this.phoneRegex.test(this.$phone.value.trim()))
               this.error(true, this.$phone, 'Введите корректный номер', innerEvent)
               else this.error(false, this.$phone, '', innerEvent)

      // TODO: Email
      if (this.$email)
         if (this.$email.value.trim() == '')
            this.error(true, this.$email, 'Это обязательное поле', innerEvent)
            else if (!this.emailRegex.test(this.$email.value.trim()))
               this.error(true, this.$email, 'Введите корректный E-mail', innerEvent)
               else this.error(false, this.$email, '', innerEvent)

      // TODO: Message
      if (this.$message)
         if (this.$message.value.trim() == '')
            this.error(true, this.$message, 'Это обязательное поле', innerEvent)
            else if (this.$message.value.trim().length > 3000)
               this.error(true, this.$message, 'Не более 3000 символов', innerEvent)
                  else this.error(false, this.$message, '', innerEvent)
   }

   error(error, input, message, innerEvent) {
      let parent = input.parentNode
      let errorMessage = parent.querySelector('.error-message')

      if (errorMessage)
         errorMessage.innerHTML = message

      // console.log(error);
      if (error) {
         innerEvent.preventDefault()
         parent.classList.add('error')
      } else {
         parent.classList.remove('error')
      }
   }
}