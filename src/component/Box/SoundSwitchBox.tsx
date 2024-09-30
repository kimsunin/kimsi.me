"use client";
import {useSound} from "@/hook/useSound";
import {SoundOnSound} from "sound/index";
import {SoundOnIc, SoundOffIc} from "svg/index";


function SoundSwitchBox() {
    const {sound, setSound} = useSound();

    const soundObj = new Audio(SoundOnSound);

    const switchSound = () =>{
        if(!sound) {
            soundObj.play();
        }
        setSound(!sound);
    }

    return <button className={"box"} onClick={switchSound}>
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