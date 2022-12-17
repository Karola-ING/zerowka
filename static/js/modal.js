const showActor = document.querySelectorAll('.showDialog');

showActor.forEach(showDialog =>{
    showDialog.addEventListener('click', ()=>{
        let index = showDialog.id
        let favDialog = document.getElementById('actor'+index)
        favDialog.showModal();
        let cancelBtn = document.getElementById('cancelBtn'+index)
        cancelBtn.addEventListener('click', () =>{
            favDialog.close();
        })
    })

})