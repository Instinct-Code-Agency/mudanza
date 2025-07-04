let firebaseConfigInstinct = {
    apiKey: "AIzaSyCnHgAZsiaWnC16dCsD1f8a7XEO6EWTG38",
    authDomain: "mudanzaslaesperanza.firebaseapp.com",
    projectId: "mudanzaslaesperanza",
    storageBucket: "mudanzaslaesperanza.firebasestorage.app",
    messagingSenderId: "47945441426",
    appId: "1:47945441426:web:68b53021e5f695946bc64b",
    measurementId: "G-WCL934G5Q6"
};
 firebase.initializeApp(firebaseConfigInstinct);
  const dbRT = firebase.database();
  const dbFB = firebase.firestore();

  // Aumentar visitas totales
  function increaseVisits() {
    const visitasRef = dbRT.ref('visitas');
    visitasRef.transaction(current => (current || 0) + 1, (err, committed, snap) => {
      if (err) console.error("Error total visitas:", err);
      else if (committed) mostrarTotal(snap.val());
    });
  }

  // Leer visitas totales
  function readVisits() {
    dbRT.ref('visitas').once('value')
      .then(snap => mostrarTotal(snap.val()))
      .catch(err => console.error("Error leyendo total visitas:", err));
  }
  
  function mostrarTotal(val) {
    const el = document.getElementById('visitasCount');
    if (el) el.textContent = val || 0;
  }

  // Aumentar visitas únicas en Firestore
  function contarVisitaUnica() {
    // if (localStorage.getItem('counted')) return mostrarUnicas();
    
    const metaRef = dbFB.collection('stats').doc('metadata');
    metaRef.get().then(doc => {
      const op = doc.exists
        ? metaRef.update({ uniqueVisitors: firebase.firestore.FieldValue.increment(1) })
        : metaRef.set({ uniqueVisitors: 1 });
      return op;
    })
    .then(() => {
      localStorage.setItem('counted', 'true');
      mostrarUnicas();
    })
    .catch(err => console.error("Error contando visita única:", err));
  }

  // Leer y mostrar visitas únicas
  function mostrarUnicas() {
    dbFB.collection('stats').doc('metadata').get()
      .then(doc => {
        const val = doc.exists ? doc.data().uniqueVisitors : 0;
        const el = document.getElementById('uniqueCount');
        if (el) el.textContent = val;
      })
      .catch(err => console.error("Error leyendo visita única:", err));
  }

  // Al cargar la página
  window.addEventListener('load', () => {
    readVisits();          // muestra visitas totales
    mostrarUnicas();       // muestra únicas si ya contadas
    setTimeout(() => {
      increaseVisits();    // incrementa total
      contarVisitaUnica(); // incrementa únicas si es nuevo visitante
    }, 1000);
  });