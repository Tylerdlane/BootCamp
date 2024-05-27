import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: 'diremxp7w', 
  api_key: '369986675451248', 
  api_secret: 'YxnaplaZm2sAE17sgNjTP2TL8z8' 
});

cloudinary.uploader.upload(
    "https://en.wikipedia.org/wiki/Flag_of_the_United_States#/media/File:Flag_of_the_United_States_(DoS_ECA_Color_Standard).svg",
    { public_id: 'usa_flag' },
    function(error, result){
        if(error) {
            console.log(error);
            return false;
        }
        console.log(result);
    }
)

try {
   const result = await cloudinary.api.restore('usa_flag');
   console.log('The img result is: ', result)
} catch(error) {
    console.log(error)
}