const multiplyer = n => a => a * n;

const double = multiplyer(2);
const triple = multiplyer(3);

double(3) //6
triple(3) //9