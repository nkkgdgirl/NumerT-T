import { Calbisection } from "./CalBisec";
import { calCramer } from "./CalCramer";

test("testcal_bi", () => {
    let cal = Calbisection(1.5, 2, "x^4-13");
    expect(cal.xnew).toBe(1.8988288640975952);
  });

test("testcal_bi", () => {
   let cal = calCramer([0,-2,-3],[[2,3,5],[3,1,-2],[1,3,4]],3);
   expect(cal.ans1new).toStrictEqual([1.5,-3.5,1.5]);
});