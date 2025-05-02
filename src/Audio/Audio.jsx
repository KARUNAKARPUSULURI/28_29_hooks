// src/AudioUpload.js
import React, { useState } from 'react';
import axios from 'axios';

const AudioUpload = ({ fetchAudios }) => {
  const [audioFile, setAudioFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');

  const cloudName = 'dqxlshkcy';   
  const unsignedPreset = 'audio-upload-preset'; 
  const handleFileChange = (event) => {
    setAudioFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!audioFile) {
      return alert('Please select an audio file.');
    }

    setLoading(true);

    const formData = new FormData();
    formData.append('file', audioFile);
    formData.append('upload_preset', unsignedPreset);
    formData.append('resource_type', 'auto');

    try {
      const res = await axios.post(`https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`, formData);
      const audioUrl = res.data.secure_url;

      // Save metadata to json-server
      await axios.post('http://localhost:3000/audios', {
        title,
        artist,
        url: audioUrl,
      });

      fetchAudios();
      setTitle('');
      setArtist('');
      setAudioFile(null);
      setLoading(false);
      alert('Audio uploaded successfully!');
    } catch (error) {
      console.error('Error uploading audio:', error);
      setLoading(false);
    }
  };

  return (
    <div style={{
      backgroundColor: '#121212',
      color: 'white',
      padding: '20px',
      borderRadius: '8px',
      maxWidth: '400px',
      margin: '20px auto',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      boxShadow: '0 4px 10px rgba(0,0,0,0.7)'
    }}>
      <input
        type="text"
        placeholder="Enter song title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{
          width: '100%',
          padding: '10px',
          marginBottom: '10px',
          borderRadius: '4px',
          border: 'none',
          outline: 'none',
          fontSize: '16px'
        }}
      />
      <input
        type="text"
        placeholder="Enter artist name"
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
        style={{
          width: '100%',
          padding: '10px',
          marginBottom: '10px',
          borderRadius: '4px',
          border: 'none',
          outline: 'none',
          fontSize: '16px'
        }}
      />
      <input
        type="file"
        accept="audio/*"
        onChange={handleFileChange}
        style={{
          marginBottom: '10px',
          color: 'white'
        }}
      />
      <button
        onClick={handleUpload}
        disabled={loading}
        style={{
          width: '100%',
          padding: '10px',
          backgroundColor: '#1DB954',
          border: 'none',
          borderRadius: '20px',
          color: 'white',
          fontWeight: 'bold',
          fontSize: '16px',
          cursor: loading ? 'not-allowed' : 'pointer',
          transition: 'background-color 0.3s ease'
        }}
        onMouseEnter={e => !loading && (e.currentTarget.style.backgroundColor = '#1ed760')}
        onMouseLeave={e => !loading && (e.currentTarget.style.backgroundColor = '#1DB954')}
      >
        {loading ? 'Uploading...' : 'Upload Audio'}
      </button>
    </div>
  );
};

export default AudioUpload;
