const hello = (name?: string) => {
    if (!name) {
        console.log("hello.");
        return;
    }
    if (name === "world") {
        console.log("hello, world!!");
        return;
    }
    console.log(`hello, ${name}`);
}

hello();
hello("world");
hello("eslint");
