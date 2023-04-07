document.addEventListener('alpine:init', () => {
  Alpine.data('App', () => ({
      create: function() {
        alert("ok")
      }
  }))
})