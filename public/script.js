(() => {
  const toggle = document.querySelector('.menu-toggle')
  const nav = document.querySelector('#main-nav')
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') === 'true'
      toggle.setAttribute('aria-expanded', String(!open))
      toggle.setAttribute('aria-label', open ? 'Open navigation' : 'Close navigation')
      nav.classList.toggle('is-open', !open)
      document.body.classList.toggle('menu-open', !open)
    })
    nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded', 'false')
      toggle.setAttribute('aria-label', 'Open navigation')
      nav.classList.remove('is-open')
      document.body.classList.remove('menu-open')
    }))
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        toggle.setAttribute('aria-expanded', 'false')
        toggle.setAttribute('aria-label', 'Open navigation')
        nav.classList.remove('is-open')
        document.body.classList.remove('menu-open')
      }
    })
  }
  document.querySelectorAll('[data-year]').forEach((el) => { el.textContent = String(new Date().getFullYear()) })

  const form = document.querySelector('#enquiry-form')
  if (form) {
    const params = new URLSearchParams(window.location.search)
    const requestedService = params.get('service')
    const serviceSelect = form.querySelector('#service')
    if (requestedService && serviceSelect) {
      const matchingOption = Array.from(serviceSelect.options).find((option) => option.text.toLowerCase() === requestedService.toLowerCase())
      if (matchingOption) serviceSelect.value = matchingOption.value
    }
    form.addEventListener('submit', (event) => {
      event.preventDefault()
      const error = form.querySelector('#form-error')
      error.textContent = ''
      if (!form.reportValidity()) {
        error.textContent = 'Please check the highlighted fields and try again.'
        return
      }
      const data = new FormData(form)
      const message = [
        'Hello Chryselda Building Construction, I would like to enquire about a project.',
        '',
        `Name: ${data.get('name')}`,
        `Phone: ${data.get('phone')}`,
        data.get('email') ? `Email: ${data.get('email')}` : '',
        `Project type: ${data.get('service')}`,
        `Project details: ${data.get('message')}`,
      ].filter(Boolean).join('\n')
      window.open(`https://wa.me/27870959230?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer')
    })
  }
})()
