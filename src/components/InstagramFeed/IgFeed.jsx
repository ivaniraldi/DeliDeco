import React, { useEffect, useState } from 'react';
import axios from 'axios';

const InstagramFeed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      try {
        const response = await axios.get(
          `https://graph.instagram.com/ivansyko/media?fields=id,caption,media_url,permalink&access_token=f8efc0ce3ed6cf3fc20594135d48cb5d`
        );
        setPosts(response.data.data);
      } catch (error) {
        console.error('Error fetching Instagram posts:', error);
      }
    };

    fetchInstagramPosts();
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <img src={post.media_url} alt={post.caption} />
          <a href={post.permalink} target="_blank" rel="noopener noreferrer">Ver en Instagram</a>
        </div>
      ))}
    </div>
  );
};

export default InstagramFeed;