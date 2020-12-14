import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client";
import { Breakpoint } from "../shared";
import styled from "styled-components";
const PostContainer = styled.div`
  margin: 10px 20px;
  display: grid;
  grid-auto-rows: 200px 200px;
  grid-gap: 5px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-auto-flow: dense;
  ${Breakpoint.LaptopOrLarger} {
    grid-auto-rows: 300px 300px;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`;

const PostItem = styled.article`
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  position: relative;

  img {
    position: relative;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 50%;
    cursor: pointer;
    transition: 0.5s ease-in-out;
  }
  h2 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: red;
    z-index: 2;
    margin: 0;
  }
`;

export const Post = () => {
  const [postData, setPost] = useState(null);
  const query = `*[_type == "post"]{
      slug, 
      title,
      link, 
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
    <PostContainer>
      {postData &&
        postData.map((post, index) => (
          <PostItem key={index}>
            <Link to={"/post/" + post.slug.current} key={post.slug.current}>
              <h2>{post.title}</h2>
              <img
                src={post.mainImage.asset.url}
                alt={post.mainImage.asset.alt}
              />
            </Link>
          </PostItem>
        ))}
    </PostContainer>
  );
};
