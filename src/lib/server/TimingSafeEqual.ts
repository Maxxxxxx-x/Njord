export function TimingSafeEqual(a: string, b: string) : boolean {
    const StringA = String(a);
    let StringB = String(b);
    let Flags = 0;

    if (StringA.length != StringB.length) {
        StringB = StringA;
        Flags = 1;
    }

    for (let i = 0; i < StringA.length; i++) {
        Flags |= (StringA.charCodeAt(i) ^ StringB.charCodeAt(i));
    }

    return Flags === 0;
}