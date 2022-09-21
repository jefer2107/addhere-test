export default function addFacebookScript(forceReload: boolean = false, id: string = null, addTrack: boolean = true) {
    if (typeof window !== "undefined") {
        const fbFinded = document.getElementById('fb-sdk');
        const wasFinded = !!fbFinded;
        if (wasFinded && forceReload) {
            console.log('addFaceBookScript removed', new Date());
            fbFinded.remove();
            // const divFinded = document.getElementById('fb-root');
            // console.log(divFinded);
            // if (!!divFinded) {
            //     divFinded.remove();
            // }
            // addDiv();
            addScript(id, addTrack);
            // setTimeout(() => addScript(id, addTrack), 10000);
        }
        if (!wasFinded) {
           addScript(id, addTrack);
        }
    }
}

function addScript(id: string, addTrack: boolean) {
    console.log('addFaceBookScript', new Date());

    const facebookScript = document.createElement("script");

    facebookScript.id = id || 'fb-sdk';
    facebookScript.async = true;
    facebookScript.defer = true;
    facebookScript.crossOrigin = "anonymous";
    facebookScript.nonce = "xB6vPMou";
    const track = addTrack ? `&appId=${process.env.NEXT_PUBLIC_FACEBOOK_ID}&autoLogAppEvents=1` : '';
    facebookScript.src = `https://connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v10.0${track}`;

    document.body.appendChild(facebookScript);
}

function addDiv() {
    const div = document.createElement("div");
    div.id = 'fb-root';
    document.body.appendChild(div);
}