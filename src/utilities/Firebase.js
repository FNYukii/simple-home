import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import firebaseConfig  from './firebaseConfig'

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const db = getFirestore(app);

export {
  db as default
};