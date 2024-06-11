import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';

const DianComponent = () => {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    const fetchDocuments = async () => {
      const querySnapshot = await getDocs(collection(db, 'dian'));
      let docs = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      docs.sort((a, b) => a.orden - b.orden);
      setDocuments(docs);
    };

    fetchDocuments();
  }, []);

  return (
      documents.map((doc) => (
        <section key={doc.id} className="reseña" id={doc.dianId}>
          <div className="title-reseña">
            <h1>{doc.titulo}</h1>
          </div>
          <p>{doc.parrafo}</p>
        </section>
      ))
  );
};

export default DianComponent;
