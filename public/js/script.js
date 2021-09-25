document.addEventListener('DOMContentLoaded', () => {
    const submitBtn = document.getElementById('text-form-submit')
    const responseText = document.getElementById('response-output')
    submitBtn.addEventListener('click', async () =>{
      const response = await fetch('/.netlify/functions/fetchSubs', {
        method: 'POST',
        body: JSON.stringify({
          brand: document.getElementById("inputSubscription").value()
        })
      }).then(response => response.json())
      responseText.innerText = JSON.stringify(response)
    })
})