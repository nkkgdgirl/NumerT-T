import { det } from 'mathjs'

export const calCramer = (ans,data,dimension) => {
    let mC, mA, mB, k = 0, DetA, ans1 = []
    let x = []
    mA = data
    mB = ans
    DetA = det(mA)
    console.log(mA);
    if (DetA === 0) {
        console.log("Can't divide by zero!");
    }
    else {
        for (let j = 0; j < dimension; j++) {
            mC = mA.map(row => [...row])
            for (let i = 0; i < dimension; i++) {
                mC[i][k] = mB[i];
            }
            x[k] = det(mC) / DetA;
            ans1.push(x[k])
            console.log(`Y${k} = ${x[k]}`);
            k++;
        }
        console.log(ans1);
        return {ans1new:ans1}
    }
}