import AppImage from "../assets/images/index";
import AppColors from "./AppColors";
import AppStrings from "./AppStrings";

const StaticData = {
  specialElection:[{
    name:AppStrings.YES,
    image:AppImage.unSelectButton,
    id:1,
    value: true
 },{
  name:AppStrings.NO,
  image:AppImage.selectButton,
  id:2,
  value: false
 }],
 accountOption:[{
    name:AppStrings.VOTAR,
    discription:AppStrings.VOTAR_DISCRIPTION,
    image:AppImage.votarHand,
   //  isEnable:false,
    id:1
 },{
    name:AppStrings.CANDIDATE,
    discription:AppStrings.CANDIDATE_DISCRIPTION,
    image:AppImage.candidate,
   //  isEnable:false,
    id:2
 }],
 verificationOption:[{
   name:AppStrings.PHONE,
   image:AppImage.phone,
   // isEnable:false,
   id:1
},{
   name:AppStrings.EMAIL,
   image:AppImage.email,
   // isEnable:false,
   id:2
}],
verificationPhoneOption:[{
  name:AppStrings.PHONE,
  image:AppImage.phone,
  // isEnable:false,
  id:1
}],
 levelOption:[{
   name: AppStrings.FEDERAL,
   image: AppImage.federal,
   id: 1
 }, {
   name: AppStrings.STATE,
   image: AppImage.state,
   id: 2
 }, {
   name: AppStrings.LOCAL,
   image: AppImage.local,
   id: 3
 }],
 partyOption: [{
   name: AppStrings.REPUBLICAN,
   image: AppImage.republican,
   id: 1,
   color:AppColors.RED
 }, {
  name: AppStrings.DEMOCRAT,
  image: AppImage.democrat,
   id: 2,
   color:AppColors.BLUE
 }, {
  name: AppStrings.LIBERTARIAN,
  image: AppImage.libertarian,
   id: 3,
   color:AppColors.THEME
 }, {
  name: AppStrings.INDEPENDENT,
  image: AppImage.independent,
   id: 4,
   color:AppColors.LITE_GREY
 }]
};
  
  export default StaticData;
  