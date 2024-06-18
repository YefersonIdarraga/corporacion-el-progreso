import React, { useEffect, useState } from 'react';
import { collection, getDocs, doc, updateDoc } from 'firebase/firestore';
import { auth, db } from '../firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import '../styles/editComponents.css';

const DianComponent = () => {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(null);
  const [user] = useAuthState(auth);

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

  const handleEdit = (id) => {
    setEditing(id);
  };

  const handleCancel = () => {
    setEditing(null);
  };

  const convertToDianId = (titulo) => {
    return titulo.toLowerCase().replace(/\s+/g, '-');
  };

  const handleSave = async (id, titulo, parrafo, orden) => {
    const dianId = convertToDianId(titulo);
    const docRef = doc(db, 'dian', id);
    await updateDoc(docRef, { titulo, parrafo, orden: Number(orden), dianId });
    setDocuments((prevDocs) =>
      prevDocs.map((doc) =>
        doc.id === id ? { ...doc, titulo, parrafo, orden: Number(orden), dianId } : doc
      )
    );
    setEditing(null);
    window.location.reload();
  };

  const handleChange = (id, field, value) => {
    setDocuments((prevDocs) =>
      prevDocs.map((doc) =>
        doc.id === id ? { ...doc, [field]: field === 'orden' ? Number(value) : value } : doc
      )
    );
  };

  return (
    <div className='edit-container'>
      {loading ? (
        <Box sx={{ height: '100vh', display: 'flex', justifyContent: 'center' }}>
          <CircularProgress sx={{ color: '#2c1b4d' }} />
        </Box>
      ) : (
        documents.map((doc) => (
          <section key={doc.id} className="reseña" id={doc.dianId}>
            <div className="title-reseña">
              {editing === doc.id ? (
                <>
                  <input
                    className='orden-inp'
                    type="number"
                    value={doc.orden}
                    onChange={(e) => handleChange(doc.id, 'orden', e.target.value)}
                  />
                  <input
                    type="text"
                    value={doc.titulo}
                    onChange={(e) => handleChange(doc.id, 'titulo', e.target.value)}
                  />
                </>
              ) : (
                <>
                  <h1>{doc.titulo}</h1>
                  {user && (<h2 className='orden'>{doc.orden}</h2>)}
                </>
              )}
            </div>
            {editing === doc.id ? (
              <textarea
                value={doc.parrafo}
                onChange={(e) => handleChange(doc.id, 'parrafo', e.target.value)}
              />
            ) : (
              <p>{doc.parrafo}</p>
            )}
            {user && (
              <button className='btn-edit' title='Editar' onClick={() => handleEdit(doc.id)}>
                {editing === doc.id ? '' : (<i className="bi bi-pen-fill"></i>)}
              </button>
            )}
            {editing === doc.id && (
              <>
                <button className='btn-cancel' title='Cancelar' onClick={handleCancel}>
                  <i className="bi bi-x-circle-fill"></i>
                </button>
                <button className='btn-save' title='Guardar'
                  onClick={() => handleSave(doc.id, doc.titulo, doc.parrafo, doc.orden)}
                >
                  <i className="bi bi-floppy-fill"></i>
                </button>
              </>
            )}
          </section>
        ))
      )}
    </div>
  );
};

export default DianComponent;