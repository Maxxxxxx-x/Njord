export function TimingSafeEqual(a : string, b : string) {
    const StrA = Buffer.from(a);
    let StrB = Buffer.from(b);
    let Flags = 0;

    if (StrA.length !== StrB.length) {
        StrB = StrA;
        Flags += 1;
    }

    for (let i = 0; i < StrA.length; i++) {
        Flags |= StrA[i] ^ StrB[i];
    }

    return Flags === 0;
}