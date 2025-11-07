const agentFinderForm = fragmentElement.querySelector('#agentFinderForm');

if (agentFinderForm) {
  agentFinderForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const zipCode = fragmentElement.querySelector('#zipCode').value;
    const productInterest = fragmentElement.querySelector('#productInterest').value;
    
    if (zipCode.length === 5) {
      const params = new URLSearchParams({
        zip: zipCode
      });
      
      if (productInterest) {
        params.append('product', productInterest);
      }
      
      window.location.href = '/find-agent?' + params.toString();
    }
  });
  
  const zipInput = fragmentElement.querySelector('#zipCode');
  if (zipInput) {
    zipInput.addEventListener('input', function(e) {
      this.value = this.value.replace(/\D/g, '').slice(0, 5);
    });
  }
}
