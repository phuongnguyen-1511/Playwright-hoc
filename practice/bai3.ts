
/*
Viết interface TestCase có testName và url, sau đó:

1 hàm thường moTaTestCase(tc: TestCase): string — trả về chuỗi mô tả
1 hàm async chayTest(tc: TestCase): Promise<void> — in "Đang chạy...", chờ 1 giây, in "Hoàn thành!"
Tạo 1 object TestCase và gọi cả 2 hàm

*/
interface TestCase {
    testName: string;
    url: string;
}


function moTaTestCase(testCase: TestCase): string {
    return `Test Name: ${testCase.testName}, URL: ${testCase.url}`;
}

async function chayTest(testCase: TestCase): Promise<void> {
    console.log("Đang chạy test case...");
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Hoàn thành.");
}
const testCase1: TestCase = {
    testName: "Login with valid username and password",
    url: "https://example.com/login"

};
console.log(moTaTestCase(testCase1));

chayTest(testCase1).then(() => {
  console.log("Hoàn tất!");
});