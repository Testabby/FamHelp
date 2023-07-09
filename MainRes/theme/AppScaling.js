import {Dimensions, Platform, StatusBar} from 'react-native';

//-------DEVICE HELPERS---------//

//PLATFORMS
export const isPlatformiOS = Platform.OS === 'ios';
export const isPlatformAndroid = Platform.OS === 'android';

//DEVICE DIMENTIONS WIDTH, HEIGHT
export const standardWidth = isPlatformiOS ? 375.0 : 360.0;
export const standardHeight = isPlatformiOS ? 667.0 : 640.0;

export const myWidth = Dimensions.get('window').width;
export const myHeight = Dimensions.get('window').height;

export const isBigAndroid = isPlatformAndroid && myHeight > 800;
export const isiPhoneX = isPlatformiOS && myHeight > 800;
export const isBigiPhoneXMore = isPlatformiOS && myHeight > 812;
export const getSafeAreaBottomInset = () => (isiPhoneX ? 34 : 0);

export const navBarHeight = Platform.OS === 'ios' ? 54 : 58;

export const statusBarHeight = (() => {
  if (Platform.OS === 'android') {
    if (isBigAndroid) {
      return StatusBar.currentHeight;
    } else {
      return 20;
    }
  } else {
    if (isiPhoneX) {
      return 40;
    } else if (isBigiPhoneXMore) {
      return 40;
    } else {
      return 20;
    }
  }
})();

//-------HELPERS---------//

export const horizontalScale = size => (myWidth / standardWidth) * size;
export const verticalScale = size => (myHeight / standardHeight) * size;
export const moderateScale = (size, factor = 0.5) =>
  size + (horizontalScale(size) - size) * factor;

export const widthScale = dimension => (dimension / standardWidth) * myWidth;
export const heightScale = dimension => (dimension / standardHeight) * myHeight;

export const getDeviceAspectRatio = () => {
  return myWidth / myHeight;
};

export const getDeviceHeightPercent = perc => {
  return myHeight * (perc / 100);
};

export const getDeviceWidthPercent = perc => {
  return myWidth * (perc / 100);
};

export const getImgHeightScale = (dimension, imgH) => {
  return (dimension / myHeight) * imgH;
};

export const getImgWidthScale = (dimension, imgW) => {
  return (dimension / myWidth) * imgW;
};

export const getImgHeightPercent = (imgH, perc) => {
  return imgH * (perc / 100);
};

export const getImgWidthPercent = (imgW, perc) => {
  return imgW * (perc / 100);
};

export const getNormalHWPercent = (hw, perc) => {
  return hw * (perc / 100);
};

//PUT SHADOW OVER VIEW
export const exactShadow = (depth, color = '#000') => ({
  shadowColor: color,
  shadowOffset: {
    width: 0,
    height: depth / 2,
  },
  shadowOpacity: 0.27,
  shadowRadius: 4.65,
  elevation: Math.abs(depth),
});

export const exactShadowTop = (depth, color = '#000000') => ({
  shadowColor: color,
  shadowOffset: {
    width: 0,
    height: -(depth / 2),
  },
  shadowOpacity: isPlatformiOS ? 0.1 : 0.4,
  shadowRadius: 4.5,
  elevation: Math.abs(depth),
});

export const noHeaderOptions = {headerShown: false, gestureEnabled: false};
export const headerOptions = {headerShown: false, gestureEnabled: false};
