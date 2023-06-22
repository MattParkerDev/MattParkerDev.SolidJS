import { ParentProps } from "solid-js";
import "./SiteWrapper.css"


export default function SiteWrapper(props: ParentProps<{}>) {
    return (
        <div class="h-screen clouds"> 
            <div class={`p-10 siteWrapper`}>{props.children}</div>
        </div>
    );
}

