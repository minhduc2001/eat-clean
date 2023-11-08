import React from "react";
import "./index.scss"
import {Link} from "react-router-dom";

interface BlogCardProps {
    color: string;
    title: string;
    image: string;
}

function BlogCard(props: any) {
    console.log(props?.data?.imgThumbnail)
    return (
        <div className={"blog-container"}>
            <Link to={`/blog/${props?.data?.id}`}>
                <img src={props?.data?.imgThumbnail}/>
            </Link>
            <h3>
                <a className={props.color}>
                    {props?.data?.title}
                </a>
            </h3>
            <div>
                <p className={props.color}>
                    {props?.data?.description}
                </p>
            </div>
        </div>
    );
}

export default BlogCard;
