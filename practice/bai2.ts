/*
/ Typescripe
// Bài 2: Interface & Type
Tạo một interface tên TestCase mô tả một ca kiểm thử, gồm ít nhất 4 field: tên test, URL, kết quả mong đợi, và một field tùy chọn (dùng ?). Sau đó tạo 2 object dựa theo interface đó.

Gợi ý các field bạn có thể dùng (không bắt buộc theo đúng):

testName: string
url: string
expectedResult: string
priority?: string (tùy chọn)
*/

interface TestCase {
    testName: string;
    url: string;
    expectedResult: string;
    createdBy?: string;
}

const testCase1: TestCase = {
    testName: "Login with valid username and password",
    url: "https://example.com/login",
    expectedResult: "User should be logged in successfully",
    createdBy: "QA Team"
};

const testCase2: TestCase = {
    testName: "Login with invalid username",
    url: "https://example.com/login",
    expectedResult: "User should see an error message for invalid username"
};

console.log("Test Case 1: ", testCase1);
console.log("Test Case 2: ", testCase2);    