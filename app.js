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

    function renderLayoutImages() {
        layoutImages.innerHTML = `
            <img class="layout-images-1" src="images/cozy-peepo.gif" alt="Pepe agasalhado">
            <img class="layout-images-2" src="images/pepe-pepocheer.gif" alt="Pepe torcedor">
            <img class="layout-images-3" src="images/pepe-ride-dog.gif" alt="Pepe no cachorro">    
        `
    }

    function renderLayoutMainLower() {
        layoutMainLower.innerHTML = `
            <img class="layout-main-lower-m3-logo" src="images/logo-agencia-m3-cinza.png" alt="Logo da Agência M3">
            <div class="layout-main-lower-text">
                <h2 class="layout-main-lower-ola">olá!</h2>
                <h2 class="layout-main-lower-numero">+55 11 9999 9999</h2>
                <p class="layout-main-lower-email">m3academy@digitalm3.com.br</p>
                <h3 class="layout-main-lower-localizacao">NOVA FRIBURGO</h3>
                <p class="layout-main-lower-paragraph">+55 99999999</p>      
            </div>
        `
    }

    function renderLayoutLowerDiv() {
        layoutLowerDiv.innerHTML = `
            <img class="layout-lower-div-google" src="images/google-partner.png" alt="Logo do Google Partner">
            <img class="layout-lower-div-e-commerce" src="images/e-commerce.png" alt="E-Commerce Brasil">
            <img class="layout-lower-div-m3-logo" src="images/logo-agencia-m3-cinza.png" alt="Logo da Agência M3">
        `
    }

    function renderLayoutFooter() {
        layoutFooter.innerHTML = `
            <h3 class="layout-footer-site">WWW.DIGITALM3.COM.BR</h3>
            <div class="layout-footer-logos">
                <img class="layout-footer-logo" src="images/logo-facebook.png" alt="Logo do Facebook">
                <img class="layout-footer-logo" src="images/logo-instagram.png" alt="Logo do Instagram">
                <img class="layout-footer-logo" src="images/logo-linkedin.png" alt="Logo do Linkedin">
            </div>
        `
    }

    renderHeader();
    renderLayoutMainUpper();
    renderLayoutText();
    renderLayoutImages();
    renderLayoutMainLower();
    renderLayoutLowerDiv();
    renderLayoutFooter();



});