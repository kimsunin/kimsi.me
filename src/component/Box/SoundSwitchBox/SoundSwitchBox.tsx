"use client";
import React from "react";
import {SoundOffIc, SoundOnIc} from "../../../../public/svg";


function SoundSwitchBox() {
    const [sound,  setSound] = React.useState(false);

    return <button className={"box"} onClick={() => {
        setSound(!sound)
    }}>
        <div>
            <div className={"icon-box"}>
                {sound ? <SoundOnIc/> : <SoundOffIc/>}
            </div>
            <div className={"text-box"}>
                <p>
                    {sound ? "On" : "Off"}
                </p>
                <p>
                    switch sound mode
                </p>
            </div>
        </div>
    </button>;
}

export default SoundSwitchBox;