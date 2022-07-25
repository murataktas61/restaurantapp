import {getApp,getApps,initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAvuO2ptPV9-41UlMrRiJz2O95jbhnaHu4",
    authDomain: "restaurantapp-2c755.firebaseapp.com",
    databaseURL: "https://restaurantapp-2c755-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-2c755",
    storageBucket: "restaurantapp-2c755.appspot.com",
    messagingSenderId: "231525711245",
    appId: "1:231525711245:web:9828080d6e1f770aec11c4"
  };

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

  const firestore = getFirestore(app)
  const storage = getStorage(app)

  export {app,firestore,storage};