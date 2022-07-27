import React, { useRef, useContext, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
    id: string
    name: string
    socialId: string
    link: string
}

const Member: React.FC<Props> = ({ id, name, socialId, link }) =>
(
    <div><Image src={`/assets/team/boiii.svg`}
        alt={name}
        width={210}
        height={244}
    />
        <div className="text-2xl xl:text-3xl ">{name}</div>
        <div className="text-xl">
            <Link href={link}>
                <a target="_blank">{socialId}</a>
            </Link>
        </div>
    </div>
)


export default Member

