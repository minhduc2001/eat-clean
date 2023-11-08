import React from "react";
import {Avatar, Rating} from "@mui/material";

interface CommentCardProps {
    color: string;
    title: string;
    image: string;
}

function CommentCard(props: any) {
    console.log(props)
    return (
        <div className={"flex p-1 mt-[50px]"}>
            <div className={'w-1/12 flex justify-center'}>
                <Avatar {...stringAvatar(props?.data?.user?.username || "user name")} />
            </div>
            <div className={"w-full"}>
                <p>{props?.data?.user?.username || "user name"}</p>
                <Rating value={props?.data?.rate || 5}/>
                <p className={'text-xs'}>{props?.data?.comment}</p>
            </div>
        </div>
    );
}

function stringToColor(string: string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
}

function stringAvatar(name: string) {
    return {
        sx: {
            bgcolor: stringToColor(name),
        },
        children: `${name.substring(0,2)}`,
    };
}

export default CommentCard;
