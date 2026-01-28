# Lession 1: Khái niệm Playwright, Giải thích các công cụ làm việc, cách cài tools.

## Playwright:
### Khái niệm:
- Là một framework được phát triển bởi Microsoft.
### Ưu điểm: 
- Hỗ trợ các trình duyệt phổ biến: Chrome, Edge, Firefox, Safari.
- Code một lần, chạy trên các hệ điều hành phổ biến: Windows, Linux, MacOS.
- Tính năng “xịn sò”: auto waiting, auto-retry assertion giúp giảm flaky tests (lúc pass,lúc fail)
- Report đầy đủ thông tin: Pass/fail theo từng loại trình
duyệt. Chi tiết ở từng thời điểm: gọi API nào?, response trả về gì?, ứng với dòng code nào?
- Code gen: thao tác để sinh ra code.


## Node Version Manager (NVM): quản lý các phiên bản NodeJs
NodeJS: công cụ để chạy code. 
2 options:
- Cài trực tiếp NodeJS vào máy
- Cài thông qua NVM

## Cách cài đặt cấu hình git:

`git config --global user.name "tênuser"` // đặt tên user

`git config --global user.emai "emailuser"` // đặt email cho config user

NOTE: trường hợp có dự án cần cấu hình riêng thì bỏ đi `--global`

`git init --global init.defaultBranch main` // khởi tạo thư mục được quản lý bởi git, chọn nhánh default là nhánh main.

## Cài đặt VS Code:
VS Code = IDE = integrated development environment: Là công cụ để viết code.

1. Cài đặt Visual Studio Code: https://code.visualstudio.com/
2. Cài đặt extension: Playwright extension: https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright.
3. Đổi terminal mặc định:

Window Powershell là terminal mặc định trên Windows. Powershell hay bị chặn/lỗi lặt vặt => dùng Git Bash để tránh các lỗi này.
- Ctrl + Shift + P: Hiển thị hộp thoại
- Tìm kiếm: Terminal default
- Chọn: Terminal: Select Default Profile
- Chọn Git Bash.
- Kiểm tra lại.

## Kết nối với GitHub: 
Muốn connect chưa Git local computer và GitHub web server => cần có khóa xác thực (SSH Keys).

SSH Keys: là cặp khóa id_rsa (private key trên local computer) và id_rsa.pub (public key trên GitHub).

Để dễ xác thực hơn => lưu SSH Keys ở ~/.ssh (~ là thư mục home: C:\Users\{username})

### Lệnh tạo SSH Keys:
`ssh-keygen -t rsa -b 4096 -C "your_email@example.com"`

Enter cho đến khi nào hiển thị một loạt ký tự đặt biệt là thành công.

### Lấy nội dung ssh key: cat
`~/.ssh/id_rsa.pub`

Truy cập: https://github.com/settings/ssh/new để thêm ssh key

## Cài đặt Playwirght:
1. Tạo thư mục
2. Mở thư mục bằng VS Code.
3. Mở Terminal lên và chạy lệnh: `npm init playwright@latest`
4. Gõ Enter liên tục cho đến khi thấy text "Happy hacking!"

## Đưa code lên GitHub:
1. Tạo repo trên GitHub. 
2. Khởi tạo:

    - Khởi tạo repo local: `git init`
    - Liên kết với repository trên GitHub: `git remote add origin <ssh_link>`
    - Thêm code: `git add .`
    - Thêm commit: `git commit -m"init project"`
3. Push code: `git push origin main`
4. Invite member vào GitHub repo
    - Vào repo setting -> add collaboratior.