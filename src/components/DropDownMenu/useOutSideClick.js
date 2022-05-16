import { useEffect, useState } from "react";

export function useOutSideClick (el, initialState) {
    const [isActive, SetIsActive] = useState(initialState);

    useEffect(()=>{
        const onClick = e =>{
            if(el.current !== null && !el.current.contains(e.target)){
                SetIsActive(!isActive);
            }
        }
        if(isActive){
            window.addEventListener("click", onClick)
        }
        return () => {
            window.removeEventListener("click", onClick);
        }

    }, [isActive, el])




    return ([isActive, SetIsActive]);
}

