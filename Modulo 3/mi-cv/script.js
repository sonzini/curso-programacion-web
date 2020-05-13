document.addEventListener("DOMContentLoaded", function () {
    const actionsWrapper = document.getElementsByClassName('actions-wrapper')[0];
    const button = actionsWrapper.getElementsByTagName('button')[0];
    const modal = document.getElementById('mi-modal');

    button.addEventListener('click', buttonActions)
    
    function mostrarModal() {
        modal.style.display = "flex";
    }

    function alerta() {
        alert('ola')
    }

    function buttonActions() {
        mostrarModal();
        alerta();
    }

    const miModalButton = document.getElementsByClassName('mi-modal-actions')[0].children[0];

    miModalButton.addEventListener('click', ocultarModal)

    function ocultarModal() {
        modal.style.display = "none";
    }

    // const modal = document.getElementById('modal1');
    // const sidenav = document.getElementById('slide-out');

    // const modalIntance = M.Modal.init(modal);
    // M.Sidenav.init(sidenav);


    // setTimeout(() => {
    //     modalIntance.open();
    // }, 2000)
});
