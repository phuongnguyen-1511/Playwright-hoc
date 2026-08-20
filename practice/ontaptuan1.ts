/*
Tạo interface TestCase gồm:

testName: string, bắt buộc
url: string, bắt buộc
isPassed: boolean, bắt buộc
priority: string, bắt buộc
note: string, không bắt buộc
*/


// phan 1
interface TestCase {

testName: string;

url: string;

isPassed: boolean;

priority: string;

note?: string

}
//phan 2
const danhSachTest: TestCase []= [

{testName: "loginValid1", url: "https://sydthunder-uat.mberplus.com.au/login", isPassed: true, priority: "medium"},

{testName: "loginValid2", url: "https://sydthunder-uat.mberplus.com.au/login", isPassed: false, priority: "high", note: "fixed"},

{testName: "loginInvalid1", url: "https://sydthunder-uat.mberplus.com.au/login", isPassed: true, priority: "low priority"},

{testName: "loginInvalid2", url: "https://sydthunder-uat.mberplus.com.au/login", isPassed: false, priority: "high", note: "code-review"}

]

//phan 3

const loginPassed = danhSachTest.filter(TestCase => TestCase.isPassed === true);

console.log("Test đã pass:", loginPassed);



const testNames = danhSachTest.map(TestCase => TestCase.testName);

console.log("Danh sách tên tất cả test:", testNames);



const highFirst = danhSachTest.find(TestCase => TestCase.priority ==="high" && TestCase.testName === "loginValid2");

console.log("Test có priority 'high' đầu tiên:",highFirst);

//phan 4 

function moTaTest(tc: TestCase):  string{
 return `Test Case 1: ${tc.testName}, URL: ${tc.url}, isPassed:${tc.isPassed}, priority:${tc.priority} `
};
const testCase1: TestCase = {
 testName: "loginValid3",
 url: "https://sydthunder-uat.mberplus.com.au/login",
 isPassed: true,
 priority: "high"
}

async function chayTest(tc: TestCase): Promise<void> {
 console.log(" Dang chay ...");
await new Promise(resolve => setTimeout(resolve,1000));
console.log("Hoan Thanh");
};
console.log  (moTaTest(danhSachTest[0]!));
chayTest (danhSachTest[0]!).then(()=>{console.log("Hoàn tất!")
});



