const { initializeApp } = require("firebase/app");
const { getStorage } = require("firebase/storage");

const firebaseConfig = {
  apiKey: "AIzaSyDWG9A56XkbHVhP_UhE8_xUslj4XJ1ggVo",
  authDomain: "bestchoice-d2325.firebaseapp.com",
  projectId: "bestchoice-d2325",
  storageBucket: "bestchoice-d2325.appspot.com",
  messagingSenderId: "92270428926",
  appId: "1:92270428926:web:80c322dc797d6e32845baf",
  measurementId: "G-61HNLYMGDF",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

module.exports = {
  storage,
};
