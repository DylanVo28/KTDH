# KTDH
mon ky thuat do hoa

download project
git clone https://github.com/DylanVo28/KTDH.git

làm việc trên repo KTDH

vào thư mục project, gõ các dòng lệnh

git init

git remote add origin git@github.com:DylanVo28/KTDH.git

Các dòng lệnh push code thần thánh

git commit //commit những thay đổi khi code

git pull // pull tất cả code mới về từ nhánh master, nếu bỏ qua dòng lệnh này thì có thể khi push sẽ bị mất code ở nhánh master 

git push // push code lên nhánh master

Tạo nhánh mới

git branch ... // tự tạo nhánh tên của mình ví dụ :git branch Branch-Dinh, nên code trên nhánh của mình

git checkout ... // di chuyển đến các nhánh ví dụ : git checkout Branch-Dinh

Quy trình:

Nên code trên nhánh của mình để ko xảy ra lỗi, code xong commit lại trên nhánh của mình,

sau đó checkout qua nhánh master(thường là nhánh main), 

pull code mới về từ nhánh master,

git merge Branch-Dinh,

sau đó push (lưu ý khi push code thì kiểm tra xem nó có bị conflict các file ko)
