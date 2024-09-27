import {useState} from "react";
import {SoundOffIc, SoundOnIc} from "@/assets/svgs";


function SoundSwitchBox() {
    const [sound,  setSound] = useState(false);

    return <button className={"sound-switch-box"} onClick={() => {setSound(!sound)}}>
        <div>
            <div className={"icon-box"}>
                {sound ? <SoundOnIc/> : <SoundOffIc/>}
            </div>
            <span>
                {sound ? "On" : "Off"}
            </span>
        </div>
    </button>;
}

export default SoundSwitchBox;