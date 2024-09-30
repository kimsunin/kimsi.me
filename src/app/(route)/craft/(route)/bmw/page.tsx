"use client"
import {useEffect, useState} from "react";
import {BmwCanvas} from "@/component";

function Page() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(true)
    }, []);

    return (
        <section className={visible ? "is-visible" : "is-invisible"}>
            <article>
                <h1>BMW</h1>
                <hr/>
                <BmwCanvas/>
            </article>
        </section>
    );
}

export default Page;