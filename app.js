document.addEventListener('DOMContentLoaded', function(){

    let layoutHeader = document.querySelector('.layout-header');
    let layoutMainUpper = document.querySelector('.layout-main-upper');
    let layoutText = document.querySelector('.layout-text');
    let layoutImages = document.querySelector('.layout-images');
    let layoutMainLower = document.querySelector('.layout-main-lower')
    let layoutLowerDiv = document.querySelector('.layout-lower-div');
    let layoutFooter = document.querySelector('.layout-footer');

    function renderHeader() {
        layoutHeader.innerHTML += `
            <img class="layout-header-image" src="images/logo-agencia-m3.png" alt="Logo da Agência M3">
            <div class="layout-header-text-wrapper">
                <h2 class="layout-header-text">Serviços</h2>
                <h2 class="layout-header-text">Blog</h2>
                <h2 class="layout-header-text">Clientes</h2>
                <h2 class="layout-header-text contato">Contato</h2>
            <div/>
        `
    }
    
    function renderLayoutMainUpper() {
        layoutMainUpper.innerHTML += `
            <img class="layout-main-upper-background" src="images/layout-main-upper-background.png" alt="Logo da M3">
            <img class="layout-main-upper-image" src="images/layout-main-upper-image.png" alt="Imagem principal da Div superior">
            <h2 class="layout-main-upper-text">Mais um evento de sucesso!</h2>
            `
    }

    function renderLayoutText() {
        layoutText.innerHTML = `
            <p class="layout-paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 
            the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into e
            lectronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more r
            ecently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 🚀</p>
            `
    }

    renderHeader();
    renderLayoutMainUpper();
    renderLayoutText();



});