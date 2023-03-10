//onSubmit()
/* <form> etiketinin içinde onSubmit() eventi: form submit olduğunda nne yapacağımızı söyler .
bizde buraada submitfunction() fonksiyonumuzun çalışmasını istedik*/

//onChange()
/**onChange: Form'un içindeki form elementlerinin(input) value'su her değiştiğinde bu değişen 
 * value'yu bizim her defasında elde etmemize olanak sağlayan eventtir. */

//autocomplate="on"
/** autocomplete = Ingilizce isminden de anlaşılacağı üzere formunuzda otomatik tamamlama özelliğini açıp 
 * veya kapatmak için işinize yarar. Bu özelliği açmak daha önceki entry'lerinize göre formun tamamlama yapmasını sağlayacaktır. */

//NOVALIDATE: 
/*novalidate = Aktif olduğu sürece gönderdiğiniz form datanızın otomatik olarak doğrulanmamasını söyler.*/

/*FORMUN YENİLENMESİNİ ENGELLEYEN event.preventDefault() //default işlemi engelledik*/
let formDOM = document.querySelector("#myForm") //form >userformun userform etketi
formDOM.addEventListener('submit',formSubmit) //userformun>submit etiketine fonksiyon tanımladı

function formSubmit(event){//
    event.preventDefault() //default işlemi engelledik
    console.log("islem gerçekleşti")
}
/*FORMUN YENİLENMESİNİ ENGELLEYEN event.preventDefault() //default işlemi engelledik*/


function submitFunction() {
    let firstnameDOM = document.getElementById("firstname").value //firstname id li dokümanın valuesini( içindeki bilgi) aldık
    
    console.log(firstnameDOM)
    alert(firstnameDOM);
 
}

