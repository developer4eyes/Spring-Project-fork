import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Article from '../components/Article';

const MyPage = () => {
  const [email, setEmail] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [message, setMessage] = useState('');
  const [initialData, setInitialData] = useState({ email: '', phone: '', address: '' }); // 초기 데이터 저장

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('/api/user/profile');          // API 예시주소
        const userData = response.data;
        setEmail(userData.email || '');
        setPhone(userData.phone || '');
        setAddress(userData.address || '');
        // 초기 데이터 설정
        setInitialData({
          email: userData.email || '',
          phone: userData.phone || '',
          address: userData.address || ''
        });
      } catch (error) {
        console.error('프로필 정보를 불러오는데 실패했습니다.', error);
        setMessage('프로필 정보를 불러오는데 실패했습니다.');
      }
    };

    fetchUserData();
  }, []);

  
  const isChanged = () => {
    return email !== initialData.email ||
           phone !== initialData.phone ||
           address !== initialData.address ||
           currentPassword.length > 0 ||
           newPassword.length > 0;
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    try {
      if (currentPassword && newPassword) {
        const passwordValidationResponse = await axios.post('/api/user/validate-password', { password: currentPassword });
        if (passwordValidationResponse.data.isValid) {
          await axios.post('/api/user/change-password', { newPassword });
          setMessage('비밀번호가 성공적으로 변경되었습니다.');
        } else {
          setMessage('현재 비밀번호가 일치하지 않습니다.');
          return;
        }
      }

      await axios.post('/api/user/update', { email, phone, address });
      setMessage('프로필이 성공적으로 업데이트되었습니다.');
    } catch (error) {
      console.error('프로필 업데이트 실패:', error);
      setMessage('프로필 업데이트에 실패했습니다.');
    }
  };

  return (
    <div className="mypage-container">
        <Header></Header>
        <Article title ="마이페이지" body ="회원정보 확인"/>
      <h1>마이페이지</h1>
      <hr/>
      <form onSubmit={handleUpdateProfile}>
        <h3>프로필</h3>
        <div className="form-group">
          <label>이메일:</label>
          이메일 DB 값
          {/* <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /> */}
        </div>
        <div className="form-group">
          {/* <label>기존 비밀번호:</label> */}
          <label>비밀번호:</label>
          비밀번호 DB 값
          {/* <input type="password" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} /> */}
        </div>
        {/* <div className="form-group">
          <label>새 비밀번호:</label>
          <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
        </div> */}
        <div className="form-group">
          <label>핸드폰번호:</label>
          핸드폰번호 DB 값
          {/* <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} /> */}
        </div>
        <div className="form-group">
          <label>주소:</label>
          주소 DB 값
          {/* <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} /> */}
        </div>
        <button type="submit" disabled={!isChanged()}>수정하기</button>
        {message && <p>{message}</p>}
      
      </form>
      <hr />

      <form onSubmit={handleUpdateProfile}>
        <h3>티켓 정보 (버스, if문 : 버스 예약 정보가 있을 경우)</h3>
        <div className="form-group">
          <label>티켓 이름:</label>
          티켓 이름 DB 값
          {/* <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /> */}
        </div>
        <div className="form-group">
          {/* <label>기존 비밀번호:</label> */}
          <label>비밀번호:</label>
          비밀번호 DB 값
          {/* <input type="password" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} /> */}
        </div>
        {/* <div className="form-group">
          <label>새 비밀번호:</label>
          <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
        </div> */}
        <div className="form-group">
          <label>핸드폰번호:</label>
          핸드폰번호 DB 값
          {/* <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} /> */}
        </div>
        <div className="form-group">
          <label>주소:</label>
          주소 DB 값
          {/* <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} /> */}
        </div>
        <button type="submit" disabled={!isChanged()}>수정하기</button>
        {message && <p>{message}</p>}
      
      </form>

      <hr />

      <form onSubmit={handleUpdateProfile}>
        <h3>티켓 정보 (기차, if문 : 기차 예약 정보가 있을 경우)</h3>
        <div className="form-group">
          <label>티켓 이름:</label>
          티켓 이름 DB 값
          {/* <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /> */}
        </div>
        <div className="form-group">
          {/* <label>기존 비밀번호:</label> */}
          <label>비밀번호:</label>
          비밀번호 DB 값
          {/* <input type="password" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} /> */}
        </div>
        {/* <div className="form-group">
          <label>새 비밀번호:</label>
          <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
        </div> */}
        <div className="form-group">
          <label>핸드폰번호:</label>
          핸드폰번호 DB 값
          {/* <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} /> */}
        </div>
        <div className="form-group">
          <label>주소:</label>
          주소 DB 값
          {/* <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} /> */}
        </div>
        <button type="submit" disabled={!isChanged()}>수정하기</button>
        {message && <p>{message}</p>}
      
      </form>

      <hr />

      <form onSubmit={handleUpdateProfile}>
        <h3>티켓 정보 (공항, if문 : 공항 예약 정보가 있을 경우)</h3>
        <div className="form-group">
          <label>티켓 이름:</label>
          티켓 이름 DB 값
          {/* <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /> */}
        </div>
        <div className="form-group">
          {/* <label>기존 비밀번호:</label> */}
          <label>비밀번호:</label>
          비밀번호 DB 값
          {/* <input type="password" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} /> */}
        </div>
        {/* <div className="form-group">
          <label>새 비밀번호:</label>
          <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
        </div> */}
        <div className="form-group">
          <label>핸드폰번호:</label>
          핸드폰번호 DB 값
          {/* <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} /> */}
        </div>
        <div className="form-group">
          <label>주소:</label>
          주소 DB 값
          {/* <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} /> */}
        </div>
        <button type="submit" disabled={!isChanged()}>수정하기</button>
        {message && <p>{message}</p>}
      
      </form>

      <hr />

<form onSubmit={handleUpdateProfile}>
  
  <div className="form-group">
    
  <h3>티켓 정보가 없습니다 (else : 아무 예약 정보가 없을 경우)</h3>
  
  </div>

   

</form>
      
    </div>
  );
};

export default MyPage;