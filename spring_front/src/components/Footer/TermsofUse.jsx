import React from 'react';
import './TravelTermsandConditions.css'; // CSS 파일도 만들어 주세요.
import Layout from '../Layout';

const TermsOfUse = () => {
    return (
        <div className="terms-container">
            <Layout title='이용약관'>
                <h1 className="terms-header">이용약관</h1>
                <div className="term-section">
                    <p className="term-title">제1조 (목적)</p>
                    <p className="term-text">
                    본 규정은 주식회사 TRABLE(이하 회사라 함)이 운영하는 인터넷 웹사이트에서 제공하는 서비스를 이용자가 이용함에 있어 회사와 이용자간 권리·의무 및 기타 책임사항 등에 대하여 규정함을 목적으로 합니다.
                    </p>
                </div>
                <div className="term-section">
                    <p className="term-title">제2조 (용어의 정의)</p>
                    <p className="term-text">
                    본 규정에서 사용하는 용어의 정의는 다음 각 호와 같습니다.
                    1. 이용자라 함은 사이트에 접속하여 본 규정에 따라 회사가 제공하는 서비스를 이용하는 회원 또는 비회원을 말합니다.
                    2. 회원이라 함은 사잍에 개인정보를 제공하고 회원등록을 한 자로 사이트를 통해 지속적으로 제공하는 정보 및 서비스를 계속적으로 이용할 수 있는 자를 말합니다.
                    3. 비회원이라 함은 사이트에 회원으로 가입하지 않고 회사가 제공하는 정보 및 서비스를 이용하는 자를 말합니다.
                    4. 개인정보라 함은 성명, 생년월일, 전자우편, 휴대전화번호 등 특정 개인을 식별할 수 있는 정보를 말합니다.
                    </p>
                </div>
                <div className="term-section">
                    <p className="term-title">제3조 (서비스의 제공)</p>
                    <p className="term-text">
                    ① 회사는 사이트를 통해 다음의 서비스를 제공합니다. 
                    1. 국내·외 여행상품 및 항공권 등의 판매 서비스 
                    2. 포인트 서비스
                    3. 여행정보·여행상품 관련 정보 제공 서비스
                    4. 기타 회사가 정하는 업무
                ② 회사는 필요한 경우 전항의 서비스의 내용을 임의로 추가, 조정 등 변경하여 적용할 수 있습니다.

                제4조(서비스의 이용 및 제한)
                ① 서비스의 이용은 회사의 업무상 또는 기술상 특별한 지장이 없는 한 연중무휴 1일 24시간(00:00 ~ 24:00)을 원칙으로 합니다.
                ② 회사는 전항의 이용시간에 관련하여 정기점검 등의 필요로 인하여 임의로 날짜와 시간을 정해 서비스를 중단할 수 있습니다.
                ③ 서비스의 이용신청은 사이트에 이용등록 절차를 거쳐(각 규정을 포함하여 개인정보 수집, 제공, 이용에 동의) 회원등록을 할 수 있습니다.
                ④ 회사는 다음 각 호에 해당하는 경우 서비스 제공을 중지 또는 제한할 수 있습니다. 
                    1. 설비의 보수 등 공사로 인한 부득이한 경우
                    2. 전기통신사업법에 규정된 통신사업자가 전기통신서비스를 중지 했을 경우
                    3. 국가 비상사태, 정전, 서비스 설비의 장애 또는 서비스 이용의 폭주 등으로 정상적인 서비스 이용에 지장이 있는 경우
                    </p>
                </div>
                <div className="term-section">
                    <p className="term-title">제4조 (서비스의 이용 및 제한)</p>
                    <p className="term-text">
                    ① 서비스의 이용은 회사의 업무상 또는 기술상 특별한 지장이 없는 한 연중무휴 1일 24시간(00:00 ~ 24:00)을 원칙으로 합니다.
                    ② 회사는 전항의 이용시간에 관련하여 정기점검 등의 필요로 인하여 임의로 날짜와 시간을 정해 서비스를 중단할 수 있습니다.
                    ③ 서비스의 이용신청은 사이트에 이용등록 절차를 거쳐(각 규정을 포함하여 개인정보 수집, 제공, 이용에 동의) 회원등록을 할 수 있습니다.
                    ④ 회사는 다음 각 호에 해당하는 경우 서비스 제공을 중지 또는 제한할 수 있습니다. 
                        1. 설비의 보수 등 공사로 인한 부득이한 경우
                        2. 전기통신사업법에 규정된 통신사업자가 전기통신서비스를 중지 했을 경우
                        3. 국가 비상사태, 정전, 서비스 설비의 장애 또는 서비스 이용의 폭주 등으로 정상적인 서비스 이용에 지장이 있는 경우
                    </p>
                </div>
                <div className="term-section">
                    <p className="term-title">제5조 (회원의 이용제한 및 해제절차)</p>
                    <p className="term-text">
                    ① 회사는 본 규정 제8조에 의하여 회원에 대한 서비스이용을 제한하고자 하는 경우에는 그 사유, 일시 및 기타사항을 정하여 본 규정 제17조에 따라 회원에게 통지합니다. 
                    다만, 회사가 긴급하게 이용을 정지할 필요가 있다고 판단하는 경우 또는 제13조 제5항에 따른 경우에는 그러하지 아니합니다.
                    ② 전항에 의하여 이용제한의 통지를 받은 회원은 그 이용제한 통지에 대하여 이의신청을 할 수 있습니다.
                    ③ 회원의 이의신청에 대하여 그 확인기간까지 이용정지를 일시 연기할 수 있으며, 그 결과를 회원에게 통지합니다.
                    ④ 회원의 이용정지 사유가 해소 된 경우 그 즉시 이용정지를 해제 합니다.
                    </p>
                </div>
                <div className="term-section">
                    <p className="term-title">제6조 (회원 가입)</p>
                    <p className="term-text">
                    ① 회원은 회사가 정한 가입양식에 따라 개인정보를 기재 한 후 각 규정에 동의 등의 등록절차를 거쳐 회원가입은 완료됩니다.
                    ② 회원이 가입하면 내 동의란에 체크하는 것은 회사가 정한 규정에 합법적으로 동의하는 것으로 간주됩니다.
                    ③ 만 19세 미만 미성년자가 포인트 제도를 이용하기 위해서는 법정대리인의 동의가 필요하며, 이 경우 회사는 별도의 동의서류를 수집할 수 있습니다.
                    ④ 다음 각 호에 해당하는 자는 회원으로 등록 할 수 없습니다.
                        1. 타인 또는 가설인 명의로 가입을 신청한 경우
                        2. 회원가입 신청서 내용의 일부 또는 전부를 허위로 기재한 경우
                        3. 아동(만14세 미만인 자)의 경우
                    ⑤ 회원은 등록사항에 대하여 변동이 발생한 경우 사이트 내 회원정보변경을 통해 직접 변동사항을 수정, 등록함으로써 최신 정보가 유지되도록 해야 합니다.
                    ⑥ 회원가입신청서에 기입한 모든 정보는 실제정보와 동일한 것으로 간주되며 정보를 입력하지 않거나 수정하지 않음으로 인해 발생하는 불이익은 회원이 부담하게 됩니다.
                    </p>
                </div>
                <div className="term-section">
                    <p className="term-title">제7조 (회원 ID·Password)</p>
                    <p className="term-text">
                    제7조(회원 ID·Password)
                    ① 사이트 서비스를 이용하고자 하는 회원은 회사가 정하는 바에 따라 회원 ID 및 Password를 등록해야 합니다.
                    ② 회원에게 부여된 ID·Password의 관리 소홀, 부정사용에 의해 발생하는 모든 결과에 대한 책임은 회원에게 있습니다.
                    ③ 타인이 자신의 회원 ID·Password를 부정하게 사용한 경우 회원은 즉시 회사에 그 사실을 통보해야 하며 회사의 별도 안내가 있는 경우에는 그에 따라야 합니다.
                    </p>
                </div>
                <div className="term-section">
                    <p className="term-title">제8조 (회원탈퇴 및 자격 상실)</p>
                    <p className="term-text">
                    ① 탈퇴를 희망하는 회원은 사이트의 마이페이지에서 회원탈퇴 기능을 통해 언제든지 용이하게 탈퇴할 수 있습니다.
                    ② 회사는 회원이 다음 각 호에 해당하는 행위를 한 경우 사전통지 없이 이용 계약을 해지 하거나 기간을 정하여 서비스 이용을 중지할 수 있습니다. 
                        1. 타인의 회원정보를 도용한 경우
                        2. 서비스 운영을 고의로 방해한 경우
                        3. 등록한 정보가 실제정보와 상이한 경우
                        4. 공공질서 및 미풍양속에 저해되는 내용을 고의로 유포시킨 경우
                        5. 국익 또는 사회적 공익을 저해할 목적으로 서비스를 이용하는 경우
                        6. 회사 또는 타인의 명예를 손상시키거나 불이익을 주는 행위를 한 경우
                        7. 사망한 경우
                        8. 본 규정 제13조의 의무를 이행하지 않은 경우
                    ③ 전항에 의한 회원탈퇴 또는 자격상실 효력발생일은 아래 각 호와 같습니다. 
                        1. 회원탈퇴일 또는 회사의 회원자격상실 통보일
                        2. 사망으로 인한 자격상실의 경우에는 그 사망일
                    </p>
                </div>
                <div className="term-section">
                    <p className="term-title">제9조 (판매상품 등에 대한 구입)</p>
                    <p className="term-text">
                    ① 이용자는 사이트에서 정한 방식에 따라 판매상품을 구매 할 수 있습니다.
                    ② 회사는 전항의 구매에 대하여 다음 각 호에 해당하는 경우에는 회원의 구매에 대하여 승인을 취소할 수 있습니다. 
                        1. 신청내용 상 허위·기재누락·오기가 있는 경우
                        2. 구매신청 내용이 현행법령이나 회사의 규정에 부적합한 경우
                    ③ 이용자는 구매한 상품에 대하여 구매를 취소하거나 변경을 요청할 수 있으며, 이 경우 별도의 수수료가 발생할 수 있습니다.
                    </p>
                </div>
                <div className="term-section">
                    <p className="term-title">제10조 (결제방식)</p>
                    <p className="term-text">
                    사이트에서 판매되는 상품을 구입한 이용자는 회사가 정한 다음 각 호의 방식 중 하나를 선택하여 대금을 결제할 수 있습니다. 
                    단, 제3호의 포인트 결제는 다른 결제 방식과 함께 사용할 수 있습니다.
                    1. 신용카드 결제
                    2. 계좌이체
                    3. 포인트 결제
                    4. 상품권 결제
                    5. 기타 회사가 정한 결제방식
                    </p>
                </div>
                <div className="term-section">
                    <p className="term-title">제11조 (정보 제공)</p>
                    <p className="term-text">
                    회사는 회원이 서비스 이용 중 필요가 있다고 인정되는 다양한 정보에 대하여 전자우편, 유선매체, 서신우편 등의 방법으로 회원에게 제공할 수 있습니다.
                    </p>
                </div>
                <div className="term-section">
                    <p className="term-title">제12조 (회사의 의무)</p>
                    <p className="term-text">
                    ① 회사는 법령과 본 규정이 금지한 행위를 하지 아니하며, 본 규정이 정하는 바에 따라 지속적이고, 안정적인 서비스를 제공하는 데 최선을 다하도록 하겠습니다.
                    ② 회사는 사이트를 통해 제공하는 상품이나 서비스에 대하여 표시·광고의 공정화에 관한 법률 제3조에서 정한 부당한 표시, 광고행위를 하지 않겠습니다.
                    ③ 회사는 사이트에 대한 공정하고 건전한 운영을 통하여 전자상거래질서를 유지하고, 지속적인 연구·개발을 통하여 양질의 서비스를 제공하도록 노력하겠습니다.
                    </p>
                </div>
                <div className="term-section">
                    <p className="term-title">제13조 (회원의 의무)</p>
                    <p className="term-text">
                    ① 회원은 관련 법령, TRABLE이 규정에서 정한 사항 및 주의사항으로서 고지한 내용을 준수하여야 하며, 회사의 정상적 업무를 방해하는 행위를 해서는 아니 됩니다.
                    ② 회원은 가입신청 시 사실에 입각하여 정직하고 성실하게 가입신청서를 작성해야 하며, 기재한 사항에 대한 변경사유가 발생하는 경우 사실에 맞게 변경해야 합니다. 만일 변경사유가 발생하였음에도 불구하고 변경하지 않아 발생하게 되는 모든 문제에 대해서는 회원이 책임을 부담하게 됩니다.
                    ③ 회원은 서비스의 이용과정에서 습득한 정보를 TRABLE의 사전동의 없이 임의로 복사·복제·변경해서는 아니 되며, 기타 영리목적으로 활용해서도 아니 됩니다.
                    ④ 회원은 전항의 행위 외에도 다음 각 호의 행위를 해서는 아니 됩니다. 
                        1. 타 회원 또는 제3자를 비방하여 명예를 손상시키는 경우
                        2. 타 회원의 계정 및 개인정보를 부정하게 사용하는 경우
                        3. 제3자의 저작권 등 기타 권리를 침해하는 경우
                        4. 공공질서 및 미풍양속에 위반되는 내용을 타인에게 유포하는 경우
                        5. 범죄와 결부되거나 주제에 관계없는 광고성 내용을 기재한 경우
                        6. 포인트의 부정 적립·사용 등 포인트 서비스를 부정한 방법·목적으로 이용한 경우
                        7. 기타 관계법령에 위반된다고 판단되는 경우
                    ⑤ 회사는 본조에 해당하는 행위를 한 회원에게 사전통지 없이 이용을 제한할 수 있습니다.
                    </p>
                </div>
                <div className="term-section">
                    <p className="term-title">제14조 (개인정보의 보호)</p>
                    <p className="term-text">
                    ① 회사는 이용자로부터 정보를 수집할 경우 서비스의 제공 및 계약이행에 필요한 최소한의 정보만을 수집합니다.
                    상세한 내용은 회사 홈페이지에 게시된 “개인정보 처리방침”에 따릅니다.
                    </p>
                </div>
                <div className="term-section">
                    <p className="term-title">제15조 (규정의 게시 및 개정)</p>
                    <p className="term-text">
                    ① 회사는 회사가 정하는 규정의 내용을 회원이 쉽게 알 수 있도록 사이트 초기 화면에 게시합니다.
                    ② 회사는 규정을 개정할 수 있으며, 개정규정은 본 규정 제17조에 따라 공시합니다.
                    ③ 회사는 규정을 개정하는 경우 개정사유 및 시행일자를 명시하여 현행규정과 함께 시행일로부터 최소 7일전에 공지합니다. 단, 회원의 권리 또는 의무에 관한 중요한 규정의 변경은 변경일로부터 30일 전에 본 규정 제17조에 따라 통지합니다.
                    ④ 회사의 본 조 제3항에 따른 개정규정 공지 또는 통지 후 회원이 규정 변경 적용일까지 명시적으로 거부의사를 표명하지 않은 경우 회원이 개정규정에 동의한 것으로 봅니다. 단, 개정규정에 미 동의 회원은 서비스의 이용을 중단하고 회원탈퇴를 할 수 있고, 이 경우 탈퇴한 회원의 적립된 포인트는 즉시 소멸 됩니다.
                    ⑤ 회원은 규정 개정에 대하여 주의의무를 다하여야 하며, 변경된 규정의 부지로 인한 회원의 피해는 회사가 책임지지 않습니다.
                    </p>
                </div>
                <div className="term-section">
                    <p className="term-title">제16조 (지식재산권의 귀속)</p>
                    <p className="term-text">
                    ① 회사가 작성한 저작물에 대한 지식재산권은 회사에 귀속됩니다.
                    은 사이트를 통해 얻은 정보를 가공, 판매하는 행위 또는 서비스에 기재된 자료를 상업적으로 사용할 수 없습니다.
                    </p>
                </div>
                <div className="term-section">
                    <p className="term-title">제17조 (회원에 대한 통지)</p>
                    <p className="term-text">
                    ① 회사가 회원에 대하여 통지하는 경우 회원이 제출한 전자우편, 이동통신 또는 홈페이지 공지로 할 수 있습니다.
                    ② 회사가 불특정다수의 회원에게 통지하는 경우, 사이트 초기화면에 7일 이상 공시함으로써 개별통지에 갈음할 수 있습니다. 다만, 회원 본인의 거래와 관련하여 중대한 영향을 미치는 사항에 대하여는 개별통지를 합니다.
                    ③ 전항의 사유로 통지하는 경우, 부득이한 사정에 의해 사전 공시기간이 감축되거나 생략될 수 있습니다.
                    </p>
                </div>
                <div className="term-section">
                    <p className="term-title">제18조 (분쟁해결)</p>
                    <p className="term-text">
                    ① 회사는 이용자가 제기하는 정당한 의견이나 불만을 반영하고 그 피해를 보상처리하기 위하여 피해보상처리기구를 설치․운영합니다.
                    ② 회사는 이용자로부터 제출되는 불만사항 및 의견은 우선적으로 그 사항을 처리합니다. 다만, 신속한 처리가 곤란한 경우에는 이용자에게 그 사유와 처리일정을 즉시 통보해 드립니다.
                    ③ 회사와 이용자 간에 발생한 전자상거래 분쟁과 관련하여 이용자의 피해구제신청이 있는 경우에는 공정거래위원회 또는 시·도지사가 의뢰하는 분쟁조정기관의 조정에 따를 수 있습니다.
                    </p>
                </div>
                <div className="term-section">
                    <p className="term-title">제19조 (관할 법원)</p>
                    <p className="term-text">
                    ① 회사에서 정하는 규정에서 정하지 않은 사항과 본 규정의 해석은 관계법령 및 상관례에 따릅니다.
                    ② 회사하는 규정과 관련된 모든 분쟁은 제소 당시 이용자의 주소에 의하고, 주소가 없는 경우에는 거소를 관할하는 지방법원의 전속관할로 합니다. 다만, 제소 당시 이용자의 주소 또는 거소가 분명하지 않거나 외국 거주자의 경우에는 민사소송법상의 관할법원에 제기합니다. 동 소송에는 대한민국법을 적용하도록 합니다.
                    </p>
                </div>
                <div className="term-section">
                    <p className="term-title">제20조 (규정의 효력)</p>
                    <p className="term-text">
                    ① 본 규정은 2022년 5월 30일부터 시행합니다.
                    ② 개정규정은 그 개정일로부터 효력이 발생하며 개정된 규정은 그 적용일자 이후에 체결되는 계약에만 적용되고 그 이전에 이미 체결된 계약에 대해서는 개정 전의 규정조항이 그대로 적용됨을 원칙으로 합니다. 다만 이미 계약을 체결한 이용자가 개정약관 조항의 적용을 받기를 원하는 뜻을 개정규정의 효력발생일 전에 회사에 송신하여 회사의 동의를 받은 경우에는 개정규정조항이 적용됩니다. 
                    </p>
                </div>
            </Layout>
        </div>
    );
};

export default TermsOfUse;
