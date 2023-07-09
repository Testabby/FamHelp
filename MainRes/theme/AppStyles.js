import {StyleSheet} from 'react-native';
import AppColors from './AppColors';
import {heightScale, myHeight, myWidth, widthScale} from './AppScaling';
import AppTypography from './AppTypography';

const AppStyles = StyleSheet.create({
  flex1: {
    flex: 1,
    backgroundColor: AppColors.WHITE,
  },
  flexWhite: {
    flex: 1,
    backgroundColor: AppColors.WHITE,
  },
  flexBlack: {
    flex: 1,
    // backgroundColor: AppColors.BLACK,
  },
  WH100: {
    width: myWidth,
    height: myHeight,
    backgroundColor: '#2D2D2D',
    alignItems: 'center',
  },
  W100: {
    width: myWidth * 0.7,
    alignItems: 'center',
  },
  flexPrimary: {
    flex: 1,
    // backgroundColor: AppColors.COLOR_PRIMARY_APP,
    // marginBottom:100
  },
  flexTransparent: {
    flex: 1,
    backgroundColor: AppColors.FULL_TRANSPARENT,
  },
  flex1WhiteWithOverflow: {
    flex: 1,
    backgroundColor: AppColors.WHITE,
    overflow: 'hidden',
  },
  flexRed: {
    flex: 1,
    backgroundColor: AppColors.COLOR_RED,
  },
  flexCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inCenterOnly: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexCenterWhite: {
    flex: 1,
    backgroundColor: AppColors.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexCenterWhiteWH: {
    flex: 1,
    backgroundColor: AppColors.WHITE,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flexRowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexColumnCenter: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexRowCenter30: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  flexRowSpaceBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  flexRowSpaceAround: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  flexRowSpaceEvenly: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  flexRowSpaceEvenlyStretch: {
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-evenly',
  },

  // Text styles
  txtMediumGrey14: {
    color: AppColors.COLOR_GREY_WARM,
    fontSize: 14,
    fontFamily: AppTypography.FONT_MEDIUM,
    paddingBottom: heightScale(10),
  },
  txtMediumGreenAccent14: {
    color: AppColors.COLOR_SEAGREEN_ACCENT,
    fontSize: 14,
    fontFamily: AppTypography.FONT_MEDIUM,
  },
  btnTextSemiBold: {
    color: AppColors.WHITE,
    fontSize: widthScale(18),
    fontFamily: AppTypography.LATO_FONT_SEMI_BOLD,
    // fontWeight:"600"
  },

  btnTextSemiBold14: {
    color: AppColors.GREY_79,
    fontSize: 14,
    fontFamily: AppTypography.FONT_MEDIUM,
  },

  splashMidLogo: {
    width: 175,
    height: 125,
  },
  sliderImage: {
    height: 40,
    width: 40,
  },
  whiteView: {
    backgroundColor: AppColors.WHITE,
    zIndex: 9999999,
    height: myHeight / 1.5,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    borderTopLeftRadius: heightScale(20),
    borderTopRightRadius: heightScale(20),
    paddingTop: 20,
  },
  secondwhiteView: {
    backgroundColor: AppColors.GREY_WHITE,
    zIndex: 9999999,
    height: myHeight / 1.47,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    borderTopLeftRadius: heightScale(20),
    borderTopRightRadius: heightScale(20),
  },
  horizontal: {
    flex: 1,
    marginHorizontal: 10,
  },
  veficationText: {
    color: AppColors.BLACK_TINT_COLOR,
    fontSize: widthScale(20),
    fontFamily: AppTypography.FONT_REGULAR,
    textAlign: 'center',
    paddingVertical: heightScale(24),
    // fontWeight:"600"
  },
  discriptionText: {
    color: AppColors.TEXT_MEDIUM_GREY,
    fontSize: widthScale(12),
    fontFamily: AppTypography.LATO_FONT_SEMI_BOLD,
    textAlign: 'center',
    paddingVertical: 20,
  },
  termsNdConditions: {
    color: AppColors.BLACK_TINT_COLOR,
    fontSize: widthScale(20),
    fontFamily: AppTypography.FONT_BOLD,
    textAlign: 'center',
    paddingVertical: heightScale(24),
    fontWeight: '600',
  },
});

export default AppStyles;
