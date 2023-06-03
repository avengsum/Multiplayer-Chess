import React from 'react';
import Choose from './Choose';

const ChooseHome = () => {
  return (
    <div>
      <Choose
        btn1="Login"
        link1="/login"
        btn2="Register"
        link2="/register"
      />
    </div>
  );
};

export default ChooseHome;