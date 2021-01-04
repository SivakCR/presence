const express = require("express")
const bodyParser = require('body-parser');
const firebase = require('firebase');
const app = express();
const port = 8000;
const firebaseConfig = {
    apiKey: "AIzaSyDzDHlGXwEFnPoQMGQA7_jjGuycZFPqvz0",
    authDomain: "presence-5c7ec.firebaseapp.com",
    projectId: "presence-5c7ec",
    storageBucket: "presence-5c7ec.appspot.com",
    messagingSenderId: "1093972206333",
    appId: "1:1093972206333:web:35b650fa97583f7e271494"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

app.use(bodyParser.json());       
app.use(bodyParser.urlencoded({extended: true}));      

app.all  ('*', (req, res) => { 
    var b = req.body
    v = Object.keys(b)[0]
    var jsn = JSON.parse(v)
    var data = jsn['data']
    var id = jsn['id']
    db.collection('class').doc(id).collection('class').add({
        data: JSON.stringify(data),
        time: firebase.firestore.FieldValue.serverTimestamp()
    });
    console.log(JSON.parse(v) ,data , id)
    res.send('cors problem fixed')
})

app.listen(port, () => console.log(`Listening on ${port}`))