Link mẫu template: https://preview.themeforest.net/item/workwise-the-freelancer-and-social-networking-html-template/full_screen_preview/21647879?clickid=1z2X-H2qLxyPRxeTvz2WZ0A0UkHQO3zNZT78yM0&iradid=275988&iradtype=ONLINE_TRACKING_LINK&irgwc=1&irmptype=mediapartner&irpid=369282&mp_value1=&utm_campaign=af_impact_radius_369282&utm_medium=affiliate&utm_source=impact_radius

---------------------------------------------------------------------------------
Các màn hình sẽ làm:
1. login, singup
2. Home Page
3. My Profile
4. User profile
5. Message

---------------------------------------------------------------------------------
Các chức năng cụ thể sẽ được định nghĩa trong file thiết kế sử dụng figma
---------------------------------------------------------------------------------
1. Đăng ký đăng nhập
2. Màn hình index sẽ thực hiện các chức năng sau
    - Hiển thị thông tin cá nhn cơ bản:
        + Avatar, full name, overview với tối đa 100 ký tự và dấu (...).
        + Số người dùng mình đang follow, số người đang follow mình.
        + Danh sách tài khoản chưa kết bạn, hiển thị 6 users.
    - Thông tin các bài đăng ở phần trung tâm.
        + Ô tạo bài đăng mới.
        + Danh sách các bài đặt bao gồm: 
            Tên & avatar người đăng.
            Đối vs bài đăng của mình sẽ có dấu 3 chấm và có thể edit hoặc delete bài đăng.
            Công việc hiện tại, quốc gia hiện tại.
            Đưa bài đăng vào danh sách yêu thích.
            Dẫn tới màn hình messages.
            Hiển thị nội dung của bài đăng.
            Hiển thị danh sách các công việc của người đăng.
            Tổng số like, comment, view.
            Khi click vào comments thì sẽ hiển thị ô comment phía dưới giao dịch đó.
    - Phía bên phải bao gồm các phần sau:
        + Sliders hiển thị danh sách người dùng được nhiều người follow nhất, tối đa 6 người và có thể vào màn hình chi tiết.
        + Danh sách các bài đăng mình yêu thích.
            Avatar người đăng.
            Tên người đăng.
            Nội dung bài đăng, tối đa 150 ký tự và thêm dấu ...
            Icon để loại khỏi danh sách yêu thích.
            Tối đa 6 bài đăng và 1 button dẫn tới màn hình chi tiết.
        + Danh sách người dùng được nhiều người xem nhất.
            Avatar.
            Tên của người dùng.
            Công việc hiện tại.
            Button thm bạn nếu người này chưa là bạn mình.
    - Khi cuộn xuống sẽ hiển thị thêm các bài đăng, mỗi lần 6 bài đăng.
3. Phần notification sẽ có khi 1 ai đó bình luận vào bài đăng do người đang đăng nhập đăng bài.
4. Tìm kiếm sẽ hiển thị ra các bài đăng có nội dung trùng với đoạn ký tự trong ô tìm kiếm.
5. Màn hình messages sẽ có 2 pần như sau.
    - Phần bên trái sẽ hiển thị danh sách tài khoản đã kết bạn.
    - Pần bên phải sẽ là ô chat. áp dụng realtime sử dụng socket.io tại đây.
6. Màn hình người dùng.
    - Tương tự như bàn hình profile nhưng sẽ chỉ có button Add Friend và sẽ không chỉnh sửa đợc thông tin của người đó.
    - Nếu là bạn thì sẽ thay nút Add Friend sẽ là Unfriend.

