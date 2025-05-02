import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AudioList = () => {
  const [audios, setAudios] = useState([]);

  const fetchAudios = async () => {
    try {
      const res = await axios.get('http://localhost:3000/audios');
      setAudios(res.data);
    } catch (error) {
      console.error('Error fetching audios:', error);
    }
  };

  useEffect(() => {
    fetchAudios();
  }, []);

  return (
    <div style={{
      backgroundColor: '#121212',
      color: 'white',
      minHeight: '100vh',
      padding: '20px',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    }}>
      <h2 style={{ borderBottom: '1px solid #282828', paddingBottom: '10px' }}>Uploaded Audios</h2>
      {audios.length > 0 ? (
        audios.map((audio, index) => (
          <div key={index} style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '20px',
            padding: '10px',
            borderRadius: '8px',
            backgroundColor: '#181818',
            boxShadow: '0 2px 5px rgba(0,0,0,0.7)',
            transition: 'background-color 0.3s ease',
            cursor: 'pointer'
          }}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = '#282828'}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = '#181818'}
          >
            <div style={{
              width: '60px',
              height: '60px',
              backgroundColor: '#333',
              borderRadius: '4px',
              marginRight: '15px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: '#bbb',
              fontSize: '24px',
              userSelect: 'none'
            }}>
              &#9835;
            </div>
            <div style={{ flex: 1 }}>
              <h3 style={{ margin: '0 0 5px 0', fontWeight: '600' }}>{audio.title}</h3>
              <p style={{ margin: 0, color: '#b3b3b3' }}>{audio.artist}</p>
            </div>
            <audio controls src={audio.url} style={{ outline: 'none', filter: 'invert(1)' }}></audio>
          </div>
        ))
      ) : (
        <p>No audios uploaded yet.</p>
      )}
    </div>
  );
};

export default AudioList;
