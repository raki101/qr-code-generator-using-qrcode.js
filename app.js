const form = document.getElementById('form');
const qr = document.getElementById('qrcode');

const onGenerateSubmit = (e) =>{
    e.preventDefault();

    clearUI();
    const url = document.getElementById('url').value;
    const size = document.getElementById('size').value;

    if(url === '') 
    {
        alert('please enter a url');
    }
    else{
        showspinner()

        setTimeout(()=>{
            hidespinner()

            generateQRcode(url,size)
        },1000)
    }
    
}

const clearUI = () => {
    qr.innerHTML = "";
}

const generateQRcode = (url,size) =>{
    const qrcode = new QRCode('qrcode',{
        text:url,
        width:size,
        height:size,
    })
}
const showspinner = () =>{
    document.getElementById('spinner').style.display='block'
}

const hidespinner = () =>{
    document.getElementById('spinner').style.display='none'
};

hidespinner();

form.addEventListener('submit',onGenerateSubmit);