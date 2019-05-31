let a;
let b;

for (let i = 2 ; i < 10 ; i++)
{
    a = false;
    b = 2;
    while (b < i ) {
        if (i % b == 0)
        a = true;

        b++;
    }
    if (a == false) {
        console.log(i);
    }
}