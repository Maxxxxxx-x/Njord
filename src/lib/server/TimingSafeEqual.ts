export function TimingSafeEqual(a : string, b : string) : boolean {
    const StrA = String(a);
    let StrB  = String(b);
    let Flags = 0;

    if (StrA.length !== StrB.length) {
        StrB = StrA;
        Flags += 1;
    }

    for (let i = 0; i < StrA.length; i++) {
        Flags |= StrA.charCodeAt(i) ^ StrB.charCodeAt(i);
    }

    return Flags === 0;
}