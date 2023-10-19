import React from "react";
import "./index.scss"
import { Input } from 'antd';
import {Button} from "@mui/material";
function ToolPage() {
    return (
        <div className={"flex flex-col justify-center items-center"}>
            <div style={{fontSize: "20pt", marginTop: "30px"}}>
                <h2>
                    công cụ tính chỉ số bmi
                </h2>
            </div>
            <div className={"form w-9/12 bg-gray-200 rounded p-5 mt-10 mb-10 flex flex-col items-center"}>
                <div className={"flex w-full justify-between items-center"}>
                    <p>
                        Chiều cao
                    </p>
                    <Input placeholder={"Nhập chiều cao tính bằng cm"} className={"w-10/12 p-3"} />
                </div>
                <div className={"flex w-full mt-5 justify-between items-center"}>
                    <p>
                        Cân nặng
                    </p>
                    <Input placeholder={"Nhập cân nặng tính bằng Kg"} className={"w-10/12 p-3"} />
                </div>
                <div className={"flex w-full mt-5 justify-between items-center mb-10"}>
                    <p>
                        Kết quả tính
                    </p>
                    <p className={"text-start w-10/12"}>22.2</p>
                </div>
                <Button variant="contained" color={'success'}>Tính BMI</Button>
            </div>
            <div className={"w-9/12"}>
                <img src={"https://healthyeating.shop/wp-content/uploads/2021/03/che-do-an-giam-can-1.png"} />
                <div className="">
                    <p><span className={"text-xl"}>BMI hay còn gọi là chỉ số khối cơ thể, là một trong những chỉ số quan trọng để đánh giá tình trạng sức khỏe của con người. BMI là tỉ lệ giữa cân nặng và chiều cao của một người. Cách tính BMI thường mà mọi người thường sử dụng là: chia cân nặng (kg) cho bình phương chiều cao (m).</span></p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <div style={{ textAlign: 'justify' }}>
                        <p>
        <span style={{ fontSize: '14pt' }}>
          Cách tính BMI rất dễ dàng và nhanh chóng, không yêu cầu kiến thức chuyên môn cao, tuy nhiên việc hiểu và áp dụng đúng cách tính BMI là một câu chuyện khác. Trong bài viết này, chúng ta sẽ tìm hiểu chi tiết về cách tính BMI và cách áp dụng nó vào đánh giá sức khỏe.
        </span>
                        </p>
                        <p>&nbsp;</p>
                        <h2>
        <span style={{ color: '#008000' }}>
          <strong>
            <span style={{ fontSize: '18pt' }}>Cách tính BMI</span>
          </strong>
        </span>
                        </h2>
                        <p>&nbsp;</p>
                        <p>
        <span style={{ fontSize: '14pt' }}>
          Công thức và cách tính BMI khá đơn giản, bạn chỉ cần chia cân nặng (kg) cho bình phương chiều cao (m):
        </span>
                        </p>
                        <p>&nbsp;</p>
                        <p>
                            <strong>
                                <span style={{ fontSize: '14pt' }}>BMI = cân nặng (kg) / (chiều cao (m))^2</span>
                            </strong>
                        </p>
                        <p>&nbsp;</p>
                        <p>
        <span style={{ fontSize: '14pt' }}>
          Ví dụ: Nếu bạn cao 1,7m và nặng 65kg, thì BMI của bạn sẽ được tính như sau:
        </span>
                        </p>
                        <p>&nbsp;</p>
                        <p>
                            <span style={{ fontSize: '14pt' }}>BMI = 65 / (1.7)^2 = 22.5</span>
                        </p>
                        <p>&nbsp;</p>
                        <p>
        <span style={{ fontSize: '14pt' }}>
          Nếu bạn vẫn chưa rõ cách tính BMI. Bạn có thể{' '}
            <a href="https://healthyeating.shop/cong-cu-tinh-chi-so-bmi/">tính BMI tại Healthy eating</a> để có được một kết quả nhanh chóng và chính xác nhất. Ngoài ra còn có lời khuyên từ các chuyên gia dinh dưỡng phù hợp với từng chỉ số BMI của bạn.
        </span>
                        </p>
                        <h2>
                            <strong>
                                <span style={{ fontSize: '18pt', color: '#008000' }}>Đánh giá chỉ số BMI của bạn</span>
                            </strong>
                        </h2>
                        <p>&nbsp;</p>
                        <p>
        <span style={{ fontSize: '14pt' }}>
          Sau khi tính được BMI, chúng ta cần phải đánh giá và so sánh với các mức độ chuẩn của BMI. Theo tiêu chuẩn của Tổ chức Y tế Thế giới (WHO), mức độ BMI được phân loại như sau:
        </span>
                        </p>
                        <p>&nbsp;</p>
                        <ul>
                            <li>
                                <strong>
                                    <span style={{ fontSize: '14pt' }}>Dưới 18.5: Thiếu cân</span>
                                </strong>
                            </li>
                            <li>
                                <strong>
                                    <span style={{ fontSize: '14pt' }}>Từ 18.5 đến 24.9: Bình thường</span>
                                </strong>
                            </li>
                            <li>
                                <strong>
                                    <span style={{ fontSize: '14pt' }}>Từ 25 đến 29.9: Thừa cân</span>
                                </strong>
                            </li>
                            <li>
                                <strong>
                                    <span style={{ fontSize: '14pt' }}>Từ 30 đến 34.9: Béo phì độ I</span>
                                </strong>
                            </li>
                            <li>
                                <strong>
                                    <span style={{ fontSize: '14pt' }}>Từ 35 đến 39.9: Béo phì độ II</span>
                                </strong>
                            </li>
                            <li>
                                <strong>
                                    <span style={{ fontSize: '14pt' }}>Trên 40: Béo phì độ III</span>
                                </strong>
                            </li>
                        </ul>
                        <p>&nbsp;</p>
                        <p>
        <span style={{ fontSize: '14pt' }}>
          Tuy nhiên, chỉ số BMI chỉ là một phần trong quá trình đánh giá tình trạng sức khỏe của con người. Để đánh giá một cách chính xác hơn, chúng ta cần kết hợp với các chỉ số khác như vòng eo, vòng bụng, tỷ lệ mỡ cơ thể, tỷ lệ cơ và mỡ cơ thể, áp lực máu, huyết áp, đường huyết, lipid máu, chức năng thận, tim mạch và phổi, hệ tiêu hóa, hệ miễn dịch, chức năng não bộ,…
        </span>
                        </p>
                        <p>&nbsp;</p>
                        <h2>
                            <span style={{ fontSize: '18pt', color: '#008000' }}>Tại sao chỉ số BMI quan trọng?</span>
                        </h2>
                        <p>&nbsp;</p>
                        <p>
        <span style={{ fontSize: '14pt' }}>
          BMI quan trọng vì nó là một chỉ số đơn giản của cơ thể con người, dễ đo và dễ tính toán, có thể áp dụng cho mọi lứa tuổi và giới tính. Chỉ số BMI cũng được sử dụng để đánh giá tình trạng sức khỏe của một số tập thể như người lớn tuổi, trẻ em, phụ nữ mang thai, người vận động viên,…
        </span>
                        </p>
                        <p>&nbsp;</p>
                        <p>
        <span style={{ fontSize: '14pt' }}>
          BMI được sử dụng để phát hiện nguy cơ bệnh tật do béo phì hoặc thiếu cân, ví dụ như bệnh tiểu đường, bệnh tim mạch, bệnh tăng huyết áp, bệnh ung thư, bệnh về xương khớp, bệnh hô hấp, bệnh thần kinh, bệnh tâm thần,…
          Nếu BMI của bạn nằm trong khoảng bình thường (18.5 – 24.9), bạn có nguy cơ thấp hơn mắc các bệnh liên quan đến cân nặng.
        </span>
                        </p>
                        <p>&nbsp;</p>
                        <p>
        <span style={{ fontSize: '14pt' }}>
          Tuy nhiên, BMI không phải là chỉ số tuyệt đối để đánh giá tình trạng sức khỏe của con người. Ví dụ, nếu bạn là một vận động viên, có tỷ lệ cơ nhiều hơn mỡ, thì chỉ số BMI có thể bị sai lệch vì nó không phân biệt được giữa mỡ và cơ. Hoặc nếu bạn là người già, chỉ số BMI có thể không phản ánh chính xác tình trạng sức khỏe của bạn vì các yếu tố khác như thay đổi về cơ thể, tỷ lệ cơ và mỡ cơ thể,…
        </span>
                        </p>
                        <p>&nbsp;</p>
                        <h2>
                            <strong>
                                <span style={{ fontSize: '18pt', color: '#008000' }}>Cách giảm chỉ số BMI</span>
                            </strong>
                        </h2>
                        <p>&nbsp;</p>
                        <p>
        <span style={{ fontSize: '14pt' }}>
          Để giúp các chỉ số BMI trong cơ thể giảm xuống. Tuy nhiên, để cơ thể đạt được chỉ số BMI mong muốn, các chuyên gia khuyến khích bạn giảm cân và có rất nhiều cách khác nhau để{' '}
            <strong>
            <a href="https://healthyeating.shop/blog-giam-can/thuc-pham-giam-can-tai-nha-hieu-qua/">giảm cân một cách an toàn và hiệu quả</a>
          </strong>
          .
        </span>
                        </p>
                        <p>&nbsp;</p>
                        <p>
        <span style={{ fontSize: '14pt' }}>
          Để giảm cân, bạn cần ăn uống đầy đủ dinh dưỡng, tập luyện thể thao thường xuyên và duy trì một phong cách sống lành mạnh. Bạn cũng có thể tìm kiếm sự trợ giúp từ chuyên gia dinh dưỡng hoặc huấn luyện viên để có{' '}
            <strong>
            <a href="https://healthyeating.shop/category_package/goi-an-giam-can/"><strong>kế hoạch giảm cân hợp lý</strong></a>
          </strong>
          .
        </span>
                        </p>
                        <p>&nbsp;</p>
                        <p>
        <span style={{ fontSize: '14pt' }}>
          Bạn cũng có thể tham khảo ý kiến của chuyên gia dinh dưỡng hoặc huấn luyện viên để có{' '}
            <a href="https://healthyeating.shop/category_package/goi-an-giam-can/">kế hoạch giảm cân hiệu quả.</a>
        </span>
                        </p>
                        <p>&nbsp;</p>
                        <p>
        <span style={{ fontSize: '14pt' }}>
          Hãy cùng nhà <a href="https://healthyeating.shop/category_package/goi-an-giam-can/">healthyeating</a> tìm hiểu 5+ lời khuyên giúp giảm chỉ số BMI từ các chuyên gia sức khỏe hàng đầu nhé:
        </span>
                        </p>
                        <p>
        <span style={{ color: '#008000' }}>
          <strong>
            <span style={{ fontSize: '14pt' }}>1. Tập trung vào thay đổi lối sống</span>
          </strong>
        </span>
                        </p>
                        <p>
        <span style={{ fontSize: '14pt' }}>
          Giảm cân không chỉ là việc ăn ít hơn và tập luyện nhiều hơn. Để giảm cân hiệu quả, bạn cần thay đổi lối sống của mình bằng cách ăn uống đầy đủ dinh dưỡng và tập luyện thể thao thường xuyên.
        </span>
                        </p>
                        <p>&nbsp;</p>
                        <h3>
        <span style={{ color: '#008000' }}>
          <strong>
            <span style={{ fontSize: '14pt' }}>2. Ăn ít calo hơn</span>
          </strong>
        </span>
                        </h3>
                        <p>
        <span style={{ fontSize: '14pt' }}>
          Việc giảm calo là một trong những cách hiệu quả để giảm cân. Tuy nhiên, bạn không nên giảm quá nhiều calo một cách đột ngột, vì điều này có thể gây hại cho sức khỏe của bạn. Thay vào đó, bạn nên giảm dần lượng calo trong khẩu phần ăn của mình một cách dần dần.
        </span>
                        </p>
                        <p>&nbsp;</p>
                        <h3>
        <span style={{ color: '#008000' }}>
          <strong>
            <span style={{ fontSize: '14pt' }}>3. Tập thể dục đều đặn</span>
          </strong>
        </span>
                        </h3>
                        <p>
        <span style={{ fontSize: '14pt' }}>
          Tập thể dục đều đặn là một phần quan trọng của việc giảm cân. Bạn nên tập luyện ít nhất 30 phút mỗi ngày, ít nhất 5 ngày trong tuần. Các hoạt động như chạy bộ, đi bộ, bơi lội và tập thể dục trong phòng gym đều rất tốt cho sức khỏe của bạn.
        </span>
                        </p>
                        <p>&nbsp;</p>
                        <h3>
        <span style={{ color: '#008000' }}>
          <strong>
            <span style={{ fontSize: '14pt' }}>4. Điều chỉnh khẩu phần ăn</span>
          </strong>
        </span>
                        </h3>
                        <p>
        <span style={{ fontSize: '14pt' }}>
          Điều chỉnh khẩu phần ăn của bạn là một phần quan trọng trong việc giảm cân. Bạn nên tập trung vào ăn các loại thực phẩm tươi, giàu dinh dưỡng như rau xanh, trái cây, thịt trắng, đậu hạt, hạt giống và các sản phẩm từ sữa không béo.
        </span>
                        </p>
                        <p>&nbsp;</p>
                        <p>
        <span style={{ fontSize: '14pt' }}>
          <strong>
            <span style={{ color: '#ff6600' }}>
              &gt;&gt;&gt; Bạn có thể tham khảo thêm:{' '}
                <span style={{ color: '#008000' }}>
                <a style={{ color: '#008000' }} href="https://healthyeating.shop/blog-giam-can/lam-sao-de-giam-can-cap-toc-13-loi-khuyen-tu-chuyen-gia-giup-ban-giam-can-nhanh-chong/">
                  Làm Sao Để Giảm Cân Cấp Tốc? 13 Lời Khuyên Từ Chuyên Gia Giúp Bạn Giảm Cân Nhanh Chóng
                </a>
              </span>
            </span>
          </strong>
        </span>
                        </p>
                        <p>&nbsp;</p>
                        <h2>
        <span style={{ fontSize: '18pt', color: '#008000' }}>
          <strong>Cách tăng chỉ số BMI</strong>
        </span>
                        </h2>
                        <p>&nbsp;</p>
                        <p>
        <span style={{ fontSize: '14pt' }}>
          Để tăng BMI, bạn cần tập trung vào việc tăng cân một cách khỏe mạnh bằng cách tập trung vào việc tăng cường cơ bắp và tiêu thụ đầy đủ các dưỡng chất cần thiết cho cơ thể. Dưới đây là một số cách để tăng BMI của bạn:
        </span>
                        </p>
                        <p>&nbsp;</p>
                        <ul>
                            <li>
                                <strong>
                                    <span style={{ fontSize: '14pt' }}>Tăng calo hàng ngày</span>
                                </strong>
                            </li>
                            <li>
                                <strong>
                                    <span style={{ fontSize: '14pt' }}>Tập luyện để xây dựng cơ bắp</span>
                                </strong>
                            </li>
                            <li>
                                <strong>
                                    <span style={{ fontSize: '14pt' }}>Sử dụng bữa ăn bổ sung</span>
                                </strong>
                            </li>
                        </ul>
                        <p>&nbsp;</p>
                        <p>
        <span style={{ fontSize: '14pt' }}>
          Điều quan trọng là tăng cân một cách khỏe mạnh bằng cách tập trung vào việc tăng cường cơ bắp và tiêu thụ đầy đủ các dưỡng chất cần thiết cho cơ thể. Bạn nên tìm kiếm sự hỗ trợ từ chuyên gia dinh dưỡng hoặc huấn luyện viên để có một kế hoạch tăng cân hiệu quả và an toàn.
        </span>
                        </p>
                        <p>&nbsp;</p>
                        <h2>
                            <strong>
                                <span style={{ fontSize: '18pt', color: '#008000' }}>Kết luận</span>
                            </strong>
                        </h2>
                        <p>&nbsp;</p>
                        <p>
        <span style={{ fontSize: '14pt' }}>
          Chỉ số BMI là một công cụ đơn giản nhưng quan trọng trong việc đánh giá tình trạng sức khỏe của con người. Nó có thể giúp bạn kiểm tra tình trạng cơ thể của mình và phát hiện nguy cơ bệnh tật do béo phì hoặc thiếu cân. Tuy nhiên, chỉ số BMI cũng có nhược điểm của nó và không phải lúc nào cũng phản ánh chính xác tình trạng sức khỏe của con người.
        </span>
                        </p>
                        <p>&nbsp;</p>
                        <p>
        <span style={{ fontSize: '14pt' }}>
          Để duy trì một cơ thể khỏe mạnh, bạn nên kết hợp chỉ số BMI với các chỉ số khác và lời khuyên từ các chuyên gia sức khỏe. Hãy cân nhắc và tìm hiểu cẩn thận trước khi quyết định về cách tăng hoặc giảm chỉ số BMI của mình.{' '}
        </span>
                        </p>
                        <p>&nbsp;</p>
                        <p>
        <span style={{ fontSize: '14pt' }}>
          Mọi thông tin trong bài viết này chỉ mang tính chất tham khảo và không thay thế cho tư vấn y tế chuyên nghiệp. Nếu bạn có bất kỳ vấn đề sức khỏe nào, hãy tham khảo ý kiến của bác sĩ hoặc chuyên gia y tế có liên quan.
        </span>
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default ToolPage;
