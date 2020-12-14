import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client";

export const Post = () => {
  const [postData, setPost] = useState(null);
  const query = `*[_type == "post"]{
      slug, 
      title, 
      mainImage{
        asset->{
          _id, 
          url
        }, 
        alt
      }
    }`;

  useEffect(() => {
    sanityClient
      .fetch(query)
      .then((data) => setPost(data))
      .catch(console.error);
  });
  return (
    <div>
      {postData &&
        postData.map((post, index) => (
          <article key={index}>
            <h1>{post.title}</h1>
            <Link to={"/post/" + post.slug.current} key={post.slug.current}>
              <img
                src={post.mainImage.asset.url}
                alt={post.mainImage.asset.alt}
              />
            </Link>
          </article>
        ))}
    </div>
  );
};
