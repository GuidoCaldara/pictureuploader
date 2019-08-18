import Cropper from "cropperjs"
import "cropperjs/src/css/cropper.scss";



const imgPreview = document.querySelector("#img-preview")
const uploadField = document.querySelector("#photo_pic")
const showImagePreview = (event) => {
  var reader = new FileReader();
  reader.onload = function(){
    var output = imgPreview;
    output.src = reader.result;
  };
  reader.readAsDataURL(event.target.files[0]);
}
console.log(uploadField);

uploadField && uploadField.addEventListener("change", showImagePreview)

const xOffset = document.querySelector("#xOffset")
const yOffset = document.querySelector("#yOffset")
const imgWidth = document.querySelector("#img-width")
const imgHeight = document.querySelector("#img-height")

imgPreview && imgPreview.addEventListener("load", (e)=>{
  const image = e.target
      let cropper = new Cropper(image , {
        aspectRatio: 16 / 9,
        rotatable: false,
        scalable: false,
        crop(event) {
          xOffset.value = Math.floor(event.detail.x)
          yOffset.value = Math.floor(event.detail.y)
          imgWidth.value = Math.floor(event.detail.width)
          imgHeight.value = Math.floor(event.detail.height)
          console.log(`${xOffset.value}/${yOffset.value}/${imgWidth.value}/${imgHeight.value}` )
        },
      })
  })
