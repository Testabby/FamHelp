const IMAGESC = {

  search: require('./search/search.png'),
  setting: require('./setting/setting.png'),
  service: require('./service/service.png'),
  bank: require('./banks/bank.png'),
  chat: require('./home/chat.png'),
  add: require('./home/add.png'),
  addw: require('./home/addw.png'),

  splash: require('./splash/splash.png'),
  VOTR_Header: require('./header/VOTR_Header.png'),
  fb: require('./social/fb.png'),
  google: require('./social/google.png'),
  apple: require('./social/apple.png'),
  eyeClose: require('./textinput/eyeClose.png'),
  eyeOpen: require('./textinput/eyeOpen.png'),
  warning: require('./textinput/warning.png'),
  candidate: require('./option/candidate.png'),
  votarHand: require('./option/votarHand.png'),
  initialVoterHand: require('./option/voterHandInitial.png'),
  initialCandidate: require('./option/candidateInitial.png'),
  intro_logo: require('./Intro/logo.svg'),
  back: require('./header/back.png'),
  email: require('./verification/email.png'),
  phone: require('./verification/phone.png'),
  logo: require('./logo/logo.png'),
  check: require('./verification/check.png'),
  imagePlaceholder: require('./candidate/imagePlaceholder.png'),
  federal: require('./candidate/federal.png'),
  state: require('./candidate/state.png'),
  local: require('./candidate/Local.png'),
  republican: require('./candidate/Republican.png'),
  democrat: require('./candidate/Democratic.png'),
  libertarian: require('./candidate/Libertarian.png'),
  independent: require('./candidate/Independent.png'),
  activeplus: require('./candidate/activeplus.png'),
  inactiveplus: require('./candidate/inactiveplus.png'),
  mius: require('./candidate/mius.png'),
  calendar: require('./textinput/calendar.png'),
  add: require('./textinput/add.png'),
  selectButton: require('./candidate/selectButton.png'),
  unSelectButton: require('./candidate/unSelectButton.png'),
  clock: require('./candidate/clock.png'),
  edit: require('./candidate/edit.png'),
  delete: require('./candidate/delete.png'),
  home: require('./tabs/home.png'),
  search: require('./tabs/search.png'),
  candidateIcon: require('./tabs/candidate.png'),
  inactiveHome: require('./tabs/inactiveHome.png'),
  activeSearch: require('./tabs/activeSearch.png'),
  blackSearch: require('./blackColorSearch/Search.png'),
  activeCandidate: require('./tabs/activeCandidate.png'),
  test: require('./test/test.png'),
  test1: require('./test/test1.png'),
  test2: require('./test/test2.png'),
  recent1: require('./test/recent1.png'),
  recent2: require('./test/recent2.png'),
  recent3: require('./test/recent3.png'),
  recent4: require('./test/recent4.png'),
  chat: require('./candidate/chat.png'),
  hand: require('./home/hand.png'),
  bell: require('./home/bell.png'),
  yes: require('./survey/yes.png'),
  no: require('./survey/no.png'),
  guestSignup: require('./guest/guestSignup.png'),
  guestSignupModal: require('./guest/guestSignUpModal.png'),
  trending: require('./guest/trending.png'),
  // profilePlaceHolder: require('./profileplaceholder.png'),
  fireIcon: require('./fireIcon/fireIcon.png'),
  unionBlue: require('./union/Union.png'),
  unionRed: require('./union/UnionRed.png'),
  unionYellow: require('./union/UnionYellow.png'),
  unionGrey: require('./union/UnionGrey.png'),
  ChatBlue: require('./union/Blue.png'),
  ChatRed: require('./union/Red.png'),
  ChatYellow: require('./union/Yellow.png'),
  ChatGrey: require('./union/Grey.png'),
  drawerMenuBG: require('./drawerMenuBG/bg.png'),
  backIcon: require('./back/back.png'),
  cameraYellowColor: require('./camera/camera.png'),
  camera: require('./camera/cameraWhite.png'),
  twitter: require('./social/Twitter-Icon.png'),
  mobileSurvey: require('./surveyIncomplete/Mobile.png'),
  swipeIntro: require('./swipeIntro/swipe.png'),
  share: require('./share/Share.png'),
  greyColorShare: require('./greyColorShare/share.png'),
  logohome: require('./logo/logohome.png'),
  headerBg: require('./headerBG/bg.png'),
  donationBox: require('./donationBox/Box.png'),
  donationLimit: require('./donationLimit/Limit.png'),
  donationSuccess: require('./donationSucessful/Subtract.png'),
  voterHeaderBg: require('./voterHeaderBg/bg.png'),
  candProfilePopup: require('./candProfilePopup/profile.png'),
  sortName: require('./sort/sort.png'),
  cross: require('./searchScreen/cross.png'),
  drop: require('./searchScreen/filterDrop.png'),
  filterSelected: require('./filter/selected.png'),
  filterUnselected: require('./filter/unselected.png'),
  unSelectedCheckbox: require('./checkbox/unSelectedCheckbox.png'),
  selectedCheckbox: require('./checkbox/selectedCheckbox.png'),
  verified: require('./verification/verified.png'),
  donationRaised: require('./CandidateHomeIcon/donation.png'),
  donationRaisedInactive: require('./CandidateHomeIcon/DonationInactive.png'),
  contributor: require('./CandidateHomeIcon/contributor.png'),
  contributorActive: require('./CandidateHomeIcon/contributorActive.png'),
  follower: require('./CandidateHomeIcon/follower.png'),
  followerActive: require('./CandidateHomeIcon/followerActive.png'),
  uptrend: require('./trending/trending.png'),
  work: require('./work/work.png'),
  visa: require('./visa/visa.png'),
  visaMinus: require('./visa/visaMinus.png'),
  donationBoxGrey: require('./donationBox/donationBox.png'),
  calendar: require('./calendar/Calendar.png'),

  // Service logos
  Ac:require('./home/Homecards/Ac.jpg'),
  Carp:require('./home/Homecards/Carpent.jpg'),
  Furn:require('./home/Homecards/Furn.jpg'),
  Light:require('./home/Homecards/Light.jpg'),
  Paint:require('./home/Homecards/Paint.jpg'),
  Plumb:require('./home/Homecards/Plumb.jpg'),
  Mech:require('./home/Homecards/Mech.jpg'),
  Rep:require('./home/Homecards/repair.jpg'),


  refresh:require('./back/refresh.png'),
};

export const pickImageGradient = partyName => {
  switch (partyName) {
    case 'Democrat':
      return IMAGESC.unionBlue;

    case 'Republican':
      return IMAGESC.unionRed;

    case 'Libertarian':
      return IMAGESC.unionYellow;

    case 'Independent':
      return IMAGESC.unionGrey;

    default:
      break;
  }
};
export const pickImage = partyName => {
  switch (partyName) {
    case 'Democrat':
      return IMAGESC.ChatBlue;

    case 'Republican':
      return IMAGESC.ChatRed;

    case 'Libertarian':
      return IMAGESC.ChatYellow;

    case 'Independent':
      return IMAGESC.ChatGrey;

    default:
      break;
  }
};

export default IMAGESC;
