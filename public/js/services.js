
////////////////////////// Services /////////////////////////////////

// frontend view btn
const frontendView=document.querySelector('.frontend-view')

frontendView.addEventListener('click',()=>{
  document.querySelector('.frontend-modal').classList.add('service-modal-class') 
})

// backend view btn
const backendView=document.querySelector('.backend-view')

backendView.addEventListener('click',()=>{
  document.querySelector('.backend-modal').classList.add('service-modal-class') 
})


// btn to cancel service-modal 
const cancelModals=document.querySelectorAll('.cancel-modal')

cancelModals.forEach((cancelBtn)=>{
  cancelBtn.addEventListener('click',()=>{
    const allServiceModal=document.querySelectorAll('.service-modal')
    allServiceModal.forEach((serModal)=>{
      serModal.classList.remove('service-modal-class')
    })
  })
})