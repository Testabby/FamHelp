import { StyleSheet } from 'react-native'
import { Dimensions } from 'react-native';
import AppTypography from '../../Assets/typography';
import AppColors from '../../theme/AppColors';
import { myHeight,myWidth } from '../../theme/AppScaling';

let heightScale = Dimensions.get('window').height/10
let widthScale = Dimensions.get('window').width/10

const btn = '#E9BB44';
const btnText = 'white';

export default StyleSheet.create({

     // appJson Animation styles
     json: {
          width: '100%',

     },
     surveyjson:{
          height:heightScale*10,
          width:widthScale*10
     },

     bgContainer: {
          flex: 1,
          // backgroundColor:'red',
     },

     bgImg: {
          flex: 1,
          resizeMode: 'stretch',
          // justifyContent: "center",
     },

     bgTitle: {
          color: 'white',
          textAlign: 'center',
          paddingTop: 48,
          fontSize: 25,
          fontWeight: '600',
          // backgroundColor:'red',
     },

     mainlogo: {
          alignSelf: 'center',
     },

     //Roleselect screens
     twoColumns: {
          width: widthScale*9,
          height:160,
          borderRadius: 8,
          borderWidth:2,
          borderColor:'#E8E8E8',
          margin:14,
          justifyContent:'center',
          alignItems:'flex-start',
          padding:16,
     },
     twoColumnsTitle:{
          fontSize: 28,
          fontWeight: '700',
          fontStyle :AppTypography.FONT_BOLD,
          color: '#4D4E5B',
          padding:8,

     },
     twoColumnsPara:{
          fontSize: 16,
          color: '#4D4E5B',
          fontWeight: '400',
          width:widthScale*5
     },
     roleSelectImg: {
          height:140,
          width:widthScale*3.8,
          position: 'absolute',
          bottom:0,  
          right:0,   
          resizeMode:'contain',
        },

     greenHeader: {
          flex:1/4,
          position: 'absolute', backgroundColor: AppColors.COLOR_SECONDARY_APP,
          Top: 0, height: myHeight / 6, width: myWidth,
          alignSelf: 'center',
          borderBottomEndRadius: 30,
          borderBottomStartRadius: 30,
          // marginBottom:50,
     }  ,

     

     bgLogImg: {
          // flex: 1,
          resizeMode: 'contain',
          // justifyContent: "center",
          // height: '100%'
          height:10,
          width:12,
     },
     bgTitleL: {
          color: AppColors.BLACK_TINT_COLOR,
          textAlign: 'center',
          paddingTop: 120,
          fontSize: 28,
          fontWeight: '700',
          fontFamily: AppTypography.FONT_REGULAR,
          
     },

     bgParaL: {
          color: AppColors.BLACK_600,
          textAlign: 'center',
          paddingTop: 20,
          paddingBottom:30,
          fontSize: 18,
          fontWeight: '400',
          fontFamily: "Quicksand",
     },
     whiteContainer:{
          flex: 1,
          backgroundColor: '#ffff',
          borderRadius: 20,
          padding: 5,
     },
   


     //Splash Screen a stylesheet begins here
     splashCon: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-around'
     },

     toplogo: {
          marginTop: 15,
          resizeMode: 'stretch'

     },

     logoText: {
          // fontFamily: 'Quicksand',
          // fontSize: 28,
          // fontWeight: '400',
          textAlign: 'center',
          alignSelf: 'center',
          color: AppColors.WHITE_DIM,
          fontSize: 25,
          fontWeight: "400",
          padding: 15
     },

     subLogoText: {
          alignSelf: 'center',
          color: AppColors.WHITE_DIM,
          fontSize: 20,
          fontWeight: "400",
          padding: 15
     },

     splashbgimg: {
          resizeMode: 'contain',
          margin: 5
     },

     splashText: {
          fontFamily: 'Lato',
          fontSize: 11,
          fontWeight: '700',
          paddingHorizontal: 40,
          textAlign: 'center'
     },

     button: {
          backgroundColor: btn,
          paddingHorizontal: 150,
          paddingVertical: 15,
          borderRadius: 10,
     },
     buttonText: {
          fontFamily: 'Lato',
          fontSize: 16,
          fontWeight: '400',
          alignSelf: 'center',
          color: btnText,
     },


     //Splash screen b begins here
     buttonTwoCon: {
          // flex:1,
          // display:'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 10,
     },

     buttonTwo: {
          margin: 9,
          backgroundColor: btn,
          paddingHorizontal: 53,
          paddingVertical: 15,
          borderRadius: 10,
     },

     buttonTwoBlank: {
          margin: 9,
          backgroundColor: btnText,
          paddingHorizontal: 52,
          paddingVertical: 15,
          borderWidth: 2,
          borderRadius: 10,
          borderColor: btn,
     },
     buttonTextBlank: {
          fontFamily: 'Lato',
          fontSize: 16,
          fontWeight: '400',
          alignSelf: 'center',
          color: btn,
     },
     /*
     signup screen with duplicate style
     */


     // bgTitle: {
     //      color: 'white',
     //      textAlign: 'center',
     //      paddingTop: 94,
     //      fontSize: 28,
     //      fontWeight: '700',
     // },

     bgPara: {
          color: 'white',
          textAlign: 'left',
          padding: 25,
          fontSize: 18,
          fontWeight: '400',
          fontFamily: "Quicksand"
     },

     scrollview: {
          flex:1,
     },

     bgloginM: {
          backgroundColor: '#ffff',
          borderRadius: 20,
          padding: 8,
          margin:5,
          // position:'absolute',
          // bottom:0,
          flex:1,
     },

     // bgwhite:{
     //      flex: 1,
     //      backgroundColor: '#ffff',
     //      borderRadius: 20,
     // },

     inputAll: {
          height: 48,
          backgroundColor: '#F8F8F8',
          borderRadius: 8,
          color: '#4D4E5B',
          margin: 10,
          padding: 10,
     },

     statictest: {
          color: '#2F3033',
          fontSize: 16,
          fontWeight: '400',
          padding: 10,
     },

     allign: {
          alignSelf: 'center',
          alignItems: 'center'
     },

     dpic: {
          height: 100,
          width: 100,
          borderRadius: 50,
     },


     btnCont: {
          height: 48,
          minWidth:widthScale*8,
          backgroundColor: '#E9BB44',
          marginBottom: 10,
          marginTop:5,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 8,
     },

     btnLogin: {
          fontSize: 16,
          color: '#FFFFFF',
          fontWeight: '600',
     },

     // social media handles here
     bottomCont: {
          flex: 1,
          alignItems: 'center',
          fontWeight: '400',

     },

     btnContB: {
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-around',
     },

     bottomP: {
          fontSize: 16,
          color: '#4F4F4F',
          fontWeight: '500',
     },

     bottomP2: {
          fontSize: 16,
          color: '#E9BB44',
          fontWeight: '500',
     },

     footer: {
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'center',
     },
     //popup styles
     popup: {
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 22
     },

     popupItems:
     {
          margin: 0, justifyContent: 'flex-end', alignSelf: 'flex-end'
     },

     popupButton:
     {
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 22
     },

     popupCamera:
     {
          margin: 20,
          backgroundColor: "white",
          borderRadius: 20,
          padding: 35,
          alignItems: "center",
          shadowColor: "#000",
          shadowOffset: {
               width: 0,
               height: 2
          },
          shadowOpacity: 0.25,
          shadowRadius: 4,
          elevation: 5
     },
     //
     //Survey starts here
     insideBoxText: {
          color: '#2F3033',
          fontSize: 16,
          fontWeight: '400',
          textAlign:'center',
          padding:12,
     },

     skip: {
          fontFamily: 'Lato',
          fontSize: 14,
          fontWeight: '500',
          textAlign: 'right',
          color:'white',
          paddingHorizontal:15

     },

     header:{
          flexDirection:'row',
          justifyContent:'space-between',
          paddingTop:10,
          
     },
     cardImg:{
          height:92,
          width:102,
          flex:1,
          resizeMode: 'cover',
     },

     cardFour: {
          height:145,
          width:155,
          borderRadius: 8,          
          backgroundColor: '#E8E8E8',
          margin: 8,
         
          
          justifyContent:'center',
        },
     cardFourImg: {
          height:100,
          width:120,
          position: 'absolute',
          bottom:0,     
          // resizeMode:'contain',
          borderRadius: 8,
         
        },
     cardThree: {
          height:125,
          width:widthScale*9,
          borderRadius: 8,          
          backgroundColor: '#E8E8E8',
          margin: 8,
          justifyContent:'center',
        },
     cardThreeImg: {
          height:100,
          width:widthScale*4.5,
          position: 'absolute',
          bottom:0, 
          right:0,   
          resizeMode:'contain',  
          borderBottomRightRadius: 8,    
        },

        cardTwo: {
          height:365,
          width:widthScale*9,
          borderRadius: 8,          
          backgroundColor: '#E8E8E8',
          margin: 8,
          justifyContent:'center',
        },
     cardTwoImg: {
          height:100,
          width:102,
          position: 'absolute',
          bottom:0,  
          right:0,   
          resizeMode:'contain',
        },

     cardMulti:{
          height:48,
          width:widthScale*9,
          borderRadius: 24,          
          backgroundColor: '#E8E8E8',
          margin: 9,
          justifyContent:'center',
     },
     circle: {
            width: 36,
            height: 36,
            borderRadius: 18,
            borderWidth:2,

          },
     selectedcircle: {
               width: 38,
               height: 38,
               borderRadius: 16,

             },
     cardCircle:{
               flexDirection:'row',
               alignItems:'center',
               margin:5,
               paddingHorizontal:20
          },


     //candidate starts here
     container: {
          flex: 1,
          marginTop: 5,
        },
        column: {
          flex: 1 / 2,
          justifyContent: 'space-around',
        },  
        title: {
          fontSize: 32,
        },

        item: {
          marginTop: 10,
          borderRadius: 8,
        },
        cardBox: {
          height:heightScale*3,
          width:widthScale*4,
          borderRadius: 8,
          justifyContent:'space-around',
          backgroundColor: "yellow",
         
        },
        bgCard: {
          flex: 1,
          borderColor: '#d35647',
          resizeMode: 'cover',
          backgroundColor: "blue",
          borderRadius: 8,
          borderColor:'green',
          borderWidth:5,
        },
        title: {
          position: 'absolute',
          top: 95,
          fontSize: 14,
          fontWeight: '600',
        },
        party: {
          position: 'absolute',
          right: 0,
          borderBottomLeftRadius: 15,
          borderTopRightRadius: 15,
          backgroundColor: '#B42E18',
          padding: 5,
          fontSize: 12,
          fontWeight: '500',
        },
        agenda: {
          position: 'absolute',
          top: 115,
          fontSize: 10,
          fontWeight: '400',
        },
        percent: {
          position: 'absolute',
          left: 0,
          padding: 5,
        },


        //New styles
        serviceboxCont:{
          flex:3/4,
          // paddingTop:myHeight/6,
               color: AppColors.BLACK_800,
              fontSize: 25,
              fontWeight: "600",
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-evenly',
              alignItems:'stretch'
        },

        servicebox:{
          height: myHeight / 6,
                width: myWidth / 1.2,
                backgroundColor: AppColors.BORDER_GREY,
                marginTop: 15,
               alignItems:'center',
               justifyContent: 'space-evenly',
               
        },

        Inservicebox:{
               paddingVertical:10,        
                width: myWidth / 2.5,
                backgroundColor: AppColors.BORDER_GREY,
               alignItems:'center',
               marginTop:10,
               justifyContent: 'space-evenly',
               
        },

        

});