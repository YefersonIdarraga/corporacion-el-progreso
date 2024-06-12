import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const DianComponent = () => {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDocuments = async () => {
      const querySnapshot = await getDocs(collection(db, 'dian'));
      let docs = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      docs.sort((a, b) => a.orden - b.orden);
      setDocuments(docs);
      setLoading(false);
    };

    fetchDocuments();
  }, []);

  return (
    <div>
      {loading ? (
        <Box sx={{ height: '100vh', display: 'flex', justifyContent: 'center' }}>
         <CircularProgress sx={{ color: '#2c1b4d' }} />
        </Box>
      ) : (
        documents.map((doc) => (
          <section key={doc.id} className="reseña" id={doc.dianId}>
            <div className="title-reseña">
              <h1>{doc.titulo}</h1>
            </div>
            <p>{doc.parrafo}</p>
          </section>
        ))
      )}
    </div>
  );
};

export default DianComponent;
