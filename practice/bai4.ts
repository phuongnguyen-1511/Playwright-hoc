interface User {
    email: string;
    password: string;
    role: string;
    isActive: boolean;
};

const danhsachUsers: User[] = [
 {email: "test@example.com", password: "password123", role: "admin", isActive: true},
 {email: "member@example.com", password: "password456", role: "member", isActive: true},
 {email: "guest@example.com", password: "password456", role: "guest", isActive: false},
 {email: "member2@example.com", password: "password456", role: "member", isActive: true},
];

const userActive = danhsachUsers.filter(user => user.isActive === true);
console.log("User đang hoạt động:", userActive);
console.log("Số lượng user đang hoạt động:", userActive.length);

const userInactive = danhsachUsers.filter(user => user.isActive === false);
console.log("User không hoạt động:", userInactive);
console.log("Số lượng user không hoạt động:", userInactive.length);

const userAdmin = danhsachUsers.filter(user => user.role === "admin");
console.log("User có role là admin:", userAdmin);
console.log("Số lượng user có role là admin:", userAdmin.length);

const userMember = danhsachUsers.find(user => user.role === "member");
console.log("User có role là member:", userMember);

const timKhongCo = danhsachUsers.find(user => user.role === "superadmin");
console.log("User có role là superadmin:", timKhongCo);

const danhSachEmail = danhsachUsers.map(user => user.email);
console.log("Danh sách email của user:", danhSachEmail);




